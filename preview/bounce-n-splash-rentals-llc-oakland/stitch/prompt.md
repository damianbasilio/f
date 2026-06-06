# Stitch prompt — Bounce "N" Splash Rentals LLC (bounce-n-splash-rentals-llc-oakland)

Use with: `npm run stitch:prompt -- bounce-n-splash-rentals-llc-oakland` then `npm run stitch:build -- bounce-n-splash-rentals-llc-oakland`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** https://www.facebook.com/Sliderental?mibextid=ZbWKwL
**Business:** Bounce "N" Splash Rentals LLC
**Category:** Local business
**Location:** 100 Bob White Rd, Oakland, TN 38060
**Phone:** +1 901-930-6461
**Email:** jeddsrentals@gmail.com
**Review score:** 5
**Page description:** Bounce N Splash Rentals LLC, Oakland. 972 likes · 151 talking about this · 1 was here. We take pride in customer service!  We are fully insured!  We care about your event! 

Family owned out of...
**Hours:** Always open

**About / profile details (from Facebook About tab):**
- **Hours:** Always open
- **Address:** Oakland, TN, United States, 38060

**Full scraped profile (use this for About section, services, and copy voice — do not invent details):**
Bounce N Splash Rentals LLC, Oakland. 972 likes · 151 talking about this · 1 was here. We take pride in customer service!  We are fully insured!  We care about your event! 

Family owned out of...
Hours: Always open
Address: Oakland, TN, United States, 38060
Phone: 901-930-6461
Email: jeddsrentals@gmail.com

Recent posts from their Facebook page:
1. If you live in Oakland get a quote from me, I am offering my lowest prices in Oakland and close surrounding area! Thank you! These are waterslide bounce house combos
2. We take pride in customer service! We are fully insured! We care about your event! Family owned out of Oakland TN.
3. Oakland, TN, United States, Tennessee
4. I have rented several times from you. You are very professional and I won’t rent from anyone else. Thank you!! 10/10
5. Christy Culver Doyle I appreciate all the love and all my customers!!! Thank you!
6. Bounce N Splash Rentals LLC's Photo

**Recent post captions (6 scraped — echo this voice in headlines and body copy):**
1. "If you live in Oakland get a quote from me, I am offering my lowest prices in Oakland and close surrounding area! Thank you! These are waterslide bounce house combos"
2. "We take pride in customer service! We are fully insured! We care about your event! Family owned out of Oakland TN."
3. "Oakland, TN, United States, Tennessee"
4. "I have rented several times from you. You are very professional and I won’t rent from anyone else. Thank you!! 10/10"
5. "Christy Culver Doyle I appreciate all the love and all my customers!!! Thank you!"
6. "Bounce N Splash Rentals LLC's Photo"

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Business identity

- **Name:** Bounce "N" Splash Rentals LLC
- **Type:** Local business
- **Location:** 100 Bob White Rd, Oakland, TN 38060
- **Hero H1 (use or adapt closely):** Bounce "N" Splash Rentals LLC — serving Oakland
- **Hero subhead:** Bounce N Splash Rentals LLC, Oakland. 972 likes · 151 talking about this · 1 was here. We take pride in customer service!  We are fully insured!  We care about your event! 

Family
- **Primary CTA button:** Contact us
- **Secondary CTA:** Learn more

**Service bullets (feature these prominently):**
- If you live in Oakland get a quote from me, I am offering my lowest prices in Oakland and close surrounding area
- We take pride in customer service
- Quality service
- Local & trusted

---

### Layout brief

**Layout family:** editorial-stack
**Wireframe:** Editorial stack: narrow content column, large typographic headline, photo band below fold, services as horizontal cards.


**Sections (in this order):** hero → credibility → services → about → gallery → visit → contact

---

### Photo inventory

You will receive 12 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #2070d0;
  --brand-secondary: #40d000;
  --brand-accent: #805070;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Work Sans', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #2070d0 |
| Secondary | #40d000 |
| Accent | #805070 |

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
- **Unique layout:** editorial-stack — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — Bounce "N" Splash Rentals LLC — serving Oakland, subhead, primary CTA (Contact us), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - If you live in Oakland get a quote from me, I am offering my lowest prices in Oakland and close surrounding area
- We take pride in customer service
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
- Mockup banner placeholder at top: "Concept preview — not affiliated with Bounce "N" Splash Rentals LLC"

---
