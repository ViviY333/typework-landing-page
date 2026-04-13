(() => {
  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Hero video */
  const video = document.querySelector("[data-tw-hero-video]");
  if (video instanceof HTMLVideoElement) {
    const applyMotionPreference = () => {
      if (prefersReducedMotion()) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        const p = video.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {});
        }
      }
    };
    applyMotionPreference();
    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", applyMotionPreference);
  }

  /* Hero title — rotate highlight word */
  const heroRotateWords = ["Business", "Store", "Team", "Retail"];
  const heroRotating = document.querySelector("[data-tw-hero-rotating]");
  if (heroRotating instanceof HTMLElement) {
    const fadeMs = 280;
    const holdMs = 2600;
    let idx = 0;

    const step = () => {
      heroRotating.classList.add("is-fading");
      window.setTimeout(() => {
        idx = (idx + 1) % heroRotateWords.length;
        heroRotating.textContent = heroRotateWords[idx];
        heroRotating.classList.remove("is-fading");
        window.setTimeout(step, holdMs);
      }, fadeMs);
    };

    if (prefersReducedMotion()) {
      heroRotating.textContent = "Business";
    } else {
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
  const fullText =
    "AI will analyze and build your workflow automatically.";

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
        anticipatePin: 1,
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

  /* Features — Forms workflow + nav (2s timeline, replay on enter viewport) */
  const featSection = document.querySelector("[data-tw-features]");
  const featNav = document.querySelector("[data-tw-feat-nav]");
  const featPanels = featSection ? featSection.querySelectorAll("[data-tw-feat-panel]") : [];
  const featStub = document.querySelector("[data-tw-feat-stub]");
  const featTabBtns = featNav ? featNav.querySelectorAll("[data-tw-feature-tab]") : [];

  const getFeatActiveIndex = () => {
    const hit = [...featTabBtns].findIndex((b) => b.classList.contains("is-active"));
    return hit >= 0 ? hit : 0;
  };

  const getFeatPanelByIndex = (idx) =>
    [...featPanels].find((panel) => Number(panel.getAttribute("data-tw-feat-panel")) === idx) || null;

  const restartFeatTimeline = (activePanel) => {
    if (!featNav || !activePanel) return;
    if (prefersReducedMotion()) {
      featNav.classList.add("tw-feat-nav--run");
      activePanel.classList.add("tw-feat-canvas--run");
      return;
    }
    featNav.classList.remove("tw-feat-nav--run");
    [...featPanels].forEach((panel) => panel.classList.remove("tw-feat-canvas--run"));
    void featNav.offsetWidth;
    featNav.classList.add("tw-feat-nav--run");
    activePanel.classList.add("tw-feat-canvas--run");
  };

  const applyFeatTab = (idx) => {
    featTabBtns.forEach((b, i) => {
      const on = i === idx;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-current", on ? "true" : "false");
    });
    const activePanel = getFeatPanelByIndex(idx);
    [...featPanels].forEach((panel) => {
      panel.hidden = panel !== activePanel;
      if (panel !== activePanel) {
        panel.classList.remove("tw-feat-canvas--run");
      }
    });
    if (featStub) featStub.hidden = Boolean(activePanel);
    if (activePanel) {
      restartFeatTimeline(activePanel);
    } else {
      featNav?.classList.remove("tw-feat-nav--run");
      [...featPanels].forEach((panel) => panel.classList.remove("tw-feat-canvas--run"));
    }
  };

  featTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const raw = btn.getAttribute("data-tw-feature-tab");
      const idx = raw ? parseInt(raw, 10) : 0;
      if (Number.isNaN(idx)) return;
      applyFeatTab(idx);
    });
  });

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
      scrub: 1,
      anticipatePin: 1,
      snap: {
        snapTo: [0, 1 / 3, 2 / 3, 1],
        duration: { min: 0.2, max: 0.38 },
        delay: 0,
        ease: "power1.inOut",
      },
      onUpdate: (self) => updateVisuals(self.progress),
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
})();
