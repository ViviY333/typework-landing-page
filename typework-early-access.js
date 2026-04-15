(() => {
  const languageStorageKey = "tw-language";

  const STR = {
    en: {
      pageTitle: "Claim your credits — typework",
      heroTitle: "Ready to outcompete?",
      heroSubtitle: "60 seconds · 1,000 credits · Zero risk",
      labelName: "Name",
      phName: "Your name",
      labelEmail: "Email",
      phEmail: "you@company.com",
      labelSource: "How should we find your business?",
      optWebsite: "Website URL",
      optInstagram: "Instagram profile",
      optLinkedin: "LinkedIn profile",
      optProfile: "Any business profile",
      labelAutomate: "What do you want to automate? (optional)",
      phAutomate: "e.g. lead follow-ups, social media, invoicing…",
      cta: "Claim your 1000 credits",
      footerNote: "We verify your business, then send credits within 48 hours.",
      successTitle: "You’re on the list",
      successBody: "Thanks — we’ll verify your business and email you within 48 hours.",
      langToggleSr: "Switch language",
      langToggleAria: "Switch language",
    },
    zh: {
      pageTitle: "领取积分 — typework",
      heroTitle: "准备好超越对手了吗？",
      heroSubtitle: "60 秒 · 1,000 积分 · 零风险",
      labelName: "姓名",
      phName: "您的姓名",
      labelEmail: "邮箱",
      phEmail: "name@company.com",
      labelSource: "我们如何找到你的企业？",
      optWebsite: "网站 URL",
      optInstagram: "Instagram 主页",
      optLinkedin: "LinkedIn 主页",
      optProfile: "任意公开商业主页",
      labelAutomate: "你想自动化什么？（可选）",
      phAutomate: "例如：线索跟进、社媒运营、开票对账…",
      cta: "领取 1000 积分",
      footerNote: "我们会核实你的企业，并在 48 小时内发放积分。",
      successTitle: "已加入名单",
      successBody: "感谢提交 — 我们将在 48 小时内完成核实并发送邮件。",
      langToggleSr: "切换语言",
      langToggleAria: "切换语言",
    },
  };

  const SOURCE = {
    en: {
      website: {
        label: "Website URL",
        placeholder: "https://yourbusiness.com",
        autocomplete: "url",
      },
      instagram: {
        label: "Instagram profile",
        placeholder: "https://instagram.com/yourbusiness",
        autocomplete: "url",
      },
      linkedin: {
        label: "LinkedIn profile",
        placeholder: "https://linkedin.com/in/your-profile",
        autocomplete: "url",
      },
      profile: {
        label: "Business profile URL",
        placeholder: "Link to Yelp, Google Business, or any public profile",
        autocomplete: "url",
      },
    },
    zh: {
      website: {
        label: "网站 URL",
        placeholder: "https://你的企业.com",
        autocomplete: "url",
      },
      instagram: {
        label: "Instagram 主页",
        placeholder: "https://instagram.com/你的账号",
        autocomplete: "url",
      },
      linkedin: {
        label: "LinkedIn 主页",
        placeholder: "https://linkedin.com/in/你的档案",
        autocomplete: "url",
      },
      profile: {
        label: "商业主页链接",
        placeholder: "Yelp、谷歌商户等公开主页链接",
        autocomplete: "url",
      },
    },
  };

  const form = document.querySelector("[data-tw-ea-form]");
  const success = document.querySelector("[data-tw-ea-success]");
  const formWrap = document.querySelector("[data-tw-ea-form-wrap]");
  const sourceSelect = document.querySelector("[data-tw-ea-source]");
  const urlLabel = document.querySelector("[data-tw-ea-url-label]");
  const urlInput = document.querySelector("[data-tw-ea-url]");
  const emailInput = document.querySelector("#tw-ea-email");
  const langBtn = document.querySelector("[data-tw-ea-lang-toggle]");
  const langSr = document.querySelector("[data-tw-ea-lang-label]");
  const submitBtn = document.querySelector("[data-tw-ea-submit]");

  let activeLanguage = "en";

  const applySource = () => {
    if (!(sourceSelect instanceof HTMLSelectElement) || !urlLabel || !(urlInput instanceof HTMLInputElement)) {
      return;
    }
    const lang = activeLanguage === "zh" ? "zh" : "en";
    const key = sourceSelect.value;
    const cfg = SOURCE[lang][key];
    if (!cfg) return;
    urlLabel.textContent = cfg.label;
    urlInput.placeholder = cfg.placeholder;
    urlInput.autocomplete = cfg.autocomplete;
  };

  const applyLanguage = () => {
    const lang = activeLanguage === "zh" ? "zh" : "en";
    const t = STR[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = t.pageTitle;

    document.querySelectorAll("[data-tw-ea-msg]").forEach((el) => {
      const key = el.getAttribute("data-tw-ea-msg");
      if (key && t[key]) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll("[data-tw-ea-opt]").forEach((opt) => {
      const key = opt.getAttribute("data-tw-ea-opt");
      if (key && t[key]) {
        opt.textContent = t[key];
      }
    });

    const nameEl = document.querySelector("#tw-ea-name");
    const emailEl = document.querySelector("#tw-ea-email");
    const automateEl = document.querySelector("#tw-ea-automate");
    if (nameEl instanceof HTMLInputElement) nameEl.placeholder = t.phName;
    if (emailEl instanceof HTMLInputElement) emailEl.placeholder = t.phEmail;
    if (automateEl instanceof HTMLTextAreaElement) automateEl.placeholder = t.phAutomate;

    if (langBtn instanceof HTMLButtonElement) {
      langBtn.setAttribute("aria-label", t.langToggleAria);
    }
    if (langSr) {
      langSr.textContent = t.langToggleSr;
    }

    if (submitBtn instanceof HTMLButtonElement) {
      submitBtn.setAttribute("aria-label", t.cta);
    }

    applySource();
  };

  const stored = window.localStorage.getItem(languageStorageKey);
  if (stored === "zh" || stored === "en") {
    activeLanguage = stored;
  }

  if (langBtn instanceof HTMLButtonElement) {
    langBtn.addEventListener("click", () => {
      activeLanguage = activeLanguage === "zh" ? "en" : "zh";
      window.localStorage.setItem(languageStorageKey, activeLanguage);
      applyLanguage();
    });
  }

  applyLanguage();

  if (sourceSelect) {
    sourceSelect.addEventListener("change", applySource);
  }

  const params = new URLSearchParams(window.location.search);
  const prefilled = params.get("email");
  if (emailInput instanceof HTMLInputElement && prefilled) {
    emailInput.value = prefilled;
  }

  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.disabled = true;
      }
      if (formWrap) formWrap.classList.add("is-hidden");
      if (success) success.classList.add("is-visible");
    });
  }
})();
