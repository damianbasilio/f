I have designed a bespoke, editorial-grade homepage for **SkyLab Nails & Spa**, moving away from standard templates to create a unique "Atmospheric Luxury" identity.

### Key Design Decisions:
*   **Visual Motif:** I introduced an "Orbital" design language, using thin-line celestial motifs and asymmetrical layouts to reflect the "Sky" in SkyLab.
*   **Editorial Typography:** High-contrast serif headings (Bodoni Moda) are paired with generous whitespace to create a premium, boutique feel that prioritizes brand story over generic service lists.
*   **Atmospheric Palette:** The "Midnight Velvet" and "Nebula White" palette provides a sophisticated backdrop that makes the nail artistry (represented in the curated offerings section) feel like high-fashion photography.
*   **Interaction:** The design features a glassmorphic navigation bar and subtle, motion-ready sections that evoke a sense of weightless tranquility.

The code is production-ready, featuring semantic HTML5, custom CSS variables for easy brand management, and the specific functional requirements like the custom map slot and form validation UI.

Would you like to refine the color story or explore more specific service-level animations?

---

---
name: Atmospheric Luxury
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#edeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#47464b'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#78767b'
  outline-variant: '#c8c5cb'
  surface-tint: '#5f5e64'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b20'
  on-primary-container: '#848389'
  inverse-primary: '#c8c5cc'
  secondary: '#5d5e66'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2eb'
  on-secondary-container: '#63646c'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e1e8'
  primary-fixed-dim: '#c8c5cc'
  on-primary-fixed: '#1b1b20'
  on-primary-fixed-variant: '#47464c'
  secondary-fixed: '#e2e2eb'
  secondary-fixed-dim: '#c5c6cf'
  on-secondary-fixed: '#191b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.8'
    letterSpacing: 0.05em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-unit: 8px
  safe-margin-desktop: 80px
  safe-margin-mobile: 24px
  gutter: 32px
  overlap-offset: -40px
---

## Brand & Style
The design system is built upon the concept of "Atmospheric Luxury," merging the vast, quiet depth of the cosmos with the tactile serenity of a premium spa experience. The target audience is a discerning clientele seeking exclusivity and a modern, high-fashion approach to self-care.

The aesthetic is characterized by **Minimalism infused with Glassmorphism**. We utilize heavy whitespace to represent the vacuum of space, creating a "breathable" interface that reduces cognitive load. High-fashion editorial layouts provide a sense of prestige, while translucent, frosted surfaces (Glassmorphism) mimic the ethereal quality of clouds and nebulae. The emotional response should be one of profound calm, sophisticated mystery, and unwavering quality.

## Colors
This design system utilizes a high-contrast palette to establish depth and hierarchy.
- **Midnight Velvet (#1A1A1F):** Used primarily for deep backgrounds in immersive sections, high-contrast headings, and primary call-to-action buttons. It provides the "gravitational pull" of the brand.
- **Nebula White (#F8F8FA):** The standard background color. It is a cool-toned off-white that prevents the starkness of pure white, maintaining a soft, atmospheric feel.
- **Ethereal Cloud (#E2E2EB):** A functional accent used for glassmorphic borders, secondary containers, and subtle UI backgrounds.
- **Stellar Gold (#D4AF37):** Used sparingly as a highlight for interactive states, luxury tiering, and celestial decorative elements. It adds a metallic, premium "spark" to the matte environment.

## Typography
The typography system relies on a dramatic contrast between the authoritative **Bodoni Moda** and the airy, geometric **Montserrat**.

- **Headlines:** Use Bodoni Moda for all major headings. The high-contrast strokes evoke luxury editorial print. Tighten letter-spacing slightly for display sizes to emphasize the verticality of the letterforms.
- **Body & UI:** Montserrat is used for readability and a modern, technical edge. Use light weights (300/400) for body copy with generous line heights (1.6 - 1.8) and increased letter spacing to create an "airy" feel.
- **Labels:** Use uppercase Montserrat with heavy tracking (0.15em) for small labels, buttons, and navigation items to mimic the branding of high-end cosmetic products.

## Layout & Spacing
This design system moves away from rigid, predictable grids in favor of an **Asymmetrical Editorial Layout**. 

- **Composition:** Use overlapping elements (e.g., an image overlapping a text container) to create a sense of three-dimensional space.
- **The "Orbit" Rule:** Align secondary elements along invisible circular arcs rather than straight vertical lines where possible to reinforce the celestial theme.
- **Spacing:** Use a base 8px unit, but prioritize large "hero" margins (80px+) to isolate content and suggest exclusivity. 
- **Reflow:** On mobile, transition to a single-column layout but maintain the overlap effect by using negative margins on card elements to break the container edge.

## Elevation & Depth
Depth is created through **Glassmorphism and Tonal Layering** rather than traditional drop shadows.

- **Surface Tiers:** The base layer is Nebula White. Elevated containers use a semi-transparent Ethereal Cloud background with a `backdrop-filter: blur(20px)`.
- **Borders:** Instead of shadows, use "Inner Glow" borders: 1px solid lines with low opacity (e.g., White at 20% or Stellar Gold at 15%) to define the edges of glass elements.
- **Ambient Light:** Use large, soft radial gradients in the background (faint Lavender or Deep Navy) to simulate "nebula" light sources, which provide a natural sense of depth to the layers floating above them.

## Shapes
The shape language is defined by **perfect circles and soft rectangles**. 

- **UI Elements:** Buttons and cards use a `0.5rem` (8px) radius for a modern, architectural feel. 
- **Cosmic Accents:** Use 1px "Orbit" lines (large, stroked circles) that bleed off the edge of the screen to serve as dividers. 
- **Imagery:** Photography should either be full-bleed or contained within "Capsule" shapes (pill-shaped) to maintain the organic yet structured aesthetic.

## Components
- **Buttons:** Primary buttons are Midnight Velvet with white text. Secondary buttons are glassmorphic with a thin Stellar Gold border. All buttons use high letter-spacing and uppercase labels.
- **Cards:** Use a glass effect (`blur`) with a very subtle 1px border. Do not use shadows. Content inside cards should have generous internal padding (min 32px).
- **Inputs:** Minimalist bottom-border only, or a very light Ethereal Cloud fill. The focus state uses a Stellar Gold bottom border.
- **Chips/Labels:** Pill-shaped with a light lavender-grey tint. Use for service categories (e.g., "Manicure," "Aromatherapy").
- **Dividers:** Replace standard horizontal lines with "Stellar Lines"—extremely thin, long lines that end in a small 4px solid circle (the "star" at the end of the path).
- **Navigation:** A floating glassmorphic bar at the top of the screen or a minimal side-drawer that slides in like a curtain.
