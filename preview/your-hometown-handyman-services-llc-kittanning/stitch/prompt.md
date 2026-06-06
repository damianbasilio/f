# Stitch prompt — Your Hometown Handyman Services LLC (your-hometown-handyman-services-llc-kittanning)

Use with: `npm run stitch:prompt -- your-hometown-handyman-services-llc-kittanning` then `npm run stitch:build -- your-hometown-handyman-services-llc-kittanning`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** https://www.facebook.com/profile.php?id=100086383233376
**Business:** Your Hometown Handyman Services LLC
**Category:** Local business
**Location:** 102 Sawmill Rd, Kittanning, PA 16201
**Phone:** +1 724-954-8414
**Email:** yourhometownhandyman@aol.com
**Review score:** 5
**Page description:** Here is a sneak peek preview of our current deck remodel! Full tear out and rebuild is required with this one, as well as enlarging the main section and adding second set of stairs. Final pictures to come soon! This year is the year to improve and invest in your summer camp/river house! Let us transform your outdoor area into what you need! Call or message today for a free estimate 724-954-8414 PA 176950
**Hours:** See Facebook page for current hours

**About / profile details (from Facebook About tab):**
Use location and phone from above.

**Full scraped profile (use this for About section, services, and copy voice — do not invent details):**
Here is a sneak peek preview of our current deck remodel! Full tear out and rebuild is required with this one, as well as enlarging the main section and adding second set of stairs. Final pictures to come soon! This year is the year to improve and invest in your summer camp/river house! Let us transform your outdoor area into what you need! Call or message today for a free estimate 724-954-8414 PA 176950
Phone: 265.663 7265
Email: yourhometownhandyman@aol.com

Recent posts from their Facebook page:
1. Here is a sneak peek preview of our current deck remodel! Full tear out and rebuild is required with this one, as well as enlarging the main section and adding second set of stairs. Final pictures to come soon! This year is the year to improve and invest in your summer camp/river house! Let us transform your outdoor area into what you need! Call or message today for a free estimate 724-954-8414 PA 176950
2. By using Meta AI, you agree to the AI terms. Your interactions with AIs will be used to improve AI at Meta.
3. Your Hometown Handyman Services LLC's Photo
4. From small handyman projects to large renovations and remodels we do it all! Larger jobs and projects by bid with free estimates, or small projects by the hour. Make a list and schedule a day! Also offering painting services starting at $50/hr or by bid!

**Recent post captions (4 useful — echo voice in headlines; skip registry/SKU/listing lines):**
1. "Here is a sneak peek preview of our current deck remodel! Full tear out and rebuild is required with this one, as well as enlarging the main section and adding second set of stairs. Final pictures to come soon! This year is the year to improve and invest in your summer camp/river house! Let us transform your outdoor area into what you need! Call or message today for a free estimate 724-954-8414 PA…"
2. "By using Meta AI, you agree to the AI terms. Your interactions with AIs will be used to improve AI at Meta."
3. "Your Hometown Handyman Services LLC's Photo"
4. "From small handyman projects to large renovations and remodels we do it all! Larger jobs and projects by bid with free estimates, or small projects by the hour. Make a list and schedule a day! Also offering painting services starting at $50/hr or by bid!"

**Design read:** Reading this as: a first homepage for Your Hometown Handyman Services LLC in Kittanning (Local business), Professional, welcoming, community-rooted tone, full-bleed-photo layout — must feel tailor-made for this business, not a generic AI landing template.

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

### Design read (follow this)
Reading this as: a first homepage for Your Hometown Handyman Services LLC in Kittanning (Local business), Professional, welcoming, community-rooted tone, full-bleed-photo layout — must feel tailor-made for this business, not a generic AI landing template.

### Tailor-made (this business only)
- Every headline, service name, and CTA must come from the Facebook scrape above — not generic "Quality Service" filler.
- Write like a local designer who visited their page: use Your Hometown Handyman Services LLC, Kittanning, and real service bullets.
- Layout family **full-bleed-photo**: Full-bleed photo hero with dark gradient overlay; headline and primary CTA centered; sticky mobile call bar.
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
- Use brand hex from brief only: primary #102050, secondary #e02060, accent #406020.
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

- **Name:** Your Hometown Handyman Services LLC
- **Type:** Local business
- **Location:** 102 Sawmill Rd, Kittanning, PA 16201
- **Hero H1 (use or adapt closely):** Your Hometown Handyman Services LLC — serving Kittanning
- **Hero subhead:** Here is a sneak peek preview of our current deck remodel! Full tear out and rebuild is …
- **Primary CTA button:** Contact us
- **Secondary CTA:** Learn more

**Service bullets (feature these prominently):**
- Your Hometown Handyman Services LLC's Photo
- From small handyman projects to large renovations and remodels we do it all
- Also offering painting services starting at $50/hr or by bid
- Quality service

---

### Layout brief

**Layout family:** full-bleed-photo
**Wireframe:** Full-bleed photo hero with dark gradient overlay; headline and primary CTA centered; sticky mobile call bar.


**Sections (in this order):** hero → credibility → services → about → gallery → visit → contact

---

### Photo inventory

You will receive 10 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

:root {
  --brand-primary: #102050;
  --brand-secondary: #e02060;
  --brand-accent: #406020;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Work Sans', sans-serif;
}

| Role | Hex |
| ---- | --- |
| Primary | #102050 |
| Secondary | #e02060 |
| Accent | #406020 |

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
- **Unique layout:** full-bleed-photo — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — Your Hometown Handyman Services LLC — serving Kittanning, subhead, primary CTA (Contact us), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — - Your Hometown Handyman Services LLC's Photo
- From small handyman projects to large renovations and remodels we do it all
- Also offering painting services starting at $50/hr or by bid
- Quality service
5. **About** — pull from full scraped profile above; use specific details from their posts (names, offers, community ties)
6. **Gallery** — photo grid for Facebook images
7. **Visit** — `#visit` — address, hours; map panel: `<div class="map-slot" data-map-slot aria-label="Map"></div>` (empty — map injected at build)
8. **Contact** — form + phone + email (preview-only form notice)
9. **Footer** — hours, address, disclaimer space for mockup banner

### Technical

- CSS custom properties with brand hex values above
- Accessible: contrast, focus rings, landmarks
- Mockup banner placeholder at top: "Concept preview — not affiliated with Your Hometown Handyman Services LLC"

---
