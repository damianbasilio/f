I've completed the bespoke homepage for **The Culture Café**. 

This design departs from standard local-business templates in favor of a **premium editorial aesthetic**. I’ve utilized a high-contrast palette of Deep Onyx and Silk Cream, accented by Burnished Terracotta, to reflect the café's soulful and sophisticated brand.

### Key Design Decisions:
- **Typographic Hierarchy:** Used a high-contrast serif for headings to evoke a magazine-style feel, paired with a modern sans-serif for legibility.
- **Asymmetrical Layout:** The offerings and 'Our Story' sections use offset grids and overlapping elements to create a more dynamic, memorable browsing experience.
- **Rule Lines & Motifs:** Thin, elegant borders (rule lines) are used throughout to define space without adding bulk, maintaining a clean, open feel.
- **Production-Ready Foundation:** The site is built with semantic HTML, includes a dedicated map slot for your future integration, and features custom form validation styling.

You can now review the full layout on the canvas. Does this visual direction feel aligned with the atmosphere of the café, or should we adjust the balance of colors and whitespace?

---

---
name: The Culture Café
colors:
  surface: '#fdf9f4'
  surface-dim: '#ddd9d5'
  surface-bright: '#fdf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ee'
  surface-container: '#f1ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e6e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#444748'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0eb'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#97472a'
  on-secondary: '#ffffff'
  secondary-container: '#ff9975'
  on-secondary-container: '#772f13'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#161f00'
  on-tertiary-container: '#7b8a4d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#793015'
  tertiary-fixed: '#d9eaa3'
  tertiary-fixed-dim: '#bdce89'
  on-tertiary-fixed: '#161f00'
  on-tertiary-fixed-variant: '#3e4c16'
  background: '#fdf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e6e2dd'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
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
spacing:
  unit: 4px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  xxl: 120px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The visual identity for the design system is rooted in the concept of "The Modern Archive"—a blend of high-end editorial publishing and soulful, tactile hospitality. It targets a sophisticated audience that values intentionality, cultural depth, and the ritual of the coffee house.

The style is **Editorial Minimalism** with **Tactile/Skeuomorphic** accents. It leverages high-contrast layouts reminiscent of premium fashion and architecture magazines. The emotional response is one of quiet confidence, warmth, and intellectual curiosity. Design elements should feel curated rather than mass-produced, utilizing generous whitespace and deliberate asymmetry to create a sense of rhythm and discovery.

## Colors

The palette is a high-contrast, earth-toned selection designed to feel both grounded and luxurious.

- **Deep Onyx (Primary):** Used for primary text, thin rule lines, and deep-mode surfaces. It provides the "ink" for the editorial aesthetic.
- **Silk Cream (Neutral):** The primary canvas. This is a warm, off-white that prevents the high contrast from feeling clinical, adding a paper-like quality.
- **Burnished Terracotta (Secondary):** Used for soulful accents, primary calls to action, and highlighting heritage elements.
- **Matcha Sage (Tertiary):** A sophisticated botanical accent used for secondary UI elements, organic shapes, or status indicators that require a softer touch.

## Typography

This design system utilizes a high-contrast typographic pairing to reinforce its editorial roots.

- **Editorial Serif (Bodoni Moda):** Used for all headlines and display text. It features dramatic contrast between thick and thin strokes, evoking luxury and authority.
- **Modern Sans (DM Sans):** A wide-set, geometric sans-serif used for body copy and labels. Its open counters and clean lines provide a contemporary balance to the classic serif, ensuring high readability across digital interfaces.

**Rules for Use:**
- Display text should use tight letter-spacing to emphasize the verticality of the serif.
- Label text is always uppercase with generous tracking (letter-spacing) to act as a structural anchor in the layout.

## Layout & Spacing

The layout philosophy follows an **Editorial Grid** model. It uses a 12-column grid for desktop with intentionally asymmetrical compositions—for example, a hero image might span 7 columns while the text occupies a narrow 4-column block on the opposite side.

**Key Layout Principles:**
- **Asymmetric Balance:** Avoid centering everything. Use large offsets to create visual tension and interest.
- **Overlapping Elements:** Typography should occasionally overlap images or rule lines by small margins (using the `md` or `lg` spacing units) to create depth.
- **Rule Lines:** Use 0.5pt to 1pt "Deep Onyx" borders to separate sections or frame content, mimicking a printed broadsheet or magazine.
- **Whitespace:** Treat whitespace as a primary design element. Use `xl` and `xxl` units between major content sections to allow the brand to "breathe."

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Subtle Textures** rather than heavy shadows.

- **Surfaces:** Depth is created by stacking "Silk Cream" surfaces onto "Onyx Black" backgrounds or vice-versa. 
- **Film Grain:** A subtle, low-opacity noise overlay is applied to all primary surfaces to give a tactile, paper-like feel.
- **Rule Lines:** Instead of shadows, use thin borders (Rule Lines) to define the boundaries of cards and menus. 
- **Overlays:** When modals or menus appear, use a high-blur backdrop filter (glassmorphism) with a "Deep Onyx" tint at 20% opacity to maintain the sophisticated mood.

## Shapes

The design system uses a **Sharp (0)** roundedness strategy. All containers, buttons, and input fields feature 90-degree corners. This reinforces the architectural and editorial precision of the brand.

Circular shapes should only be used for organic elements like specific "seal" style badges or profile imagery to provide a singular point of contrast against the rigid, grid-based rectangular forms.

## Components

### Buttons
Primary buttons are solid "Deep Onyx" with "Silk Cream" text in `label-caps`. They are strictly rectangular. Secondary buttons use a 1px border with no fill.

### Cards
Cards are defined by thin 1px rule lines rather than shadows. They should have generous internal padding (`md` or `lg`) to keep the editorial feel. Titles within cards use `headline-md`.

### Input Fields
Inputs are minimal: a single bottom border in "Deep Onyx" with `label-caps` for the floating label. There is no background fill.

### Chips & Tags
Chips are small, rectangular boxes with "Silk Cream" backgrounds and a 1px "Deep Onyx" border. They use `label-caps` typography at a smaller scale.

### Lists
Menu lists or ingredient lists should use "Matcha Sage" or "Burnished Terracotta" bullet points—or better, thin horizontal rule lines between each item—to maintain the magazine index aesthetic.

### Signature Motif
"The Culture Seal"—a circular typographic element—should be used as a floating decorative component, often overlapping the edge of a section or a large image.
