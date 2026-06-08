I have designed a bespoke landing page for **Southern City** that balances Johnstown's industrial legacy with a premium, editorial aesthetic.

### Design Highlights:
- **Visual Identity:** The "Industrial Elegance" theme uses a sophisticated palette of **Deep Charcoal**, **Burnished Copper**, and **Mist Gray**. 
- **Typography:** I paired the high-contrast **Bodoni Moda** serif for headings with a clean sans-serif for body text to create a sense of established luxury.
- **Layout:** Instead of a generic template, I used an **asymmetrical, grid-breaking layout** with thin 1px rules (lines) as a recurring visual motif, giving the site a "designed" and memorable feel.
- **Content:** The copy is tailored specifically to Southern City's location at 500 Galleria Drive and its local Johnstown roots, moving away from generic business filler.
- **Functionality:** The site includes a custom contact form with validation UI, a dedicated map slot for your visit section, and a fully responsive mobile-ready navigation.

The result is a unique, high-fidelity first impression that feels like a premium digital storefront for your business.

---

---
name: Industrial Elegance
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#8c4f10'
  on-secondary: '#ffffff'
  secondary-container: '#fdad67'
  on-secondary-container: '#763f00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#111c2c'
  on-tertiary-container: '#798499'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77b'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#d8e3fa'
  tertiary-fixed-dim: '#bcc7dd'
  on-tertiary-fixed: '#111c2c'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
typography:
  display-xl:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.03em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-padding: 120px
---

## Brand & Style

This design system is built upon the concept of **Industrial Elegance**, a visual narrative that bridges the rugged, steel-forged history of Johnstown, PA, with a contemporary high-end business sensibility. The aesthetic is a fusion of **Minimalism** and **Editorial Design**, utilizing intentional asymmetry to create a sense of bespoke craftsmanship rather than mass production.

The brand personality is authoritative yet approachable, reflecting an established local pillar that has evolved with the times. The emotional response should be one of stability and prestige—evoking the feeling of a heavy steel beam polished to a mirror finish. This is achieved through generous whitespace, razor-sharp edges, and a meticulous application of "rule lines" that mimic architectural blueprints.

## Colors

The palette is rooted in the materials of the industrial landscape. 

*   **Deep Charcoal (#1A1A1A):** Used for primary typography and grounding structural elements. It represents the strength of iron and coal.
*   **Burnished Copper (#B87333):** Used sparingly as a highlight color for call-to-actions, links, and premium accents. It provides warmth and a "human touch" against the cooler neutrals.
*   **Mist Gray (#F5F5F7):** The primary canvas color. It is softer than pure white, reducing eye strain and providing a sophisticated, paper-like quality to the editorial layout.
*   **Slate Accent (#4A5568):** A secondary functional color used for borders, subtle backgrounds, and secondary icons, bridging the gap between the charcoal and the light background.

## Typography

The typography strategy relies on the high-contrast tension between the two families. 

**Bodoni Moda** is the voice of the brand. It is used for all major headings and display text. Its vertical stress and sharp serifs evoke classic editorial prestige. On mobile, headlines should scale aggressively to maintain their presence without breaking word forms.

**Montserrat** provides the industrial utility. It is set with slightly wider tracking (letter-spacing) than default to enhance readability and give the UI an airy, modern feel. All labels and overlines should be set in Montserrat with heavy tracking and uppercase styling to mimic technical specifications found in industrial drafting.

## Layout & Spacing

This design system employs a **Fluid Grid** with a 12-column structure for desktop and a 4-column structure for mobile. 

The layout philosophy is defined by **Asymmetrical Balance**. Content should not always center-align; instead, use the grid to anchor elements to "rule lines" (1px borders). Use large vertical padding (`section-padding`) to separate narrative blocks, allowing the photography and typography to breathe. 

Rule lines should be used to bisect the screen or frame specific content clusters, reinforcing the "Industrial" structural theme. These lines are always `1px` solid, colored in `Slate Accent` or a lower-opacity `Deep Charcoal`.

## Elevation & Depth

To maintain the high-end editorial feel, this design system avoids traditional box shadows. Depth is instead communicated through:

1.  **Low-Contrast Outlines:** Containers and sections are defined by 1px rules rather than drop shadows. 
2.  **Tonal Layering:** Using `Mist Gray` for the page background and pure `White` or `Slate Accent` at 5% opacity for surface areas to create a subtle stack.
3.  **The "Rule Line" Motif:** Vertical and horizontal lines create a structural skeleton. When an element is "active," the rule line associated with it may thicken to 2px or change color to `Burnished Copper`.
4.  **Zero-Blur Overlays:** When modals are required, use a solid color background with 80% opacity rather than a diffused blur to maintain the sharp, architectural aesthetic.

## Shapes

The shape language is strictly **Sharp (0)**. In keeping with the industrial steel motif, there are no rounded corners in this design system. 

All buttons, cards, input fields, and images must have 90-degree angles. This severity reinforces the professional and established tone. Interactive elements may use a "clipped corner" or a diagonal line motif in their hover states to mimic faceted metal, but the base geometry remains rectangular.

## Components

### Buttons
Buttons are rectangular with zero radius. The **Primary Button** is a solid `Deep Charcoal` with `White` text. The **Secondary Button** uses a 1px `Deep Charcoal` border with a `Burnished Copper` text label. Hover states involve a solid color fill transition.

### Input Fields
Inputs follow a minimalist editorial style: a simple 1px bottom border (the rule line) that transitions to `Burnished Copper` on focus. Labels sit above the line in `label-caps` typography.

### Cards
Cards are never elevated with shadows. They are defined by a 1px `Slate Accent` border. In an asymmetrical layout, cards may span varying column widths (e.g., a 7-column image card paired with a 5-column text card) to create visual interest.

### Chips & Tags
Tags are used for categorization and should be styled as small, outlined rectangles. They use the `label-caps` typography style to look like part numbers or industrial stamps.

### Rules & Dividers
Dividers are the most important component. They should be used to lead the eye across the page. Vertical dividers are encouraged to separate sidebar navigation or supplementary editorial notes from the main body text.
