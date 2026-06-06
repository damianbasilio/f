# Stitch prompt — Rustic Scruff (rustic-scruff-coal-city)

Use with: `npm run stitch:prompt -- rustic-scruff-coal-city` then `npm run stitch:build -- rustic-scruff-coal-city`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** https://m.facebook.com/RusticScruffGrooming/
**Business:** Rustic Scruff
**Category:** Pet grooming / pet services
**Location:** 740 E Division St, Coal City, IL 60416
**Phone:** +1 815-518-5153
**Email:** rusticscruffgrooming@gmail.com
**Review score:** 4.9
**Page description:** Rustic Scruff, Coal City. 3,070 likes · 11 talking about this · 4 were here. Awarded “Best” in Pet Services Grundy County 2026 - “One of The Best” 2023, 2024 & 2025 ! Let us girls be your go to...

**Recent post captions (write copy that echoes this voice):**
1. "See more about Rustic Scruff"
2. "Awarded \u201cBest\u201d in Pet Services Grundy County 2026 - \u201cOne of The Best\u201d 2023, 2024 & 2025 ! Let us girls be your go to grooming crew! \ud83d\udc36"
3. "740 E Division St., Coal City, IL, United States, Illinois"

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Business identity

- **Name:** Rustic Scruff
- **Type:** Pet grooming / pet services
- **Location:** 740 E Division St, Coal City, IL 60416
- **Hero H1 (use or adapt closely):** Professional pet care in Coal City
- **Hero subhead:** Rustic Scruff, Coal City. 3,070 likes · 11 talking about this · 4 were here. Awarded “Best” in Pet S
- **Primary CTA button:** Book grooming
- **Secondary CTA:** Call us

**Service bullets (feature these prominently):**
- See more about Rustic Scruff
- Breed-specific care
- Walk-ins welcome

---

### Layout brief

**Layout family:** editorial-stack
**Wireframe:** Editorial stack: narrow content column, large typographic headline, photo band below fold, services as horizontal cards.


**Sections (in this order):** hero → credibility → services → gallery → about → visit → contact

---

### Photo inventory

You will receive 5 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #000000;
  --brand-secondary: #203000;
  --brand-accent: #9080c0;
  --font-display: 'Fraunces', serif;
  --font-body: 'Nunito', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #000000 |
| Secondary | #203000 |
| Accent | #9080c0 |

- **Typography:** Load Google Fonts: https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;700&family=Nunito:wght@400;600;700&display=swap
- **Display font:** Fraunces
- **Body font:** Nunito
- **Mood:** Friendly, caring, trustworthy with pets

---

### Anti-slop rules (non-negotiable)

- Do NOT use Tailwind CDN, utility-class-only pages, or Material Symbols as primary UI.
- Do NOT use generic AI landing templates (3-column icon cards, purple/indigo SaaS gradients, Inter/Roboto defaults).
- Do NOT use `transition: all` — animate specific properties with purpose; include `:active` scale on buttons.
- Do NOT invent fake awards, star rating widgets, or "#1 rated" unless review score is provided above.
- Do NOT use stock photo URLs or AI placeholder image services.
- Layout must feel specific to **Pet grooming / pet services** — not a Webflow clone or startup landing page.
- Respect `prefers-reduced-motion`.
- Phone must be a visible `tel:` link in header and hero.
- No menu section. No restaurant language. Focus on pet care and booking.

**Design dials:** variance 7/10 · motion 4/10 · density 6/10

---

### Deliverable requirements

- **Full website:** semantic HTML5, dedicated `styles.css`, dedicated `script.js`
- **Responsive:** desktop-first, clean at 375px width
- **Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (preview only)
- **Copy:** Use post caption voice and service bullets above — no lorem ipsum
- **Unique layout:** editorial-stack — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — Professional pet care in Coal City, subhead, primary CTA (Book grooming), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - See more about Rustic Scruff
- Breed-specific care
- Walk-ins welcome
5. **About** — why locals trust them (from Facebook description)
6. **Gallery** — photo grid for Facebook images
7. **Visit** — `#visit` — address, hours; map panel: `<div class="map-slot" data-map-slot aria-label="Map"></div>` (empty — map injected at build)
8. **Contact** — form + phone + email (preview-only form notice)
9. **Footer** — hours, address, disclaimer space for mockup banner

### Technical

- CSS custom properties with brand hex values above
- Accessible: contrast, focus rings, landmarks
- Mockup banner placeholder at top: "Concept preview — not affiliated with Rustic Scruff"

---
