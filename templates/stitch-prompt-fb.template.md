# Stitch prompt — {{BUSINESS_NAME}} ({{SLUG}})

Use with: `npm run stitch:prompt -- {{SLUG}}` then `npm run stitch:build -- {{SLUG}}`

---

## Prompt (paste into Stitch)

You are an award-winning local-brand web designer building **one bespoke homepage** for **{{BUSINESS_NAME}}**. This business has **no dedicated website** — only a Facebook page. You are not filling a template. You are designing a **unique, premium, memorable first impression** that could only belong to this business.

### Non-negotiable: uniqueness

- This site must **not** look like other local-business mockups, Webflow templates, or AI landing pages.
- **Do not** reuse the same hero layout, section order, card grid, or color story you used on other projects.
- **Invent** a fresh visual identity from the business type, name, location, and Facebook voice below.
- Aim for **editorial quality**: generous whitespace OR intentional density (pick one and commit), strong typographic hierarchy, one memorable visual motif (texture, rule, shape, photo treatment, or color block) that repeats subtly.
- Every section should feel **designed**, not assembled from a component library.

---

### Facebook source (copy only — do not copy Facebook's UI)

**Page:** {{LIVE_URL}}
**Business:** {{BUSINESS_NAME}}
**Category:** {{VERTICAL}}
**Location:** {{FULL_ADDRESS}}
**Phone:** {{PHONE}}
**Email:** {{EMAIL}}
**Review score:** {{REVIEW_SCORE}}
**Page description:** {{DESCRIPTION}}
**Hours:** {{HOURS}}

**About / profile details:**
{{PROFILE_DETAILS}}

**Full scraped profile (About, services, voice — use for copy, do not invent facts):**
{{PROFILE_SUMMARY}}

**Recent post captions ({{POST_COUNT}} — echo their voice in headlines; skip registry/SKU/listing lines):**
{{POST_CAPTIONS}}

**Preserve:** real business name, city, services, phone, and the warm local tone from their page.
**Fix:** no dedicated homepage today — build phone + primary CTA above the fold, clear services, gallery, visit/map slot, contact (preview only).

---

{{DESIGN_CRAFT_RULES}}

---

### Creative direction (this business only)

{{CREATIVE_DIRECTION}}

**Layout archetype:** {{LAYOUT_ARCHETYPE}}
{{LAYOUT_DESCRIPTION}}
{{STICKY_CALL_BAR}}

**Signature sections to include (rename, reorder, and style them — do not use generic labels like "Our Services" unless it fits the voice):**
{{SECTIONS_LIST}}

**Hero direction:**

- **H1 (adapt closely):** {{HERO_H1}}
- **Subhead:** {{HERO_SUBHEAD}}
- **Primary CTA:** {{PRIMARY_CTA}}
- **Secondary CTA:** {{SECONDARY_CTA}}

**Services / offerings (feature prominently with business-specific language):**
{{SERVICE_BULLETS}}

---

### Visual identity — Stitch decides (no extracted colors)

{{COLOR_DIRECTION}}

{{TYPOGRAPHY_DIRECTION}}

**Mood target:** {{MOOD}}

There is **no existing website** and **nothing to extract**. Choose palette and typography from business type ({{VERTICAL}}), name, location ({{CITY}}), and post voice. Document colors as CSS custom properties in `styles.css`.

---

### Photo inventory

{{PHOTO_INVENTORY}}

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
- {{ANTI_PATTERNS}}

**Design dials for this build:** variance {{DESIGN_VARIANCE}}/10 · motion {{MOTION_INTENSITY}}/10 · density {{VISUAL_DENSITY}}/10

---

### Deliverable

**Full website:** semantic HTML5, dedicated `styles.css`, dedicated `script.js`.

**Responsive:** 390px mobile, 768px tablet, 1280px desktop — no horizontal scroll; hero + primary CTA visible on first mobile screen.

**Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (**preview only** — show notice, never fake "sent").

**Copy:** from Facebook scrape and post captions — no lorem ipsum.

**Layout:** follow archetype **{{LAYOUT_ARCHETYPE}}** but interpret it boldly; vary section rhythm (full-bleed band → narrow column → split → gallery mosaic, etc.).

### Required capabilities (implement with unique structure and naming)

1. **Header** — wordmark or logotype treatment, nav, phone visible on desktop
2. **Hero** — {{HERO_H1}}, subhead, {{PRIMARY_CTA}}, your invented palette dominant
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
- Mockup banner placeholder at top: "Concept preview — not affiliated with {{BUSINESS_NAME}}"

---

