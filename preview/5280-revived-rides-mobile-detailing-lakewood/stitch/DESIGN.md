I have designed a bespoke, editorial-grade homepage for **5280 Revived Rides**. 

Moving away from the standard "local business" template, this design adopts a high-end automotive magazine aesthetic—dubbed **"Alpine Editorial."** It features:

*   **Bespoke Visual Identity:** A palette of *Asphalt & Alpine* (deep charcoal and high-gloss silver) with sharp *Revive Orange* accents to signal precision.
*   **Editorial Layout:** I’ve used an asymmetric grid and "rule lines" to create a structured, technical feel that mirrors the meticulous nature of high-end detailing.
*   **Strong Typographic Hierarchy:** Using wide-set headings to establish a premium, "Mile High" luxury presence.
*   **Production-Ready Sections:** Including a high-impact hero, a credibility belt with luxury marques, service deep-dives, and the requested minimalist "Visit" section with a functional map slot.

The site is fully responsive and uses semantic HTML with custom CSS properties for easy brand maintenance.

---

---
name: Alpine Editorial
colors:
  surface: '#101417'
  surface-dim: '#101417'
  surface-bright: '#363a3e'
  surface-container-lowest: '#0b0f12'
  surface-container-low: '#181c20'
  surface-container: '#1c2024'
  surface-container-high: '#262a2e'
  surface-container-highest: '#313539'
  on-surface: '#e0e3e8'
  on-surface-variant: '#c5c6ca'
  inverse-surface: '#e0e3e8'
  inverse-on-surface: '#2d3135'
  outline: '#8f9194'
  outline-variant: '#44474a'
  surface-tint: '#c6c6c9'
  primary: '#c6c6c9'
  on-primary: '#2f3133'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#5d5e61'
  secondary: '#c1c7cf'
  on-secondary: '#2b3137'
  secondary-container: '#41474e'
  on-secondary-container: '#afb6bd'
  tertiary: '#ffb5a0'
  on-tertiary: '#5f1500'
  tertiary-container: '#3b0a00'
  on-tertiary-container: '#ed4b15'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#dde3eb'
  secondary-fixed-dim: '#c1c7cf'
  on-secondary-fixed: '#161c22'
  on-secondary-fixed-variant: '#41474e'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#862200'
  background: '#101417'
  on-background: '#e0e3e8'
  surface-variant: '#313539'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
  section-gap: 128px
---

## Brand & Style

The brand identity is built on the intersection of high-performance automotive engineering and architectural precision. It targets a discerning clientele that views vehicle maintenance not as a chore, but as an act of preservation and curation. The visual narrative is "Editorial Luxury"—mimicking the layout of a premium automotive journal where whitespace is a luxury commodity and typography is used as a structural element.

The design style is a hybrid of **Minimalism** and **High-Contrast Bold**. It avoids the clutter of traditional service industries, opting instead for a "less is more" approach that emphasizes quality and attention to detail. The UI should evoke an emotional response of confidence, technical superiority, and refined taste.

## Colors

This design system utilizes the "Asphalt & Alpine" palette to ground the interface in a premium, high-performance environment. 

- **Primary (Asphalt):** #1A1C1E is used for the deep, immersive backgrounds, providing a sophisticated canvas that mimics the matte finish of high-end automotive materials.
- **Secondary (High-Gloss Silver):** #E2E8F0 serves as the primary text and structural element color, providing a metallic, reflective contrast against the dark background.
- **Tertiary (Revive Orange):** #FF5722 is used sparingly as a "precision accent" for critical calls to action, status indicators, and micro-interactions, echoing the functional aesthetic of performance instrument clusters.
- **Neutral:** Mid-tone charcoals are used for subtle container differentiation and rule lines to maintain depth without breaking the dark-mode immersion.

## Typography

Typography in this design system is treated as a graphic element. **Space Grotesk** is the primary choice for headlines, utilized for its technical, geometric precision and wide-set nature. For display styles, tight tracking creates a sense of tension, while for secondary headings, wide tracking and uppercase transformations evoke the feel of a luxury magazine's masthead.

**Hanken Grotesk** provides a Swiss-style functional balance for body text. It is clean, legible, and unobtrusive, ensuring that the detailed information remains the focus. Large-scale typographic layering (e.g., placing transparent text behind images) should be used to create a sense of scale and architectural depth.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile. On desktop, content is constrained to a 12-column grid with generous 80px side margins, ensuring the interface feels like an intentional, curated spread rather than an endless scroll.

Spacing is aggressive and rhythmic, based on an 8px scale. To signal luxury, white space (or "dark space") is intentionally oversized. Section gaps of 128px or more are encouraged to separate distinct "chapters" of the user journey. Layouts should utilize **Asymmetry**—for example, aligning text to the left 4 columns while imagery occupies the right 7 columns, leaving a single column of negative space to create visual tension and interest.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Tonal Layers** and **Geometric Rule Lines**. Depth is achieved through:

1.  **Rule Lines:** 1px solid borders using the Secondary or Neutral colors at low opacity (10-20%) to define zones without adding visual weight.
2.  **Metallic Gradients:** Subtle linear gradients (e.g., #2D3135 to #1A1C1E) are used on surfaces to simulate the reflection of light on polished metal or carbon fiber.
3.  **Large-scale Layering:** High-contrast photography should be layered behind or atop Rule Lines and Typography to create a 3D "journalistic" composition.
4.  **Glassmorphism:** Occasional use of backdrop blurs (20px+) on navigation bars to maintain the feeling of high-gloss surfaces while moving over content.

## Shapes

The shape language is strictly **Sharp (0)**. Every element—from buttons to image containers—uses 90-degree angles to reinforce the architectural and technical precision of the brand. This lack of rounding differentiates the product from typical consumer apps, positioning it instead as a professional-grade automotive service.

Rule lines and separators should be perfectly horizontal or vertical, echoing the geometric discipline of a high-end garage or modern architectural blueprint.

## Components

### Buttons
Primary buttons are large, sharp-edged blocks. Use the **Revive Orange** (#FF5722) for the background with **Primary Charcoal** (#1A1C1E) text. Hover states should involve a slight metallic sheen or a color inversion to the **Secondary Silver**.

### Cards & Containers
Cards are border-less. They are defined by subtle shifts in background tone (Neutral Charcoal) or separated by 1px Rule Lines. Padding within cards should be generous (32px or more) to maintain the editorial feel.

### Lists & Information Tables
Data—such as detailing packages or technical specifications—should be presented in a table format with horizontal Rule Lines. Use the **Label-MD** typography for headers to ensure a technical, "spec-sheet" aesthetic.

### Call-to-Actions (CTA)
CTAs should be massive and unapologetic. Use **Display-LG** typography for the headline, often overlapping a high-contrast image of a vehicle's detail, paired with a simple, high-visibility button.

### Precision Accents
Utilize small "coordinates" or "service numbers" in **Label-MD** style at the corners of containers to simulate a technical manual or an architectural drawing.
