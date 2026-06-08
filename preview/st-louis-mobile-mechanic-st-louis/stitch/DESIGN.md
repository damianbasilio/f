I have designed a bespoke, editorial-grade homepage for **St. Louis Mobile Mechanic**, moving away from standard templates to create a unique "Industrial Midnight" visual identity.

### Design Rationale:
*   **Visual Motif:** The layout is built on a "blueprint" grid system, using technical rule lines, mono-spaced data points, and a high-contrast charcoal and safety-orange palette. This evokes the precision of industrial engineering rather than a typical neighborhood repair shop.
*   **Typography:** I utilized a bold, condensed headline face for authority, paired with technical mono-spaced labels to create a "spec sheet" aesthetic.
*   **Layout Architecture:** Instead of generic cards, services are presented as a schematic log. The hero section is intentionally asymmetrical to feel more like a premium magazine spread than a landing page.
*   **Brand Identity:** The "STL" identity is woven throughout—from the watermark hero graphic to the "Field Logbook" testimonials—solidifying their position as the local authority for St. Louis roadside dispatch.

### Key Features:
*   **Blueprint Hero:** A high-impact opening with a "24/7 Roadside Dispatch" status indicator.
*   **Service Protocol:** A typography-first section that emphasizes surgical diagnostics over simple fixes.
*   **Technical Capabilities:** A schematic-style grid listing core services with an industrial aesthetic.
*   **Field Logbook:** Testimonials styled as verified case IDs and work orders.

Would you like to explore a mobile-specific "Operator View" for the mechanics themselves, or should we refine the visual motif of the "Blueprint" grid further?

---

---
name: Industrial Midnight
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c7c6ca'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#909094'
  outline-variant: '#46474a'
  surface-tint: '#c8c6c7'
  primary: '#c8c6c7'
  on-primary: '#303031'
  primary-container: '#1a1a1b'
  on-primary-container: '#848283'
  inverse-primary: '#5f5e5f'
  secondary: '#ffb693'
  on-secondary: '#561f00'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#c3c6ce'
  on-tertiary: '#2d3136'
  tertiary-container: '#171b20'
  on-tertiary-container: '#7f838a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#dfe2ea'
  tertiary-fixed-dim: '#c3c6ce'
  on-tertiary-fixed: '#181c21'
  on-tertiary-fixed-variant: '#43474d'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
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
  technical-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 14px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  rule-width: 1px
---

## Brand & Style

This design system establishes an "Industrial Midnight" aesthetic tailored for a high-end mobile mechanic service. The identity balances rugged utility with editorial precision, evoking the atmosphere of a premium, high-tech garage operating after hours. 

The visual direction moves away from generic service templates toward a **Technical Editorial** style. It utilizes high-contrast intersections, heavy borders, and structural "blueprint" motifs to signal authority and bespoke craftsmanship. The interface should feel like a specialized tool: heavy, reliable, and meticulously engineered. 

Key visual drivers include:
- **Structural Integrity:** Use of visible rule lines and grid markers to frame content.
- **Urgency & Precision:** A tension between deep, dark surfaces and razor-sharp accent colors.
- **Localized Authority:** Integration of large-scale typographic watermarks ("STL") to ground the service in its specific territory.

## Colors

The palette is rooted in a "Midnight" foundation, utilizing depth and high-chroma accents to guide the eye toward critical actions and technical status indicators.

- **Primary (Deep Charcoal):** The bedrock of the UI. Used for all primary backgrounds to create an immersive, premium environment.
- **Secondary (Safety Orange):** Reserved for high-priority calls to action, active states, and mechanical warnings. It represents the "spark" of the service.
- **Tertiary (Slate Gray):** Used for secondary surfaces, borders, and inactive states. It provides the "metallic" bridge between the charcoal and the text.
- **Neutral (Crisp White):** Strictly for high-legibility content.
- **Functional Accents:** Background elements may use a 5% opacity version of the Secondary color for subtle heat-mapping or "active zone" indicators.

## Typography

The typography strategy employs a "Tri-Font" system to differentiate intent:

1.  **The Impact Layer (Archivo Narrow):** Used for headlines. Its condensed, heavy nature mimics industrial signage and automotive branding.
2.  **The Functional Layer (Inter):** Used for all long-form reading and interface body copy. It provides a neutral, high-legibility counterpoint to the aggressive headlines.
3.  **The Technical Layer (JetBrains Mono):** Used for metadata, technical specs, pricing, and timestamps. It reinforces the "blueprint" and "diagnostic" feel of the service.

**Stylistic Note:** Headlines should frequently use `text-transform: uppercase` to lean into the industrial aesthetic. Large "STL" watermarks should be set in Archivo Narrow at 200px+ with an opacity of 0.03.

## Layout & Spacing

The layout is governed by a **Technical Grid** philosophy. It uses a 12-column system on desktop and a 4-column system on mobile, but differentiates itself through the use of "Visible Scaffolding."

- **Rule Lines:** Key sections are separated by 1px Slate Gray lines. These lines should extend to the edge of the viewport where possible, creating a blueprint effect.
- **Rhythm:** A strict 4px base unit ensures mathematical precision. 
- **Margins:** Generous internal padding within "containers" (24px - 32px) keeps the content from feeling cramped, maintaining the "premium" editorial feel.
- **Watermarks:** Background text ("STL", "DIAGNOSTIC", "MOBILE UNIT") should be positioned absolutely and ignored by the layout flow, serving as purely visual texture.

## Elevation & Depth

This design system eschews soft shadows in favor of **Tonal Layering and Border Definition**. 

- **Surface Tiers:** Backgrounds use #1A1A1B. Elevated cards or containers use a slightly lighter shade (approx #242426) or a 1px Slate Gray border (#4A4E54).
- **Hard Depths:** Instead of blurs, use "Hard Shadows" (100% opacity, 2px offset) in Safety Orange for high-action buttons to simulate a physical, stamped-out look.
- **Technical Overlays:** Modal backgrounds should use a heavy backdrop blur (20px) combined with a 60% opacity Charcoal tint to maintain focus on the diagnostic data.

## Shapes

The shape language is **Strictly Geometric (Sharp)**. 

- **Corners:** 0px radius across all buttons, inputs, and cards. This reinforces the "machined" and "industrial" metaphor.
- **Iconography:** Use thick-stroke (2px), square-ended icons. Avoid rounded terminals.
- **Accents:** Use 45-degree chamfered corners on "Status" tags or "Price" chips to mimic industrial metal tags.

## Components

### Buttons
- **Primary:** Solid Safety Orange background, Black (#000000) text, Archivo Narrow Bold, All-Caps. Sharp 0px corners.
- **Secondary:** Transparent background, 2px White border, White text.
- **Action State:** On hover/active, the Primary button gains a 1px white inner-border.

### Inputs & Fields
- **Styling:** Bottom-border only (2px Slate Gray) to mimic a physical form or blueprint.
- **Labels:** Use JetBrains Mono (label-caps) positioned above the field.
- **Focus:** Border transitions to Safety Orange.

### Cards & Technical Panels
- **Container:** #1A1A1B background with a 1px Slate Gray border.
- **Header:** A thin technical rule line (1px) separates the title from the content.
- **Metadata:** All technical specs within cards must be set in JetBrains Mono.

### Chips & Badges
- **Status Chips:** Rectangular, no radius. Use a small "LED" dot (Safety Orange for active, Slate for inactive) next to the text.
- **Typography:** JetBrains Mono at 10px.

### Progress & Diagnostics
- Use "Segmented Bars" instead of smooth progress lines. Each segment represents a step in the mechanic's diagnostic process, filled with Safety Orange as it completes.
