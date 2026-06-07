I have designed a bespoke, editorial-grade homepage for Santa Fe Bakery that moves far beyond a standard template. 

### Design Decisions:
- **Visual Identity**: I've crafted a "Adobe & Flour" theme—a palette of warm terra cotta, almond, and charcoal that reflects both the southwestern roots of the bakery's name and the rustic warmth of freshly baked bread.
- **Editorial Layout**: The design uses intentional asymmetry and generous whitespace to create a premium, "magazine-style" feel. The use of arched image frames serves as a recurring visual motif, mirroring artisanal loaves and architectural heritage.
- **Typography**: A sophisticated high-contrast serif (Playfair Display) for headings provides an authoritative, premium tone, balanced by a clean sans-serif for body copy.
- **Bespoke Sections**: Every section is custom-designed, from the split-layout hero to the grid-defying offerings section. I've integrated the specific contact details and requirements, including the requested semantic map slot.

The site is production-ready, featuring a responsive mobile menu, smooth scrolling, and a custom-styled contact form.

How does this new visual identity feel for the Santa Fe brand?

---

---
name: Adobe & Flour
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#54433d'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#87736c'
  outline-variant: '#dac1b9'
  surface-tint: '#94492c'
  primary: '#91472a'
  on-primary: '#ffffff'
  primary-container: '#af5e3f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59b'
  secondary: '#675d4d'
  on-secondary: '#ffffff'
  secondary-container: '#f0e0cc'
  on-secondary-container: '#6e6353'
  tertiary: '#5c5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#757474'
  on-tertiary-container: '#fffcfb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59b'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#763217'
  secondary-fixed: '#f0e0cc'
  secondary-fixed-dim: '#d3c4b1'
  on-secondary-fixed: '#221a0e'
  on-secondary-fixed-variant: '#4f4537'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
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
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is built upon the "Adobe & Flour" aesthetic—a fusion of Southwestern architectural heritage and the tactile, artisanal nature of high-end baking. The brand personality is warm, authentic, and premium, avoiding the generic polish of corporate chains in favor of an editorial, "slow-living" feel.

The design style leverages **Minimalism** with a **Tactile** edge. It utilizes generous whitespace to allow product photography to breathe, paired with intentional asymmetrical layouts that suggest the hand-crafted, non-uniform nature of artisanal bread. Subtle organic textures, reminiscent of floured surfaces or sundried clay, should be applied to backgrounds to provide depth without clutter.

## Colors

The palette is derived from the raw ingredients of the bakery and the landscape of Santa Fe.

*   **Primary (Terra Cotta):** Used for calls to action, accents, and brand motifs. It represents warmth and the heat of the oven.
*   **Secondary (Dusted Almond):** A soft, mid-tone neutral used for secondary surfaces, dividers, and subtle UI backgrounds.
*   **Tertiary (Deep Charcoal):** Used primarily for typography and high-contrast structural elements. It provides the "editorial" weight necessary for a premium feel.
*   **Neutral (Sun-bleached Cream):** The primary canvas color. It is warmer than pure white, evoking the color of unbleached flour and natural light.

## Typography

This design system employs a high-contrast typographic pairing to establish an editorial hierarchy.

**Headlines (Playfair Display):** These should be treated as hero elements. Use high-waisted serif scales for titles and section headers. Larger display sizes should use tighter letter spacing to emphasize the "editorial magazine" look.

**Body & Labels (Plus Jakarta Sans):** A clean, modern sans-serif provides a functional counterpoint to the serif. It should be set with generous line-height to ensure maximum readability and a sense of "airiness" within the layout. Labels should frequently use uppercase with increased tracking to denote metadata or small categories.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** for content but allows for "broken" elements that bleed off-edge to create visual interest.

*   **Grid:** A 12-column system on desktop with a wide 24px gutter. 
*   **Asymmetry:** Avoid perfect symmetry in image-and-text blocks. For example, a 7-column image paired with a 4-column text block with a 1-column offset creates a more sophisticated, editorial rhythm.
*   **Whitespace:** Use vertical margins of at least 80px-120px between major sections to emphasize a premium, unhurried brand experience.
*   **Mobile:** Transition to a 4-column grid with reduced margins (20px). Focus on single-column stacks but maintain the large serif typography for impact.

## Elevation & Depth

The design system avoids traditional heavy drop shadows. Depth is communicated through:

1.  **Tonal Layers:** Using the "Dusted Almond" color on top of the "Sun-bleached Cream" background to define separate functional areas.
2.  **Organic Overlaps:** Elements like images or text blocks should slightly overlap one another or span across grid lines to create a sense of physical layers.
3.  **Low-Contrast Outlines:** Where separation is required (e.g., input fields or cards), use 1px borders in a slightly darker shade of the background color rather than shadows.
4.  **Soft Transitions:** Interactive elements use subtle color shifts rather than elevation changes to maintain a "flat but tactile" feel.

## Shapes

The shape language is the core visual motif of this design system, mirroring the "arch" of a bread oven and the traditional curves of Southwestern adobe architecture.

*   **The Arch:** Use a full-radius top-rounding on primary imagery or featured content blocks.
*   **Baked-in Corners:** Buttons and cards use `rounded-lg` (1rem) or `rounded-xl` (1.5rem) to reflect the soft, organic edges of a handmade loaf of bread. Avoid sharp 90-degree angles in major UI components.

## Components

*   **Buttons:** Primary buttons are solid "Terra Cotta" with white or cream text. They should have a slightly larger corner radius (rounded-lg) and generous horizontal padding. Secondary buttons should be "Deep Charcoal" outlines.
*   **Cards:** Product cards should use the "arch" motif for the image container at the top. The card body uses "Sun-bleached Cream" with a 1px "Dusted Almond" border.
*   **Inputs:** Text fields are minimal, with a bottom-only border or a very soft-rounded container. Use the "Plus Jakarta Sans" font for labels in the `label-caps` style.
*   **Chips/Tags:** Used for ingredient callouts (e.g., "Sourdough," "Vegan"). These are pill-shaped, using "Dusted Almond" with "Deep Charcoal" text.
*   **Lists:** Menu items should be separated by thin, low-contrast horizontal rules with the price set in "Playfair Display" to give them an elegant, menu-like feel.
*   **Signature Element:** An "Order Now" floating action button (FAB) that utilizes a perfect circle shape, referencing a circular proofing basket.
