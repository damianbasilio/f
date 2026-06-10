I've designed and built a bespoke, editorial landing page for Beauty-Fur Dog Grooming Salon & Mobile.

### Design Highlights:
- **Editorial Layout:** Swapped the traditional grid for an asymmetric, high-fashion layout that uses generous whitespace and overlapping elements to create a premium first impression.
- **Visual Identity:** Developed a "Modern Boutique" palette of **Boutique Sage**, **Midnight Bark**, and **Golden Retriever** accents, paired with sophisticated **EB Garamond** serif typography for an authoritative yet warm local feel.
- **Unique Sections:** 
    - **The Rituals:** Services are presented as featured treatments rather than a simple menu.
    - **Vertical Branding:** Incorporated subtle vertical text motifs to reinforce the boutique identity.
    - **Minimalist Contact:** A clean, underline-based form and a dedicated map slot area at the Greeley location.
- **Production-Ready Code:** The screen features smooth scrolling, a mobile-responsive navigation system, and semantic HTML structure.

You can now view the desktop version on the canvas. Would you like to see how this translates to a mobile view, or shall we refine the service descriptions?

---

---
name: Modern Boutique Dog Grooming
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#444844'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#757874'
  outline-variant: '#c5c7c2'
  surface-tint: '#5d5f5c'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1c1a'
  on-primary-container: '#838481'
  inverse-primary: '#c6c7c3'
  secondary: '#576159'
  on-secondary: '#ffffff'
  secondary-container: '#d8e3d8'
  on-secondary-container: '#5b655d'
  tertiary: '#010100'
  on-tertiary: '#ffffff'
  tertiary-container: '#261a00'
  on-tertiary-container: '#a87d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e3df'
  primary-fixed-dim: '#c6c7c3'
  on-primary-fixed: '#1a1c1a'
  on-primary-fixed-variant: '#454745'
  secondary-fixed: '#dae5db'
  secondary-fixed-dim: '#bec9bf'
  on-secondary-fixed: '#141e17'
  on-secondary-fixed-variant: '#3f4941'
  tertiary-fixed: '#ffdfa0'
  tertiary-fixed-dim: '#f6be39'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
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
    letterSpacing: 0.02em
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
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
  container-max: 1280px
  gutter: 24px
  margin-edge: 32px
  asymmetric-offset: 64px
---

## Brand & Style

The design system is built on the philosophy of **Modern Boutique meets Playful Elegance**. It bridges the gap between high-end editorial fashion and the warm, caring nature of premium pet care. The brand personality is professional and world-class, yet deeply local and approachable.

The aesthetic leans heavily into **Minimalism** with a **Tactile** twist. We prioritize generous, deliberate whitespace to evoke a sense of calm—essential for a grooming service. The visual narrative is driven by asymmetric overlapping blocks and organic curves that mimic the natural flow of a dog's coat, contrasting against rigid, thin hairline borders that signify precision and professionalism.

## Colors

This design system utilizes a high-contrast, sophisticated palette inspired by nature and luxury grooming.

- **Soft Cream (#FAF9F6):** The primary base. It is warmer than pure white, providing a "premium paper" feel that reduces eye strain and feels more inviting.
- **Midnight Bark (#1A1C1A):** Used for all primary typography and hairline borders. It provides the "Editorial" weight needed to ground the brand.
- **Boutique Sage (#E8F3E8):** A calming secondary color used for large background blocks, asymmetric overlays, and subtle UI containers.
- **Golden Retriever Accent (#D4A017):** Reserved exclusively for Call to Actions (CTAs) and critical wayfinding. It provides a warm, energetic pop against the muted greens and creams.

## Typography

The typography strategy pairs a timeless Serif with a modern, wide-tracked Sans-Serif to create an editorial rhythm.

- **Headlines (EB Garamond):** Chosen for its graceful, classical proportions. Use this for all emotive statements and section titles. It should feel like a luxury magazine masthead.
- **Body & Labels (DM Sans):** A clean, geometric sans-serif. To enhance the premium feel, body text uses slightly increased letter-spacing (`0.02em`) to create a "breathable" reading experience.
- **Label-caps:** Used for small metadata, categories, or overlines. Always set in uppercase with generous tracking to signify a curated, boutique approach.

## Layout & Spacing

The layout breaks away from standard rigid grids in favor of an **Asymmetric Editorial Model**. 

- **Overlapping Blocks:** Use the `asymmetric-offset` to allow background Sage blocks or images to bleed off the edge of the container or overlap into the margin.
- **Deliberate Whitespace:** Avoid "filling" the screen. Group content tightly but leave wide margins between disparate sections to maintain the high-end boutique feel.
- **Responsiveness:** On mobile, the overlapping elements should collapse into a single-column stack, but maintain the thin hairline borders to separate sections. Use a 4-column grid for mobile and a 12-column grid for desktop, focusing on "off-center" alignments.

## Elevation & Depth

This design system avoids heavy shadows. Depth is communicated through **Tonal Layering** and **Hairline Outlines**.

- **Hairline Borders:** Use `1px` solid borders in `Midnight Bark` (often at 20-30% opacity) to define cards and image frames. This creates a "blueprint" or "sketch" aesthetic that feels precise.
- **Layering:** Depth is created by stacking `Soft Cream` surfaces over `Boutique Sage` backgrounds. 
- **Subtle Glass:** For mobile navigation or sticky headers, use a high-blur backdrop filter (30px) with a `Soft Cream` tint at 80% opacity, allowing the organic shapes of the content to peak through as the user scrolls.

## Shapes

The shape language is a mix of **Architectural Precision** and **Organic Softness**.

- **Containers:** All primary cards and buttons use a `0.5rem` (8px) radius. This provides a "Rounded" look that is professional but not "bubbly."
- **Organic Motif:** Use a specific "Blob" or "Pebble" mask for featured images of dogs. These should have varied, non-uniform radii to mimic the organic feel of a well-groomed coat.
- **Hairline Interaction:** Buttons and inputs should maintain a crisp `1px` border. On hover, the border weight does not change, but the fill may shift from `Soft Cream` to `Boutique Sage`.

## Components

- **Buttons:** Primary CTAs are filled with `Golden Retriever` and use `Midnight Bark` for text. Secondary buttons are "Ghost" style with a `1px` hairline border. All buttons use the `label-caps` typography style.
- **Cards:** Cards should not have shadows. Instead, use a `1px` border or a subtle `Boutique Sage` background fill. Use asymmetric padding (e.g., more padding at the bottom than the top) to mirror the layout philosophy.
- **Input Fields:** Minimalist. Only a bottom border of `1px Midnight Bark`. On focus, a subtle `Boutique Sage` glow appears behind the text area.
- **Chips/Badges:** Use the `Boutique Sage` fill with `Midnight Bark` text. These should be fully pill-shaped (`rounded-xl`) to contrast against the more structured cards.
- **Lists:** Use custom icons for bullets—small, stylized dog paw "dots" or simple thin horizontal lines to maintain the editorial feel.
