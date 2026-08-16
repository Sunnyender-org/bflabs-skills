/* Shared content + motion for the three Skills direction drafts.
   Copy is identical across versions. Layout is not. */

window.BFSkills = {
  lang: "zh",
  copy: {
    zh: {
      navCatalog: "目录",
      navHosts: "宿主",
      navTiers: "层级",
      navInstall: "安装",
      navSite: "官网",
      siteName: "Skills",
      hostName: "skills.bflabs.cn",
      heroEyebrow: "skills.bflabs.cn",
      heroLine1: "技能与插件",
      heroLine2: "给真正干活的智能体。",
      heroSub: "",
      ctaPrism: "看看有什么 skills",
      ctaSite: "官网",
      catalogIndex: "01",
      catalogLabel: "目录",
      catalogTitle: "目录",
      catalogSummary: "",
      hostsIndex: "02",
      hostsLabel: "宿主",
      hostsTitle: "宿主",
      hostsSummary: "",
      compareIndex: "03",
      compareLabel: "层级",
      compareTitle: "层级",
      compareSummary: "",
      filterAll: "全部",
      filterFree: "Free",
      filterEnt: "Enterprise",
      searchPh: "按名字或宿主找 skill",
      tier: "层级",
      hosts: "宿主",
      install: "安装",
      bound: "边界",
      prepared: "准备上架",
      talk: "官网",
      mailLabel: "联系",
      footerTitle: "联系",
      legalLeft: "skills.bflabs.cn",
      legalMid: "",
      legalRight: "hello@bflabs.cn",
      indexNote: "",
      compareFree: "Prism",
      compareEnt: "共享库 · 品牌锁 · MCP · 审计",
      close: "关闭",
      installTitle: "安装",
      installSummary: "",
      installLocal: "本地",
      installHub: "SkillHub",
      installEnt: "企业",
      installLocalBody: "python3 scripts/prism.py check",
      installHubBody: "准备上架",
      installEntBody: "WorkBuddy 企业席位",
      hostCodex: "本地",
      hostGrok: "本地",
      hostWb: "个人版 · 企业席位",
      hostHub: "准备上架",
      hostGit: "源码镜像",
    },
    en: {
      navCatalog: "Catalog",
      navHosts: "Hosts",
      navTiers: "Tiers",
      navInstall: "Install",
      navSite: "Site",
      siteName: "Skills",
      hostName: "skills.bflabs.cn",
      heroEyebrow: "skills.bflabs.cn",
      heroLine1: "Skills and plugins",
      heroLine2: "for agents that do real work.",
      heroSub: "",
      ctaPrism: "See the skills",
      ctaSite: "Site",
      catalogIndex: "01",
      catalogLabel: "Catalog",
      catalogTitle: "Catalog",
      catalogSummary: "",
      hostsIndex: "02",
      hostsLabel: "Hosts",
      hostsTitle: "Hosts",
      hostsSummary: "",
      compareIndex: "03",
      compareLabel: "Tiers",
      compareTitle: "Tiers",
      compareSummary: "",
      filterAll: "All",
      filterFree: "Free",
      filterEnt: "Enterprise",
      searchPh: "Find a skill by name or host",
      tier: "Tier",
      hosts: "Hosts",
      install: "Install",
      bound: "Boundary",
      prepared: "Ready to list",
      talk: "Site",
      mailLabel: "Contact",
      footerTitle: "Contact",
      legalLeft: "skills.bflabs.cn",
      legalMid: "",
      legalRight: "hello@bflabs.cn",
      indexNote: "",
      compareFree: "Prism",
      compareEnt: "Shared vault · Brand lock · MCP · Audit",
      close: "Close",
      installTitle: "Install",
      installSummary: "",
      installLocal: "Local",
      installHub: "SkillHub",
      installEnt: "Enterprise",
      installLocalBody: "python3 scripts/prism.py check",
      installHubBody: "Ready to list",
      installEntBody: "WorkBuddy enterprise seat",
      hostCodex: "Local",
      hostGrok: "Local",
      hostWb: "Personal · Enterprise",
      hostHub: "Ready to list",
      hostGit: "Source mirror",
    },
  },
  skills: [
    {
      id: "prism",
      letter: "P",
      tier: "Free",
      hosts: ["Codex", "Grok", "WorkBuddy", "SkillHub"],
      name: { zh: "Prism / 棱镜", en: "Prism" },
      blurb: {
        zh: "把参考图拆成类型化视觉合同，再编译成 GPT Image 用的自然语言，并沉淀词卡。免费。",
        en: "Turn a reference image into a typed visual contract, compile it into GPT Image prose, and keep keyword cards. Free.",
      },
      install: {
        zh: "python3 scripts/prism.py check",
        en: "python3 scripts/prism.py check",
      },
      extra: {
        zh: "",
        en: "",
      },
    },
    {
      id: "shared-vault",
      letter: "S",
      tier: "Enterprise",
      hosts: ["WorkBuddy"],
      name: { zh: "Shared Vault", en: "Shared Vault" },
      blurb: {
        zh: "公司级词卡、色卡与提示词库。部门共用，权限与审计一起交付。",
        en: "Company keyword, palette, and prompt vault. Shared by department, shipped with permission and audit.",
      },
      install: {
        zh: "需 BF Labs 定制的 WorkBuddy 企业席位。",
        en: "Requires a BF Labs custom WorkBuddy enterprise seat.",
      },
      extra: {
        zh: "",
        en: "",
      },
    },
    {
      id: "brand-lock",
      letter: "B",
      tier: "Enterprise",
      hosts: ["WorkBuddy"],
      name: { zh: "Brand Lock", en: "Brand Lock" },
      blurb: {
        zh: "官方色、禁用词、已批准版式。员工只能用通过的视觉合同。",
        en: "Official colors, banned words, approved layouts. Staff can only use cleared visual contracts.",
      },
      install: {
        zh: "随企业实施包开启。",
        en: "Enabled with the enterprise implementation pack.",
      },
      extra: {
        zh: "对接客户自己的素材规范。",
        en: "Maps onto the customer's own brand rules.",
      },
    },
    {
      id: "ops-mcp",
      letter: "O",
      tier: "Enterprise",
      hosts: ["WorkBuddy"],
      name: { zh: "Ops MCP", en: "Ops MCP" },
      blurb: {
        zh: "接到飞书知识库、素材盘或业务系统。拆图结果写回企业流程。",
        en: "Connect Feishu knowledge, asset disks, or business systems. Write deconstruction results back into the workflow.",
      },
      install: {
        zh: "实施时按客户系统接线。",
        en: "Wired during implementation against the customer system.",
      },
      extra: {
        zh: "禁止连接未授权的生产写接口。",
        en: "Do not connect unauthorized production write interfaces.",
      },
    },
  ],
  hosts: [
    { id: "codex", name: "Codex", number: "01", key: "hostCodex", state: "ready" },
    { id: "grok", name: "Grok", number: "02", key: "hostGrok", state: "ready" },
    { id: "workbuddy", name: "WorkBuddy", number: "03", key: "hostWb", state: "ready" },
    { id: "skillhub", name: "SkillHub", number: "04", key: "hostHub", state: "prepared" },
    { id: "gongfeng", name: "Gongfeng", number: "05", key: "hostGit", state: "mirror" },
  ],
};

(() => {
function i18n(key) {
  const lang = window.BFSkills.lang;
  return window.BFSkills.copy[lang][key] || key;
}

function skillField(skill, key) {
  const value = skill[key];
  if (value && typeof value === "object" && ("zh" in value || "en" in value)) {
    return value[window.BFSkills.lang];
  }
  return value;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = i18n(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", i18n(node.dataset.i18nPlaceholder));
  });
  document.documentElement.lang = window.BFSkills.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll(".sk-lang button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === window.BFSkills.lang));
  });
  window.dispatchEvent(new CustomEvent("bf-lang"));
}

function setLang(lang) {
  window.BFSkills.lang = lang === "en" ? "en" : "zh";
  paintChrome();
  applyI18n();
}

function bindLang() {
  document.querySelectorAll(".sk-lang button").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang));
  });
}

function bindKinetic() {
  document.querySelectorAll("[data-kinetic]").forEach((root) => {
    const words = [...root.querySelectorAll("[data-bf-kinetic-word]")];
    const radius = 230;
    let frame = null;
    const pointer = { x: 0, y: 0 };

    const reset = () => {
      words.forEach((word) => {
        word.dataset.active = "false";
        word.style.removeProperty("--bf-word-scale");
        word.style.removeProperty("--bf-word-shift");
        word.style.removeProperty("--bf-word-opacity");
      });
    };

    const update = () => {
      const distances = words.map((word) => {
        const box = word.getBoundingClientRect();
        return Math.hypot(pointer.x - (box.left + box.width / 2), pointer.y - (box.top + box.height / 2));
      });
      const closest = Math.min(...distances);
      if (closest > radius) {
        reset();
        return;
      }
      words.forEach((word, index) => {
        const active = distances[index] === closest;
        const pressure = Math.max(0, 1 - distances[index] / radius);
        word.dataset.active = String(active);
        word.style.setProperty("--bf-word-scale", active ? "1.035" : "1");
        word.style.setProperty("--bf-word-shift", active ? "0.45rem" : "0");
        word.style.setProperty("--bf-word-opacity", active ? "1" : Math.max(0.7, 1 - pressure * 0.3).toFixed(3));
      });
    };

    root.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (frame === null) {
        frame = requestAnimationFrame(() => {
          update();
          frame = null;
        });
      }
    });
    root.addEventListener("pointerleave", reset);
  });
}

function bindReveal() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
      });
    },
    { threshold: 0.16 },
  );
  nodes.forEach((node) => io.observe(node));
}

function kineticLines(lines) {
  return lines
    .map((line) => {
      const words = line.text.split(/\s+/).map((word) => `<span class="bf-kinetic-heading__word" data-bf-kinetic-word data-active="false">${word}</span>`).join(" ");
      return `<span class="bf-kinetic-heading__line${line.tone ? ` bf-kinetic-heading__line--${line.tone}` : ""}">${words}</span>`;
    })
    .join("");
}

function arrowSvg(className) {
  return `<svg class="${className || "sk-arrow"}" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 7l5 5-5 5"/></svg>`;
}

function currentAttr(page, name) {
  return page === name ? ' aria-current="page"' : "";
}

function paintChrome() {
  renderChrome(window.BFSkills.chrome || {});
  bindLang();
}

function renderChrome({ page, assetRoot = "assets" } = {}) {
  const mark = `${assetRoot}/bflabs-ui/bf-mark.svg`;
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) {
    header.innerHTML = `
      <a class="bf-brand-lockup" href="index.html">
        <img class="bf-brand-mark" src="${mark}" alt="" />
        <span class="bf-brand-lockup__copy">
          <span class="bf-brand-lockup__name">BF LABS</span>
          <span class="bf-brand-lockup__tagline">${i18n("siteName")}</span>
        </span>
      </a>
      <nav class="sk-nav" aria-label="Skills site">
        <a href="catalog.html"${currentAttr(page, "catalog")}>${i18n("navCatalog")}</a>
      </nav>
      <div class="sk-tools">
        <a class="sk-exit" href="https://bflabs.cn">${i18n("navSite")}</a>
        <div class="sk-lang" aria-label="Language">
          <button type="button" data-lang="en"${window.BFSkills.lang === "en" ? ' aria-pressed="true"' : ""}>EN</button>
          <span>/</span>
          <button type="button" data-lang="zh"${window.BFSkills.lang === "zh" ? ' aria-pressed="true"' : ""}>中文</button>
        </div>
      </div>`;
  }
  if (footer) {
    footer.innerHTML = `
      <div class="sk-footer__contact">
        <a class="sk-footer__mail" href="mailto:hello@bflabs.cn">
          <span>${i18n("mailLabel")}</span>
          <strong>hello@bflabs.cn</strong>
          <svg viewBox="0 0 24 24"><path d="M5 12h13M14 7l5 5-5 5"/></svg>
        </a>
      </div>
      <div class="sk-footer__bar">
        <a class="bf-brand-lockup" href="https://bflabs.cn">
          <img class="bf-brand-mark" src="${mark}" alt="" />
          <span class="bf-brand-lockup__copy">
            <span class="bf-brand-lockup__name">BF LABS</span>
            <span class="bf-brand-lockup__tagline">Build Forward with AI Agents</span>
          </span>
        </a>
        <nav class="sk-footer__meta">
          <a href="index.html">Home</a>
          <a href="catalog.html">${i18n("navCatalog")}</a>
          <a href="https://bflabs.cn">bflabs.cn</a>
        </nav>
      </div>
      <div class="sk-footer__legal">
        <span>${i18n("legalLeft")}</span>
        <span>${i18n("legalRight")}</span>
      </div>`;
  }
}

window.BFSkillsUI = {
  t: i18n,
  skillField,
  applyI18n,
  setLang,
  bindLang,
  bindKinetic,
  bindReveal,
  kineticLines,
  arrowSvg,
  renderChrome,
  paintChrome,
  boot(options = {}) {
    window.BFSkills.chrome = options;
    paintChrome();
    applyI18n();
    bindKinetic();
    bindReveal();
  },
};
})();
