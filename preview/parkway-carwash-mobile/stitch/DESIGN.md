I've completed the bespoke homepage for Parkway Carwash, moving away from standard templates to create an **Industrial Editorial** identity. This design reflects the precision and grit of the business while maintaining a premium feel for the Mobile, AL market.

### Key Design Decisions:
*   **Visual Identity**: Established a high-contrast 'Asphalt & Sky' palette—deep charcoal, metallic silver, and a high-visibility safety-orange accent for conversion points.
*   **Typography**: Leveraged bold, condensed headings to create an authoritative, "engineered" look that mirrors automotive precision.
*   **Asymmetrical Layout**: Avoided generic card grids in favor of a 'Service Slate' and overlapping hero elements, giving the site a custom-built, editorial feel.
*   **Local Heritage**: Integrated specific Mobile, AL context and the Dauphin Island Parkway location to build immediate local trust.

The frontend is fully responsive, semantic, and includes a dedicated map slot for your future integration. How does this new direction feel for the brand?

---

---
name: Parkway Carwash Industrial Editorial
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1c'
  surface-container: '#1f1f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353536'
  on-surface: '#e4e2e3'
  on-surface-variant: '#c7c6ca'
  inverse-surface: '#e4e2e3'
  inverse-on-surface: '#303031'
  outline: '#909094'
  outline-variant: '#46474a'
  surface-tint: '#c8c6c7'
  primary: '#c8c6c7'
  on-primary: '#303031'
  primary-container: '#1a1a1b'
  on-primary-container: '#848283'
  inverse-primary: '#5f5e5f'
  secondary: '#c1c7cf'
  on-secondary: '#2b3137'
  secondary-container: '#41474e'
  on-secondary-container: '#afb6bd'
  tertiary: '#ffb59c'
  on-tertiary: '#5c1900'
  tertiary-container: '#360b00'
  on-tertiary-container: '#e74e0a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#dde3eb'
  secondary-fixed-dim: '#c1c7cf'
  on-secondary-fixed: '#161c22'
  on-secondary-fixed-variant: '#41474e'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832700'
  background: '#131314'
  on-background: '#e4e2e3'
  surface-variant: '#353536'
typography:
  display-xl:
    fontFamily: Archivo Narrow
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
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
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-edge: 40px
  section-gap: 120px
  indent-offset: 64px
---

## Brand & Style
The design system establishes an "Industrial Editorial" identity for a local premium service. It moves away from the common bubbly, aqueous tropes of the car wash industry in favor of a structured, high-fashion-meets-heavy-machinery aesthetic. The brand personality is efficient, elite, and precise.

The visual style utilizes a mix of **Minimalism** and **Brutalism**. It prioritizes heavy whitespace and stark contrast to evoke a sense of cleanliness, while using aggressive typography and raw structural elements to signal professional-grade power. The UI should feel like a high-end automotive lookbook—asymmetric, confident, and meticulously organized.

## Colors
The palette, "Asphalt & Sky," is rooted in deep, matte textures and high-visibility accents.

- **Primary (Asphalt):** #1A1A1B. Used for the primary canvas. It should feel deep and solid, providing a premium backdrop that makes vehicle photography pop.
- **Secondary (Metallic Silver):** #E2E8F0. Used for primary text and structural lines. It carries a cold, metallic sheen that suggests precision.
- **Tertiary (Safety Orange):** #FF5F1F. Reserved strictly for critical actions and high-visibility status indicators. It mimics industrial safety markings.
- **Surface (Neutral):** #2D2D2E. Used for subtle layering and distinguishing container sections from the main background.

## Typography
The typography strategy pairs industrial speed with editorial clarity. 

**Archivo Narrow** is the engine of the system, used for all primary headings. Its condensed nature suggests verticality and strength. Large-scale headings should often overlap imagery or edge-to-edge containers to create an "editorial overlay" effect.

**Hanken Grotesk** provides a high-readability counterpoint for body copy and technical details. Its clean, contemporary geometry keeps the interface feeling modern and approachable despite the aggressive headline treatment. All labels and secondary headers should utilize uppercase styling with increased letter spacing to reinforce the "industrial marking" aesthetic.

## Layout & Spacing
This design system rejects standard symmetrical grids in favor of an **Asymmetric Fixed Grid**. 

The layout relies on a 12-column structure but utilizes "Indents" and "Bleeds" to create visual tension. 
- **Desktop:** Use wide 40px external margins. Content blocks should frequently be offset (e.g., text starting on column 3 while the headline starts on column 1). 
- **Overlays:** Images should frequently bleed off the edge of the screen or sit behind text blocks with a 64px offset.
- **Verticality:** Use generous 120px gaps between major sections to emphasize the "editorial" feel.
- **Mobile:** Transition to a simplified 4-column fluid grid, maintaining the signature Safety Orange accent lines to define section breaks vertically.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Subtle Metallic Gradients** rather than traditional soft shadows.

- **Flat Stack:** Elements should feel like sheets of metal or asphalt stacked on top of one another. Use 1px solid borders in #E2E8F0 at 10% opacity to define edges.
- **Gradients:** Use very subtle linear gradients (e.g., #2D2D2E to #1A1A1B) on primary cards to simulate the curve of a car’s body panels.
- **Glass Effects:** Use backdrop blurs sparingly (20px blur) only on navigation bars to maintain the "Sky" part of the palette, allowing the dark background to peak through.
- **No Shadows:** Avoid drop shadows entirely. Use high-contrast color shifts to denote state changes.

## Shapes
The shape language is strictly **Sharp**. To reflect the "Industrial" theme, all buttons, containers, and image masks must have 0px corner radii. 

This creates a structural, architectural feel. The only exception is the use of circular icons or "stamps" for badges (like "Unlimited Wash Club"), which should look like physical industrial seals or decals.

## Components
- **Buttons:** Primary buttons use a solid #FF5F1F fill with black text, 0px border-radius, and uppercase bold typography. Secondary buttons are transparent with a 2px #E2E8F0 border.
- **Input Fields:** Bottom-border only, using #E2E8F0. Floating labels in `label-caps` style that shift upwards on focus.
- **Cards:** No shadows or rounding. Use a "Technical Spec" style—include a small corner-aligned index number (e.g., 01, 02) in Safety Orange to number service tiers.
- **Progress Indicators:** Use thick, horizontal bars rather than circles. A "Wash Status" tracker should look like a mechanical gauge or a industrial dashboard.
- **Dividers:** Use heavy 4px vertical lines in #FF5F1F to separate major content shifts, echoing the lines found in a garage or on a road.
