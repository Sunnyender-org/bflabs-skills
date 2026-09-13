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
      ctaPrism: "看看有什么 skills",
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
      rootSkill: "总 skill",
      childSkills: "子 skill",
      close: "关闭",
      mailLabel: "联系",
      legalLeft: "skills.bflabs.cn",
      legalRight: "hello@bflabs.cn",
      compareFreeTitle: "Free",
      compareFree: "自己装，自己跑。网站先检查，图再拆成提示词。",
      installLocal: "本地",
      installHub: "SkillHub",
      installLocalBody: "Prism 放到 Codex 或 Grok 的 skills 目录，再运行仓库里的检查。GEO 先打开诊断站；要装到本地时，放到 Codex 或 Claude 的 skills 目录。",
      installHubBody: "GEO 已在 SkillHub 上架。打开后先检查网站，再把生成的提示词交给自己的 Agent 修复。",
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
      ctaPrism: "See the skills",
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
      rootSkill: "Root skill",
      childSkills: "Child skills",
      close: "Close",
      mailLabel: "Contact",
      legalLeft: "skills.bflabs.cn",
      legalRight: "hello@bflabs.cn",
      compareFreeTitle: "Free",
      compareFree: "Install and run it yourself. Check the site first, then turn pictures into prompts.",
      installLocal: "Local",
      installHub: "SkillHub",
      installLocalBody: "Put Prism in the Codex or Grok skills folder, then run the repo check. For GEO, start at the diagnosis site. To install locally, put it in the Codex or Claude skills folder.",
      installHubBody: "GEO is live on SkillHub. Check a site, then give the generated prompt to your own agent to fix it.",
    },
  },
  skills: [
    {
      id: "geo",
      tier: "Free",
      hosts: ["Codex", "Claude", "SkillHub"],
      href: "https://readiness.bflabs.cn/skills/bflabs-agent-readiness",
      diagnose: "https://readiness.bflabs.cn",
      download: "https://readiness.bflabs.cn/downloads/bflabs-agent-readiness-skillhub-0.6.5.zip",
      name: { zh: "GEO", en: "GEO" },
      blurb: {
        zh: "免费检查公开网站：找得到、看得懂、用得起来。不承诺排名。",
        en: "Free check of a public site: can it be found, understood, and used. No ranking promise.",
      },
      install: {
        zh: "把使用说明发给你的 Agent，或下载 Skill 自行安装。",
        en: "Send the usage guide to your agent, or download the Skill to install it.",
      },
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
        zh: "本地装。GEO 和 Prism 都可以放进来。",
        en: "Install locally. GEO and Prism both run here.",
      },
    },
    {
      id: "claude",
      name: "Claude",
      number: "02",
      state: "ready",
      body: {
        zh: "本地装。GEO 放进 skills 目录即可。",
        en: "Install locally. Put GEO in the skills folder.",
      },
    },
    {
      id: "grok",
      name: "Grok",
      number: "03",
      state: "ready",
      body: {
        zh: "本地装。Prism 在这里跑。",
        en: "Install locally. Prism runs here.",
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
        zh: "GEO 已上架。检查网站、复制提示词，再交给自己的 Agent 修复。",
        en: "GEO is live. Check a site, copy the prompt, and give it to your own agent to fix.",
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

function findSkill(id) {
  const top = window.BFSkills.skills.find((skill) => skill.id === id);
  if (top) return top;
  return window.BFSkills.skills.find((skill) => (skill.children || []).some((child) => child.id === id)) || null;
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
