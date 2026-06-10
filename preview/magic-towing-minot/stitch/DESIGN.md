I've designed and built a bespoke, editorial-grade homepage for **Magic Towing**. 

### Design Rationale:
*   **Bespoke Identity:** I moved away from common local-business templates to create a high-contrast 'Midnight & Amber' visual language. This industrial-premium aesthetic positions Magic Towing as a highly professional, elite service in Minot.
*   **Editorial Typography:** The bold, condensed headings and generous whitespace create a clear hierarchy that feels more like a high-end magazine than a generic service site.
*   **Industrial Motif:** I used thick rule lines and grid-based layouts to echo the rugged nature of the towing industry while maintaining a clean, modern feel.
*   **Memorable Visuals:** The asymmetric service blocks and high-impact hero section ('RECOVERY IS AN ART') ensure a strong first impression that sticks with the user.

### Key Features:
*   **Production-Ready Code:** A full semantic HTML5 document with utility-first CSS and smooth-scroll JavaScript.
*   **Strategic Hierarchy:** The most critical action—calling the emergency line—is persistent and prominent.
*   **Custom Content:** I've written unique, industry-specific copy throughout to replace any generic filler.
*   **Mobile Ready:** The layout is fully responsive, scaling seamlessly from desktop down to 375px.

The page includes all requested sections, including the specialized map slot and a modern contact inquiry form. How does this direction feel for the brand?

---

---
name: Magic Towing Editorial System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 32px
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
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  technical-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
  section-padding: 120px
---

## Brand & Style

This design system establishes a high-end, industrial-editorial aesthetic for a premium towing service. The brand personality balances the rugged, heavy-duty nature of roadside assistance with a "magical" efficiency—positioning the service not just as a mechanic, but as a precise, systematic solution. 

The visual style is **Industrial Minimalism**. It utilizes heavy horizontal lines, visible grid structures, and high-contrast color blocking to evoke a sense of structural integrity and reliability. The "magic" is conveyed through extreme clarity, generous whitespace, and a sophisticated typographic hierarchy that feels more like a premium technical journal than a local service business.

**Key Visual Principles:**
- **The Power of the Grid:** Every element must align to a strict underlying grid, referencing technical blueprints and industrial schematics.
- **Utilitarian Elegance:** Functionality is the primary aesthetic. Use thick borders and mono-spaced accents to highlight data points (ETA, pricing, location).
- **The "Safety Strike":** Use the primary amber color sparingly but with high impact to draw attention to critical actions and status updates.

## Colors

The palette is rooted in industrial safety and late-night reliability. 

- **Deep Midnight (#0F172A):** Used for primary backgrounds, heavy headings, and core structural elements. It provides the "high-end" weight.
- **Emergency Amber (#F59E0B):** The "magical" spark. Used for call-to-actions, status indicators, and critical highlights. It represents visibility and the speed of service.
- **Steel Grey (#64748B):** Used for secondary text, borders, and grid lines. It bridges the gap between the dark anchors and the light canvas.
- **Off-White/Snow (#F8FAFC):** The primary canvas color. It ensures the UI feels "editorial" and premium, providing the whitespace necessary to distance the brand from cluttered competitors.

## Typography

The typography strategy emphasizes strength and precision. 

**Archivo Narrow** is used for all headlines. Its condensed, vertical nature mimics the heavy machinery and tall silhouettes of industrial equipment. It should almost always be used in uppercase for a "stamped" or "printed" industrial feel.

**Inter** provides a clean, neutral balance for body copy, ensuring high readability for users who may be in stressful, low-light roadside situations.

**JetBrains Mono** is the "technical" voice. Use it for metadata, labels, timestamps, and coordinates. This adds the "magical" layer of technical sophistication and precision to the brand.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop (12 columns) and a fluid 4-column layout on mobile.

**Key Layout Rules:**
- **Heavy Gutters:** Use wide 24px gutters to allow the high-contrast elements to breathe.
- **Section Blocking:** Use horizontal rules (2px Steel Grey) to separate sections. Every section should start with a `label-caps` descriptor in the top-left corner.
- **Asymmetric Balance:** In the editorial style, use empty columns to create focus. For example, a headline may span 8 columns, leaving the remaining 4 columns empty to emphasize the white space.
- **Mobile Reflow:** On mobile, margins reduce to 16px, and stacking becomes strictly vertical. Technical data points should be displayed in a 2x2 grid to maintain the industrial feeling.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layering and Bold Outlines**. 

Depth is communicated through:
- **High-Contrast Stacking:** A Deep Midnight card sitting on an Off-White background creates immediate hierarchy without needing a shadow.
- **Industrial Borders:** Use 1px or 2px solid borders (#64748B) to define containers. This creates a "blueprint" feel.
- **Inverted Surfaces:** Critical information blocks should use the Deep Midnight background with Off-White text to "pop" from the page.
- **Zero-Blur Blocker:** If an overlay is required, use a solid color background with 90% opacity rather than a soft blur, maintaining the crisp, raw aesthetic.

## Shapes

The shape language is strictly **Sharp (0px)**. 

To convey industrial strength and the "no-nonsense" nature of towing, all buttons, input fields, cards, and images must have square corners. This architectural approach reinforces the reliability of the brand.

**Exceptions:**
- **Iconography:** Icons may have slight internal curves for legibility, but their bounding containers must remain sharp.
- **Status Pips:** Small circular indicators (Emergency Amber) can be used to represent "Live" tracking or active status.

## Components

### Buttons
- **Primary:** Deep Midnight background, Off-White text, 0px radius. Hover state: Emergency Amber background with Deep Midnight text.
- **Secondary:** Transparent background, 2px Deep Midnight border, Deep Midnight text.
- **Ghost:** JetBrains Mono text with a thick underline that expands on hover.

### Cards
- **Industrial Card:** White background, 1px Steel Grey border. Title in Archivo Narrow, technical metadata at the bottom in JetBrains Mono, separated by a thin horizontal line.

### Input Fields
- **Search/Form:** 2px Deep Midnight bottom border only (minimalist editorial style). Labels sit above the field in `label-caps`.

### Chips & Tags
- **Status Tags:** Rectangular blocks with Emergency Amber backgrounds and Deep Midnight `label-caps` text. No rounded corners.

### Lists
- **Service Lists:** Use large numerals (01, 02, 03) in Archivo Narrow as bullets. Each item is separated by a full-width 1px horizontal rule.

### Magical Elements
- **Precision Tracker:** A minimalist map interface using a monochrome (Steel Grey/Deep Midnight) style with a single pulsing Emergency Amber dot for the tow truck location.
