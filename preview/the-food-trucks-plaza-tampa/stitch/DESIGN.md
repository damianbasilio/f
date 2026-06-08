I've designed a bespoke, editorial-grade homepage for **The Food Trucks Plaza** that breaks away from generic local business templates. 

### Design Rationale:
*   **Visual Identity:** Defined an "Industrial Neon" aesthetic, utilizing a deep charcoal base with high-vibrancy electric tangerine and safety yellow accents. This mirrors the raw, energetic atmosphere of a night-time food truck hub in Tampa.
*   **Typography:** Employed heavy, condensed display faces (Anton) for a powerful, street-inspired hierarchy that demands attention, contrasted with clean monospaced labels for a "technical/logistics" feel.
*   **Editorial Layout:** Instead of a standard grid, I used asymmetrical compositions, overlapping elements, and a horizontal ticker to create a sense of movement and "planned chaos" that reflects a busy food plaza.
*   **Bespoke Elements:**
    *   **The Hero:** A massive, high-contrast headline that prioritizes brand presence over a simple photo.
    *   **Core Offerings:** Custom-styled blocks with staggered positioning to guide the eye through the menu highlights.
    *   **The Map Section:** Implemented the requested placeholder with industrial-themed borders and metadata, ready for a live map integration.
*   **Production Ready:** The code is fully responsive, uses CSS custom properties for theme management, and includes semantic HTML for accessibility.

The site is now live on your canvas for review. How does this bold industrial direction feel for the brand?

---

---
name: Industrial Neon
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
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
  primary-container: '#1a1a1a'
  on-primary-container: '#848282'
  inverse-primary: '#5f5e5e'
  secondary: '#ffb59c'
  on-secondary: '#5c1900'
  secondary-container: '#fa5c1c'
  on-secondary-container: '#511500'
  tertiary: '#d2cb00'
  on-tertiary: '#343200'
  tertiary-container: '#b5af00'
  on-tertiary-container: '#444100'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#832700'
  tertiary-fixed: '#f0e800'
  tertiary-fixed-dim: '#d2cb00'
  on-tertiary-fixed: '#1e1c00'
  on-tertiary-fixed-variant: '#4b4900'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '0.9'
  display-md:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '0.9'
  headline-lg:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.0'
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.0'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Archivo Narrow
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1.0'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  block-gap: 32px
---

## Brand & Style
The design system for this urban culinary destination is built on the "Industrial Neon" aesthetic. It targets a modern, city-dwelling audience seeking a premium yet raw street-food experience. The brand personality is aggressive, energetic, and high-contrast, blending the utilitarian grit of a construction site with the high-octane vibrance of night-time street life.

The visual style leans heavily into **Brutalism** and **High-Contrast Bold**. It rejects the "softness" of typical food apps in favor of sharp 90-degree angles, intentional density, and raw textures. The interface should feel like a digital blueprint overlaid with neon signage—highly structured, functional, yet pulsing with electricity.

## Colors
The palette is dominated by **Deep Charcoal (#1A1A1A)**, which serves as the "asphalt" of the UI. This dark base allows the accent colors to "glow" through the interface.

- **Electric Tangerine (#FF5F1F)** is the primary action color, used for critical UI touchpoints and branding.
- **Safety Yellow (#F7EF11)** acts as a high-visibility warning and secondary accent, perfect for badges, status indicators, and price tags.
- **Concrete Gray (#E2E2E2)** provides high-contrast legibility for body text and structural dividers.

Avoid gradients. Use solid, flat color blocks to maintain the industrial, screen-printed feel.

## Typography
The typography strategy employs extreme contrast between "The Hammer" (Headlines) and "The Blueprint" (Body).

- **Headlines (Anton):** Massive, condensed, and powerful. These should be set with tight leading, often overlapping or touching imagery to create an editorial feel. Always uppercase.
- **Body (JetBrains Mono):** This monospaced font provides a technical, precise feel that balances the raw energy of the headlines. It ensures menus and technical details remain legible and structured.
- **Labels (Archivo Narrow):** Used for navigation and metadata. Its condensed nature allows for dense information layouts without sacrificing clarity.

## Layout & Spacing
The layout follows a **Fixed Grid** model with an emphasis on intentional density. Use a 12-column grid for desktop and a 4-column grid for mobile.

- **Asymmetry:** Break the grid occasionally with overlapping elements (e.g., a photo of a food item partially covering a headline).
- **Density:** Don't fear the "packed" look. Information should feel concentrated, mimicking the crowded, vibrant nature of a night market.
- **Dividers:** Use 2px or 4px solid lines in Concrete Gray or Safety Yellow to separate sections instead of white space.
- **Overlays:** Utilize a subtle grain texture or a faint 10px grid dot pattern over background containers to reinforce the industrial feel.

## Elevation & Depth
This system rejects traditional shadows and depth. Instead, depth is achieved through **Tonal Layers** and **Hard Offsets**.

- **No Blurs:** Avoid ambient shadows. If a shadow is needed for "lift," use a hard-edged "drop shadow" (100% opacity, no blur) in a contrasting color (e.g., an Electric Tangerine box with a black offset shadow).
- **Stacked Containers:** Use high-contrast borders (2px solid) to define layers. A Concrete Gray container sitting atop a Deep Charcoal background creates all the depth required.
- **Neon Glow:** Reserved exclusively for high-priority active states. Use a localized "outer glow" with 0 blur and 100% opacity to simulate a neon tube light.

## Shapes
Sharpness is a core brand value. 

- **Hard Edges:** All buttons, cards, and input fields must have **0px corner radius**. 
- **Angled Accents:** Use 45-degree angled cuts on corners for special badges or tags to mimic industrial hazard signage.
- **Asymmetrical Containers:** Cards can have varying border widths (e.g., a 4px bottom and right border, but a 1px top and left border) to create a "thick" physical presence.

## Components

- **Buttons:** Large, rectangular blocks. Default state is Electric Tangerine with black text. Hover state shifts to Safety Yellow. Press state adds a 4px black offset border.
- **Chips/Badges:** Use the "hazard" aesthetic. Safety Yellow background with black monospaced text. No rounded corners.
- **Input Fields:** Concrete Gray 2px bottom border only. On focus, the border turns Electric Tangerine and a small "active" indicator (a small rectangle) appears in the corner.
- **Cards:** Defined by 1px Concrete Gray borders. Images within cards should have a slight film grain or "duotone" filter (Charcoal and Tangerine) to stay on-brand.
- **Lists:** Separated by heavy 4px dividers. Use monospaced numbers (e.g., 01, 02, 03) for itemization to emphasize the technical layout.
- **Custom Component - "The Ticker":** A scrolling horizontal bar (like a stock ticker) at the top or bottom of the screen displaying live truck status or daily specials in Safety Yellow text.
