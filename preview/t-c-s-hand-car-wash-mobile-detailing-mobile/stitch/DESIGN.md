I've designed a bespoke, editorial-grade homepage for **T.C.'s Hand Car Wash & Mobile Detailing**. 

This design breaks away from generic local-business templates by adopting an **Editorial Magazine Split** layout. It features:

- **Asymmetric Visual Hierarchy:** An oversized serif headline overlaps high-fidelity automotive photography to establish an immediate "Premium Spa" feel.
- **Obsidian & Slate Palette:** A sophisticated dark theme accented with a "Safety Orange" for high-intent call-to-actions, signaling both precision and professional care.
- **Bespoke "Detail Menu":** Instead of a standard card grid, services are presented as a numbered editorial list with fine rule lines, emphasizing the artisan nature of the work.
- **Trust-Focused Credibility:** A minimalist statistics bar highlighting years of experience and local reputation using intentional whitespace.
- **Production-Ready Structure:** Fully responsive layout with semantic HTML, CSS custom properties, and the required interactive elements like the `#visit` map slot and a "Secure Your Slot" reservation form.

The result is a digital presence that positions T.C.'s not just as a car wash, but as a destination for automotive enthusiasts in Mobile, AL.

---

---
name: Obsidian & Slate Detailers
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#0f0f0f'
  on-primary-container: '#7d7b7b'
  inverse-primary: '#5f5e5e'
  secondary: '#b6c8df'
  on-secondary: '#213243'
  secondary-container: '#37485b'
  on-secondary-container: '#a5b7cd'
  tertiary: '#ffb4a4'
  on-tertiary: '#630e00'
  tertiary-container: '#270200'
  on-tertiary-container: '#e14220'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#d2e4fb'
  secondary-fixed-dim: '#b6c8df'
  on-secondary-fixed: '#0a1d2d'
  on-secondary-fixed-variant: '#37485b'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a4'
  on-tertiary-fixed: '#3d0600'
  on-tertiary-fixed-variant: '#8c1800'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 92px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  column-gap: 32px
---

## Brand & Style

The brand identity centers on the "Editorial Magazine Split," positioning automotive detailing as a high-end craft rather than a utility. The visual narrative targets a discerning clientele who views their vehicles as investments. The aesthetic is characterized by an asymmetric grid system, dramatic whitespace, and a high-contrast color strategy that evokes the feeling of a luxury automotive journal.

The style is **Minimalist-Editorial**. It leverages heavy typographic hierarchy, thin rule lines to signify precision, and a "split" layout philosophy where dark, moody imagery contrasts against structured, informative sections. The emotional response is one of trust, meticulousness, and premium exclusivity.

## Colors

The palette is anchored in **Deep Obsidian (#0F0F0F)**, providing a sophisticated, "dark mode" foundation that reflects the depth of a fresh paint correction. **Slate Blue (#2D3E50)** acts as a secondary structural color, used for containers, subtle gradients, and depth layers. 

**Safety Orange (#FF5733)** is the singular high-contrast accent. It is reserved exclusively for primary calls to action, status indicators, and critical navigational cues, mimicking the high-visibility gear used in professional detailing environments. Backgrounds should remain predominantly Obsidian or Slate, with **Neutral Off-White (#F5F5F5)** reserved for body text to ensure maximum readability against the dark canvas.

## Typography

The typography system relies on the tension between the classic elegance of **Playfair Display** and the modern, wide-set geometry of **Montserrat**. 

- **Headlines:** Use Playfair Display with tight tracking for a prestigious, editorial feel. Large display sizes should often be used asymmetrically, sometimes bleeding off the edge of the grid or overlapping image containers.
- **Body & UI:** Montserrat provides a clean, technical counterpoint. Its wider stance suggests stability and modernity.
- **Labels:** Use `label-caps` for all technical specifications, service categories, and breadcrumbs. The increased letter spacing is essential for maintaining the "architectural" feel of the design system.

## Layout & Spacing

This design system utilizes an **asymmetric 12-column fluid grid** for desktop and a **4-column grid** for mobile. The "Magazine Split" is achieved by dividing the viewport into unequal vertical sections (e.g., a 7-column image area paired with a 5-column text area).

Spacing is generous to emphasize the "Premium" nature of the service. Use thin (1px) rule lines in Slate Blue to separate content sections instead of heavy background changes. Elements should often be offset from the standard grid alignment to create a sense of dynamic movement and bespoke craftsmanship.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Subtle Rule Lines** rather than heavy shadows. 

1.  **Base Layer:** Deep Obsidian (#0F0F0F).
2.  **Content Containers:** Slate Blue (#2D3E50) with 1px borders of a slightly lighter slate tone.
3.  **Floating Elements:** Use a very soft, high-diffusion shadow (0px 20px 40px rgba(0,0,0,0.5)) only for primary modals or detached cards to suggest they are physically sitting above the work surface.
4.  **The "Glass" Effect:** Semi-transparent Slate Blue (80% opacity) with a 12px backdrop blur may be used for navigation bars to maintain the depth of background imagery as the user scrolls.

## Shapes

The shape language is **Sharp (0)**. To reflect precision, automotive lines, and "surgical" detailing, all corners remain at 0px. This reinforces the architectural and editorial vibe. 

Contrast this sharp geometry with high-quality, organic photography of water beads, car silhouettes, and microfiber textures. Buttons, input fields, and containers must maintain strict right angles.

## Components

- **Buttons:** Primary buttons use a solid Safety Orange fill with Black Montserrat Bold text in all-caps. Secondary buttons use a 1px Slate Blue border with White text. No rounded corners.
- **Inputs:** Underlined style (bottom-border only) or fully enclosed boxes with 1px Slate Blue borders. Use Safety Orange for the active focus state.
- **Cards:** No shadows; use 1px borders or subtle background tint shifts. Titles within cards should use Playfair Display Medium.
- **Rule Lines:** 1px width, color: `#2D3E50`. Used to divide sections or "frame" specific pieces of data like pricing or service duration.
- **Chips:** Small, rectangular tags with `label-caps` typography, used to indicate service features (e.g., "CERAMIC COATING").
- **Detailing Stats:** Large-scale Playfair numbers paired with small Montserrat labels to highlight "Years of Experience" or "Cars Perfected."
