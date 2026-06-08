I've designed and built a bespoke, editorial-grade homepage for **The Food Trucks Plaza**. 

### Design Rationale:
*   **Visual Identity:** I established a "Grit & Gourmet" aesthetic, combining the industrial energy of Tampa's street food scene with high-end editorial polish. The palette uses **Asphalt Black**, **Street Light Gold**, and **Concrete Grey** to create a premium, urban feel.
*   **Typography:** Using **Oswald** for headings provides a bold, condensed look reminiscent of vintage street signage, while a clean grotesque sans-serif ensures readability for body text.
*   **Layout:** Instead of a standard template, I used an asymmetric hero and overlapping elements to give the site a custom, hand-crafted feel. The "Lineup" section uses high-contrast cards to showcase the variety of vendors.
*   **Production-Ready:** The code is fully semantic, utilizes CSS variables for the distinctive color tokens, and includes a mobile-responsive navigation and the specific map slot requested.

How does this new visual direction feel for the brand? We can refine the color balance or add more motion to the scroll interactions if you'd like.

---

---
name: Grit & Gourmet
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#46474a'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#745b00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd355'
  on-secondary-container: '#735a00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#410005'
  on-tertiary-container: '#e35152'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#ffe08b'
  secondary-fixed-dim: '#ebc246'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#8e101c'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Oswald
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Oswald
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built on the "Grit & Gourmet" philosophy—a tension between Tampa’s raw, industrial street culture and the refined precision of high-end culinary arts. It targets a sophisticated urban audience that values authenticity over polish but expects a premium digital experience.

The style is a hybrid of **Modern Minimalism** and **Industrial Brutalism**. It utilizes expansive white space (the "Gourmet") to frame raw, high-impact typographic elements and gritty textures (the "Grit"). The emotional response should be one of "curated chaos"—feeling urgent and street-wise yet meticulously organized. Visuals are driven by asymmetric layouts, intentional overlapping of elements, and a recurring chevron motif derived from asphalt markings and urban wayfinding.

## Colors

The palette is rooted in the urban landscape of Tampa. 

- **Asphalt Black (#1A1A1B):** Used for primary surfaces, heavy headers, and "industrial" structural elements.
- **Concrete Grey (#F2F2F2):** The primary canvas. It provides a tactile, neutral foundation that feels more intentional than pure white.
- **Street Light Gold (#F2C94C):** A functional accent used for wayfinding, highlights, and active states, mimicking nocturnal city lights.
- **Neon Salsa Red (#EB5757):** A high-energy "unexpected pop" used sparingly for critical calls to action or to denote heat and spice.
- **Deep Ink (#0D0D0D):** Reserved exclusively for high-contrast typography to ensure maximum editorial legibility.

## Typography

This design system employs a strict typographic hierarchy to achieve an editorial look. 

- **Headlines (Oswald):** Set with tight tracking and leading. Display sizes should feel "compressed" and architectural. Use uppercase for all H1-H3 levels to mimic street signage.
- **Body (Hanken Grotesk):** A sharp, contemporary grotesque that provides a neutral balance to the aggressive headlines. 
- **Utility (JetBrains Mono):** Introduced for small labels, prices, and technical metadata (like truck hours). The monospaced nature reinforces the industrial, "ticket-print" aesthetic.

**Note:** Always maintain a minimum of 24px bottom margin after headlines to allow the "Gourmet" whitespace to breathe.

## Layout & Spacing

The layout philosophy is a **Fixed Grid with Asymmetric Overlays**. 

- **Grid:** Use a 12-column grid for desktop. However, content should frequently "break" the grid—for example, a photo might span columns 1-7 while text begins on column 8 and bleeds off the right edge.
- **Asymmetry:** Avoid perfect vertical symmetry. Pair large-scale typography on the left with smaller, detailed components on the right to create a dynamic visual flow.
- **Whitespace:** Use extreme vertical padding (`section-gap`) between content blocks to elevate the food truck experience to a luxury editorial level.
- **The Chevron Motif:** Use 45-degree angled lines or arrow indicators as background decorative elements or to point toward CTAs, reinforcing the "Plaza" wayfinding concept.

## Elevation & Depth

This design system rejects traditional shadows in favor of **Tonal Layering and Hard Offsets**.

- **Flat Depth:** Depth is achieved by stacking solid blocks of color. A card might have a hard 4px or 8px offset border of `Street Light Gold` or `Asphalt Black` rather than a soft shadow.
- **Hard Strokes:** Use 1px or 2px solid borders (`Deep Ink`) to define containers.
- **Glassmorphism (Limited):** Use only for navigation overlays to simulate the "frost" of a cold drink or a food truck window, using a high-saturation background blur without softening the edges.
- **Photo Overlays:** Use high-contrast food photography with a 5% "noise" grain overlay to provide a tactile, gritty texture.

## Shapes

The shape language is **Sharp and Architectural**. 

By utilizing a `0` roundedness (Sharp), the UI mimics the industrial materials of food trucks (steel, glass, shipping containers). All buttons, input fields, and cards must have 90-degree corners. 

Exceptions: The only rounded elements permitted are circular "stamps" or "badges" used for promotional offers, mimicking a physical ink stamp on a paper menu.

## Components

- **Buttons:** Large, rectangular blocks. Primary buttons use `Asphalt Black` with `Street Light Gold` text. On hover, they should "shift" with a hard offset border appearing.
- **Chips/Tags:** Use `JetBrains Mono` text inside a `Concrete Grey` box with a 1px `Asphalt Black` border. Used for food categories (e.g., #VEGAN, #BBQ).
- **Cards:** No shadows. Use a 1px border or a slight background color shift. Imagery within cards should be "full-bleed" to the top and sides.
- **Inputs:** Minimalist. Only a bottom border (2px `Asphalt Black`). Labels should be in `label-caps` (JetBrains Mono) placed above the input.
- **Chevron Indicators:** Small, repetitive chevron patterns used as dividers between list items or as scroll indicators.
- **Photo Treatment:** All food photography should be desaturated by 10% with boosted contrast and a slight "cool" temperature shift to match the `Concrete Grey` environment.
