# Stitch prompt — JBS Towing and Recovery (jbs-towing-and-recovery-chaparral)

Use with: `npm run stitch:prompt -- jbs-towing-and-recovery-chaparral` then `npm run stitch:build -- jbs-towing-and-recovery-chaparral`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** https://www.facebook.com/JBSTowingandRecovery/
**Business:** JBS Towing and Recovery
**Category:** Trades / towing / home services
**Location:** 776 Hermosa Dr, Chaparral, NM 88081
**Phone:** +1 575-386-0170
**Email:** laurag@jbscustoms.com
**Review score:** 4.7
**Page description:** JBS Towing & Recovery, Chaparral. 242 likes · 1 talking about this · 35 were here. OPEN 24/7, Se habla Español. We provide roadside assistance services such as; tire changes, lockouts, fuel and...

**Recent post captions (write copy that echoes this voice):**
1. "Chaparral is freezing, but we’re just warming up! 🧊 Don't stay stuck in the snow. Call us now for a quick winch out. 24\/7 service when you need it most! 📞💨"
2. "See more about JBS Towing & Recovery"
3. "Chaparral is freezing, but we\u2019re just warming up! \ud83e\uddca Don't stay stuck in the snow. Call us now for a quick winch out. 24\/7 service when you need it most! \ud83d\udcde\ud83d\udca8"

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Business identity

- **Name:** JBS Towing and Recovery
- **Type:** Trades / towing / home services
- **Location:** 776 Hermosa Dr, Chaparral, NM 88081
- **Hero H1 (use or adapt closely):** JBS Towing and Recovery — trusted Chaparral service
- **Hero subhead:** JBS Towing & Recovery, Chaparral. 242 likes · 1 talking about this · 35 were here. OPEN 24/7, Se hab
- **Primary CTA button:** Call now
- **Secondary CTA:** Request a quote

**Service bullets (feature these prominently):**
- Chaparral is freezing, but we’re just
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

You will receive 6 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #000000;
  --brand-secondary: #0020d0;
  --brand-accent: #100000;
  --font-display: 'Barlow Condensed', serif;
  --font-body: 'Barlow', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #000000 |
| Secondary | #0020d0 |
| Accent | #100000 |

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
- **Responsive:** desktop-first, clean at 375px width
- **Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (preview only)
- **Copy:** Use post caption voice and service bullets above — no lorem ipsum
- **Unique layout:** asymmetric-grid — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — JBS Towing and Recovery — trusted Chaparral service, subhead, primary CTA (Call now), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - Chaparral is freezing, but we’re just
- Licensed & insured
- Local service area
5. **About** — why locals trust them (from Facebook description)
6. **Gallery** — photo grid for Facebook images
7. **Visit** — `#visit` — address, hours; map panel: `<div class="map-slot" data-map-slot aria-label="Map"></div>` (empty — map injected at build)
8. **Contact** — form + phone + email (preview-only form notice)
9. **Footer** — hours, address, disclaimer space for mockup banner

### Technical

- CSS custom properties with brand hex values above
- Accessible: contrast, focus rings, landmarks
- Mockup banner placeholder at top: "Concept preview — not affiliated with JBS Towing and Recovery"

---
