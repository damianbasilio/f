I have designed a bespoke, premium visual identity and a high-fidelity desktop homepage for Alaniz Detailing. 

### Design Decisions:
- **Visual Identity**: Established the "Alaniz Precision System," featuring an **Obsidian & Slate** palette with high-contrast **Bodoni Moda** serif headers and clean sans-serif body text.
- **Editorial Layout**: Avoided generic template structures in favor of an editorial-style composition with generous whitespace, vertical "precision lines" as structural motifs, and a non-standard services grid.
- **Craft & Credibility**: Integrated a dedicated "Standards" section and an atmospheric "About" section to communicate the meticulous, award-winning nature of Marcos Alaniz's work in Victoria.
- **Technical Excellence**: The site is built with semantic HTML, a sticky navigation system, and a custom-styled contact form with integrated validation UI.

The result is a unique, memorable digital presence that positions Alaniz Detailing as the premier choice for automotive preservation.

---

---
name: Alaniz Precision System
colors:
  surface: '#101417'
  surface-dim: '#101417'
  surface-bright: '#36393d'
  surface-container-lowest: '#0b0f12'
  surface-container-low: '#191c20'
  surface-container: '#1d2024'
  surface-container-high: '#272a2e'
  surface-container-highest: '#323539'
  on-surface: '#e0e2e7'
  on-surface-variant: '#c7c6ca'
  inverse-surface: '#e0e2e7'
  inverse-on-surface: '#2d3135'
  outline: '#919094'
  outline-variant: '#46464a'
  surface-tint: '#c8c6c7'
  primary: '#c8c6c7'
  on-primary: '#313031'
  primary-container: '#0a0a0b'
  on-primary-container: '#7a797a'
  inverse-primary: '#5f5e5f'
  secondary: '#c6c6ca'
  on-secondary: '#2e3033'
  secondary-container: '#47494c'
  on-secondary-container: '#b7b8bc'
  tertiary: '#b8c3ff'
  on-tertiary: '#002487'
  tertiary-container: '#00062c'
  on-tertiary-container: '#476cff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1c1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#e2e2e6'
  secondary-fixed-dim: '#c6c6ca'
  on-secondary-fixed: '#1a1c1f'
  on-secondary-fixed-variant: '#45474a'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b8c3ff'
  on-tertiary-fixed: '#001355'
  on-tertiary-fixed-variant: '#0035bd'
  background: '#101417'
  on-background: '#e0e2e7'
  surface-variant: '#323539'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.15em
  label-tech:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

The design system is engineered to evoke the meticulous nature of high-end automotive restoration and protection. The brand personality is authoritative, sophisticated, and deeply rooted in craftsmanship. It targets a discerning clientele that views their vehicles as investments and works of art.

The visual style is **Modern Editorial Minimalism** with **Tactile/Skeuomorphic** accents. It leverages high-contrast layouts reminiscent of luxury automotive journals, characterized by expansive whitespace, razor-sharp precision lines, and subtle metallic textures that mimic the finish of polished paint and machined aluminum. The emotional response should be one of immediate trust, reflecting the "award-winning craft" of the studio.

## Colors

The "Obsidian & Slate" palette is the foundation of the design system. 

- **Primary (Obsidian):** `#0A0A0B` - A deep, ink-like charcoal used for backgrounds to allow vehicle photography to pop.
- **Secondary (Slate/Steel):** `#2E3033` - Used for containers and surface elevations, providing a subtle metallic depth.
- **Tertiary (Electric Cobalt):** `#2956F3` - A high-energy, precision-focused blue used exclusively for primary calls to action and critical interactive states.
- **Neutral (High-Contrast White):** `#E2E4E9` - Not a pure white, but a slightly cool-toned silver-white for maximum legibility against dark backgrounds.
- **Accent (Chrome):** `#8E9196` - Used for borders and "precision lines" to evoke machined metal.

The system utilizes high-contrast whitespace (negative space) in the dark mode to ensure a premium, spacious feel.

## Typography

The typography strategy relies on a dramatic contrast between heritage and technology.

- **Headlines (Bodoni Moda):** A high-contrast serif that communicates prestige, history, and luxury. Used for large display titles and section headings.
- **Body (DM Sans):** A wide-set, low-contrast sans-serif that offers technical precision and readability. The generous letter spacing in body copy reinforces the "editorial" feel.
- **Labels (Space Grotesk):** Used for technical specs, service categories, and micro-copy. Its geometric, slightly futuristic structure suggests the advanced chemical engineering used in detailing (ceramic coatings, PPF).

**Editorial Rule:** Headlines should often be used in a "Hero" context with significant padding-bottom to separate them from the technical body copy.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (12 columns) and a **Fluid** model on mobile. 

- **Generous Margins:** Desktop margins are set to a wide 80px to create a "frame" around the content, mimicking a magazine spread.
- **Vertical Rhythm:** Section gaps are intentionally large (160px) to force the user to focus on one service or image at a time.
- **Precision Lines:** Thin (1px) horizontal and vertical lines in `accent_silver` should be used to separate content blocks, reinforcing the "precision" motif of the brand.
- **Imagery:** Photography should be full-bleed or set in large-span columns (8-10 columns) to emphasize the quality of the detailing work.

## Elevation & Depth

This design system eschews traditional soft shadows for **Tonal Layering** and **Linear Depth**.

1.  **Surfaces:** The base layer is `primary_color_hex` (Obsidian). Secondary containers use `secondary_color_hex` (Slate) with a subtle 1px border of `accent_silver` at 20% opacity.
2.  **Metallic Gradients:** Instead of shadows, depth is created using subtle linear gradients (e.g., `primary_color_hex` to `secondary_color_hex`) to simulate the way light hits a curved car panel.
3.  **Glassmorphism:** Navigation bars and floating spec-sheets use a "Smoked Glass" effect: a background blur of 20px with a 40% opaque `primary_color_hex` fill.
4.  **The "Glint":** Interactive elements may feature a sharp, diagonal gradient highlight to simulate a light reflection on a polished surface.

## Shapes

The shape language is **Sharp (0px)**. 

To reflect the precision and masculine refinement of high-end automotive design, the system avoids rounded corners. Every button, input field, and card container must have 90-degree angles. This geometric rigidity communicates discipline and accuracy. 

The only exception to the "sharp" rule is the use of circular "Quality Seals" or "Award Badges," which should be treated as floating decorative elements rather than structural UI components.

## Components

- **Buttons:** Primary buttons use a solid `tertiary_color_hex` (Electric Cobalt) fill with `label-caps` typography in white. Secondary buttons are "Ghost" style with a 1px `accent_silver` border and no fill.
- **Precision Lines:** Use 1px dividers in `secondary_color_hex` to separate list items or header sections. These should feel like hairline fractures in the obsidian background.
- **Cards (Service Panels):** Cards should have no background fill by default, defined only by the image and a bottom-aligned `headline-md`. On hover, a subtle `secondary_color_hex` background may fade in.
- **Input Fields:** Bottom-border only (1px `accent_silver`). No box. Labels should use `label-caps` positioned above the line.
- **Interactive States:** Hovering over an image should trigger a "macro-zoom" effect (1.05x scale) to emphasize the detail of the paintwork. 
- **Status Chips:** Small, rectangular tags with a `label-tech` font. Used for "Certified," "Award-Winning," or "In-Stock."
- **Data Grids:** For technical specifications (e.g., coating thickness, durability years), use a 2-column grid with a thin vertical divider and `label-caps` for the keys.
