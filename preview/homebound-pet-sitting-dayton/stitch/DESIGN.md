I've designed a bespoke, editorial-grade homepage for Homebound Pet Sitting. 

### Design Strategy:
*   **Visual Identity:** I moved away from common "pet care" tropes in favor of a premium, architectural aesthetic. The palette uses **Warm Hearth** tones—Charcoal, Oatmeal, and Burnt Sienna—to convey sophistication and trust.
*   **Editorial Layout:** The site uses an off-grid, asymmetrical rhythm with generous whitespace and 1px "architectural" rules. This creates a high-end feel that differentiates the brand from local competitors.
*   **Typography:** A high-contrast Serif (Bodoni-style) for headings creates a sense of legacy and precision, while a clean Sans-Serif ensures readability.
*   **Narrative Focus:** Instead of generic service cards, I used a structured vertical list for "Bespoke Offerings" to maintain the editorial flow.

The site is production-ready, responsive, and includes the requested map slot and functional contact form UI.

---

---
name: Homebound
colors:
  surface: '#fcf9f5'
  surface-dim: '#dcdad6'
  surface-bright: '#fcf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ef'
  surface-container: '#f0ede9'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e5e2de'
  on-surface: '#1c1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f3f0ec'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2dd'
  on-secondary-container: '#656461'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868382'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fcf9f5'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2de'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
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
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 128px
---

## Brand & Style

The design system is rooted in a **Premium Editorial** aesthetic, positioning pet care as a bespoke, high-end service. It avoids the typical "playful" tropes of the pet industry in favor of a sophisticated, architectural approach that emphasizes the "Home" in Homebound.

The personality is **Trustworthy, Bespoke, and Local.** The visual style leverages **Minimalism** with an **Editorial** twist, utilizing generous whitespace (breathing room), high-contrast typography, and thin architectural lines to create a sense of structure and safety. The UI should feel like a premium lifestyle magazine—intentional, calm, and expertly curated.

## Colors

The "Warm Hearth" palette is designed to evoke a sense of security and domestic comfort.

- **Primary (Deep Charcoal):** Used for all primary headlines, heavy borders, and icons to provide a grounded, authoritative foundation.
- **Secondary (Soft Oatmeal):** The primary background color. It is softer than pure white, reducing eye strain and creating a "paper-like" editorial feel.
- **Accent (Burnt Sienna):** Used sparingly for call-to-actions, status indicators, or to highlight premium service tiers. It provides a warm, human touch to the cool charcoal and oatmeal.
- **Neutral:** A muted grey-taupe used for secondary text and subtle dividers to maintain the low-noise environment.

## Typography

This design system uses a high-contrast pairing to achieve an editorial rhythm. 

**Bodoni Moda** is the primary display face. It should be used for large, impactful headlines. In "Display" sizes, it may be placed off-grid or overlapping imagery to break the standard digital flow.

**DM Sans** provides a clean, wide-spaced counterpoint. Body copy should prioritize legibility with a generous line height (1.7) to maintain the airy, premium feel. **Label Caps** are used for eyebrows and small metadata to add a structured, professional layer.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** with an **Editorial Rhythm**. 

- **The Grid:** A 12-column system on desktop with wide 32px gutters. 
- **Off-Grid Elements:** To achieve the bespoke look, "Display" typography and high-end imagery should occasionally break the grid—shifting 1/2 column width to the left or right.
- **Architectural Lines:** Use 1px rules (Deep Charcoal at 20% opacity) to separate sections or frame content. These lines should mimic floor plans or architectural sketches.
- **White Space:** Use a minimum of 128px between major sections to ensure the content never feels crowded.

## Elevation & Depth

This design system eschews traditional shadows for **Tonal Layers** and **Bold Outlines**.

- **Depth via Tone:** Hierarchy is established by placing Oatmeal containers on top of slightly darker Neutral backgrounds, or Deep Charcoal cards on Oatmeal.
- **Thin Rules:** Instead of shadows, use 1px solid borders in Deep Charcoal to define boundaries.
- **Glassmorphism:** Reserved exclusively for navigation bars when scrolling over imagery, using a high-blur (20px) background filter with a subtle Oatmeal tint (60% opacity).

## Shapes

The shape language is **Sharp (0)**. 

To maintain the architectural and "bespoke" feel, avoid rounded corners. All buttons, input fields, cards, and image containers must use hard 90-degree angles. This reinforces the "Home/Structure" motif and differentiates the brand from the softer, consumer-grade competitors.

## Components

- **Buttons:** Rectangular with 0px radius. Primary buttons are Deep Charcoal with Oatmeal text. "Ghost" buttons use a 1px Charcoal border and wide letter-spacing for the label.
- **Input Fields:** Bottom-border only (1px Deep Charcoal). Labels are placed in `label-caps` typography above the line.
- **Cards:** Defined by 1px Deep Charcoal borders. No shadows. Cards should have generous internal padding (32px or more).
- **Chips/Badges:** Small, rectangular tags with `label-caps` text. Used for "Certified" or "Local" indicators.
- **Editorial Callouts:** Large, italicized quotes in Bodoni Moda that span 8 of the 12 columns, flanked by thin vertical 1px rules.
- **Architectural Rules:** Vertical and horizontal 1px lines used to "anchor" floating text or images to the edges of the viewport.
