I've designed a bespoke, premium homepage for **McDougall’s Mobile Mechanic** that moves far beyond the standard local business template.

### Design Rationale:
*   **Modern Industrial Identity:** I established a "Forge & Friction" design system, using a high-contrast palette of **Deep Asphalt** and **High-Vis Amber** to signal both professional reliability and urgent on-site service.
*   **Editorial Typography:** The site uses **Archivo Narrow** in a massive, heavy weight for headlines to create an authoritative, "bigger than life" presence. I paired this with technical mono-spaced fonts for details, mimicking the look of mechanical manuals and blueprints.
*   **Non-Standard Layout:** Instead of a generic card grid, I utilized **industrial borders and blueprint-inspired line work** to structure the "Core Services." The hero section breaks the grid with asymmetrical text placement and gritty textures, emphasizing the "Mobile" nature of the business.
*   **Technical Density:** The design balances generous whitespace in the "Mission" section with intentional density in the technical footer, giving the brand a "field-ready" and meticulously detailed feel.

This design is crafted to turn a mobile service into a premium technical brand. Does this industrial direction align with the vision you had for McDougall’s?

---

---
name: Forge & Friction
colors:
  surface: '#101417'
  surface-dim: '#101417'
  surface-bright: '#36393e'
  surface-container-lowest: '#0b0f12'
  surface-container-low: '#181c20'
  surface-container: '#1c2024'
  surface-container-high: '#272a2e'
  surface-container-highest: '#323539'
  on-surface: '#e0e2e8'
  on-surface-variant: '#d4c5ab'
  inverse-surface: '#e0e2e8'
  inverse-on-surface: '#2d3135'
  outline: '#9c8f78'
  outline-variant: '#504532'
  surface-tint: '#fbbc00'
  primary: '#ffe2ab'
  on-primary: '#402d00'
  primary-container: '#ffbf00'
  on-primary-container: '#6d5000'
  inverse-primary: '#795900'
  secondary: '#c6c6c9'
  on-secondary: '#2f3133'
  secondary-container: '#454749'
  on-secondary-container: '#b4b5b7'
  tertiary: '#e4e5e7'
  on-tertiary: '#2e3133'
  tertiary-container: '#c8c9cb'
  on-tertiary-container: '#525456'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdfa0'
  primary-fixed-dim: '#fbbc00'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5c4300'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e2e2e5'
  tertiary-fixed-dim: '#c6c6c9'
  on-tertiary-fixed: '#1a1c1e'
  on-tertiary-fixed-variant: '#454749'
  background: '#101417'
  on-background: '#e0e2e8'
  surface-variant: '#323539'
typography:
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
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
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

This design system embodies a **Modern Industrial** aesthetic tailored for high-end mobile mechanical services. It moves away from the generic "grease-monkey" tropes toward an editorial, boutique workshop identity. The brand personality is rugged yet hyper-professional, authoritative, and deeply rooted in local craft.

The visual direction combines **Minimalism** with **Modern Brutalism**. It utilizes heavy whitespace to frame dense, technical information, creating a "structured chaos" reminiscent of a master mechanic’s organized toolbox. Design motifs include thin blueprint-style grid lines, asymmetrical layout blocks, and subtle grit textures that provide a tactile, high-end feel. The goal is to evoke the reliability of heavy machinery and the precision of modern engineering.

## Colors

The palette is anchored in the "Modern Industrial" world, using high-contrast accents to guide the eye through technical data.

- **Primary (High-Vis Amber):** A vibrant, saturated yellow used exclusively for calls to action, critical alerts, and branding accents. It mimics industrial safety markings.
- **Secondary (Deep Asphalt):** The primary background color. A dark, blue-toned charcoal that provides depth and a premium "after-hours workshop" feel.
- **Tertiary (Cool Slate):** Used for component surfaces, borders, and secondary containers to create subtle layering.
- **Neutral:** A range of greys used for body text and metadata to ensure legibility against the dark background.

The system defaults to **dark mode** to reinforce the premium, industrial atmosphere.

## Typography

The typography strategy relies on a hierarchy of three distinct voices:

1.  **The Authority (Archivo Narrow):** Bold, heavy-weight, and condensed. Used for massive headlines to create impact and an editorial feel.
2.  **The Technical Detail (JetBrains Mono):** A monospaced font used for "data-heavy" elements like VIN numbers, pricing, timestamps, and technical specs. It reinforces the precision of the trade.
3.  **The Narrative (Inter):** A clean, highly legible sans-serif for body copy and descriptions, ensuring the user can digest complex service information without fatigue.

All uppercase styling should be reserved for `label` roles to mimic industrial signage.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile.

- **Desktop:** A 12-column grid with wide 64px margins. Elements often "break" the grid slightly or align to an asymmetrical 60/40 split to mimic a blueprint layout.
- **Spacing Rhythm:** Based on a 4px baseline unit. Internal component padding should be generous to maintain the premium feel.
- **Structural Lines:** Use 1px "Cool Slate" borders to separate sections instead of relying solely on whitespace. These lines should occasionally extend to the edge of the viewport, resembling technical drafting lines.
- **Mobile:** Transition to a 4-column fluid grid with tighter margins (20px). Content stacks vertically, but maintains the "heavy header" style.

## Elevation & Depth

To maintain the rugged, industrial feel, this design system avoids soft, organic shadows. Instead, depth is communicated through:

- **Tonal Layering:** The "Deep Asphalt" background is the lowest level. Surface containers use "Cool Slate" with a slightly higher luminosity to indicate elevation.
- **Hard Borders:** 1px or 2px solid borders create definition. For active states, these borders switch to "High-Vis Amber."
- **Grit Overlay:** A low-opacity (2-3%) grain or noise texture is applied to the primary background to eliminate the "flatness" of digital UI and add a physical, metallic quality.
- **Hard Shadows:** If depth is required, use 0-blur "drop shadows" offset by 4px or 8px in a darker shade of Asphalt, creating a "sticker" or "plated" effect.

## Shapes

The shape language is strictly **Sharp (0)**. 

Every UI element—from buttons and input fields to cards and images—uses 90-degree corners. This evokes the hard edges of tools, engine blocks, and industrial structural beams. There are no rounded corners in this system. This lack of "softness" is what differentiates the product as a serious, professional service provider rather than a consumer-grade app.

## Components

- **Buttons:** Rectangular, sharp-edged, and high-contrast. The primary button is "High-Vis Amber" with black text in `label-md` (All Caps). Secondary buttons use a "Cool Slate" outline.
- **Input Fields:** Thick 2px bottom borders with a dark background. The label is always `label-sm` monospaced text appearing above the field.
- **Cards:** Defined by 1px "Cool Slate" borders. Cards do not have background fills unless they are highlighting a specific service, in which case they use a subtle gradient of "Deep Asphalt."
- **Status Chips:** Small, monospaced text blocks with a solid background color (e.g., Red for "Engine Failure," Green for "Fixed," Amber for "In Progress"). Sharp corners only.
- **Lists:** Technical lists (parts, labor) should use dotted "leader lines" (like a menu) to connect descriptions to prices, reinforcing the blueprint aesthetic.
- **Additional Component: The "Spec-Sheet":** A specialized data display component for vehicle diagnostics that uses a 2-column monospaced layout with heavy vertical dividers.
