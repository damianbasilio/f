I've completed the bespoke landing page for Cafe Agora. 

The design, titled **Aegean Heritage**, moves away from standard food truck templates to create a premium, editorial feel that emphasizes the artisanal quality of the food. 

### Key Design Decisions:
- **Visual Motif**: I used a "deckle-edge" jagged divider and asymmetric grid layouts to give the site a handcrafted, boutique feel.
- **Color Story**: A sophisticated palette of **Aegean Blue** and **Warm Parchment** provides a high-contrast, clean backdrop that makes the food photography pop.
- **Typography**: I paired **Playfair Display** (for that bold, high-end editorial look) with a spacious sans-serif to ensure readability and modern functionality.
- **Section Architecture**: Instead of a generic list, the "Offerings" section uses an overlapping card layout, and the "Visit" section includes a dedicated interactive-ready map slot as requested.

The code is fully responsive, semantic, and production-ready with custom form validation UI and smooth-scroll navigation.

---

---
name: Aegean Heritage
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
  on-surface-variant: '#44474e'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#74777e'
  outline-variant: '#c4c6cf'
  surface-tint: '#4a5f81'
  primary: '#000d22'
  on-primary: '#ffffff'
  primary-container: '#0a2342'
  on-primary-container: '#768baf'
  inverse-primary: '#b2c7ef'
  secondary: '#924a37'
  on-secondary: '#ffffff'
  secondary-container: '#fda18a'
  on-secondary-container: '#783525'
  tertiary: '#080e0b'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e2420'
  on-tertiary-container: '#858b86'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b2c7ef'
  on-primary-fixed: '#021c3a'
  on-primary-fixed-variant: '#324768'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a2'
  on-secondary-fixed: '#3b0901'
  on-secondary-fixed-variant: '#753322'
  tertiary-fixed: '#dee4de'
  tertiary-fixed-dim: '#c2c8c2'
  on-tertiary-fixed: '#171d19'
  on-tertiary-fixed-variant: '#424844'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 80px
---

## Brand & Style
The design system embodies the "Cafe Agora" identity: a premium, bespoke editorial experience that bridges ancient Greek heritage with modern food truck culture. The aesthetic leans into **Minimalist Editorial** with **Tactile** influences, focusing on intentional asymmetry and high-quality whitespace to evoke the feeling of a printed Mediterranean travelogue.

The target audience seeks authenticity and artisanal quality. The UI must feel curated rather than industrial, using textured paper overlays and subtle geometric motifs to create a warm, "slow-food" digital presence in a fast-paced mobile environment.

## Colors
The palette is rooted in the natural landscape of the Cyclades. 
- **Deep Aegean Blue (#0A2342):** Used for primary navigation, high-level headers, and critical call-to-action backgrounds to establish authority and depth.
- **Sun-bleached Terracotta (#E38B75):** Used as an accent color for highlights, active states, and secondary buttons, providing a warm, human contrast to the blue.
- **Warm Parchment (#F9F7F2):** The primary background color. It serves as a textured canvas, softer and more premium than pure white.
- **Charcoal Olive (#2D332F):** Reserved for body text and subtle iconography, offering high legibility without the harshness of true black.

## Typography
Typography is the primary vehicle for the brand’s "Bespoke" feel. **Playfair Display** provides high-contrast elegance for storytelling and menu categories. **Inter** balances this with functional clarity for descriptions and pricing. 

Use `label-caps` for eyebrows and small metadata to maintain an organized, editorial structure. Ensure generous line-height in body text to reflect the airy, Mediterranean personality.

## Layout & Spacing
The layout follows a **Fluid Grid** model with an emphasis on asymmetric compositions. While components align to a standard 12-column grid on desktop, images and text blocks should occasionally break the grid or use staggered offsets to mimic a magazine layout.

- **Mobile:** 4-column grid with 20px side margins. 
- **Desktop:** 12-column grid with 24px gutters.
- **Vertical Spacing:** Use large gaps (`section-gap`) between content blocks to allow the "Warm Parchment" background to act as a visual breather.

## Elevation & Depth
This design system avoids heavy shadows, opting instead for **Tonal Layers** and **Low-contrast Outlines**. 
- **Surfaces:** Depth is created by placing Warm Parchment cards over a slightly darker "Sand" or "Olive" tinted background.
- **Outlines:** Use 1px borders in `Deep Aegean Blue` at 10-15% opacity to define sections without breaking the organic feel.
- **Overlays:** Use a subtle "grain" or "paper texture" SVG filter on the main background to reinforce the artisanal, tactile nature of the brand.

## Shapes
Shapes are generally **Soft** to keep the interface approachable. However, decorative elements like image frames may utilize a "deckle-edge" (rough, hand-torn paper effect) on one or two sides to emphasize the artisanal theme. Standard buttons and input fields should maintain a consistent `0.25rem` radius to feel precise yet friendly.

## Components
- **Buttons:** Primary buttons use a solid `Deep Aegean Blue` fill with white `Inter` text. Secondary buttons use a "ghost" style with a 1px `Terracotta` border.
- **Cards:** Product and Menu cards should have no visible border-radius or shadows; instead, use a 1px soft stroke and asymmetric text alignment (e.g., price top-right, title bottom-left).
- **Dividers:** Use custom Mediterranean geometric patterns (thin, repeated line-work) instead of standard solid lines to separate menu sections.
- **Chips/Tags:** Use `Terracotta` at 10% opacity for backgrounds with `Terracotta` text for dietary labels (e.g., "Vegan", "Gluten-Free").
- **Inputs:** Minimalist bottom-border only or very light four-sided borders to keep the forms feeling light and non-intrusive.
- **Interactive Motif:** Use a "Stamp" or "Wax Seal" style component for special offers or "Local Favorite" badges.
