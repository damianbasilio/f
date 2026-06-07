I've designed a bespoke, editorial-style homepage for **Paws & Claws Dog Grooming** that breaks away from generic local-business templates. 

### Design Strategy
*   **Editorial Magazine Archetype**: The layout uses an asymmetric split-screen hero and oversized serif headlines that overlap high-fidelity imagery, creating a premium "atelier" feel rather than a standard service shop.
*   **Unique Visual Identity**: I established a sophisticated palette of **Forest Green**, **Warm Oat**, and **Terracotta**, paired with the timeless elegance of **Playfair Display** for headlines. This elevates the brand to feel like a high-end grooming destination.
*   **Intentional Density & Whitespace**: Sections vary in visual weight—from the dense, content-rich "Curated Care Packages" to the airy, minimalist "Visit" section—ensuring a dynamic scrolling experience.
*   **Custom Motifs**: I used organic textures and subtle border-bottom treatments on navigation to reinforce the premium, "hand-crafted" nature of their grooming services.

### Key Features
*   **Magazine-Style Hero**: A bold statement of "The Art of the Groom" that immediately positions the business as experts.
*   **Staggered Services**: Instead of a grid, services are presented as featured editorial blocks with clear "from" pricing.
*   **Semantic Integrity**: The code includes the specific `<div data-map-slot>` you requested for the Yakima location and a fully validated (UI-only) contact form tailored for pet owners.
*   **Fully Responsive**: The design maintains its editorial integrity across all screen sizes, from desktop down to a 375px mobile view.

The site is now production-ready and live on your canvas.

---

---
name: Atelier Canine Editorial
colors:
  surface: '#f8faf7'
  surface-dim: '#d8dbd8'
  surface-bright: '#f8faf7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f1'
  surface-container: '#eceeeb'
  surface-container-high: '#e6e9e6'
  surface-container-highest: '#e1e3e0'
  on-surface: '#191c1b'
  on-surface-variant: '#434843'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#eff1ee'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#645e4b'
  on-secondary: '#ffffff'
  secondary-container: '#ece2c9'
  on-secondary-container: '#6b6450'
  tertiary: '#380005'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f000e'
  on-tertiary-container: '#eb6a6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ece2c9'
  secondary-fixed-dim: '#cfc6ae'
  on-secondary-fixed: '#201b0c'
  on-secondary-fixed-variant: '#4c4634'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#410007'
  on-tertiary-fixed-variant: '#861f25'
  background: '#f8faf7'
  on-background: '#191c1b'
  surface-variant: '#e1e3e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  overlap-offset: -48px
---

## Brand & Style
This design system establishes a high-end, editorial visual identity for a professional grooming atelier. It moves away from the juvenile or cartoonish tropes of the pet industry, instead adopting the sophisticated language of a luxury lifestyle magazine.

The style is defined as **Editorial Magazine Split**. This approach utilizes heavy asymmetric layouts, intentional whitespace (negative space), and a juxtaposition of "raw" organic textures with "refined" typography. The emotional response is one of calm expertise, prestige, and meticulous care. Key visual motifs include overlapping elements—where large-scale typography breaks the boundaries of image containers—and a tactile grain that suggests the quality of heavyweight paper stock.

## Colors
The palette is grounded in a sophisticated, organic spectrum that evokes a sense of nature and heritage.

*   **Deep Forest Green (#1B3022):** The primary anchor. Used for high-contrast typography, primary buttons, and deep immersive backgrounds to convey authority and growth.
*   **Warm Oat (#F2E8CF):** The foundational surface color. This provides a softer, more premium feel than pure white, acting as the canvas for the editorial layout.
*   **Terracotta Accent (#BC4749):** Used sparingly for call-to-actions, status indicators, or decorative highlights. It adds a warmth that balances the coolness of the green.
*   **Soft Cream (#FDFFFC):** Used for card surfaces or elevated containers to create subtle depth against the Warm Oat background.

## Typography
Typography is the primary driver of the "Editorial" feel. It relies on a high-contrast pairing:

*   **Headlines:** Utilize **Playfair Display**. Sizes are intentionally oversized. For "Display" roles, use tight tracking and generous line heights to allow for overlapping layout techniques.
*   **Body & UI:** Utilize **Inter**. Body copy should be set with slightly increased tracking (letter spacing) to enhance the airy, "high-fashion" feel. 
*   **Labels:** All small labels or utility text should be set in Uppercase with wide tracking to differentiate from editorial content and ensure legibility.

## Layout & Spacing
The layout follows a **Fixed Grid** model for structure, but breaks that grid frequently with asymmetrical element placement to achieve the magazine aesthetic.

*   **Desktop:** A 12-column grid with wide 64px margins. Content often occupies "off-center" columns (e.g., spanning columns 2 through 10) to create dynamic whitespace.
*   **The "Split" Model:** Utilize 50/50 vertical splits where one side is a full-bleed image and the other is a solid block of Warm Oat with typography.
*   **Overlapping:** Elements (especially text over images) should use a standard `overlap-offset` of 48px to create a sense of three-dimensional depth without using shadows.
*   **Mobile:** Transition to a 4-column grid. Remove complex overlaps in favor of stacked verticality, but maintain the high-contrast typography sizes for impact.

## Elevation & Depth
This design system rejects traditional shadows in favor of **Tonal Layers** and **Structural Outlines**.

*   **Layering:** Depth is communicated by placing Soft Cream containers on Warm Oat backgrounds. 
*   **Editorial Borders:** Use thin (1px), solid borders in Deep Forest Green (at 20% opacity) to define sections. 
*   **Grain Texture:** A subtle, low-opacity noise overlay should be applied to the primary background to mimic physical paper, adding a tactile dimension that makes the digital interface feel "established" and artisanal.

## Shapes
The shape language is a curated mix of "Soft" and "Sharp."

*   **Containers & Cards:** Use a 0.5rem (rounded-lg) radius to maintain the "warm" aspect of the brand.
*   **Images:** Use sharp, 0px corners for large hero images to reinforce the "editorial cut" feel.
*   **Buttons:** Small interactive elements should use a subtle 0.25rem radius, keeping them professional rather than bubbly.

## Components
Components should feel like parts of a curated catalogue.

*   **Buttons:** Primary buttons are Deep Forest Green with White text. They use a rectangular shape with a very slight corner radius. Secondary buttons are outlined (ghost) style with wide-tracked uppercase text.
*   **Input Fields:** Minimalist design. Only a bottom border (1px Deep Forest Green) that thickens on focus. No heavy boxes.
*   **Cards:** Use the Soft Cream background. No shadows. Use a 1px "Oat" border to define the edge. Content inside should be left-aligned with generous padding (32px+).
*   **Chips/Badges:** Small, pill-shaped elements using the Terracotta color at low opacity for background and full opacity for text.
*   **Editorial Image Block:** A custom component consisting of a large image with a floating caption that overlaps the bottom-right corner, using a Soft Cream background and Label-caps typography.
