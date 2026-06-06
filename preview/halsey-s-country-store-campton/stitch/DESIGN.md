I've designed the first professional homepage for **Halsey's Country Store**, translating their Facebook presence into a cohesive digital storefront.

### Design Highlights:
*   **Split-Hero Layout:** Immediately balances the two core pillars of the business—Hardware and Gourmet Deli—ensuring both customer bases feel welcomed upon arrival.
*   **Community-Rooted Aesthetic:** Using the "Heritage Hearth" design system, I've paired deep forest greens with warm parchment tones to evoke the classic, trustworthy feel of a local Kentucky country store.
*   **Service-First Information Architecture:** A dedicated services grid highlights their diverse offerings, from plumbing and electrical to glass cutting and daily gourmet soups, making it easy for locals to see exactly how Halsey's can help them.
*   **Local Trust Signals:** The business's 236 Main St address and contact info are featured prominently to drive local foot traffic and phone orders.

Would you like to explore adding a specific menu page for the deli or perhaps a detailed hardware project request form?

---

---
name: Heritage Hearth
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f0eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#434843'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0ea'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#934b19'
  on-secondary: '#ffffff'
  secondary-container: '#ffa26a'
  on-secondary-container: '#783603'
  tertiary: '#271013'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f2427'
  on-tertiary-container: '#b0898c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#ffb68c'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#753401'
  tertiary-fixed: '#ffd9dc'
  tertiary-fixed-dim: '#e7bcbf'
  on-tertiary-fixed: '#2d1417'
  on-tertiary-fixed-variant: '#5d3f42'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
  parchment-base: '#FCF9F2'
  forest-deep: '#1B3022'
  cedar-warm: '#8B4513'
  iron-gray: '#343A40'
  honey-accent: '#D4A373'
typography:
  display-lg:
    fontFamily: Domine
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Domine
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
  headline-md:
    fontFamily: Domine
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Domine
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin: 2rem
  gutter: 1.5rem
  section-gap: 5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style
The brand personality is a bridge between the hardworking heritage of a rural hardware store and the artisanal warmth of a gourmet deli. It should feel established and trustworthy, yet approachable and tactile. 

The design style is **Tactile Modernism**. This approach pairs clean, structural layouts with organic textures and physical metaphors—like the grain of wood or the tooth of high-quality parchment. It avoids the coldness of pure minimalism by using warmth and depth, ensuring the digital experience feels as grounded as a physical community hub. The aesthetic should evoke the sensory experience of walking through a local store: the smell of fresh cedar, the weight of iron tools, and the inviting aroma of a kitchen.

## Colors
The palette is rooted in the natural landscape of Campton. 

- **Primary (Forest Deep):** A dense, authoritative green used for headers, primary buttons, and navigation. It represents growth and the surrounding wilderness.
- **Secondary (Cedar Warm):** A rich wood tone used for accents, underlines, and iconography. It adds a "human touch" and warmth.
- **Neutral (Parchment Base):** Replacing sterile whites with a soft, off-white parchment. This reduces eye strain and provides a classic, archival feel.
- **Named Colors:** "Iron Gray" is reserved for technical hardware specifications and hardware-focused UI sections, while "Honey Accent" provides a subtle glow for highlights and calls to action.

## Typography
The typography system balances character with utility.

- **Headlines (Domine):** Chosen for its sturdy serifs and classic storefront aesthetic. It conveys reliability and historical weight. Use `display-lg` for the hero sections to mimic traditional signage.
- **Body & UI (Work Sans):** A clean, versatile sans-serif that ensures high legibility for product descriptions and hardware specs.
- **Labels:** Use `label-caps` for small identifiers, category tags (e.g., "DELI", "TOOLS"), and navigation items to maintain a structured, organized feel.

## Layout & Spacing
This design system utilizes a **Fixed Grid** for desktop to create a sense of focused, editorial containment, transitioning to a **Fluid Grid** for mobile devices.

- **The Split-Hero Layout:** On desktop, the primary hero is divided vertically (50/50). The left side (Hardware) uses "Iron Gray" backgrounds or photography with cooler tones, while the right side (Deli) utilizes "Parchment" or warmer, appetizing photography.
- **Editorial Margins:** Generous white space (using the Parchment color) is essential to prevent the "cluttered hardware store" trope, allowing each high-quality image to breathe.
- **Breakpoints:** 
  - Desktop: 1280px+ (12-column)
  - Tablet: 768px (8-column, stack hero vertically)
  - Mobile: 375px (4-column, 16px margins)

## Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional shadows. This avoids a "floating" app feel and keeps the UI grounded.

- **Surface Tiers:** Use subtle shifts in the parchment tone to define depth. A slightly darker parchment indicates a recessed area, while a pure white overlay indicates a foreground element.
- **Low-Contrast Outlines:** Instead of shadows, use 1px solid borders in a very light "Cedar" or "Iron" tint to define cards and input fields.
- **Tactile Overlays:** Use a subtle grain texture or "noise" overlay on primary brand surfaces to mimic physical materials.
- **Selection State:** Active items should feel "pressed" into the surface (inset) rather than floating above it.

## Shapes
The shape language is **Soft (Level 1)**. 

Corners should have a slight 0.25rem radius, suggesting wood that has been sanded down rather than sharp, industrial metal. This subtle rounding maintains a professional structure while appearing more welcoming. 
- **Buttons:** Use the standard `rounded-sm`. Avoid pill-shapes, as they feel too modern/tech-oriented for a community hub.
- **Product Cards:** Use `rounded-lg` (0.5rem) to softly frame photography.
- **Icons:** Should be monolinear and slightly rounded to match the stroke weight of the body text.

## Components
- **Buttons:** Primary buttons are solid "Forest Deep" with "Parchment" text. Secondary buttons use a "Cedar" outline. Hover states should involve a subtle shift in color saturation rather than a change in depth.
- **Cards:** Cards use a "Parchment" background with a thin 1px "Cedar" or "Iron" border. Title text should always be in "Domine".
- **Split-Hero:** A custom component where two distinct categories (Deli/Hardware) are showcased. Each side has its own unique color-tinted overlay (Warm Cedar for Deli, Cool Iron for Hardware) to differentiate the departments at a glance.
- **Input Fields:** Use a structured, rectangular look with the Parchment background and a clear "Iron" border when focused. Label text should be positioned above the field in `label-caps`.
- **Chips/Badges:** Used for "New In," "Local," or "Sale." These should look like small physical tags or labels, using "Honey Accent" for visibility.
