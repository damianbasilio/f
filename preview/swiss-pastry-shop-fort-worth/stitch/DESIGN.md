I've designed a bespoke, editorial-grade homepage for Swiss Pastry Shop that captures its heritage and artisanal excellence.

### Design Highlights:
- **Visual Identity:** I used the "Heritage Editorial" system, which pairs deep cocoa tones with buttermilk cream to create a warm, sophisticated palette that feels both traditional and premium.
- **Editorial Layout:** Instead of standard grids, I used asymmetrical compositions and generous whitespace to create a sense of curated quality, much like a high-end food magazine.
- **Signature Sections:**
    - **Cinematic Hero:** Highlighting their Fort Worth roots since 1973 with bold, layered typography.
    - **Curated Masterpieces:** An offerings section that showcases signature cakes and pastries through an elegant, non-traditional spread.
    - **Heritage of Excellence:** A storytelling block that emphasizes the precision and passion behind their Swiss-inspired craft.
- **Functionality:** The site includes a fully functional navigation system, a custom contact form, and the requested map integration slot in the visit section.

The design is fully responsive and production-ready, ensuring a memorable first impression across all devices.

---

---
name: Heritage Editorial
colors:
  surface: '#fff8f5'
  surface-dim: '#e5d8ce'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e7'
  surface-container: '#faebe1'
  surface-container-high: '#f4e6db'
  surface-container-highest: '#eee0d6'
  on-surface: '#211a14'
  on-surface-variant: '#4f453f'
  inverse-surface: '#372f28'
  inverse-on-surface: '#fceee4'
  outline: '#81756e'
  outline-variant: '#d2c4bc'
  surface-tint: '#705a4c'
  primary: '#26170c'
  on-primary: '#ffffff'
  primary-container: '#3d2b1f'
  on-primary-container: '#ac9181'
  inverse-primary: '#dec1af'
  secondary: '#605e59'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2db'
  on-secondary-container: '#66645f'
  tertiary: '#330e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#551d00'
  on-tertiary-container: '#d97f56'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbddca'
  primary-fixed-dim: '#dec1af'
  on-primary-fixed: '#28180d'
  on-primary-fixed-variant: '#574335'
  secondary-fixed: '#e6e2db'
  secondary-fixed-dim: '#c9c6c0'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#484742'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#76320f'
  background: '#fff8f5'
  on-background: '#211a14'
  surface-variant: '#eee0d6'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
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
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  hairline: 1px
---

## Brand & Style
The brand personality reflects the intersection of Texan hospitality and Swiss precision. This design system evokes an emotional response of quiet luxury, artisan heritage, and culinary excellence. 

The design style is **Editorial Minimalism** with a **Tactile** edge. It prioritizes high-end food photography as the primary interface element, treating digital screens like the pages of a premium lifestyle monograph. The aesthetic rejects standard "app-like" patterns in favor of asymmetric compositions, hairline dividers, and an obsession with white space that frames the artisan nature of the pastry work.

## Colors
The palette is rooted in the organic ingredients of the patisserie. 

- **Buttermilk Cream (#FCF8F1)**: Serves as the primary canvas, replacing pure white to provide a warmer, more sophisticated background that feels like premium paper stock.
- **Deep Cocoa (#3D2B1F)**: The primary ink color for typography and structural elements, providing high contrast and a grounded, traditional feel.
- **Burnt Sienna (#A0522D)**: Used sparingly as an accent for call-to-actions, highlight notations, or subtle interactive states, evoking the warmth of a wood-fired oven.
- **Neutral (#70665E)**: Used for secondary text and hairline rules to maintain hierarchy without competing with the photography.

## Typography
The typography system relies on the interplay between the authoritative, high-contrast **Playfair Display** and the functional, neutral **Inter**. 

Headlines should utilize generous leading and occasional italicization for emphasis. Use `label-caps` for navigation and small headers to create a disciplined, architectural feel. Body text is set with ample line height to ensure maximum readability against the cream background.

## Layout & Spacing
This design system utilizes an **Asymmetrical Fluid Grid**. 

- **Composition**: Avoid centered, symmetrical blocks. Place text in the first 5 columns and imagery in the latter 7, or allow images to bleed off the edge of the screen to create a sense of scale.
- **Hairlines**: Use 1px rules in `Deep Cocoa` (at 15% opacity) to separate sections horizontally and vertically. These lines should often extend to the edge of the viewport.
- **Margins**: Exceptionally wide margins on desktop (80px+) to force focus toward the center, creating a "gallery" effect.
- **Layering**: Elements should overlap. A headline might partially cover the edge of a photograph to create depth and a custom, hand-laid feel.

## Elevation & Depth
In keeping with the editorial theme, depth is achieved through **Tonal Layering** rather than shadows. 

- **Surface Levels**: Use subtle shifts between `Buttermilk Cream` and a slightly darker taupe for container backgrounds.
- **No Shadows**: Avoid drop shadows entirely. Physicality is expressed through overlapping elements and high-quality "macro" photography that possesses its own natural depth of field.
- **Framing**: Use inset borders or "frame-within-a-frame" techniques for product showcases, mimicking the look of a matted photograph in an art gallery.

## Shapes
The shape language is strictly **Sharp (0)**. 

Every element—from buttons and input fields to image containers—uses 90-degree corners. This reinforces the precision of Swiss craftsmanship and the architectural heritage of the brand. Rectilinear containers provide a rigid structure that contrasts beautifully with the organic, soft shapes of pastries and cakes shown in photography.

## Components
- **Buttons**: Primary buttons are solid `Deep Cocoa` with `Buttermilk Cream` text in `label-caps`. Secondary buttons are "Ghost" style with a 1px `Deep Cocoa` border and no fill.
- **Imagery**: Product displays must avoid the "card" look. Use varying aspect ratios (e.g., a tall 2:3 next to a wide 16:9) to create a rhythmic, magazine-style flow.
- **Input Fields**: Minimalist underlines (1px hairline) instead of boxed enclosures. Labels are positioned above the line in `label-caps`.
- **Lists/Menus**: Use thin horizontal rules between items. Prices should be right-aligned in `Playfair Display` to elevate the menu items.
- **The "Heritage" Seal**: A specific component for the brand's founding date or logo, often placed as a floating element that overlaps two different background sections.
