I've built a bespoke, editorial-grade homepage for **HellaFresh Detailing**, moving away from local-business templates to create a high-fidelity "Deep Gloss" identity.

### Design Rationale:
- **Visual Identity**: Established a high-contrast dark theme (Midnight Obsidian and Electric Cyan) that mimics the reflective qualities of a freshly detailed car.
- **Typography**: Paired a high-fashion serif (**Bodoni Moda**) for headlines with a clean utility sans-serif to create an "Editorial Menu" feel rather than a standard service list.
- **Layout**: Used an asymmetric, grid-breaking hero section and a "Trust Line" credibility bar to immediately establish premium positioning for the Springfield community.
- **Unique Motif**: Integrated diagonal "reflection" lines throughout the layout to unify the sections and reinforce the brand's focus on precision and light.
- **Conversion-Focused**: The header is anchored by a high-contrast 'Reserve Appointment' CTA and prominent local contact info, while the visit section features a custom-styled dark map container.

The result is a production-ready, semantic frontend experience that positions HellaFresh as the "Gold Standard" for automotive preservation.

How does this new visual direction feel for the HellaFresh brand?

---

---
name: Editorial High-Gloss
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#c1c7cf'
  on-secondary: '#2b3137'
  secondary-container: '#41474e'
  on-secondary-container: '#afb6bd'
  tertiary: '#f6f7fd'
  on-tertiary: '#2e3135'
  tertiary-container: '#d9dbe0'
  on-tertiary-container: '#5d6065'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#dde3eb'
  secondary-fixed-dim: '#c1c7cf'
  on-secondary-fixed: '#161c22'
  on-secondary-fixed-variant: '#41474e'
  tertiary-fixed: '#e1e2e8'
  tertiary-fixed-dim: '#c5c6cc'
  on-tertiary-fixed: '#191c20'
  on-tertiary-fixed-variant: '#44474b'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  utility-label:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-edge: 64px
  section-gap: 160px
---

## Brand & Style

The design system is engineered to evoke the sensation of a luxury automotive showroom: dark, reflective, and meticulously polished. The target audience is discerning car enthusiasts and luxury vehicle owners who value craftsmanship over convenience. 

The aesthetic is **Editorial High-Gloss**, a fusion of high-fashion print layouts and modern glassmorphism. It leverages deep obsidian backgrounds to make vibrant cyan accents and silver typography "pop" like neon reflections on a freshly waxed chassis. The emotional response is one of exclusivity, precision, and technical mastery.

Visual motifs include:
- **Specular Highlights:** Subtle linear gradients that mimic light catching a sharp fender line.
- **Micro-interactions:** Smooth, decelerating transitions that feel "heavy" and premium.
- **Cinematic Photography:** High-contrast imagery with deep blacks and sharp highlights, strictly following the Rule of Thirds.

## Colors

The palette is anchored in **Midnight Obsidian**, providing a bottomless depth that serves as the canvas for all other elements.

- **Midnight Obsidian (#0A0A0B):** The primary surface color. It should feel like infinite space.
- **Electric Cyan (#00F2FF):** Used sparingly for high-action triggers, success states, and critical highlights. It represents the "spark" of energy.
- **Machine Silver (#E2E8F0):** The primary color for typography and delicate borders, providing a metallic, cool-toned clarity.
- **Deep Asphalt (#1A1D21):** Used for secondary containers and subtle layering to create depth against the Obsidian background.

## Typography

This design system utilizes a high-contrast typographic pairing to reinforce the editorial feel. 

**Bodoni Moda** is used for large-scale headlines, evoking the classic elegance of high-end fashion mastheads. It should be typeset with tight tracking to emphasize its vertical stress.

**Hanken Grotesk** serves as the primary body face. It is tracked out slightly (3%) to enhance legibility against dark backgrounds and provide a modern, airy feel.

**Space Mono** (Utility) is used for technical data, pricing, and labels. Its fixed-width nature suggests mechanical precision and "service manual" blueprints.

## Layout & Spacing

The layout follows a **Bespoke Asymmetric Grid**. Rather than standard 12-column symmetry, it utilizes the Rule of Thirds to place focal points.

- **Desktop:** A 12-column grid with wide 64px outer margins. Content often spans columns 1-8 or 5-12 to create large areas of "negative space" on the opposing side.
- **Section Gaps:** Significant vertical breathing room (160px+) is used between major service blocks to maintain the premium editorial pace.
- **Alignment:** Typography is often left-aligned to a hard vertical axis, while imagery may bleed off the edge of the screen to suggest scale.

## Elevation & Depth

Depth is not achieved through shadows, but through **Tonal Refraction**. 

- **Glassmorphism:** Overlays use a 12px backdrop blur with a 5% white tint and a 0.5px Machine Silver border. This creates a "windshield" effect.
- **Diagonal Reflections:** Cards and sections feature a subtle 45-degree linear gradient (transparent to 5% Machine Silver) to mimic studio lighting reflections on paint.
- **Z-Axis:** Instead of shadows, elevated elements use a slightly lighter background (Deep Asphalt) and a sharp, high-contrast outer stroke of 1px.

## Shapes

The shape language is **Ultra-Sharp (Sharp)**. 

To reflect the precision of automotive detailing and the edges of luxury vehicle design, this system avoids rounded corners entirely. Every container, button, and image frame uses a 0px border radius. This rigidity creates a professional, architectural tone. 

Interactive elements may use clipped corners (45-degree chamfers) for a more technical, "machined" appearance.

## Components

- **Primary Action (Button):** A sharp rectangular block in Electric Cyan with black Space Mono text. On hover, the button scales slightly (1.02x) and gains a subtle outer glow of the same color.
- **Service Cards:** Large-scale containers with a 1px Machine Silver border. The background should be a subtle gradient from Deep Asphalt to Midnight Obsidian. 
- **Utility Tabs:** Using Space Mono, these appear as simple text strings with a 2px horizontal line below the active state.
- **Input Fields:** Bottom-border only (1px Machine Silver). When focused, the border transitions to Electric Cyan.
- **The "High-Gloss" Divider:** A thin 1px line that spans the width of the container, featuring a moving "shimmer" gradient that travels across it every few seconds, mimicking a light sweep.
