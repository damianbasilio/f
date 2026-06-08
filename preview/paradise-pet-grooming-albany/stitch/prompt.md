# Stitch prompt — Paradise Pet Grooming (paradise-pet-grooming-albany)

Use with: `npm run stitch:prompt -- paradise-pet-grooming-albany` then `npm run stitch:build -- paradise-pet-grooming-albany`

---

## Prompt (paste into Stitch)

You are an award-winning local-brand web designer building **one bespoke homepage** for **Paradise Pet Grooming**. This business has **no dedicated website** — only a Facebook page. You are not filling a template. You are designing a **unique, premium, memorable first impression** that could only belong to this business.

### Non-negotiable: uniqueness

- This site must **not** look like other local-business mockups, Webflow templates, or AI landing pages.
- **Do not** reuse the same hero layout, section order, card grid, or color story you used on other projects.
- **Invent** a fresh visual identity from the business type, name, location, and Facebook voice below.
- Aim for **editorial quality**: generous whitespace OR intentional density (pick one and commit), strong typographic hierarchy, one memorable visual motif (texture, rule, shape, photo treatment, or color block) that repeats subtly.
- Every section should feel **designed**, not assembled from a component library.

---

### Facebook source (copy only — do not copy Facebook's UI)

**Page:** https://www.facebook.com/albanyparadisepetgrooming/
**Business:** Paradise Pet Grooming
**Category:** Local business
**Location:** 1129 Santiam Road Southeast, Albany, OR 97321
**Phone:** (541) 924-1818
**Email:** Albanyparadisepetgrooming@gmail.com
**Review score:** 4.8
**Page description:** Humanity before Vanity! This Salon will not hurt a pet to please a human. This means we will do what is best for your pet's health over beauty. We are best known for working with pets with behavioral issues and senior pet's comfort grooms.
**Hours:** Closed now

**About / profile details:**
- **Hours:** Closed now
- **Address:** 1129 Santiam rd se, Albany, OR, United States, 97321

**Full scraped profile (About, services, voice — use for copy, do not invent facts):**
Humanity before Vanity! This Salon will not hurt a pet to please a human. This means we will do what is best for your pet's health over beauty. We are best known for working with pets with behavioral issues and senior pet's comfort grooms.
Hours: Closed now
Address: 1129 Santiam rd se, Albany, OR, United States, 97321
Phone: 265.663 7265
Email: Albanyparadisepetgrooming@gmail.com

Recent posts from their Facebook page:
1. Due to a family graduation, we will be closing early tomorrow (Saturday, June 6th) shortly after 2:00 PM. If you are coming as a walk-in guest, be sure to come see us in the morning! We appreciate your understanding!
2. By using Meta AI, you agree to the AI terms. Your interactions with AIs will be used to improve AI at Meta.
3. Humanity before Vanity! This Salon will not hurt a pet to please a human. This means we will do what is best for your pet's health over beauty. We are best known for working with pets with behavioral issues and senior pet's comfort grooms.

**Recent post captions (3 — echo their voice in headlines; skip registry/SKU/listing lines):**
1. "Due to a family graduation, we will be closing early tomorrow (Saturday, June 6th) shortly after 2:00 PM. If you are coming as a walk-in guest, be sure to come see us in the morning! We appreciate your understanding!"
2. "By using Meta AI, you agree to the AI terms. Your interactions with AIs will be used to improve AI at Meta."
3. "Humanity before Vanity! This Salon will not hurt a pet to please a human. This means we will do what is best for your pet's health over beauty. We are best known for working with pets with behavioral issues and senior pet's comfort grooms."

**Preserve:** real business name, city, services, phone, and the warm local tone from their page.
**Fix:** no dedicated homepage today — build phone + primary CTA above the fold, clear services, gallery, visit/map slot, contact (preview only).

---

### Design read (follow this)
Reading this as: a first homepage for Paradise Pet Grooming in Albany (Local business), Professional, welcoming, community-rooted tone, **diagonal-cut** archetype — must feel like a one-off commission, not a reused template.

### Uniqueness mandate
- This homepage is for **Paradise Pet Grooming** only — it must not resemble other local-business sites or AI templates.
- **Invent** layout rhythm, section names, color story, and typographic personality for this business.
- Layout archetype **diagonal-cut**: Diagonal or angled section dividers (clip-path or skewed bands); hero with angled color block behind headline; dynamic but not chaotic.
- Primary CTA: **"Contact us"**. Phone as `tel:` in header and hero.
- Avoid generic 3-column icon cards. Copy must be specific to this Facebook page.

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

Choose typography that matches **Local business** — premium and readable.
Suggested pairing (you may adapt if a better fit exists): **Source Serif 4** (headlines) + **Nunito** (body).
Load from Google Fonts. Never default to Inter, Roboto, or Arial as the primary personality.
Establish a clear type scale (display, h2, body, small) with intentional letter-spacing on labels.

- No purple/indigo SaaS gradients. No generic cream/beige page background unless the business genuinely calls for it.
- No em dashes (—) in copy. No emojis. No buzzwords: elevate, seamless, world-class, game-changer.

### Motion & interaction (emil-design-eng)
- Dials: variance 8/10 · motion 4/10 · density 5/10
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

**Paradise Pet Grooming** is a Local business in Albany.
Design as if you won a paid branding project: distinctive hero, memorable section rhythm, premium polish.
Layout seed: **diagonal-cut** — interpret literally but creatively.
You choose the full color palette and typography — there is nothing to extract from a website.
They have 12 real Facebook photos — design hero and gallery for authentic local imagery.

**Layout archetype:** diagonal-cut
Diagonal or angled section dividers (clip-path or skewed bands); hero with angled color block behind headline; dynamic but not chaotic.


**Signature sections to include (rename, reorder, and style them — do not use generic labels like "Our Services" unless it fits the voice):**
hero → credibility → services → about → gallery → visit → contact

**Hero direction:**

- **H1 (adapt closely):** Paradise Pet Grooming — serving Albany
- **Subhead:** Humanity before Vanity! This Salon will not hurt a pet to please a human. This means we…
- **Primary CTA:** Contact us
- **Secondary CTA:** Learn more

**Services / offerings (feature prominently with business-specific language):**
- We are best known for working with pets with behavioral issues and senior pet's comfort grooms
- Quality service
- Local & trusted
- Easy to reach

---

### Visual identity — Stitch decides (no extracted colors)

**Stitch decides all colors.** There is no brand manual, no website, and nothing to extract.
Derive a cohesive 4–5 color system from business type, name, location, and post voice.
Define `--brand-primary`, `--brand-secondary`, `--brand-accent`, and neutrals in `:root`.
Each business must look visually distinct — do not reuse the same palette across mockups.
Avoid Facebook platform grays (#333, #666, #ddd) and generic SaaS purple/indigo.

Choose typography that matches **Local business** — premium and readable.
Suggested pairing (you may adapt if a better fit exists): **Source Serif 4** (headlines) + **Nunito** (body).
Load from Google Fonts. Never default to Inter, Roboto, or Arial as the primary personality.
Establish a clear type scale (display, h2, body, small) with intentional letter-spacing on labels.

**Mood target:** Professional, welcoming, community-rooted

There is **no existing website** and **nothing to extract**. Choose palette and typography from business type (Local business), name, location (Albany), and post voice. Document colors as CSS custom properties in `styles.css`.

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
- Avoid generic 3-column icon cards. Copy must be specific to this Facebook page.

**Design dials for this build:** variance 8/10 · motion 4/10 · density 5/10

---

### Deliverable

**Full website:** semantic HTML5, dedicated `styles.css`, dedicated `script.js`.

**Responsive:** 390px mobile, 768px tablet, 1280px desktop — no horizontal scroll; hero + primary CTA visible on first mobile screen.

**Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (**preview only** — show notice, never fake "sent").

**Copy:** from Facebook scrape and post captions — no lorem ipsum.

**Layout:** follow archetype **diagonal-cut** but interpret it boldly; vary section rhythm (full-bleed band → narrow column → split → gallery mosaic, etc.).

### Required capabilities (implement with unique structure and naming)

1. **Header** — wordmark or logotype treatment, nav, phone visible on desktop
2. **Hero** — Paradise Pet Grooming — serving Albany, subhead, Contact us, your invented palette dominant
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
- Mockup banner placeholder at top: "Concept preview — not affiliated with Paradise Pet Grooming"

---

