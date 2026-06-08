I've designed a bespoke, editorial-grade digital home for **Stay Sharp Barbershop**. Moving away from generic templates, this design embraces a "Modern Heritage" aesthetic—mixing high-contrast editorial typography with a sophisticated dark palette and gold accents to reflect the premium nature of their craft.

### Key Design Decisions:
*   **Editorial Layout:** I utilized an asymmetric, vertical-aligned hero section and a "ledger" style credibility block to create a unique visual rhythm that feels more like a high-end magazine than a standard business site.
*   **Premium Visual Motif:** The use of thin gold dividers, high-contrast serif headlines, and generous whitespace establishes an immediate sense of "bespoke excellence" for the Cedar Rapids community.
*   **Functional Heritage:** The "Menu" and "Heritage" sections are structured to prioritize both the history of the shop and the immediate accessibility of their core services.
*   **Modern Utility:** Integrated a custom-styled contact form and a dedicated location section with the required map integration, all while maintaining a mobile-responsive, production-ready framework.

The site is now live on your canvas, complete with the full semantic structure and responsive styling requested.

---

---
name: Stay Sharp Heritage
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#c4c7ca'
  on-tertiary: '#2d3134'
  tertiary-container: '#070a0d'
  on-tertiary-container: '#77797d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e0e2e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1f'
  on-tertiary-fixed-variant: '#44474a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
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
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  utility:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system embodies a "Modern Heritage" aesthetic, blending the raw grit of a traditional barbershop with the polished sophistication of high-end fashion editorial. It targets a discerning clientele who values precision, tradition, and luxury. 

The visual style is **High-Contrast Minimalism** with a **Tactile Editorial** edge. It utilizes expansive whitespace to create a sense of exclusivity and "breathing room," punctuated by razor-sharp edges and thin, metallic accents. The emotional response should be one of quiet confidence, authority, and meticulous craft. Visual interest is driven by high-quality photography with subtle film grain overlays rather than complex UI ornaments.

## Colors
The palette is grounded in **Deep Onyx (#0A0A0A)**, serving as the primary canvas to evoke a premium, evening-inspired atmosphere. **Polished Steel (#E5E7EB)** provides high-contrast legibility for body text and primary UI elements.

**'Stay Sharp' Gold (#C5A059)** is used strictly as a precision tool for highlights, active states, and thin decorative dividers. Secondary surfaces use a slightly lifted neutral (#1A1A1A) to create subtle depth without breaking the monochromatic dominance.

## Typography
The typographic hierarchy is built on the tension between the classic and the industrial. **Bodoni Moda** serves as the editorial voice, used for headlines and hero statements. It should be typeset with tight tracking for a dramatic, high-fashion impact.

**Montserrat** provides the functional counterpoint. For labels and navigation, use "label-caps" with wide letter spacing to mimic premium brand tagging. Body text should maintain a generous line height to ensure readability against the dark background.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain rigorous editorial alignment, transitioning to a fluid model on mobile. 

A 12-column grid is used for desktop with wide margins (80px) to frame content like a gallery piece. Vertical rhythm is defined by large "section-gaps" (120px) to enforce the premium sense of space. Use asymmetrical layouts where imagery occupies 7 columns and text occupies 4, leaving a "void" column for breathing room.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Material Contrast** rather than traditional shadows. 

1.  **Base Layer:** Deep Onyx (#0A0A0A) background with a subtle grain texture.
2.  **Surface Layer:** Polished Steel (#E5E7EB) or Gold (#C5A059) lines (1px) used to define boundaries.
3.  **Floating Elements:** Cards or modals use a slightly lighter grey (#1A1A1A) with a sharp 1px border in a muted gold or steel. 

Avoid blurs or soft shadows. If a shadow is necessary for legibility on images, use a hard-edged, 0-blur black offset shadow to maintain the brutalist-editorial aesthetic.

## Shapes
The shape language is strictly **Sharp (0px)**. Every element—from buttons and input fields to image containers and hover states—must utilize 90-degree angles. This reinforces the "Sharp" brand identity and the precision of the barber's craft. Linear accents (1px width) are the primary decorative element, used to underline headings or separate list items.

## Components
- **Buttons:** Rectangular with 0px radius. Primary buttons are Solid Gold with Black text. Secondary buttons are Ghost-style with a 1px Steel border and White text.
- **Inputs:** Underline-only style using a 1px Steel border. The label sits above in `label-caps`. On focus, the underline turns Gold.
- **Cards:** No background fill by default; defined by 1px Steel borders. When hovering, the background shifts to a very dark grey (#1A1A1A) and the top border turns Gold.
- **Dividers:** 1px horizontal lines using `accent_line_hex`. Use sparingly to separate distinct editorial sections.
- **Imagery:** All photos should have a slight "High-Key" or "Noir" treatment. Use large, full-bleed backgrounds or strictly aligned containers that bleed off one side of the screen.
- **Chips/Badges:** Small, sharp-edged boxes with `label-caps` text. Used for service categories (e.g., "TRADITIONAL CUT", "HOT SHAVE").
