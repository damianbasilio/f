I've designed a bespoke, editorial-grade homepage for **Two Cities Towing & Roadside LLC**. 

### Design Rationale:
*   **Visual Identity:** I moved away from generic "emergency" aesthetics to create the **"Urban Industrial Authority"** style. It uses a high-contrast palette of Midnight Charcoal and Industrial Amber to project premium reliability.
*   **The "Urban Grid" Layout:** Instead of standard containers, I used a structured layout motif with thin technical rules and asymmetrical spacing. This gives the site an architectural, precise feel that mirrors the mechanical nature of their work.
*   **Strong Typography:** I used bold, oversized grotesque headings for impact, paired with mono-accented details to emphasize their status as local experts in Midland and Odessa.
*   **Bespoke Sections:**
    *   **Hero:** A cinematic, high-impact introduction focusing on "The Urban Authority."
    *   **Mechanical Solutions:** A technical services grid designed to look like an industrial catalog.
    *   **Heritage:** An editorial section dedicated to their roots in the West Texas region.
    *   **Production-Ready:** The site includes a fully functional responsive navigation, form validation UI, and a dedicated map slot ready for integration.

The code is clean, semantic, and optimized for a premium desktop experience while remaining fully responsive. How does this new visual direction feel for the brand?

---

---
name: Urban Industrial Authority
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#d7c3ae'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#9f8e7a'
  outline-variant: '#524534'
  surface-tint: '#ffb955'
  primary: '#ffc880'
  on-primary: '#452b00'
  primary-container: '#f5a623'
  on-primary-container: '#644000'
  inverse-primary: '#835500'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#d1d1d2'
  on-tertiary: '#2f3131'
  tertiary-container: '#b5b6b6'
  on-tertiary-container: '#464748'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb4'
  primary-fixed-dim: '#ffb955'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#633f00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button-text:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is built upon a "Rugged-Premium" duality. It departs from the cluttered, low-trust aesthetic of traditional towing services, instead positioning itself as a high-end urban utility. The brand personality is grounded, authoritative, and meticulously organized.

The visual direction follows a **Modern-Industrial** style, characterized by:
- **Architectural Precision:** Heavy use of thin technical lines (the "City Line" motif) to divide sections and frame content.
- **High-Contrast Editorial:** Dramatic shifts between deep charcoal backgrounds and vibrant amber accents.
- **Functional Brutalism:** Utilizing monospaced fonts and grid-based layouts to evoke a sense of mechanical reliability and logistical expertise.
- **Generous Negative Space:** Creating a premium feel that suggests calmness and control, even in emergency roadside situations.

## Colors
This design system utilizes a high-contrast "Midnight & Amber" palette designed for maximum legibility in both high-glare daytime and low-light roadside environments.

- **Primary (Industrial Amber):** Used exclusively for calls to action, urgent status indicators, and critical branding motifs. It represents the safety and visibility of a beacon.
- **Secondary (Midnight Charcoal):** The foundation of the UI. It provides a deep, stable backdrop that evokes the asphalt and the city at night.
- **Tertiary (Steel Grey):** Used for typography on dark backgrounds and as a surface color for cards or containers to create subtle depth.
- **Technical Rules:** A 10% opacity white or a 20% opacity amber is used for the "City Line" motif—thin 1px borders that define the grid.

## Typography
The typography strategy contrasts heavy, industrial grotesque faces with precise, technical monospaced accents.

- **Headlines:** Set in **Hanken Grotesk**. These should be tight, bold, and impactful. For an editorial feel, use "headline-xl" with negative letter spacing on hero sections.
- **Body:** Set in **Work Sans**. Chosen for its exceptional readability and neutral, professional tone. 
- **Accents & Data:** Set in **Space Mono**. Use this for "label-mono" roles: timestamps, coordinates, vehicle IDs, and small eyebrow headers above main titles. This reinforces the "mechanical" and "logistics" nature of the service.

## Layout & Spacing
The layout is governed by a strict 12-column grid that mimics architectural blueprints.

- **Grid Lines:** Every major section should be separated by a 1px solid line (`#F4F4F4` at 10% opacity). Vertical lines should be used sparingly to separate columns in data-heavy views.
- **Margins:** Desktop uses a generous 80px side margin to push content toward the center, creating an "editorial" column. Mobile drops this to 24px.
- **Rhythm:** Spacing follows a hard 8px base unit. Components should favor large, "airy" internal padding (e.g., 24px or 32px) to maintain the premium feel.
- **The City Line:** Use a recurring horizontal rule that extends to the edge of the viewport, even if the content is contained, to suggest an infinite urban horizon.

## Elevation & Depth
In keeping with the urban-industrial theme, this design system avoids traditional soft shadows. Depth is achieved through **Tonal Layering** and **Technical Borders**.

- **Z-Axis:** Instead of shadows, use "Surface Tiers." The background is `#1A1A1A`. Cards and interactive containers use a slightly lighter `#2D2D2D`.
- **Ghost Outlines:** Primary interaction areas should use 1px solid borders in Industrial Amber or Steel Grey rather than drop shadows.
- **Active State:** When an element is pressed or active, it should "illuminate" (increase border opacity or gain an inner glow) rather than lift off the page.
- **Glassmorphism:** Reserved only for mobile navigation overlays, using a heavy backdrop blur (20px) with a dark tint to maintain focus on the map or primary action.

## Shapes
The shape language is **unapologetically sharp**. To reflect the rugged nature of heavy machinery and urban architecture, rounded corners are strictly avoided.

- **Corners:** 0px radius for all buttons, inputs, and cards. This creates a "blocked" look that feels sturdy and structural.
- **Icons:** Use thick-stroke (2px), geometric icons. Avoid rounded terminals; prefer squared-off ends for all icon lines.
- **Dividers:** Horizontal and vertical rules are 1px thick. Never use feathered or gradient dividers.

## Components
- **Buttons:** Large, rectangular, and high-contrast. The primary button is Solid Amber with Black text. The "City Line" motif is used for secondary buttons as a 1px Steel Grey outline.
- **Inputs:** Dark backgrounds with a 1px bottom-border only, mimicking a technical form. When focused, the bottom-border turns Amber.
- **Cards:** No shadows. Defined by 1px borders and a subtle background shift to `#2D2D2D`.
- **Chips/Status:** Use the "Space Mono" font. Statuses (e.g., "En Route") are displayed in a small box with a 1px border—no rounded corners.
- **The "Service Grid":** A custom component for listing services (Towing, Lockout, etc.) using large-scale Hanken Grotesk numbers (e.g., 01, 02) in the background to emphasize the systematic nature of the business.
- **Action Bar:** A persistent, pinned bottom-bar on mobile containing a "Call Now" button and "Request Service" button, ensuring the local authority is always reachable.
