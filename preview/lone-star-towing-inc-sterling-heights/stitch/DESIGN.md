I've designed a bespoke, **Industrial Editorial** homepage for **Lone Star Towing Inc.** that breaks away from typical local business templates.

### Design Rationale:
- **Visual Identity**: I established a "Technical Premium" aesthetic using a **Deep Midnight** and **Hazard Orange** palette, paired with high-contrast **Archivo Narrow** typography. This conveys reliability and industrial-grade authority.
- **Memorable Motif**: The design utilizes thin industrial line-work, dot-grid overlays, and subtle hazard-stripe accents to create a cohesive, editorial feel throughout the page.
- **Layout Innovation**: Instead of a standard card grid, I used a **numbered vertical list** for Services and an **asymmetric Hero section** to give the site a high-end, custom-built impression.
- **Utility**: The site includes a dedicated map container, a high-visibility dispatch hotline, and a streamlined contact flow designed to convert users in high-pressure recovery situations.

The code is production-ready, fully responsive, and features smooth-scroll transitions for a premium user experience.

---

---
name: Industrial Editorial
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#c1c7cf'
  on-tertiary: '#2b3137'
  tertiary-container: '#12181e'
  on-tertiary-container: '#7b8189'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#dde3eb'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 72px
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
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
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
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system establishes an "Industrial Editorial" aesthetic, distancing the brand from the standard utilitarian towing tropes in favor of a premium, high-reliability recovery service. The visual language is authoritative and precise, mimicking the technical documentation of heavy machinery while maintaining the sophisticated pacing of a luxury trade publication.

The style leans into **High-Contrast / Bold** layouts with a **Brutalist** edge. It utilizes heavy borders, technical dot-grid overlays, and "safety-tape" inspired rules to evoke a sense of structural integrity and rapid-response readiness. The UI should feel like a specialized tool—rugged enough for the Texas roadside, yet refined enough for high-end automotive logistics.

## Colors

The palette is anchored by **Deep Midnight**, used as the primary canvas to project authority and strength. **Sterling Silver** provides high-legibility contrast for secondary information and hairline borders. **Hazard Orange** is reserved strictly for critical actions, status indicators, and branding accents, ensuring it maintains its psychological impact as a "signal" color.

- **Primary (Deep Midnight):** Backgrounds, deep layering, and primary containers.
- **Secondary (Hazard Orange):** Primary CTAs, active states, and safety-rule accents.
- **Tertiary (Sterling Silver):** Body text, icons, and subtle structural lines.
- **Neutral (Slate):** Component backgrounds and surface elevation.

## Typography

The typography strategy relies on the tension between the industrial weight of **Archivo Narrow** and the neutral precision of **Inter**. 

Headlines must always be uppercase and tightly tracked to mimic heavy-duty stenciling or technical manuals. For data-heavy readouts or small technical labels, **JetBrains Mono** (or a similar monospace font) is introduced to reinforce the "rapid-response logistics" narrative. Large display sizes should use aggressive negative letter-spacing for a "built-to-last" visual density.

## Layout & Spacing

This design system uses a **Fixed Grid** model on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The layout is characterized by generous external margins and tight internal gutters to create a sense of focused, "contained" power.

- **Grid:** Elements should align to a strict 8px baseline grid.
- **Safety Margins:** Use 32px or 48px outer margins to create an editorial "frame" around content.
- **Dot-Grid Overlays:** Apply a subtle 16px dot-grid background to "Deep Midnight" sections to suggest a blueprint or technical coordinate system.
- **Rules:** Use 1px "Sterling Silver" horizontal and vertical rules to separate sections, mimicking the layout of a technical datasheet.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Bold Borders** rather than traditional shadows. This maintains the "Industrial" feel by avoiding the softness of typical modern SaaS UIs.

- **Level 0 (Floor):** Deep Midnight (#0F172A).
- **Level 1 (Surface):** Slate (#1E293B) with a 1px solid Sterling Silver border at 20% opacity.
- **Interactive:** Elements do not "lift" with shadows; instead, they use Hazard Orange strokes or solid color shifts to indicate focus and state changes.
- **Safety-Tape Borders:** Use a diagonal striped pattern (Orange/Black) as a 4px bottom border for high-priority cards or headers to denote "Active Response" status.

## Shapes

The shape language is strictly **Sharp (0px)**. Rounded corners are avoided to maintain a rugged, machined-metal aesthetic. All buttons, input fields, and card containers must have 90-degree angles. 

Small technical exceptions:
- **Status Pills:** May use a 2px "soft" radius to distinguish them from structural elements, but sharp remains the default.
- **Iconography:** Icons should be stroke-based, using 2px weights and square terminals to match the typography.

## Components

- **Buttons:** Primary buttons are solid Hazard Orange with black text (Archivo Narrow, Bold, Caps). Secondary buttons are ghost-style with a 2px Sterling Silver border.
- **Input Fields:** Deep Midnight background with a 1px Sterling Silver bottom border only. On focus, the border turns Hazard Orange and expands to 2px.
- **Cards:** Use a "technical block" style. Include a "Ref No." or "Serial" label in the top right corner using JetBrains Mono to enhance the industrial feel.
- **Chips/Status:** Use rectangular blocks. "In-Progress" should use the safety-tape pattern. "Completed" uses solid Sterling Silver with black text.
- **Lists:** Separated by 1px rules. Use Hazard Orange chevrons for navigation cues.
- **Specialty Component (The Dispatch Bar):** A persistent bottom or top bar containing real-time status (e.g., "TRUCK-04 EN ROUTE") in a monospace font with a pulsing Hazard Orange indicator.
