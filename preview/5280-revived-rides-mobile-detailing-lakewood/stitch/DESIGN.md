I've designed and built a bespoke, production-ready landing page for **5280 Revived Rides**. 

### Design Strategy
- **Visual Identity**: I established the "High-Altitude Precision" design system, which uses a high-contrast **Asphalt & Alpine** palette. The deep charcoal base provides a premium, "dark mode" feel that allows the **Revive Orange** call-to-actions to pop with high intent.
- **Topographic Motif**: To lean into the "5280" local branding, I've integrated subtle topographic line patterns and vertical typography that reference the elevation and the Front Range location.
- **Editorial Layout**: Moving away from standard business templates, I used an asymmetric hero layout and a tiered "Protocols" section for services to convey a sense of elite, specialized craftsmanship rather than a generic car wash.
- **Local Credibility**: The "Precision Index" and "Born at 5,280 ft" sections specifically highlight the business's Lakewood roots and its high-altitude expertise.

### Technical Implementation
- **Semantic HTML**: Built with full accessibility in mind using proper document structure.
- **Custom CSS**: All styles are driven by CSS variables for easy future updates to the brand palette.
- **Interaction**: Added smooth scrolling for navigation and a custom validation UI for the "Commence Revival" contact form.
- **Map Integration**: A dedicated `map-slot` is ready for your preferred map API implementation.

The site is fully responsive and ready to make a premium first impression for your mobile detailing clients.

---

---
name: High-Altitude Precision
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#1a1a1a'
  on-primary-container: '#848282'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#cac6c4'
  on-tertiary: '#31302f'
  tertiary-container: '#1b1a19'
  on-tertiary-container: '#858281'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

This design system translates the meticulous nature of professional automotive detailing into a digital interface. It targets a premium demographic that values precision, elite craftsmanship, and the rugged yet refined spirit of Denver. 

The aesthetic is **Corporate Modern** with **Minimalist** leanings, influenced by automotive instrumentation and architectural engineering. The emotional response is one of absolute trust and "showroom" quality. Every interface element should feel as if it were machined from a solid block of aluminum or finished with a high-gloss ceramic coating. 

Visual motifs include:
- **Topographic Overlays:** Subtle, low-opacity vector lines representing the Front Range, used sparingly in hero backgrounds.
- **Technical Grids:** A 50px micro-grid occasionally visible in the background to emphasize alignment and "precision engineering."
- **High-Gloss Finishes:** Using gradients to mimic light reflecting off a polished car hood.

## Colors

The palette, **Asphalt & Alpine**, utilizes a dark-mode default to emulate luxury automotive interiors and the deep charcoal of fresh pavement.

- **Primary (Asphalt):** `#1A1A1A` - Used for the main canvas and deep UI layers.
- **Secondary (Metallic Silver):** `#C0C0C0` - Used for borders, icons, and secondary text to provide a machined, metallic feel.
- **Accent (Revive Orange):** `#FF5722` - Reserved strictly for primary calls-to-action and critical status indicators, providing high-impact contrast against the dark base.
- **Surface:** `#242424` - A slightly lighter charcoal for cards and elevated containers.
- **Text (Alpine White):** `#F5F5F5` - High-readability neutral for body copy.

## Typography

The typography strategy pairs the power of **Montserrat** with the systematic clarity of **Inter**.

- **Headlines:** Montserrat is used in bold and extra-bold weights. Wide tracking is avoided in headlines to keep the "power" condensed and focused, reminiscent of automotive branding.
- **Body:** Inter provides a neutral, utilitarian balance, ensuring that technical specifications and service descriptions are highly legible.
- **Labels:** Small caps with increased letter spacing are used for category tags and "technical specs" to mimic the stamping on engine parts.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy to maintain an editorial, high-end feel. 

- **The 12-Column Grid:** A standard 12-column layout on desktop with wide 24px gutters. 
- **Editorial Whitespace:** Significant vertical padding between sections (120px) allows high-resolution imagery of polished vehicles to act as the primary visual driver.
- **The "Technical Offset":** Occasionally, text blocks should be offset from the center to create a dynamic, asymmetrical look common in luxury car brochures.
- **Mobile:** Transition to a single-column layout with 16px side margins, maintaining the bold typography but scaling sizes to ensure readability.

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines**.

- **Layers:** We avoid heavy shadows. Instead, we use "Surface-on-Surface" depth. The background is `#1A1A1A`, and cards are `#242424`.
- **Borders:** To emphasize "Precision Engineering," use 1px solid borders in `#C0C0C0` with 10% opacity. This creates a ghost-frame effect that feels structural.
- **Interaction Depth:** On hover, cards should transition to a subtle inner-glow (0.5px white border at 20% opacity) to simulate light catching a polished edge.

## Shapes

The shape language is **Soft** but disciplined. 

- **Radius:** A consistent 0.25rem (4px) radius is used for all primary containers and buttons. This creates a "machined" look—not sharp enough to be aggressive, but not rounded enough to feel consumer-grade or "bubbly."
- **Iconography:** Use linear, technical icons with consistent 2px stroke weights. Icons should be enclosed in a square frame to maintain the grid-based aesthetic.

## Components

- **Primary Buttons:** High-gloss `Revive Orange` (#FF5722) background, white text in Montserrat Bold. On hover, the button should slightly expand (scale 1.02) to mimic a physical press.
- **Secondary Buttons:** Ghost style with a 1px `Metallic Silver` border and no fill.
- **Service Cards:** Use a top-aligned image with a 1px border separator. Titles should be in `label-caps` style above the main headline.
- **Detailing "Specs" Lists:** Use a monospaced-style treatment for technical data (e.g., pH levels of soaps, drying times) to reinforce the "Precision Engineering" narrative.
- **Progress Steppers:** For booking flows, use a horizontal line with numbered circles, using the `Metallic Silver` for inactive steps and `Revive Orange` for the current active step.
