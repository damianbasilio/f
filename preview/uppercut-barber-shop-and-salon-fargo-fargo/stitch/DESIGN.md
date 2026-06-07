I've completed the bespoke landing page for **UpperCut Barber Shop and Salon Fargo**. 

This design intentionally moves away from generic local-business templates, opting for a **"Fargo Industrial"** aesthetic that reflects the rugged precision of the brand.

### Key Design Decisions:
- **Visual Identity:** Established a high-contrast, dark editorial layout using a palette of "North Dakota Steel" and "Safety Amber" accents. 
- **Editorial Layout:** Used a rigid grid system with visible blueprint-style rules and asymmetric sectioning to create a unique, premium feel.
- **Tone & Copy:** Every section—from "The Specification" (Services) to "The Ethos" (About)—uses custom, technical copy that reinforces the brand's commitment to precision and industrial craft.
- **Production-Ready Code:** The screen is built with semantic HTML5, responsive CSS using custom properties, and includes the specific map-slot requirements for the Fargo location.

The site is now live on the canvas for your review. How does this industrial direction feel for the brand?

---

---
name: Fargo Industrial
colors:
  surface: '#0a141c'
  surface-dim: '#0a141c'
  surface-bright: '#303a43'
  surface-container-lowest: '#050f17'
  surface-container-low: '#131d25'
  surface-container: '#172129'
  surface-container-high: '#212b34'
  surface-container-highest: '#2c363f'
  on-surface: '#d9e4ef'
  on-surface-variant: '#c4c6cb'
  inverse-surface: '#d9e4ef'
  inverse-on-surface: '#28313a'
  outline: '#8e9195'
  outline-variant: '#44474b'
  surface-tint: '#bfc7d1'
  primary: '#bfc7d1'
  on-primary: '#293139'
  primary-container: '#1a2229'
  on-primary-container: '#818992'
  inverse-primary: '#575f67'
  secondary: '#ffdb9d'
  on-secondary: '#412d00'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#c4c7c9'
  on-tertiary: '#2d3133'
  tertiary-container: '#1e2224'
  on-tertiary-container: '#85898b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe3ed'
  primary-fixed-dim: '#bfc7d1'
  on-primary-fixed: '#141c23'
  on-primary-fixed-variant: '#40484f'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#434749'
  background: '#0a141c'
  on-background: '#d9e4ef'
  surface-variant: '#2c363f'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
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
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.08em
  label-numeric:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.0'
spacing:
  base: 8px
  gutter: 24px
  margin: 48px
  container-max: 1280px
  rule-weight: 1px
---

## Brand & Style

The brand identity centers on the "Fargo Industrial" aesthetic—a synthesis of the rugged structuralism found in North Dakota’s infrastructure and the meticulous craft of premium grooming. This design system moves away from heritage barbershop tropes, opting instead for a cold, high-precision visual language that feels both authoritative and contemporary.

The style is a hybrid of **Brutalism** and **Premium Minimalism**. It utilizes heavy structural lines, desaturated imagery with high grain, and a rigid grid reminiscent of architectural blueprints. The emotional response should be one of reliability and "sharpness"—evoking the feeling of a high-end workshop where precision is the primary product.

## Colors

The palette is anchored in **North Dakota Steel** (#1A2229), a deep, cold slate blue that provides a heavy, industrial base. **Electric Gold** (#FFB800) is used sparingly as a high-visibility functional accent, mimicking safety markings or sparks in a workshop. 

**Ice White** (#F4F7F9) serves as the primary text color and editorial negative space, ensuring high-contrast legibility. Neutral shades are derived from the primary steel tone to create subtle depth without breaking the monolithic, cold feel of the interface. Avoid all warm-toned greys; maintain a consistent cool-to-neutral temperature.

## Typography

The typographic hierarchy is designed to feel custom-branded and technical. 

**Headlines** use **Bricolage Grotesque** with tight tracking to create a "blocky," authoritative presence. Large display text should feel like stamped metal or architectural signage. 

**Body Copy** utilizes **Hanken Grotesk**, a clean, sharp sans-serif with generous leading to provide breathing room against the heavy industrial background. 

**Labels and Metadata** are set in **JetBrains Mono**. This monospaced font reinforces the "blueprint" aesthetic, used for technical details, prices, and timestamps, suggesting a system of high precision and measurement.

## Layout & Spacing

This design system employs a **Fixed Grid** model based on a 12-column architecture. The layout is defined by explicit "Rules"—1px borders that separate sections, echoing the lines of a technical drawing.

- **Desktop:** 12 columns, 48px margins, 24px gutters. Use heavy vertical and horizontal rules to contain content.
- **Mobile:** 4 columns, 20px margins, 16px gutters. Rules should collapse into a single vertical stack, maintaining a "boxed" feel for every component.
- **Alignment:** Content should often be "hard-aligned" to the top-left of its grid container. Use asymmetric negative space to create an editorial, high-end feel.

## Elevation & Depth

Depth is not conveyed through shadows, but through **Tonal Layering** and **Structural Outlines**. This is a flat, architectural approach.

1.  **Base Layer:** North Dakota Steel (Primary).
2.  **Surface Layer:** A slightly lighter neutral or semi-transparent overlay to define cards.
3.  **Borders:** Instead of shadows, use 1px solid borders in a slightly lighter steel tone or Electric Gold for active states.
4.  **Glassmorphism:** Use sparingly for navigation overlays, using a heavy "Frost" (blur: 20px) to simulate thick, industrial glass.

Avoid soft glows or diffused shadows; transitions between elevations should be sharp and immediate.

## Shapes

The shape language is strictly **Sharp (0px)**. All containers, buttons, and input fields must have square corners to reflect the "Industrial" and "Steel" metaphors. 

The only exception to the rectangularity is the use of 45-degree "clipped corners" for decorative accents or "Service Tags," further leaning into the blueprint/mechanical parts aesthetic.

## Components

**Buttons:** Solid Electric Gold with black text for primary actions. Secondary buttons are "Ghost" style with 1px Ice White borders and sharp corners. No gradients.

**Cards:** Defined by 1px Steel-toned borders. Headers within cards should be separated by a horizontal rule. High-grain, desaturated photography should fill the top half of the card.

**Input Fields:** Bottom-border only or full-outline with no fill. Labels must be in JetBrains Mono, placed strictly above the field.

**Chips/Tags:** Monospaced text inside a small, 1px bordered box. Use for service categories (e.g., [ HAIRCUT ], [ BEARD TRIM ]).

**Photo Treatments:** All imagery must be desaturated (near-monochrome) with a slight blue tint and increased film grain. Avoid "lifestyle" warmth; images should look like high-contrast editorial photography.

**Dividers:** Every section must be separated by a 1px rule. For major section breaks, use a double rule or a rule with a "Safety Amber" accent at the start.
