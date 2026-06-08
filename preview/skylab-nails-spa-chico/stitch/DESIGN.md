I've designed a bespoke homepage for SkyLab Nails & Spa that intentionally avoids the typical local-business template.

**Design Rationale:**
*   **The "Celestial" Visual Motif:** I used thin gold "orbital" curves and circular masks to create a unique brand identity that feels both high-fashion and ethereal.
*   **Editorial Layout:** By utilizing an asymmetrical grid and floating "constellation" service cards, the site breaks away from standard blocky layouts, giving it a premium, custom-coded feel.
*   **High-Contrast Palette:** The deep navy background paired with shimmering champagne gold and generous whitespace creates a sophisticated, "Zenith" experience that feels like a luxury atelier rather than a standard spa.

Does this direction capture the premium atmosphere you were looking for, or should we adjust the visual weight of the "orbital" elements?

---

---
name: Celestial Premium
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c7c6cc'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#909096'
  outline-variant: '#46464c'
  surface-tint: '#c3c6d7'
  primary: '#c3c6d7'
  on-primary: '#2c303d'
  primary-container: '#0a0e1a'
  on-primary-container: '#777b8a'
  inverse-primary: '#5a5e6d'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#c5c5d8'
  on-tertiary: '#2e2f3e'
  tertiary-container: '#0c0e1b'
  on-tertiary-container: '#797a8c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe2f3'
  primary-fixed-dim: '#c3c6d7'
  on-primary-fixed: '#171b28'
  on-primary-fixed-variant: '#434654'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e1e1f5'
  tertiary-fixed-dim: '#c5c5d8'
  on-tertiary-fixed: '#191b29'
  on-tertiary-fixed-variant: '#444655'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
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
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  asymmetric-offset: 64px
---

## Brand & Style
The design system embodies "Celestial Premium," a narrative that bridges the technical precision of high-end nail artistry with the infinite serenity of the night sky. The brand personality is professional and avant-garde, positioning the salon as a destination for artistic discovery rather than just a service provider.

The visual style is a sophisticated blend of **Minimalism** and **Glassmorphism**. It utilizes heavy whitespace—or more accurately, "darkspace"—to let editorial imagery breathe. Translucent layers and shimmering gold accents create a sense of depth, mimicking the layering of gels and polishes. The overall emotional response should be one of profound calm and curated luxury.

## Colors
The palette, "Deep Dusk to Starlight," relies on extreme contrast to establish a premium feel. 

- **Primary (Midnight Navy):** The foundational canvas. It should be used for large surfaces and backgrounds to evoke the depths of the cosmos.
- **Secondary (Champagne Gold):** Used sparingly for "orbital" lines, primary call-to-actions, and interactive highlights. It represents precision and luxury.
- **Tertiary (Cloud Lavender):** A soft, ethereal counter-balance used for secondary information, subtle gradients, and background blurs.
- **Neutral:** A high-clarity off-white used exclusively for body text and functional icons to ensure maximum legibility against the dark primary base.

## Typography
The typography system pairs high-contrast editorial elegance with modern utilitarian clarity. 

**Playfair Display** is reserved for headlines. It should be typeset with tight tracking in larger sizes to emphasize its dramatic stroke contrast. For "Celestial" effects, use italic styles for specific keywords within headlines to break the rhythm.

**Montserrat** provides the functional balance. It is set with generous letter spacing (tracking) to evoke a sense of openness and luxury. All labels and navigation items should use Montserrat in uppercase with increased letter spacing to maintain the avant-garde aesthetic.

## Layout & Spacing
The layout rejects standard block-based web design in favor of **Editorial Asymmetry**. 

- **Grid:** Use a 12-column fluid grid, but frequently break the grid by overlapping images and text blocks. 
- **Overlaps:** Elements (like a high-res photo of nail art) should overlap background shapes or text containers by the `asymmetric-offset` value to create depth.
- **Negative Space:** Use intentionally large vertical gaps (up to 160px on desktop) between sections to create a serene, unhurried browsing experience.
- **Mobile Adaption:** On mobile, revert to a single-column flow but maintain the overlapping "orbital" line decorations to preserve the brand's visual motif.

## Elevation & Depth
Depth is created through **Glassmorphism** and layered "Orbital" elements rather than traditional shadows.

1.  **Base Layer:** Solid Midnight Navy (#0A0E1A).
2.  **Decorative Layer:** Thin, 1px Champagne Gold lines drawn in large, sweeping arcs that disappear off the edge of the viewport.
3.  **Surface Layer:** Semi-transparent containers (Background: #E6E6FA at 5-10% opacity) with a 20px backdrop blur. This creates a "frosted glass" effect that feels like polished acrylic or top-coat gel.
4.  **Accent Elevation:** High-contrast Gold borders (1px) are used only for active states or primary call-outs, making them "glow" against the dark background.

## Shapes
The shape language mimics the curvature of a perfectly manicured nail. 

Standard containers and cards use the **Rounded** (0.5rem) setting. However, interactive elements like buttons and chips must follow a **Pill-shaped** convention to mirror the organic, soft-edged aesthetic of the brand. 

Circular masks should be applied to 30% of editorial imagery to reinforce the "Orbital" motif. These circles should often be positioned off-center within their parent containers.

## Components
- **Buttons:** Primary buttons are pill-shaped with a solid Champagne Gold fill and Navy text. Secondary buttons are "Ghost" style with a 1px Gold border and shimmering hover effects.
- **Cards:** Use the glassmorphism style—translucent background with a heavy backdrop blur and a very subtle 0.5px border in Cloud Lavender.
- **Inputs:** Minimalist bottom-border only. On focus, the border transitions from Lavender to Gold with a soft glow effect.
- **Chips/Labels:** Small, pill-shaped elements with Cloud Lavender text and a low-opacity Lavender fill.
- **Orbital Dividers:** Instead of horizontal rules, use large-radius arcs (SVG) in Gold to separate major page sections.
- **Nail Art Gallery:** A custom component using an asymmetrical masonry grid where items have varying corner radii to feel more organic.
