I've designed a bespoke, editorial-grade bento-style homepage for ARK Angels, LLC. 

### Design Rationale:
*   **Bento Grid Architecture:** Unlike typical local business sites, I utilized a modular grid to organize services and credibility stats. This allows for high information density while maintaining a clean, premium visual rhythm.
*   **Modern Utility Identity:** I've established a "Modern Utility" aesthetic using a deep Steel Blue and Burnt Copper palette. This moves the brand away from generic handyman tropes and toward a more architectural, design-build feel.
*   **Editorial Typography:** The pairing of a high-contrast serif for headlines and a technical monospace font for labels creates an authoritative, craftsman-led tone.
*   **Memorable Visual Motifs:** Fine hairlines and subtle dot-grid backgrounds are used throughout the layout to reinforce the brand's attention to precision and detail.

The site includes all requested sections: a utility-focused header, a high-impact hero bento, a service grid, the stewardship-focused "About" section, and a integrated contact/map module ready for production.

How does this new creative direction feel for the ARK Angels brand?

---

---
name: Modern Utility Editorial
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1b'
  on-surface-variant: '#43474c'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4e6073'
  primary: '#162839'
  on-primary: '#ffffff'
  primary-container: '#2c3e50'
  on-primary-container: '#96a9be'
  inverse-primary: '#b5c8df'
  secondary: '#a23f00'
  on-secondary: '#ffffff'
  secondary-container: '#fc7127'
  on-secondary-container: '#5c2000'
  tertiary: '#362308'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e381c'
  on-tertiary-container: '#c1a17d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4fb'
  primary-fixed-dim: '#b5c8df'
  on-primary-fixed: '#091d2e'
  on-primary-fixed-variant: '#36485b'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb595'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7c2e00'
  tertiary-fixed: '#ffddb7'
  tertiary-fixed-dim: '#e3c19b'
  on-tertiary-fixed: '#291802'
  on-tertiary-fixed-variant: '#5a4225'
  background: '#fcf9f8'
  on-background: '#1b1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
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
  label-technical:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-mono:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  grid-columns: '12'
---

## Brand & Style

This design system establishes a "Modern Utility" aesthetic for high-end home services. It moves away from blue-collar tropes toward an architectural, design-build sensibility. The brand personality is authoritative, precise, and sophisticated, targeting a clientele that values craftsmanship and meticulous attention to detail.

The visual style is a hybrid of **Minimalism** and **Bento-grid Architecture**. It utilizes structured modularity, heavy whitespace, and high-contrast typography to evoke the feeling of a premium editorial magazine or an architectural portfolio. The UI should feel like a set of blueprints: organized, functional, yet aesthetically elevated.

## Colors

The palette is rooted in industry and raw materials, refined for a premium digital experience. 

- **Primary (Steel Blue):** Used for structural elements, primary branding, and deep backgrounds. It represents stability and professional rigor.
- **Secondary (Burnt Copper):** A functional accent used sparingly for calls-to-action, status indicators, or highlighting technical details. It evokes copper piping and raw craftsmanship.
- **Neutral (Deep Charcoal):** Used for primary text and high-contrast borders to ensure maximum legibility and a sharp, ink-on-paper feel.
- **Background (Paper):** A slightly off-white base that reduces eye strain and provides a sophisticated, gallery-like canvas for the content.

## Typography

The typographic scale relies on the tension between the classical elegance of **Playfair Display** and the technical precision of **Geist**.

- **Headlines:** Use Playfair Display for all major headings. Large displays should use tight letter spacing to emphasize the editorial look.
- **Body:** Inter provides a neutral, highly readable foundation for service descriptions and long-form content.
- **Technical Labels:** Use Geist (Monospaced) for metadata, dimensions, price points, and small labels. This reinforces the "architectural blueprint" motif.

## Layout & Spacing

This design system employs a **Fixed Grid** bento-box architecture. Content is housed within modular containers that adhere to a strict 12-column grid on desktop.

- **Bento Philosophy:** Each piece of information (service, testimonial, CTA) lives in its own "cell." Use varying aspect ratios (1:1, 2:1, 1:2) to create visual interest while maintaining alignment.
- **Dot Grid:** Use a subtle 24px dot-grid background (color: `#E5E5E7`) to provide a technical underlying structure.
- **Hairlines:** Separate sections and modules with 1px hairlines using the Primary color at 15% opacity. 
- **Reflow:** On mobile, the 12-column grid collapses to a single-column stack, maintaining the modular card appearance but prioritizing vertical scrolling.

## Elevation & Depth

Depth is achieved through **Low-contrast Outlines** and tonal layering rather than shadows. 

- **Surface Tiers:** Use the "Paper" background as the base. Elevated cards use a pure white (`#FFFFFF`) background with a 1px solid border (`#1C1C1C` at 10% opacity).
- **No Shadows:** To maintain the editorial, flat-print feel, avoid drop shadows entirely. 
- **Active States:** When a card or element is interacted with, increase the border weight to 2px or shift the background color slightly to a very light grey.
- **Backdrop Blurs:** Use a subtle backdrop blur on navigation bars or persistent overlays to maintain a sense of layered glass over the technical grid.

## Shapes

The shape language is disciplined and geometric. 

- **Containers:** All modules and cards use a "Soft" (0.25rem) radius. This provides just enough approachable warmth to offset the "Industrial" colors and fonts without losing the architectural edge.
- **Interactive Elements:** Buttons and input fields should match this radius. 
- **Large Components:** Hero sections or large bento-containers may use `rounded-lg` (0.5rem) for a more pronounced structural look.

## Components

- **Buttons:** High-contrast blocks. Primary buttons are Deep Charcoal with White text. Secondary buttons use an outline style with Geist Mono text. Use "Burnt Copper" exclusively for high-priority conversion points like "Book Consultation."
- **Bento Cards:** The core component. Cards should have consistent padding (24px) and use technical labels (Geist) in the top-right corner to categorize content.
- **Chips/Tags:** Small, rectangular Geist-font labels with a light grey background and no border. Used for service categories (e.g., PLUMBING, CARPENTRY).
- **Input Fields:** Minimalist design with only a bottom border (1px). Upon focus, the border transitions to Steel Blue.
- **Lists:** Service lists should be punctuated by thin horizontal hairlines. Use a "Burnt Copper" dot or Geist-font numeral for bullet points.
- **Featured Service Card:** A specialized bento-cell that uses a high-quality architectural photograph as a background with a "Paper" colored typography overlay.
