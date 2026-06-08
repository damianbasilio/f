# Stitch prompt — Facebook Leads Dashboard v3

Use with: `npm run stitch:dashboard`

---

## Prompt (paste into Stitch)

Design a **professional internal operations app** from scratch. You have full creative control over typography, layout, and component styling — but you must follow the craft rules below. This is **not** a marketing site and **not** a generic SaaS dashboard template.

### Product (what it does — not how it looks)

**Facebook Leads** helps one operator run local-business outreach:

1. **Leads** — Table of businesses: name, city, email, pipeline stage, link to mockup site.
2. **Review** — Pick a batch, queue of leads, read outreach email (to, subject, body, mockup URL), approve or regenerate.
3. **New search** — Form: max searches, optional SERP budget, start button. Progress through 7 steps: Scraping leads → Verifying lead search → Importing leads → Verifying Facebook profiles → Creating design → Final details → Preview live. Live log output.
4. **Import** — Paste/upload JSON array of leads, import button, run pipeline button, status line.

System status somewhere: idle / running / workers active.

### Architecture (non-negotiable)

- **Four separate pages.** Each tab is its own full content view — **not** one long scrolling page.
- In HTML: four sibling `<section class="app-view">` panels in the main area. **Only Leads is visible** in the mockup; the other three are present in the DOM but hidden (`hidden` attribute or `.app-view { display: none }` + `.app-view.is-active { display: block }`).
- Sidebar or top nav with four items to switch pages (static mockup — Leads tab active).
- One shared chrome (sidebar/header) wraps all views.

### Visual direction

- **Minimalist and professional** — calm, confident, operator-grade. Generous whitespace, clear hierarchy, no decoration for decoration's sake.
- **Light + dark:** CSS custom properties on `:root` and `@media (prefers-color-scheme: dark)`. Light mode: white or warm-white surfaces, near-black text, subtle gray borders. Dark mode: near-black surfaces, light gray text. **One restrained accent** (slate, forest, or warm charcoal — not neon cyan, not purple).
- **Typography:** Choose a distinctive Google Font pairing (display + body). **Do not** default to Inter, Roboto, or Arial as the only personality. Clear type scale: page title, section label, body, mono for logs.
- **Shape:** 6–10px radius max on containers. Hairline borders preferred over heavy shadows.
- **No stock photos, no illustrations, no avatars, no fake charts.**

### Anti-slop (same standards as our mockup sites)

- **No** purple/indigo SaaS gradients (#6366f1, #8b5cf6, from-indigo, etc.).
- **No** glassmorphism, glow effects, neon accents, or "command center" / cyber aesthetic.
- **No** gradient text, side-stripe accent borders on cards, or 24px+ container radius.
- **No** repeated identical 3-column icon-card rows.
- **No** uppercase tracking spam — max one small-caps label per screen.
- **No** buzzwords: elevate, seamless, world-class, game-changer, orchestrator, ignite, deploy, sync, nominal.
- **No** lorem ipsum. Use realistic sample data (3 lead rows, one email preview, pipeline mid-step).
- **No** fake metrics cards, notification badges, or decorative header buttons that do nothing.
- **No** em dashes in copy. No emojis.
- Buttons: solid or outline, 150–200ms ease-out transitions on color/border only — never `transition: all`.
- Include `prefers-reduced-motion` respect.

### Technical output

- One complete HTML document.
- **Vanilla CSS** in a `<style>` block or linked `styles.css` — prefer **not** Tailwind CDN.
- **No JavaScript.**
- Desktop 1280px, usable at 768px.
- Semantic HTML, accessible labels on inputs.

Build something that feels like a **quiet, well-made tool** — the kind of UI a senior product designer would ship, not an AI dashboard generator.

---
