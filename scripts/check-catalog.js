#!/usr/bin/env node
/* Lightweight catalog/link/asset check. No framework. */

const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");
const root = path.join(__dirname, "..");
const errors = [];

function fail(message) {
  errors.push(message);
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function htmlFiles() {
  return fs.readdirSync(root).filter((name) => name.endsWith(".html"));
}

function loadSkills() {
  const context = {
    window: {},
    document: {
      getElementById() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      documentElement: { lang: "" },
      addEventListener() {},
    },
    CustomEvent: class CustomEvent {},
    requestAnimationFrame() {},
    IntersectionObserver: class {
      observe() {}
    },
  };
  vm.runInNewContext(read("assets/skills-kit.js"), context);
  if (!context.window.BFSkills || !context.window.BFSkillsUI) {
    fail("assets/skills-kit.js did not expose BFSkills / BFSkillsUI");
    return null;
  }
  return context.window;
}

function localRefs(source, rel) {
  const refs = [];
  const pattern = /\b(?:href|src)=["']([^"']+)["']/g;
  let match;
  while ((match = pattern.exec(source))) {
    const value = match[1];
    if (!value || value.startsWith("#") || value.startsWith("mailto:") || value.startsWith("data:")) continue;
    if (value.includes("${") || value.includes("{")) continue;
    if (/^[a-z][a-z0-9+.-]*:/i.test(value)) continue;
    refs.push({ from: rel, value: value.split("#")[0].split("?")[0] });
  }
  return refs;
}

function checkFiles() {
  const pages = htmlFiles();
  const sitemap = read("sitemap.xml");
  const deploy = read("scripts/deploy.sh");
  const kit = read("assets/skills-kit.js");

  if (!pages.includes("brand-building.html")) fail("brand-building.html is missing");
  if (!sitemap.includes("https://skills.bflabs.cn/brand-building.html")) {
    fail("sitemap.xml is missing brand-building.html");
  }
  if (!deploy.includes("brand-building.html")) fail("scripts/deploy.sh does not stage brand-building.html");

  for (const page of pages) {
    if (page === "404.html") continue;
    const loc = page === "index.html" ? "https://skills.bflabs.cn/" : `https://skills.bflabs.cn/${page}`;
    if (!sitemap.includes(loc)) fail(`sitemap.xml is missing ${loc}`);
    if (page !== "index.html" && !deploy.includes(page)) fail(`scripts/deploy.sh does not stage ${page}`);
  }

  if (/\b0\.7\.0\b/.test(kit)) fail("skills-kit.js must not claim 0.7.0");
  if (!kit.includes("bflabs-agent-readiness-skillhub-0.6.6.zip")) {
    fail("GEO download must remain the verified 0.6.6 package");
  }

  for (const page of pages) {
    for (const ref of localRefs(read(page), page)) {
      if (!exists(ref.value)) fail(`${ref.from} points at missing ${ref.value}`);
    }
  }
  for (const ref of localRefs(read("assets/skills-kit.js"), "assets/skills-kit.js")) {
    if (!exists(ref.value)) fail(`assets/skills-kit.js points at missing ${ref.value}`);
  }
}

function checkCatalog(win) {
  if (!win) return;
  const { BFSkills, BFSkillsUI } = win;
  const ids = BFSkills.skills.map((skill) => skill.id);
  if (new Set(ids).size !== ids.length) fail("catalog skill ids are not unique");
  if (ids[0] !== "brand-building") fail("first catalog job must be brand-building");
  if (ids[1] !== "geo") fail("second catalog job must keep id geo");
  if (!ids.includes("prism")) fail("Prism must stay in the catalog");

  const brand = BFSkillsUI.findSkill("brand-building");
  const brandAlias = BFSkillsUI.findSkill("build-a-brand");
  const geo = BFSkillsUI.findSkill("geo");
  const geoAlias = BFSkillsUI.findSkill("GEO");
  const geoChild = BFSkillsUI.findSkill("geo-discover");
  if (!brand || brand !== brandAlias) fail("brand-building aliases do not resolve");
  if (!geo || geo !== geoAlias || geo !== geoChild) fail("geo deeplink aliases do not resolve");
  if (brand.download !== "downloads/brand-building-skillhub-0.1.1.zip" || brand.diagnose || brand.href !== "brand-building.html") {
    fail("brand-building guide/download targets drifted");
  }
  if (Array.isArray(brand.children) && brand.children.length) {
    fail("brand-building must not force child skills");
  }
  if (!geo.download || !geo.download.includes("0.6.6")) fail("geo download must stay on 0.6.6");
  if (geo.diagnose !== "https://readiness.bflabs.cn") fail("geo diagnose link changed");
  if (!BFSkills.brandGuide.zh.title || !BFSkills.brandGuide.en.title) fail("brand guide copy is missing");
}

function fetchPage(port, page) {
  return new Promise((resolve, reject) => {
    const req = http.get({ hostname: "127.0.0.1", port, path: `/${page}` }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => resolve({ page, status: res.statusCode, body }));
    });
    req.on("error", reject);
  });
}

async function checkHttp() {
  const pages = htmlFiles().filter((page) => page !== "404.html");
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const rel = urlPath === "/" ? "index.html" : urlPath.replace(/^\//, "");
    const file = path.normalize(path.join(root, rel));
    if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(fs.readFileSync(file));
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = server.address().port;
  try {
    const results = await Promise.all(pages.map((page) => fetchPage(port, page)));
    for (const result of results) {
      if (result.status !== 200) fail(`HTTP ${result.status} for ${result.page}`);
    }
    const home = results.find((item) => item.page === "index.html");
    const brand = results.find((item) => item.page === "brand-building.html");
    if (home && !home.body.includes("brand-building.html")) fail("index.html does not link the brand guide");
    if (brand && !brand.body.includes('name="description"')) fail("brand-building.html is missing description meta");
  } finally {
    server.close();
  }
}

async function main() {
  checkFiles();
  checkCatalog(loadSkills());
  const receipt = JSON.parse(read("downloads/brand-building.json"));
  const archive = path.join(root, "downloads", receipt.filename);
  if (path.dirname(archive) !== path.join(root, "downloads")) fail("invalid download filename");
  const digest = crypto.createHash("sha256").update(fs.readFileSync(archive)).digest("hex");
  if (digest !== receipt.sha256) fail("brand-building download hash mismatch");
  await checkHttp();
  if (errors.length) {
    for (const error of errors) console.error(`check-catalog: ${error}`);
    process.exit(1);
  }
  console.log("check-catalog: ok");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
