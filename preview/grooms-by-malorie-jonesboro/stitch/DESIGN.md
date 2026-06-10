I've designed a bespoke, editorial-grade homepage for **Grooms By Malorie** that breaks away from standard business templates to establish a premium "Atelier" identity.

### Design Decisions
- **Visual Identity:** I chose a sophisticated "Deep Botanical & Bone" palette (#1B2B28 and #FDFCF8) to evoke a sense of calm, high-end craftsmanship.
- **Typography:** Using a refined serif for headers and a wide-tracked sans-serif for body text creates an intentional, editorial hierarchy reminiscent of luxury lifestyle magazines.
- **Layout:** I moved away from standard card grids in favor of asymmetrical layouts and subtle vertical rules, emphasizing the "handcrafted" nature of Malorie's work.
- **Atmosphere:** The use of generous whitespace and a "Collection" approach to services frames grooming as an art form rather than a chore.

### Technical Notes
- **Responsive:** The layout is fully fluid and optimized for a seamless transition from desktop to mobile (375px).
- **Map Slot:** Included the specific `data-map-slot` container as requested in the Visit section.
- **Semantic HTML:** Built with accessibility and SEO in mind, using clean, structured markup.

The site is now ready for its digital debut in Jonesboro.

---

---
name: The Modern Groomer’s Atelier
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#424846'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#727876'
  outline-variant: '#c2c8c5'
  surface-tint: '#51625e'
  primary: '#061614'
  on-primary: '#ffffff'
  primary-container: '#1b2b28'
  on-primary-container: '#81938f'
  inverse-primary: '#b8cac6'
  secondary: '#596057'
  on-secondary: '#ffffff'
  secondary-container: '#dbe2d6'
  on-secondary-container: '#5e655b'
  tertiary: '#1d1100'
  on-tertiary: '#ffffff'
  tertiary-container: '#372405'
  on-tertiary-container: '#a78a61'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e6e1'
  primary-fixed-dim: '#b8cac6'
  on-primary-fixed: '#0e1e1c'
  on-primary-fixed-variant: '#3a4a47'
  secondary-fixed: '#dee5d9'
  secondary-fixed-dim: '#c2c9bd'
  on-secondary-fixed: '#171d16'
  on-secondary-fixed-variant: '#424940'
  tertiary-fixed: '#ffddb0'
  tertiary-fixed-dim: '#e2c195'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#594320'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  vertical-rule-width: 1px
---

## Brand & Style

The design system embodies the concept of the **Modern Groomer’s Atelier**—a space where high-fashion editorial aesthetics meet the precision of artisanal craftsmanship. It is designed for an elite clientele who view pet grooming not as a chore, but as an essential lifestyle choice for their companions. 

The visual language is **bespoke and meticulous**. It balances the organic warmth of a botanical sanctuary with the structured elegance of a luxury fashion house. The interface avoids "cute" or "generic" tropes common in the pet industry, opting instead for a sophisticated, editorial-first approach that conveys trustworthiness through excellence.

The style is a hybrid of **Modern Minimalism** and **Tactile Luxury**, utilizing generous white space (represented by the Bone background) and sharp vertical dividers to create a sense of organized, high-end service.

## Colors

The palette, **Deep Botanical & Bone**, is grounded in nature yet elevated through high-contrast pairing.

- **Deep Forest Green (#1B2B28):** Used for primary typography and structural elements. It provides an anchor of authority and depth.
- **Sage Mist (#D9E0D4):** A soft, calming secondary color used for large surface areas, subtle callouts, and grounding UI elements.
- **Burnished Gold (#C8A97E):** Reserved for high-value actions, accents, and premium signals. It should be used sparingly to maintain its "limited edition" feel.
- **Warm Bone (#FDFCF8):** The foundational canvas. It is warmer than pure white, providing a luxurious, "heavy-paper" feel to the interface.

## Typography

Typography is the primary vehicle for the "Editorial" feel. This design system pairs the dramatic contrast of **Playfair Display** with the utilitarian precision of **Inter**.

- **Headlines:** Use Playfair Display for all major headings. Large display sizes should use a slight negative letter-spacing to feel more cohesive and "custom-set."
- **Body:** Use Inter for all long-form text. To achieve the "wide-tracked" premium look, a global letter-spacing of `0.02em` to `0.05em` is applied to body text, ensuring legibility and an airy feel.
- **Labels:** Small labels and navigation items should be set in Inter uppercase with generous tracking (`0.15em`) to mimic high-end fashion branding.

## Layout & Spacing

This design system utilizes an **Offset Fixed Grid** model. While the content is contained within a max-width, elements are intentionally offset from the standard 12-column alignment to create visual tension and an "atelier" vibe.

- **Vertical Rules:** Use 1px hairlines in `Deep Forest Green` (at 10-15% opacity) to separate columns or content blocks. These should extend past the content to create a blueprint or "craftsmanship" feel.
- **The Offset:** Images and cards should occasionally "break" the gutter, shifting slightly left or right of the vertical rules to mimic editorial magazine layouts.
- **Rhythm:** A 4px baseline unit is used. Margins on desktop are intentionally wide (64px+) to allow the Warm Bone background to frame the content like a gallery wall.

## Elevation & Depth

To maintain the "Modern Atelier" feel, depth is created through **Tonal Layering** and **Subtle Hairlines** rather than heavy shadows.

- **Surface Tiers:** Use Sage Mist surfaces over the Bone background to create "inset" sections (like a drawer or a workstation).
- **Hairline Outlines:** Elements like cards and buttons use a 1px solid border in the primary color at low opacity (20%) instead of shadows.
- **Soft Ambient Shadow:** For high-priority floating elements (like a booking modal), use a single, very soft shadow: `0px 20px 40px rgba(27, 43, 40, 0.05)`. The shadow is tinted with the Forest Green primary color to keep it natural.
- **Watermark Layer:** A geometric paw/shears motif is used as a fixed-position background element at 3% opacity, appearing as if it were a custom-pressed watermark in high-grade stationery.

## Shapes

The shape language is **Soft yet Structured**. We avoid sharp 90-degree corners to maintain a "warm and trustworthy" feel, but avoid full rounding to keep the "elite and professional" edge.

- **Corners:** Use a consistent `0.25rem` (4px) radius for most UI components (cards, inputs). 
- **Buttons:** Buttons should maintain this soft corner (not pill-shaped) to feel more architectural and aligned with the grid rules.
- **Icons:** Use geometric, thin-stroke icons that echo the vertical rules and the artisanal shears motif.

## Components

- **Primary Button:** Solid Deep Forest Green with Burnished Gold text or a Gold bottom-border. Text is Inter Medium, uppercase, wide-tracked.
- **Secondary Button:** Outlined (1px Forest Green) with a "Warm Bone" fill.
- **Editorial Cards:** No visible borders; depth is created via a subtle Sage Mist background change on hover and the offset placement against vertical rules.
- **Input Fields:** Bottom-border only (1px Forest Green) to mimic a bespoke form or ledger. Labels are always `label-caps`.
- **Chips/Badges:** Small, Sage Mist backgrounds with Forest Green text. No border-radius larger than 4px.
- **Booking Progress:** A thin vertical rule on the left side of the screen with a Burnished Gold dot indicating the current step.
- **Image Treatment:** All pet photography should have a slight "matte" finish with a warm tint to sit harmoniously on the Bone background.
