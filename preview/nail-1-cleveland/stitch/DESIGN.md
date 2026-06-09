I have designed a bespoke, editorial-grade homepage for **Nail #1**. 

### Design Strategy
*   **Visual Identity**: I established a "Rust & Rose" palette—merging Cleveland's industrial heritage with the refined precision of high-end nail artistry.
*   **Editorial Layout**: Eschewing standard templates, I used an asymmetrical grid with floating text blocks and thin copper-colored "grid lines" to create a premium, magazine-style experience.
*   **Typographic Hierarchy**: High-contrast Bodoni Moda headings provide a bold, fashion-forward feel, while clean, tracked-out labels maintain an industrial-chic utility.
*   **Core Experience**:
    *   **Hero**: A minimalist, high-impact introduction focusing on "Precision as a Signature."
    *   **The Menu**: A sophisticated, non-card-based services section designed for readability and elegance.
    *   **Visit Studio**: A dedicated section including the required map slot and essential contact details for their East 55th Street location.
    *   **Reservations**: A sleek, validation-ready contact form to drive consultations.

The site is fully responsive and built with production-ready HTML and CSS.

---

---
name: Rust & Rose Editorial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#54433a'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#877369'
  outline-variant: '#dac2b6'
  surface-tint: '#934b19'
  primary: '#6c2f00'
  on-primary: '#ffffff'
  primary-container: '#8b4513'
  on-primary-container: '#ffc29f'
  inverse-primary: '#ffb68c'
  secondary: '#8c4f10'
  on-secondary: '#ffffff'
  secondary-container: '#fdad67'
  on-secondary-container: '#763f00'
  tertiary: '#593927'
  on-tertiary: '#ffffff'
  tertiary-container: '#74503d'
  on-tertiary-container: '#f5c5ac'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68c'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#753401'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77b'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ecbda4'
  on-tertiary-fixed: '#2e1506'
  on-tertiary-fixed-variant: '#603f2d'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Bodoni Moda
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  grid-margin: 4rem
  grid-gutter: 1.5rem
  offset-shift: 2rem
  block-gap: 6rem
  container-max: 1280px
---

## Brand & Style

This design system embodies "Modern Industrial Chic," a fusion of Cleveland’s rugged urban heritage and the high-polish world of editorial fashion. The brand personality is sophisticated yet grounded—it avoids the typical "soft" aesthetic of beauty salons in favor of a bold, architectural approach. 

The visual style is **Editorial Minimalism** with a **Brutalist** edge. It utilizes heavy whitespace, high-contrast typography, and a "broken" layout philosophy that mirrors the composition of a high-end fashion magazine. The emotional response should be one of exclusive discovery: a space that feels curated, intentional, and unapologetically stylish.

## Colors

The palette, titled "Rust & Rose," is a direct homage to the industrial landscape of Cleveland softened by the elegance of nail artistry.

- **Primary (Iron Oxide):** A deep, authoritative brown used for primary typography and structural elements. It provides the "Industrial" weight.
- **Secondary (Brushed Copper):** Used for interactive elements, thin borders, and accents. It adds a metallic, premium sheen to the layout.
- **Tertiary (Dusty Rose):** A soft, humanizing tone used for large background blocks or subtle highlights, bridging the gap between iron and skin.
- **Neutral (Off-white):** The canvas. This provides a warm, paper-like quality rather than a sterile digital white.
- **Accent Dark:** A near-black used sparingly for maximum contrast in headlines or "Floating Geometric Blocks."

## Typography

The typographic strategy relies on extreme contrast. **Bodoni Moda** serves as the primary headline face, providing a high-fashion, high-contrast serif look that mimics the stencil aesthetic of industrial signage when set in heavier weights. 

**Hanken Grotesk** is used for body copy and UI labels. It is set with generous letter-spacing (tracking) to evoke a sense of luxury and breathability. 

- **Headlines:** Always high-contrast. Use `display-xl` for hero sections, often overlapping background elements.
- **Body Text:** Keep line lengths short to maintain the editorial column feel.
- **Labels:** Use `label-caps` for navigation and small callouts to instill a disciplined, organized structure.

## Layout & Spacing

The layout utilizes an **Offset Grid System**. While built on a standard 12-column foundation, the design system encourages elements to "break" the grid.

- **Floating Geometric Blocks:** Large sections of color (Dusty Rose or Off-white) should be shifted -2rem or +2rem off the main axis to create visual tension.
- **Offset Grid Lines:** Use 1px Copper (#B87333) borders that extend beyond the container edges or stop abruptly mid-column to create a "technical drawing" or "blueprint" feel.
- **Margins:** Large 4rem margins on desktop create an editorial frame, forcing the eye toward the center of the content.
- **Reflow:** On mobile, the offset blocks stack vertically, but the 1px copper lines remain as dividers to maintain the brand's structural identity.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layering** and **Architectural Outlines**.

- **Flat Depth:** Depth is created by stacking opaque blocks of color. A "Floating Geometric Block" in Dusty Rose might sit atop an Off-white background, creating a clear hierarchy without using a single drop shadow.
- **Thin Outlines:** Use 1px borders in Brushed Copper to define interactive zones or "framed" imagery. These borders should feel like fine jewelry or architectural wireframes.
- **Glassmorphism (Limited):** Use backdrop blurs exclusively for navigation overlays to maintain the "Modern" aspect of the industrial chic aesthetic, ensuring the iron-oxide text remains legible over imagery.

## Shapes

The shape language is strictly **Sharp (0)**. 

To maintain the Industrial and Editorial feel, all buttons, cards, and image containers must have 90-degree corners. This evokes the precision of industrial steel beams and the clean cuts of a physical magazine. The only exception to this rule is the typography itself; the UI elements must remain structural and rigid.

## Components

### Buttons
Primary buttons are rectangular with a 1px Brushed Copper border and Iron Oxide text. On hover, they fill with Iron Oxide and switch text to Off-white. The transition should be instant and crisp.

### Floating Cards
Cards do not have shadows. They are defined by a background fill of Dusty Rose or a thin Copper outline. Imagery within cards should have a "caption" styled with `label-caps` typography, placed outside the image frame to the bottom-right.

### Offset Dividers
Horizontal rules are not full-width. They should start at column 2 and end at column 11, rendered in Brushed Copper.

### Input Fields
Inputs are simple 1px bottom-borders (Iron Oxide). Labels sit above the line in `label-caps`.

### Image Treatments
Use high-contrast photography. Images should often be placed in asymmetrical pairs—one large vertical image offset against a smaller square image to create the "Magazine Spread" feel.
