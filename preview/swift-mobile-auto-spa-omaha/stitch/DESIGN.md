I've designed a bespoke, editorial-grade homepage for **Swift Mobile Auto Spa** that moves away from generic local business templates to create a truly premium, memorable first impression.

### Design Rationale:
*   **Visual Identity**: I established the "Midnight Velocity" theme—a high-contrast combination of Deep Charcoal and Electric Orange accents, framed by generous whitespace and "precision line" motifs (1px rules) that echo automotive technical drawings.
*   **Editorial Typography**: Using **Syne** for bold, wide headings provides a sense of power and stability, while clean sans-serif body text ensures high-end readability.
*   **Bespoke Layout**:
    *   The **Hero** section uses asymmetric typography to emphasize the "Precision Comes To You" value proposition.
    *   The **Services** tier uses high-density cards with specific Omaha-focused pricing to drive immediate action.
    *   The **"Visit"** section integrates the requested map slot alongside a structured contact interface that captures vehicle details (Year, Make, Model), streamlining the quote process.
*   **Interactive Polish**: I've included smooth-scroll navigation and a responsive mobile menu to ensure the premium experience translates across all devices.

The site is production-ready with semantic HTML5, utility-first CSS, and essential JavaScript for navigation and form validation UI.

---

---
name: Swift Mobile Auto Spa
colors:
  surface: '#f6faff'
  surface-dim: '#d2dbe4'
  surface-bright: '#f6faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf5fe'
  surface-container: '#e6eff8'
  surface-container-high: '#e0e9f2'
  surface-container-highest: '#dbe4ed'
  on-surface: '#141d23'
  on-surface-variant: '#444748'
  inverse-surface: '#293138'
  inverse-on-surface: '#e9f2fb'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#ab3600'
  on-secondary: '#ffffff'
  secondary-container: '#fe5e1e'
  on-secondary-container: '#551600'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1d'
  on-tertiary-container: '#828485'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#832700'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f6faff'
  on-background: '#141d23'
  surface-variant: '#dbe4ed'
typography:
  headline-xl:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  button:
    fontFamily: Syne
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  container-max: 1280px
  section-padding: 80px
---

## Brand & Style
The design system for this product is rooted in the "Modern Automotive Atelier" aesthetic. It moves away from common service industry tropes, favoring the precision and sophistication of luxury automotive engineering. The brand personality is high-end and meticulous, yet carries an underlying energetic pulse.

The visual style is **Modern Minimalism** infused with **Technical Precision**. It utilizes heavy whitespace to evoke a sense of "clean," while employing rigid grid structures and fine 1px "precision lines" reminiscent of technical blueprints. The interface should feel like a high-end configurator—stable, authoritative, and expertly tuned.

## Colors
The palette, "Midnight Velocity," focuses on extreme contrast to highlight precision.

- **Primary (Midnight):** #121212. Used for typography, deep-surfaces, and primary actions. It represents the road and carbon fiber.
- **Secondary (High-Octane Orange):** #FF5F1F. Used sparingly for precision accents, active states, and critical calls to action. It represents speed and mechanical energy.
- **Tertiary/Neutral (Slate & Cloud):** #F8F9FA. Used for large layout blocks and background sections to provide "air" and a sense of clinical cleanliness.
- **Functional Greys:** Used for technical metadata and secondary information, maintaining the blueprint aesthetic.

## Typography
The typography system balances the aggressive stability of a wide neo-grotesk with the functional clarity of a contemporary sans-serif.

- **Headlines (Syne):** Bold and wide. Used to anchor the page with a sense of "speed-induced stability."
- **Body (Hanken Grotesk):** Modern and sharp. It provides excellent legibility for service descriptions and technical details.
- **Labels (JetBrains Mono):** Introduced for technical metadata, price points, and "blueprint" callouts to reinforce the automotive atelier theme.

Type scales are generous. Headlines should use tight tracking to feel cohesive, while mono labels use wider tracking for a "serialized" look.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop and a **Fluid** model for mobile.

- **Grid:** A 12-column grid is the standard for desktop, with elements strictly aligned to the grid lines. 
- **The "Precision Line":** Layout sections are separated by 1px solid lines (#121212 at 10% opacity). These lines should extend to the edges of the screen or container, mimicking a technical drawing.
- **Vertical Rhythm:** A base 4px unit governs all spacing. Section headers should have significant top-padding (80px+) to maintain an editorial, premium feel.
- **Responsive:** On mobile, margins reduce to 16px, and the 12-column grid collapses to a 2-column or 1-column layout, but the 1px divider lines remain to preserve the brand identity.

## Elevation & Depth
Elevation in this design system is conveyed through **Tonal Layers** and **Rigid Outlines** rather than soft shadows.

- **Flat Hierachy:** Surface levels are defined by color shifts (e.g., #FFFFFF background to #F8F9FA cards).
- **No Soft Shadows:** Avoid traditional box-shadows. Depth is created by "stacking" elements with 1px borders.
- **High-Contrast Overlays:** When an element must float (like a modal or a floating action button), use a solid #121212 background with an orange accent border, or a stark white surface with a heavy 2px black border to create "Hard Elevation."

## Shapes
The shape language is strictly **Sharp (0px roundedness)**.

The use of 90-degree angles reinforces the architectural and technical nature of the brand. This applies to buttons, input fields, cards, and image containers. The only exception to the "sharp" rule is the use of perfect circles for small utility icons or status indicators, though these should still be contained within square hit areas.

## Components

- **Buttons:** Primary buttons are solid #121212 with white text, using the Syne-Bold typeface in all caps. Secondary buttons are 1px outlined rectangles. The "Precision" action uses a solid #FF5F1F background with a black label for high-impact conversion.
- **Service Cards:** Structured with a 1px border. The top section contains a JetBrains Mono label (e.g., "STAGE 01"), followed by a Syne headline. Content is separated by 1px horizontal rules.
- **Input Fields:** Bottom-border only, or a full rectangular border with 0px radius. Use JetBrains Mono for placeholder text to maintain the "technical form" look.
- **Chips/Status Tags:** Square-edged tags with a subtle #F8F9FA fill and a 1px border. Text is JetBrains Mono, 10px, all caps.
- **The "Detailer's Ruler":** A unique component—a vertical or horizontal 1px line with incremental tick marks (like a ruler) used as a decorative separator or to indicate progress in a multi-step booking flow.
