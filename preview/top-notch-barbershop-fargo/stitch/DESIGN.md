The bespoke homepage for Top Notch Barbershop is now live.

I’ve established a unique "Industrial Luxe" visual identity that bridges Fargo’s hardworking heritage with premium grooming. The design moves away from common barbershop templates, opting instead for high-contrast editorial typography, thin architectural lines, and a palette of Deep Charcoal, Brushed Steel, and Cured Cognac.

Key features include:
- **Editorial Hero Section:** A bold, typographic-first entry that anchors the shop to its Main Avenue legacy.
- **The Menu:** A structured, high-legibility service list designed for quick browsing of premium offerings.
- **Precision Visit Block:** A dedicated location section with the required functional map slot and industrial-inspired layout.
- **Refined Interactivity:** Smooth-scroll navigation and a custom contact form designed for a high-end conversion experience.

The code is fully responsive and uses modern CSS custom properties for effortless brand maintenance.

---

---
name: Industrial Luxe
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d4c4b7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#9c8e83'
  outline-variant: '#50453b'
  surface-tint: '#eebd8e'
  primary: '#eebd8e'
  on-primary: '#472a06'
  primary-container: '#b4885d'
  on-primary-container: '#3f2302'
  inverse-primary: '#7c5730'
  secondary: '#c3c7c9'
  on-secondary: '#2d3133'
  secondary-container: '#484c4e'
  on-secondary-container: '#b8bcbe'
  tertiary: '#c8c6c7'
  on-tertiary: '#303031'
  tertiary-container: '#929091'
  on-tertiary-container: '#2a292b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#eebd8e'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#61401b'
  secondary-fixed: '#dfe3e5'
  secondary-fixed-dim: '#c3c7c9'
  on-secondary-fixed: '#181c1e'
  on-secondary-fixed-variant: '#434749'
  tertiary-fixed: '#e5e2e3'
  tertiary-fixed-dim: '#c8c6c7'
  on-tertiary-fixed: '#1b1b1c'
  on-tertiary-fixed-variant: '#474647'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system embodies the "Industrial Luxe" aesthetic, bridging the gap between Fargo’s gritty, hardworking roots and the precision of high-end editorial grooming. The brand personality is authoritative yet welcoming, emphasizing craft over kitsch. 

The visual style is a blend of **Minimalism** and **Brutalism**, characterized by:
- **Intentional Density:** Content is grouped into tight, logical modules to reflect professional efficiency.
- **Architectural Lines:** Use of 1px "Steel" dividers to create structure without bulk.
- **Atmospheric Texture:** Subtle film grain overlays on dark surfaces to evoke the tactile nature of leather and stone.
- **Oversized Typography:** Large-scale headings that act as graphic elements, communicating confidence and prestige.

## Colors

The "Steel & Smoke" palette is designed for a high-end dark mode experience.
- **Deep Charcoal (#1A1A1B):** The foundational "Smoke" color used for all primary backgrounds, providing a deep, immersive canvas.
- **Brushed Steel (#8E9294):** Used for secondary text, borders, and UI iconography to provide a metallic, technical contrast.
- **Cured Cognac (#A67C52):** The signature accent color, reserved for calls to action, active states, and premium highlights. It evokes the warmth of aged leather and spirits.
- **Off-White (#F4F4F4):** Used sparingly for primary body text to ensure high legibility against dark backgrounds without the harshness of pure white.

## Typography

The typography strategy focuses on the contrast between editorial flair and technical precision.
- **Headlines:** Uses *Bodoni Moda*. Its high contrast and vertical stress provide a luxury fashion feel, turning service names and section headers into bold statements.
- **Body:** Uses *Hanken Grotesk*. A sharp, contemporary sans-serif that ensures readability and a modern "SaaS-adjacent" cleanliness for service descriptions.
- **Technical Labels:** Uses *JetBrains Mono*. Monospaced accents for price points, timestamps, and technical data points (e.g., "01 / HAIRCUT") reinforce the concept of "precision craft."

## Layout & Spacing

The design system utilizes a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). 

- **Density & Tension:** Whitespace is used intentionally to separate "Editorial" areas (high whitespace) from "Utility" areas (high density). 
- **The "Main Ave" Border:** Use 1px wide vertical and horizontal rules (Color: #8E9294 at 30% opacity) to create a blueprint-like grid that contains content.
- **Scale:** Large "Display" type should often bleed slightly off-grid or be positioned with significant padding to create a high-end magazine feel.

## Elevation & Depth

Depth is achieved through material layering rather than traditional shadows.
- **Tonal Layering:** Surfaces do not "float" with shadows; they are distinguished by subtle shifts in the Charcoal base. A "Surface-Elevated" container uses a slightly lighter #252526 hex.
- **Glassmorphism:** Use backdrop blurs (20px) with 60% opacity Deep Charcoal for navigation bars and floating overlays to maintain context.
- **Low-Contrast Outlines:** Use 1px "Steel" (#8E9294) borders for all cards and interactive elements. This reinforces the "Industrial" component of the brand.

## Shapes

The shape language is **Sharp (0)**. 
- All buttons, input fields, images, and containers must have 90-degree corners. 
- This sharp geometry echoes the precision of a straight razor and the architectural steel beams found in industrial Fargo. 
- Circles are only permitted for user avatars or specific status indicators to provide a singular point of focus.

## Components

- **Buttons:** Primary buttons are solid "Cured Cognac" (#A67C52) with "Deep Charcoal" text in all-caps JetBrains Mono. Secondary buttons are ghost-style with a 1px "Steel" border. Hover states should include a subtle "inner glow" or a color shift to a slightly desaturated cognac.
- **Service Cards:** Use a thin 1px border. The price should be positioned in the top-right corner using monospaced type. Images within cards should have a subtle desaturated or grain filter applied.
- **Input Fields:** Bottom-border only. Labels should use the `label-caps` style. Focus states transition the bottom border to "Cured Cognac."
- **Chips/Badges:** Small, rectangular containers with 1px "Steel" borders. Use for "Available Today" or service categories.
- **Booking Lists:** High-density rows separated by horizontal rules. On hover, the entire row should shift to a slightly lighter charcoal background.
- **The "Craft" Indicator:** A custom component—a vertical text label rotated 90 degrees—used to label sections or provide "Est. 2024" branding in the margins.
