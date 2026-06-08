I've designed a bespoke homepage for **Hakmods Mobile Phone Repair** that positions the business as a high-end engineering laboratory rather than a standard repair shop.

### Design Highlights:
*   **Blueprint Aesthetic:** I moved away from common card-based grids in favor of an **editorial "blueprint" layout**. Sharp technical lines, offset typography, and a "circuit-trace" motif create a unique, industrial atmosphere.
*   **High-Contrast Palette:** The "Deep Circuit" navy background provides a premium foundation, allowing the "Acid Lemon" and "Electric Solder" teal accents to highlight technical precision.
*   **Technical Hierarchy:** I used a wide Neo-Grotesk for authoritative headings and a technical monospaced font for metadata labels, mimicking high-end engineering documentation.
*   **Memorable Motif:** Small "Technical Spec" modules are scattered throughout the layout, reinforcing the brand's commitment to 0.01mm tolerance and precision craftsmanship.

How does this "Precision Engineering" direction feel for the brand? We can lean further into the industrial look or add more "macro" photography of internal components.

---

---
name: Precision Engineering System
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c7c6cd'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#909097'
  outline-variant: '#46464c'
  surface-tint: '#c2c6db'
  primary: '#c2c6db'
  on-primary: '#2b3040'
  primary-container: '#0a0f1e'
  on-primary-container: '#777b8e'
  inverse-primary: '#595e70'
  secondary: '#ddfcff'
  on-secondary: '#00363a'
  secondary-container: '#00f1fe'
  on-secondary-container: '#006a70'
  tertiary: '#b0d500'
  on-tertiary: '#2a3400'
  tertiary-container: '#0d1200'
  on-tertiary-container: '#6e8500'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dee1f7'
  primary-fixed-dim: '#c2c6db'
  on-primary-fixed: '#161b2b'
  on-primary-fixed-variant: '#414658'
  secondary-fixed: '#74f5ff'
  secondary-fixed-dim: '#00dbe7'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#caf300'
  tertiary-fixed-dim: '#b0d500'
  on-tertiary-fixed: '#171e00'
  on-tertiary-fixed-variant: '#3e4c00'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-tech:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  meta-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  grid-unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  offset-lg: 80px
---

## Brand & Style

This design system is built on the philosophy of **High-Tech Craftsmanship**. It bridges the gap between industrial technicality and editorial luxury, positioning mobile repair not as a commodity, but as a specialized art form. 

The aesthetic is a sophisticated blend of **Minimalism** and **Technical Brutalism**. It utilizes high intentionality through offset layouts and a "blueprint" aesthetic. The visual language conveys transparency and precision, evoking the feeling of a clean-room environment where high-end electronics are meticulously serviced. The emotional response should be one of absolute trust, state-of-the-art capability, and premium exclusivity.

## Colors

The palette, "Deep Circuit," is rooted in deep, low-light environments to emphasize the "Electric Solder" and "Acid Lemon" accents.

- **Deep Circuit Navy (#0A0F1E):** The foundation. Used for primary backgrounds and deep structural elements.
- **Electric Solder Teal (#00F2FF):** The technical primary. Used for interactive elements, highlights, and "power-on" states.
- **Acid Lemon (#D4FF00):** The high-contrast alert. Used sparingly for critical calls to action, diagnostic status, and "precision" indicators.
- **Neutral Palette:** Utilizes cool grays and crisp whites to maintain a clinical, clean-room feel. 

The default state is **Dark Mode**, reinforcing the high-tech, premium nature of the brand.

## Typography

The typography system pairs high-impact, wide Neo-Grotesk headlines with a technical, monospaced secondary system.

- **Sora** provides the authoritative, wide-set voice for headlines. Use aggressive negative letter-spacing on larger sizes to create a "locked-in" feel.
- **Hanken Grotesk** handles the standard body copy, offering a clean and modern reading experience that balances the technicality of the system.
- **JetBrains Mono** is the "mechanical" soul of the system. It is used for all technical labels, serial numbers, price points, and status indicators. 

Editorial impact is achieved through significant size contrasts—juxtaposing `display-lg` headlines against `meta-data` monospaced labels.

## Layout & Spacing

This design system uses a **Technical Blueprint Grid**. It is a 12-column system for desktop and a 4-column system for mobile.

- **Intentional Asymmetry:** Elements should often be offset from the standard grid (using `offset-lg`) to create an editorial, bespoke feel.
- **Technical Whitespace:** Whitespace is treated as a "safe zone" for delicate components. Use generous padding to separate different "modules" of the repair process.
- **Micro-Grids:** Subtle 8px dot-grid patterns or "circuit-trace" lines should be used to fill large negative spaces, reinforcing the engineering theme.
- **Breakpoints:**
  - Mobile: Under 600px (4 columns, tight gutters).
  - Tablet: 600px - 1024px (8 columns, standard gutters).
  - Desktop: 1024px+ (12 columns, wide margins for editorial flow).

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Macro-Lens Blurs** rather than traditional drop shadows.

- **Glassmorphism:** Use high-diffusion backdrop blurs (20px+) with low-opacity Navy overlays for cards and modals. This mimics the look of a smartphone screen or a precision lens.
- **Blueprint Layers:** Instead of shadows, use thin (1px) borders in "Electric Solder" Teal at 20-30% opacity to define container edges.
- **Scanning Effects:** Use a horizontal "laser line" (Acid Lemon) to indicate active states or scanning processes.
- **Z-Index:** Technical data should feel like a "HUD" (Heads-Up Display) overlaying macro-photography of internal phone components.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

Sharp corners convey precision, industrial machinery, and the rigid architecture of microchips. Every button, input field, and card should maintain hard 90-degree angles. To prevent the UI from feeling "hostile," use thin, high-contrast borders and semi-transparent fills to soften the visual weight without sacrificing the geometric rigor. 

The only exception to the sharp rule is for "circular components" like notification badges or camera-lens-inspired status icons.

## Components

- **Buttons:** Primary buttons use a solid "Electric Solder" Teal fill with "Deep Circuit" Navy text in `label-tech` style. Hover states trigger an "Acid Lemon" border.
- **Status Chips:** Small, monospaced labels with a leading dot. Use "Acid Lemon" for 'In Progress' and "Electric Solder" for 'Completed'.
- **Cards:** Transparent backgrounds with a 1px cool-gray border. Top-left corners should feature a monospaced "Component ID" (e.g., MOD-001).
- **Input Fields:** Bottom-border only, using the monospaced font for input text. Label stays above the line in a smaller meta-data size.
- **Technical Grids:** Background patterns of 1px lines or dots that appear "behind" the main content, visible only on the primary Navy background.
- **Interactive Gauges:** For diagnostic screens, use circular or linear progress bars in Teal that feel like high-precision instruments.
