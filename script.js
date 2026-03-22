const logos = Array.from(document.querySelectorAll(".hero-logo.spin-logo"));

if (logos.length > 0) {
  const render = () => {
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
    const ratio = Math.min(1, window.scrollY / maxScroll);
    const rotateY = ratio * 180 - 10.76;
    const rotateX = 4 + ratio * 6;
    logos.forEach((logo, index) => {
      const offset = index * 8;
      logo.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY + offset}deg)`;
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      render();
      ticking = false;
    });
  };

  render();
  window.addEventListener("scroll", onScroll);
}

const promptInput = document.querySelector(".prompt-card .prompt-input");
const dashboardShell = document.querySelector(".dashboard-shell");

if (dashboardShell) {
  dashboardShell.classList.add("is-staged");
}

const revealDashboard = () => {
  if (!dashboardShell) return;
  dashboardShell.classList.remove("is-staged");
  dashboardShell.classList.add("is-revealed");
};

if (promptInput) {
  const typingText = "make me a sales dashboard";
  const typingDelay = 52;
  const cursor = "|";
  let index = 0;

  const typeNextChar = () => {
    if (index < typingText.length) {
      promptInput.textContent = `${typingText.slice(0, index + 1)}${cursor}`;
      index += 1;
      window.setTimeout(typeNextChar, typingDelay);
      return;
    }

    // Keep a subtle blinking cursor after typing completes.
    let showCursor = true;
    window.setInterval(() => {
      showCursor = !showCursor;
      promptInput.textContent = showCursor ? `${typingText}${cursor}` : typingText;
    }, 450);

    // Trigger dashboard reveal after the input typing finishes.
    window.setTimeout(revealDashboard, 180);
  };

  promptInput.textContent = cursor;
  window.setTimeout(typeNextChar, 500);
} else {
  revealDashboard();
}

const heroTags = document.querySelector(".hero-tags");

if (heroTags) {
  const originalItems = Array.from(heroTags.querySelectorAll("span"));
  if (originalItems.length > 0 && !heroTags.querySelector(".hero-tags-track")) {
    const track = document.createElement("div");
    track.className = "hero-tags-track";

    // Lock each item's width to keep the duplicated sequence seamless.
    // Measure every item before moving any: moving siblings changes nth-child() and breaks CSS widths.
    const widths = originalItems.map((item) => item.getBoundingClientRect().width);
    originalItems.forEach((item, i) => {
      item.style.width = `${widths[i]}px`;
      track.appendChild(item);
    });

    const clones = originalItems.map((item) => item.cloneNode(true));
    clones.forEach((clone) => track.appendChild(clone));

    heroTags.appendChild(track);

    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");
    const firstSetWidth = originalItems.reduce((sum, item) => sum + item.getBoundingClientRect().width, 0);
    const loopDistance = firstSetWidth + gap * originalItems.length;
    heroTags.style.setProperty("--hero-tags-loop-distance", `${loopDistance}px`);
  }
}

const problemSection = document.querySelector(".problem");

if (problemSection) {
  const problemBadges = problemSection.querySelector(".wire-tags");
  const clamp01 = (value) => Math.min(1, Math.max(0, value));
  let ticking = false;

  const updateProblemProgress = () => {
    const rect = (problemBadges || problemSection).getBoundingClientRect();
    if (problemBadges) {
      const tagsWidth = Math.ceil(problemBadges.scrollWidth || problemBadges.offsetWidth || 0);
      if (tagsWidth > 0) {
        problemSection.style.setProperty("--problem-wire-width", `${tagsWidth}px`);
      }
    }
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const centerY = rect.top + rect.height / 2;
    const start = viewportHeight * 0.62;
    const end = viewportHeight * 0.22;
    const rawProgress = (start - centerY) / (start - end);
    const progress = clamp01(rawProgress);
    problemSection.style.setProperty("--problem-progress", progress.toFixed(4));
    // Timeline in one container:
    // 1) tags align -> 2) wires appear -> 3) logo -> 4) title/copy/features.
    const wiresProgress = clamp01((progress - 0.2) / 0.26);
    const logoProgress = clamp01((progress - 0.46) / 0.24);
    const copyProgress = clamp01((progress - 0.7) / 0.22);
    problemSection.style.setProperty("--problem-wires-progress", wiresProgress.toFixed(4));
    problemSection.style.setProperty("--problem-logo-progress", logoProgress.toFixed(4));
    problemSection.style.setProperty("--problem-copy-progress", copyProgress.toFixed(4));

    ticking = false;
  };

  const onProblemScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateProblemProgress);
  };

  updateProblemProgress();
  window.addEventListener("scroll", onProblemScroll, { passive: true });
  window.addEventListener("resize", onProblemScroll);
}

const customerSection = document.querySelector(".customers");

if (customerSection) {
  const logoNodes = Array.from(customerSection.querySelectorAll(".cross-logo"));
  const quoteCardImage = customerSection.querySelector(".quote-card img");
  const quoteOverlay = customerSection.querySelector(".quote-overlay");

  const customerStories = [
    {
      company: "Cerisol",
      quote:
        "Typework let us connect ERP and sales data in one place, so our managers can make daily decisions without waiting for reports.",
      author: "Elena Rivera",
      role: "COO, Cerisol",
      background:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    },
    {
      company: "Salesforce Partner Team",
      quote:
        "We rolled out cross-team workflows in weeks. The biggest win was turning fragmented operations into one shared, AI-ready system.",
      author: "Daniel Hart",
      role: "Program Director, Salesforce Partner Team",
      background:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      company: "Antler",
      quote:
        "If I could point to the single most impactful thing we did to change the culture at Airbnb, it would be rolling out incident.io and democratizing incident response.",
      author: "Nils Pommerien",
      role: "Director, Antler",
      background:
        "https://www.figma.com/api/mcp/asset/8c1afcc8-919c-4645-9262-6e91b5022e7d",
    },
    {
      company: "Coda",
      quote:
        "Our finance, inventory, and growth teams now operate from the same source of truth, which dramatically improved execution speed.",
      author: "Lara Kim",
      role: "VP Operations, Coda",
      background:
        "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      company: "Red Geometry",
      quote:
        "Typework helped us standardize processes across three regions and launch new business units with near-zero integration overhead.",
      author: "Marcus Cole",
      role: "Head of Strategy, Red Geometry",
      background:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      company: "Orbit",
      quote:
        "By unifying our full customer journey data, we improved forecasting confidence and reduced time-to-decision for key campaigns.",
      author: "Sophie Tran",
      role: "Growth Lead, Orbit",
      background:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const updateQuoteCard = (index) => {
    const safeIndex = Number.isInteger(index) ? index : 0;
    const story = customerStories[safeIndex] || customerStories[0];

    logoNodes.forEach((node, nodeIndex) => {
      const isActive = nodeIndex === safeIndex;
      node.classList.toggle("is-active", isActive);
      node.setAttribute("aria-pressed", String(isActive));
    });

    if (quoteCardImage) {
      quoteCardImage.src = story.background;
      quoteCardImage.alt = `${story.company} case background`;
    }

    if (quoteOverlay) {
      quoteOverlay.innerHTML = `
        <b>${story.company}</b>
        <p>${story.quote}</p>
        <strong>${story.author}</strong>
        <small>${story.role}</small>
      `;
    }
  };

  logoNodes.forEach((node, index) => {
    node.tabIndex = 0;
    node.setAttribute("role", "button");
    node.setAttribute("aria-label", `查看 ${customerStories[index]?.company || "客户"} 案例`);
    node.addEventListener("click", () => updateQuoteCard(index));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        updateQuoteCard(index);
      }
    });
  });

  updateQuoteCard(2);
}
