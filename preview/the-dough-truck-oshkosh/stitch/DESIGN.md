I've designed a bespoke, award-winning-style landing page for **The Dough Truck**. 

### Design Decisions:
- **Editorial Visual Identity**: I moved away from standard local business templates, opting for a high-contrast, editorial layout. The design features a sophisticated "Flour White" and "Charred Crust" palette, paired with a high-contrast serif (Bodoni Moda) to signal premium quality.
- **"The Dough Wave"**: I've integrated a custom organic curve visual motif that breaks the standard rectangular section blocks, symbolizing the rising of dough and the fluidity of a mobile business.
- **Asymmetrical Layout**: The "Offerings" and "Our Story" sections use a staggered, offset composition to create a sense of rhythm and modern craft, rather than a predictable grid.
- **Production-Ready Details**: The page includes all requested contact information, a dedicated map slot for your production house location, and a clean, validated contact form.

The code is fully responsive and optimized for a premium desktop experience while scaling gracefully to mobile.

---

---
name: The Dough Truck
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#4d4540'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#7e756f'
  outline-variant: '#cfc4bd'
  surface-tint: '#635d5a'
  primary: '#181512'
  on-primary: '#ffffff'
  primary-container: '#2d2926'
  on-primary-container: '#96908b'
  inverse-primary: '#cdc5c0'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#ffc641'
  on-secondary-container: '#715300'
  tertiary: '#11170a'
  on-tertiary: '#ffffff'
  tertiary-container: '#262c1d'
  on-tertiary-container: '#8d9480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9e1dc'
  primary-fixed-dim: '#cdc5c0'
  on-primary-fixed: '#1e1b18'
  on-primary-fixed-variant: '#4b4642'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#f6be39'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#dee5cf'
  tertiary-fixed-dim: '#c2c9b4'
  on-tertiary-fixed: '#171d10'
  on-tertiary-fixed-variant: '#424939'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-xl:
    fontFamily: Bodoni Moda
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 92px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
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
  margin-safe: 40px
  gutter: 24px
  overlap-offset: -32px
  section-gap: 120px
---

## Brand & Style
The design system for this product is rooted in the concept of "Artisanal Precision." It evokes the tactile, sensory experience of a high-end bakery: the warmth of a wood-fired oven, the dusting of flour on a stone surface, and the patience of slow-fermented dough. 

The aesthetic is a blend of **High-Contrast Editorial** and **Minimalism**, prioritizing generous whitespace to let the premium photography and bold typography breathe. The emotional response is one of nostalgia reimagined—it feels like a heritage brand that exists in a modern, sophisticated context. Layouts should avoid rigid, repetitive grids in favor of asymmetrical compositions and overlapping elements that mimic the organic, handmade nature of the product.

## Colors
The palette is inspired by the natural lifecycle of baking:
- **Flour White (#F9F7F2):** The primary canvas. Use this for all backgrounds to provide a soft, creamy warmth that is less harsh than pure white.
- **Charred Crust (#2D2926):** The primary ink. Used for headlines, body text, and structural elements. It provides an authoritative, premium contrast.
- **Golden Honey (#D4A017):** The accent. Reserved for call-to-actions, highlights, and status indicators. It represents quality and the "perfect bake."
- **Sage Herb (#7D8471):** The secondary accent. Used for decorative elements, category labels, or ingredients, grounding the brand in earthiness and freshness.

## Typography
This design system utilizes a high-contrast typographic pairing to reinforce the artisanal narrative. 

**Bodoni Moda** is the editorial voice. It should be used with a slight negative letter-spacing in large sizes to create a dense, "ink-on-paper" look. For display roles, don't be afraid to let letters slightly overlap or bleed off the edge of the container.

**DM Sans** provides the modern utility. It is set with a wider letter-spacing and generous line height to ensure maximum readability and a clean, airy feel that balances the heavy serif. All labels should be set in uppercase with increased tracking for a sophisticated, "stamped" appearance.

## Layout & Spacing
The layout model is a **Fluid Asymmetric Grid**. Rather than standard card rows, elements are placed with varying vertical offsets. 

- **Overlapping Elements:** Images should frequently overlap with background shapes or typography containers to create depth and a "layered" feel.
- **Negative Space:** Use massive top/bottom padding (Section-Gap) to separate stories and product features, emphasizing a slow, curated browsing experience.
- **Breakpoints:** On Mobile, the layout collapses into a single column, but the "Doughy" organic containers (see Shapes) maintain their unique silhouettes to preserve the brand identity.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Subtle Textures** rather than traditional drop shadows.

- **The Flour Layer:** The base layer is #F9F7F2. 
- **The Dough Layer:** Secondary surfaces (like menu panels or detail drawers) use a slightly darker version of the Flour White or the Sage Herb at 10% opacity.
- **Shadows:** When necessary, use a "Tinted Ambient Shadow"—low opacity (8%), high blur (40px), and tinted with the Primary color (#2D2926) to make the element feel like it's resting on a soft surface.
- **Grain:** Apply a very subtle 2% noise texture across the entire background to simulate the feel of handmade paper or stone-ground flour.

## Shapes
The shape language is "Organic Geometric." While standard UI elements like buttons use the **Rounded** (0.5rem) token, hero containers and image masks should use custom, non-uniform radii.

- **The "Dough" Curve:** Apply `border-radius: 40% 60% 70% 30% / 40% 50% 60% 40%` to primary image masks to create a soft, hand-kneaded look.
- **Buttons:** Use soft, pill-shaped or moderately rounded rectangles.
- **Borders:** Use thin (1px) borders in Charred Crust at 20% opacity for subtle definition where contrast between similar tones is needed.

## Components
- **Buttons:** Primary buttons are solid Charred Crust with Golden Honey text. Secondary buttons are Flour White with a 1px border. No sharp corners.
- **Input Fields:** Minimalist design—just a bottom border in Charred Crust. The label floats above in the uppercase DM Sans style.
- **Cards (The "Artisan Frame"):** Avoid drop shadows. Instead, use an image that breaks the top boundary of its container, paired with an offset text block.
- **Chips/Tags:** Small Sage Herb backgrounds with Flour White text, using a full pill radius. These identify dietary specs or dough types (e.g., "Sourdough", "Vegan").
- **Interactive Flourish:** Hover states on images should trigger a slow, subtle zoom-in, mimicking the "rise" of dough.
