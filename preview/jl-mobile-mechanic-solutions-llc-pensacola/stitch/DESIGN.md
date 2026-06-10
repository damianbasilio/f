I have completed the bespoke homepage for **JL Mobile Mechanic Solutions LLC**. 

### Design Rationale:
*   **Industrial Editorial Aesthetic**: I avoided standard local-business layouts in favor of an "Industrial Luxury" style. This uses high-contrast serif typography (Bodoni Moda) paired with technical mono-spaced labels to convey both premium quality and mechanical precision.
*   **Unique Visual Motif**: The design features a subtle blueprint grid and technical schematic lines (1px rules) that repeat across the page, reinforcing the concept of a "Mobile Workshop" rather than just a simple repair service.
*   **Intentional Hierarchy**: The layout uses an asymmetric grid and varying typographic scales to create a memorable, magazine-like flow that sets the brand apart from competitors.
*   **Technical Details**:
    *   **Persistent Navigation**: A high-contrast header ensures the (850) 208-2714 phone number is always accessible.
    *   **The Mobile Workshop**: Instead of generic icons, services are presented as technical "spec blocks."
    *   **Area of Deployment**: A dedicated section for the #visit map slot, emphasizing service throughout the Pensacola area.
    *   **Responsive & Semantic**: Built with clean HTML, CSS variables for the cobalt and amber palette, and lightweight JS for smooth interactions.

The site is now production-ready and fully tailored to Pensacola's premier mobile mechanical specialist.

---

---
name: Industrial Editorial
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#44474d'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#505f79'
  primary: '#05152b'
  on-primary: '#ffffff'
  primary-container: '#1b2a41'
  on-primary-container: '#8291ad'
  inverse-primary: '#b8c7e5'
  secondary: '#895100'
  on-secondary: '#ffffff'
  secondary-container: '#fd9d1a'
  on-secondary-container: '#663b00'
  tertiary: '#11161a'
  on-tertiary: '#ffffff'
  tertiary-container: '#252a2f'
  on-tertiary-container: '#8c9197'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b8c7e5'
  on-primary-fixed: '#0c1c32'
  on-primary-fixed-variant: '#394760'
  secondary-fixed: '#ffdcbc'
  secondary-fixed-dim: '#ffb86b'
  on-secondary-fixed: '#2c1700'
  on-secondary-fixed-variant: '#683d00'
  tertiary-fixed: '#dee3ea'
  tertiary-fixed-dim: '#c2c7cd'
  on-tertiary-fixed: '#171c21'
  on-tertiary-fixed-variant: '#42474d'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
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
  subhead-tech:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
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
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.0'
  ui-button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap-lg: 128px
  technical-gap-sm: 16px
---

## Brand & Style

The design system is defined by "Industrial Luxury"—a visual tension between the raw, oily precision of high-end mechanical engineering and the sophisticated, airy layout of a premium editorial magazine. It targets a clientele that values expert craftsmanship and white-glove service, even in the context of heavy machinery and automotive repair.

The aesthetic combines **Minimalism** with **Modern Industrial** elements. It utilizes massive, "Pristine White" canvases to frame technical content, making the mechanical work feel like a curated gallery piece. The brand response should be one of absolute authority and calm precision, rejecting the cluttered, low-quality tropes of the traditional repair industry in favor of a bespoke, technical-manual-meets-luxury-journal feel.

## Colors

The palette is anchored by **Impact Cobalt**, a deep slate-navy that represents the reliability of steel and engineering. **High-Vis Amber** is used sparingly as a high-contrast functional accent for call-to-actions and status indicators, mimicking the functional visibility of workshop safety equipment. 

**Oil Slick Black** provides the deepest tones for text and structural borders, while **Machine Grey** handles secondary technical data and UI ornaments. The canvas remains **Pristine White** to ensure the "Luxury" side of the narrative is upheld through generous negative space.

## Typography

The typography strategy is a deliberate contrast between the "Editorial" and the "Mechanical." 

**Bodoni Moda** is the primary display face, used for large-scale headlines to evoke fashion and luxury. It should be typeset with tight leading and slight negative letter-spacing for a dramatic, high-contrast effect. 

**Hanken Grotesk** serves as the functional body face, providing a clean, contemporary feel that balances the serif’s tradition.

**JetBrains Mono** is utilized for "Technical Manual" moments—serial numbers, spec sheets, labels, and small UI details. This monospaced font reinforces the precision and mechanical nature of the service, acting as the "Blueprint" layer of the typography.

## Layout & Spacing

This design system employs a **12-column fixed grid** for desktop, focusing on extreme shifts in density. 

1.  **Editorial Sections:** Use wide margins (80px+) and massive vertical gaps (128px+) between sections to allow the high-contrast photography and Bodoni headlines to breathe.
2.  **Technical Sections:** Content should be densely packed within specific grid modules, using 16px internal padding and thin hairline dividers. This mimics the layout of an engineering schematic or a service manual.

On mobile, the 12 columns collapse to a 4-column system, but the vertical "breathability" remains high to maintain the premium feel.

## Elevation & Depth

Depth is not communicated through soft shadows, but through **Tonal Layering** and **Technical Outlines**. 

- **Structural Lines:** Use 1px "Blueprint" lines in Machine Grey or Oil Slick Black to define containers. 
- **The "Glass Sheet" Effect:** Surfaces may use very subtle backdrop blurs on translucent Pristine White layers to simulate the look of architectural drafting paper overlaid on a blueprint.
- **Sharp Stacking:** Higher elevation elements do not cast diffused shadows; instead, they use a hard, 2px offset "Oil Slick Black" shadow or simply a thicker border to indicate focus. This maintains the "Brutalist" mechanical integrity.

## Shapes

The shape language is strictly **Sharp (0px)**. To reflect the nature of heavy machinery, industrial tools, and blueprints, there are no rounded corners in the core UI. Every button, card, and input field must have 90-degree angles. This reinforces the "Authoritative" and "Precise" brand tone, distancing the identity from the "soft" consumer-grade apps and aligning it with professional industrial equipment.

## Components

### Buttons
Primary buttons are solid **Impact Cobalt** with white **JetBrains Mono** text. They are strictly rectangular. Secondary buttons use a 1px Oil Slick Black border with no fill. The hover state for all buttons is a solid fill of **High-Vis Amber** with black text.

### Cards & Containers
Cards do not use shadows. They are defined by 1px Machine Grey borders. For a "Schematic" look, cards may feature small "+" symbols at the four corners (corner marks) or a subtle "Technical Spec" label in the top-right corner using JetBrains Mono.

### Technical Spec Lists
Used for service details or vehicle diagnostics. These should be high-density, alternating between Pristine White and very faint Machine Grey backgrounds, using monospaced typography for all numerical values to ensure perfect vertical alignment.

### Inputs & Forms
Input fields are underlined only (1px Oil Slick Black) or fully boxed with sharp corners. Labels should be small, monospaced, and positioned above the field or inside the top-left border as if stamped onto a part.

### Visual Motifs
Integrate 1px grid overlays (24px squares) at 5% opacity in the background of technical sections. Photography should be treated with high contrast, desaturating non-essential colors and emphasizing metallic highlights and deep, oily shadows.
