I have designed and built a bespoke, high-fidelity homepage for **Frontline Towing**. 

### Design Rationale:
*   **Rugged Editorial Aesthetic**: I avoided the generic local-business template in favor of a "Rugged Editorial" look. This uses high-contrast typography (Oswald), deep charcoal backgrounds, and industrial "Caution Yellow" accents to communicate authority and reliability.
*   **Asymmetric Layouts**: The capabilities and "About" sections utilize intentional density and asymmetric grids, creating a unique visual rhythm that feels custom-designed rather than assembled.
*   **Industrial Motifs**: I incorporated vertical rule lines and heavy borders that echo road markings and structural grit, reinforcing the brand's position as the "Frontline" of recovery.
*   **Production-Ready Utility**: The site includes a prominent emergency contact "Call Now" anchor, a dedicated dispatch request form, and a high-visibility credibility strip to convert users in high-stress situations.

### Key Features:
*   **Custom Map Slot**: Implemented as requested for a future interactive map integration.
*   **Responsive Framework**: Fully optimized for desktop and mobile (375px) with custom CSS properties for easy brand updates.
*   **Interactive Elements**: Smooth scrolling and form validation UI states are baked into the frontend code.

The design is now live on your canvas. Does this visual direction align with your vision for the brand, or would you like to explore different textures or typographic weights?

---

---
name: Rugged Editorial
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c5c6ca'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8f9194'
  outline-variant: '#44474a'
  surface-tint: '#c6c6c9'
  primary: '#c6c6c9'
  on-primary: '#2f3133'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#5d5e61'
  secondary: '#fff9ef'
  on-secondary: '#3a3000'
  secondary-container: '#ffdb3c'
  on-secondary-container: '#725f00'
  tertiary: '#ffb5a0'
  on-tertiary: '#601400'
  tertiary-container: '#3c0900'
  on-tertiary-container: '#f44200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#872000'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Oswald
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 84px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 36px
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Oswald
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Oswald
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.03em
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  block-padding: 120px
---

## Brand & Style
The brand identity is built on a foundation of "Rugged Sophistication," merging the raw, industrial power of heavy-duty towing with the refined precision of an elite concierge service. The design system rejects the "greasy" stereotypes of the industry in favor of a high-contrast, editorial aesthetic that feels both authoritative and premium.

The visual direction leans heavily into **High-Contrast / Bold** styles with elements of **Brutalism**. It utilizes asymmetric color blocking, heavy vertical rules, and intentional typographic density to create a sense of urgency and strength. The UI should evoke the feeling of a high-end architectural journal or a premium automotive publication—utilizing whitespace not just for breathing room, but as a deliberate framing device for "frontline" action photography.

## Colors
The palette is titled "Asphalt & Hazard." The primary canvas is **Deep Asphalt (#1A1C1E)**, providing a heavy, grounded base that feels industrial and premium. **Caution Yellow (#FFD700)** serves as the high-visibility functional color, used for secondary actions and highlighting essential data. 

**Emergency Orange (#FF4500)** is reserved strictly for critical calls to action, such as "Request Immediate Dispatch" or "Emergency SOS." **Stark White** is used for primary typography and editorial containers to maintain a high-contrast, clean finish. Surfaces should alternate between deep charcoal and pure white blocks to create the "road marking" effect described in the layout motifs.

## Typography
This design system employs a high-contrast typographic pairing to reinforce the "Rugged Sophistication" theme. 

**Oswald** is the authoritative voice. Its condensed, geometric forms suggest speed, mechanical precision, and structural strength. It is used exclusively for headlines, display text, and functional labels. All headlines should be set in uppercase to maximize their architectural impact.

**Source Serif 4** provides the "Editorial" counterbalance. It is used for all body copy and long-form descriptions. Its classic, legible proportions lend an air of established reliability and luxury, ensuring that service descriptions and company history feel professional and trustworthy. Use generous line-heights for body text to maintain the editorial feel.

## Layout & Spacing
The layout philosophy rejects standard card-based grids in favor of **asymmetric color blocking** and intentional typographic overlap. 

**Key Layout Rules:**
1.  **Vertical Rules:** Use 2px or 4px vertical lines (Caution Yellow or Asphalt) to separate sections or lead the eye through the content.
2.  **Overlaps:** Headlines should frequently overlap image containers or color blocks by 20–40px to create depth without using shadows.
3.  **Density:** Information should be grouped into dense clusters, surrounded by large expanses of "Asphalt" or "White" space.
4.  **The "Road Marking" Grid:** Use a 12-column grid for desktop, but align elements off-center. For example, a text block might span columns 2 through 6, while an image spans 7 through 12, creating a rhythmic, non-symmetrical balance.
5.  **Breakpoints:** On mobile, transitions should move from side-by-side asymmetry to vertical stacking, maintaining the heavy vertical rule on the left margin to anchor the content.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering and Bold Borders** rather than traditional shadows. 

Avoid ambient blurs. Instead, use high-contrast layering: a White container sitting directly on an Asphalt background creates an immediate, sharp "lift." To indicate interactivity, use **"Hazard" borders**—thick 4px solid lines in Caution Yellow. 

For secondary depth, use "Grit Overlays": subtle, low-opacity grain or noise textures applied to Deep Asphalt surfaces to give them a tactile, metallic, or pavement-like quality. UI elements should feel "heavy" and "bolted down" rather than floating.

## Shapes
The shape language is strictly **Sharp (0)**. There are no rounded corners in this design system. 

Every button, input field, image frame, and color block must have 90-degree angles. This reinforces the industrial, rugged nature of the brand. "Pill" shapes or soft radii would undermine the authoritative tone. To add visual interest to these sharp shapes, use "clipped corners" (45-degree chamfers) on primary buttons to mimic industrial machinery or warning signs.

## Components
### Buttons
*   **Primary (Emergency):** Solid Emergency Orange (#FF4500) background, White Oswald Bold text, uppercase. No border. Sharp corners.
*   **Secondary (Functional):** Solid Caution Yellow background, Asphalt text. 
*   **Ghost:** Transparent background with a 2px Stark White or Asphalt border.

### Input Fields
*   Asphalt background with a 1px White bottom-border only (minimalist/editorial) or a full 2px sharp border. Labels should be small, uppercase Oswald set above the field.

### Cards & Containers
*   Cards should not have shadows. They should be defined by solid color fills (White or Asphalt) and separated by 1px rules. 
*   Use "Header Tags"—a small Caution Yellow block in the top left corner of a card—to categorize service types (e.g., "HEAVY DUTY", "ROADSIDE").

### Vertical Progress Indicators
*   For service tracking (e.g., "Truck Dispatched"), use a heavy 4px vertical line with sharp square nodes to indicate progress, mimicking a road map or industrial schematic.

### Iconography
*   Strictly thick-stroke, monolinear icons. No fills unless used for status indicators. Icons should be sharp and geometric.
