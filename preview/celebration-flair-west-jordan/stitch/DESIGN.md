I've designed a bespoke, premium homepage for **Celebration Flair** that breaks away from generic templates to create a truly unique first impression.

### Design Highlights:
*   **Editorial Layout:** The site uses an asymmetric grid with generous whitespace and intentional overlapping elements, reflecting the organic and architectural nature of high-end balloon installations.
*   **Vibrant Brand Identity:** I established a custom palette featuring **Celebration Punch (#FF4D8D)** for energetic accents, balanced against **Midnight Gala** for sophisticated typographic weight and **Champagne Sparkle** for a luxurious backdrop.
*   **Visual Motifs:** Subtle circular motifs and soft depth shadows are woven throughout the design, echoing the buoyancy and flair of the brand's core artistry.
*   **Bespoke Sections:**
    *   **Hero:** A high-contrast introduction with dramatic typography and a clear call to action.
    *   **Artistry Gallery:** An interactive services section that showcases bespoke installations with unique hover effects.
    *   **The Flair Difference:** An offset testimonial layout that reinforces credibility without feeling like a standard grid.
    *   **Visit & Contact:** Includes the specific West Jordan studio details and a custom-styled form designed for conversion.

The code is production-ready, featuring semantic HTML, responsive CSS with custom properties, and smooth-scroll interactivity. All business details—phone, email, and West Jordan address—are integrated character-for-character.

---

---
name: Celebration Flair
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
  on-surface-variant: '#594046'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#8d7076'
  outline-variant: '#e1bec5'
  surface-tint: '#b90a5a'
  primary: '#b90a5a'
  on-primary: '#ffffff'
  primary-container: '#ff4d8d'
  on-primary-container: '#5b0028'
  inverse-primary: '#ffb1c4'
  secondary: '#5d5c74'
  on-secondary: '#ffffff'
  secondary-container: '#e2e0fc'
  on-secondary-container: '#63627a'
  tertiary: '#625e56'
  on-tertiary: '#ffffff'
  tertiary-container: '#979188'
  on-tertiary-container: '#2e2a24'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c4'
  on-primary-fixed: '#3f001a'
  on-primary-fixed-variant: '#8f0043'
  secondary-fixed: '#e2e0fc'
  secondary-fixed-dim: '#c6c4df'
  on-secondary-fixed: '#1a1a2e'
  on-secondary-fixed-variant: '#45455b'
  tertiary-fixed: '#e9e1d8'
  tertiary-fixed-dim: '#cdc5bc'
  on-tertiary-fixed: '#1e1b15'
  on-tertiary-fixed-variant: '#4a463f'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
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
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style
The design system is rooted in the concept of "Curated Joy." It targets a high-end clientele looking for bespoke event artistry rather than generic party supplies. The aesthetic is **Premium Editorial**, blending the sophistication of a luxury fashion magazine with the kinetic energy of a live event.

The emotional response should be one of anticipation and elegance. We achieve this by mixing **Minimalism** (expansive whitespace and structured grids) with **Vibrant Accents** and **Tactile Depth**. The UI doesn't just display information; it "stages" it. Design elements should feel buoyant and intentional, mirroring the organic yet precise nature of professional balloon installations.

## Colors
The palette is designed for high-contrast storytelling. 
- **Champagne Sparkle (#F9F1E7)** serves as the primary canvas, providing a warmer, more premium feel than pure white.
- **Midnight Gala (#1A1A2E)** provides the "anchor." It is used for all primary typography and structural borders to ensure an authoritative, high-end voice.
- **Celebration Punch (#FF4D8D)** is our "flair" color. It is used sparingly but boldly for call-to-actions, active states, and decorative circular motifs.

All interactive elements should transition smoothly between these states, maintaining a sense of fluid movement.

## Typography
The typography strategy relies on the tension between the dramatic **Playfair Display** and the wide, rhythmic **Montserrat**. 

Headlines should be treated as hero elements, often overlapping images or backgrounds. The body text requires generous letter-spacing (0.02em to 0.03em) to maintain an airy, sophisticated feel. Use the `label-sm` for navigation and category markers, always in uppercase with high tracking to emphasize the luxury editorial aesthetic.

## Layout & Spacing
This design system rejects standard "card-on-gray" layouts in favor of an **Asymmetric Editorial Grid**. 

- **The 12-Column Grid:** Use a standard 12-column grid for alignment, but intentionally break it. Elements like images and decorative circles should frequently "bleed" off the edge of the grid or overlap into adjacent columns.
- **Negative Space:** Use "Section Gaps" (160px+) to separate distinct service offerings or gallery sections. This reinforces the premium nature of the brand.
- **Overlap:** Use negative margins to pull secondary elements (like a small circular badge or a text caption) over the corner of a primary image.

## Elevation & Depth
Depth in this design system is "Atmospheric" rather than "Industrial." 

- **Tonal Layers:** Most content sits on `Champagne Sparkle`. Surfaces are defined by soft, organic shadows—never hard outlines. 
- **The "Balloon" Shadow:** Use extremely diffused, large-radius shadows (e.g., `0 20px 50px rgba(26, 26, 46, 0.08)`) to suggest objects are floating slightly above the page. 
- **Glassmorphism:** For overlays (like navigation bars or modals), use a high-blur backdrop filter (20px+) with a semi-transparent `Champagne Sparkle` fill to maintain the airy, translucent feel of a balloon.

## Shapes
The shape language is dominated by the **Circle**.
- **Buttons & Inputs:** Use the pill-shaped (Section 3) approach for all interactive elements to echo the roundness of balloons.
- **Masking:** Profile pictures, featured category images, and decorative background accents should utilize circular masks or extremely high border-radii.
- **Asymmetry:** Combine large, perfect circles with slightly squircle-shaped containers to create a sense of organic, hand-crafted "flair."

## Components
- **Primary Buttons:** High-contrast `Midnight Gala` background with `Champagne Sparkle` text, using a pill-shaped form. On hover, the button should scale slightly (1.05x) with a transition to `Celebration Punch`.
- **Image Cards:** Images should not have borders. Instead, use the "Balloon Shadow" and circular masks. Captions are placed in the `label-sm` style, often overlapping the bottom-left corner of the image.
- **Category Chips:** Outlined in `Midnight Gala` (1px) with a subtle `Champagne Sparkle` fill. These are used for event types (e.g., "Weddings," "Galas").
- **Interactive Circles:** Floating `Celebration Punch` circles that follow the cursor or parallax-scroll behind text, providing the "vibrant yet sophisticated" motion requested.
- **Text Inputs:** Bottom-border only in `Midnight Gala`. Labels float above the input in `label-sm` style, ensuring a clean, minimalist form experience.
