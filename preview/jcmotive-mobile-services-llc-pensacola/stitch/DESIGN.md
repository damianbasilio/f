I have designed a bespoke, editorial-grade homepage for **JCmotive Mobile Services LLC.** that establishes a premium and high-performance visual identity.

### Design Decisions & Rationale:

*   **Editorial Typography & Layout**: I used **Archivo Narrow** for headings to create a technical, high-speed aesthetic reminiscent of automotive performance magazines. The layout moves away from generic templates, utilizing asymmetrical hero sections and overlapping elements to create a sense of bespoke engineering.
*   **Precision Color Palette**: The "Deep Asphalt" background provides a sophisticated, low-glare canvas that makes the "Ignition Orange" accents pop. This choice reflects the professional, no-nonsense nature of elite automotive diagnostics.
*   **Unique Visual Motifs**: 
    *   **The "Technical Protocol" Grid**: I implemented a layout inspired by technical blueprints, featuring thin rule lines and data-driven "Credibility Strips" to reinforce the technician's expertise.
    *   **Interactive Service List**: Instead of standard cards, I used a structured vertical list that focuses on clarity and technical precision.
*   **Localized Authority**: The "Dispatch Coordinates" section explicitly highlights **Pace and Pensacola**, framing the mobile service not just as a convenience, but as a specialized local logistical advantage.
*   **Production-Ready Features**: The site includes a floating navigation bar for immediate booking, a custom-styled service request form with validation UI, and a dedicated map slot for the dispatch area.

The final result is a memorable, unique digital presence that positions JCmotive as the premier choice for mobile automotive excellence in the Florida Panhandle.

---

---
name: Automotive Editorial System
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#37393b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#282a2c'
  surface-container-highest: '#323537'
  on-surface: '#e1e2e4'
  on-surface-variant: '#e3bfb3'
  inverse-surface: '#e1e2e4'
  inverse-on-surface: '#2e3132'
  outline: '#aa897f'
  outline-variant: '#5b4138'
  surface-tint: '#ffb59c'
  primary: '#ffb59c'
  on-primary: '#5c1900'
  primary-container: '#ff5f1f'
  on-primary-container: '#561700'
  inverse-primary: '#ab3600'
  secondary: '#c2c7cf'
  on-secondary: '#2c3137'
  secondary-container: '#42474e'
  on-secondary-container: '#b1b5be'
  tertiary: '#bec7d5'
  on-tertiary: '#28313c'
  tertiary-container: '#8c95a2'
  on-tertiary-container: '#252e38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#832700'
  secondary-fixed: '#dee3eb'
  secondary-fixed-dim: '#c2c7cf'
  on-secondary-fixed: '#171c22'
  on-secondary-fixed-variant: '#42474e'
  tertiary-fixed: '#dae3f1'
  tertiary-fixed-dim: '#bec7d5'
  on-tertiary-fixed: '#131c26'
  on-tertiary-fixed-variant: '#3f4753'
  background: '#111415'
  on-background: '#e1e2e4'
  surface-variant: '#323537'
typography:
  headline-display:
    fontFamily: Archivo Narrow
    fontSize: 80px
    fontWeight: '700'
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
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button-text:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  block-gap: 120px
---

## Brand & Style

This design system is built upon the intersection of high-performance automotive engineering and premium editorial design. It targets a clientele that values precision, technical expertise, and a sophisticated service experience. The aesthetic leans heavily into a **Modern Editorial** style, utilizing structured layouts, high-contrast typography, and a technical grit that avoids the clichés of "grease-monkey" shops in favor of a "modern laboratory" feel.

The emotional response should be one of absolute confidence and controlled speed. We achieve this through a blend of **High-Contrast Bold** elements and **Corporate Modern** reliability. The UI should feel like a high-end digital dashboard: functional, data-rich, yet elegantly sparse where it matters most.

## Colors

The palette is rooted in the "Deep Asphalt" environment, using a dark mode default to emphasize depth and premium quality.

- **Deep Asphalt (Secondary):** A rich, dark charcoal navy used for the primary canvas and deep background layers. It provides the foundation of stability.
- **Ignition Orange (Primary):** A high-vibrancy accent reserved strictly for calls to action, active states, and critical performance indicators. It represents energy and the spark of ignition.
- **Machined Silver (Tertiary):** A spectrum of cool greys used for borders, secondary text, and technical illustrations. It evokes the feel of brushed aluminum and steel components.
- **Pure White (Neutral):** Used primarily for body copy and high-level headings to ensure maximum legibility against the dark backgrounds.

## Typography

Typography is the primary driver of the brand's editorial authority. 

**Archivo Narrow** is used for all major headings. Its condensed nature evokes speed, efficiency, and the verticality of luxury magazine covers. For the body, **Hanken Grotesk** provides a sharp, contemporary sans-serif experience that remains highly legible during long technical reads. 

We introduce **JetBrains Mono** for "data blocks" and technical specifications. This monospaced font reinforces the engineering narrative, making service details and pricing feel like precise telemetry data. 

Use heavy weight contrasts—pair `headline-display` with `body-md` to create a dramatic hierarchy that draws the eye to key service offerings.

## Layout & Spacing

The layout follows a **Fixed Grid** system inspired by technical blueprints. We use a 12-column grid for desktop and a 4-column grid for mobile.

- **The Macro/Micro Contrast:** Layouts should alternate between generous, airy sections (macro spacing) and dense, information-heavy "Data Blocks" (micro spacing). 
- **The Blueprint Grid:** Use subtle 1px Machined Silver lines to separate sections, mimicking the look of an architectural or technical drawing.
- **Speed Lines:** Horizontal separators should never be static; use 1px lines that vary in opacity from 0% to 40% across the container width to imply movement and focus.
- **Breakpoints:**
  - Mobile: < 600px (Margins: 16px)
  - Tablet: 600px - 1024px (Margins: 32px)
  - Desktop: > 1024px (Margins: 64px, Max-width: 1280px)

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Tonal Layering** and **Technical Outlines**. Depth is communicated through z-axis stacking of "Deep Asphalt" shades.

- **Base Layer:** #12171D (Deep Asphalt).
- **Surface Layer:** #1A1F26 (Slightly lighter, used for cards and containers).
- **Overlay Layer:** #252B33 (Used for modals or elevated action items).
- **Outlines:** Instead of shadows, use 1px "Machined Silver" borders at 15-20% opacity to define boundaries. 
- **Glow Effects:** Critical alerts or active "Ignition Orange" elements may use a soft, 8px gaussian blur of the same color at 20% opacity to simulate the glow of a dashboard indicator.

## Shapes

The shape language is **Soft (0.25rem)**. While a completely sharp edge feels aggressive, a small radius suggests "machined precision"—like the chamfered edge of a metallic engine part.

- **Primary Buttons:** Utilize a 4px (0.25rem) radius.
- **Data Cards:** Utilize a 4px (0.25rem) radius with a subtle 1px border.
- **Input Fields:** Maintain the 4px radius for a consistent, "tooled" look.
- **Iconography:** Use linear, 2px stroke icons with square terminals to match the technical font choices.

## Components

### Buttons
- **Primary:** Background: Ignition Orange; Text: Deep Asphalt (Bold, Uppercase); Sharp 4px corners. No shadow.
- **Secondary:** Background: Transparent; Border: 1px Machined Silver; Text: Neutral White.
- **Tertiary:** Text-only with a leading "speed line" (a 24px horizontal 2px line) that expands on hover.

### Data Blocks (Cards)
Cards are used to display service details. They should feature a `label-technical` header in monospaced type, followed by a `headline-md` title. Use 1px internal dividers to separate price, duration, and technical specs.

### Input Fields
Dark backgrounds (#1A1F26) with a bottom-only 1px border in Machined Silver. The border transitions to Ignition Orange on focus. Use JetBrains Mono for placeholder text to maintain the technical vibe.

### Chips/Tags
Small, rectangular containers with `label-technical` text. Use a low-opacity Machined Silver background. These are used for status indicators like "In Progress" or "Completed."

### Progress Indicators
Linear bars only. Use a thin 2px grey track with a high-contrast Ignition Orange fill to mimic a tachometer or digital gauge.
