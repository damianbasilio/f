# Stitch prompt — Santa Fe Bakery (santa-fe-bakery-des-moines)

Use with: `npm run stitch:prompt -- santa-fe-bakery-des-moines` then `npm run stitch:build -- santa-fe-bakery-des-moines`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** https://www.facebook.com/SANTAFEBAKERYLLC/
**Business:** Santa Fe Bakery
**Category:** Restaurant / food service
**Location:** 1320 East Euclid Avenue, Des Moines, IA 50316
**Phone:** (515) 447-9217
**Email:** santafebakery@outlook.com
**Review score:** 4.4
**Page description:** Santa Fe Bakery, Des Moines. 2,381 likes · 22 talking about this · 42 were here. .𝐂𝐚𝐬𝐚 𝐝𝐞 𝐥𝐚𝐬 𝐜𝐨𝐧𝐜𝐡𝐚𝐬 . 𝐏𝐚𝐧𝐚𝐝𝐞𝐫𝐢́𝐚 𝐲 𝐑𝐞𝐩𝐨𝐬𝐭𝐞𝐫𝐢́𝐚
**Hours:** Open now

**About / profile details (from Facebook About tab):**
- **Hours:** Open now
- **Address:** 1320 E Euclid Ave, Des Moines, IA, United States, 50316

**Full scraped profile (use this for About section, services, and copy voice — do not invent details):**
Santa Fe Bakery, Des Moines. 2,381 likes · 22 talking about this · 42 were here. .𝐂𝐚𝐬𝐚 𝐝𝐞 𝐥𝐚𝐬 𝐜𝐨𝐧𝐜𝐡𝐚𝐬 . 𝐏𝐚𝐧𝐚𝐝𝐞𝐫𝐢́𝐚 𝐲 𝐑𝐞𝐩𝐨𝐬𝐭𝐞𝐫𝐢́𝐚
Hours: Open now
Address: 1320 E Euclid Ave, Des Moines, IA, United States, 50316
Phone: 515-447-9217
Email: santafebakery@outlook.com

Recent posts from their Facebook page:
1. ✨ ¡Pasa por tu pan dulce! ✨ Tenemos deliciosas donas 🍩, empanadas de todos los sabores! 🥟 ¡Y mucha más variedad para que disfrutes! 🤩 Te esperamos 🤎
2. .𝐂𝐚𝐬𝐚 𝐝𝐞 𝐥𝐚𝐬 𝐜𝐨𝐧𝐜𝐡𝐚𝐬 . 𝐏𝐚𝐧𝐚𝐝𝐞𝐫𝐢́𝐚 𝐲 𝐑𝐞𝐩𝐨𝐬𝐭𝐞𝐫𝐢́𝐚

**Recent post captions (2 useful — echo voice in headlines; skip registry/SKU/listing lines):**
1. "✨ ¡Pasa por tu pan dulce! ✨ Tenemos deliciosas donas 🍩, empanadas de todos los sabores! 🥟 ¡Y mucha más variedad para que disfrutes! 🤩 Te esperamos 🤎"
2. ".𝐂𝐚𝐬𝐚 𝐝𝐞 𝐥𝐚𝐬 𝐜𝐨𝐧𝐜𝐡𝐚𝐬 . 𝐏𝐚𝐧𝐚𝐝𝐞𝐫𝐢́𝐚 𝐲 𝐑𝐞𝐩𝐨𝐬𝐭𝐞𝐫𝐢́𝐚"

**Design read:** Reading this as: a first homepage for Santa Fe Bakery in Des Moines (Restaurant / food service), Warm, appetizing, neighborhood favorite tone, asymmetric-grid layout — must feel tailor-made for this business, not a generic AI landing template.

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Design read (follow this)
Reading this as: a first homepage for Santa Fe Bakery in Des Moines (Restaurant / food service), Warm, appetizing, neighborhood favorite tone, asymmetric-grid layout — must feel tailor-made for this business, not a generic AI landing template.

### Tailor-made (this business only)
- Every headline, service name, and CTA must come from the Facebook scrape above — not generic "Quality Service" filler.
- Write like a local designer who visited their page: use Santa Fe Bakery, Des Moines, and real service bullets.
- Layout family **asymmetric-grid**: Asymmetric grid: offset hero image, overlapping credibility strip, services in staggered two-column layout.
- Primary CTA label: **"View menu & call"** (verb + object). Phone must be `tel:` in header and hero.
- No fake Google star widgets unless review_score provided. Include menu/reservations language, not generic SaaS features.

### Layout discipline (design-taste-frontend)
- Hero MUST fit the initial viewport: H1 max 2 lines, subhead max 20 words, primary CTA visible without scrolling.
- Hero top padding: modest — content should not float halfway down the screen.
- NO identical 3-column icon-card feature rows. Vary section structure: split hero → services (list or staggered grid) → photo gallery → visit → contact.
- Use section layout variety — do not repeat the same card grid pattern in 3+ sections.
- Max 1 small uppercase eyebrow label per 3 sections (no "01 · SERVICES" numbering).
- Navigation: single line on desktop, height ~64–72px, phone or CTA visible.
- Cards only when elevation adds hierarchy; prefer spacing and typography otherwise.

### Typography & color
- Display: **DM Serif Display**. Body: **DM Sans**. Load from Google Fonts URL in brief — never default to Inter or Roboto.
- Use brand hex from brief only: primary #2040d0, secondary #109050, accent #7050b0.
- No purple/indigo SaaS gradients. No generic cream/beige page background unless the brand is genuinely warm heritage — prefer tinted neutrals from the extracted palette.
- No em dashes (—) in any copy. Use commas, periods, or hyphens.
- No emojis anywhere — not in headings, buttons, labels, or body copy.
- No marketing buzzwords: elevate, seamless, world-class, game-changer, leverage, transform.

### Motion & interaction (emil-design-eng)
- Dials: variance 8/10 · motion 5/10 · density 7/10
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

- **Name:** Santa Fe Bakery
- **Type:** Restaurant / food service
- **Location:** 1320 East Euclid Avenue, Des Moines, IA 50316
- **Hero H1 (use or adapt closely):** Santa Fe Bakery — Des Moines's local favorite
- **Hero subhead:** Santa Fe Bakery, Des Moines. 2,381 likes · 22 talking about this · 42 were here. .𝐂𝐚�…
- **Primary CTA button:** View menu & call
- **Secondary CTA:** Get directions

**Service bullets (feature these prominently):**
- Daily specials
- Catering & events
- Dine-in & takeout

---

### Layout brief

**Layout family:** asymmetric-grid
**Wireframe:** Asymmetric grid: offset hero image, overlapping credibility strip, services in staggered two-column layout.


**Sections (in this order):** hero → credibility → menu-highlights → about → gallery → visit → contact

---

### Photo inventory

You will receive 12 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #2040d0;
  --brand-secondary: #109050;
  --brand-accent: #7050b0;
  --font-display: 'DM Serif Display', serif;
  --font-body: 'DM Sans', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #2040d0 |
| Secondary | #109050 |
| Accent | #7050b0 |

- **Typography:** Load Google Fonts: https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap
- **Display font:** DM Serif Display
- **Body font:** DM Sans
- **Mood:** Warm, appetizing, neighborhood favorite

---

### Anti-slop rules (non-negotiable)

- Do NOT use Tailwind CDN, utility-class-only pages, or Material Symbols as primary UI.
- Do NOT use generic AI landing templates (3-column icon cards, purple/indigo SaaS gradients, Inter/Roboto defaults).
- Do NOT use `transition: all` — animate specific properties with purpose; include `:active` scale on buttons.
- Do NOT invent fake awards, star rating widgets, or "#1 rated" unless review score is provided above.
- Do NOT use stock photo URLs or AI placeholder image services.
- Do NOT use emojis anywhere — no emoji in headings, buttons, body copy, or labels.
- Layout must feel specific to **Restaurant / food service** — not a Webflow clone or startup landing page.
- Respect `prefers-reduced-motion`.
- Phone must be a visible `tel:` link in header and hero.
- No fake Google star widgets unless review_score provided. Include menu/reservations language, not generic SaaS features.

**Design dials:** variance 8/10 · motion 5/10 · density 7/10

---

### Deliverable requirements

- **Full website:** semantic HTML5, dedicated `styles.css`, dedicated `script.js`
- **Responsive:** mobile (390px), tablet (768px), desktop (1280px) — no horizontal scroll; hero + primary CTA visible on first mobile screen
- **Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (preview only)
- **Copy:** Use post caption voice and service bullets above — no lorem ipsum
- **Unique layout:** asymmetric-grid — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — Santa Fe Bakery — Des Moines's local favorite, subhead, primary CTA (View menu & call), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - Daily specials
- Catering & events
- Dine-in & takeout
5. **About** — pull from full scraped profile above; use specific details from their posts (names, offers, community ties)
6. **Gallery** — photo grid for Facebook images
7. **Visit** — `#visit` — address, hours; map panel: `<div class="map-slot" data-map-slot aria-label="Map"></div>` (empty — map injected at build)
8. **Contact** — form + phone + email (preview-only form notice)
9. **Footer** — hours, address, disclaimer space for mockup banner

### Technical

- CSS custom properties with brand hex values above
- Accessible: contrast, focus rings, landmarks
- Mockup banner placeholder at top: "Concept preview — not affiliated with Santa Fe Bakery"

---
