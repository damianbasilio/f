# Stitch prompt — Halsey's Country Store (halsey-s-country-store-campton)

Use with: `npm run stitch:prompt -- halsey-s-country-store-campton` then `npm run stitch:build -- halsey-s-country-store-campton`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** http://www.facebook.com/HalseysCountryStore
**Business:** Halsey's Country Store
**Category:** Local business
**Location:** 236 Main St, Campton, KY 41301
**Phone:** +1 606-668-3315
**Email:** halseyscountrystore@gmail.com
**Review score:** 4.5
**Page description:** Hardware, Plumbing, Electrical, Paint, Key and Glass Cutting, deli cuts of meat, daily gourmet soups
**Hours:** Closed now

**About / profile details (from Facebook About tab):**
- **Hours:** Closed now
- **Address:** 236 Main St, Campton, KY, United States, 41301

**Full scraped profile (use this for About section, services, and copy voice — do not invent details):**
Hardware, Plumbing, Electrical, Paint, Key and Glass Cutting, deli cuts of meat, daily gourmet soups
Hours: Closed now
Address: 236 Main St, Campton, KY, United States, 41301
Phone: 606-668-3315
Email: halseyscountrystore@gmail.com

Recent posts from their Facebook page:
1. Hardware, Plumbing, Electrical, Paint, Key and Glass Cutting, deli cuts of meat, daily gourmet soups

**Recent post captions (1 useful — echo voice in headlines; skip registry/SKU/listing lines):**
1. "Hardware, Plumbing, Electrical, Paint, Key and Glass Cutting, deli cuts of meat, daily gourmet soups"

**Design read:** Reading this as: a first homepage for Halsey's Country Store in Campton (Local business), Professional, welcoming, community-rooted tone, split-hero layout — must feel tailor-made for this business, not a generic AI landing template.

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Design read (follow this)
Reading this as: a first homepage for Halsey's Country Store in Campton (Local business), Professional, welcoming, community-rooted tone, split-hero layout — must feel tailor-made for this business, not a generic AI landing template.

### Tailor-made (this business only)
- Every headline, service name, and CTA must come from the Facebook scrape above — not generic "Quality Service" filler.
- Write like a local designer who visited their page: use Halsey's Country Store, Campton, and real service bullets.
- Layout family **split-hero**: Split hero: 55% photo left, headline + tel CTA + trust line right; phone visible without scroll on desktop.
- Primary CTA label: **"Contact us"** (verb + object). Phone must be `tel:` in header and hero.
- Avoid generic 3-column icon cards. Use business-specific copy from Facebook scrape.

### Layout discipline (design-taste-frontend)
- Hero MUST fit the initial viewport: H1 max 2 lines, subhead max 20 words, primary CTA visible without scrolling.
- Hero top padding: modest — content should not float halfway down the screen.
- NO identical 3-column icon-card feature rows. Vary section structure: split hero → services (list or staggered grid) → photo gallery → visit → contact.
- Use section layout variety — do not repeat the same card grid pattern in 3+ sections.
- Max 1 small uppercase eyebrow label per 3 sections (no "01 · SERVICES" numbering).
- Navigation: single line on desktop, height ~64–72px, phone or CTA visible.
- Cards only when elevation adds hierarchy; prefer spacing and typography otherwise.

### Typography & color
- Display: **Playfair Display**. Body: **Work Sans**. Load from Google Fonts URL in brief — never default to Inter or Roboto.
- Use brand hex from brief only: primary #404040, secondary #2050b0, accent #d04090.
- No purple/indigo SaaS gradients. No generic cream/beige page background unless the brand is genuinely warm heritage — prefer tinted neutrals from the extracted palette.
- No em dashes (—) in any copy. Use commas, periods, or hyphens.
- No marketing buzzwords: elevate, seamless, world-class, game-changer, leverage, transform.

### Motion & interaction (emil-design-eng)
- Dials: variance 7/10 · motion 4/10 · density 5/10
- UI transitions: 150–250ms, **ease-out** (`cubic-bezier(0.23, 1, 0.32, 1)`). Never `transition: all`.
- Buttons: `:active { transform: scale(0.97) }` for press feedback.
- Entrances: never animate from `scale(0)`; use opacity + scale(0.95) if needed.
- Include `@media (prefers-reduced-motion: reduce)` — disable motion, keep opacity/color only.
- Animate **transform** and **opacity** only — not width, height, margin, padding.

### Anti-slop checklist (impeccable + taste)
- No fake star ratings or unverifiable "#1 rated" claims unless review score is in the brief.
- No side-stripe accent borders on cards. No glassmorphism as default decoration.
- No gradient text on headlines. No decorative uppercase eyebrows on every section.
- No lorem ipsum. No stock photo URLs. Real photo regions for Facebook images.
- Gallery and hero photos should feel like **their** business (storefront, work, products) — not a template stock grid.
- Form is preview-only with visible notice — never simulate "Message sent".

---

### Business identity

- **Name:** Halsey's Country Store
- **Type:** Local business
- **Location:** 236 Main St, Campton, KY 41301
- **Hero H1 (use or adapt closely):** Halsey's Country Store — serving Campton
- **Hero subhead:** Hardware, Plumbing, Electrical, Paint, Key and Glass Cutting, deli cuts of meat, daily …
- **Primary CTA button:** Contact us
- **Secondary CTA:** Learn more

**Service bullets (feature these prominently):**
- Quality service
- Local & trusted
- Easy to reach

---

### Layout brief

**Layout family:** split-hero
**Wireframe:** Split hero: 55% photo left, headline + tel CTA + trust line right; phone visible without scroll on desktop.


**Sections (in this order):** hero → credibility → services → about → gallery → visit → contact

---

### Photo inventory

You will receive 8 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #404040;
  --brand-secondary: #2050b0;
  --brand-accent: #d04090;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Work Sans', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #404040 |
| Secondary | #2050b0 |
| Accent | #d04090 |

- **Typography:** Load Google Fonts: https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Work+Sans:wght@400;500;600&display=swap
- **Display font:** Playfair Display
- **Body font:** Work Sans
- **Mood:** Professional, welcoming, community-rooted

---

### Anti-slop rules (non-negotiable)

- Do NOT use Tailwind CDN, utility-class-only pages, or Material Symbols as primary UI.
- Do NOT use generic AI landing templates (3-column icon cards, purple/indigo SaaS gradients, Inter/Roboto defaults).
- Do NOT use `transition: all` — animate specific properties with purpose; include `:active` scale on buttons.
- Do NOT invent fake awards, star rating widgets, or "#1 rated" unless review score is provided above.
- Do NOT use stock photo URLs or AI placeholder image services.
- Layout must feel specific to **Local business** — not a Webflow clone or startup landing page.
- Respect `prefers-reduced-motion`.
- Phone must be a visible `tel:` link in header and hero.
- Avoid generic 3-column icon cards. Use business-specific copy from Facebook scrape.

**Design dials:** variance 7/10 · motion 4/10 · density 5/10

---

### Deliverable requirements

- **Full website:** semantic HTML5, dedicated `styles.css`, dedicated `script.js`
- **Responsive:** mobile (390px), tablet (768px), desktop (1280px) — no horizontal scroll; hero + primary CTA visible on first mobile screen
- **Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (preview only)
- **Copy:** Use post caption voice and service bullets above — no lorem ipsum
- **Unique layout:** split-hero — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — Halsey's Country Store — serving Campton, subhead, primary CTA (Contact us), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - Quality service
- Local & trusted
- Easy to reach
5. **About** — pull from full scraped profile above; use specific details from their posts (names, offers, community ties)
6. **Gallery** — photo grid for Facebook images
7. **Visit** — `#visit` — address, hours; map panel: `<div class="map-slot" data-map-slot aria-label="Map"></div>` (empty — map injected at build)
8. **Contact** — form + phone + email (preview-only form notice)
9. **Footer** — hours, address, disclaimer space for mockup banner

### Technical

- CSS custom properties with brand hex values above
- Accessible: contrast, focus rings, landmarks
- Mockup banner placeholder at top: "Concept preview — not affiliated with Halsey's Country Store"

---
