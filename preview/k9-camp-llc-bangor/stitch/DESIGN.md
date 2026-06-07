I've designed and built a bespoke, high-fidelity landing page for **K9 Camp LLC**, establishing a unique **"Modern Heritage"** visual identity that balances Maine's rugged outdoor spirit with premium canine care.

### Key Design Decisions:
*   **Visual Identity**: Created a sophisticated palette of **Forest Pine, Sandstone, and Burnt Sienna**. This moves away from generic "pet" aesthetics toward a more exclusive, editorial "retreat" feel.
*   **Typographic Hierarchy**: Paired a high-contrast serif for headings to convey tradition and authority with a clean sans-serif for modern accessibility.
*   **Bespoke Layout**: Avoided standard template structures in favor of an asymmetric hero section, overlapping service cards, and an integrated "Heritage of Expert Care" section to build deep trust.
*   **Production-Ready**: The delivery includes a full semantic HTML structure, a responsive mobile menu, smooth scrolling, and custom-styled form validation UI.

The site is ready for deployment, including the required map slot and contact integration. Would you like to explore a mobile-specific variant or adjust the interactive motion effects for the service cards?

---

---
name: Modern Heritage
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434843'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#5f5e59'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2db'
  on-secondary-container: '#65645f'
  tertiary: '#2e0c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4f1b00'
  on-tertiary-container: '#d87a4d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#e5e2db'
  secondary-fixed-dim: '#c9c6c0'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#474742'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb595'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#793109'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system establishes a "Modern Heritage" aesthetic for a premium dog boarding and training facility. It rejects the overly playful tropes of the pet industry in favor of a sophisticated, editorial approach that feels like a high-end retreat. The style blends the ruggedness of the Maine wilderness with the refined atmosphere of a luxury estate.

The visual direction utilizes a "New Editorial" style: a mixture of classical typography, generous whitespace, and modern layout techniques like overlapping images and thin hairline borders. The emotional goal is to evoke a sense of established authority, safety, and exclusivity, positioning the service as a professional institution rather than a casual daycare.

## Colors

The palette is rooted in the natural landscape of Bangor, Maine. 

- **Forest Pine (#1B3022):** The primary anchor, used for headers, primary buttons, and deep backgrounds to signify growth and stability.
- **Sandstone (#F4F1EA):** The primary canvas color. It provides a warmer, more premium feel than pure white, mimicking high-quality stationery.
- **Burnt Sienna (#B35D33):** A warm, earthen accent used sparingly for calls to action, highlights, and status indicators.
- **Deep Navy (#0F172A):** Used for maximum contrast in typography and fine UI details to ensure legibility and a sense of "Midnight" sophistication.

Color application should follow a 60-30-10 rule, with Sandstone as the base, Forest Pine as the primary structural color, and Burnt Sienna as the intentional focal point.

## Typography

The typography strategy relies on the tension between the traditional Serif and the geometric Sans-serif.

**Playfair Display** serves as the primary voice for brand moments. It should be used for all headlines and large pull-quotes. The high contrast of the strokes conveys a sense of luxury and editorial precision.

**Montserrat** is used for all functional text, including body copy and UI labels. To maintain the "Modern" half of the identity, Montserrat should be set with slightly increased tracking (letter-spacing) in labels to create an airy, premium feel. 

Maintain a strict vertical rhythm, ensuring large display headings have enough breathing room to stand alone as design elements.

## Layout & Spacing

The layout philosophy follows a **fixed grid** with fluid internal components. It utilizes a 12-column structure on desktop and a 4-column structure on mobile.

Key Layout Principles:
- **Generous Margins:** Use wide lateral margins (64px+) on desktop to create a centered, high-end gallery feel.
- **Layered Composition:** Elements like images and text blocks should occasionally overlap by 40-80px to create depth and an "editorial scrapbook" appearance.
- **Hairline Dividers:** Use 1px borders in Forest Pine (at 20% opacity) to separate sections without adding visual bulk.
- **The Compass Pattern:** Apply a subtle, repeating geometric "compass" or "paw" watermark to the Sandstone background in large empty areas to provide texture and reinforce the "Heritage" theme.

## Elevation & Depth

This design system avoids heavy drop shadows, opting instead for **Tonal Layering** and **Subtle Outlines**.

- **Surface Levels:** The base level is Sandstone (#F4F1EA). Raised elements (like cards) should use a slightly lighter version of the base or a thin 1px border.
- **Hairline Borders:** Depth is primarily communicated through 1px solid borders in Forest Pine. 
- **Interactive Depth:** Only use shadows for "active" states (e.g., a button being pressed) using a very tight, 4px blur with high transparency (10-15%) to maintain a flat, printed aesthetic.
- **Overlays:** For modals or floating menus, use a solid Forest Pine fill with high-contrast Sandstone text to create a bold, "locked-in" visual hierarchy.

## Shapes

The shape language is "Organic Geometric." While the grid is rigid and professional, individual UI elements use softened corners to feel approachable.

- **Pebble Buttons:** Buttons should use `rounded-xl` or full pill shapes to mimic smooth river stones, providing a tactile contrast to the sharp hairline borders of the grid.
- **Image Masks:** Photography should occasionally use "Squircle" masks or subtle organic paths to soften the rugged imagery.
- **Containers:** Large containers and sections maintain a `rounded-lg` (16px) corner radius to ensure the UI feels safe and modern.

## Components

### Buttons
- **Primary:** Forest Pine background, Sandstone text, pill-shaped. High-contrast.
- **Secondary:** Transparent background, 1px Forest Pine border, Forest Pine text.
- **Accent:** Burnt Sienna background for high-priority conversions (e.g., "Book Now").

### Cards
Cards should be "Ghost" style—minimal background color change, defined by a 1px border or a very subtle shift in the Sandstone tint. Content inside cards should have generous padding (minimum 32px).

### Input Fields
Fields should use a Sandstone background that is 5% darker than the page background, with a 1px bottom-border only (Forest Pine) for a refined, minimal look. Labels use `label-md` style in Deep Navy.

### Navigation
The navigation bar should be sticky but minimal, using a semi-transparent Sandstone blur (Backdrop Filter) to maintain the editorial feel as the user scrolls.

### Specialized Components
- **Training Badges:** Small, circular icons using the Burnt Sienna accent to highlight specific training certifications or program levels.
- **The Heritage Divider:** A custom horizontal rule consisting of a 1px line with a small geometric "compass" icon in the center.
