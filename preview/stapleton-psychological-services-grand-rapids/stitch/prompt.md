# Stitch prompt — Stapleton Psychological Services (stapleton-psychological-services-grand-rapids)

Use with: `npm run stitch:prompt -- stapleton-psychological-services-grand-rapids` then `npm run stitch:build -- stapleton-psychological-services-grand-rapids`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** https://www.facebook.com/people/Stapleton-Psychological-Services/100085392804005/
**Business:** Stapleton Psychological Services
**Category:** Local business
**Location:** 423 NE 4th St #2, Grand Rapids, MN 55744
**Phone:** +1 218-326-5694
**Email:** STAPLETONCOUNSELING@GMAIL.COM
**Review score:** Not provided
**Page description:** Stapleton Psychological Services , Grand Rapids. 19 likes. Kenneth L. Stapleton, M.A., L.P.
40+ years experience in mental health services
**Hours:** See Facebook page for current hours

**About / profile details (from Facebook About tab):**
Use location and phone from above.

**Full scraped profile (use this for About section, services, and copy voice — do not invent details):**
Stapleton Psychological Services , Grand Rapids. 19 likes. Kenneth L. Stapleton, M.A., L.P.
40+ years experience in mental health services
Phone: 218-326-5694
Email: STAPLETONCOUNSELING@GMAIL.COM

Recent posts from their Facebook page:
1. Stapleton Psychological Services 's Photo
2. Kenneth L. Stapleton, M.A., L.P. 40+ years experience in mental health services

**Recent post captions (2 scraped — echo this voice in headlines and body copy):**
1. "Stapleton Psychological Services 's Photo"
2. "Kenneth L. Stapleton, M.A., L.P. 40+ years experience in mental health services"

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Business identity

- **Name:** Stapleton Psychological Services
- **Type:** Local business
- **Location:** 423 NE 4th St #2, Grand Rapids, MN 55744
- **Hero H1 (use or adapt closely):** Stapleton Psychological Services 's Photo
- **Hero subhead:** Stapleton Psychological Services , Grand Rapids. 19 likes. Kenneth L. Stapleton, M.A., L.P.
40+ years experience in mental health services
- **Primary CTA button:** Contact us
- **Secondary CTA:** Learn more

**Service bullets (feature these prominently):**
- Stapleton Psychological Services 's Photo
- 40+ years experience in mental health services
- Quality service
- Local & trusted

---

### Layout brief

**Layout family:** split-hero
**Wireframe:** Split hero: 55% photo left, headline + tel CTA + trust line right; phone visible without scroll on desktop.


**Sections (in this order):** hero → credibility → services → about → gallery → visit → contact

---

### Photo inventory

You will receive 11 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #000000;
  --brand-secondary: #303030;
  --brand-accent: #101010;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Work Sans', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #000000 |
| Secondary | #303030 |
| Accent | #101010 |

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
- **Responsive:** desktop-first, clean at 375px width
- **Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (preview only)
- **Copy:** Use post caption voice and service bullets above — no lorem ipsum
- **Unique layout:** split-hero — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — Stapleton Psychological Services 's Photo, subhead, primary CTA (Contact us), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - Stapleton Psychological Services 's Photo
- 40+ years experience in mental health services
- Quality service
- Local & trusted
5. **About** — pull from full scraped profile above; use specific details from their posts (names, offers, community ties)
6. **Gallery** — photo grid for Facebook images
7. **Visit** — `#visit` — address, hours; map panel: `<div class="map-slot" data-map-slot aria-label="Map"></div>` (empty — map injected at build)
8. **Contact** — form + phone + email (preview-only form notice)
9. **Footer** — hours, address, disclaimer space for mockup banner

### Technical

- CSS custom properties with brand hex values above
- Accessible: contrast, focus rings, landmarks
- Mockup banner placeholder at top: "Concept preview — not affiliated with Stapleton Psychological Services"

---
