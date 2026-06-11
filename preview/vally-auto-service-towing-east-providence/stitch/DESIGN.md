I have designed a bespoke, editorial-grade homepage for **Vally Auto Service & Towing**. 

### Design Highlights:
*   **Unique Visual Identity**: I’ve moved away from standard local-business templates in favor of a high-contrast, industrial aesthetic. The palette of **Carbon, Safety Orange, and Concrete** creates an immediate sense of reliability and urgency.
*   **Editorial Layout**: The design uses a strong typographic hierarchy and asymmetrical grids to feel custom-crafted rather than assembled from a library. The hero section uses bold, overlapping elements to create depth and impact.
*   **Brand Continuity**: The "hazard stripe" visual motif is integrated subtly across the site, reinforcing the towing and emergency service nature of the business.
*   **Production-Ready**: The site includes a dedicated map slot, a fully functional contact form UI, and is built with semantic HTML and modern CSS.

You can now view the full desktop experience on the canvas. Would you like to see how this translates to a mobile view, or shall we refine the specific wording of the 'About' section?

---

---
name: Asphalt & Signal
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#ab3600'
  on-secondary: '#ffffff'
  secondary-container: '#fe5e1e'
  on-secondary-container: '#551600'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#832700'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
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
  label-bold:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  border-thick: 3px
  border-thin: 1px
---

## Brand & Style
The design system is built on a narrative of industrial reliability and emergency precision. It rejects the generic "grease-monkey" aesthetic in favor of a high-end, editorial approach to automotive service. The brand personality is authoritative and urgent, utilizing an **Industrial-Chic** style that blends the raw utility of roadside infrastructure with the refined layout of a premium architectural journal.

The emotional response is one of immediate trust and modern efficiency. Visual interest is generated through high-contrast surfaces, heavy structural lines, and intentional typographic overlaps that mimic the layering of signage on urban landscapes. Brutalist influences appear in the form of thick borders and uncompromising geometric alignment, ensuring the UI feels as sturdy as the service it represents.

## Colors
The palette is derived from the textures of the road and the signals that govern it.

- **Deep Carbon (#1A1A1A):** Used for primary surfaces, heavy borders, and dominant typography to ground the interface in strength.
- **Safety Orange (#FF5F1F):** A high-visibility "emergency" accent. It is used sparingly but impactfully for primary actions, critical status indicators, and hazard motifs.
- **Concrete Gray (#F2F2F2):** The primary background color, providing a clean, industrial canvas that allows the Deep Carbon and Safety Orange to pop without visual fatigue.
- **Functional Accents:** Success states should utilize a desaturated foliage green, while warnings remain strictly within the Safety Orange spectrum to maintain brand cohesion.

## Typography
The typographic hierarchy mirrors industrial wayfinding. 

**Headlines** utilize **Archivo Narrow**, a condensed grotesque that evokes the utility of road signs and equipment labeling. For large display roles, typography should be set with tight leading and negative letter-spacing to create "blocks" of text that feel structural. Use uppercase transformations for all primary navigation and section headings to reinforce authority.

**Body Text** is set in **Hanken Grotesk**, providing a sharp, contemporary contrast to the condensed headers. It offers high legibility for service descriptions and technical specifications. 

**Typographic Overlaps:** In editorial layouts, allow large display type (e.g., "TOWING") to be partially obscured by images or container edges to create a sense of scale and depth.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. It uses a 12-column grid on desktop with generous outer margins to simulate a premium magazine spread.

- **The 8px Rhythm:** All spacing, padding, and height variables must be multiples of 8px to maintain industrial precision.
- **Hazard Accents:** Use 45-degree diagonal "hazard" stripes (Carbon and Orange) as thin dividers or edge treatments for containers.
- **Structural Borders:** Elements are separated by "Deep Carbon" borders (3px for primary containers, 1px for internal divisions) rather than shadows. 
- **Mobile Reflow:** On mobile, the 12-column grid collapses to a 2-column or 4-column system. Large display type should scale aggressively to remain impactful while avoiding word-breaks.

## Elevation & Depth
This design system eschews soft shadows in favor of **Tonal Layering and Hard Borders**. 

Depth is communicated through the physical stacking of high-contrast planes. Surfaces should appear "bolted down" or flush with the grid.
- **Level 0 (Base):** Concrete Gray (#F2F2F2).
- **Level 1 (Card/Surface):** Pure White or Deep Carbon containers with 3px solid borders.
- **Level 2 (Interaction):** When an element is hovered or active, it should not rise with a shadow; instead, it should shift its fill color to Safety Orange or swap its border thickness.
- **Overlays:** Use high-opacity (90%) Deep Carbon for modals to completely isolate the user's focus, mimicking the transition from day to night.

## Shapes
The shape language is strictly **Sharp (0px)**. Rounded corners are avoided to maintain the industrial, heavy-machinery aesthetic. 

Every button, input field, and card must have 90-degree angles. This lack of softness communicates a "no-nonsense" professional attitude. To prevent the UI from feeling dated, use thin, precise internal lines and oversized typography to provide the modern "chic" balance.

## Components

### Buttons
- **Primary:** Solid Deep Carbon background, White Archivo Narrow bold text, 0px radius. On hover, the background flips to Safety Orange.
- **Secondary:** Transparent background, 3px Deep Carbon border, Archivo Narrow bold text.
- **Emergency:** Solid Safety Orange background, Deep Carbon text. Reserved for "Call Now" or "Request Tow."

### Input Fields
- Solid White background with a 1px Deep Carbon bottom border only (monospaced-style). Labels must be in uppercase Archivo Narrow, positioned above the field.

### Cards & Lists
- Cards use a 3px Deep Carbon border. No shadows. 
- **List Items:** Separated by 1px Concrete Gray dividers. Use Safety Orange "chevron" icons to indicate drill-downs.

### Hazard Striping
- A custom component used as a header-bottom accent or a loading bar, consisting of alternating Deep Carbon and Safety Orange diagonal lines at a 45-degree angle.

### Data Displays (Service Status)
- Use large, bold numbers in Archivo Narrow. High-contrast indicators (e.g., "EN ROUTE") should be encased in a solid Deep Carbon "tag" with White text.
