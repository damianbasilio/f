I've designed a bespoke, editorial-grade homepage for **K C Nails** that moves away from generic templates to establish a truly premium brand presence.

### Design Highlights:
*   **Editorial Layout:** I used a high-contrast typographic hierarchy and generous whitespace to create a "Vogue-style" layout that feels more like a high-fashion portfolio than a standard salon site.
*   **Sophisticated Palette:** A custom color story of **Deep Espresso**, **Soft Sand**, and **Muted Blush**, accented with **Thin Gold Rules** to symbolize the precision of their nail artistry.
*   **Narrative Flow:** Instead of a simple service list, I framed their offerings as "Technical Excellence" and "The Narrative," emphasizing the meticulous protocol and artisan craftsmanship they offer to the Chico community.
*   **Custom UI Elements:** The "Visit" section features a clean, minimalist map panel, and the contact form is designed with high-end, line-based inputs for a seamless user experience.

The site is fully responsive, semantic, and production-ready. How does this visual direction feel for the brand?

---

---
name: Editorial Luxe
colors:
  surface: '#fef8f7'
  surface-dim: '#ded9d8'
  surface-bright: '#fef8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f2f2'
  surface-container: '#f2edec'
  surface-container-high: '#ece7e6'
  surface-container-highest: '#e6e1e1'
  on-surface: '#1d1b1b'
  on-surface-variant: '#4e4544'
  inverse-surface: '#323030'
  inverse-on-surface: '#f5efef'
  outline: '#807474'
  outline-variant: '#d1c3c3'
  surface-tint: '#675c5b'
  primary: '#171010'
  on-primary: '#ffffff'
  primary-container: '#2d2424'
  on-primary-container: '#988a8a'
  inverse-primary: '#d2c3c2'
  secondary: '#615e53'
  on-secondary: '#ffffff'
  secondary-container: '#e4dfd1'
  on-secondary-container: '#656357'
  tertiary: '#1c0e0c'
  on-tertiary: '#ffffff'
  tertiary-container: '#332220'
  on-tertiary-container: '#a08884'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#efdfde'
  primary-fixed-dim: '#d2c3c2'
  on-primary-fixed: '#221a1a'
  on-primary-fixed-variant: '#4f4444'
  secondary-fixed: '#e7e2d4'
  secondary-fixed-dim: '#cbc6b8'
  on-secondary-fixed: '#1d1c13'
  on-secondary-fixed-variant: '#49473c'
  tertiary-fixed: '#f9dcd8'
  tertiary-fixed-dim: '#dcc0bc'
  on-tertiary-fixed: '#271816'
  on-tertiary-fixed-variant: '#56423f'
  background: '#fef8f7'
  on-background: '#1d1b1b'
  surface-variant: '#e6e1e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  overlap-offset: 40px
---

## Brand & Style
This design system is built upon the "Sophisticated Editorial Luxe" philosophy, moving away from typical service-industry aesthetics toward a high-fashion, boutique magazine experience. The brand personality is poised, quiet, and exclusive, targeting a clientele that values craftsmanship over convenience.

The visual style merges **Minimalism** with **Editorial Boldness**. It utilizes generous whitespace (negative space) as a luxury commodity, allowing high-resolution photography of textures and detail to breathe. Design elements should feel curated, using overlapping containers and thin architectural lines to create a sense of structural elegance. A subtle film grain texture is applied to background surfaces to evoke the tactile quality of premium matte paper.

## Colors
The palette is rooted in earthy, "skin-and-stone" tones that reflect both the organic nature of the service and the luxury of the environment.

- **Deep Espresso (#2D2424):** Used for primary typography and high-contrast backgrounds. It provides a softer, more sophisticated alternative to pure black.
- **Soft Sand (#F5F0E1):** The primary surface color. It creates a warm, inviting canvas that feels more premium than stark white.
- **Muted Blush (#E5C9C5):** A tonal accent used for soft containers, hovering states, or secondary UI elements to add a hint of warmth.
- **Gold (#C5A059):** Used sparingly for "Gold Rule" lines, interactive icons, and subtle dividers. It represents the "jewelry" of the UI.

## Typography
The typography pairing is a study in contrast. **Playfair Display** provides an authoritative, high-fashion serif voice for headlines, while **Montserrat** offers a clean, architectural sans-serif counterpoint.

Key implementation rules:
- **Tracking:** All body and label text must utilize wide tracking (0.02em to 0.2em) to enhance the "luxe" feel.
- **Hierarchy:** Display headers should be significantly larger than body text to create editorial drama.
- **Case:** Use All-Caps for labels and buttons to reinforce the structured, formal nature of this design system.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model (12 columns) with exceptionally wide margins to drive focus to the center of the viewport. 

- **Asymmetry:** Layouts should avoid perfect symmetry. Service descriptions should be offset from their respective imagery.
- **Overlapping Elements:** Typography or thin gold lines should frequently overlap image containers by the `overlap-offset` value to create depth without using shadows.
- **Vertical Rhythm:** Use large vertical spacing (120px+) between sections to maintain the editorial pacing. 
- **Mobile:** On mobile, margins compress to 24px, and overlapping elements stack vertically, maintaining the thin gold rule lines as dividers.

## Elevation & Depth
Depth is achieved through layering and texture rather than traditional shadows.

- **Tonal Layers:** High-contrast background shifts (Espresso vs. Sand) define the primary sections.
- **Grain Texture:** A global, low-opacity SVG noise filter is applied to all `Soft Sand` surfaces to simulate high-end paper stock.
- **Thin Rules:** Depth is suggested by `1px` gold lines (#C5A059) that act as "frames" or "anchors" for floating text.
- **Transparency:** Floating navigation uses a 90% opacity blur (backdrop-filter: blur(10px)) of the `Soft Sand` color to feel integrated yet elevated.

## Shapes
To maintain a sophisticated and architectural feel, this design system uses **Sharp (0px)** corners for all primary containers, buttons, and images. 

Avoid rounded corners entirely. The "softness" of the brand should come from the color palette (Muted Blush and Soft Sand) and the organic photography, while the UI remains disciplined, crisp, and structured.

## Components
Consistent styling of these components is critical to maintaining the editorial narrative.

### Buttons
Primary buttons are outlined in **Deep Espresso** with a `1px` stroke. No fill. On hover, they fill with **Deep Espresso** and the text flips to **Soft Sand**. Label text is always `label-caps`.

### Line-Based Inputs
Forms do not use boxes. Inputs are defined by a single `1px` bottom border in **Deep Espresso**. Floating labels use `label-caps` and sit directly above the line. Error states change the line color to a deeper terracotta (avoid bright reds).

### Floating Navigation
The navigation bar should appear as a floating, narrow strip with a 1px Gold bottom border. It stays fixed at the top of the viewport, using centered links with high tracking.

### Service Cards
Asymmetrical layout: An image container (left or right aligned) with a text block that overlaps the corner of the image. The price is displayed in `label-caps` in **Gold** to highlight value subtly.

### Thin Gold Rules
Horizontal or vertical `1px` lines in **Gold** used to separate disparate pieces of content or to "anchor" a floating headline. They should often extend beyond the grid to the edge of the screen.
