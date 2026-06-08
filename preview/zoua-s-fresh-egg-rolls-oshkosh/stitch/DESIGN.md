I have designed a bespoke, award-winning-caliber landing page for **Zoua’s Fresh Egg Rolls**. 

### Design Rationale
- **Editorial Identity**: I moved away from common local-business templates, opting for a high-contrast serif typeface and asymmetrical layouts that feel like a premium food magazine.
- **Strategic Color Story**: The palette uses "Golden Crisp" (amber) to evoke the perfect fry and "Fresh Verdant" (green) to emphasize the quality of ingredients, all set against a clean, "Parchment" off-white background for a craft feel.
- **Unique Visual Motif**: I’ve integrated subtle "rice paper" textures and a signature "Z" emblem to create a memorable brand mark that anchors the heritage storytelling.
- **Conversion-Focused Layout**: The site flows from brand story to menu highlights, finishing with a clear "Visit the Kitchen" section and an intuitive contact form for catering inquiries.

The resulting code is a production-ready, semantic HTML document featuring fully responsive layouts, smooth scroll interactions, and CSS custom properties for easy maintenance.

Would you like to explore a **mobile-specific version** of this design, or perhaps **add some subtle scroll animations** to enhance the premium feel?

---

---
name: Artisanal Culinary Craft
colors:
  surface: '#fbf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2f7'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e6'
  on-surface: '#1b1b1e'
  on-surface-variant: '#554336'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#887364'
  outline-variant: '#dbc2b0'
  surface-tint: '#904d00'
  primary: '#8d4b00'
  on-primary: '#ffffff'
  primary-container: '#b15f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb77d'
  secondary: '#006d30'
  on-secondary: '#ffffff'
  secondary-container: '#92f5a4'
  on-secondary-container: '#007233'
  tertiary: '#5b5c59'
  on-tertiary: '#ffffff'
  tertiary-container: '#747571'
  on-tertiary-container: '#fefdf8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#95f8a7'
  secondary-fixed-dim: '#79db8d'
  on-secondary-fixed: '#00210a'
  on-secondary-fixed-variant: '#005323'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c7c7c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#464744'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e6'
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
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The brand personality is rooted in the intersection of heritage and modern culinary excellence. It evokes the feeling of a high-end, chef-led pop-up: intentional, transparent, and deeply connected to the ingredients. The target audience values authenticity, craft, and the narrative behind their food.

The design style is **Editorial Minimalism**. It prioritizes high-fidelity food photography and generous whitespace to allow the product's texture and color to lead. Visual interest is generated through intentional asymmetry—placing elements off-center to create a dynamic, rhythmic flow—and the use of subtle rice-paper textures that add tactile depth without cluttering the interface. Hand-drawn line art provides a human, "sketched in the kitchen" feel that balances the precision of the typography.

## Colors
The palette is inspired by the transition from raw ingredients to the finished, golden-fried product.

- **Golden Crisp (#D97706):** Used for primary calls to action, price points, and highlights that represent the perfect fry.
- **Fresh Verdant (#15803D):** Used for health-focused badges, ingredient callouts, and secondary accents to denote freshness.
- **Ink (#18181B):** The foundation for all typography and structural lines, providing a sharp, authoritative contrast against the background.
- **Parchment (#FDFCF7):** The global background color. It is warmer than pure white, mimicking the natural tone of culinary paper and unbleached rice wraps.

## Typography
The typographic system relies on a high-contrast pairing. **Playfair Display** provides an editorial, sophisticated voice for storytelling and product naming. It should be used with tight leading and slight negative tracking in larger sizes to emphasize its dramatic strokes.

**Hanken Grotesk** serves as the functional workhorse. It is a clean, contemporary sans-serif that ensures legibility for menus, descriptions, and UI controls. For micro-copy and metadata (like calorie counts or prep time), use `label-caps` to provide a clear visual hierarchy and a modern, "packaged goods" aesthetic.

## Layout & Spacing
This design system utilizes a **12-column fixed grid** for desktop and a **4-column fluid grid** for mobile. 

To achieve the "editorial" look, do not center-align all content. Instead, use "The Power of the Void"—leave large gutters or entire columns empty to draw focus to high-resolution imagery. Spacing should be expansive; section gaps of 120px on desktop create a sense of luxury and unhurried browsing. Use a baseline 8px rhythm for internal component padding to maintain structural integrity.

## Elevation & Depth
Depth is created through **Tonal Layers** rather than shadows. Surfaces should feel flat and physical. 

1.  **Base:** The Parchment background (#FDFCF7) with a subtle grain texture.
2.  **Mid-layer:** Semi-transparent "Rice Paper" overlays (White @ 60% opacity) with a `backdrop-filter: blur(8px)` used for floating menus or hover states.
3.  **High-layer:** Cards and modals are defined by 1px solid Ink (#18181B) borders. 

Avoid drop shadows entirely. If depth is required, use a "Hard Offset" shadow: a solid block of color (Golden Crisp or Ink) shifted 4px down and 4px right from the element.

## Shapes
The shape language is strictly **Sharp (0)**. Everything from buttons to image containers uses 90-degree corners. This evokes the precision of a chef's knife and the structure of architectural editorial layouts. 

The only exceptions are "Ingredient Illustration" containers, which may use organic, irregular masks to mimic the natural shape of fresh produce.

## Components
- **Buttons:** Primary buttons are solid Ink (#18181B) with White text, using the `label-caps` style. Hover states shift to Golden Crisp (#D97706). Secondary buttons are transparent with a 1px Ink border.
- **Input Fields:** Minimalist design—only a bottom border (1px Ink). Labels sit above in `label-caps`. Focus state thickens the bottom border to 2px.
- **Cards:** Product cards use a "Bleed" layout where the food photography takes up 100% of the card width, with text content placed asymmetrically below it. No borders on card containers unless they are interactive.
- **Chips/Badges:** Small, rectangular tags using the Fresh Verdant (#15803D) color for "Vegan" or "Gluten-Free" markers.
- **Lists:** Menu items are separated by a thin 0.5px Ink rule. Prices are always right-aligned in `headline-sm`.
- **Illustrations:** Use the "Rice Paper" texture as a background for hand-drawn line art of ingredients like ginger, scallions, and chili flakes. These should be placed overlapping the edges of containers for an organic feel.
