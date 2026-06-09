I've designed a bespoke, editorial-grade homepage for **Woof Pack Daycare and Boarding LLC**, moving far beyond generic local-business templates to create a truly premium first impression.

### Design Rationale:
*   **Visual Identity**: I established a "Modern Heritage" theme using a sophisticated **Midnight Den** (charcoal-navy) and **Golden Retriever** (honey gold) palette, punctuated by high-impact **Tennis Ball** green for calls to action.
*   **Editorial Layout**: The site uses a high-contrast serif typeface for headlines to create an "architectural" feel. I employed an asymmetrical grid with intentional overlapping elements and generous whitespace to elevate the brand.
*   **Premium Motif**: A subtle "pack" motif—overlapping geometric shapes and soft-cornered frames—repeats throughout the sections to provide visual cohesion and a unique brand signature.
*   **Technical Excellence**: The site is fully responsive, features semantic HTML, and includes the requested architectural map slot and integrated contact studio.

The design emphasizes the business's location in Clarksville, TN, while positioning it as a sanctuary for the modern canine rather than just a standard daycare facility.

---

---
name: Modern Heritage Canine Club
colors:
  surface: '#0f1418'
  surface-dim: '#0f1418'
  surface-bright: '#353a3e'
  surface-container-lowest: '#0a0f12'
  surface-container-low: '#181c20'
  surface-container: '#1c2024'
  surface-container-high: '#262a2f'
  surface-container-highest: '#313539'
  on-surface: '#dfe3e8'
  on-surface-variant: '#c5c6cb'
  inverse-surface: '#dfe3e8'
  inverse-on-surface: '#2c3135'
  outline: '#8f9195'
  outline-variant: '#45474b'
  surface-tint: '#c3c6cd'
  primary: '#c3c6cd'
  on-primary: '#2d3136'
  primary-container: '#12161b'
  on-primary-container: '#7c8086'
  inverse-primary: '#5b5f65'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#b8d300'
  on-tertiary: '#2c3400'
  tertiary-container: '#131800'
  on-tertiary-container: '#768800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e0e2ea'
  primary-fixed-dim: '#c3c6cd'
  on-primary-fixed: '#181c21'
  on-primary-fixed-variant: '#43474d'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#d2f000'
  tertiary-fixed-dim: '#b8d300'
  on-tertiary-fixed: '#191e00'
  on-tertiary-fixed-variant: '#414c00'
  background: '#0f1418'
  on-background: '#dfe3e8'
  surface-variant: '#313539'
typography:
  display-xl:
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
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  overlap-offset: -40px
---

## Brand & Style

The brand identity for this design system rejects the juvenile tropes of the pet industry in favor of a "Modern Heritage" aesthetic. It positions the service as an elite canine club—part luxury boutique hotel, part architectural sanctuary. The emotional response is one of absolute trust, quiet confidence, and curated playfulness.

The design style is a sophisticated blend of **Minimalism** and **High-Contrast Boldness**. It utilizes generous negative space to evoke a sense of calm and order, while employing sharp, editorial-grade typography to signal authority. Visual interest is driven by a "pack" motif—geometric abstractions of canine social structures—rendered through overlapping shapes and asymmetrical compositions that feel dynamic yet intentional.

## Colors

The palette is anchored by **Midnight Den**, a deep, architectural navy-charcoal that serves as the canvas, providing a sense of security and premium quietude. **Golden Retriever** provides a warm, heritage-inspired counterpoint, used for secondary accents and sophisticated highlights that suggest quality and care.

**Pavement** acts as the structural neutral, bridging the gap between deep darks and warm golds. The high-impact disruptor is **Tennis Ball**, a neon green reserved exclusively for critical calls-to-action and primary interactive points. This color should be used with extreme restraint—like a single vibrant object in a structured room—to ensure it maintains its energetic "play" value without compromising the luxury feel.

## Typography

Typography is the primary driver of the "Modern Heritage" feel. **Bodoni Moda** provides a high-fashion, editorial serif for all headlines, emphasizing the premium nature of the brand through its extreme contrast and vertical stress. 

For body copy and functional UI, **DM Sans** provides a clean, wide-set, and highly legible counterpoint. Its geometric structure feels modern and accessible. To maintain the luxury feel, body text should utilize slightly increased letter spacing and generous line heights to ensure the interface never feels "crowded." All labels and auxiliary metadata should use the uppercase `label-caps` style to provide a structured, architectural rhythm to the layout.

## Layout & Spacing

This design system uses an **Asymmetrical Grid** model. While built on a standard 12-column foundation, content is intentionally offset to create visual tension and interest. 

Key layout principles:
- **Intentional Overlap:** Use the `overlap-offset` variable to allow images and text containers to bleed into adjacent grid sections, creating a sense of depth and architectural layering.
- **Asymmetric Balance:** Align heavy headlines to the left while pushing descriptive body text or CTAs to the right-center of the grid.
- **Generous Voids:** Whitespace (or "Midnight Den" space) is treated as a premium material. Content should be clustered into "packs," separated by large vertical gaps of at least 120px on desktop.
- **Mobile Reflow:** On mobile, the asymmetry collapses into a single-column stack, but maintains the "pack" feel through varying card heights and overlapping background geometric motifs.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Subtle Geometry** rather than traditional shadows. The interface feels flat and architectural, like layers of high-end paper or stone stacked upon one another.

- **Surface Tiers:** The primary background uses "Midnight Den." Elevated containers (cards, modals) use a slightly lighter "Surface" hex.
- **Geometric Framing:** Use the "pack" motif—large, low-opacity overlapping circles and soft-cornered rectangles—behind content blocks to create a "middle ground" in the visual stack.
- **Stroke Definition:** Instead of drop shadows, use 1px solid borders in "Pavement" or very low-opacity "Golden Retriever" to define edges.
- **The "Neon Pop":** High-priority interactive elements (Tennis Ball) appear to sit on the highest z-index through sheer color vibration, requiring no additional shadow to feel "lifted."

## Shapes

The shape language is defined by the "Soft-Cornered Geometric" philosophy. While the overall layout is rigid and grid-based, individual elements use a **Rounded** (0.5rem) radius to soften the technical feel and introduce the "Playful" element of the brand.

Large-scale containers and editorial image masks should utilize the `rounded-xl` (1.5rem) setting to create a friendly, "cushioned" appearance that mimics high-end furniture or a well-designed kennel suite. Smaller UI components like inputs and tags should adhere to the base `rounded` (0.5rem) for a more precise, professional look.

## Components

### Buttons
- **Primary (The Tennis Ball):** High-impact neon green background with "Midnight Den" text. Sharp, bold, and impossible to miss. Used for "Book a Stay" or "Join the Pack."
- **Secondary:** Outlined in "Golden Retriever" with serif text. Used for "Learn More" or "View Gallery."
- **Tertiary:** Text-only in "Pavement" with a high-contrast hover state that reveals a "Tennis Ball" underline.

### Cards
Cards are treated as "Suites." They feature high-quality photography with a `rounded-xl` mask. Text within cards should be asymmetrical—headlines in the top left, supporting data in the bottom right.

### Input Fields
Minimalist "Pavement" borders on three sides, with the bottom border being slightly thicker. When focused, the bottom border shifts to "Golden Retriever."

### Chips & Tags
Small, pill-shaped markers in "Pavement" with `label-caps` typography. They identify dog sizes (e.g., "SMALL BATCH," "THE BIG LEAGUE") or service types.

### Geometric Patterns
Subtle background textures composed of overlapping circles and rectangles in a 2% opacity "Golden Retriever" or "Pavement" stroke. These should appear randomly behind editorial content to reinforce the "Pack" visual motif.
