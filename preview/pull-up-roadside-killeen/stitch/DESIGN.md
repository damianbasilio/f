I've designed and built a bespoke, high-fidelity homepage for **Pull-Up Roadside**. 

### Design Highlights:
*   **Industrial Visual Identity:** Moved away from generic "local business" templates in favor of a high-contrast **"Asphalt & Neon"** theme. This uses a deep charcoal base with vibrant safety-yellow accents to evoke high-speed mechanical response and road safety.
*   **Editorial Typography:** Leveraged the bold, condensed weight of the **Anton** typeface for massive, impactful headlines that mirror road signage and industrial branding.
*   **Bespoke Layout:** 
    *   The **Hero section** features a high-motion concept with light-trail imagery and a powerful "We pull you through" brand promise.
    *   The **Services section** utilizes an asymmetric design with large numeric indicators rather than a standard grid, reinforcing the premium, "mechanical response unit" positioning.
    *   A **Live Service Marquee** provides instant credibility by highlighting key service areas in Central Texas.
*   **Production-Ready Features:** 
    *   Full semantic HTML/CSS structure with CSS variables for easy theme management.
    *   Fixed-position navigation for constant access to the emergency dispatch number.
    *   The required **Map Slot** and **Dispatch Form** are integrated with industrial styling.

Is there a specific section you'd like to refine, or would you like to see how this translates to a mobile view?

---

---
name: Asphalt & Neon
colors:
  surface: '#131408'
  surface-dim: '#131408'
  surface-bright: '#393a2b'
  surface-container-lowest: '#0d0f04'
  surface-container-low: '#1b1d0f'
  surface-container: '#1f2113'
  surface-container-high: '#292b1d'
  surface-container-highest: '#343627'
  on-surface: '#e4e4ce'
  on-surface-variant: '#c6c9ab'
  inverse-surface: '#e4e4ce'
  inverse-on-surface: '#303223'
  outline: '#909378'
  outline-variant: '#464932'
  surface-tint: '#bad200'
  primary: '#ffffff'
  on-primary: '#2d3400'
  primary-container: '#d4f000'
  on-primary-container: '#5e6b00'
  inverse-primary: '#586400'
  secondary: '#c8c6c7'
  on-secondary: '#303031'
  secondary-container: '#49494a'
  on-secondary-container: '#bab8b9'
  tertiary: '#ffffff'
  on-tertiary: '#2f3034'
  tertiary-container: '#e3e2e7'
  on-tertiary-container: '#636469'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4f000'
  primary-fixed-dim: '#bad200'
  on-primary-fixed: '#191e00'
  on-primary-fixed-variant: '#424b00'
  secondary-fixed: '#e5e2e3'
  secondary-fixed-dim: '#c8c6c7'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#e3e2e7'
  tertiary-fixed-dim: '#c6c6cb'
  on-tertiary-fixed: '#1a1b1f'
  on-tertiary-fixed-variant: '#46464b'
  background: '#131408'
  on-background: '#e4e4ce'
  surface-variant: '#343627'
typography:
  display-xl:
    fontFamily: anton
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 40px
  title-md:
    fontFamily: geist
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-sm:
    fontFamily: geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  data-mono:
    fontFamily: jetbrainsMono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The visual identity of the design system is rooted in the "Hazard Neon & Asphalt" aesthetic—a high-contrast, editorial take on industrial utility. It evokes the urgency and reliability of professional roadside assistance through a blend of **Brutalism** and **Modern Editorial** design. 

The personality is unapologetically rugged and precise. It moves away from the "soft" friendliness of consumer apps toward a "mechanical excellence" vibe. Key visual motifs include:
- **Kinetic Energy:** Subtle 15-degree slants and "speed lines" used as decorative dividers or background motifs.
- **Structural Integrity:** Heavy rule lines (2px - 4px) that mimic road markings and technical blueprints.
- **Asymmetric Tension:** Layouts that avoid standard centered grids in favor of purposeful, heavy-left or staggered compositions to suggest movement.
- **Precision:** Zero-radius corners to reflect the sharp, calculated nature of mechanical repair.

## Colors

The palette is designed for maximum legibility in high-stress, "on-the-move" environments.

- **Primary (Hazard Neon):** `#E2FF00`. A high-visibility yellow used for critical actions, status indicators, and branding accents. It must always be paired with dark text for accessibility.
- **Secondary (Deep Asphalt):** `#1A1A1B`. The foundation of the UI, providing a heavy, grounded feel that reduces glare during night-time roadside emergencies.
- **Tertiary (Industrial Gray):** `#8E8E93`. Used for secondary information, borders, and inactive states to maintain a metallic, mechanical texture.
- **Accent (Oil & Grit):** Deep blacks and varying shades of cool grays are used to create depth without relying on traditional shadows.

## Typography

Typography is treated as a structural element. 

- **Headlines:** We use **Anton** for its condensed, high-impact presence. It mimics the urgency of highway signage. Headlines should almost always be uppercase and tightly tracked.
- **Body:** **Geist** provides a technical, clean, and highly readable experience. Its monospace-influenced widths feel precise and modern.
- **Data/Technical:** **JetBrains Mono** is reserved for ETA timers, coordinates, pricing, and VIN numbers, emphasizing the mechanical and data-driven nature of the service.

**Styling Note:** Large display type should often overlap or sit very close to structural borders to create an "editorial" density.

## Layout & Spacing

The design system utilizes a **Fixed Grid** with an aggressive spacing rhythm based on a 4px baseline.

- **Desktop:** 12-column grid with wide 64px margins. Content is often pushed to the far edges of the container to create tension.
- **Mobile:** 4-column grid with 16px margins. 
- **Rule Lines:** Use horizontal and vertical lines (1px or 2px) to define zones rather than background color changes.
- **Asymmetry:** Elements like buttons or images should often be offset from the grid by one spacing unit (`base` or `xs`) to create a sense of forward momentum.

## Elevation & Depth

In this design system, depth is achieved through **Hard Layering** and **Tonal Shifts** rather than soft shadows.

1.  **Level 0 (The Road):** Pure black/Deep Asphalt background.
2.  **Level 1 (The Bay):** Surface blocks using `#1E1E1F` with a 1px border of `#8E8E93`.
3.  **Level 2 (The Tool):** High-contrast Neon blocks that sit flush against the level below.

**Shadows:** When shadows are necessary for focus, use "Hard Shadows"—100% opacity, 4px-8px offset, with no blur, in the color of the primary neon or pure black. This maintains the "Brutalist" mechanical feel.

## Shapes

The shape language is strictly **geometric and sharp**.

- **Corners:** 0px radius for all elements (buttons, cards, inputs). This reflects the cold, hard nature of steel and tools.
- **Diagonal Accents:** Use a `clip-path` or SVG mask to create 45-degree chamfered corners on primary call-to-action buttons to suggest "clipped" metal or industrial tags.
- **Indicators:** Use triangles and chevrons instead of circles for icons to maintain the angular theme.

## Components

### Buttons
- **Primary:** Neon yellow background, black Anton text, uppercase. No border. On hover, a hard black offset shadow appears.
- **Secondary:** Transparent background, white text, 2px neon yellow border. 
- **Shape:** Rectangular, sharp corners.

### Cards
- Avoid container-heavy cards. Instead, use a top-border (2px, gray) and a large, bold Anton title to define a section. 
- Content within sections should be separated by thin 1px horizontal rules.

### Input Fields
- Underline style only. A 2px gray bottom border that turns Neon Yellow on focus. 
- Labels sit above the input in `label-caps` (JetBrains Mono).

### Status Chips
- Rectangular blocks. "Active" states use Neon Yellow with black text. "Pending" or "In-Route" uses Industrial Gray.

### Navigation
- Vertical navigation is preferred on desktop to mimic a sidebar menu or a technical manual.
- Use heavy dividers (4px) to separate the logo/brand area from the navigation links.

### Special Component: The "Speed-Gauge" Progress Bar
- Instead of a smooth bar, use a series of vertical blocks that fill up to indicate progress (ETA or service completion), reminiscent of a tachometer.
