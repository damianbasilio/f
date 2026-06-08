I've designed a bespoke, editorial-grade homepage for MindSoulTouch. 

### Design Choices:
*   **Visual Identity**: Established a "Modern Sanctuary" aesthetic using a palette of Deep Forest Green and Warm Sand, reflecting the serene New Hampshire landscape.
*   **Typography**: Leveraged high-contrast serif headings (Playfair Display) to communicate wisdom and premium care, balanced with a clean sans-serif for readability.
*   **Layout**: Created an asymmetric, fluid grid that breaks away from generic templates, giving the studio a unique and memorable digital presence.
*   **Technical Details**: The page is fully responsive, features smooth scrolling, and includes a production-ready contact form and a dedicated "Visit" section with an integrated map slot.

The site is now ready for production-level review. What should we focus on next?

---

---
name: Modern Sanctuary
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f1eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#424845'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0e9'
  outline: '#737874'
  outline-variant: '#c2c8c3'
  surface-tint: '#4f6359'
  primary: '#061912'
  on-primary: '#ffffff'
  primary-container: '#1b2e26'
  on-primary-container: '#81968b'
  inverse-primary: '#b6ccc0'
  secondary: '#566252'
  on-secondary: '#ffffff'
  secondary-container: '#d4e1ce'
  on-secondary-container: '#586455'
  tertiary: '#2c0c01'
  on-tertiary: '#ffffff'
  tertiary-container: '#45200e'
  on-tertiary-container: '#bd846b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e8db'
  primary-fixed-dim: '#b6ccc0'
  on-primary-fixed: '#0c1f18'
  on-primary-fixed-variant: '#374b42'
  secondary-fixed: '#d9e6d3'
  secondary-fixed-dim: '#bdcab8'
  on-secondary-fixed: '#131e12'
  on-secondary-fixed-variant: '#3e4a3c'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#f8b89d'
  on-tertiary-fixed: '#331203'
  on-tertiary-fixed-variant: '#683b27'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  section-gap: 120px
  container-max: 1280px
  fluid-inset: 5vw
---

## Brand & Style
The design system embodies the "Modern Sanctuary" philosophy, serving as a digital extension of a premium holistic wellness environment. The aesthetic is rooted in **Editorial Minimalism** with a **Tactile** influence, prioritizing a sense of decompression and grounded luxury. 

The target audience seeks high-end bodywork and restorative wisdom, expecting an interface that feels as intentional as a curated spa experience. The visual narrative avoids the frantic energy of typical fitness apps, opting instead for generous whitespace, organic compositions, and a "breathing" interface that slows the user’s heart rate. Visual interest is generated through subtle textural gradients that mimic natural elements like smooth river stones and soft botanical shadows.

## Colors
The palette is a sophisticated "Forest to Shore" harmony. 
- **Deep Forest Green (#1B2E26)**: The primary anchor, used for high-contrast typography and foundational elements to provide a sense of security and depth.
- **Soft Sage (#A8B5A3)**: A calming secondary tone for secondary actions, subtle backgrounds, and iconography.
- **Warm Sand (#F4F1EA)**: The canvas of the design system. It replaces pure white to reduce eye strain and add a premium, textured feel.
- **Muted Clay (#C58B72)**: A focused accent color used sparingly for calls-to-action or highlighting restorative benefits.

Backgrounds should primarily utilize Warm Sand, with Deep Forest Green reserved for immersive, dark-mode-style "sanctuary" sections within a page.

## Typography
The typographic hierarchy relies on the tension between the authoritative, high-contrast **Playfair Display** and the airy, systematic **Inter**. 

Headlines use Playfair Display to convey heritage and luxury. Large display text should employ a slight negative letter-spacing for a tighter, editorial look. Body text is set in Inter with increased line height and a lighter weight (300) to ensure a feeling of openness and breathability. Labels use uppercase Inter with generous tracking to provide a modern, navigational clarity that balances the classical serif headers.

## Layout & Spacing
This design system moves away from rigid, multi-column grids in favor of an **Asymmetric & Fluid** model. Content is treated as a series of floating "islands" of information.

- **Asymmetry**: Offset images and text blocks so they do not align perfectly to a vertical axis. For example, a 60% width text block might be followed by a 40% width image aligned to the opposite edge.
- **Generous Voids**: Use significant vertical spacing (120px+) between sections to allow the user's eyes to rest.
- **Fluid Insets**: Instead of fixed margins, use viewport-relative padding (5vw) to ensure the content feels expansive on larger displays.
- **Organic Overlaps**: Elements like images should occasionally overlap background shapes or text to create depth and a tactile, scrapbook-like quality.

## Elevation & Depth
Depth in this design system is created through **Tonal Layering** and **Atmospheric Blurs** rather than traditional drop shadows.

- **Tonal Layers**: Use subtle shifts between Warm Sand and slightly darker tints of Soft Sage to distinguish cards or sections.
- **Soft Diffusion**: When a shadow is required for a floating element (like a modal), use a very large blur radius (40px+) with a low-opacity Deep Forest Green tint (#1B2E26 at 5%). This mimics a natural shadow cast by soft, diffused light.
- **Glassmorphism Lite**: Use backdrop blurs (10px - 20px) on sticky navigation bars to maintain the feeling of continuity as the user scrolls past the organic background shapes.

## Shapes
The shape language is inspired by nature—specifically rounded river stones and organic foliage.
- **Containers**: Use a standard `rounded-lg` (1rem) for UI elements like cards and input fields to maintain a soft but professional structure.
- **Feature Elements**: Large decorative background containers should use **custom non-uniform border radii** (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`) to create unique, pebble-like organic shapes.
- **Connectors**: Use subtle, hand-drawn-style SVG lines or soft-edged gradients to lead the eye from one asymmetric block to another.

## Components
- **Buttons**: Primary buttons are Deep Forest Green with Warm Sand text. They should be wide with `rounded-lg` corners, using a subtle Clay border on hover.
- **Cards**: Cards use a Soft Sage or Warm Sand background with a very fine (0.5px) border in a slightly darker neutral. Avoid heavy shadows; use thin outlines for definition.
- **Input Fields**: Ghost-style inputs with a bottom-only border in Deep Forest Green, emphasizing a clean, "uncluttered" form experience.
- **Chips**: Small, pill-shaped tags in Muted Clay for categories like "Restorative," "Deep Tissue," or "Wisdom," using white text for high legibility.
- **Textural Gradients**: A unique component—a container with a radial gradient transition from Soft Sage to Warm Sand, used as a backdrop for high-level quotes or testimonials to add tactile "stone" texture.
- **Booking Progress**: A minimal horizontal line with soft dots, avoiding "heavy" industrial-looking steppers.
