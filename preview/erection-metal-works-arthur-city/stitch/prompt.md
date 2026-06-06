# Stitch prompt — Erection Metal Works (erection-metal-works-arthur-city)

Use with: `npm run stitch:prompt -- erection-metal-works-arthur-city` then `npm run stitch:build -- erection-metal-works-arthur-city`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** https://www.facebook.com/HayesEMetalWorks/
**Business:** Erection Metal Works
**Category:** Trades / towing / home services
**Location:** 11467 US-271, Arthur City, TX 75411
**Phone:** +1 903-495-0003
**Email:** ErectionMetalWorks@gmail.com
**Review score:** Not provided
**Page description:** Oh hail no 😳⛈️ not your roof too!!! That storm did not come to play… and your roof might be paying for it 😬 Even if everything looks fine, hail damage can hide and turn into leaks and expensive repairs later 💸 Do not wait until you have water dripping inside your house 🚫💧 Let us take a look and give you a quick, honest answer with no pressure 👍 We will help you get it handled fast so you can relax before the next storm rolls in 🏠✨ Call us today 📞 before small damage turns into a big problem 😅
**Hours:** See Facebook page for current hours

**About / profile details (from Facebook About tab):**
Use location and phone from above.

**Full scraped profile (use this for About section, services, and copy voice — do not invent details):**
Oh hail no 😳⛈️ not your roof too!!! That storm did not come to play… and your roof might be paying for it 😬 Even if everything looks fine, hail damage can hide and turn into leaks and expensive repairs later 💸 Do not wait until you have water dripping inside your house 🚫💧 Let us take a look and give you a quick, honest answer with no pressure 👍 We will help you get it handled fast so you can relax before the next storm rolls in 🏠✨ Call us today 📞 before small damage turns into a big problem 😅
Phone: 903-495-0003
Email: ErectionMetalWorks@gmail.com

Recent posts from their Facebook page:
1. Oh hail no 😳⛈️ not your roof too!!! That storm did not come to play… and your roof might be paying for it 😬 Even if everything looks fine, hail damage can hide and turn into leaks and expensive repairs later 💸 Do not wait until you have water dripping inside your house 🚫💧 Let us take a look and give you a quick, honest answer with no pressure 👍 We will help you get it handled fast so you can relax before the next storm rolls in 🏠✨ Call us today 📞 before small damage turns into a big problem 😅
2. We specialize in custom-built shops, shop houses, carports, campertops, awnings, and more. Whether it’s a unique design or a classic structure, we bring your vision to life with quality craftsmanship, attention to detail, and lasting style!

**Recent post captions (2 useful — echo voice in headlines; skip registry/SKU/listing lines):**
1. "Oh hail no 😳⛈️ not your roof too!!! That storm did not come to play… and your roof might be paying for it 😬 Even if everything looks fine, hail damage can hide and turn into leaks and expensive repairs later 💸 Do not wait until you have water dripping inside your house 🚫💧 Let us take a look and give you a quick, honest answer with no pressure 👍 We will help you get it handled fast so you can…"
2. "We specialize in custom-built shops, shop houses, carports, campertops, awnings, and more. Whether it’s a unique design or a classic structure, we bring your vision to life with quality craftsmanship, attention to detail, and lasting style!"

**Design read:** Reading this as: a first homepage for Erection Metal Works in Arthur City (Trades / towing / home services), Reliable, local, ready when you need us tone, asymmetric-grid layout — must feel tailor-made for this business, not a generic AI landing template.

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Design read (follow this)
Reading this as: a first homepage for Erection Metal Works in Arthur City (Trades / towing / home services), Reliable, local, ready when you need us tone, asymmetric-grid layout — must feel tailor-made for this business, not a generic AI landing template.

### Tailor-made (this business only)
- Every headline, service name, and CTA must come from the Facebook scrape above — not generic "Quality Service" filler.
- Write like a local designer who visited their page: use Erection Metal Works, Arthur City, and real service bullets.
- Layout family **asymmetric-grid**: Asymmetric grid: offset hero image, overlapping credibility strip, services in staggered two-column layout.
- Primary CTA label: **"Call now"** (verb + object). Phone must be `tel:` in header and hero.
- No menu or reservation language. Phone must be tel: link in header and hero. Sticky mobile call bar required.

### Layout discipline (design-taste-frontend)
- Hero MUST fit the initial viewport: H1 max 2 lines, subhead max 20 words, primary CTA visible without scrolling.
- Hero top padding: modest — content should not float halfway down the screen.
- NO identical 3-column icon-card feature rows. Vary section structure: split hero → services (list or staggered grid) → photo gallery → visit → contact.
- Use section layout variety — do not repeat the same card grid pattern in 3+ sections.
- Max 1 small uppercase eyebrow label per 3 sections (no "01 · SERVICES" numbering).
- Navigation: single line on desktop, height ~64–72px, phone or CTA visible.
- Cards only when elevation adds hierarchy; prefer spacing and typography otherwise.

### Typography & color
- Display: **Barlow Condensed**. Body: **Barlow**. Load from Google Fonts URL in brief — never default to Inter or Roboto.
- Use brand hex from brief only: primary #303030, secondary #000000, accent #2090a0.
- No purple/indigo SaaS gradients. No generic cream/beige page background unless the brand is genuinely warm heritage — prefer tinted neutrals from the extracted palette.
- No em dashes (—) in any copy. Use commas, periods, or hyphens.
- No marketing buzzwords: elevate, seamless, world-class, game-changer, leverage, transform.

### Motion & interaction (emil-design-eng)
- Dials: variance 6/10 · motion 3/10 · density 5/10
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

- **Name:** Erection Metal Works
- **Type:** Trades / towing / home services
- **Location:** 11467 US-271, Arthur City, TX 75411
- **Hero H1 (use or adapt closely):** Erection Metal Works — trusted Arthur City service
- **Hero subhead:** Oh hail no 😳⛈️ not your roof too!!! That storm did not come to play… and your roof mig…
- **Primary CTA button:** Call now
- **Secondary CTA:** Request a quote

**Service bullets (feature these prominently):**
- We specialize in custom-built shops, shop houses, carports, campertops, awnings, and more
- 24/7 availability
- Licensed & insured
- Local service area

---

### Layout brief

**Layout family:** asymmetric-grid
**Wireframe:** Asymmetric grid: offset hero image, overlapping credibility strip, services in staggered two-column layout.
**Mobile:** Include sticky bottom call bar with tel: link for emergency/trades vertical.

**Sections (in this order):** hero → credibility → services → service-area → about → visit → contact

---

### Photo inventory

You will receive 10 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #303030;
  --brand-secondary: #000000;
  --brand-accent: #2090a0;
  --font-display: 'Barlow Condensed', serif;
  --font-body: 'Barlow', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #303030 |
| Secondary | #000000 |
| Accent | #2090a0 |

- **Typography:** Load Google Fonts: https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap
- **Display font:** Barlow Condensed
- **Body font:** Barlow
- **Mood:** Reliable, local, ready when you need us

---

### Anti-slop rules (non-negotiable)

- Do NOT use Tailwind CDN, utility-class-only pages, or Material Symbols as primary UI.
- Do NOT use generic AI landing templates (3-column icon cards, purple/indigo SaaS gradients, Inter/Roboto defaults).
- Do NOT use `transition: all` — animate specific properties with purpose; include `:active` scale on buttons.
- Do NOT invent fake awards, star rating widgets, or "#1 rated" unless review score is provided above.
- Do NOT use stock photo URLs or AI placeholder image services.
- Layout must feel specific to **Trades / towing / home services** — not a Webflow clone or startup landing page.
- Respect `prefers-reduced-motion`.
- Phone must be a visible `tel:` link in header and hero.
- No menu or reservation language. Phone must be tel: link in header and hero. Sticky mobile call bar required.

**Design dials:** variance 6/10 · motion 3/10 · density 5/10

---

### Deliverable requirements

- **Full website:** semantic HTML5, dedicated `styles.css`, dedicated `script.js`
- **Responsive:** mobile (390px), tablet (768px), desktop (1280px) — no horizontal scroll; hero + primary CTA visible on first mobile screen
- **Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (preview only)
- **Copy:** Use post caption voice and service bullets above — no lorem ipsum
- **Unique layout:** asymmetric-grid — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — Erection Metal Works — trusted Arthur City service, subhead, primary CTA (Call now), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - We specialize in custom-built shops, shop houses, carports, campertops, awnings, and more
- 24/7 availability
- Licensed & insured
- Local service area
5. **About** — pull from full scraped profile above; use specific details from their posts (names, offers, community ties)
6. **Gallery** — photo grid for Facebook images
7. **Visit** — `#visit` — address, hours; map panel: `<div class="map-slot" data-map-slot aria-label="Map"></div>` (empty — map injected at build)
8. **Contact** — form + phone + email (preview-only form notice)
9. **Footer** — hours, address, disclaimer space for mockup banner

### Technical

- CSS custom properties with brand hex values above
- Accessible: contrast, focus rings, landmarks
- Mockup banner placeholder at top: "Concept preview — not affiliated with Erection Metal Works"

---
