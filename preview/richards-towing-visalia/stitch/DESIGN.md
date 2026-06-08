I’ve designed a bespoke, industrial-premium homepage for **Richards Towing** that moves far beyond the standard local-business template.

### Design Highlights:
*   **Industrial Identity:** A high-contrast "Industrial Premium" visual language using a deep obsidian, safety amber, and concrete gray palette.
*   **Editorial Layout:** Swapped generic card grids for a bold, asymmetric layout with massive typographic hierarchy and intentional density.
*   **Memorable Motif:** Subtle use of hazard-stripe accents and thick-bordered "caution" style framing throughout the experience.
*   **Bespoke Sections:**
    *   **The Credibility Ticker:** A high-impact status bar reinforcing 24/7 reliability.
    *   **Service Excellence:** Full-bleed, high-detail blocks that showcase heavy-duty recovery.
    *   **The Richard Standard:** A narrative-driven About section that positions the brand as the local authority in precision.

The code is production-ready, fully responsive, and includes a mobile-optimized navigation system.

How does this visual direction feel for the Richards Towing brand?

---

---
name: Industrial Premium
colors:
  surface: '#181309'
  surface-dim: '#181309'
  surface-bright: '#3f382d'
  surface-container-lowest: '#130d05'
  surface-container-low: '#211b11'
  surface-container: '#251f14'
  surface-container-high: '#30291e'
  surface-container-highest: '#3b3428'
  on-surface: '#ede1d0'
  on-surface-variant: '#d5c4ab'
  inverse-surface: '#ede1d0'
  inverse-on-surface: '#362f24'
  outline: '#9e8f78'
  outline-variant: '#514532'
  surface-tint: '#ffba20'
  primary: '#ffdca1'
  on-primary: '#412d00'
  primary-container: '#ffb800'
  on-primary-container: '#6b4c00'
  inverse-primary: '#7c5800'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#e1e1e1'
  on-tertiary: '#2f3131'
  tertiary-container: '#c4c5c5'
  on-tertiary-container: '#505252'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea8'
  primary-fixed-dim: '#ffba20'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#181309'
  on-background: '#ede1d0'
  surface-variant: '#3b3428'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  base: 4px
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  border-thick: 4px
  border-thin: 1px
---

## Brand & Style
The design system for Richards Towing embodies an "Industrial Premium" aesthetic—a fusion of heavy-duty reliability and high-end editorial sophistication. It targets a clientele that values precision and professional authority in stressful situations.

The visual language draws from **Modern Brutalism** and **High-Contrast Editorial** styles. It rejects soft shadows and delicate transitions in favor of raw, structural honesty. The interface should feel constructed rather than rendered, utilizing heavy strokes, asymmetric layouts, and a rigid adherence to a "hazard-informed" grid. The emotional response is one of absolute stability, immediate visibility, and rugged expertise.

## Colors
This design system utilizes a high-contrast, dark-dominant palette to mirror the asphalt and machinery of the towing industry.

- **Deep Obsidian (#111111):** The primary surface color. It provides a void-like depth that allows technical information to pop.
- **Safety Amber (#FFB800):** The high-visibility action color. Used for primary call-to-actions, critical status indicators, and branding accents.
- **Concrete Gray (#F2F2F2):** Used for primary typography and high-contrast borders to ensure maximum legibility against the dark background.

Color should be applied in large, monolithic blocks. Avoid gradients; use solid fills to maintain a "painted-on-metal" feel.

## Typography
The typography is the structural backbone of the design system. It uses a triple-threat approach:
1. **Headlines (Anton):** Massive, condensed, and powerful. Headlines must feel like they are stamped onto the page.
2. **Body (Hanken Grotesk):** A clean, modern grotesque that provides high readability for service descriptions and logistics.
3. **Labels (JetBrains Mono):** A technical monospaced font used for data points (VINs, coordinates, timestamps) to evoke precision engineering.

Large typography should often bleed off the edge of containers or be cropped by heavy borders to reinforce the editorial, bold look.

## Layout & Spacing
The layout follows a **Fixed Grid** model with a heavy emphasis on asymmetric block construction. 

- **The Grid:** A 12-column grid on desktop with generous 64px margins. Content should not always center; use offset columns (e.g., content spanning columns 1-8 while columns 9-12 remain empty or hold a single vertical label).
- **Hazard Separators:** Use 45-degree diagonal stripe patterns (Amber/Black) as section breaks or "loading" indicators.
- **Framing:** Use heavy 4px Concrete Gray borders to encase content blocks. These blocks should often overlap or stagger rather than sit in a neat row.
- **Mobile:** Transition to a 4-column grid with 16px margins. Maintain the heavy border weight even on smaller screens to preserve the "Industrial" feel.

## Elevation & Depth
This design system rejects shadows. Depth is achieved through **Tonal Stacking** and **Asymmetric Overlaps**.

- **Level 0:** Deep Obsidian (#111111) base.
- **Level 1:** Content blocks with 4px Concrete Gray borders.
- **Level 2:** Safety Amber accents that sit "on top" of the borders, appearing like magnets or decals attached to a machine.

Instead of traditional elevation, use "Inverted Blocks"—switching a section to a Concrete Gray background with Obsidian text—to signify a change in hierarchy or a high-priority callout.

## Shapes
The shape language is strictly **Sharp (0px)**. 

There are no rounded corners in this design system. All containers, buttons, and input fields must have hard 90-degree angles. This reinforces the "Industrial" theme, suggesting steel plates and rigid construction. Diagonal cuts (chamfers) at 45 degrees may be used on the corners of buttons or section headers to mimic heavy machinery warning plates.

## Components
- **Buttons:** Large, rectangular, and flat. Primary buttons are Safety Amber with Obsidian text (Anton, uppercase). On hover, the button should invert or gain a thick Concrete Gray outline.
- **Asymmetric Blocks:** Instead of standard cards, use "Panels." A panel might have a heavy top border that extends beyond the right edge of the container. 
- **Hazard Dividers:** Use a repeating pattern of 16px wide diagonal stripes (Amber/Black) as a horizontal rule to separate major sections.
- **Inputs:** Concrete Gray 1px outlines with JetBrains Mono text. Labels sit in a "tab" box that breaks the top-left border of the input field.
- **Status Chips:** Rectangular boxes with monospaced text. Use "CAUTION" style styling—heavy borders and high-contrast fills.
- **Technical Lists:** Use "01", "02" numbering in Anton font, sized significantly larger than the list content, positioned to the left of the text block.
