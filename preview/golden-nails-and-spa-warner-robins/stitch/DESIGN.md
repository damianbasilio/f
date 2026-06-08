I've designed a bespoke, editorial-grade homepage for **Golden Nails and Spa**, moving away from standard templates to create a truly premium "Modern Gilded" identity.

### Design Highlights:
*   **Visual Motif**: I've used a high-contrast typographic hierarchy featuring **Bodoni Moda** for headlines, paired with a sophisticated palette of **Deep Onyx and Warm Gold**. Thin gold "etched" linework is used throughout to create a cohesive, branded feel.
*   **Asymmetrical Layout**: Rather than a standard grid, the **Services** and **About** sections use staggered placements and generous whitespace to evoke the feel of a luxury fashion magazine.
*   **Functional Polish**: The site includes a dedicated **Map Slot** for the Warner Robins location, a mobile-responsive navigation system, and a custom-styled contact form.
*   **Content Strategy**: Every section is crafted with specific brand copy (e.g., "The Art of the Polish") to ensure a memorable first impression that reflects the meticulous nature of the business.

The site is production-ready, featuring semantic HTML and modern CSS. How does this look for your new digital storefront?

---

---
name: Modern Gilded
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4d4635'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#685d4a'
  on-tertiary: '#ffffff'
  tertiary-container: '#bfb19a'
  on-tertiary-container: '#4e4432'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#f0e0c8'
  tertiary-fixed-dim: '#d3c5ad'
  on-tertiary-fixed: '#221b0b'
  on-tertiary-fixed-variant: '#4f4533'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 84px
    fontWeight: '600'
    lineHeight: 92px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 54px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 32px
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
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.2em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.15em
spacing:
  unit: 8px
  section-padding-desktop: 160px
  section-padding-mobile: 64px
  gutter: 32px
  editorial-offset: 120px
---

## Brand & Style
The design system is crafted for a premium wellness experience, blending the authority of high-end fashion editorial with the serenity of a luxury spa. The brand personality is sophisticated, exclusive, and meticulous. 

The aesthetic follows a **Modern Editorial** movement:
- **Asymmetry:** Breaking away from standard Bootstrap-style grids to create a rhythmic, curated feel.
- **Minimalism:** Utilizing heavy whitespace (negative space) to allow the "Golden" elements to feel precious rather than cluttered.
- **Linework:** Incorporating ultra-thin (0.5px - 1px) golden "etched" lines to define sections and create a sense of architectural precision.
- **Imagery:** Large-scale, high-fidelity photography with slight desaturation or warm-toned overlays to maintain the Gilded theme.

## Colors
The palette is a high-contrast study in luxury.
- **Deep Onyx (#1A1A1A):** Used primarily for typography and "heavy" structural elements to anchor the design.
- **Warm Gold (#D4AF37):** Reserved for interactive elements, etched linework, and subtle accents. It should be used sparingly to maintain its perceived value.
- **Soft Champagne (#F7E7CE):** Used as a secondary surface color to soften the transition between Alabaster and Onyx, often appearing in background sections or subtle decorative shapes.
- **Crisp Alabaster (#FFFFFF):** The primary canvas color, ensuring the editorial whitespace feels clean and expensive.

## Typography
The typography system relies on the interplay between the dramatic, high-contrast strokes of **Bodoni Moda** and the clean, airy geometry of **Montserrat**.

- **Display & Headlines:** Bodoni Moda should be set with tight tracking for large sizes to emphasize its elegant serifs. 
- **Body Text:** Montserrat is set with increased line-height and generous letter-spacing (tracking) to ensure a modern, "open" feel.
- **Labels:** Small utility text and navigation labels must always be uppercase with high tracking (0.2em) to evoke a sense of high-end branding.

## Layout & Spacing
This design system rejects rigid, symmetric containers in favor of an **Asymmetrical Editorial Layout**.
- **Grid:** A 12-column grid is used as a base, but content should frequently "break" the grid. For instance, an image might span columns 1-7, while the heading starts at column 8.
- **Whitespace:** Vertical spacing between major sections is intentionally large (160px+) to create a "gallery" pacing.
- **Etched Lines:** Use 0.5px Gold lines to separate content vertically or horizontally, often extending to the edge of the viewport rather than stopping at the container edge.
- **Mobile:** Transition to a single-column flow but maintain the generous vertical padding to keep the premium feel.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Line Overlays** rather than traditional shadows.
- **Flat Depth:** Use the Soft Champagne (#F7E7CE) as a background layer to create "recessed" areas.
- **Overlays:** Imagery should often have text or golden linework overlapping it slightly to create a physical, layered paper effect.
- **Ghost Borders:** Avoid drop shadows. If an element needs to feel elevated (like a modal), use a crisp 1px Onyx or Gold border with no blur.

## Shapes
The shape language is strictly **Sharp (0px)**. 
- Rectilinear forms reinforce the architectural and high-fashion editorial aesthetic. 
- Buttons, input fields, and image containers must have hard 90-degree corners. 
- The only exception to the "sharp" rule is the use of circular decorative "etched" seals or stamps, which should appear as fine-line golden ornaments.

## Components
- **Primary Buttons:** Solid Onyx (#1A1A1A) background with Alabaster text. No border, sharp corners. On hover, the background transitions to Warm Gold (#D4AF37).
- **Secondary Buttons:** Transparent background with a 1px Gold (#D4AF37) "etched" border. High letter-spacing on text.
- **Input Fields:** A single 1px Onyx line at the bottom (underline style) rather than a box. Labels are placed above in `label-caps` style.
- **Service Lists:** Not a grid. A vertical list where each item is separated by a full-width 0.5px Gold line. On hover, a thumbnail image appears as a floating follow-element.
- **Cards:** Avoid the "box" look. Use an image with typography placed partially off-center or overlapping the bottom edge of the image to create an editorial layout.
- **Etched Linework:** A custom component used to draw focus—thin golden lines that may frame a corner of an image or underline a major headline.
