/* Shared content and chrome for skills.bflabs.cn. */

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
      ctaBrand: "建设品牌",
      ctaSite: "检查网站",
      catalogTitle: "目录",
      hostsTitle: "宿主",
      compareTitle: "层级",
      installTitle: "安装",
      tier: "层级",
      hosts: "宿主",
      install: "安装",
      prepared: "准备上架",
      viewSkillHub: "在 SkillHub 查看",
      diagnose: "去检查",
      downloadSkill: "下载 Skill",
      rootSkill: "查看说明",
      childSkills: "还可以用",
      close: "关闭",
      mailLabel: "联系",
      legalLeft: "skills.bflabs.cn",
      legalRight: "hello@bflabs.cn",
      compareFreeTitle: "Free",
      compareFree: "自己装，自己跑。先建设品牌，或先检查网站。图也可以拆成提示词。",
      installBrand: "建设品牌",
      installBrandBody: "在 Agent 的 skills 目录中新建 brand-building 文件夹，将下载包解压进去。告诉它品牌、目标市场和这次要完成的事，没有网站也可以开始。",
      installLocal: "本地",
      installHub: "SkillHub",
      installLocalBody: "检查网站：打开检查页，或下载 Skill 放到 Codex、Claude 的 skills 目录。Prism：放到 Codex 或 Grok 的 skills 目录，再运行仓库里的检查。",
      installHubBody: "网站检查 Skill（GEO）已在 SkillHub 上架。打开后检查网站，再把提示词交给自己的 Agent 修复。",
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
      ctaBrand: "Build a brand",
      ctaSite: "Check a website",
      catalogTitle: "Catalog",
      hostsTitle: "Hosts",
      compareTitle: "Tiers",
      installTitle: "Install",
      tier: "Tier",
      hosts: "Hosts",
      install: "Install",
      prepared: "Ready to list",
      viewSkillHub: "View on SkillHub",
      diagnose: "Check a site",
      downloadSkill: "Download Skill",
      rootSkill: "Read the guide",
      childSkills: "Also included",
      close: "Close",
      mailLabel: "Contact",
      legalLeft: "skills.bflabs.cn",
      legalRight: "hello@bflabs.cn",
      compareFreeTitle: "Free",
      compareFree: "Install and run it yourself. Build a brand, or check a website. Pictures can become prompts.",
      installBrand: "Build a brand",
      installBrandBody: "Create brand-building inside your agent’s skills folder and extract the download there. Tell it your brand, market, and current goal. A website is optional.",
      installLocal: "Local",
      installHub: "SkillHub",
      installLocalBody: "Check a website: open the check page, or download the Skill into the Codex or Claude skills folder. Prism: put it in the Codex or Grok skills folder, then run the repo check.",
      installHubBody: "The website-check Skill (GEO) is on SkillHub. Check a site, then give the prompt to your own agent to fix it.",
    },
  },
  brandGuide: {
    zh: {
      title: "建设品牌",
      documentTitle: "建设品牌 · BF Labs Skills",
      meta: "还没有网站也可以建设品牌。从调研、定位、内容、分发到衡量，下载 Skill，让 Agent 帮你开始。",
      eyebrow: "Skills",
      lede: [
        "还没有网站，也可以开始。",
        "先弄清你是谁、对谁说话。",
        "再写内容和页面。",
        "再决定发到哪里、怎么衡量。",
      ],
      pathLabel: "怎么做",
      steps: [
        { name: "调研", body: "弄清你在帮谁、他们要解决什么、市场上已经有谁。" },
        { name: "定位与表达", body: "写下你是谁、不是谁，以及说话的语气和用词。" },
        { name: "内容与网站", body: "把定位写成页面、文章和素材。没有网站就先写这些。" },
        { name: "分发", body: "决定发到哪些地方，让该看见的人看见。" },
        { name: "衡量与迭代", body: "看哪些话被问到、哪些内容有用，再改下一轮。不编造效果。" },
      ],
      siteTitle: "已有网站时",
      siteBody: "可以检查页面找不找得到、读不读得懂、用不用得起来。不承诺排名，也不借用别人的背书。",
      siteCta: "检查网站",
      nextTitle: "下一步",
      nextBody: "告诉 Agent：“请用 brand-building，为我的品牌做一轮研究与建设。目标市场是……，本轮想完成……”。",
      installTitle: "给 Agent 用",
      installBody: "在 Agent 的 skills 目录中新建 brand-building 文件夹，将下载包解压进去，再让 Agent 读取其中的 SKILL.md。",
      catalogCta: "下载 Skill",
    },
    en: {
      title: "Build a brand",
      documentTitle: "Build a brand · BF Labs Skills",
      meta: "Build a brand before you have a website. Research, positioning, content, distribution, and measurement. Download the Skill and start with your agent.",
      eyebrow: "Skills",
      lede: [
        "You can start before you have a website.",
        "First get clear who you are and who you speak to.",
        "Then turn that into content and pages.",
        "Then choose where it goes, and how you will know it is working.",
      ],
      pathLabel: "How it works",
      steps: [
        { name: "Research", body: "Get clear who you help, what they need, and who is already in the market." },
        { name: "Positioning", body: "Write who you are, who you are not, and how you sound." },
        { name: "Content and site", body: "Turn that into pages, articles, and assets. If you have no site yet, write these first." },
        { name: "Distribution", body: "Choose where to publish so the right people can find it." },
        { name: "Measurement", body: "See which questions come up and which pages help, then change the next round. Do not invent results." },
      ],
      siteTitle: "If you have a site",
      siteBody: "You can check whether pages can be found, understood, and used. No ranking promise, and no borrowed endorsements.",
      siteCta: "Check a website",
      nextTitle: "Next",
      nextBody: "Tell your agent: “Use brand-building for my brand. My target market is … and this round should deliver …”.",
      installTitle: "Use it with your agent",
      installBody: "Create brand-building inside your agent’s skills folder, extract the download there, and ask your agent to read its SKILL.md.",
      catalogCta: "Download Skill",
    },
  },
  skills: [
    {
      id: "brand-building",
      aliases: ["brand", "build-a-brand"],
      tier: "Free",
      hosts: ["Codex", "Claude", "Grok"],
      href: "brand-building.html",
      source: "https://github.com/Sunnyender-org/brand-building",
      download: "downloads/brand-building-skillhub-0.1.1.zip",
      name: { zh: "建设品牌", en: "Build a brand" },
      blurb: {
        zh: "还没有网站也可以开始。从调研做到分发。",
        en: "Start before you have a site. From research to distribution.",
      },
      install: {
        zh: "下载并解压到 skills/brand-building，再让 Agent 读取 SKILL.md。",
        en: "Extract into skills/brand-building, then ask your agent to read SKILL.md.",
      },
      cta: { zh: "看怎么开始", en: "See how to start" },
    },
    {
      id: "geo",
      aliases: ["GEO", "check-website", "check-a-website", "readiness"],
      tier: "Free",
      hosts: ["Codex", "Claude", "SkillHub"],
      href: "https://readiness.bflabs.cn/skills/bflabs-agent-readiness",
      diagnose: "https://readiness.bflabs.cn",
      download: "https://readiness.bflabs.cn/downloads/bflabs-agent-readiness-skillhub-0.6.6.zip",
      name: { zh: "检查网站", en: "Check a website" },
      blurb: {
        zh: "免费检查公开网站：找得到、看得懂、用得起来。不承诺排名。",
        en: "Free check of a public site: can it be found, understood, and used. No ranking promise.",
      },
      install: {
        zh: "把使用说明发给你的 Agent，或下载 Skill 自行安装。",
        en: "Send the usage guide to your agent, or download the Skill to install it.",
      },
      cta: { zh: "使用说明", en: "Usage guide" },
      children: [
        {
          id: "geo-discover",
          href: "https://readiness.bflabs.cn/skills/geo-discover",
          name: { zh: "问题发现", en: "Discover questions" },
          blurb: {
            zh: "整理买家会拿去问 AI 的问题，标出还缺证据的地方。",
            en: "Map questions buyers would ask AI, and mark where evidence is still missing.",
          },
        },
        {
          id: "geo-content",
          href: "https://readiness.bflabs.cn/skills/geo-content",
          name: { zh: "证据内容", en: "Evidence content" },
          blurb: {
            zh: "按已有证据写标题、解释、对比和页面结构，不编事实。",
            en: "Write titles, explainers, comparisons, and page structure from evidence. No invented facts.",
          },
        },
        {
          id: "geo-measure",
          href: "https://readiness.bflabs.cn/skills/geo-measure",
          name: { zh: "回答汇总", en: "Answer tally" },
          blurb: {
            zh: "把你提供的 AI 回答汇总成可见度。缺数据就标缺，不编百分比。",
            en: "Tally the AI answers you supply. Missing data stays missing. No invented percentages.",
          },
        },
        {
          id: "seo-plan",
          href: "https://readiness.bflabs.cn/skills/seo-plan",
          name: { zh: "技术 SEO 计划", en: "SEO plan" },
          blurb: {
            zh: "按现有证据列出技术检查。不改网站，也不查排名。",
            en: "List technical checks from the evidence you have. It does not change the site or look up rankings.",
          },
        },
        {
          id: "geo-optimize",
          href: "https://readiness.bflabs.cn/skills/geo-optimize",
          name: { zh: "站点优化", en: "Site optimize" },
          blurb: {
            zh: "在你自己的网站仓库里改公开事实，改完能核对。",
            en: "Change public facts in your own site repo, then verify the change.",
          },
        },
        {
          id: "webmcp-enable",
          href: "https://readiness.bflabs.cn/skills/webmcp-enable",
          name: { zh: "WebMCP", en: "WebMCP" },
          blurb: {
            zh: "让浏览器智能体能在网站上完成你允许的操作。",
            en: "Let a browser agent complete the actions you allow on the site.",
          },
        },
      ],
    },
    {
      id: "prism",
      tier: "Free",
      hosts: ["Codex", "Grok", "WorkBuddy", "SkillHub"],
      name: { zh: "Prism", en: "Prism" },
      blurb: {
        zh: "把参考图拆成类型化视觉合同，再写成生图用的句子，并留下词卡。免费。",
        en: "Turn a reference image into a typed visual contract, write image-model prose, and keep keyword cards. Free.",
      },
      install: {
        zh: "python3 scripts/prism.py check",
        en: "python3 scripts/prism.py check",
      },
    },
  ],
  hosts: [
    {
      id: "codex",
      name: "Codex",
      number: "01",
      state: "ready",
      body: {
        zh: "本地装。建设品牌、检查网站和 Prism 都可以在这里跑。",
        en: "Install locally. Build a brand, check a website, and Prism all run here.",
      },
    },
    {
      id: "claude",
      name: "Claude",
      number: "02",
      state: "ready",
      body: {
        zh: "本地装。建设品牌和检查网站都可以放进 skills 目录。",
        en: "Install locally. Build a brand and check a website both go in the skills folder.",
      },
    },
    {
      id: "grok",
      name: "Grok",
      number: "03",
      state: "ready",
      body: {
        zh: "本地装。建设品牌和 Prism 都可以在这里跑。",
        en: "Install locally. Build a brand and Prism both run here.",
      },
    },
    {
      id: "workbuddy",
      name: "WorkBuddy",
      number: "04",
      state: "ready",
      body: {
        zh: "个人版和企业席位。Prism 可以放进来。",
        en: "Personal and enterprise seats. Prism can run here.",
      },
    },
    {
      id: "skillhub",
      name: "SkillHub",
      number: "05",
      state: "ready",
      body: {
        zh: "检查网站已上架。打开后检查网站、复制提示词，再交给自己的 Agent 修复。",
        en: "Check a website is live. Check a site, copy the prompt, and give it to your own agent to fix.",
      },
    },
    {
      id: "gongfeng",
      name: "Gongfeng",
      number: "06",
      state: "mirror",
      body: {
        zh: "源码镜像，方便国内取代码。",
        en: "Source mirror, for fetching the code in China.",
      },
    },
  ],
  installs: [
    { id: "brand", titleKey: "installBrand", bodyKey: "installBrandBody", href: "brand-building.html", ctaKey: "ctaBrand" },
    { id: "local", titleKey: "installLocal", bodyKey: "installLocalBody", href: "catalog.html", ctaKey: "navCatalog" },
    {
      id: "hub",
      titleKey: "installHub",
      bodyKey: "installHubBody",
      href: "https://skillhub.cn/skills/user_49f8ec71/bflabs-agent-readiness",
      ctaKey: "viewSkillHub",
    },
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

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function padIndex(index) {
  return String(index + 1).padStart(2, "0");
}

function matchesSkill(skill, id) {
  if (skill.id === id) return true;
  if ((skill.aliases || []).includes(id)) return true;
  return (skill.children || []).some((child) => child.id === id);
}

function findSkill(id) {
  return window.BFSkills.skills.find((skill) => matchesSkill(skill, id)) || null;
}

function brandCopy() {
  return window.BFSkills.brandGuide[window.BFSkills.lang] || window.BFSkills.brandGuide.zh;
}

function skillsFor(tier) {
  return window.BFSkills.skills.filter((skill) => !tier || skill.tier === tier);
}

function hostStateLabel(state) {
  if (state === "prepared") return i18n("prepared");
  if (state === "mirror") return window.BFSkills.lang === "zh" ? "源码镜像" : "Source mirror";
  return window.BFSkills.lang === "zh" ? "可用" : "Ready";
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
      const words = line.text.split(/\s+/).map((word) => `<span class="bf-kinetic-heading__word" data-bf-kinetic-word data-active="false">${escapeHtml(word)}</span>`).join(" ");
      return `<span class="bf-kinetic-heading__line${line.tone ? ` bf-kinetic-heading__line--${line.tone}` : ""}">${words}</span>`;
    })
    .join("");
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
          <span class="bf-brand-lockup__tagline">${escapeHtml(i18n("siteName"))}</span>
        </span>
      </a>
      <nav class="sk-nav" aria-label="Skills site">
        <a href="catalog.html"${currentAttr(page, "catalog")}>${escapeHtml(i18n("navCatalog"))}</a>
        <a href="hosts.html"${currentAttr(page, "hosts")}>${escapeHtml(i18n("navHosts"))}</a>
        <a href="tiers.html"${currentAttr(page, "tiers")}>${escapeHtml(i18n("navTiers"))}</a>
        <a href="install.html"${currentAttr(page, "install")}>${escapeHtml(i18n("navInstall"))}</a>
      </nav>
      <div class="sk-tools">
        <a class="sk-exit" href="https://bflabs.cn">${escapeHtml(i18n("navSite"))}</a>
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
          <span>${escapeHtml(i18n("mailLabel"))}</span>
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
          <a href="catalog.html">${escapeHtml(i18n("navCatalog"))}</a>
          <a href="hosts.html">${escapeHtml(i18n("navHosts"))}</a>
          <a href="tiers.html">${escapeHtml(i18n("navTiers"))}</a>
          <a href="install.html">${escapeHtml(i18n("navInstall"))}</a>
          <a href="https://bflabs.cn">bflabs.cn</a>
        </nav>
      </div>
      <div class="sk-footer__legal">
        <span>${escapeHtml(i18n("legalLeft"))}</span>
        <span>${escapeHtml(i18n("legalRight"))}</span>
      </div>`;
  }
}

window.BFSkillsUI = {
  t: i18n,
  skillField,
  escapeHtml,
  padIndex,
  findSkill,
  brandCopy,
  skillsFor,
  hostStateLabel,
  applyI18n,
  setLang,
  bindLang,
  bindKinetic,
  bindReveal,
  kineticLines,
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
