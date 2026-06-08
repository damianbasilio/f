I've designed and built a bespoke, premium landing page for **DMA Roadside Assistance**.

### Design Rationale
*   **Kinetic Industrial Identity:** I moved away from generic roadside templates to create a high-contrast, "industrial-editorial" aesthetic. The design uses a bold **Electric Amber and Deep Midnight** palette, paired with heavy rule lines and a signature **diagonal safety stripe motif** that reinforces the brand's focus on safety and precision.
*   **Typography:** I utilized **Space Grotesk**, a high-impact grotesque font, to establish a sense of strength and reliability across all headings.
*   **Bespoke Layout:** The services are presented in a custom, asymmetrical grid rather than a standard card row, ensuring a memorable first impression. The credibility section is integrated as a high-density "Industrial Bar" for immediate trust.
*   **Functionality:** The site includes a fully functional mobile navigation, smooth-scroll anchor links, and a production-ready contact form with built-in validation UI.
*   **Lynchburg Roots:** Copy was crafted to highlight DMA's local ownership and dedication to the Lynchburg community.

The landing page includes the specific map slot and semantic HTML structure as requested. How does this visual direction feel for the brand?

---

---
name: Kinetic Industrial
colors:
  surface: '#121415'
  surface-dim: '#121415'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0e0f'
  surface-container-low: '#1a1c1d'
  surface-container: '#1e2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333536'
  on-surface: '#e2e2e3'
  on-surface-variant: '#d5c4ab'
  inverse-surface: '#e2e2e3'
  inverse-on-surface: '#2f3132'
  outline: '#9e8f78'
  outline-variant: '#514532'
  surface-tint: '#ffba20'
  primary: '#ffdca1'
  on-primary: '#412d00'
  primary-container: '#ffb800'
  on-primary-container: '#6b4c00'
  inverse-primary: '#7c5800'
  secondary: '#c6c6cc'
  on-secondary: '#2f3035'
  secondary-container: '#47494e'
  on-secondary-container: '#b7b8be'
  tertiary: '#dde0eb'
  on-tertiary: '#2c3038'
  tertiary-container: '#c1c4ce'
  on-tertiary-container: '#4d515a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea8'
  primary-fixed-dim: '#ffba20'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#e2e2e8'
  secondary-fixed-dim: '#c6c6cc'
  on-secondary-fixed: '#1a1c20'
  on-secondary-fixed-variant: '#45474b'
  tertiary-fixed: '#dfe2ed'
  tertiary-fixed-dim: '#c3c6d1'
  on-tertiary-fixed: '#181c23'
  on-tertiary-fixed-variant: '#43474f'
  background: '#121415'
  on-background: '#e2e2e3'
  surface-variant: '#333536'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
This design system embodies "Industrial Precision meets Roadside Reliability." The aesthetic is a hybrid of High-Contrast Minimalism and Modern Brutalism, reflecting the mechanical nature of roadside assistance through structured layouts and high-visibility accents. 

The target audience consists of stranded motorists in the Lynchburg area who require immediate, authoritative assistance. The UI must evoke a sense of calm through organization while communicating urgency through bold typography. Visuals leverage heavy strokes, generous whitespace to reduce cognitive load during stress, and a recurring "safety stripe" motif (45-degree diagonal patterns) to anchor the brand in the world of logistics and safety.

## Colors
The palette is built on a high-visibility foundation to mirror automotive safety equipment.

- **Deep Midnight (#0A0C10):** The primary background color. It provides a premium, "night-mode" default that reduces glare and emphasizes content.
- **Electric Amber (#FFB800):** The primary action color. Used for critical CTAs, status indicators, and the safety stripe motif. It ensures maximum legibility and mimics hazard lights.
- **Asphalt Grey (#2D3139):** Used for secondary surfaces, borders, and input backgrounds to provide subtle depth without losing the industrial feel.
- **High-Contrast White (#F4F4F5):** Reserved for primary body text and high-priority icons to ensure AAA accessibility against dark backgrounds.

## Typography
The typographic scale emphasizes hierarchy and technical precision. 

- **Headlines:** Space Grotesk is used for its geometric, futuristic, and "engineered" appearance. At large sizes, use tight letter spacing to increase the sense of impact.
- **Body:** Inter provides maximum readability for instructions and service details, especially in low-light or stressful roadside conditions.
- **Technical Labels:** JetBrains Mono is introduced for metadata (like ETA, GPS coordinates, or VIN numbers) to reinforce the "precision" aspect of the brand narrative.

## Layout & Spacing
The layout follows a strict **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Editorial Influence:** Use asymmetrical placements and large "asphalt" blocks to create an editorial feel. Negative space should be used aggressively to separate service categories.
- **Safety Stripes:** Use 45-degree Amber/Midnight stripe patterns as decorative dividers or "Loading" states.
- **Container Strategy:** Content should be housed in heavy-bordered containers (2px or 4px) rather than relying on soft shadows.
- **Vertical Rhythm:** Spacing is strictly based on a 4px baseline grid to ensure mathematical alignment across all components.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Bold Outlines** rather than traditional shadows.

1.  **Level 0 (Base):** Deep Midnight (#0A0C10).
2.  **Level 1 (Cards/Surfaces):** Asphalt Grey (#2D3139) with a 1px solid border of #4A4F59.
3.  **Level 2 (Interaction):** Elements "pop" forward using Electric Amber (#FFB800) solid fills.
4.  **No Soft Shadows:** Avoid ambient blurs. If an overlay is needed, use a high-opacity (80%) Deep Midnight backdrop with a crisp 2px Amber border around the modal container.

## Shapes
The shape language is strictly **Sharp (0px)**. 

Every UI element—from buttons and input fields to cards and images—uses 90-degree corners. This reinforces the industrial, rugged, and "built-to-last" aesthetic. The only exception is the use of circular icons when necessary for universal recognition (e.g., a phone icon), but these should be housed inside square containers.

## Components
- **Buttons:** Solid Electric Amber background with Deep Midnight text in bold caps. Use a 4px offset "Ghost" border on hover to create a mechanical, tactile feel.
- **Input Fields:** Asphalt Grey background with a 2px bottom-only Amber border. Labels should use the `label-bold` (monospaced) style.
- **Service Cards:** Use heavy 2px borders. Headlines should be Space Grotesk. Include a "Safety Stripe" accent on the left or top edge to indicate active status.
- **Chips/Status:** Use rectangular tags with high-contrast fills (e.g., "ON THE WAY" in Amber box, "COMPLETED" in Asphalt box).
- **Progress Indicators:** Linear bars utilizing the diagonal stripe motif to show motion and progress.
- **Location Pin:** A custom square-based pin icon with a technical "crosshair" aesthetic to match the precision theme.
