I've designed and built a bespoke, editorial-grade homepage for **365 Mobile Tire Service**. 

### Design Decisions & Rationale:
*   **Industrial Editorial Aesthetic**: I avoided common template patterns in favor of a high-contrast, technical layout that mirrors the precision of the automotive industry. The use of "Asphalt Black" and "Safety Hazard Yellow" creates an immediate sense of urgency and professionalism.
*   **The 365 Protocol**: Instead of a generic features list, I structured the credibility section as a technical protocol, emphasizing the speed and reliability of the service through dense, structured typography.
*   **Grid-Breaking Layout**: The services section uses an asymmetric approach, shifting between deep black and clean white sections to keep the user engaged and reinforce the brand's unique identity.
*   **Memorable Visual Motifs**: I integrated thin technical rules, oversized section markers, and a distinctive "Dispatch" status indicator to ensure the site feels designed and proprietary.
*   **Production-Ready Foundations**: The code is fully semantic, includes the required map slot, and features a robust contact form with built-in validation UI placeholders.

The site is now live on your canvas for review. How does this look for a first impression?

---

---
name: Industrial Editorial
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444748'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed01b'
  on-secondary-container: '#6f5900'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#171c1f'
  on-tertiary-container: '#808488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffe083'
  secondary-fixed-dim: '#eec200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#dfe3e7'
  tertiary-fixed-dim: '#c3c7cb'
  on-tertiary-fixed: '#171c1f'
  on-tertiary-fixed-variant: '#43474b'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-xl:
    fontFamily: Archivo Narrow
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  track-width: 1px
  section-gap: 120px
---

## Brand & Style
The design system embodies the "Industrial Editorial" aesthetic, merging the grit of automotive labor with the exclusivity of a white-glove concierge service. It is designed for a premium audience that values efficiency, technical transparency, and high-end execution.

The visual narrative is built on tension: the raw energy of high-contrast color pairings against the discipline of precise, technical layouts. We avoid "friendliness" in favor of "authority." The emotional response should be one of immediate confidence, speed, and uncompromising quality. The style is **High-Contrast / Bold** with **Brutalist** structural influences, utilizing heavy borders, intentional asymmetry, and oversized typographic markers to create a sense of scale and reliability.

## Colors
The palette is restricted to three core tones to maintain maximum impact and a "technical manual" feel.

- **Asphalt Black (#121212):** Used for primary surfaces, text, and structural "track" lines. It represents the road and the strength of the service.
- **Safety Hazard Yellow (#FACC15):** A high-visibility accent reserved for calls to action, status indicators, and critical technical highlights. Use sparingly to maintain its "emergency" psychological trigger.
- **Cool Concrete (#F1F5F9):** The primary background color. It provides a clean, clinical canvas that makes the black and yellow elements pop, ensuring the UI feels "expensive" and airy rather than cluttered.
- **Technical Slate (#64748B):** A neutral used exclusively for low-priority metadata and subtle grid markings.

## Typography
Typography is the primary visual driver of this design system. We use a tri-font system to delineate intent:

- **Archivo Narrow (Headings):** Heavy weights evoke the speed and industrial strength of a tire tread. Use `display-xl` for section markers and impact statements.
- **Inter (Body):** A neutral, utilitarian sans-serif used for all long-form text to ensure readability against the high-contrast background.
- **JetBrains Mono (Technical):** Used for "concierge" details—specs, timestamps, tire sizes, and pricing. It reinforces the precision and technical expertise of the service.

All headers should be set with tight leading and negative letter-spacing to emphasize the "condensed" industrial feel.

## Layout & Spacing
The layout model rejects standard symmetrical grids in favor of **Asymmetric Density**. 

- **The Track System:** Use 1px Asphalt Black lines (horizontal and vertical) to compartmentalize information. These lines should extend to the edge of the screen where possible, mimicking technical drawings.
- **Whitespace:** Large blocks of `Cool Concrete` (#F1F5F9) should be used to isolate high-density data modules. 
- **Desktop:** A 12-column grid is used, but content should frequently "break" the grid, such as having a headline span 5 columns while the body copy spans 3 columns, leaving 4 columns empty.
- **Mobile:** Transition to a single-column stack, but maintain the 1px track lines to separate content blocks.
- **Markers:** Every section should be numbered using `label-caps` (e.g., 01 / 04) to evoke a manual or checklist.

## Elevation & Depth
This design system is **flat and structural**. Depth is achieved through layering and color blocking rather than shadows.

- **No Shadows:** Shadows are strictly prohibited. They soften the industrial edge we aim to maintain.
- **Tonal Layering:** Depth is conveyed by placing Asphalt Black cards on top of Cool Concrete backgrounds. 
- **Outlines:** High-contrast 1px or 2px borders (Asphalt Black) define the boundaries of interactive elements.
- **Interaction Depth:** When an element is hovered or active, it should not "lift"; instead, it should invert its color (e.g., Black background becomes Yellow).

## Shapes
The shape language is strictly **Sharp (0px)**. 

Every element—buttons, input fields, cards, and image containers—must have square corners. This reinforces the "Industrial" narrative, suggesting precision-cut steel and mechanical components. Avoid any circular or rounded elements, including in photography framing.

## Components
Consistent execution of these components is vital for the Industrial Editorial look:

- **Buttons:** Large, rectangular blocks. Primary buttons use an Asphalt Black background with Yellow text. Secondary buttons use a 2px Black border with a Transparent background. The label should be `label-caps`.
- **Technical Chips:** Small JetBrains Mono labels wrapped in a 1px Black border. Used for tire specs (e.g., 225/45/R18).
- **Input Fields:** A simple 1px bottom border (track line) with a `label-caps` floating label. No enclosing boxes.
- **Service Cards:** Use a heavy 4px left-side border in Safety Hazard Yellow to denote active or premium status. Information inside should be densely packed using monospaced fonts.
- **Track Lines:** Not just a divider, but a component. Use vertical track lines to separate "labels" from "values" in data lists.
- **Markers:** Section headers should always be accompanied by a small geometric "strike" (a 16x16px Yellow square) to draw the eye.
