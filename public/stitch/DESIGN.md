I have designed **LeadGlass**, a bespoke Command Center for solo-operator lead generation. 

### Design Architecture
- **The Split-Pane Orchestrator**: Unlike standard dashboards, LeadGlass uses a high-density, tactical layout. I’ve integrated a persistent left 'Spine' for global navigation and a status-heavy 'Pulse' footer.
- **The Review Desk**: A human-in-the-loop workspace designed for speed. It features a queue of leads on the left with a live email preview and action panel on the right, allowing for rapid-fire approvals.
- **Pipeline Ignition**: A dedicated 'mission control' view for automated searches. It includes a multi-step visual tracker and a live terminal log to give the operator real-time feedback on scraping and design processes.
- **Visual Identity**: The system uses a 'LeadGlass' theme—deep slate surfaces with electric cyan accents and Playfair Display serif headers—to create a professional, "tacticool" atmosphere that feels more like a flight deck than an admin panel.

The mockup is built as a production-quality, desktop-first (1280px) HTML document showing all four functional areas (Discovery, Review, Search, and Import) with realistic sample data.

Does this layout meet your vision for a solo-operator tool, or should we refine the density of the Discovery Queue?

---

---
name: LeadGlass
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffe2ab'
  on-secondary: '#402d00'
  secondary-container: '#ffbf00'
  on-secondary-container: '#6d5000'
  tertiary: '#f2f5ff'
  on-tertiary: '#2c3138'
  tertiary-container: '#d5d9e3'
  on-tertiary-container: '#5a5f67'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#fbbc00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#dee2ec'
  tertiary-fixed-dim: '#c2c7d0'
  on-tertiary-fixed: '#171c23'
  on-tertiary-fixed-variant: '#42474f'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  section-header:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  density-xs: 4px
  density-sm: 8px
  density-md: 12px
  review-lg: 48px
  review-xl: 80px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for high-performance productivity, blending the precision of "tacticool" interfaces with the elegance of luxury editorial design. It targets power users who require high data density without sacrificing aesthetic sophistication.

The style is a hybrid of **Minimalism** and **Glassmorphism**, utilizing deep obsidian layers and sharp accent colors to create a focused, "heads-up display" atmosphere. The emotional response is one of controlled urgency and professional mastery—calm, dark, and technologically advanced.

## Colors
This design system utilizes a "Deep Slate" foundation to avoid the harshness of pure black, providing better depth for glass effects.

- **Primary (Electric Cyan):** Reserved for primary actions, active states, and critical progress indicators. It should feel like it's glowing against the dark background.
- **Secondary (Amber):** Used specifically for warnings, high-priority notifications, and time-sensitive alerts.
- **Neutral/Surface:** A range of slates. `#0F1115` serves as the base canvas, while `#1A1F26` is used for elevated containers.
- **Accents:** Subtle slate-blue grays are used for borders and secondary text to maintain a cool, technical temperature.

## Typography
The typographic strategy relies on the tension between the high-contrast, editorial **Playfair Display** and the functional, neutral **Inter**.

- **Headlines:** Use Playfair Display for section starts and major workspace headers to inject a premium feel. 
- **UI & Data:** Use Inter for all functional elements, inputs, and data grids to ensure maximum legibility at small sizes.
- **Labels:** Small caps with increased tracking are used for metadata and category headers to reinforce the "tacticool" technical aesthetic.
- **Technical Data:** While Inter is the primary body face, monospaced numerals (from JetBrains Mono or Inter's built-in features) should be used for timestamps and coordinates.

## Layout & Spacing
The layout operates on a dual-density philosophy. 

1. **Dashboard/Grid View:** Uses a tight 4px baseline grid. Padding is minimized (`density-sm`) to allow as much data as possible to be visible "above the fold."
2. **Review/Focus Workspace:** Switches to an expansive layout with generous margins (`review-lg`) and centered content columns to encourage deep work and reduce cognitive load.

**Breakpoints:**
- **Mobile (<768px):** Single column, 16px side margins. Navigation collapses to a bottom bar.
- **Tablet (768px - 1280px):** 8-column fluid grid. Sidebars become collapsible overlays.
- **Desktop (>1280px):** 12-column fixed grid (max-width 1440px). Permanent left-hand utility rail (64px wide).

## Elevation & Depth
Depth is communicated through **Glassmorphism** and tonal layering rather than traditional drop shadows.

- **Base Layer:** Deep Slate (#0F1115), flat.
- **Floating Panels:** Use a backdrop filter (blur: 12px) with a semi-transparent fill of the primary surface color at 70% opacity. 
- **Borders:** Instead of shadows, use 1px "inner-glow" borders. Use a top-edge highlight (White @ 10%) and a subtle surrounding border (White @ 5%) to define edges against the dark background.
- **Active State:** Elements in focus should feature a subtle "outer-glow" using the Electric Cyan accent at very low opacity (15%) to simulate a light-emitting screen.

## Shapes
The shape language is "Soft-Technical." To maintain the tacticool aesthetic, large border radii are avoided.

- **Standard Components:** 4px (0.25rem) radius for buttons, inputs, and small cards. This keeps the UI feeling sharp and precise.
- **Large Containers:** 8px (0.5rem) radius for main workspace panels and modals.
- **Interactive Triggers:** Select items like radio buttons or active tab indicators may use 0px (Sharp) corners to emphasize a "military-grade" software feel.

## Components

- **Buttons:**
    - **Primary:** Solid Electric Cyan with black text. No gradients. 4px radius.
    - **Secondary:** Ghost style. 1px Slate border, Cyan text on hover with a 5% Cyan fill.
- **Input Fields:** Darker than the background (#08090A) with a bottom-only 1px border. The border turns Electric Cyan on focus.
- **Chips/Tags:** Monospaced text, 2px radius, background color using a 10% tint of the category color (e.g., 10% Amber for priority tags).
- **Data Tables:** Row-based. No vertical borders. Zebra striping using a 2% lighter slate for alternating rows. On hover, the entire row gains a subtle 1px Electric Cyan left-border accent.
- **Cards:** Glassmorphic background with a 1px "inner-glow" border. Header text in Playfair Display (italic).
- **Status Indicators:** Small, glowing circular pips. Use a multi-layered shadow for the "glow" effect (e.g., `0 0 8px Cyan`).
