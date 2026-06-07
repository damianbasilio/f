I've designed and built a bespoke, premium homepage for **Triple D's Towing LLC**. 

### Design Rationale:
*   **Visual Identity**: I established a high-contrast **'Industrial Night'** theme. This uses a deep charcoal and gunmetal palette punctuated by high-visibility **Safety Amber** accents, moving away from generic local business templates to create a more elite, technical brand feel.
*   **Typography**: The design uses **Archivo Narrow**, a condensed and authoritative sans-serif that echoes industrial signage and heavy-duty machinery branding.
*   **Editorial Layout**: The homepage features a rigid, grid-based layout with **heavy borders (4px)** and intentional whitespace to communicate precision and reliability. I avoided rounded corners entirely to maintain a "built-to-last" aesthetic.
*   **Functional Focus**: The header prioritizes immediate action with a prominent **24/7 call button** and a real-time availability status. The "Initialize Dispatch" form is styled as a technical log to streamline the user experience during emergencies.
*   **Local Authority**: Sections like "Built in Sterling Heights" and the "Command Center" location block ground the business in its local context with a sense of pride and permanence.

The site is fully responsive, semantically structured, and includes smooth scroll interactions and custom UI validation for the contact form.

---

---
name: Industrial Night
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1c'
  surface-container: '#1f1f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#d3c5ac'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#303031'
  outline: '#9c8f79'
  outline-variant: '#4f4633'
  surface-tint: '#f9bd22'
  primary: '#ffe1a7'
  on-primary: '#402d00'
  primary-container: '#fbbf24'
  on-primary-container: '#6c4f00'
  inverse-primary: '#795900'
  secondary: '#c4c7ca'
  on-secondary: '#2d3134'
  secondary-container: '#46494d'
  on-secondary-container: '#b6b8bc'
  tertiary: '#e5e4e6'
  on-tertiary: '#2f3032'
  tertiary-container: '#c9c8ca'
  on-tertiary-container: '#535456'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf9f'
  primary-fixed-dim: '#f9bd22'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5c4300'
  secondary-fixed: '#e0e2e6'
  secondary-fixed-dim: '#c4c7ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#e3e2e4'
  tertiary-fixed-dim: '#c7c6c8'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#464749'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.0'
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
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  border-width-thin: 2px
  border-width-heavy: 4px
---

## Brand & Style
The design system embodies "Industrial Night"—a premium, high-impact aesthetic tailored for Triple D’s Towing LLC. The personality is elite, authoritative, and technically precise, reflecting 24/7 reliability in Sterling Heights. 

The visual style is **Industrial Brutalism mixed with Editorial Precision**. It utilizes heavy structural lines, high-contrast accents, and a dense information architecture to evoke the strength of heavy machinery. The atmosphere is nocturnal and serious, prioritizing visibility through "Safety Amber" highlights against a dark, metallic foundation. 

Key stylistic pillars:
- **Mechanical Precision:** Every element is aligned to a rigid grid with sharp, 0px radius corners.
- **Heavy Linework:** 2px to 4px borders define the spatial logic, replacing soft shadows with structural containment.
- **Texture Motifs:** Subtle use of pinstripe patterns (diagonal lines) to indicate "active" or "cautionary" zones within the UI.

## Colors
The palette is engineered for high-visibility in low-light environments, mimicking the functional color schemes of heavy-duty recovery vehicles.

- **Surface (Primary):** `#1A1A1B` (Deep Charcoal) provides a non-distracting, matte foundation.
- **Surface (Secondary):** `#2D2E30` (Gunmetal Gray) is used for elevated containers and structural dividers to create subtle depth.
- **Action (Safety Amber):** `#FBBF24` is the high-visibility primary accent. It is used exclusively for calls-to-action, warnings, and critical brand identifiers.
- **Typography (Crushed Silver):** `#E5E7EB` ensures maximum legibility and a metallic, premium feel.
- **Success/Error:** Use specialized Amber variants; avoid traditional greens to maintain the "Industrial Night" color harmony.

## Typography
The typography system balances "Workhorse" strength with "Modern Technical" clarity.

- **Headlines:** Uses **Archivo Narrow**. The condensed nature allows for high-impact, large-scale type that feels engineered and massive. All major headlines should use uppercase styling to project authority.
- **Body Copy:** Uses **Hanken Grotesk**. A clean, wide-set grotesque that provides a breathable contrast to the dense headlines. It ensures readability for technical service descriptions.
- **Data & Labels:** Labels leverage the condensed properties of Archivo Narrow with increased letter spacing to emulate industrial VIN plates and machinery labeling.

## Layout & Spacing
The layout follows an **Editorial Fluid Grid** with intentional density. It avoids excessive whitespace in favor of a "packed" industrial feel, where every pixel serves a functional purpose.

- **Grid:** A 12-column grid for desktop with 24px gutters. Elements should be "boxed in" using 2px borders.
- **Density:** Use a tight spacing scale based on 4px increments. Internal padding for containers should be generous (24px-32px) to offset the heavy borders.
- **Separators:** Vertical and horizontal pinstripes (1px lines) can be used to divide data-heavy sections without adding the visual weight of full borders.
- **Mobile:** Transition to a 4-column grid with 16px margins. Elements remain sharp; do not introduce rounded corners for mobile ergonomics.

## Elevation & Depth
This design system rejects shadows in favor of **Tonal Layering and Bold Outlines**. Depth is communicated through the stacking of contrasting surfaces.

- **Base Layer:** `#1A1A1B` (The "Road" or Background).
- **Secondary Layer:** `#2D2E30` (The "Machine" or Container). These containers are defined by a `2px` border of either `#E5E7EB` (neutral) or `#FBBF24` (active).
- **Accents:** Use a subtle linear gradient on primary buttons (Safety Amber to a slightly darker Amber) to give a "metallic" sheen. 
- **Active State:** Elements in a "hover" or "active" state should utilize a "pinstripe" fill—a diagonal pattern of 1px lines at 45 degrees—to indicate a technical active zone.

## Shapes
The shape language is strictly **Geometric and Sharp**. 

- **Corners:** All corners are 0px (Sharp). This applies to buttons, cards, input fields, and images.
- **Icons:** Use thick-stroke, geometric icons. Avoid rounded terminals; prefer squared-off icon ends.
- **Dividers:** Use heavy 4px horizontal rules to separate major page sections, echoing the "double yellow line" of a highway.

## Components
- **Buttons:** Large-scale, rectangular, with a 2px border. Primary buttons use Safety Amber background with black text. Secondary buttons use a transparent background with a 2px Crushed Silver border.
- **Input Fields:** Deep Charcoal background with a 2px Gunmetal border that turns Safety Amber on focus. Labels sit inside the top border, industrial-style.
- **Cards:** Defined by a 2px border. Use a "Technical Header" on cards—a small strip of Gunmetal Gray at the top containing a label in uppercase Archivo Narrow.
- **Status Chips:** Rectangular tags with high-contrast borders. No fills, just colored outlines and uppercase text.
- **Progress Bars:** Use a pinstripe "Caution" pattern for the loading state, moving horizontally to indicate activity.
- **Lists:** Bordered list items with a 2px bottom stroke. Every item should feel like a line item on a professional dispatch manifest.
