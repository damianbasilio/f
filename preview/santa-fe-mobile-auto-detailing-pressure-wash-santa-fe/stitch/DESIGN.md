I've completed the bespoke homepage for **Santa Fe Mobile Auto Detailing & Pressure Wash**. 

### Design Rationale:
*   **Visual Identity:** I established a "High Desert Industrial" design system that moves away from generic blue/water motifs. Instead, it uses a sophisticated palette of **Asphalt Charcoal**, **Adobe Terracotta**, and **High Noon Gold** to reflect the rugged yet refined character of Santa Fe.
*   **Editorial Layout:** The site uses an asymmetric, high-contrast layout. I've prioritized strong typographic hierarchy and generous whitespace to create a premium, "magazine-style" first impression.
*   **Credibility & Services:** The service sections are designed as "chapters" rather than standard card grids, emphasizing the craftsmanship behind detailing and pressure washing. 
*   **Functional Integration:** The page includes a responsive navigation system, a production-ready contact form, and the required empty map panel for local reach.

The code is fully semantic, responsive, and uses custom CSS properties for easy brand scaling.

How do you feel about this visual direction? We can further refine the image treatments or adjust the service layout if needed.

---

---
name: High Desert Industrial
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
  on-surface-variant: '#46474a'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#96482d'
  on-secondary: '#ffffff'
  secondary-container: '#fd9a78'
  on-secondary-container: '#763017'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59d'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#783118'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
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
    fontSize: 28px
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
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.15em
  technical-data:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  horizon-rule: 4px
---

## Brand & Style
The brand personality is **rugged but refined**, balancing the raw intensity of industrial pressure washing with the sophisticated precision of luxury vehicle detailing. It targets a discerning clientele in Santa Fe who value heritage, craftsmanship, and extreme attention to detail.

The visual style is **Editorial High-Contrast**. It rejects the typical "splashy" blue water aesthetics in favor of a moody, architectural approach. The UI evokes the feeling of a premium lifestyle magazine, utilizing heavy whitespace, dramatic shadow play, and a "Horizon Line" motif that mimics the expansive New Mexico landscape. The emotional response should be one of quiet confidence, technical mastery, and elite service.

## Colors
This design system utilizes a palette inspired by the high-desert landscape and industrial machinery.

*   **Asphalt (#1A1A1B):** The foundational primary color. Used for deep backgrounds, heavy typography, and technical UI elements. It represents precision and the vehicles being serviced.
*   **Adobe (#C36B4D):** The secondary accent. Used for calls to action and highlights, grounding the brand in Santa Fe’s architectural heritage.
*   **High Noon Gold (#D4AF37):** Reserved for luxury indicators, "Premium" service tiers, and subtle iconography.
*   **Stucco (#F9F7F2):** The primary surface color. A warm off-white that provides a sophisticated, gallery-like canvas for high-resolution imagery.

Avoid gradients. Colors should be applied in solid, bold blocks to maintain the industrial-editorial feel.

## Typography
The typography system relies on a high-contrast pairing:

*   **Headings:** `Bodoni Moda` provides an authoritative, editorial elegance. It should be used for large titles and pull quotes. Use "optical sizing" if available to ensure the hairlines remain crisp.
*   **Body & Technical:** `DM Sans` is used for readability and its modern, geometric cleanliness. 
*   **The "Wide-Track" Rule:** All labels and small technical details should use increased letter spacing (`0.15em`) and uppercase styling to evoke industrial serial numbers and architectural blueprints.

Maintain generous vertical rhythm. Headings should feel like they are "resting" on the horizon lines described in the layout section.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop and a **Fluid Fluid** model on mobile, governed by a strict 8px baseline.

**The Horizon Motif:**
*   Layouts should be bisected by "Horizon Lines"—4px thick horizontal rules in `Asphalt`.
*   Use staggered, asymmetrical grids for image galleries to create "Shadow Play" (alternating light and dark blocks).
*   Sections should have significant vertical padding (80px - 120px) to simulate the vastness of the desert.

**Breakpoints:**
*   **Mobile:** 4-column grid. Margins are 20px. 
*   **Tablet:** 8-column grid. Margins are 40px.
*   **Desktop:** 12-column grid. Content is centered with a 1280px max-width and 64px margins.

## Elevation & Depth
In keeping with the "Industrial" theme, this system avoids soft, ambient shadows. Instead, it uses **Tonal Layers** and **Hard Shadows**.

*   **Primary Surface:** `Stucco` (#F9F7F2).
*   **Elevated Cards:** Use a 1px solid border in `Asphalt` (#1A1A1B) rather than a shadow. 
*   **Shadow Play:** If a shadow is required for a floating element (like a mobile FAB), use a hard-edged, high-opacity "drop" shadow (e.g., 4px 4px 0px #1A1A1B) rather than a blur.
*   **Depth through Layering:** Elements should overlap slightly—for example, an image may break the "horizon line" rule to create a sense of three-dimensional space without using gradients.

## Shapes
The shape language is strictly **Sharp (0px)**. 

To reinforce the industrial and architectural tone, every element—from buttons and input fields to image containers and cards—must have 90-degree corners. Rounded corners are seen as too soft for this professional, rugged aesthetic. The only exception is the "High Noon Gold" seal which may be used for certification badges, which should be a perfect circle.

## Components
Consistent component styling reinforces the "High Desert Industrial" narrative:

*   **Buttons:** Primary buttons are solid `Asphalt` with `Stucco` text. Secondary buttons are `Adobe` with `Stucco` text. Both are sharp-edged, high-contrast, and use `label-caps` typography. Hover states should simply invert the colors.
*   **Input Fields:** Ghost-style inputs with a 2px bottom-border only (the "Horizon" line). Labels should sit above the line in `label-caps`.
*   **Chips/Tags:** Small, sharp-edged rectangles with `Asphalt` borders. Use these for service features (e.g., "HAND WAX," "STEAM CLEAN").
*   **Cards:** Use `Stucco` backgrounds with a 1px `Asphalt` border. Header images in cards should be treated with high contrast and deep blacks.
*   **Horizon Rules:** Use thick `Asphalt` lines to separate major sections of the page, often accompanied by a `label-caps` category title sitting directly on the line.
*   **Service Tiers:** Displayed in a vertical "staggered" list where the price is the largest element, using `Bodoni Moda`.
