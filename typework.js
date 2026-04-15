(() => {
  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const languageStorageKey = "tw-language";
  const languageButtons = document.querySelectorAll("[data-tw-lang-toggle]");
  const heroPromptByLang = {
    en: "AI will analyze and build your workflow automatically.",
    zh: "AI 将自动分析并搭建你的业务工作流。",
  };
  const heroRotatingWordsByLang = {
    en: ["Business", "Store", "Team", "Retail"],
    zh: ["生意", "门店", "团队", "零售"],
  };
  const zhTextMap = new Map([
    ["Industries", "行业"],
    ["Why Typework", "为什么选择 Typework"],
    ["How it works", "如何运作"],
    ["Features", "功能"],
    ["FAQ", "常见问题"],
    ["Log in", "登录"],
    ["Get Started Free", "免费开始"],
    ["Menu", "菜单"],
    ["Build your", "构建你的"],
    ["AI System", "AI 系统"],
    ["typework enable everyone to do it.", "typework 让每个人都能做到。"],
    ["your email address", "输入邮箱地址"],
    ["Get Early Access", "抢先体验"],
    ["Email", "邮箱"],
    ["Advanced", "先进"],
    ["AI Models", "AI 模型"],
    ["Multi-Format", "多格式"],
    ["File Support", "文件支持"],
    ["Fast", "快速"],
    ["Setup in 5 minutes", "5 分钟完成设置"],
    ["Read your files", "读取你的文件"],
    ["Understand workflows", "理解业务流程"],
    ["Build your system", "搭建你的系统"],
    ["Go Live Everywhere", "全渠道上线"],
    ["See How Our Clients Use Typework", "看看客户如何使用 Typework"],
    [
      "Real businesses across the supply chain — from sourcing to delivery — are automating their operations with AI agents.",
      "从采购到交付，供应链上的真实企业都在用 AI 智能体自动化运营流程。",
    ],
    ["“Rush hours no longer break our workflow.”", "“高峰时段不再打乱我们的运营节奏。”"],
    [
      "Typework connected bookings, prep, staffing, and delivery data into one live view.",
      "Typework 将预订、备餐、排班和配送数据连接成统一实时视图。",
    ],
    ["Table turnover at peak", "高峰翻台率"],
    ["“Coach scheduling is finally predictable.”", "“教练排班终于变得可预测了。”"],
    [
      "Attendance, PT sessions, shifts, and renewal alerts now run in one operating rhythm.",
      "出勤、私教课程、班次和续费提醒已在同一节奏下协同运行。",
    ],
    ["Manual scheduling time", "手动排班耗时"],
    ["“Nurses don’t jump across three tools anymore.”", "“护士再也不用在三个工具之间来回切换。”"],
    [
      "Appointments, diagnostics, follow-ups, and billing now flow through one shared process.",
      "预约、诊断、随访和收费都在同一条流程里顺畅流转。",
    ],
    ["Average patient wait time", "平均患者等待时长"],
    ["“Launch days no longer overwhelm ops.”", "“活动上线日不再压垮运营团队。”"],
    [
      "Campaigns, orders, stock, and support tickets stay synced from one command layer.",
      "营销活动、订单、库存和工单都在统一控制层保持同步。",
    ],
    ["Campaign conversion rate", "活动转化率"],
    ["“Our team finally works from one funnel.”", "“我们的团队终于围绕一个统一漏斗协作。”"],
    [
      "Leads, tours, follow-ups, and closings are now tracked as one continuous pipeline.",
      "线索、带看、跟进和成交如今在同一条连续管道中追踪。",
    ],
    ["Lead-to-tour conversion", "线索到带看转化率"],
    ["Trusted by 10,000 business worldwide", "已获全球 10,000+ 企业信赖"],
    [
      "Your Business Doesn’t Need 10 Software Tools. It Needs One AI Platform.",
      "你的业务不需要 10 套软件工具，只需要一个 AI 平台。",
    ],
    ["AI sees your whole business", "AI 看见你的全业务链路"],
    [
      "Not just your CRM or spreadsheets. Typework connects customers, inventory, production, and finance — so decisions are made with the full picture.",
      "不止是 CRM 或表格。Typework 连接客户、库存、生产和财务，让每次决策都基于完整全局视图。",
    ],
    ["Every Client Makes It Smarter", "每一位客户都让平台更聪明"],
    [
      "The scheduling system built for a gym works for a salon. The billing flow for a clinic works for a law firm. Every business we serve makes the platform more powerful for the next one.",
      "为健身房打造的排班系统同样适用于沙龙，为诊所打造的计费流程也能服务律所。每一家客户都会让平台对下一家更强大。",
    ],
    ["Real Business, Not Just Software", "真实业务驱动，而不只是软件工具"],
    [
      "We don’t sell tools. Your workflows train the AI, turning your operational knowledge into a system that gets smarter every day.",
      "我们不只卖工具。你的业务流程会持续训练 AI，把运营经验沉淀成每天都更聪明的系统。",
    ],
    ["Everything Your Business Needs. All in One Place.", "业务所需的一切，集中在一个平台里。"],
    [
      "Replace multiple fragmented tools with Typework — the AI platform designed to connect your teams, data, and customers in one workflow.",
      "用 Typework 替换零散工具。它是一体化 AI 平台，把团队、数据和客户连接进同一工作流。",
    ],
    ["Forms", "表单"],
    ["HR", "人力资源"],
    ["Finances", "财务"],
    [
      "Smart, simplified Excel with AI. Collect, store, and manage any operational data.",
      "AI 驱动的智能简化表格，用于采集、存储并管理各类运营数据。",
    ],
    ["Hiring, scheduling, and payroll signals — unified for people operations.", "招聘、排班和薪资信号统一协同，服务人力运营。"],
    [
      "Invoicing, expense tracking, payroll calculations, and financial reporting— all handled by AI that understands your numbers.",
      "开票、费用追踪、薪资计算和财务报告都由懂你数据的 AI 统一处理。",
    ],
    ["Legal", "法务"],
    ["Contracts, approvals, and audit trails with structured records.", "合同、审批与审计轨迹统一结构化沉淀。"],
    ["Sales & Support", "销售与支持"],
    ["Inbox, CRM, and fulfillment — one thread from lead to delivery.", "从线索到交付，消息、CRM 与履约一条线打通。"],
    ["Marketing", "营销"],
    ["Campaigns, attribution, and assets — orchestrated with operational data.", "活动、归因与素材统一编排，并与运营数据联动。"],
    ["Have questions? We have answers", "有问题？我们有答案"],
    ["Do I need any technical skills?", "我需要技术背景才能使用吗？"],
    [
      "No. Typework is built for operators: connect files, describe your workflow in plain language, and the platform proposes automations you can approve in minutes.",
      "不需要。Typework 为业务团队而生：接入文件、用自然语言描述流程，平台会快速给出可审批的自动化方案。",
    ],
    ["Is my business data safe?", "我的业务数据安全吗？"],
    [
      "Yes. Data is encrypted in transit and at rest, with role-based access and clear retention controls. You choose what each agent can read or write.",
      "是的。数据在传输和存储阶段都经过加密，并支持基于角色的访问控制与留存策略。你可精细控制每个智能体的读写权限。",
    ],
    ["What happens when the AI can’t handle something?", "当 AI 无法处理某个场景时怎么办？"],
    [
      "Workflows escalate to your team with full context. Typework keeps humans in the loop for approvals, exceptions, and anything that needs judgment.",
      "流程会携带完整上下文升级到你的团队。Typework 让关键审批、异常处理和判断决策始终有人在环。",
    ],
    ["How long does setup take?", "部署需要多久？"],
    [
      "Most teams connect core files and ship a first workflow within a day. Deeper ERP or warehouse integrations may take longer depending on your stack.",
      "大多数团队可在一天内接入核心文件并上线首个流程；更深层 ERP 或仓储系统集成会根据现有技术栈略有差异。",
    ],
    ["Can the AI speak my customers’ language?", "AI 能使用我的客户语言沟通吗？"],
    [
      "Yes. Multilingual prompts and customer-facing messages are supported so your agents can match your markets.",
      "可以。平台支持多语言提示词与面向客户的消息，让智能体匹配你的目标市场。",
    ],
    ["What if I already use Shopify, QuickBooks, etc.?", "如果我已经在用 Shopify、QuickBooks 等工具怎么办？"],
    [
      "Typework connects to common tools and files so you don’t rip-and-replace overnight. Start with uploads and APIs, then expand as you grow.",
      "Typework 可连接常见工具和文件，无需一次性替换原系统。你可以先从上传与 API 开始，再逐步扩展。",
    ],
    ["AI-native ERP for teams that ship.", "为高执行力团队打造的 AI 原生 ERP。"],
    ["Company", "公司"],
    ["Home", "首页"],
    ["Follow us", "关注我们"],
    ["LinkedIn", "领英"],
    ["© 2026 typework. All rights reserved.", "© 2026 typework。保留所有权利。"],
    ["All rights reserved.", "保留所有权利。"],
    ["Cookie settings", "Cookie 设置"],
    ["Privacy", "隐私政策"],
    ["Terms", "服务条款"],
  ]);
  const textNodeOriginal = new WeakMap();
  const getStoredLanguage = () => {
    const stored = window.localStorage.getItem(languageStorageKey);
    if (stored === "zh" || stored === "en") return stored;
    return "en";
  };
  let activeLanguage = getStoredLanguage();
  let syncHeroPromptLanguage = () => {};
  let syncHeroRotatorLanguage = () => {};

  const normalizeText = (value) => value.replace(/\s+/g, " ").trim();
  const replaceTextNodesByLanguage = (lang) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.tagName === "SCRIPT" || parent.tagName === "STYLE") {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    let currentNode = walker.nextNode();
    while (currentNode) {
      if (!textNodeOriginal.has(currentNode)) {
        textNodeOriginal.set(currentNode, currentNode.nodeValue);
      }
      const sourceText = textNodeOriginal.get(currentNode) || currentNode.nodeValue;
      if (lang === "en") {
        currentNode.nodeValue = sourceText;
      } else {
        const sourceTrimmed = normalizeText(sourceText);
        const translated = zhTextMap.get(sourceTrimmed);
        if (translated) {
          const leadingWhitespace = sourceText.match(/^\s*/)?.[0] || "";
          const trailingWhitespace = sourceText.match(/\s*$/)?.[0] || "";
          currentNode.nodeValue = `${leadingWhitespace}${translated}${trailingWhitespace}`;
        } else {
          currentNode.nodeValue = sourceText;
        }
      }
      currentNode = walker.nextNode();
    }
  };
  const updateLanguageButtons = (lang) => {
    languageButtons.forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) return;
      const nextAriaLabel = lang === "en" ? "切换到中文" : "Switch to English";
      button.setAttribute("aria-label", nextAriaLabel);
      const srLabel = button.querySelector("[data-tw-lang-label]");
      if (srLabel) {
        srLabel.textContent = nextAriaLabel;
      }
    });
  };
  const applyLanguage = (lang, options = { syncPrompt: true }) => {
    activeLanguage = lang === "zh" ? "zh" : "en";
    document.documentElement.lang = activeLanguage === "zh" ? "zh-CN" : "en";
    document.title =
      activeLanguage === "zh"
        ? "typework — 构建你的企业 AI 系统"
        : "typework — Build Your Business AI System";
    replaceTextNodesByLanguage(activeLanguage);
    updateLanguageButtons(activeLanguage);
    if (options.syncPrompt) {
      syncHeroPromptLanguage(activeLanguage);
    }
    syncHeroRotatorLanguage(activeLanguage);
    window.localStorage.setItem(languageStorageKey, activeLanguage);
  };

  const heroForm = document.querySelector("[data-tw-hero-form]");
  if (heroForm instanceof HTMLFormElement) {
    heroForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  /* Hero background video + case loop video — respect reduced motion */
  const applyVideoMotionPreference = (video) => {
    if (!(video instanceof HTMLVideoElement)) return;
    const apply = () => {
      if (prefersReducedMotion()) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        video.setAttribute("autoplay", "");
        const p = video.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {});
        }
      }
    };
    apply();
    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", apply);
  };

  document.querySelectorAll("[data-tw-hero-video], [data-tw-hero-case-video]").forEach((el) => {
    applyVideoMotionPreference(el);
  });

  /* Hero title — rotate highlight word */
  const heroRotating = document.querySelector("[data-tw-hero-rotating]");
  if (heroRotating instanceof HTMLElement) {
    const fadeMs = 280;
    const holdMs = 2600;
    let idx = 0;
    let heroRotateWords = heroRotatingWordsByLang[activeLanguage];

    const setCurrentWord = () => {
      heroRotateWords = heroRotatingWordsByLang[activeLanguage];
      idx = idx % heroRotateWords.length;
      heroRotating.textContent = heroRotateWords[idx];
    };

    const step = () => {
      heroRotating.classList.add("is-fading");
      window.setTimeout(() => {
        heroRotateWords = heroRotatingWordsByLang[activeLanguage];
        idx = (idx + 1) % heroRotateWords.length;
        heroRotating.textContent = heroRotateWords[idx];
        heroRotating.classList.remove("is-fading");
        window.setTimeout(step, holdMs);
      }, fadeMs);
    };

    syncHeroRotatorLanguage = (lang) => {
      activeLanguage = lang;
      idx = 0;
      setCurrentWord();
    };

    if (prefersReducedMotion()) {
      setCurrentWord();
    } else {
      setCurrentWord();
      window.setTimeout(step, holdMs);
    }
  }

  /* Smooth anchor navigation + close mobile menu */
  const anchors = document.querySelectorAll("a[data-tw-anchor]");
  const navPanel = document.querySelector("[data-tw-nav-panel]");
  const navToggle = document.querySelector("[data-tw-nav-toggle]");

  const closeNav = () => {
    if (!navPanel || !navToggle) return;
    navPanel.hidden = true;
    navToggle.setAttribute("aria-expanded", "false");
  };

  anchors.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      closeNav();
      target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      if (history.replaceState) {
        history.replaceState(null, "", href);
      }
    });
  });

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const open = navPanel.hidden;
      navPanel.hidden = !open;
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* Prompt typing (subtle) */
  const promptEl = document.querySelector("[data-tw-prompt]");
  const caretEl = document.querySelector("[data-tw-caret]");
  const fullText = heroPromptByLang[activeLanguage];

  syncHeroPromptLanguage = (lang) => {
    activeLanguage = lang;
    if (promptEl && caretEl) {
      promptEl.replaceChildren(document.createTextNode(heroPromptByLang[activeLanguage]), caretEl);
    }
  };

  if (promptEl && caretEl && !prefersReducedMotion()) {
    let i = 0;
    const tick = () => {
      if (i <= fullText.length) {
        const textNode = document.createTextNode(fullText.slice(0, i));
        promptEl.replaceChildren(textNode, caretEl);
        i += 1;
        window.setTimeout(tick, 28);
      } else {
        promptEl.replaceChildren(document.createTextNode(fullText), caretEl);
      }
    };
    window.setTimeout(tick, 400);
  } else if (promptEl && caretEl) {
    promptEl.replaceChildren(document.createTextNode(fullText), caretEl);
  }

  languageButtons.forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;
    button.addEventListener("click", () => {
      const nextLanguage = activeLanguage === "en" ? "zh" : "en";
      applyLanguage(nextLanguage);
    });
  });
  applyLanguage(activeLanguage, { syncPrompt: false });

  /* Hero models card marquee (left-scrolling rows) */
  if (!prefersReducedMotion()) {
    const modelRows = document.querySelectorAll(".tw-hero-card--models .tw-model-chips-row");
    modelRows.forEach((row, index) => {
      if (!(row instanceof HTMLElement) || row.dataset.twMarqueeReady === "true") return;
      const chips = Array.from(row.children);
      if (!chips.length) return;
      chips.forEach((chip) => {
        row.appendChild(chip.cloneNode(true));
      });
      row.dataset.twMarqueeReady = "true";
      row.classList.add("is-marquee");
      row.style.setProperty("--tw-marquee-duration", index === 0 ? "20s" : "24s");
    });
  }

  /* Industries horizontal accordion */
  const industriesRoot = document.querySelector("[data-tw-industries]");
  const industriesDots = document.querySelector("[data-tw-industries-dots]");
  if (industriesRoot && industriesDots) {
    const industriesSection = industriesRoot.closest(".tw-industries");
    const panels = Array.from(industriesRoot.querySelectorAll("[data-tw-industry-panel]"));
    let activeIndex = Number(industriesRoot.getAttribute("data-tw-active-index")) || 0;
    let touchStartX = 0;
    let pinTrigger = null;
    let resizeTimer = 0;

    panels.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "tw-industries__dot";
      dot.dataset.twDotIndex = String(i);
      industriesDots.appendChild(dot);
    });
    const dots = Array.from(industriesDots.querySelectorAll(".tw-industries__dot"));

    const isDesktopAccordion = () => window.matchMedia("(min-width: 900px)").matches;
    const clamp = (i) => Math.min(Math.max(i, 0), panels.length - 1);
    const canUseScrollTrigger = () =>
      Boolean(window.gsap && window.ScrollTrigger && industriesSection && isDesktopAccordion() && !prefersReducedMotion());

    const setActivePanel = (nextIndex, options = { fromUser: false }) => {
      activeIndex = clamp(nextIndex);
      industriesRoot.setAttribute("data-tw-active-index", String(activeIndex));
      panels.forEach((panel, index) => {
        const isActive = index === activeIndex;
        panel.classList.toggle("is-active", isActive);
        panel.setAttribute("aria-current", isActive ? "true" : "false");
      });
      dots.forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));

      if (options.fromUser && !isDesktopAccordion()) {
        panels[activeIndex].scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    };

    const moveBy = (step, options = { fromUser: false }) => {
      const nextIndex = (activeIndex + step + panels.length) % panels.length;
      setActivePanel(nextIndex, options);
    };

    const setupPinnedScroll = () => {
      if (pinTrigger) {
        pinTrigger.kill();
        pinTrigger = null;
      }
      if (!canUseScrollTrigger()) return;
      window.gsap.registerPlugin(window.ScrollTrigger);
      const totalSteps = Math.max(panels.length - 1, 1);
      pinTrigger = window.ScrollTrigger.create({
        trigger: industriesSection,
        start: "top top",
        end: `+=${totalSteps * 620}`,
        pin: true,
        scrub: 1,
        anticipatePin: 0,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        pinType: "fixed",
        zIndex: 1,
        onUpdate: (self) => {
          const indexFromScroll = Math.round(self.progress * totalSteps);
          setActivePanel(indexFromScroll);
        },
      });
      window.ScrollTrigger.refresh();
    };

    setActivePanel(activeIndex);
    setupPinnedScroll();

    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(setupPinnedScroll, 150);
    });

    industriesRoot.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        moveBy(1, { fromUser: true });
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        moveBy(-1, { fromUser: true });
      }
    });

    panels.forEach((panel, index) => {
      panel.addEventListener("click", () => setActivePanel(index, { fromUser: true }));
    });

    industriesRoot.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0]?.clientX || 0;
    });
    industriesRoot.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0]?.clientX || 0;
      const deltaX = endX - touchStartX;
      if (Math.abs(deltaX) < 30) return;
      moveBy(deltaX < 0 ? 1 : -1, { fromUser: true });
    });
  }

  /* FAQ accordion */
  const faqRoot = document.querySelector("[data-tw-faq]");
  if (faqRoot) {
    faqRoot.querySelectorAll(".tw-faq-item").forEach((item) => {
      const trigger = item.querySelector("[data-tw-faq-trigger]");
      const panel = item.querySelector("[data-tw-faq-panel]");
      if (!(trigger instanceof HTMLButtonElement) || !panel) return;

      trigger.addEventListener("click", () => {
        const wasOpen = item.classList.contains("is-open");
        faqRoot.querySelectorAll(".tw-faq-item").forEach((other) => {
          const t = other.querySelector("[data-tw-faq-trigger]");
          const p = other.querySelector("[data-tw-faq-panel]");
          if (!(t instanceof HTMLButtonElement) || !p) return;
          other.classList.remove("is-open");
          t.setAttribute("aria-expanded", "false");
          p.hidden = true;
        });
        if (!wasOpen) {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
          panel.hidden = false;
        }
      });
    });
  }

  /* Features — Forms workflow + nav (progress ~5s + auto-advance; replay on enter viewport) */
  const featSection = document.querySelector("[data-tw-features]");
  const featNav = document.querySelector("[data-tw-feat-nav]");
  const featPanels = featSection ? featSection.querySelectorAll("[data-tw-feat-panel]") : [];
  const featStub = document.querySelector("[data-tw-feat-stub]");
  const featTabBtns = featNav ? featNav.querySelectorAll("[data-tw-feature-tab]") : [];
  const featAutoAdvanceMs = 5000;
  let featAutoTimer = 0;

  const getFeatActiveIndex = () => {
    const hit = [...featTabBtns].findIndex((b) => b.classList.contains("is-active"));
    return hit >= 0 ? hit : 0;
  };

  const getFeatPanelByIndex = (idx) =>
    [...featPanels].find((panel) => Number(panel.getAttribute("data-tw-feat-panel")) === idx) || null;

  const restartFeatTimeline = (activePanel) => {
    if (!featNav) return;
    if (prefersReducedMotion()) {
      featNav.classList.add("tw-feat-nav--run");
      if (activePanel) {
        activePanel.classList.add("tw-feat-canvas--run");
      }
      return;
    }
    featNav.classList.remove("tw-feat-nav--run");
    [...featPanels].forEach((panel) => panel.classList.remove("tw-feat-canvas--run"));
    void featNav.offsetWidth;
    featNav.classList.add("tw-feat-nav--run");
    if (activePanel) {
      activePanel.classList.add("tw-feat-canvas--run");
    }
  };

  const clearFeatAutoTimer = () => {
    if (featAutoTimer) {
      window.clearTimeout(featAutoTimer);
      featAutoTimer = 0;
    }
  };

  const scheduleFeatAutoAdvance = () => {
    clearFeatAutoTimer();
    if (featTabBtns.length < 2) return;
    featAutoTimer = window.setTimeout(() => {
      const next = (getFeatActiveIndex() + 1) % featTabBtns.length;
      applyFeatTab(next);
    }, featAutoAdvanceMs);
  };

  const applyFeatTab = (idx) => {
    featTabBtns.forEach((b, i) => {
      const on = i === idx;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-current", on ? "true" : "false");
    });
    const activePanel = getFeatPanelByIndex(idx);
    [...featPanels].forEach((panel) => {
      const on = panel === activePanel;
      panel.hidden = !on;
      panel.classList.toggle("is-active", on);
      panel.setAttribute("aria-hidden", on ? "false" : "true");
      // Fallback for engines where [hidden] can be overridden by author CSS.
      panel.style.display = on ? "" : "none";
      if (!on) {
        panel.classList.remove("tw-feat-canvas--run");
      }
    });
    if (featStub) featStub.hidden = Boolean(activePanel);
    restartFeatTimeline(activePanel);
    scheduleFeatAutoAdvance();
  };

  featTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const raw = btn.getAttribute("data-tw-feature-tab");
      const idx = raw ? parseInt(raw, 10) : 0;
      if (Number.isNaN(idx)) return;
      applyFeatTab(idx);
    });
  });

  if (featTabBtns.length > 0) {
    featTabBtns.forEach((btn) => {
      const raw = btn.getAttribute("data-tw-feature-tab");
      if (!raw) return;
      const panel = getFeatPanelByIndex(parseInt(raw, 10));
      if (!panel) return;
      const panelId = `tw-feat-panel-${raw}`;
      panel.id = panelId;
      btn.setAttribute("aria-controls", panelId);
    });
    applyFeatTab(getFeatActiveIndex());
  }

  if (featSection && featNav && featPanels.length > 0 && !prefersReducedMotion()) {
    let prevIn = false;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        const inView = Boolean(e.isIntersecting && e.intersectionRatio > 0.18);
        const activePanel = getFeatPanelByIndex(getFeatActiveIndex());
        if (inView && !prevIn && activePanel) {
          restartFeatTimeline(activePanel);
        }
        prevIn = inView;
      },
      { threshold: [0, 0.18, 0.35] }
    );
    io.observe(featSection);
  }

  /* Why Typework — pinned scroll + 3D band + card highlights */
  const whyShowcase = document.querySelector("[data-tw-why-showcase]");
  let whyScrollTrigger = null;
  let whyResizeTimer = 0;

  const resetWhyStatic = () => {
    if (!whyShowcase) return;
    const cards = whyShowcase.querySelectorAll("[data-tw-why-card]");
    cards.forEach((card, i) => {
      const active = i === 0;
      card.classList.toggle("is-active", active);
      card.setAttribute("aria-current", active ? "true" : "false");
      card.style.opacity = "";
      card.style.transform = "";
    });
    const whyVideo = whyShowcase.querySelector("[data-tw-why-video]");
    if (whyVideo instanceof HTMLVideoElement) {
      whyVideo.pause();
      whyVideo.currentTime = 0;
    }
  };

  const setupWhyShowcase = () => {
    if (whyScrollTrigger) {
      whyScrollTrigger.kill();
      whyScrollTrigger = null;
    }
    if (!whyShowcase || !window.gsap || !window.ScrollTrigger) return;
    if (prefersReducedMotion()) {
      resetWhyStatic();
      return;
    }
    if (!window.matchMedia("(min-width: 900px)").matches) {
      resetWhyStatic();
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);

    const cards = Array.from(whyShowcase.querySelectorAll("[data-tw-why-card]"));
    const whyVideo = whyShowcase.querySelector("[data-tw-why-video]");
    const revealStarts = [0, 1 / 3, 2 / 3];
    const revealSpan = 0.22;

    const setActiveIndex = (activeIndex) => {
      cards.forEach((card, i) => {
        const on = i === activeIndex;
        card.classList.toggle("is-active", on);
        card.setAttribute("aria-current", on ? "true" : "false");
      });
    };

    const updateVisuals = (progress) => {
      const p = Math.min(1, Math.max(0, progress));
      let activeIndex = 0;
      if (p < 1 / 3) activeIndex = 0;
      else if (p < 2 / 3) activeIndex = 1;
      else activeIndex = 2;
      setActiveIndex(activeIndex);

      if (whyVideo instanceof HTMLVideoElement) {
        const d = whyVideo.duration;
        if (Number.isFinite(d) && d > 0) {
          const t = Math.min(Math.max(p * d, 0), d - 0.001);
          if (Math.abs(whyVideo.currentTime - t) > 0.008) {
            whyVideo.currentTime = t;
          }
        }
      }

      cards.forEach((card, i) => {
        const start = revealStarts[i] ?? 0;
        const local = Math.min(1, Math.max(0, (p - start) / revealSpan));
        const eased = window.gsap.parseEase("power2.out")(local);
        const fromX = i === 2 ? 36 : 0;
        const fromY = 22;
        const x = (1 - eased) * fromX;
        const y = (1 - eased) * fromY;
        const opacity = 0.12 + 0.88 * eased;
        window.gsap.set(card, { x, y, opacity });
      });
    };

    whyScrollTrigger = window.ScrollTrigger.create({
      trigger: whyShowcase,
      start: "top top",
      end: "+=300%",
      pin: true,
      pinType: "fixed",
      scrub: 1,
      anticipatePin: 0,
      fastScrollEnd: true,
      invalidateOnRefresh: true,
      zIndex: 1,
      snap: {
        snapTo: [0, 1 / 3, 2 / 3, 1],
        duration: { min: 0.2, max: 0.38 },
        delay: 0,
        ease: "power1.inOut",
      },
      onUpdate: (self) => updateVisuals(self.progress),
      onLeaveBack: () => {
        updateVisuals(0);
      },
    });

    if (whyVideo instanceof HTMLVideoElement) {
      const syncAfterMeta = () => {
        window.ScrollTrigger.refresh();
        if (whyScrollTrigger) {
          updateVisuals(whyScrollTrigger.progress);
        }
      };
      if (whyVideo.readyState >= 1) {
        syncAfterMeta();
      } else {
        whyVideo.addEventListener("loadedmetadata", syncAfterMeta, { once: true });
      }
    }

    updateVisuals(0);
    window.ScrollTrigger.refresh();
  };

  setupWhyShowcase();

  window.addEventListener("resize", () => {
    window.clearTimeout(whyResizeTimer);
    whyResizeTimer = window.setTimeout(setupWhyShowcase, 180);
  });

  /* Help center — floating trigger + chat panel */
  const helpCenter = document.querySelector("[data-tw-help-center]");
  const helpToggle = document.querySelector("[data-tw-help-toggle]");
  const helpPanel = document.querySelector("[data-tw-help-panel]");
  const helpClose = document.querySelector("[data-tw-help-close]");

  if (helpCenter && helpToggle instanceof HTMLButtonElement && helpPanel) {
    const setHelpOpen = (open) => {
      helpPanel.hidden = !open;
      helpToggle.setAttribute("aria-expanded", String(open));
    };

    helpToggle.addEventListener("click", () => {
      const nextOpen = helpPanel.hidden;
      setHelpOpen(nextOpen);
    });

    if (helpClose instanceof HTMLButtonElement) {
      helpClose.addEventListener("click", () => setHelpOpen(false));
    }

    document.addEventListener("click", (event) => {
      if (helpPanel.hidden) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!helpCenter.contains(target)) {
        setHelpOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !helpPanel.hidden) {
        setHelpOpen(false);
      }
    });
  }

  window.addEventListener("load", () => {
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  });
})();
