I have designed a bespoke, premium homepage for **NoDak Towing & Recovery** that moves away from generic local-business templates in favor of a "High-End Utility" editorial aesthetic.

### Design Highlights:
*   **Visual Identity**: Built around a "Midnight Asphalt" and "Dakota Flare" palette, using high-visibility orange against deep slates to communicate both urgency and professional reliability.
*   **Industrial Motif**: I implemented a subtle "hazard stripe" motif as a repeating visual rule, framing content and sections with a sense of precision and safety.
*   **Editorial Layout**: The hero section uses massive, tight-kerned typography to establish NoDak as a "Recovery Force," while the "Core Capabilities" section avoids standard card grids in favor of a sophisticated list-and-image interaction.
*   **Rapid Action Focus**: The "Command Center" contact section and prominent persistent dispatch number are designed for high conversion and quick access during emergencies.
*   **Credibility Strip**: A dedicated "Status Bar" provides immediate reassurance of fleet availability and regional expertise.

The code is fully production-ready, semantic, and includes a responsive mobile navigation and form validation UI. Would you like to see how this layout adapts to mobile, or should we refine the "Core Capabilities" section further?

---

---
name: High-End Utility System
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e0e2eb'
  on-surface-variant: '#e4bfb1'
  inverse-surface: '#e0e2eb'
  inverse-on-surface: '#2d3037'
  outline: '#ab8a7d'
  outline-variant: '#5b4137'
  surface-tint: '#ffb599'
  primary: '#ffb599'
  on-primary: '#5a1c00'
  primary-container: '#ff5f00'
  on-primary-container: '#531a00'
  inverse-primary: '#a63b00'
  secondary: '#c6c6ca'
  on-secondary: '#2f3034'
  secondary-container: '#4a4b4f'
  on-secondary-container: '#bbbbbf'
  tertiary: '#c5c7c8'
  on-tertiary: '#2e3132'
  tertiary-container: '#929495'
  on-tertiary-container: '#2a2d2e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#e2e2e6'
  secondary-fixed-dim: '#c6c6ca'
  on-secondary-fixed: '#1a1c1f'
  on-secondary-fixed-variant: '#45474a'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#10131a'
  on-background: '#e0e2eb'
  surface-variant: '#32353c'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is **rugged, professional, and elite**, moving away from "local service" tropes toward a high-performance logistics aesthetic. The design system follows a **Modern Industrial** style—combining the precision of high-end software with the grit of roadside recovery.

The UI should feel authoritative and urgent. We achieve this through:
- **High-Contrast Minimalism:** Extreme clarity through limited color use and vast whitespace.
- **Precision Engineering:** Sharp corners and mechanical alignment that suggest technical expertise.
- **Subtle Texture:** Use of fine grain overlays (2-3% opacity) on dark surfaces to mimic asphalt and heavy-duty machinery.
- **Hazard Motifs:** Stylized 45-degree stripes used sparingly for progress bars, top-edge borders of cards, or loading states to evoke safety and visibility.

## Colors
The palette is rooted in the "Midnight" environment of recovery operations.

- **Dakota Flare (#FF5F00):** A vibrant, high-visibility hazard orange. Use exclusively for primary actions, emergency alerts, and critical brand accents.
- **Midnight Asphalt (#121417):** The core background color. It is a deep, desaturated slate that provides a premium alternative to pure black.
- **Frost White (#F8F9FA):** Used for primary typography and icons to ensure maximum legibility against dark backgrounds.
- **Steel Grain (#2C2F36):** Used for secondary surfaces, input fields, and borders to create subtle depth.

## Typography
The typography system prioritizes impact and technical precision.

- **Headlines:** Uses **Hanken Grotesk**. It provides a sharp, industrial character with tight tracking. Large scales should be used to anchor the layout.
- **Body:** Uses **Inter**. This is the workhorse for readability, ensuring that service details and location data are instantly digestible.
- **Labels/Technical Data:** Uses **JetBrains Mono**. This monospaced font is used for VIN numbers, coordinates, timestamps, and status labels to reinforce the "utility" aspect of the system.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. Content should feel locked into place, suggesting stability and order.

- **Grid:** A 12-column grid for desktop with wide 64px margins to create a "letterboxed" premium feel.
- **Rhythm:** An 8px linear scale (8, 16, 24, 32, 48, 64, 96). 
- **Density:** Use generous vertical padding (96px+) between major sections to allow the bold typography to breathe.
- **Mobile:** Transition to a 4-column grid with reduced margins (16px), but maintain the large heading sizes for immediate brand impact upon landing.

## Elevation & Depth
In this dark-mode-first system, depth is conveyed through **Tonal Layering** rather than traditional shadows.

- **Level 0 (Base):** Midnight Asphalt (#121417).
- **Level 1 (Cards/Surface):** Steel Grain (#1A1D21) with a 1px solid border (#2C2F36).
- **Level 2 (Modals/Popovers):** Slate Grey (#25282E) with a subtle outer glow of the primary color (low opacity) only for emergency alerts.
- **Outlines:** Use "Ghost Borders"—thin, 1px lines in low-contrast greys—to define sections without breaking the flat, minimalist aesthetic.

## Shapes
This design system utilizes **Sharp Edges (0px)** exclusively. 

There are no rounded corners in the interface. This reinforces the "hard-edged," rugged nature of the towing industry. Buttons, input fields, cards, and images must all have 90-degree angles. This geometric severity distinguishes the product from softer, "friendly" consumer apps and aligns it with professional equipment and industrial tools.

## Components
- **Primary Buttons:** Solid Dakota Flare background with black text. Sharp corners. Hover state: slight desaturation or addition of a subtle "hazard stripe" pattern on the right edge.
- **Secondary Buttons:** Ghost style. 1px Frost White border, white text. No fill.
- **Input Fields:** Dark background (#1A1D21) with a 1px bottom-border only, mimicking technical forms. Labels use the Monospaced font in uppercase.
- **Status Chips:** Rectangular tags with monospaced text. For "In Transit" or "Active" states, use a tiny animated "hazard stripe" loader.
- **Cards:** No shadow. 1px border. The top border of "Featured" or "Emergency" cards can be 4px thick Dakota Flare to draw immediate attention.
- **Hazard Dividers:** Instead of simple lines, use a repeating 45-degree diagonal pattern (2px wide) for section breaks where urgency is required.
