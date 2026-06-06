# Stitch prompt — Hentze Angus (hentze-angus-greenville)

Use with: `npm run stitch:prompt -- hentze-angus-greenville` then `npm run stitch:build -- hentze-angus-greenville`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** https://www.facebook.com/HentzeAngus/
**Business:** Hentze Angus
**Category:** Local business
**Location:** 1295 Woburn Rd, Greenville, IL 62246
**Phone:** +1 618-304-0806
**Email:** HentzeAngus@gmail.com
**Review score:** Not provided
**Page description:** Hentze Angus, Greenville. 665 likes. Hentze Angus was founded in 1955. We offer Registered Black Angus Cattle & All-Natural Premium Beef.
**Hours:** Always open

**About / profile details (from Facebook About tab):**
- **Hours:** Always open
- **Address:** 1295 Woburn Road, Greenville, IL, United States, 62246

**Full scraped profile (use this for About section, services, and copy voice — do not invent details):**
Hentze Angus, Greenville. 665 likes. Hentze Angus was founded in 1955. We offer Registered Black Angus Cattle & All-Natural Premium Beef.
Hours: Always open
Address: 1295 Woburn Road, Greenville, IL, United States, 62246
Phone: 265.663 7265
Email: HentzeAngus@gmail.com

Recent posts from their Facebook page:
1. Hentze No Doubt 403 - Reg: AAA *21124883
2. Hentze Angus was founded in 1955. We offer Registered Black Angus Cattle & All-Natural Premium Beef.
3. It'll be available to watch on Hentze Angus's profile shortly.

**Recent post captions (3 scraped — echo this voice in headlines and body copy):**
1. "Hentze No Doubt 403 - Reg: AAA *21124883"
2. "Hentze Angus was founded in 1955. We offer Registered Black Angus Cattle & All-Natural Premium Beef."
3. "It'll be available to watch on Hentze Angus's profile shortly."

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Business identity

- **Name:** Hentze Angus
- **Type:** Local business
- **Location:** 1295 Woburn Rd, Greenville, IL 62246
- **Hero H1 (use or adapt closely):** Hentze No Doubt 403 - Reg: AAA *21124883
- **Hero subhead:** Hentze Angus, Greenville. 665 likes. Hentze Angus was founded in 1955. We offer Registered Black Angus Cattle & All-Natural Premium Beef.
- **Primary CTA button:** Contact us
- **Secondary CTA:** Learn more

**Service bullets (feature these prominently):**
- We offer Registered Black Angus Cattle & All-Natural Premium Beef
- Quality service
- Local & trusted
- Easy to reach

---

### Layout brief

**Layout family:** asymmetric-grid
**Wireframe:** Asymmetric grid: offset hero image, overlapping credibility strip, services in staggered two-column layout.


**Sections (in this order):** hero → credibility → services → about → gallery → visit → contact

---

### Photo inventory

You will receive 12 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #000000;
  --brand-secondary: #f00000;
  --brand-accent: #209080;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Work Sans', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #000000 |
| Secondary | #f00000 |
| Accent | #209080 |

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
- **Unique layout:** asymmetric-grid — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — Hentze No Doubt 403 - Reg: AAA *21124883, subhead, primary CTA (Contact us), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - We offer Registered Black Angus Cattle & All-Natural Premium Beef
- Quality service
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
- Mockup banner placeholder at top: "Concept preview — not affiliated with Hentze Angus"

---
