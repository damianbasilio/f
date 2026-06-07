# Stitch prompt — Sundwell Mobile Mechanic (sundwell-mobile-mechanic-milan)

Use with: `npm run stitch:prompt -- sundwell-mobile-mechanic-milan` then `npm run stitch:build -- sundwell-mobile-mechanic-milan`

---

## Prompt (paste into Stitch)

You are an award-winning local-brand web designer building **one bespoke homepage** for **Sundwell Mobile Mechanic**. This business has **no dedicated website** — only a Facebook page. You are not filling a template. You are designing a **unique, premium, memorable first impression** that could only belong to this business.

### Non-negotiable: uniqueness

- This site must **not** look like other local-business mockups, Webflow templates, or AI landing pages.
- **Do not** reuse the same hero layout, section order, card grid, or color story you used on other projects.
- **Invent** a fresh visual identity from the business type, name, location, and Facebook voice below.
- Aim for **editorial quality**: generous whitespace OR intentional density (pick one and commit), strong typographic hierarchy, one memorable visual motif (texture, rule, shape, photo treatment, or color block) that repeats subtly.
- Every section should feel **designed**, not assembled from a component library.

---

### Facebook source (copy only — do not copy Facebook's UI)

**Page:** https://www.facebook.com/p/Sundwell-Mobile-Mechanic-61557077199001/
**Business:** Sundwell Mobile Mechanic
**Category:** Trades / towing / home services
**Location:** 604 9th Avenue West, Milan, IL 61264
**Phone:** (563) 340-5528
**Email:** sundwell6830@gmail.com
**Review score:** 4.8
**Page description:** Whether it be a light duty, medium duty, or heavy duty engine, if it needs brakes, tires, oil changed, towed or completely rebuilt.. at our shop, on the side of the road, or in your driveway.. anything under the sun, give us a call! 👨🏻‍🔧 563-340-5528
**Hours:** Always open

**About / profile details:**
- **Hours:** Always open
- **Address:** 604 9th Ave. W., Milan, Milan, IL, United States, 61264

**Full scraped profile (About, services, voice — use for copy, do not invent facts):**
Whether it be a light duty, medium duty, or heavy duty engine, if it needs brakes, tires, oil changed, towed or completely rebuilt.. at our shop, on the side of the road, or in your driveway.. anything under the sun, give us a call! 👨🏻‍🔧 563-340-5528
Hours: Always open
Address: 604 9th Ave. W., Milan, Milan, IL, United States, 61264
Phone: 563-340-5528
Email: sundwell6830@gmail.com

Recent posts from their Facebook page:
1. 🦃 Gobble Gobble & Safe Travels! Huge thanks from Sundwell Mobile Mechanic for keeping us busy this year. Whether you’re driving across town or across the state, make sure your ride is road-ready. Have a wonderful Thanksgiving! 🚗🍂
2. Whether it be a light duty, medium duty, or heavy duty engine, if it needs brakes, tires, oil changed, towed or completely rebuilt.. at our shop, on the side of the road, or in your driveway.. anything under the sun, give us a call! 👨🏻‍🔧 563-340-5528

**Recent post captions (2 — echo their voice in headlines; skip registry/SKU/listing lines):**
1. "🦃 Gobble Gobble & Safe Travels! Huge thanks from Sundwell Mobile Mechanic for keeping us busy this year. Whether you’re driving across town or across the state, make sure your ride is road-ready. Have a wonderful Thanksgiving! 🚗🍂"
2. "Whether it be a light duty, medium duty, or heavy duty engine, if it needs brakes, tires, oil changed, towed or completely rebuilt.. at our shop, on the side of the road, or in your driveway.. anything under the sun, give us a call! 👨🏻‍🔧 563-340-5528"

**Preserve:** real business name, city, services, phone, and the warm local tone from their page.
**Fix:** no dedicated homepage today — build phone + primary CTA above the fold, clear services, gallery, visit/map slot, contact (preview only).

---

### Design read (follow this)
Reading this as: a first homepage for Sundwell Mobile Mechanic in Milan (Trades / towing / home services), Reliable, local, ready when you need us — competent and direct tone, **bento-showcase** archetype — must feel like a one-off commission, not a reused template.

### Uniqueness mandate
- This homepage is for **Sundwell Mobile Mechanic** only — it must not resemble other local-business sites or AI templates.
- **Invent** layout rhythm, section names, color story, and typographic personality for this business.
- Layout archetype **bento-showcase**: Bento-style grid: hero spans 2 cells, services and gallery as varied tile sizes; no identical card heights; one accent tile in primary color.
- Primary CTA: **"Call now"**. Phone as `tel:` in header and hero.
- No menu or reservation language. Phone must be tel: in header and hero. Sticky mobile call bar required. Industrial clarity beats decoration.

### Layout discipline
- Hero fits initial viewport: H1 max 2 lines, subhead max 20 words, primary CTA visible without scrolling.
- **No** repeated identical 3-column icon-card rows across sections.
- Vary structure: split hero → offerings (list, staggered grid, or bento) → gallery → visit → contact.
- Max 1 small uppercase eyebrow per 3 sections. Nav ~64–72px, phone or CTA visible on desktop.
- Cards only when elevation adds hierarchy; prefer spacing, rules, and type otherwise.

### Color & typography (you decide)
**Stitch decides all colors.** There is no brand manual, no website, and nothing to extract.
Derive a cohesive 4–5 color system from business type, name, location, and post voice.
Define `--brand-primary`, `--brand-secondary`, `--brand-accent`, and neutrals in `:root`.
Each business must look visually distinct — do not reuse the same palette across mockups.
Avoid Facebook platform grays (#333, #666, #ddd) and generic SaaS purple/indigo.

Choose typography that matches **Trades / towing / home services** — premium and readable.
Suggested pairing (you may adapt if a better fit exists): **Libre Baskerville** (headlines) + **Figtree** (body).
Load from Google Fonts. Never default to Inter, Roboto, or Arial as the primary personality.
Establish a clear type scale (display, h2, body, small) with intentional letter-spacing on labels.

- No purple/indigo SaaS gradients. No generic cream/beige page background unless the business genuinely calls for it.
- No em dashes (—) in copy. No emojis. No buzzwords: elevate, seamless, world-class, game-changer.

### Motion & interaction (emil-design-eng)
- Dials: variance 7/10 · motion 3/10 · density 5/10
- UI transitions: 150–250ms, **ease-out**. Never `transition: all`.
- Buttons: `:active { transform: scale(0.97) }`. Include `prefers-reduced-motion`.
- Animate **transform** and **opacity** only.

### Anti-slop checklist
- No fake star ratings unless review score is in the brief.
- No side-stripe accent borders on cards. No gradient text on headlines.
- No lorem ipsum. No stock URLs. Gallery and hero sized for **their** Facebook photos.
- Form is preview-only — never simulate "Message sent".

---

### Creative direction (this business only)

**Sundwell Mobile Mechanic** is a Trades / towing / home services in Milan.
Design as if you won a paid branding project: distinctive hero, memorable section rhythm, premium polish.
Layout seed: **bento-showcase** — interpret literally but creatively.
You choose the full color palette and typography — there is nothing to extract from a website.
They have 12 real Facebook photos — design hero and gallery for authentic local imagery.

**Layout archetype:** bento-showcase
Bento-style grid: hero spans 2 cells, services and gallery as varied tile sizes; no identical card heights; one accent tile in primary color.
**Mobile:** Include sticky bottom call bar with tel: link for emergency/trades vertical.

**Signature sections to include (rename, reorder, and style them — do not use generic labels like "Our Services" unless it fits the voice):**
hero → credibility → services → service-area → about → visit → contact

**Hero direction:**
- **H1 (adapt closely):** Sundwell Mobile Mechanic — trusted Milan service
- **Subhead:** Whether it be a light duty, medium duty, or heavy duty engine, if it needs brakes, tire…
- **Primary CTA:** Call now
- **Secondary CTA:** Request a quote

**Services / offerings (feature prominently with business-specific language):**
- Whether you’re driving across town or across the state, make sure your ride is road-ready
- 24/7 availability
- Licensed & insured
- Local service area

---

### Visual identity — Stitch decides (no extracted colors)

**Stitch decides all colors.** There is no brand manual, no website, and nothing to extract.
Derive a cohesive 4–5 color system from business type, name, location, and post voice.
Define `--brand-primary`, `--brand-secondary`, `--brand-accent`, and neutrals in `:root`.
Each business must look visually distinct — do not reuse the same palette across mockups.
Avoid Facebook platform grays (#333, #666, #ddd) and generic SaaS purple/indigo.

Choose typography that matches **Trades / towing / home services** — premium and readable.
Suggested pairing (you may adapt if a better fit exists): **Libre Baskerville** (headlines) + **Figtree** (body).
Load from Google Fonts. Never default to Inter, Roboto, or Arial as the primary personality.
Establish a clear type scale (display, h2, body, small) with intentional letter-spacing on labels.

**Mood target:** Reliable, local, ready when you need us — competent and direct

There is **no existing website** and **nothing to extract**. Choose palette and typography from business type (Trades / towing / home services), name, location (Milan), and post voice. Document colors as CSS custom properties in `styles.css`.

---

### Photo inventory

You will receive 12 real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.

Use `<img>` with descriptive `alt`. Design generous photo regions (hero, gallery, about) — real Facebook images replace placeholders after build.

---

### Anti-template rules

- **No** Tailwind CDN, utility-only pages, or Material Symbols as the primary UI system.
- **No** identical 3-column icon-card rows repeated across sections.
- **No** purple/indigo SaaS gradients, Inter/Roboto defaults, or cream-beige "AI landing" backgrounds unless the business genuinely calls for it (heritage bakery, ranch, etc.).
- **No** `transition: all` — animate transform and opacity with purpose; `:active` scale on buttons.
- **No** fake star widgets, "#1 rated", or unverifiable awards unless review score is provided above.
- **No** stock URLs or AI placeholder image services.
- **No emojis** in headings, buttons, or body copy.
- **No** em dashes (—) in copy — use commas, periods, or hyphens.
- Phone must be a visible `tel:` link in header and hero.
- No menu or reservation language. Phone must be tel: in header and hero. Sticky mobile call bar required. Industrial clarity beats decoration.

**Design dials for this build:** variance 7/10 · motion 3/10 · density 5/10

---

### Deliverable

**Full website:** semantic HTML5, dedicated `styles.css`, dedicated `script.js`.

**Responsive:** 390px mobile, 768px tablet, 1280px desktop — no horizontal scroll; hero + primary CTA visible on first mobile screen.

**Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (**preview only** — show notice, never fake "sent").

**Copy:** from Facebook scrape and post captions — no lorem ipsum.

**Layout:** follow archetype **bento-showcase** but interpret it boldly; vary section rhythm (full-bleed band → narrow column → split → gallery mosaic, etc.).

### Required capabilities (implement with unique structure and naming)

1. **Header** — wordmark or logotype treatment, nav, phone visible on desktop
2. **Hero** — Sundwell Mobile Mechanic — trusted Milan service, subhead, Call now, your invented palette dominant
3. **Credibility** — `#credibility` — only verifiable trust (local, years serving, review score if provided)
4. **Offerings** — services from bullets above, not generic filler
5. **About** — specific details from scraped profile and posts
6. **Gallery** — photo grid sized for Facebook images
7. **Visit** — `#visit` — address, hours; map panel: `<div class="map-slot" data-map-slot aria-label="Map"></div>` (empty — map injected at build)
8. **Contact** — form + phone + email
9. **Footer** — hours, address, space for mockup disclaimer

### Technical

- CSS custom properties for your invented palette and type scale
- Accessible contrast, focus rings, landmarks
- `@media (prefers-reduced-motion: reduce)` — disable motion, keep opacity/color
- Mockup banner placeholder at top: "Concept preview — not affiliated with Sundwell Mobile Mechanic"

---
