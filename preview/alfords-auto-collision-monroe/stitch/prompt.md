# Stitch prompt — Alfords Auto Collision (alfords-auto-collision-monroe)

Use with: `npm run stitch:prompt -- alfords-auto-collision-monroe` then `npm run stitch:build -- alfords-auto-collision-monroe`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** https://www.facebook.com/alfordsautocollision/
**Business:** Alfords Auto Collision
**Category:** Trades / towing / home services
**Location:** 2515 Washington St, Monroe, LA 71201
**Phone:** +1 318-512-4755
**Email:** alfordsautocollision@yahoo.com
**Review score:** 4.7
**Page description:** The owner of Alford’s Auto Collision is Frank Alford. He has 25 plus years in the automotive collision industry. He decided to start his own business back in 2016. He started off small then moved to our current location.
**Hours:** Closed now

**About / profile details (from Facebook About tab):**
- **Hours:** Closed now
- **Address:** 2515 Washington Street, Monroe, LA, United States, 71201

**Full scraped profile (use this for About section, services, and copy voice — do not invent details):**
The owner of Alford’s Auto Collision is Frank Alford. He has 25 plus years in the automotive collision industry. He decided to start his own business back in 2016. He started off small then moved to our current location.
Hours: Closed now
Address: 2515 Washington Street, Monroe, LA, United States, 71201
Phone: 318-512-4755

Recent posts from their Facebook page:
1. Alford's Auto Collision's Photo
2. The owner of Alford’s Auto Collision is Frank Alford. He has 25 plus years in the automotive collision industry. He decided to start his own business back in 2016. He started off small then moved to our current location.

**Recent post captions (2 scraped — echo this voice in headlines and body copy):**
1. "Alford's Auto Collision's Photo"
2. "The owner of Alford’s Auto Collision is Frank Alford. He has 25 plus years in the automotive collision industry. He decided to start his own business back in 2016. He started off small then moved to our current location."

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Business identity

- **Name:** Alfords Auto Collision
- **Type:** Trades / towing / home services
- **Location:** 2515 Washington St, Monroe, LA 71201
- **Hero H1 (use or adapt closely):** Alfords Auto Collision — trusted Monroe service
- **Hero subhead:** The owner of Alford’s Auto Collision is Frank Alford. He has 25 plus years in the automotive collision industry. He decided to start his own business back in 2016. He started off s
- **Primary CTA button:** Call now
- **Secondary CTA:** Request a quote

**Service bullets (feature these prominently):**
- 24/7 availability
- Licensed & insured
- Local service area

---

### Layout brief

**Layout family:** full-bleed-photo
**Wireframe:** Full-bleed photo hero with dark gradient overlay; headline and primary CTA centered; sticky mobile call bar.
**Mobile:** Include sticky bottom call bar with tel: link for emergency/trades vertical.

**Sections (in this order):** hero → credibility → services → service-area → about → visit → contact

---

### Photo inventory

You will receive 12 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #000000;
  --brand-secondary: #6040d0;
  --brand-accent: #90e040;
  --font-display: 'Barlow Condensed', serif;
  --font-body: 'Barlow', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #000000 |
| Secondary | #6040d0 |
| Accent | #90e040 |

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
- **Unique layout:** full-bleed-photo — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — Alfords Auto Collision — trusted Monroe service, subhead, primary CTA (Call now), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - 24/7 availability
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
- Mockup banner placeholder at top: "Concept preview — not affiliated with Alfords Auto Collision"

---
