---
name: typework-industry-landing-block
description: >
  Generates a self-contained HTML file for Typework.ai's "Find Your Industry"
  landing page module. Use this skill whenever the user asks to add a new
  industry, expand the industry library, generate use cases for a sector,
  or produce the interactive left-image + floating-cards + right-use-cases
  block for any industry vertical. Also triggers when the user says "generate
  industry HTML", "write use cases for [industry]", "add [industry] to the
  landing page", or "create the industry block for [sector]".
compatibility:
  tools: [bash_tool, create_file, present_files]
---

# Typework Industry Landing Block — Generator Skill

## What This Skill Produces

A single `.html` file that renders a two-column interactive section:

- **Left column**: Full-bleed industry photo with 2–3 floating AI scenario cards
  that animate in when a use case is selected.
- **Right column**: 5 clickable use case cards. Clicking one swaps the
  floating cards on the left.

The output must be pixel-faithful to the reference design (see Design Spec
below) and immediately usable — paste into Webflow, export to the repo, or
hand to a developer as a component.

---

## Step-by-Step Process

### Step 1 — Identify the industry

Extract the industry name from the user's message. If ambiguous, ask once:
"Which industry should I generate? e.g. Pet Care, Legal Services, Dental."

Map to one of the canonical names if possible (see Industry Library below).
Otherwise treat the user's name as canonical.

### Step 2 — Generate the data object

For the requested industry, produce a JSON data object following the
**Industry Data Schema** exactly. This is the most important creative step.

Rules for writing good content:
- **Use case titles**: action-oriented, 4–6 words, operator language not
  tech jargon. "Inventory Intelligence" not "AI-powered stock management".
- **Use case descriptions**: one sentence, concrete benefit, present tense.
- **Float cards**: must feel like real software screenshots — specific numbers,
  real names, real amounts. Never write "[insert data here]".
- **Card variety**: each use case should show 2–3 cards of DIFFERENT types.
  Never use the same type twice within one use case.
- **Card types available**: `chat`, `data`, `action`, `content`, `reply`, `hr`.

### Step 3 — Select a background image

Choose a free Unsplash URL that shows real people in a realistic work context
for that industry. Format: `https://images.unsplash.com/photo-XXXXXXX?w=900&q=80`

Use specific, realistic photo IDs — do not invent URLs. Good fallback:
`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80`

### Step 4 — Write the HTML file

Use the **HTML Template** (see below) as the base. Inject:
1. The industry name into `INDUSTRIES` object and the badge
2. The complete data object for all 5 use cases
3. The background image URL

Do NOT modify the CSS, layout, or JS render engine. Only inject data.

### Step 5 — Save and present

```bash
# Save to outputs
cp /home/claude/typework-[industry-slug].html /mnt/user-data/outputs/
```

Then call `present_files` with the output path.

---

## Industry Data Schema

Each industry entry must follow this exact shape:

```json
{
  "Industry Name": {
    "image": "https://images.unsplash.com/photo-XXXXX?w=900&q=80",
    "useCases": [
      {
        "id": "unique-slug",
        "tag": "Use case 1",
        "title": "Short Action Title",
        "desc": "One sentence. Concrete operator benefit.",
        "cards": [
          {
            "type": "chat",
            "pos": "pos-tl",
            "avatar": "🤖",
            "name": "Typework AI",
            "body": "Specific message with <strong>bold key term</strong>.",
            "actions": [
              { "label": "Button text", "primary": false },
              { "label": "Primary action", "primary": true }
            ]
          },
          {
            "type": "data",
            "pos": "pos-bl",
            "label": "Section label",
            "rows": [
              { "item": "Row label", "val": "Value", "valClass": "up|down|warn|" }
            ]
          }
        ]
      }
    ]
  }
}
```

### Card type specs

| type | Required fields | Notes |
|------|----------------|-------|
| `chat` | avatar, name, body, actions | Use for AI conversation turns |
| `data` | label, rows (item+val+valClass) | Metrics, reports, analytics |
| `action` | tag, text, actions | Suggested next step with CTA |
| `content` | tag, lines[], meta | Generated marketing copy |
| `reply` | msg, actions | Customer service drafted reply |
| `hr` | role, snippet, actions | Hiring / staff management |

### Position tokens

Use exactly these strings for `pos`:
- `pos-tl` — top left of image
- `pos-bl` — bottom left
- `pos-tr` — top right
- `pos-br` — bottom right
- `pos-mid` — centered (use sparingly)

Assign positions so cards don't overlap. Typical combos:
- 2 cards: `pos-tl` + `pos-bl`
- 3 cards: `pos-tl` + `pos-bl` + `pos-tr`

---

## HTML Template

The render engine is fixed. Copy the full template from the reference file
`/home/claude/typework-industry-block.html` (or from outputs if it was moved).

Only modify:
1. `<title>` — update industry name
2. `const INDUSTRIES = { ... }` — replace with new industry data
3. `activeIndustry = "..."` — match the key in INDUSTRIES
4. `id="industryBadge"` text content
5. The `<img>` src default

Everything else (CSS, render functions, event logic) stays identical.

---

## Design Spec (do not modify)

```
Layout:       2-column grid, 50/50, gap 32px, max-width 1160px
Left column:  border-radius 20px, aspect-ratio 4/5, overflow hidden
Image:        object-fit cover, brightness 0.82, dark gradient overlay
Float cards:  white bg, backdrop-blur 12px, border-radius 14px, shadow
              width ~240px (varies by pos), opacity transition 250ms
Right column: 2-col grid of use case cards, 5th spans full width
UC cards:     white bg, border 1.5px, active state brand orange + light fill
Brand color:  #f97058 (orange-red)
Badge:        dark pill, rainbow underline gradient
Fonts:        Sora (headings/titles), DM Sans (body)
```

---

## Industry Library (canonical names)

When the user requests one of these, use the exact name as the data key:

### Tier 1 — Already written (reference data in typework-industry-block.html)
- E-commerce & Retail

### Tier 2 — High priority, generate next
- Restaurants & Cafés
- Fitness & Gyms
- Salons & Spas
- Clinics & Healthcare
- Real Estate

### Tier 3 — Expand on request
- Pet Care & Grooming
- Wedding & Events
- Photography & Creative Studios
- Dental & Orthodontics
- Home Cleaning Services
- Childcare & Daycare
- Legal Services
- Accounting & Bookkeeping
- Property Management
- Coworking & Shared Offices
- Catering & Food Delivery
- Pharmacy
- Tattoo & Piercing Studios
- Music & Arts Education
- Personal Training
- Veterinary Clinics
- Interior Design & Architecture
- Moving & Relocation
- Car Rental & Fleet
- Tourism & Tour Operators
- Language Schools
- Printing & Signage
- Security Services
- Landscaping & Garden Care
- Swimming & Aquatic Centers
- Massage & Physiotherapy
- Nutrition & Dietetics
- Driving Schools
- IT Support & MSP
- Staffing & Recruitment
- Insurance Brokers
- Storage & Warehousing
- Film & Video Production
- Nonprofit & Charity
- Manufacturing
- Logistics & Supply Chain
- Professional Services
- Technology SaaS
- Financial Services
- Automotive & Repair
- Education & Training
- Construction & Trades
- Agriculture & Farming
- Health & Wellness
- Beauty & Personal Care
- Travel & Hospitality
- Food & Beverage

---

## Dropdown Options (Landing Page-Industry)

When applying this skill to `Landing Page-Industry.html`, follow this rule:

1. **Hero dropdown uses full library**: include Tier 1 + Tier 2 + Tier 3
   industries, so users can search and select any supported vertical.
2. **Top pills keep Figma set**: only render the 15 featured industries from
   the reference design as visible shortcut buttons.
3. **Fallback behavior**: if a newly added dropdown industry has no dedicated
   use case content yet, temporarily reuse the `E-commerce & Retail` use case
   structure until custom copy is provided.

Featured 15 industries for pills:
- E-commerce & Retail
- Health & Wellness
- Beauty & Personal Care
- Travel & Hospitality
- Food & Beverage
- Manufacturing
- Logistics & Supply Chain
- Professional Services
- Clinic&Healthcare
- Technology SaaS
- Financial Services
- Automotive & Repair
- Education & Training
- Construction & Trades
- Agriculture & Farming

---

## Content Quality Rules

1. **No generic phrases**: "streamline operations", "boost efficiency",
   "AI-powered" — these are forbidden in card copy. Write specific outcomes.

2. **Real numbers**: Every data card must contain at least one specific number.
   Invent plausible ones (not round numbers like "100%"). E.g. "–47% no-shows",
   "$3,240 recovered", "91 of 284 carts".

3. **Operator language**: Write as if you ran this business for 10 years.
   "Your 6 AM spin class stays full" not "class utilization improves".

4. **Card body length**: chat body ≤ 2 sentences. data rows: 3–4 max.
   action text ≤ 1 sentence. content lines: 3 max. reply msg ≤ 2 sentences.

5. **Use case 5 always spans full width** (grid-column: span 2). Make its
   title and desc slightly broader/summary in nature.

---

## AI Generation & Assisted Generation Playbook (Conversation-Proven)

Use this section when maintaining or evolving the interactive
`Landing Page-Industry` implementation in-repo (not just generating a static
HTML export).

### 1) Two execution modes

1. **Template export mode (strict)**  
   Follow Step 4 "inject data only" and do not alter rendering engine.
2. **In-repo evolution mode (allowed)**  
   You may update JS/CSS/HTML behavior to ensure industry-aware generation,
   interaction correctness, and visual consistency.

### 2) Industry-aware AI adaptation rules

When user selects an industry, ALL generated/assisted content must update
together:

- Right-side use-case cards (`title`, `desc`, active state copy)
- Left top preview card (`previewTitle`, `previewBody`, chips)
- Left bottom conversation card (user prompt + TypeWriter reply)
- Background scene image (industry-matched workplace context)

Never keep fallback generic wording such as fixed "Smart inventory..."
headlines once an industry is selected.

### 3) Use case copy compression rules

For UI cards, prioritize concise operator language:

- Keep each `useCase.desc` to one short sentence
- When asked to simplify, reduce about 7-8 words while preserving intent
- Avoid filler like "based on selected ... context" unless explicitly needed
- Keep terminology action-oriented and business-operator friendly

### 4) Conversation card generation rules

Bottom conversation card should be a real dialogue block, not a static image:

- Left side avatar: TypeWriter avatar
- User line: short task prompt (avoid exposing industry name directly in text)
- Assistant line: short actionable draft response
- Remove non-essential metadata when requested (e.g. top meta line, badges)
- Keep response length bounded to avoid overflow in compact card heights

### 5) Background scene strategy (important)

User-approved source priority:

1. **Per-industry fixed Unsplash direct URL** (most stable, deterministic)
2. **Unsplash keyword query URL** (dynamic fallback)
3. Existing local/Figma fallback image only when remote load fails

For best match quality:

- Maintain `INDUSTRY_BG_IMAGES` map for core industries
- Maintain `INDUSTRY_BG_QUERIES` for uncovered industries
- Queries should describe workplace + role + tool context
  (e.g. ecommerce warehouse inventory laptop packing)

### 6) Visual tuning constraints captured from user feedback

- Top preview card height may be adjusted both up/down depending on layout
  stage (example: 255px -> 215px, then restored to 255px)
- Border opacity may need explicit low-alpha tuning (e.g. 20%)
- Top preview card can require fully opaque border (`rgba(239,239,239,1)`)
- Remove unintended outer white fill/border layers when nesting chat cards
- Warm white palettes should remain very light for overlays and chat surfaces
- User chat bubble should use warm white tones (avoid blue-tinted bubble backgrounds)
- Bottom chat container may require warm white background + 4px border
- Arrow asset can be placed outside top card, aligned below it (left-aligned)
- `Talk to Max` button can be placed inside top card bottom area when requested

### 7) Motion & transition rules (second screen reveal)

When navigating from hero to detail/use-case view:

- Avoid full instant render; reveal in layers with easing
- Recommended reveal order:
  1. Stage background
  2. Top card
  3. Arrow
  4. Bottom chat card
  5. Right panel header
  6. Right use-case cards one-by-one
- Use smooth ease-out/ease-back curves for premium feel
- Add stagger to right-side cards (conversation-approved: +20ms extra per card)
- Ensure animation does not block click/navigation logic

### 8) Robustness guardrails

- Industry click must never be blocked by overlay rendering errors
- Avoid undefined DOM references in render pipeline
- If adding new generated sections, keep graceful fallback behavior
  (no blank panels, no frozen navigation)
- On visual-generation failures, maintain deterministic fallbacks
  (no hard crash, no locked detail page)

### 9) Background image quality guardrails (strict)

Generated/selected background images must satisfy all:

1. Include **people actively working**
2. Show **industry environment context** (not isolated objects)
3. Prioritize **work/office/operations scene state**

Implementation preference:

- Prefer Unsplash query strings explicitly containing
  `person working ... environment`
- For high-priority industries, maintain fixed curated Unsplash links
- Keep fallback chain safe (query -> curated -> local/figma fallback)

---

## Skill Installation & Usage (Local Skill Runtime)

Put the `SKILL.md` file in the correct directory below, then describe requirements
directly in conversation. Claude will auto-read the skill and execute by spec.

### Step 1: Put files into target directory

Create this path in your environment:

`/mnt/skills/user/typework-industry-landing-block/SKILL.md`

Also place the template HTML there (the skill references it):

`/mnt/skills/user/typework-industry-landing-block/typework-industry-block.html`

### Step 2: Directly describe your request

Start a new conversation and simply say:

- "帮我生成 Salons & Spas 的 industry block"
- "给 Dental & Orthodontics 行业生成 Typework landing block"

Claude will automatically:

1. Read skill
2. Build industry data
3. Inject template
4. Output final HTML file

### Can be used in current conversation too

No need to wait for a new thread. You can directly test in current chat:

"用 typework-industry-landing-block 这个 skill，帮我生成 Salons & Spas"

---

## Example: Generating a New Industry

User says: "Add Dental & Orthodontics to the industry block"

Claude should:
1. Write the data object for "Dental & Orthodontics" with 5 use cases and
   all card content following the rules above.
2. Copy the reference HTML template.
3. Inject the new data object.
4. Save as `typework-dental.html` and present.

The user should receive a working HTML file they can open in a browser
immediately, with no additional steps required.
