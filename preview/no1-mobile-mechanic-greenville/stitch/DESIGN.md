I've designed a bespoke, editorial-grade homepage for **No1 Mobile Mechanic**. 

This design breaks away from the standard "local business" look by adopting an **Industrial Editorial** aesthetic. It combines high-contrast typography, an asymmetrical grid, and intentional use of whitespace to create a premium, memorable first impression.

### Design Highlights:
- **Visual Identity**: Established a high-impact color palette of deep charcoal and "Warning Yellow," supported by heavy-rule borders and a "No1" wordmark that feels like an engineering stamp.
- **Hero & Credibility**: A bold, typographic-driven hero section immediately establishes authority, followed by a thick-bordered credibility bar that anchors the brand's expertise.
- **Service Directory**: Instead of a generic card grid, I created a structured service directory that feels like a technical manual, emphasizing the precision of the work.
- **Local Context**: Dedicated sections for the Greenville community, including a high-contrast location block and an "Industrial Artisan" narrative for the about section.

The site is fully responsive and includes production-ready semantic HTML, custom CSS tokens, and basic interactive validation for the service request form.

---

---
name: Industrial Editorial
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#111c2c'
  on-tertiary-container: '#798499'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#d8e3fa'
  tertiary-fixed-dim: '#bcc7dd'
  on-tertiary-fixed: '#111c2c'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Public Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-serif:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.4'
  headline-sm:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
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
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  border-thick: 4px
  border-thin: 1px
---

## Brand & Style
The design system embodies the "Industrial Editorial" aesthetic, bridging the gap between heavy-duty automotive reliability and high-end boutique service. The brand personality is authoritative, precise, and unapologetically premium. It targets a clientele that values expert craftsmanship and white-glove convenience.

The visual style is a fusion of **Brutalism** and **Minimalism**. It utilizes raw, heavy borders and structured grids inspired by mechanical schematics, paired with the expansive whitespace and sophisticated typographic hierarchy found in luxury print journals. The emotional response should be one of "rugged sophistication"—the feeling of a high-performance engine detailed to perfection.

## Colors
The "Grit and Gleam" palette centers on high-contrast functionality. 

- **Primary (Deep Charcoal):** Used for primary text, heavy borders, and structural elements. It provides the "Grit" and weight.
- **Secondary (Warning Yellow):** Reserved for critical actions, status indicators, and high-impact accents. It mimics the visibility of industrial safety equipment.
- **Tertiary (Brushed Steel Blue):** Used for secondary UI elements, icons, and subtle interactive states, providing a metallic, engineered feel.
- **Background (Off-white Linen):** The canvas for the editorial experience, providing a premium, tactile contrast to the dark mechanical elements.

## Typography
The typography strategy utilizes a "Structural vs. Narrative" approach. 

- **Structural (Public Sans):** Used for headlines and functional labels. This condensed, grotesque typeface evokes the precision of engineering and blueprints.
- **Narrative (Libre Caslon Text):** Used for sub-headlines and pull quotes. This high-contrast serif adds the "Editorial" layer, signaling a premium, human-centric service.
- **Utility (Inter):** A systematic sans-serif for body copy and data-heavy interfaces to ensure maximum legibility at smaller scales.

## Layout & Spacing
The layout follows a **Mechanical Grid** model—a 12-column system that is intentionally rigid yet capable of asymmetrical "off-grid" placements for high-impact imagery.

- **Asymmetry:** Use large offsets where content spans 7 columns and leaves 5 columns of whitespace to create an editorial feel.
- **Heavy Rule Lines:** Use 4px "Primary" colored borders to separate major sections, mimicking the layout of a technical manual or a high-end broadsheet.
- **Breakpoints:** 
  - Mobile (<768px): 4-column grid, reduced margins (20px), focus on vertical stacking with heavy horizontal dividers.
  - Desktop (>1200px): 12-column grid, generous margins (64px+), utilizing horizontal space for "Technical Specs" sidebars.

## Elevation & Depth
This design system rejects traditional shadows in favor of **Tonal Layers** and **Bold Borders**. 

- **Physical Stacking:** Depth is communicated through overlapping elements (e.g., an image partially covering a text block) and the use of heavy borders.
- **Texture:** A subtle "grain" or "noise" overlay should be applied to dark Primary color sections to simulate textured metal or asphalt.
- **Outlines:** Instead of elevation, use `border-thin` for secondary containers and `border-thick` for primary components like hero cards or call-to-action sections.

## Shapes
The shape language is strictly **Sharp (0px)**. All containers, buttons, and input fields must have square corners. This reinforces the industrial, "no-nonsense" mechanical theme. 

Visual interest is created through the intersection of lines rather than the softness of curves. Diagonal cuts (45-degree chamfers) can be used sparingly on decorative corner elements to reference specialized mechanical components.

## Components
- **Buttons:** Primary buttons are Solid Primary with On-Primary text. Secondary buttons are Outline Primary (4px) with uppercase label-caps. Hover states should "invert" (e.g., Secondary Yellow background with Primary text).
- **Cards:** Use a 1px border with a heavy 4px "accent bar" on the top or left side. Backgrounds should alternate between Surface (White) and Background (Linen) to create rhythm.
- **Inputs:** Underline-only or full-border-thick inputs with label-caps positioned above the field. No rounded corners.
- **Lists:** Use "Schematic Lines"—horizontal dividers that extend to the edge of the container, with small mechanical "plus" (+) icons instead of traditional bullets.
- **Status Chips:** Rectangular, using Secondary (Yellow) for "In Progress" and Tertiary (Steel) for "Completed," utilizing bold black text for maximum legibility.
- **Imagery:** Photography should be high-contrast, desaturated, or black-and-white, focusing on mechanical details, tools, and Greenville's local industrial textures.
