# Stitch prompt — Beautiful Nails (beautiful-nails-manchester)

Use with: `npm run stitch:prompt -- beautiful-nails-manchester` then `npm run stitch:build -- beautiful-nails-manchester`

---

## Prompt (paste into Stitch)

You are an award-winning local-brand web designer building **one bespoke homepage** for **Beautiful Nails**. This business has **no dedicated website** — only a Facebook page. You are not filling a template. You are designing a **unique, premium, memorable first impression** that could only belong to this business.

### Non-negotiable: uniqueness

- This site must **not** look like other local-business mockups, Webflow templates, or AI landing pages.
- **Do not** reuse the same hero layout, section order, card grid, or color story you used on other projects.
- **Invent** a fresh visual identity from the business type, name, location, and Facebook voice below.
- Aim for **editorial quality**: generous whitespace OR intentional density (pick one and commit), strong typographic hierarchy, one memorable visual motif (texture, rule, shape, photo treatment, or color block) that repeats subtly.
- Every section should feel **designed**, not assembled from a component library.

---

### Facebook source (copy only — do not copy Facebook's UI)

**Page:** https://www.facebook.com/beautifulnailsmanchesternh/
**Business:** Beautiful Nails
**Category:** Salon / spa / personal care
**Location:** 1525 South Willow Street, Manchester, NH 03103
**Phone:** (603) 232-4700
**Email:** beautifulnails07012017@gmail.com
**Review score:** 4.4
**Page description:** Beautiful Nails, Manchester. 3,435 likes · 5 talking about this · 1,173 were here. Our priority is to sustain what is beautiful in life through delivering exceptional services & products to our...
**Hours:** Closed now

**About / profile details:**
- **Hours:** Closed now
- **Address:** 1525 S. Willow St, Manchester, NH, United States, 03103

**Full scraped profile (About, services, voice — use for copy, do not invent facts):**
Beautiful Nails, Manchester. 3,435 likes · 5 talking about this · 1,173 were here. Our priority is to sustain what is beautiful in life through delivering exceptional services & products to our...
Hours: Closed now
Address: 1525 S. Willow St, Manchester, NH, United States, 03103
Phone: 603-232-4700
Email: beautifulnails07012017@gmail.com

Recent posts from their Facebook page:
1. We are OPEN tomorrow Monday 5/25/2026. 🇺🇸 🇺🇸 🇺🇸 🇺🇸 🇺🇸 🇺🇸 Call for appointment @ 603-232-4700 or walk in are welcome.
2. Our priority is to sustain what is beautiful in life through delivering exceptional services & products to our valued customers

**Recent post captions (2 — echo their voice in headlines; skip registry/SKU/listing lines):**
1. "We are OPEN tomorrow Monday 5/25/2026. 🇺🇸 🇺🇸 🇺🇸 🇺🇸 🇺🇸 🇺🇸 Call for appointment @ 603-232-4700 or walk in are welcome."
2. "Our priority is to sustain what is beautiful in life through delivering exceptional services & products to our valued customers"

**Preserve:** real business name, city, services, phone, and the warm local tone from their page.
**Fix:** no dedicated homepage today — build phone + primary CTA above the fold, clear services, gallery, visit/map slot, contact (preview only).

---

### Design read (follow this)
Reading this as: a first homepage for Beautiful Nails in Manchester (Salon / spa / personal care), Polished, relaxing, appointment-ready tone, **split-editorial** archetype — must feel like a one-off commission, not a reused template.

### Uniqueness mandate
- This homepage is for **Beautiful Nails** only — it must not resemble other local-business sites or AI templates.
- **Invent** layout rhythm, section names, color story, and typographic personality for this business.
- Layout archetype **split-editorial**: Split hero: asymmetric photo column (55–60%) vs. typographic column; headline flush left, phone + CTA stacked; optional thin vertical rule or color band separating columns.
- Primary CTA: **"Book appointment"**. Phone as `tel:` in header and hero.
- No food menu language. Gallery should showcase work, not template beauty shots.

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

Choose typography that matches **Salon / spa / personal care** — premium and readable.
Suggested pairing (you may adapt if a better fit exists): **Libre Baskerville** (headlines) + **Figtree** (body).
Load from Google Fonts. Never default to Inter, Roboto, or Arial as the primary personality.
Establish a clear type scale (display, h2, body, small) with intentional letter-spacing on labels.

- No purple/indigo SaaS gradients. No generic cream/beige page background unless the business genuinely calls for it.
- No em dashes (—) in copy. No emojis. No buzzwords: elevate, seamless, world-class, game-changer.

### Motion & interaction (emil-design-eng)
- Dials: variance 9/10 · motion 4/10 · density 6/10
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

**Beautiful Nails** is a Salon / spa / personal care in Manchester.
Design as if you won a paid branding project: distinctive hero, memorable section rhythm, premium polish.
Layout seed: **split-editorial** — interpret literally but creatively.
You choose the full color palette and typography — there is nothing to extract from a website.
They have 12 real Facebook photos — design hero and gallery for authentic local imagery.

**Layout archetype:** split-editorial
Split hero: asymmetric photo column (55–60%) vs. typographic column; headline flush left, phone + CTA stacked; optional thin vertical rule or color band separating columns.


**Signature sections to include (rename, reorder, and style them — do not use generic labels like "Our Services" unless it fits the voice):**
hero → credibility → services → gallery → about → visit → contact

**Hero direction:**

- **H1 (adapt closely):** Beautiful Nails — serving Manchester
- **Subhead:** Beautiful Nails, Manchester. 3,435 likes · 5 talking about this · 1,173 were here. Our …
- **Primary CTA:** Book appointment
- **Secondary CTA:** View services

**Services / offerings (feature prominently with business-specific language):**
- We are OPEN tomorrow Monday 5/25/2026
- Cut & color
- Special occasion styling
- Walk-ins when available

---

### Visual identity — Stitch decides (no extracted colors)

**Stitch decides all colors.** There is no brand manual, no website, and nothing to extract.
Derive a cohesive 4–5 color system from business type, name, location, and post voice.
Define `--brand-primary`, `--brand-secondary`, `--brand-accent`, and neutrals in `:root`.
Each business must look visually distinct — do not reuse the same palette across mockups.
Avoid Facebook platform grays (#333, #666, #ddd) and generic SaaS purple/indigo.

Choose typography that matches **Salon / spa / personal care** — premium and readable.
Suggested pairing (you may adapt if a better fit exists): **Libre Baskerville** (headlines) + **Figtree** (body).
Load from Google Fonts. Never default to Inter, Roboto, or Arial as the primary personality.
Establish a clear type scale (display, h2, body, small) with intentional letter-spacing on labels.

**Mood target:** Polished, relaxing, appointment-ready

There is **no existing website** and **nothing to extract**. Choose palette and typography from business type (Salon / spa / personal care), name, location (Manchester), and post voice. Document colors as CSS custom properties in `styles.css`.

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
- No food menu language. Gallery should showcase work, not template beauty shots.

**Design dials for this build:** variance 9/10 · motion 4/10 · density 6/10

---

### Deliverable

**Full website:** semantic HTML5, dedicated `styles.css`, dedicated `script.js`.

**Responsive:** 390px mobile, 768px tablet, 1280px desktop — no horizontal scroll; hero + primary CTA visible on first mobile screen.

**Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (**preview only** — show notice, never fake "sent").

**Copy:** from Facebook scrape and post captions — no lorem ipsum.

**Layout:** follow archetype **split-editorial** but interpret it boldly; vary section rhythm (full-bleed band → narrow column → split → gallery mosaic, etc.).

### Required capabilities (implement with unique structure and naming)

1. **Header** — wordmark or logotype treatment, nav, phone visible on desktop
2. **Hero** — Beautiful Nails — serving Manchester, subhead, Book appointment, your invented palette dominant
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
- Mockup banner placeholder at top: "Concept preview — not affiliated with Beautiful Nails"

---

