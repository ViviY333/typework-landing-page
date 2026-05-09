const FIGMA_ASSETS = {
  detailBg: "https://www.figma.com/api/mcp/asset/5548e7c9-d067-4ffd-b825-20ec412e6b3f",
  talkMaxIcon: "https://www.figma.com/api/mcp/asset/8e79b750-5195-4c27-a467-356a39c94afd"
};

const LOCAL_FALLBACK = {
  detailBg: "file:///Users/yangyang/.cursor/projects/Users-yangyang-Downloads-mountex-typework-dashboard-evolves/assets/image-4b2bfb9e-3d12-4ca6-8d90-df4e6017c467.png",
  talkMaxIcon: "https://www.figma.com/api/mcp/asset/8e79b750-5195-4c27-a467-356a39c94afd"
};

const INDUSTRIES = [
  {
    id: "ecommerce-retail",
    name: "E-commerce & Retail",
    aliases: ["retail", "ecommerce", "e-commerce", "shop"],
    useCases: [
      {
        tag: "Use case 1",
        title: "Bulk Listing Copy Ops",
        desc: "Upload SKU specs and photos, then let type work draft channel-ready product copy.",
        preview: {
          title: "Top SKU alert: Cheese +6% sales this week.",
          body: "Type work has drafted optimized listing copy for 24 pending SKUs based on product specs and sales trend signals.",
          chips: ["Review draft copy", "Check stock impact"]
        }
      },
      {
        tag: "Use case 2",
        title: "Cross-Channel Catalog Sync",
        desc: "Type work rewrites one product update for marketplace, social and website formats.",
        preview: {
          title: "Catalog sync complete across web + social + marketplace.",
          body: "Type work transformed one source update into channel-specific formats and flagged title-length issues automatically.",
          chips: ["View channel diff", "Publish synced update"]
        }
      },
      {
        tag: "Use case 3",
        title: "Promotion Creative Sprint",
        desc: "Launch flash-sale banners and email angles faster with segmented campaign variants.",
        preview: {
          title: "Flash-sale creatives generated in 2 minutes.",
          body: "Type work produced segmented copy variants for new shoppers, VIP buyers and cart-abandoners in one campaign set.",
          chips: ["Open campaign set", "A/B test first batch"]
        }
      },
      {
        tag: "Use case 4",
        title: "Repeat-Buyer Reactivation",
        desc: "Type work finds lapsed buyers and drafts personalized comeback messages from purchase history.",
        preview: {
          title: "128 lapsed buyers ready for comeback flow.",
          body: "Type work grouped dormant customers by category preference and drafted personalized recovery messages with offers.",
          chips: ["Preview message flow", "Launch reactivation"]
        }
      },
      {
        tag: "Use case 5",
        title: "Review-to-FAQ Automation",
        desc: "Turn comments and support chats into clear FAQs so shoppers get answers before checkout.",
        preview: {
          title: "New FAQ pack built from support chat logs.",
          body: "Type work converted repeated questions into concise FAQ answers and mapped each one to matching product pages.",
          chips: ["Open FAQ draft", "Apply to product pages"]
        }
      }
    ]
  },
  { id: "health-wellness", name: "Health & wellness", aliases: ["health", "wellness", "fitness", "gym"], useCases: ["Turn class schedule changes into instant member notifications.", "Generate trainer follow-up summaries after each session.", "Build nutrition and recovery suggestions from member profiles.", "Create campaign copy for membership renewal offers.", "Auto-draft customer support replies for common wellness questions."] },
  { id: "beauty-personal-care", name: "Beauty & Personal Care", aliases: ["beauty", "salon", "spa", "personal care"], useCases: ["Draft treatment descriptions for menus and social posts quickly.", "Create personalized post-visit care messages for each customer.", "Auto-generate package recommendations by customer preference history.", "Prepare campaign copy for seasonal promotions and gift bundles.", "Summarize customer reviews into action points for service improvement."] },
  { id: "travel-hospitality", name: "Travel & Hospitality", aliases: ["travel", "hotel", "hospitality", "tour"], useCases: ["Generate destination guides and itinerary snippets by traveler segment.", "Draft multilingual guest messages for check-in, upsell and support.", "Convert booking notes into quick CRM summaries for staff handover.", "Create campaign copy for weekend, holiday and loyalty offers.", "Build FAQ response templates from past guest enquiries."] },
  { id: "food-beverage", name: "Food & Beverage", aliases: ["food", "beverage", "f&b", "restaurant"], useCases: ["Generate menu highlight copy from dish name and ingredients.", "Draft social post variants for daily specials and combos.", "Turn review trends into weekly improvement action cards.", "Create repeat-customer reactivation messages with tailored offers.", "Produce staff-ready product scripts for upsell and add-ons."] },
  { id: "manufacturing", name: "Manufacturing", aliases: ["factory", "manufacturing", "industrial"], useCases: ["Transform product specs into clear channel-ready descriptions.", "Draft supplier communication messages based on order changes.", "Generate quality issue summaries for internal operations sync.", "Create training snippets from process documentation updates.", "Auto-build client update reports from production status data."] },
  { id: "logistics-supply-chain", name: "Logistics & Supply Chain", aliases: ["logistics", "supply chain", "warehouse", "delivery"], useCases: ["Generate delivery update messages by shipment milestone.", "Draft warehouse instruction cards for picking and packing teams.", "Build customer-facing delay notices with context-aware tone.", "Summarize route exceptions and convert into action checklists.", "Create multilingual support replies for shipment tracking questions."] },
  { id: "professional-services", name: "Professional services", aliases: ["consulting", "legal", "agency", "professional"], useCases: ["Turn meeting notes into concise client-ready recaps instantly.", "Draft proposal outlines from brief keywords and scope details.", "Generate follow-up workflows for lead qualification and nurture.", "Create onboarding templates for recurring service packages.", "Summarize communication history into handoff cards for teams."] },
  { id: "clinic-healthcare", name: "Clinic&Healthcare", aliases: ["clinic", "healthcare", "medical", "hospital"], useCases: ["Draft intake summary text from forms before consultation.", "Generate appointment reminder messages in multiple tones.", "Build care-follow-up instructions from treatment records.", "Create FAQ response scripts for high-frequency patient questions.", "Summarize day-end patient interactions for operations review."] },
  { id: "technology-saas", name: "Technology saas", aliases: ["technology", "saas", "software", "tech"], useCases: ["Transform feature notes into release-ready product copy quickly.", "Generate in-app tooltip and guide content by user segment.", "Draft churn-prevention campaign messages using usage signals.", "Create support response templates for frequent issue patterns.", "Summarize onboarding events into activation progress cards."] },
  { id: "financial-service", name: "Financial service", aliases: ["financial", "finance", "banking", "insurance"], useCases: ["Draft customer onboarding messages with compliance-safe wording.", "Generate product explanation cards from policy details.", "Create follow-up scripts for advisor outreach by customer stage.", "Summarize consultation notes into next-step action briefs.", "Build campaign copy variants for segmented financial audiences."] },
  { id: "automotive-repair", name: "Automitive& repari", aliases: ["automotive", "repair", "garage", "vehicle"], useCases: ["Generate service report summaries after maintenance check.", "Draft customer update messages for repair timeline changes.", "Create package recommendation copy from vehicle history data.", "Build retention reminders for periodic service intervals.", "Turn technician notes into easy-to-read customer explanations."] },
  { id: "education-training", name: "Education traning", aliases: ["education", "training", "school", "academy"], useCases: ["Convert course highlights into compelling enrollment copy.", "Draft student follow-up messages from learning progress logs.", "Generate class update notices for learners and guardians.", "Create FAQ scripts from repetitive admission enquiries.", "Summarize trainer feedback into actionable coaching cards."] },
  { id: "construction-trades", name: "Construction &Trades", aliases: ["construction", "trades", "contractor", "building"], useCases: ["Generate project status updates from field notes quickly.", "Draft client communication messages for milestone changes.", "Create safety reminder copy for daily team coordination.", "Summarize issue reports into task-ready action items.", "Build progress recap cards for stakeholder review meetings."] },
  { id: "agriculture-farming", name: "Agriculture&Farming", aliases: ["agriculture", "farming", "farm", "crop"], useCases: ["Turn crop and product data into market-facing descriptions.", "Draft buyer update messages from harvest status changes.", "Generate seasonal campaign content for produce promotions.", "Summarize field logs into operation action cards.", "Create FAQ response templates for distribution partners."] }
];

const INDUSTRY_CONFIG = window.LANDING_PAGE_INDUSTRY_CONFIG || {};
const EXTRA_DROPDOWN_INDUSTRIES = INDUSTRY_CONFIG.EXTRA_DROPDOWN_INDUSTRIES || [];

const ALL_DROPDOWN_INDUSTRIES = [...INDUSTRIES];
for (const extra of EXTRA_DROPDOWN_INDUSTRIES) {
  if (!ALL_DROPDOWN_INDUSTRIES.some((item) => item.id === extra.id)) {
    ALL_DROPDOWN_INDUSTRIES.push({
      id: extra.id,
      name: extra.name,
      aliases: extra.aliases,
      useCases: INDUSTRIES[0].useCases
    });
  }
}

const state = {
  open: false,
  query: "",
  focused: -1,
  selectedId: "ecommerce-retail",
  selectedUseCaseIndex: 0
};

const heroScreen = document.getElementById("heroScreen");
const detailScreen = document.getElementById("detailScreen");
const searchBox = document.getElementById("searchBox");
const input = document.getElementById("industryInput");
const optionsEl = document.getElementById("industryOptions");
const toggleBtn = document.getElementById("toggleBtn");
const cardsGrid = document.getElementById("cardsGrid");
const cardsIndustry = document.getElementById("cardsIndustry");
const cardsBackBtn = document.getElementById("cardsBack");
const detailBgEl = document.getElementById("detailBg");
const talkMaxIconEl = document.getElementById("talkMaxIcon");
const chatOverlayEl = document.getElementById("chatOverlay");
const previewTitleEl = document.getElementById("previewTitle");
const previewBodyEl = document.getElementById("previewBody");
const previewChipsEl = document.getElementById("previewChips");
let detailRevealRafA = 0;
let detailRevealRafB = 0;

const INDUSTRY_BG_IMAGES = INDUSTRY_CONFIG.INDUSTRY_BG_IMAGES || {};
/** When an extra industry has no direct CDN photo, reuse a main industry background. */
const INDUSTRY_BG_PARENT_MAP = INDUSTRY_CONFIG.INDUSTRY_BG_PARENT_MAP || {};

const GENERATED_BG_CACHE = new Map();

const ICON_SVGS = {
  shopping: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h14l-1.2 10H7.2L6 7Z"></path><path d="M9 7a3 3 0 0 1 6 0"></path></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z"></path></svg>',
  sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z"></path><path d="m18.5 15 1 2.5L22 18.5 19.5 19.5 18.5 22 17.5 19.5 15 18.5l2.5-1L18.5 15Z"></path></svg>',
  plane: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 18-8-4 18-4-6-6-4Z"></path></svg>',
  utensils: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3v8"></path><path d="M7 3v8"></path><path d="M4 7h3"></path><path d="M12 3h5v6a2.5 2.5 0 0 1-5 0V3Z"></path><path d="M17 11v10"></path></svg>',
  factory: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21V9l6 3V9l6 3V5l6 3v13H3Z"></path></svg>',
  truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h11v10H3z"></path><path d="M14 10h4l3 3v4h-7z"></path><circle cx="7" cy="18" r="1.7"></circle><circle cx="17" cy="18" r="1.7"></circle></svg>',
  briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="12" rx="2"></rect><path d="M9 7V5h6v2"></path></svg>',
  stethoscope: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3v6a4 4 0 0 0 8 0V3"></path><path d="M14 15a4 4 0 1 0 8 0v-2"></path><circle cx="20" cy="11" r="2"></circle></svg>',
  chip: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"></rect><path d="M3 9h4M3 15h4M17 3v4M7 3v4M17 17v4M7 17v4M17 9h4M17 15h4"></path></svg>',
  bank: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-5 9 5"></path><path d="M4 10h16"></path><path d="M6 10v8M10 10v8M14 10v8M18 10v8"></path><path d="M3 20h18"></path></svg>',
  wrench: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 4a5 5 0 0 1-6.8 4.7L7 16l-3 1 1-3 7.3-7.2A5 5 0 0 1 21 4Z"></path></svg>',
  graduation: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-4 9 4-9 4-9-4Z"></path><path d="M7 12v4c0 1.6 2.2 3 5 3s5-1.4 5-3v-4"></path></svg>',
  hammer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 4 6 6-2 2-6-6 2-2Z"></path><path d="m11 7 6 6-8 8H3v-6l8-8Z"></path></svg>',
  wheat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18"></path><path d="M8 7c2 0 2-2 4-2"></path><path d="M16 7c-2 0-2-2-4-2"></path><path d="M8 12c2 0 2-2 4-2"></path><path d="M16 12c-2 0-2-2-4-2"></path><path d="M8 17c2 0 2-2 4-2"></path><path d="M16 17c-2 0-2-2-4-2"></path></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-7 9 7"></path><path d="M5 10v10h14V10"></path></svg>',
  scissors: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="2"></circle><circle cx="6" cy="18" r="2"></circle><path d="m8 7 12 10"></path><path d="M8 17 20 7"></path></svg>',
  paw: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="7" cy="8" r="1.5"></circle><circle cx="12" cy="6.5" r="1.5"></circle><circle cx="17" cy="8" r="1.5"></circle><path d="M8 16c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5-1.8 3-4 3-4-1-4-3Z"></path></svg>',
  gavel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 5 5 5"></path><path d="m4 20 9-9 3 3-9 9H4z"></path><path d="m13 6 3-3 5 5-3 3"></path></svg>',
  camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M9 7l1.5-2h3L15 7"></path><circle cx="12" cy="13.5" r="3"></circle></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v6c0 5 3.4 7.8 7 9 3.6-1.2 7-4 7-9V6l-7-3Z"></path></svg>',
  music: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V6l10-2v12"></path><circle cx="7" cy="18" r="2"></circle><circle cx="19" cy="16" r="2"></circle></svg>',
  film: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 5v14M17 5v14M3 9h4M17 9h4M3 15h4M17 15h4"></path></svg>'
};

function getIndustryIconName(industryId) {
  if (industryId.includes("ecommerce") || industryId.includes("retail")) return "shopping";
  if (industryId.includes("health") || industryId.includes("clinic") || industryId.includes("dental") || industryId.includes("massage") || industryId.includes("nutrition") || industryId.includes("veterinary") || industryId.includes("pharmacy")) return "stethoscope";
  if (industryId.includes("beauty") || industryId.includes("salon") || industryId.includes("tattoo")) return "scissors";
  if (industryId.includes("travel") || industryId.includes("tourism")) return "plane";
  if (industryId.includes("food") || industryId.includes("restaurant") || industryId.includes("catering")) return "utensils";
  if (industryId.includes("manufacturing")) return "factory";
  if (industryId.includes("logistics") || industryId.includes("moving") || industryId.includes("storage") || industryId.includes("car-rental")) return "truck";
  if (industryId.includes("professional") || industryId.includes("accounting") || industryId.includes("staffing") || industryId.includes("coworking")) return "briefcase";
  if (industryId.includes("technology") || industryId.includes("it-support")) return "chip";
  if (industryId.includes("financial") || industryId.includes("insurance")) return "bank";
  if (industryId.includes("automotive") || industryId.includes("repair")) return "wrench";
  if (industryId.includes("education") || industryId.includes("language") || industryId.includes("driving")) return "graduation";
  if (industryId.includes("construction") || industryId.includes("trades")) return "hammer";
  if (industryId.includes("agriculture") || industryId.includes("farming") || industryId.includes("landscaping")) return "wheat";
  if (industryId.includes("real-estate") || industryId.includes("property") || industryId.includes("childcare") || industryId.includes("home-cleaning")) return "home";
  if (industryId.includes("pet")) return "paw";
  if (industryId.includes("legal")) return "gavel";
  if (industryId.includes("photography") || industryId.includes("printing") || industryId.includes("interior-design")) return "camera";
  if (industryId.includes("security")) return "shield";
  if (industryId.includes("music")) return "music";
  if (industryId.includes("film") || industryId.includes("nonprofit") || industryId.includes("wedding")) return "film";
  return "sparkle";
}

function attachSmartImage(id, remoteSrc, fallbackSrc) {
  const el = document.getElementById(id);
  if (!el) return;
  el.src = remoteSrc;
  el.addEventListener("error", () => {
    if (el.dataset.fallbackDone === "1") return;
    el.dataset.fallbackDone = "1";
    el.src = fallbackSrc;
  });
}

/**
 * Detail stage backgrounds: use fixed images.unsplash.com CDN URLs from config.
 * Do not use source.unsplash.com — it was sunset (503) in 2024.
 */
function getIndustryGeneratedImageUrl(industry) {
  if (GENERATED_BG_CACHE.has(industry.id)) return GENERATED_BG_CACHE.get(industry.id);
  let url = INDUSTRY_BG_IMAGES[industry.id];
  if (!url) {
    const parentId = INDUSTRY_BG_PARENT_MAP[industry.id];
    if (parentId) url = INDUSTRY_BG_IMAGES[parentId];
  }
  if (!url) {
    url =
      INDUSTRY_BG_IMAGES["professional-services"] ||
      Object.values(INDUSTRY_BG_IMAGES)[0] ||
      FIGMA_ASSETS.detailBg;
  }
  GENERATED_BG_CACHE.set(industry.id, url);
  return url;
}

function updateDetailBackground(industry) {
  if (!detailBgEl || !industry) return;
  const generated = getIndustryGeneratedImageUrl(industry);

  // First fallback to existing Figma image, then local file.
  detailBgEl.dataset.fallbackStage = "0";
  detailBgEl.onerror = () => {
    const stage = detailBgEl.dataset.fallbackStage || "0";
    if (stage === "0") {
      detailBgEl.dataset.fallbackStage = "1";
      detailBgEl.src = FIGMA_ASSETS.detailBg;
      return;
    }
    if (stage === "1") {
      detailBgEl.dataset.fallbackStage = "2";
      detailBgEl.src = LOCAL_FALLBACK.detailBg;
    }
  };
  detailBgEl.src = generated;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildChatScene(industry, useCaseItem) {
  const title = useCaseItem?.title || "this workflow";
  const desc = useCaseItem?.desc || "I will prepare a practical response flow for your team.";
  const shortDesc = desc.split(".")[0].trim().slice(0, 72);
  const user = `Can you help me with "${title}"?`;
  const assistant = `Draft ready: ${shortDesc}${shortDesc.endsWith(".") ? "" : "."}`;
  return {
    user,
    assistant
  };
}

function renderChatOverlay(industry, useCases, selectedUseCaseIndex) {
  if (!chatOverlayEl || !industry) return;
  const useCaseItem = useCases[selectedUseCaseIndex] || useCases[0] || null;
  const scene = buildChatScene(industry, useCaseItem);
  const avatarSrc = (talkMaxIconEl && talkMaxIconEl.getAttribute("src")) || FIGMA_ASSETS.talkMaxIcon;
  chatOverlayEl.innerHTML = [
    '<div class="chat-thread__messages">',
    `<div class="chat-thread__row chat-thread__row--user"><p class="chat-thread__bubble">${escapeHtml(scene.user)}</p></div>`,
    '<div class="chat-thread__row">',
    `<img class="chat-thread__avatar" src="${escapeHtml(avatarSrc)}" alt="TypeWriter avatar" />`,
    '<div>',
    `<p class="chat-thread__bubble">${escapeHtml(scene.assistant)}</p>`,
    "</div>",
    "</div>",
    "</div>"
  ].join("");
}

function getById(id) {
  return INDUSTRIES.find((item) => item.id === id) || INDUSTRIES[0];
}

function getFiltered() {
  const q = state.query.trim().toLowerCase();
  if (!q) return ALL_DROPDOWN_INDUSTRIES;
  return ALL_DROPDOWN_INDUSTRIES.filter((item) => {
    if (item.name.toLowerCase().includes(q)) return true;
    return item.aliases.some((alias) => alias.toLowerCase().includes(q));
  });
}

function openOptions() {
  state.open = true;
  searchBox.classList.add("is-open");
  input.setAttribute("aria-expanded", "true");
  renderOptions();
}

function closeOptions() {
  state.open = false;
  state.focused = -1;
  searchBox.classList.remove("is-open");
  input.setAttribute("aria-expanded", "false");
  renderOptions();
}

function selectIndustry(industryId) {
  state.selectedId = industryId;
  state.selectedUseCaseIndex = 0;
  const selected = ALL_DROPDOWN_INDUSTRIES.find((item) => item.id === industryId) || getById(industryId);
  state.query = selected.name;
  input.value = selected.name;
  closeOptions();
  renderDetail();
  navigateToUseCase(industryId);
}

function showDetail() {
  heroScreen.classList.remove("is-active");
  detailScreen.classList.add("is-active");
  runDetailRevealAnimation();
}

function showHero() {
  detailScreen.classList.remove("is-active");
  heroScreen.classList.add("is-active");
  state.query = "";
  input.value = "";
  closeOptions();
  input.focus();
}

function navigateToUseCase(industryId) {
  const url = new URL(window.location.href);
  url.searchParams.set("view", "usecase");
  url.searchParams.set("industry", industryId);
  window.history.replaceState({}, "", url.toString());
  showDetail();
}

function clearUseCaseRoute() {
  const url = new URL(window.location.href);
  url.searchParams.delete("view");
  url.searchParams.delete("industry");
  window.history.replaceState({}, "", url.toString());
}

function renderOptions() {
  const filtered = getFiltered();
  optionsEl.innerHTML = "";
  if (!state.open) return;

  if (filtered.length === 0) {
    const empty = document.createElement("li");
    empty.className = "search-box__empty";
    empty.textContent = "没有匹配行业，请尝试其他关键词";
    optionsEl.appendChild(empty);
    return;
  }

  filtered.forEach((industry, idx) => {
    const li = document.createElement("li");
    li.className = "search-box__option";
    if (idx === state.focused) li.classList.add("is-focused");
    if (industry.id === state.selectedId) li.classList.add("is-selected");
    const icon = document.createElement("span");
    icon.className = "search-box__option-icon";
    const iconName = getIndustryIconName(industry.id);
    icon.innerHTML = ICON_SVGS[iconName] || ICON_SVGS.sparkle;

    const label = document.createElement("span");
    label.className = "search-box__option-label";
    label.textContent = industry.name;

    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", industry.id === state.selectedId ? "true" : "false");
    li.addEventListener("mousedown", (event) => {
      event.preventDefault();
      selectIndustry(industry.id);
    });
    li.appendChild(icon);
    li.appendChild(label);
    optionsEl.appendChild(li);
  });
}

function toTitleCase(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function pickTitleFromSentence(sentence) {
  const base = String(sentence || "")
    .replace(/[.,;:!?]+$/g, "")
    .trim();
  if (!base) return "Operational Intelligence";

  const clean = base
    .replace(/^(generate|draft|build|create|turn|transform|convert|auto-?draft|auto-?build)\s+/i, "")
    .replace(/\s+(quickly|instantly|faster)$/i, "")
    .trim();

  const words = clean.split(/\s+/).slice(0, 4);
  if (!words.length) return "Operational Intelligence";
  return toTitleCase(words.join(" "));
}

function getIndustryKeyword(selectedIndustry) {
  const name = (selectedIndustry?.name || "").toLowerCase();
  if (name.includes("travel") || name.includes("hospitality") || name.includes("tour")) return "traveler segment";
  if (name.includes("clinic") || name.includes("health")) return "patient flow";
  if (name.includes("beauty") || name.includes("salon") || name.includes("spa")) return "appointment flow";
  if (name.includes("food") || name.includes("restaurant") || name.includes("café")) return "menu demand";
  if (name.includes("logistics") || name.includes("supply")) return "shipment status";
  if (name.includes("manufacturing")) return "production line";
  if (name.includes("financial") || name.includes("insurance")) return "customer portfolio";
  if (name.includes("education")) return "learner progress";
  if (name.includes("construction")) return "project milestone";
  if (name.includes("agriculture") || name.includes("farming")) return "field operation";
  return "business workflow";
}

function normalizeUseCases(selectedIndustry, useCases) {
  const keyword = getIndustryKeyword(selectedIndustry);
  return (useCases || []).map((useCaseItem, index) => {
    if (useCaseItem && typeof useCaseItem === "object") {
      const fallbackTitle = pickTitleFromSentence(useCaseItem.desc || useCaseItem.title || "");
      return {
        tag: useCaseItem.tag || `Use case ${index + 1}`,
        title: useCaseItem.title || fallbackTitle,
        desc: useCaseItem.desc || "",
        preview: useCaseItem.preview || {
          title: `${fallbackTitle} ready for ${selectedIndustry.name}.`,
          body: `${useCaseItem.desc || ""}`.trim(),
          chips: ["View details", "Run with type work"]
        }
      };
    }

    const desc = String(useCaseItem || "");
    const title = pickTitleFromSentence(desc);
    return {
      tag: `Use case ${index + 1}`,
      title,
      desc,
      preview: {
        title: `${title} tuned for ${selectedIndustry.name}.`,
        body: `${desc} Based on selected ${keyword} context.`,
        chips: ["View details", "Run with type work"]
      }
    };
  });
}

function renderCards(useCases) {
  cardsGrid.innerHTML = "";
  useCases.forEach((useCaseItem, index) => {
    const rawTag = useCaseItem.tag || `Use case ${index + 1}`;
    const tag = rawTag.replace(/use\s*case/i, "USECASE").toUpperCase();
    const title = useCaseItem.title;
    const desc = useCaseItem.desc;

    const cardEl = document.createElement("article");
    cardEl.className = "use-card";
    if (index === state.selectedUseCaseIndex) cardEl.classList.add("is-active");
    if (index === 4) cardEl.classList.add("use-card--full");
    cardEl.innerHTML = [
      '<span class="use-card__tag"># ' + tag + "</span>",
      '<h3 class="use-card__title">' + title + "</h3>",
      '<p class="use-card__desc">' + desc + "</p>"
    ].join("");
    cardEl.addEventListener("click", () => {
      state.selectedUseCaseIndex = index;
      renderDetail();
    });
    cardsGrid.appendChild(cardEl);
  });
}

function getPreviewData(useCases, selectedIndex) {
  const selected = useCases[selectedIndex] || useCases[0];
  if (selected && typeof selected === "object" && selected.preview) return selected.preview;
  if (selected && typeof selected === "object") {
    return {
      title: selected.title,
      body: selected.desc,
      chips: ["View details", "Run with type work"]
    };
  }
  return {
    title: "Use case preview ready.",
    body: String(selected || ""),
    chips: ["View details", "Run with type work"]
  };
}

function renderPreviewCard(useCases) {
  if (!previewTitleEl || !previewBodyEl || !previewChipsEl) return;
  const preview = getPreviewData(useCases, state.selectedUseCaseIndex);
  previewTitleEl.textContent = preview.title;
  previewBodyEl.textContent = preview.body;
  previewChipsEl.innerHTML = "";
  (preview.chips || []).slice(0, 2).forEach((chip) => {
    const chipEl = document.createElement("span");
    chipEl.className = "chat-chip";
    chipEl.textContent = chip;
    previewChipsEl.appendChild(chipEl);
  });
}

function renderDetail() {
  const selectedIndustry = ALL_DROPDOWN_INDUSTRIES.find((item) => item.id === state.selectedId) || getById(state.selectedId);
  const useCases = normalizeUseCases(selectedIndustry, selectedIndustry.useCases || []);
  if (state.selectedUseCaseIndex >= useCases.length) state.selectedUseCaseIndex = 0;
  cardsIndustry.textContent = selectedIndustry.name;
  renderCards(useCases);
  renderPreviewCard(useCases);
  updateDetailBackground(selectedIndustry);
  renderChatOverlay(selectedIndustry, useCases, state.selectedUseCaseIndex);
}

function runDetailRevealAnimation() {
  if (!detailScreen) return;
  const stage = detailScreen.querySelector(".demo-stage");
  const topCard = detailScreen.querySelector(".chat-card--top");
  const arrow = detailScreen.querySelector(".top-card-arrow");
  const bottomCard = detailScreen.querySelector(".chat-card--bottom");
  const cardsHead = detailScreen.querySelector(".cards-head");
  const useCards = Array.from(detailScreen.querySelectorAll("#cardsGrid .use-card"));
  const nodes = [stage, topCard, arrow, bottomCard, cardsHead, ...useCards].filter(Boolean);
  /* Layer stagger ~100ms; use-case cards +55ms each (Animata soft-blur uses ~25ms/glyph — slower blocks here). */
  const layerDelays = [0, 120, 240, 360, 480];

  nodes.forEach((node, idx) => {
    node.classList.add("reveal-item");
    if (node.classList.contains("use-card")) node.classList.add("reveal-item--card");
    else node.classList.remove("reveal-item--card");
    const delayMs =
      idx < layerDelays.length
        ? layerDelays[idx]
        : 600 + (idx - layerDelays.length) * 55;
    node.style.setProperty("--reveal-delay", `${delayMs}ms`);
  });

  detailScreen.classList.remove("detail-screen-enter", "detail-screen-enter-active");
  if (detailRevealRafA) cancelAnimationFrame(detailRevealRafA);
  if (detailRevealRafB) cancelAnimationFrame(detailRevealRafB);

  detailRevealRafA = requestAnimationFrame(() => {
    detailScreen.classList.add("detail-screen-enter");
    detailRevealRafB = requestAnimationFrame(() => {
      detailScreen.classList.add("detail-screen-enter-active");
    });
  });
}

function handleInputKeydown(event) {
  const filtered = getFiltered();
  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (!state.open) openOptions();
    state.focused = filtered.length ? (state.focused + 1 + filtered.length) % filtered.length : -1;
    renderOptions();
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    if (!state.open) openOptions();
    state.focused = filtered.length ? (state.focused - 1 + filtered.length) % filtered.length : -1;
    renderOptions();
  } else if (event.key === "Enter") {
    if (!state.open) return;
    event.preventDefault();
    const target = filtered[state.focused] || filtered[0];
    if (target) selectIndustry(target.id);
  } else if (event.key === "Escape") {
    closeOptions();
  }
}

input.addEventListener("focus", openOptions);
input.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.focused = -1;
  openOptions();
});
input.addEventListener("keydown", handleInputKeydown);

toggleBtn.addEventListener("click", () => {
  if (state.open) closeOptions();
  else openOptions();
});

document.addEventListener("click", (event) => {
  if (!searchBox.contains(event.target)) closeOptions();
});

if (cardsBackBtn) {
  cardsBackBtn.addEventListener("click", () => {
    clearUseCaseRoute();
    showHero();
  });
}

attachSmartImage("talkMaxIcon", FIGMA_ASSETS.talkMaxIcon, LOCAL_FALLBACK.talkMaxIcon);

state.query = "";
input.value = "";
renderOptions();
renderDetail();

const initUrl = new URL(window.location.href);
if (initUrl.searchParams.get("view") === "usecase") {
  const industryParam = initUrl.searchParams.get("industry");
  if (industryParam && ALL_DROPDOWN_INDUSTRIES.some((item) => item.id === industryParam)) {
    state.selectedId = industryParam;
    state.selectedUseCaseIndex = 0;
    state.query = (ALL_DROPDOWN_INDUSTRIES.find((item) => item.id === industryParam) || INDUSTRIES[0]).name;
    input.value = state.query;
    renderDetail();
  }
  showDetail();
}
