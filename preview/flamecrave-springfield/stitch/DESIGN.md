I've designed a bespoke, editorial-grade homepage for **FlameCrave** that captures the raw energy and craftsmanship of live-fire cooking.

### Design Highlights:
*   **Visual Identity**: Built on a "Smoldering Ember" palette—deep charcoals and vibrant oranges—paired with high-contrast serif typography to create a premium, "built-on-fire" feel.
*   **Editorial Layout**: Moved away from generic templates in favor of intentional density, asymmetric grids, and oversized headers that guide the eye through the FlameCrave story.
*   **Signature Motif**: Used thick charred borders and high-impact typographic blocks (e.g., "THE HEART OF THE HEAT") to establish a memorable, authoritative brand presence.
*   **Functionality**: Integrated a custom visit section with the required map placeholder, a high-contrast contact form, and a responsive navigation system optimized for desktop immersion while maintaining 375px compatibility.

The site is ready for production with semantic HTML, custom CSS properties for easy theme management, and smooth interaction states.

How does this visual direction feel for the FlameCrave brand? We can refine the color balance or adjust the density of the "Our Story" section if you'd like.

---

---
name: Smolder & Hearth
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e6beb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ad897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59e'
  primary: '#ffb59e'
  on-primary: '#5e1700'
  primary-container: '#ff571a'
  on-primary-container: '#521300'
  inverse-primary: '#ae3200'
  secondary: '#eabcb8'
  on-secondary: '#462827'
  secondary-container: '#5f3e3c'
  on-secondary-container: '#d7aaa7'
  tertiary: '#c6c7c2'
  on-tertiary: '#2f312e'
  tertiary-container: '#90918d'
  on-tertiary-container: '#282a27'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#852400'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#eabcb8'
  on-secondary-fixed: '#2e1413'
  on-secondary-fixed-variant: '#5f3e3c'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  block-gap: 120px
---

## Brand & Style
The design system is rooted in the visceral experience of live-fire cooking—smoke, cast iron, and raw heat—balanced with the sophisticated restraint of a high-end culinary publication. It targets a discerning local audience in Springfield who values both artisanal craftsmanship and unpretentious quality. 

The aesthetic is **Editorial Brutalism**: it utilizes the structural integrity of heavy borders and asymmetrical layouts, softened by organic, grainy textures and a sophisticated "Smoldering Ember" palette. The interface should feel immersive and tactile, evoking the sensory weight of a physical magazine. Every interaction should feel intentional and authoritative, moving away from generic digital patterns toward a layout that celebrates negative space and bold typographic statements.

## Colors
The palette is dominated by the tension between "Charcoal" and "Ember." 

- **Primary (Vibrant Ember Orange):** Used sparingly for high-impact calls to action, active states, and critical highlights. It represents the heat of the flame.
- **Secondary (Burnt Umber):** Acts as a transitional mid-tone for decorative elements, secondary buttons, and subtle backgrounds to prevent the UI from feeling too stark.
- **Tertiary (Soft Bone White):** Used primarily for typography and high-contrast containers. It provides the "paper" feel against the dark backgrounds.
- **Neutral (Deep Charcoal):** The foundation of the system. It should be used for the primary background and structural "charred" elements.

Maintain a dark-mode default to emphasize the "fire in the dark" atmosphere. Avoid pure blacks; use the Deep Charcoal to maintain depth and allow for grain textures to remain visible.

## Typography
The typography follows a high-contrast editorial logic. 

**Playfair Display** serves as the voice of craftsmanship. Use it for oversized headlines and expressive quotes. In display settings, use the heaviest weights to mimic the impact of a magazine masthead.

**Hanken Grotesk** provides the functional balance. Its wide aperture and clean geometry ensure legibility for menus and body descriptions. Use the "label-caps" style for categories, navigation items, and small metadata to maintain an organized, catalog-like appearance.

Strictly adhere to the scale: display headings should feel "too big" for the screen, occasionally overlapping image boundaries to reinforce the editorial motif.

## Layout & Spacing
This design system utilizes a **Fixed Grid** with intentional asymmetry. 

- **Grid:** Use a 12-column grid for desktop. Elements should frequently break the grid or be offset by one column to create a dynamic, non-linear reading flow.
- **Rhythm:** Spacing is generous. Vertical "Block Gaps" (120px+) should be used between major sections to allow the brand photography and "charred" motifs to breathe.
- **Asymmetry:** Pair large, full-bleed images on one side with narrow, indented text columns on the other. Use "ghost" columns (empty grid space) to create focal points.
- **Mobile:** Transition to a single-column fluid layout with 20px margins, maintaining the large typographic scale for headlines.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Bold Borders** rather than traditional shadows.

1.  **The Base:** Deep Charcoal (#121212) with a subtle, low-opacity grain overlay (5-10% opacity) to mimic smoke or cast iron.
2.  **The Stroke:** Use 2px or 3px solid borders in Soft Bone White or Burnt Umber to define sections. This "charred border" look provides structure without needing shadows.
3.  **Tonal Stacking:** Elevated containers (like cards or modals) should use a slightly lighter shade of Charcoal or a semi-transparent Burnt Umber fill. 
4.  **Glassmorphism:** Use sparingly for navigation overlays. A heavy backdrop blur (20px+) with a dark tint helps maintain the "smoky" atmosphere while keeping content legible.

## Shapes
The shape language is strictly **Sharp (0px)**. 

To evoke the precision of a chef's knife and the ruggedness of a cast-iron hearth, all buttons, containers, and image frames must have hard 90-degree corners. Rounded corners are prohibited as they conflict with the brutalist, editorial direction. 

Asymmetric accents (e.g., a single corner of an image block being clipped or an offset border frame) are encouraged to add visual interest while maintaining the sharp-edge philosophy.

## Components

- **Buttons:** Primary buttons are solid Vibrant Ember Orange with Sharp corners and Black text. Secondary buttons are "Ghost" style with a 2px Soft Bone White border and uppercase Hanken Grotesk labels.
- **Cards:** Use "The Framed Card"—a sharp-edged container with a 1px Burnt Umber border. Images within cards should have a grainy filter applied. 
- **Input Fields:** Minimalist design. A single 2px bottom border in Soft Bone White. The label sits above in the "label-caps" typographic style. Focus state changes the border to Ember Orange.
- **Chips/Badges:** Small, rectangular blocks with solid Burnt Umber backgrounds and Bone White text. Used for "Spice Level" or "Local Source" tags.
- **Lists:** Menu items should be presented as a high-contrast list with the item name in Playfair Display (Left) and the price in Hanken Grotesk (Right), separated by a subtle dotted leader or a thick "charred" horizontal rule.
- **Featured Block:** A signature component combining a large, grainy photograph, an overlapping "Playfair Display" headline, and a thick 4px border on only one side (left or bottom) to anchor the content.
