I've designed and built a bespoke, high-fidelity landing page for **J-Brecheen Mobile Mechanic**. 

This design departs from the generic "local business" look in favor of an **Industrial Editorial** aesthetic. It uses a sophisticated dark palette, heavy-duty typography, and technical rule lines to communicate Justin's expertise and the premium nature of his mobile service.

### Key Design Decisions:
- **Typographic Authority:** Used bold, condensed headings to create a sense of strength and reliability, balanced with monospaced secondary text for a technical, "blue-collar elite" feel.
- **Memorable Motif:** Integrated a consistent "technical blueprint" motif using thin borders and gridded layouts to organize complex service information.
- **Conversion-Focused:** Placed the emergency contact and "Initiate Service" actions prominently, acknowledging that most users land here during a high-stress mechanical failure.
- **Editorial White Space:** Despite the "Industrial" theme, I've used generous whitespace to ensure the site feels premium and easy to navigate on mobile or desktop.

The site is fully responsive, semantically structured, and includes a dedicated `#visit` section with the requested map slot. All contact information is accurately integrated.

How does this visual direction feel for the brand? We can refine the "grit" of the textures or adjust the weight of the typography if needed.

---

---
name: Industrial Editorial
colors:
  surface: '#121416'
  surface-dim: '#121416'
  surface-bright: '#38393c'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1e'
  surface-container: '#1e2022'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e5'
  on-surface-variant: '#dac2ae'
  inverse-surface: '#e2e2e5'
  inverse-on-surface: '#2f3133'
  outline: '#a28d7a'
  outline-variant: '#544434'
  surface-tint: '#ffb86b'
  primary: '#ffc68b'
  on-primary: '#492900'
  primary-container: '#ff9f1c'
  on-primary-container: '#683c00'
  inverse-primary: '#895100'
  secondary: '#c6c6c9'
  on-secondary: '#2f3133'
  secondary-container: '#454749'
  on-secondary-container: '#b4b5b7'
  tertiary: '#c9d2da'
  on-tertiary: '#293138'
  tertiary-container: '#adb6be'
  on-tertiary-container: '#3f484f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcbc'
  primary-fixed-dim: '#ffb86b'
  on-primary-fixed: '#2c1700'
  on-primary-fixed-variant: '#683d00'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#dbe4ec'
  tertiary-fixed-dim: '#bfc8d0'
  on-tertiary-fixed: '#141d23'
  on-tertiary-fixed-variant: '#3f484f'
  background: '#121416'
  on-background: '#e2e2e5'
  surface-variant: '#333537'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system blends the rugged reliability of heavy-duty mechanical work with the sophisticated precision of high-end editorial design. The aesthetic is "Industrial Editorial"—a high-contrast, structured approach that values clarity, technical accuracy, and a premium service feel. 

The target audience consists of professionals and vehicle owners in Pensacola who prioritize expertise over budget options. The UI must evoke a sense of "The Master Mechanic": someone who arrives with an organized truck, high-end tools, and surgical precision. 

**Design Style: Brutalist-Minimalism**
- **Structure:** Lean into heavy-duty layouts with clear, rigid hierarchies.
- **Visuals:** Use thin 1px technical rule lines to separate content, mimicking blueprints or technical manuals.
- **Whitespace:** Use generous, intentional whitespace to ensure the "Industrial" feel doesn't become "Cluttered." 
- **Texture:** Apply a subtle grain or "grit" overlay to background surfaces to evoke asphalt and steel without sacrificing legibility.

## Colors

The palette is rooted in the "Deep Asphalt" environment of mobile mechanical work, punctuated by "High-Vis Amber" for critical actions.

- **Deep Asphalt (#0F1113):** The primary background color. It provides a solid, heavy-duty foundation.
- **Secondary Asphalt (#1A1C1E):** Used for cards, containers, and elevated surfaces to create subtle depth.
- **High-Vis Amber (#FF9F1C):** A sophisticated, saturated orange used exclusively for primary calls to action, status alerts, and brand highlights.
- **Oil Silver (#8E979F):** A mid-tone metallic gray used for secondary text, icons, and technical rule lines.
- **White (#FFFFFF):** Used sparingly for high-contrast body text to ensure maximum readability in outdoor (high-glare) mobile environments.

## Typography

The typography system relies on a "Neo-Grotesk meets Monospace" pairing. 

**Headlines:** Archivo Narrow is used in bold, condensed weights. This mimics the high-impact look of industrial signage and vintage workshop manuals. Use uppercase for headlines to project authority.

**Technical Data:** JetBrains Mono is utilized for all labels, metadata, and technical specifications (e.g., VIN numbers, timestamps, pricing). This reinforces the "Mobile Mechanic" aspect of precision and diagnostic expertise.

**Readability:** For mobile users in the field, line heights are kept generous to prevent text crowding on small screens.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model optimized for high-density information.

- **Mobile (Primary):** A 4-column grid with 20px side margins. Content is stacked vertically to allow for easy one-handed operation while a user might be near their vehicle.
- **Desktop:** A 12-column grid centered at 1280px. Large-scale typography should span multiple columns to maintain the "Editorial" feel.
- **Rule Lines:** Use 1px borders (#8E979F at 20% opacity) to separate sections instead of using varied background colors. This keeps the design "Technical" and "Clean."
- **Spacing Rhythm:** All spacing is based on a 4px baseline grid to ensure mathematical alignment.

## Elevation & Depth

To maintain the "Industrial" and "Editorial" aesthetic, this design system avoids soft, fuzzy shadows. Depth is communicated through **Tonal Layering** and **Technical Outlines**.

- **Surface Levels:** The base background is "Deep Asphalt." Interactive elements or cards sit on "Secondary Asphalt" surfaces.
- **Borders:** Instead of shadows, use "Oil Silver" borders (1px) to define the boundaries of cards and modals.
- **Active State:** When an element is pressed or active, it should use a 2px "High-Vis Amber" border to indicate focus.
- **Grit Overlay:** A low-opacity (2-3%) noise texture is applied to the top layer of the entire UI to give a tactile, physical feel to the digital surface.

## Shapes

The shape language is **Sharp (0px)**. 

In an industrial context, rounded corners feel too "consumer-tech" and "soft." Sharp, 90-degree angles communicate precision, structural integrity, and the "hard" nature of mechanical parts. 

- **Buttons:** Perfectly rectangular with no radius.
- **Inputs:** Underlined or fully boxed with sharp corners.
- **Images:** Always sharp-edged, framed by 1px technical rule lines.

## Components

### Buttons
- **Primary:** Background: High-Vis Amber; Text: Deep Asphalt (Bold, Uppercase).
- **Secondary:** Border: 1px Oil Silver; Text: White; Background: Transparent.
- **Ghost:** Text: Oil Silver (Monospace); No background or border.

### Input Fields
- **Style:** "Work Order" style. Solid Deep Asphalt background with a 1px Oil Silver bottom border. Labels are always JetBrains Mono, positioned above the field.

### Chips & Tags
- **Technical Tags:** Small, rectangular boxes with JetBrains Mono text. Used for "Service Type" (e.g., BRAKES, DIAGNOSTIC, SUSPENSION).

### Cards
- **Structure:** No shadow. 1px border in Oil Silver. Use a header area separated by a horizontal 1px rule line.

### Progress Indicators
- **Style:** Linear, high-contrast bars. Completed sections are High-Vis Amber; remaining sections are Secondary Asphalt.

### Navigation
- **Mobile:** A bottom-docked navigation bar with sharp icons and JetBrains Mono labels.
- **Desktop:** A high-contrast side-rail or top-bar featuring large-scale bold typography for section links.
