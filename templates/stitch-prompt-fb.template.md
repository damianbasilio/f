# Stitch prompt — {{BUSINESS_NAME}} ({{SLUG}})

Use with: `npm run stitch:prompt -- {{SLUG}}` then `npm run stitch:build -- {{SLUG}}`

---

## Prompt (paste into Stitch)

You are building **one specific local business website** from their **Facebook page content only**. This is NOT a generic template. The business has **no dedicated website** — you are creating their first professional homepage using real Facebook photos and scraped copy.

### Facebook source context (use this copy — do not invent a different brand)

**Facebook page:** {{LIVE_URL}}
**Business:** {{BUSINESS_NAME}}
**Category:** {{VERTICAL}}
**Location:** {{FULL_ADDRESS}}
**Phone:** {{PHONE}}
**Email:** {{EMAIL}}
**Review score:** {{REVIEW_SCORE}}
**Page description:** {{DESCRIPTION}}
**Hours:** {{HOURS}}

**About / profile details (from Facebook About tab):**
{{PROFILE_DETAILS}}

**Full scraped profile (use this for About section, services, and copy voice — do not invent details):**
{{PROFILE_SUMMARY}}

**Recent post captions ({{POST_COUNT}} useful — echo voice in headlines; skip registry/SKU/listing lines):**
{{POST_CAPTIONS}}

**Design read:** {{DESIGN_READ}}

**What to preserve:** The business name, location, services, and warm local tone from the Facebook page above.
**What to fix:** No dedicated website — build a clean homepage with phone/CTA above fold, services, gallery, map slot, and contact form (preview only).

---

{{DESIGN_CRAFT_RULES}}

---

### Business identity

- **Name:** {{BUSINESS_NAME}}
- **Type:** {{VERTICAL}}
- **Location:** {{FULL_ADDRESS}}
- **Hero H1 (use or adapt closely):** {{HERO_H1}}
- **Hero subhead:** {{HERO_SUBHEAD}}
- **Primary CTA button:** {{PRIMARY_CTA}}
- **Secondary CTA:** {{SECONDARY_CTA}}

**Service bullets (feature these prominently):**
{{SERVICE_BULLETS}}

---

### Layout brief

**Layout family:** {{LAYOUT_FAMILY}}
**Wireframe:** {{LAYOUT_DESCRIPTION}}
{{STICKY_CALL_BAR}}

**Sections (in this order):** {{SECTIONS_LIST}}

---

### Photo inventory

{{PHOTO_INVENTORY}}

Use `<img>` tags with descriptive `alt` attributes. Real photos will replace placeholder areas via manifest — design generous photo regions, not tiny thumbnails.

---

### Brand — mandatory (from Facebook imagery)

**Use these exact hex values in `styles.css`:**

{{CSS_VARIABLES}}

| Role | Hex |
| ---- | --- |
| Primary | {{PRIMARY_COLOR}} |
| Secondary | {{SECONDARY_COLOR}} |
| Accent | {{ACCENT_COLOR}} |

- **Typography:** Load Google Fonts: {{GOOGLE_FONTS_URL}}
- **Display font:** {{FONT_DISPLAY}}
- **Body font:** {{FONT_BODY}}
- **Mood:** {{MOOD}}

---

### Anti-slop rules (non-negotiable)

- Do NOT use Tailwind CDN, utility-class-only pages, or Material Symbols as primary UI.
- Do NOT use generic AI landing templates (3-column icon cards, purple/indigo SaaS gradients, Inter/Roboto defaults).
- Do NOT use `transition: all` — animate specific properties with purpose; include `:active` scale on buttons.
- Do NOT invent fake awards, star rating widgets, or "#1 rated" unless review score is provided above.
- Do NOT use stock photo URLs or AI placeholder image services.
- Do NOT use emojis anywhere — no emoji in headings, buttons, body copy, or labels.
- Layout must feel specific to **{{VERTICAL}}** — not a Webflow clone or startup landing page.
- Respect `prefers-reduced-motion`.
- Phone must be a visible `tel:` link in header and hero.
- {{ANTI_PATTERNS}}

**Design dials:** variance {{DESIGN_VARIANCE}}/10 · motion {{MOTION_INTENSITY}}/10 · density {{VISUAL_DENSITY}}/10

---

### Deliverable requirements

- **Full website:** semantic HTML5, dedicated `styles.css`, dedicated `script.js`
- **Responsive:** mobile (390px), tablet (768px), desktop (1280px) — no horizontal scroll; hero + primary CTA visible on first mobile screen
- **Interactive:** mobile nav (`data-nav-toggle`), smooth anchor scroll, contact form UI with validation (preview only)
- **Copy:** Use post caption voice and service bullets above — no lorem ipsum
- **Unique layout:** {{LAYOUT_FAMILY}} — avoid default 3-column card grids

### Page structure

1. **Header** — wordmark, nav, phone CTA visible on desktop
2. **Hero** — {{HERO_H1}}, subhead, primary CTA ({{PRIMARY_CTA}}), brand colors dominant
3. **Credibility** — `#credibility` — verifiable trust only (local, review score if provided, years serving community)
4. **Services** — {{SERVICE_BULLETS}}
5. **About** — pull from full scraped profile above; use specific details from their posts (names, offers, community ties)
6. **Gallery** — photo grid for Facebook images
7. **Visit** — `#visit` — address, hours; map panel: `<div class="map-slot" data-map-slot aria-label="Map"></div>` (empty — map injected at build)
8. **Contact** — form + phone + email (preview-only form notice)
9. **Footer** — hours, address, disclaimer space for mockup banner

### Technical

- CSS custom properties with brand hex values above
- Accessible: contrast, focus rings, landmarks
- Mockup banner placeholder at top: "Concept preview — not affiliated with {{BUSINESS_NAME}}"

---
