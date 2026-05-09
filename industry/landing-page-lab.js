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
          template: "skuPipeline",
          tag: "SKU PIPELINE",
          count: 24,
          items: [
            { name: "Cheese 200g", state: "done", label: "✓ DRAFT" },
            { name: "Tomato sauce", state: "active", label: "⟳ WRITING" },
            { name: "Olive oil", state: "queued", label: "·  QUEUED" }
          ]
        }
      },
      {
        tag: "Use case 2",
        title: "Cross-Channel Catalog Sync",
        desc: "Type work rewrites one product update for marketplace, social and website formats.",
        preview: {
          template: "channelSync",
          tag: "CATALOG SYNC",
          rows: [
            { name: "Web",         icon: "globe",       state: "done",   status: "✓ synced 1m ago" },
            { name: "Instagram",   icon: "instagram",   state: "done",   status: "✓ synced 1m ago" },
            { name: "Marketplace", icon: "marketplace", state: "active", status: "⟳ syncing" }
          ]
        }
      },
      {
        tag: "Use case 3",
        title: "Promotion Creative Sprint",
        desc: "Launch flash-sale banners and email angles faster with segmented campaign variants.",
        preview: {
          template: "flashSale",
          product: {
            name: "Air Knit Runners",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=480&h=300&fit=crop&q=80"
          },
          banner: { label: "FLASH SALE", price: "−50% off" },
          segments: ["New shoppers", "VIP buyers", "Cart abandoners"],
          meta: "Live · 2 min ago"
        }
      },
      {
        tag: "Use case 4",
        title: "Repeat-Buyer Reactivation",
        desc: "Type work finds lapsed buyers and drafts personalized comeback messages from purchase history.",
        preview: {
          template: "crmList",
          rows: [
            {
              name: "Sarah K.",
              color: "a",
              tag: "LAPSED",
              photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80"
            },
            {
              name: "Mike R.",
              color: "b",
              tag: "LAPSED",
              photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80"
            }
          ],
          more: "+126 more"
        }
      },
      {
        tag: "Use case 5",
        title: "Review-to-FAQ Automation",
        desc: "Turn comments and support chats into clear FAQs so shoppers get answers before checkout.",
        preview: {
          template: "faqEntry",
          q: "How do I return an item?",
          a: "Within 30 days · free shipping"
        }
      }
    ]
  },
  { id: "health-wellness", name: "Health & wellness", aliases: ["health", "wellness", "fitness", "gym"], useCases: ["Turn class schedule changes into instant member notifications.", "Generate trainer follow-up summaries after each session.", "Build nutrition and recovery suggestions from member profiles.", "Create campaign copy for membership renewal offers.", "Auto-draft customer support replies for common wellness questions."] },
  { id: "beauty-personal-care", name: "Beauty & Personal Care", aliases: ["beauty", "salon", "spa", "personal care"], useCases: ["Draft treatment blurbs for menus and social, tone-matched.", "Create post-visit care notes tailored to each customer.", "Auto-build package picks from preference history per client.", "Campaign lines for seasonal promos and gift bundles.", "Customer reviews distilled into concrete service fixes."] },
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
const cardBodyEl = document.getElementById("cardBody");
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
  const assistant = `${shortDesc}${shortDesc.endsWith(".") ? "" : "."}`;
  return {
    user,
    assistant
  };
}

function renderChatOverlay(industry, useCases, selectedUseCaseIndex, opts = {}) {
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

  /* Step 3 of click sequence: stagger user → assistant message rows. */
  const { stagger = false, staggerStartMs = 920, staggerStepMs = 200 } = opts;
  if (!stagger) return;
  const rows = chatOverlayEl.querySelectorAll(".chat-thread__row");
  rows.forEach((row, i) => {
    if (typeof row.animate !== "function") return;
    /* Hold invisible until our delay; fill:both keeps state before & after. */
    row.animate(
      [
        { opacity: 0, transform: "translateY(12px) scale(0.992)", filter: "blur(12px)" },
        { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0)" }
      ],
      {
        duration: 1400,
        delay: staggerStartMs + i * staggerStepMs,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both"
      }
    );
  });
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

function pickTitleFromSentence(sentence, maxWords = 4) {
  const base = String(sentence || "")
    .replace(/[.,;:!?]+$/g, "")
    .trim();
  if (!base) return "Operational Intelligence";

  const clean = base
    .replace(/^(generate|draft|build|create|turn|transform|convert|auto-?draft|auto-?build)\s+/i, "")
    .replace(/\s+(quickly|instantly|faster)$/i, "")
    .trim();

  const words = clean.split(/\s+/).slice(0, maxWords);
  if (!words.length) return "Operational Intelligence";
  return toTitleCase(words.join(" "));
}

/** Short preview body for top-left card (~3 lines); no "Based on…" tail. */
function compactPreviewBody(desc) {
  let t = String(desc || "").trim();
  if (!t) return "";
  const first = t.split(/\.\s+/)[0];
  t = first && first.length < t.length ? `${first}.` : t;
  const maxLen = 105;
  if (t.length <= maxLen) return t;
  const cut = t.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 35 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

/**
 * Lab: scene HTML for the top preview card.
 * Each key maps to a small "operational artifact" mockup (Zenoti-inspired).
 * The shape stays fixed per key; the title/body/chips below carry industry-specific copy.
 */
const PREVIEW_SCENE_HTML = {
  document: [
    '<div class="pv-scene pv-document">',
    '  <div class="pv-document__head">',
    '    <span class="pv-document__tag">DRAFT</span>',
    '    <span class="pv-document__count">+24</span>',
    '  </div>',
    '  <div class="pv-document__rows">',
    '    <span class="pv-document__row pv-document__row--full"></span>',
    '    <span class="pv-document__row pv-document__row--mid"></span>',
    '    <span class="pv-document__row pv-document__row--short"></span>',
    '  </div>',
    '</div>'
  ].join(""),
  channels: [
    '<div class="pv-scene pv-channels">',
    '  <svg class="pv-channels__lines" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">',
    '    <path d="M22 16 L50 32" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>',
    '    <path d="M78 16 L50 32" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>',
    '    <path d="M50 32 L50 50" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>',
    '  </svg>',
    '  <span class="pv-channels__node pv-channels__node--web">Web</span>',
    '  <span class="pv-channels__node pv-channels__node--social">Social</span>',
    '  <span class="pv-channels__node pv-channels__node--market">Market</span>',
    '  <span class="pv-channels__hub" aria-hidden="true"></span>',
    '</div>'
  ].join(""),
  campaign: [
    '<div class="pv-scene pv-campaign">',
    '  <div class="pv-campaign__banner">',
    '    <span class="pv-campaign__bolt" aria-hidden="true">⚡</span>',
    '    <span class="pv-campaign__label">FLASH SALE</span>',
    '    <span class="pv-campaign__price">−50%</span>',
    '  </div>',
    '  <div class="pv-campaign__segments">',
    '    <span class="pv-campaign__seg">New</span>',
    '    <span class="pv-campaign__seg">VIP</span>',
    '    <span class="pv-campaign__seg">Cart</span>',
    '  </div>',
    '</div>'
  ].join(""),
  people: [
    '<div class="pv-scene pv-people">',
    '  <div class="pv-people__row">',
    '    <span class="pv-people__avatar pv-people__avatar--a"></span>',
    '    <span class="pv-people__name">Sarah K.</span>',
    '    <span class="pv-people__tag">lapsed</span>',
    '  </div>',
    '  <div class="pv-people__row">',
    '    <span class="pv-people__avatar pv-people__avatar--b"></span>',
    '    <span class="pv-people__name">Mike R.</span>',
    '    <span class="pv-people__tag">lapsed</span>',
    '  </div>',
    '  <div class="pv-people__more">+126 more</div>',
    '</div>'
  ].join(""),
  help: [
    '<div class="pv-scene pv-help">',
    '  <div class="pv-help__row pv-help__row--q">',
    '    <span class="pv-help__label">Q</span>',
    '    <span class="pv-help__text">Returns policy?</span>',
    '  </div>',
    '  <div class="pv-help__row pv-help__row--a">',
    '    <span class="pv-help__label">A</span>',
    '    <span class="pv-help__text">Within 30 days · free</span>',
    '    <span class="pv-help__check" aria-hidden="true">✓</span>',
    '  </div>',
    '</div>'
  ].join(""),
  logistics: [
    '<div class="pv-scene pv-logistics">',
    '  <div class="pv-logistics__track">',
    '    <span class="pv-logistics__dot is-done"></span>',
    '    <span class="pv-logistics__bar is-done"></span>',
    '    <span class="pv-logistics__dot is-done"></span>',
    '    <span class="pv-logistics__bar is-active"></span>',
    '    <span class="pv-logistics__dot is-active"></span>',
    '    <span class="pv-logistics__bar"></span>',
    '    <span class="pv-logistics__dot"></span>',
    '  </div>',
    '  <div class="pv-logistics__labels">',
    '    <span>Pick</span><span>Pack</span><span>Ship</span><span>Out</span>',
    '  </div>',
    '</div>'
  ].join(""),
  spark: [
    '<div class="pv-scene pv-spark">',
    '  <div class="pv-spark__chip">',
    '    <span class="pv-spark__icon" aria-hidden="true">✦</span>',
    '    <span class="pv-spark__text">Type work · drafting</span>',
    '  </div>',
    '  <div class="pv-spark__bars">',
    '    <span class="pv-spark__bar pv-spark__bar--1"></span>',
    '    <span class="pv-spark__bar pv-spark__bar--2"></span>',
    '    <span class="pv-spark__bar pv-spark__bar--3"></span>',
    '  </div>',
    '</div>'
  ].join("")
};

function resolvePreviewVisualKey(raw) {
  const k = String(raw || "").toLowerCase().trim();
  return PREVIEW_SCENE_HTML[k] ? k : null;
}

/* ============================================================
 * CARD TEMPLATES
 * ------------------------------------------------------------
 * Each template is a fn (preview) => HTML string and OWNS the
 * entire card body (everything above the persistent Talk to Max).
 *
 * Pick by setting `preview.template` on a use case. Anything you
 * pass on `preview` is available to the template via `p.*`.
 *
 *   preview: {
 *     template: "skuPipeline",
 *     tag: "SKU PIPELINE",
 *     count: 24,
 *     items: [...],
 *     result: "...",
 *     chips: ["...", "..."]
 *   }
 *
 * Add a new key here and the use case picks it up automatically.
 * ============================================================ */

function chipHTML(label) {
  return `<span class="chat-chip">${escapeHtml(label)}</span>`;
}

function chipsRowHTML(chips) {
  if (!Array.isArray(chips) || !chips.length) return "";
  return `<div class="chat-chip-row">${chips.slice(0, 2).map(chipHTML).join("")}</div>`;
}

function sceneVisualHTML(visualKey) {
  const vk = visualKey || "spark";
  const inner = PREVIEW_SCENE_HTML[vk] || PREVIEW_SCENE_HTML.spark;
  return `<div class="preview-visual preview-visual--${vk}" data-scene="${vk}" aria-hidden="true">${inner}</div>`;
}

/* Channel icons — all rendered in currentColor so they inherit the row's purple. */
const CHANNEL_ICONS = {
  globe:
    '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="5"/><path d="M2 7h10"/><path d="M7 2c1.7 1.5 1.7 8.5 0 10"/><path d="M7 2c-1.7 1.5-1.7 8.5 0 10"/></svg>',
  instagram:
    '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.15"><rect x="2.2" y="2.2" width="9.6" height="9.6" rx="2.6"/><circle cx="7" cy="7" r="2.4"/><circle cx="9.7" cy="4.3" r="0.55" fill="currentColor" stroke="none"/></svg>',
  marketplace:
    '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h8l-0.6 6.3a0.7 0.7 0 0 1-0.7 0.6H4.3a0.7 0.7 0 0 1-0.7-0.6L3 5z"/><path d="M5 5V3.6a2 2 0 0 1 4 0V5"/></svg>',
  tiktok:
    '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6.4a2.4 2.4 0 1 1-2.4-2.4"/><path d="M9 2.2c0.2 1.4 1.2 2.4 2.5 2.6"/></svg>',
  shopify:
    '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.2 4.5 3l3-1c1.6 0 2.8 1.5 2.8 2.4v7.4H2.8L3.5 4.2z"/><path d="M5.5 4.2v-1a1.5 1.5 0 0 1 3 0"/></svg>',
  email:
    '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3.5" width="10" height="7" rx="1.2"/><path d="M2.4 4.2 7 7.6l4.6-3.4"/></svg>'
};

/* Inline error handler: silently remove broken images so the underlying gradient/colour shows. */
const IMG_ERR = "this.style.display='none';this.parentNode&&this.parentNode.classList.add('img-failed')";

const CARD_TEMPLATES = {
  /* Default — keeps the original layout (scene + title + body + chips).
     Used for industries whose useCases are plain strings. */
  default(p) {
    return [
      sceneVisualHTML(p.visual),
      `<p class="chat-card__line">${escapeHtml(p.title || "")}</p>`,
      `<p class="chat-card__desc">${escapeHtml(p.body || "")}</p>`,
      chipsRowHTML(p.chips)
    ].join("");
  },

  /* SKU pipeline — DOCUMENT DRAFT visual (paper card + writing lines + cursor + queue chips).
     Each card is meant to evoke "an actual draft being written", not a status table. */
  skuPipeline(p) {
    const items = p.items || [];
    const headItem = items[0] || { name: "Untitled draft" };
    const queue = items
      .slice(1, 3)
      .map(
        (it) =>
          `<span class="zen-pipe__chip zen-pipe__chip--${escapeHtml(it.state || "queued")}">${escapeHtml(it.name || "")}</span>`
      )
      .join("");
    const total = p.count || items.length;
    return [
      `<div class="zen-pipe">`,
      `  <span class="zen-pipe__counter">+${total}</span>`,
      `  <div class="zen-pipe__paper">`,
      `    <div class="zen-pipe__title">${escapeHtml(headItem.name || "")}</div>`,
      `    <div class="zen-pipe__lines">`,
      `      <span class="zen-pipe__line zen-pipe__line--full"></span>`,
      `      <span class="zen-pipe__line zen-pipe__line--mid"></span>`,
      `      <span class="zen-pipe__line zen-pipe__line--short"><span class="zen-pipe__cursor" aria-hidden="true"></span></span>`,
      `    </div>`,
      `  </div>`,
      queue ? `  <div class="zen-pipe__queue">${queue}</div>` : "",
      `</div>`
    ].join("");
  },

  /* Channel sync — PHONE MESSAGING visual (phone notch + outgoing chat bubble + channel chips).
     References real iMessage/SMS UI so it doesn't read as "another data table". */
  channelSync(p) {
    const rows = p.rows || [];
    const liveCount = rows.filter((r) => r.state !== "active").length || rows.length;
    const total = rows.length;
    const message = p.message || `Synced to ${liveCount}/${total} channels · 1m ago`;
    const chips = rows
      .slice(0, 3)
      .map((r) => {
        const iconKey = r.icon && CHANNEL_ICONS[r.icon] ? r.icon : "globe";
        return `
          <span class="zen-channels__chip">
            <span class="zen-channels__chip-icon" aria-hidden="true">${CHANNEL_ICONS[iconKey]}</span>
            ${escapeHtml(r.name || "")}
          </span>`;
      })
      .join("");
    return [
      `<div class="zen-channels">`,
      `  <div class="zen-channels__phone">`,
      `    <span class="zen-channels__notch" aria-hidden="true"></span>`,
      `    <div class="zen-channels__bubble">`,
      `      <span class="zen-channels__bubble-text">${escapeHtml(message)}</span>`,
      `      <span class="zen-channels__check" aria-hidden="true">✓✓</span>`,
      `    </div>`,
      `  </div>`,
      `  <div class="zen-channels__chips">${chips}</div>`,
      `</div>`
    ].join("");
  },

  /* Flash sale creative — hero (image or solid banner) + segment chips + live meta. */
  flashSale(p) {
    const segs = (p.segments || [])
      .slice(0, 3)
      .map((s) => `<span class="zen-sale__seg">${escapeHtml(s)}</span>`)
      .join("");
    const banner = p.banner || {};
    const product = p.product || null;
    const heroClass = product ? "zen-sale__hero zen-sale__hero--product" : "zen-sale__hero";
    return [
      `<div class="zen-sale">`,
      `  <div class="${heroClass}">`,
      product
        ? `    <img class="zen-sale__hero-img" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name || "")}" onerror="${IMG_ERR}" />`
        : "",
      product ? `    <div class="zen-sale__hero-overlay" aria-hidden="true"></div>` : "",
      `    <div class="zen-sale__hero-content">`,
      `      <span class="zen-sale__bolt" aria-hidden="true">⚡</span>`,
      `      <span class="zen-sale__label">${escapeHtml(banner.label || "FLASH SALE")}</span>`,
      `      <span class="zen-sale__price">${escapeHtml(banner.price || "−50%")}</span>`,
      `    </div>`,
      product && product.name
        ? `    <span class="zen-sale__product-name">${escapeHtml(product.name)}</span>`
        : "",
      `  </div>`,
      `  <div class="zen-sale__segments">${segs}</div>`,
      `  <div class="zen-sale__meta">`,
      `    <span class="zen-sale__dot" aria-hidden="true"></span>`,
      `    <span>${escapeHtml(p.meta || "Live · 2 min ago")}</span>`,
      `  </div>`,
      `</div>`
    ].join("");
  },

  /* CRM list — PROFILE TILES (2-up square cards, not horizontal rows).
     Mimics a "people picker" or contact gallery, breaking the row pattern. */
  crmList(p) {
    const tiles = (p.rows || [])
      .slice(0, 2)
      .map(
        (r) => `
          <div class="zen-crm__tile">
            <div class="zen-crm__avatar zen-crm__avatar--${escapeHtml(r.color || "a")}">
              ${r.photo ? `<img class="zen-crm__avatar-img" src="${escapeHtml(r.photo)}" alt="${escapeHtml(r.name || "")}" onerror="${IMG_ERR}" />` : ""}
            </div>
            <div class="zen-crm__name">${escapeHtml(r.name || "")}</div>
            <div class="zen-crm__tag">${escapeHtml(r.tag || "lapsed")}</div>
          </div>`
      )
      .join("");
    return [
      `<div class="zen-crm">`,
      `  <div class="zen-crm__grid">${tiles}</div>`,
      p.more ? `  <div class="zen-crm__more">${escapeHtml(p.more)}</div>` : "",
      `</div>`
    ].join("");
  },

  /* FAQ entry — CHAT THREAD (bubbles, not labeled rows). User Q on the right
     like an outgoing message; assistant A on the left with a small avatar. */
  faqEntry(p) {
    return [
      `<div class="zen-faq">`,
      `  <div class="zen-faq__row zen-faq__row--user">`,
      `    <div class="zen-faq__bubble zen-faq__bubble--user">${escapeHtml(p.q || "")}</div>`,
      `  </div>`,
      `  <div class="zen-faq__row zen-faq__row--bot">`,
      `    <div class="zen-faq__avatar" aria-hidden="true">A</div>`,
      `    <div class="zen-faq__bubble zen-faq__bubble--bot">`,
      `      <span class="zen-faq__bubble-text">${escapeHtml(p.a || "")}</span>`,
      `      <span class="zen-faq__check" aria-hidden="true">✓</span>`,
      `    </div>`,
      `  </div>`,
      `</div>`
    ].join("");
  }
};

/* ============================================================
 * Template inference for industries that ship plain-string useCases.
 * Maps a use-case description to one of the 5 templates by keyword,
 * and supplies sensible default content per template + light
 * industry-specific overrides for the well-known industries.
 * ============================================================ */

function inferCardTemplate(desc) {
  const t = String(desc || "").toLowerCase();
  /* FAQ / Q&A / scripts — checked first so it wins over crmList when both keywords appear. */
  if (/\b(faqs?|questions?|enquir|repetit|response (?:scripts?|templates?)|review trends?|review distill|service fixe?s?|support repl|support scripts?|product scripts?|scripts? for|improvement actions?)\b/.test(t)) return "faqEntry";
  /* Campaigns / promo / offers / reactivation. */
  if (/\b(campaigns?|promos?|promotions?|seasonal|sales?|offers?|reactivations?|reactivat|comebacks?|renewals?|gift bundles?|flash|retention reminders?|reminders? for)\b/.test(t)) return "flashSale";
  /* Channels / messaging / multi-platform sync. */
  if (/\b(notifications?|notices?|messages?|messaging|sync|cross-?channel|multichannel|multilingual|delivery (?:updates?|notices?)|update (?:notices?|messages?)|translat|outreach|broadcasts?|bulk messages?|reminder messages?|status updates?|social posts?|social media)\b/.test(t)) return "channelSync";
  /* People / CRM / per-person. */
  if (/\b(members?|customers?|clients?|patients?|guests?|buyers?|recipients?|profiles?|crm|tailored to each|per (?:client|customer)|comeback flow|lapsed|stakeholders?)\b/.test(t)) return "crmList";
  /* Default: drafting/spec-writing pipeline. */
  return "skuPipeline";
}

/* Reusable photo URLs (verified working on images.unsplash.com CDN). */
const SAMPLE_PHOTO = {
  womanA:    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
  manA:      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80",
  ecommerce: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=480&h=300&fit=crop&q=80",
  fitness:   "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=480&h=300&fit=crop&q=80",
  beauty:    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=480&h=300&fit=crop&q=80",
  travel:    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=480&h=300&fit=crop&q=80",
  food:      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=480&h=300&fit=crop&q=80",
  sneaker:   "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=480&h=300&fit=crop&q=80"
};

/* Generic placeholder content per template — used when the industry has no override. */
const DEFAULT_FLAVOR = {
  skuPipeline: {
    tag: "DRAFT QUEUE",
    count: 18,
    items: [
      { name: "Item one", state: "done", label: "✓ DRAFT" },
      { name: "Item two", state: "active", label: "⟳ WRITING" },
      { name: "Item three", state: "queued", label: "·  QUEUED" }
    ]
  },
  channelSync: {
    tag: "CHANNEL SYNC",
    rows: [
      { name: "Email", icon: "email", state: "done", status: "✓ synced 1m ago" },
      { name: "Web", icon: "globe", state: "done", status: "✓ synced 1m ago" },
      { name: "App", icon: "marketplace", state: "active", status: "⟳ syncing" }
    ]
  },
  crmList: {
    rows: [
      { name: "Anna L.", color: "a", tag: "ACTIVE", photo: SAMPLE_PHOTO.womanA },
      { name: "James R.", color: "b", tag: "ACTIVE", photo: SAMPLE_PHOTO.manA }
    ],
    more: "+126 more"
  },
  flashSale: {
    product: { name: "Featured Item", image: SAMPLE_PHOTO.ecommerce },
    banner: { label: "PROMO LIVE", price: "−30%" },
    segments: ["New", "VIP", "Returning"],
    meta: "Live · 2 min ago"
  },
  faqEntry: {
    q: "How can I get help?",
    a: "We respond within 24h · all channels"
  }
};

/* Light industry-specific overrides — written for the 6 main industries shipped
 * with detailed string-based useCases. Other industries fall through to DEFAULT_FLAVOR. */
const INDUSTRY_FLAVOR = {
  "health-wellness": {
    skuPipeline: {
      tag: "PROGRAM DRAFTS",
      count: 14,
      items: [
        { name: "HIIT recovery week", state: "done", label: "✓ DRAFT" },
        { name: "Yoga 30 flow", state: "active", label: "⟳ WRITING" },
        { name: "Pilates intro", state: "queued", label: "·  QUEUED" }
      ]
    },
    channelSync: {
      tag: "MEMBER OUTREACH",
      rows: [
        { name: "Email", icon: "email", state: "done", status: "✓ sent 1m ago" },
        { name: "App push", icon: "globe", state: "done", status: "✓ sent 1m ago" },
        { name: "SMS", icon: "marketplace", state: "active", status: "⟳ sending" }
      ]
    },
    crmList: {
      rows: [
        { name: "Emma L.", color: "a", tag: "AT-RISK", photo: SAMPLE_PHOTO.womanA },
        { name: "James W.", color: "b", tag: "AT-RISK", photo: SAMPLE_PHOTO.manA }
      ],
      more: "+89 members"
    },
    flashSale: {
      product: { name: "Annual Membership", image: SAMPLE_PHOTO.fitness },
      banner: { label: "RENEWAL OFFER", price: "−25%" },
      segments: ["Lapsed", "Active", "Trial"],
      meta: "Live · 5 min ago"
    },
    faqEntry: {
      q: "How do I pause my membership?",
      a: "Up to 3 months free · self-service"
    }
  },
  "beauty-personal-care": {
    skuPipeline: {
      tag: "TREATMENT BLURBS",
      count: 22,
      items: [
        { name: "Hydra facial", state: "done", label: "✓ DRAFT" },
        { name: "Brow shape-up", state: "active", label: "⟳ WRITING" },
        { name: "Gel manicure", state: "queued", label: "·  QUEUED" }
      ]
    },
    channelSync: {
      tag: "BOOK & TONE",
      rows: [
        { name: "Salon menu", icon: "globe", state: "done", status: "✓ updated 1m ago" },
        { name: "Instagram", icon: "instagram", state: "done", status: "✓ posted 1m ago" },
        { name: "Email club", icon: "email", state: "active", status: "⟳ tone-matching" }
      ]
    },
    crmList: {
      rows: [
        { name: "Lily T.", color: "a", tag: "DUE VISIT", photo: SAMPLE_PHOTO.womanA },
        { name: "Mark D.", color: "b", tag: "DUE VISIT", photo: SAMPLE_PHOTO.manA }
      ],
      more: "+57 clients"
    },
    flashSale: {
      product: { name: "Glow Bundle", image: SAMPLE_PHOTO.beauty },
      banner: { label: "GIFT BUNDLE", price: "−30%" },
      segments: ["VIP", "Lapsed", "First-time"],
      meta: "Live · 3 min ago"
    },
    faqEntry: {
      q: "Can I reschedule a treatment?",
      a: "Up to 24h before · no fee"
    }
  },
  "travel-hospitality": {
    skuPipeline: {
      tag: "ITINERARY DRAFTS",
      count: 16,
      items: [
        { name: "Tokyo · 5d couples", state: "done", label: "✓ DRAFT" },
        { name: "Bali · family of 4", state: "active", label: "⟳ WRITING" },
        { name: "Paris · solo", state: "queued", label: "·  QUEUED" }
      ]
    },
    channelSync: {
      tag: "GUEST MESSAGING",
      rows: [
        { name: "Email · EN", icon: "email", state: "done", status: "✓ sent 1m ago" },
        { name: "WhatsApp · ES", icon: "globe", state: "done", status: "✓ sent 1m ago" },
        { name: "SMS · ZH", icon: "marketplace", state: "active", status: "⟳ translating" }
      ]
    },
    crmList: {
      rows: [
        { name: "Anna L.", color: "a", tag: "REPEAT", photo: SAMPLE_PHOTO.womanA },
        { name: "Marco D.", color: "b", tag: "REPEAT", photo: SAMPLE_PHOTO.manA }
      ],
      more: "+42 guests"
    },
    flashSale: {
      product: { name: "Weekend Getaway", image: SAMPLE_PHOTO.travel },
      banner: { label: "LOYALTY OFFER", price: "−20%" },
      segments: ["Members", "Lapsed", "Holiday"],
      meta: "Live · 7 min ago"
    },
    faqEntry: {
      q: "What time is check-in?",
      a: "From 3 PM · early check-in on request"
    }
  },
  "food-beverage": {
    skuPipeline: {
      tag: "MENU HIGHLIGHTS",
      count: 12,
      items: [
        { name: "Truffle risotto", state: "done", label: "✓ DRAFT" },
        { name: "Seasonal salad", state: "active", label: "⟳ WRITING" },
        { name: "House cocktail", state: "queued", label: "·  QUEUED" }
      ]
    },
    channelSync: {
      tag: "DAILY SPECIALS",
      rows: [
        { name: "Instagram", icon: "instagram", state: "done", status: "✓ posted 1m ago" },
        { name: "Site banner", icon: "globe", state: "done", status: "✓ updated 1m ago" },
        { name: "TikTok", icon: "tiktok", state: "active", status: "⟳ scheduling" }
      ]
    },
    crmList: {
      rows: [
        { name: "Sofia P.", color: "a", tag: "REGULAR", photo: SAMPLE_PHOTO.womanA },
        { name: "Hugo M.", color: "b", tag: "REGULAR", photo: SAMPLE_PHOTO.manA }
      ],
      more: "+96 regulars"
    },
    flashSale: {
      product: { name: "Sunday Brunch Set", image: SAMPLE_PHOTO.food },
      banner: { label: "WEEKEND OFFER", price: "−15%" },
      segments: ["Walk-ins", "Repeat", "Birthday"],
      meta: "Live · 4 min ago"
    },
    faqEntry: {
      q: "Do you take reservations?",
      a: "Yes · book online · up to 8 guests"
    }
  },
  "professional-services": {
    skuPipeline: {
      tag: "CLIENT RECAPS",
      count: 9,
      items: [
        { name: "Acme · Q3 review", state: "done", label: "✓ DRAFT" },
        { name: "Globex · proposal", state: "active", label: "⟳ WRITING" },
        { name: "Initech · onboard", state: "queued", label: "·  QUEUED" }
      ]
    },
    channelSync: {
      tag: "CLIENT BRIEF",
      rows: [
        { name: "Email", icon: "email", state: "done", status: "✓ sent 1m ago" },
        { name: "Slack", icon: "globe", state: "done", status: "✓ posted 1m ago" },
        { name: "PDF export", icon: "marketplace", state: "active", status: "⟳ rendering" }
      ]
    },
    crmList: {
      rows: [
        { name: "Sarah K.", color: "a", tag: "FOLLOW-UP", photo: SAMPLE_PHOTO.womanA },
        { name: "Daniel R.", color: "b", tag: "FOLLOW-UP", photo: SAMPLE_PHOTO.manA }
      ],
      more: "+18 leads"
    },
    flashSale: {
      product: { name: "Strategy Workshop", image: SAMPLE_PHOTO.travel },
      banner: { label: "REFERRAL OFFER", price: "−20%" },
      segments: ["Existing", "Referred", "Lapsed"],
      meta: "Live · 9 min ago"
    },
    faqEntry: {
      q: "How long does onboarding take?",
      a: "Typically 2–3 business days"
    }
  },
  "clinic-healthcare": {
    skuPipeline: {
      tag: "INTAKE SUMMARIES",
      count: 11,
      items: [
        { name: "Patient #4082", state: "done", label: "✓ DRAFT" },
        { name: "Patient #4083", state: "active", label: "⟳ WRITING" },
        { name: "Patient #4084", state: "queued", label: "·  QUEUED" }
      ]
    },
    channelSync: {
      tag: "REMINDERS",
      rows: [
        { name: "Email", icon: "email", state: "done", status: "✓ sent 1m ago" },
        { name: "SMS", icon: "marketplace", state: "done", status: "✓ sent 1m ago" },
        { name: "Patient app", icon: "globe", state: "active", status: "⟳ sending" }
      ]
    },
    crmList: {
      rows: [
        { name: "Patient A.", color: "a", tag: "RECALL", photo: SAMPLE_PHOTO.womanA },
        { name: "Patient B.", color: "b", tag: "RECALL", photo: SAMPLE_PHOTO.manA }
      ],
      more: "+34 patients"
    },
    flashSale: {
      product: { name: "Wellness Check-up", image: SAMPLE_PHOTO.fitness },
      banner: { label: "ANNUAL PROMO", price: "−15%" },
      segments: ["Lapsed", "Active", "Family"],
      meta: "Live · 6 min ago"
    },
    faqEntry: {
      q: "What insurance do you accept?",
      a: "Most major plans · check site for full list"
    }
  }
};

function generatePreviewForString(industry, desc) {
  const template = inferCardTemplate(desc);
  const flavor = (industry && INDUSTRY_FLAVOR[industry.id]) || {};
  const data = flavor[template] || DEFAULT_FLAVOR[template];
  return { template, ...data };
}

/** Guess an icon from copy when `preview.visual` is omitted. */
function inferPreviewVisual(title, desc) {
  const t = `${title || ""} ${desc || ""}`.toLowerCase();
  if (/\b(faq|faqs|support chat|support|help center|enquir|enquiries|comments and support)\b/.test(t)) return "help";
  if (/\b(document|documentation|spec|specs|report|notes|summary|intake|form|policy|training snippet|handoff|proposal|meeting notes)\b/.test(t))
    return "document";
  if (/\b(sync|catalog|channel|channels|marketplace|multichannel|cross-?channel)\b/.test(t)) return "channels";
  if (/\b(campaign|promo|promotion|creative|banner|email angle|flash-?sale|marketing)\b/.test(t)) return "campaign";
  if (/\b(buyer|buyers|customer|customers|member|members|personalized|reactivation|lapsed|visitor|guest|patient)\b/.test(t))
    return "people";
  if (/\b(shipment|warehouse|delivery|route|inventory|logistics|tracking|picking|packing)\b/.test(t)) return "logistics";
  return "spark";
}

function mergePreviewWithVisual(preview, title, desc) {
  const base = preview && typeof preview === "object" ? { ...preview } : {};
  const v = resolvePreviewVisualKey(base.visual) || inferPreviewVisual(title, desc);
  return { ...base, visual: v };
}

function normalizeUseCases(selectedIndustry, useCases) {
  return (useCases || []).map((useCaseItem, index) => {
    if (useCaseItem && typeof useCaseItem === "object") {
      const fallbackTitle = pickTitleFromSentence(useCaseItem.desc || useCaseItem.title || "", 3);
      const title = useCaseItem.title || fallbackTitle;
      const desc = useCaseItem.desc || "";
      const previewSource =
        useCaseItem.preview || {
          title: fallbackTitle,
          body: compactPreviewBody(useCaseItem.desc || useCaseItem.title || ""),
          chips: ["View details", "Run with type work"]
        };
      return {
        tag: useCaseItem.tag || `Use case ${index + 1}`,
        title,
        desc,
        preview: mergePreviewWithVisual(previewSource, title, desc)
      };
    }

    /* String-based use case → infer template + populate from industry/default flavor.
       This is what makes Health & Wellness, Beauty, Travel, F&B, etc. show the
       same Zenoti-style mini-mockups as E-commerce. */
    const desc = String(useCaseItem || "");
    const title = pickTitleFromSentence(desc, 3);
    return {
      tag: `Use case ${index + 1}`,
      title,
      desc,
      preview: generatePreviewForString(selectedIndustry, desc)
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
      renderDetail({ animateSequence: true });
    });
    cardsGrid.appendChild(cardEl);
  });
}

function getPreviewData(useCases, selectedIndex) {
  const selected = useCases[selectedIndex] || useCases[0];
  if (selected && typeof selected === "object" && selected.preview) {
    return mergePreviewWithVisual(selected.preview, selected.title, selected.desc);
  }
  if (selected && typeof selected === "object") {
    return mergePreviewWithVisual(
      {
        title: selected.title,
        body: selected.desc,
        chips: ["View details", "Run with type work"]
      },
      selected.title,
      selected.desc
    );
  }
  return mergePreviewWithVisual(
    {
      title: "Use case preview ready.",
      body: String(selected || ""),
      chips: ["View details", "Run with type work"]
    },
    "",
    String(selected || "")
  );
}

function renderCardBody(useCases, opts = {}) {
  if (!cardBodyEl) return;
  const preview = getPreviewData(useCases, state.selectedUseCaseIndex);
  const templateName = CARD_TEMPLATES[preview.template] ? preview.template : "default";
  const template = CARD_TEMPLATES[templateName];
  cardBodyEl.dataset.template = templateName;
  cardBodyEl.innerHTML = template(preview);
  /* Always: soft blur+fade on body swap. */
  if (typeof cardBodyEl.animate === "function") {
    cardBodyEl.animate(
      [
        { opacity: 0, transform: "translateY(4px)", filter: "blur(4px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
      ],
      { duration: 420, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );
  }
  /* Step 1 of click sequence: a small spring pulse on the card frame. */
  if (opts.popCard) {
    const cardEl = cardBodyEl.closest(".chat-card--top");
    if (cardEl && typeof cardEl.animate === "function") {
      cardEl.animate(
        [
          { transform: "scale(0.97)", offset: 0 },
          { transform: "scale(1.018)", offset: 0.55 },
          { transform: "scale(0.998)", offset: 0.8 },
          { transform: "scale(1)", offset: 1 }
        ],
        { duration: 460, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }
      );
    }
  }
}

/* Step 2 of click sequence: a tactile "press" on the persistent Talk to Max button. */
function runTalkMaxPressAnimation(delayMs = 480) {
  const talkChip = document.querySelector(".chat-card--top .demo-talk-chip");
  if (!talkChip || typeof talkChip.animate !== "function") return;
  talkChip.animate(
    [
      { transform: "scale(1)", offset: 0 },
      { transform: "scale(0.93)", offset: 0.32 },
      { transform: "scale(1.05)", offset: 0.65 },
      { transform: "scale(1)", offset: 1 }
    ],
    { duration: 360, delay: delayMs, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }
  );
}

function renderDetail(opts = {}) {
  const { animateSequence = false } = opts;
  const selectedIndustry = ALL_DROPDOWN_INDUSTRIES.find((item) => item.id === state.selectedId) || getById(state.selectedId);
  const useCases = normalizeUseCases(selectedIndustry, selectedIndustry.useCases || []);
  if (state.selectedUseCaseIndex >= useCases.length) state.selectedUseCaseIndex = 0;
  cardsIndustry.textContent = selectedIndustry.name;
  renderCards(useCases);
  renderCardBody(useCases, { popCard: animateSequence });
  updateDetailBackground(selectedIndustry);
  renderChatOverlay(selectedIndustry, useCases, state.selectedUseCaseIndex, {
    stagger: animateSequence,
    staggerStartMs: 920,
    staggerStepMs: 200
  });
  if (animateSequence) {
    runTalkMaxPressAnimation(480);
  }
}

function runDetailRevealAnimation() {
  if (!detailScreen) return;
  const stage = detailScreen.querySelector(".demo-stage");
  const topCard = detailScreen.querySelector(".chat-card--top");
  const bottomCard = detailScreen.querySelector(".chat-card--bottom");
  const cardsHead = detailScreen.querySelector(".cards-head");
  const useCards = Array.from(detailScreen.querySelectorAll("#cardsGrid .use-card"));
  const nodes = [stage, topCard, bottomCard, cardsHead, ...useCards].filter(Boolean);
  /* Layer stagger scaled to ~1400ms blur reveal (was 900ms). */
  const layerDelays = [0, 187, 560, 747];

  /* Use cards: stagger start times so each card visibly follows the previous (~165ms apart). */
  const cardStaggerMs = 165;
  const firstCardDelayMs = 900;

  nodes.forEach((node, idx) => {
    node.classList.add("reveal-item");
    if (node.classList.contains("use-card")) node.classList.add("reveal-item--card");
    else node.classList.remove("reveal-item--card");
    const delayMs =
      idx < layerDelays.length
        ? layerDelays[idx]
        : firstCardDelayMs + (idx - layerDelays.length) * cardStaggerMs;
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
