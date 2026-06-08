I've designed a bespoke, editorial-grade homepage for **LaBelle Spa & Nails** that departs from standard local business templates in favor of a high-end magazine aesthetic.

### Design Rationale:
*   **Visual Identity:** Established a "Serene Sage & Slate" palette—using deep charcoal for authority and soft muted greens for tranquility.
*   **Editorial Layout:** Employed an asymmetrical grid with overlapping elements and generous whitespace. This creates a "breathable" luxury experience that guides the eye through the brand narrative rather than just listing services.
*   **Typography:** Leveraged a high-contrast serif (Playfair Display) for headlines to evoke elegance, paired with a wide-tracked sans-serif for a modern, functional feel.
*   **Signature Motif:** Fine hairline dividers and monochromatic image treatments create a cohesive, premium atmosphere throughout the page.
*   **Conversion-Focused:** Integrated a minimalist, line-based contact form and a clear "Book Now" hierarchy without compromising the sophisticated aesthetic.

The result is a production-ready, responsive desktop experience that establishes LaBelle as the premier sanctuary in Galloway.

Would you like to explore a dark-mode variation of this editorial layout, or should we refine the "Menu" section with specific pricing tiers?

---

---
name: Serene Editorial
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#434748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#747879'
  outline-variant: '#c4c7c8'
  surface-tint: '#5b5f60'
  primary: '#181c1d'
  on-primary: '#ffffff'
  primary-container: '#2d3132'
  on-primary-container: '#95999a'
  inverse-primary: '#c4c7c8'
  secondary: '#566252'
  on-secondary: '#ffffff'
  secondary-container: '#d4e1cd'
  on-secondary-container: '#586454'
  tertiary: '#181d19'
  on-tertiary: '#ffffff'
  tertiary-container: '#2d322d'
  on-tertiary-container: '#959a94'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e3e4'
  primary-fixed-dim: '#c4c7c8'
  on-primary-fixed: '#181c1d'
  on-primary-fixed-variant: '#434748'
  secondary-fixed: '#d9e6d2'
  secondary-fixed-dim: '#bdcab7'
  on-secondary-fixed: '#141e12'
  on-secondary-fixed-variant: '#3e4a3b'
  tertiary-fixed: '#e0e4dd'
  tertiary-fixed-dim: '#c3c8c1'
  on-tertiary-fixed: '#181d19'
  on-tertiary-fixed-variant: '#434843'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 92px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.2em
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  unit: 8px
  margin-page: 80px
  gutter-grid: 32px
  section-gap: 160px
  editorial-offset: 64px
---

## Brand & Style

The design system is crafted to evoke the atmosphere of a high-end, boutique sanctuary. It moves away from traditional functionalist UI toward an **Editorial Minimalism** style, mimicking the layout of a luxury print magazine. The brand personality is serene, authoritative, and unapologetically premium.

The aesthetic leans on high-contrast typography, asymmetrical balance, and significant negative space to signal exclusivity. Unlike mass-market spa platforms, this design system treats every screen as a curated canvas, utilizing "quiet" interfaces that prioritize photography and sophisticated type treatments over dense utility.

## Colors

The palette, "Serene Sage & Slate," is grounded in natural, muted tones that reduce visual cognitive load and promote a sense of calm.

- **Warm Alabaster (#F9F7F2):** The primary canvas color. It is softer than pure white, providing a gallery-like backdrop that feels organic and high-end.
- **Deep Charcoal Slate (#2D3132):** Used for primary typography and hairline borders. It provides a sharp, authoritative contrast against the alabaster.
- **Muted Sage (#A8B5A2):** A sophisticated accent used for subtle highlights, active states, and secondary decorative elements.
- **Pale Leaf (#E5E9E2):** A tint of the sage used for large background blocks or subtle section separation without breaking the editorial flow.

## Typography

The typographic hierarchy is the core of this design system's editorial identity. It relies on a stark contrast between a romantic, high-contrast serif and a functional, wide-tracked sans-serif.

- **Headlines:** Set in *Playfair Display*. Large display sizes should use tight letter spacing and optical kerning to emphasize the elegant thick-and-thin strokes of the font.
- **Body & Utility:** Set in *DM Sans*. This provides a clean, modern counterpoint to the serif. For labels and navigation, use uppercase with generous tracking (0.2em) to maintain a boutique, architectural feel.
- **Editorial Flourish:** Italicize key words in headlines to create rhythm and draw the eye to specific adjectives (e.g., *Serene* Wellness).

## Layout & Spacing

This design system employs an **Asymmetrical Fixed Grid** model. Rather than standard centered containers, the layout utilizes 12 columns with intentional "dead zones" or empty columns to create an editorial cadence.

- **Asymmetry:** Content should rarely be perfectly centered. Instead, align text to the left 4 columns while placing a related image across columns 6 through 11, with a vertical offset to create overlap.
- **The Hairline Motif:** Use 0.5pt Slate borders to separate sections or frame images. These lines should often extend to the edge of the viewport, breaking the grid to create a sense of infinite space.
- **Generous Whitespace:** Section gaps are intentionally large (160px+) to ensure each service or brand pillar feels like its own "chapter."

## Elevation & Depth

To maintain the flat, printed-matter aesthetic, this design system avoids traditional shadows and neomorphism.

- **Tonal Layering:** Depth is achieved through the overlapping of elements. An image might be placed on a Pale Leaf (#E5E9E2) background block, with a text element partially overlapping the image's edge.
- **Glassmorphism (Minimal):** Use only for floating navigation bars. A very light blur (10px) with 80% Alabaster opacity keeps the navigation present but unobtrusive.
- **Outline Sophistication:** Instead of elevation, use "Ghost" borders—hairline strokes in Slate at 20% opacity—to define interactive areas without adding visual weight.

## Shapes

The shape language is **Sharp (0px)**. To maintain a high-end, architectural, and editorial feel, all containers, buttons, and image masks use 90-degree corners. 

Rounded corners are strictly forbidden as they lean toward "friendly/tech" aesthetics, whereas sharp edges communicate "precision/luxury." The only exception is the natural, organic shapes found within the photography itself (e.g., flower petals, smooth stones).

## Components

### Buttons
Primary buttons are text-only with a "Label Caps" style and a 0.5pt bottom border (underline). On hover, the Sage (#A8B5A2) background fills the area behind the text with a soft fade. There are no boxed buttons.

### Chips & Tags
Used sparingly for service categories (e.g., "Facials"). These are small, uppercase labels in Slate, contained within a Slate hairline border with 0px radius.

### Input Fields
Minimalist underlines. The label sits above the line in "Label Caps" style. Upon focus, the bottom border transitions from 0.5pt to 1.5pt in Sage.

### Cards
Cards do not have backgrounds or shadows. They consist of a high-aspect-ratio image (e.g., 4:5), a Headline-MD title, and a small Body-MD description. The entire card is framed by a thin Slate border that is slightly offset from the image to create a "framed art" effect.

### Image Carousels
Avoid dots or arrows. Use a simple "1 / 5" text counter in the corner with a slow, cinematic cross-fade transition between images.
