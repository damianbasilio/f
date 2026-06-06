I've completed the production-ready homepage for **Erection Metal Works**. 

### Design Choices:
*   **Rugged Industrial Identity**: I used the "Industrial Integrity" design system, featuring a bold palette of charcoal and "High-Voltage Orange" to reflect the durability and strength of metal fabrication.
*   **Asymmetric Grid Layout**: The services and "About" sections use a modern, non-standard grid to avoid a generic template feel, giving the site a custom-built character that matches the business's output.
*   **Local Tone**: I integrated the specific "Oh hail no!" messaging from their Facebook page to maintain their authentic, no-pressure local voice.
*   **Conversion Focused**: The "Call Now" CTA is persistent in the header, and the "Emergency Hail Repair" button is highlighted to capture urgent storm-related leads.
*   **Semantic Structure**: The code includes the required `#visit` section with the specific map slot container and a functional preview of the contact validation UI.

The site is fully responsive and optimized for desktop viewing while maintaining a solid 375px-wide experience for mobile users.

---

---
name: Industrial Integrity
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#181919'
  on-primary: '#ffffff'
  primary-container: '#2d2d2d'
  on-primary-container: '#959494'
  inverse-primary: '#c8c6c6'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fc7728'
  on-secondary-container: '#5d2300'
  tertiary: '#15191c'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a2d30'
  on-tertiary-container: '#929498'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffdbcb'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#341000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#e0e2e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1f'
  on-tertiary-fixed-variant: '#44474a'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style
The design system is built for "Erection Metal Works," a brand that balances the raw power of metal construction with the dependability of a local neighbor. The personality is **Reliable, Local, and Ready**. It avoids corporate fluff in favor of an honest, "work-boots-on" aesthetic.

The design style is **Industrial Modern with Brutalist influences**. It utilizes high-contrast color blocking, sharp corners, and asymmetric layouts to mirror the structural nature of metal beams and roofing. Subtle industrial textures (grain or noise) may be used on backgrounds to evoke the feeling of raw materials, while generous white space ensures the professional nature of the business remains clear and approachable.

## Colors
The palette is rooted in the materials of the trade. 

- **Deep Charcoal (#2D2D2D):** Used for primary typography and dark-themed structural sections. It provides a heavy, grounded foundation.
- **Industrial Orange (#F37021):** Reserved exclusively for high-priority Call-to-Actions and critical alerts. It represents visibility and action.
- **Cool Steel Grey (#E5E7EB):** Used for secondary surfaces, borders, and backgrounds to provide a metallic, neutral canvas.
- **Supportive Tones:** Utility colors should remain muted (low-saturation greens for success, muted reds for errors) to keep the focus on the primary brand palette.

## Typography
The typography system prioritizes legibility and strength. 

- **Headlines:** Montserrat is used in bold and extra-bold weights to convey the weight and permanence of metal structures. Large display headers should use tight letter spacing.
- **Body:** Inter provides a clean, neutral balance to the aggressive headings, ensuring service descriptions and estimates are easy to read.
- **Technical Accents:** JetBrains Mono is introduced for small labels, measurements, or "technical specs" (e.g., metal gauge or dimensions) to reinforce the precision of the trade.

## Layout & Spacing
The layout follows a **structured but asymmetric grid**. Use a 12-column grid for desktop where content often breaks the expected alignment—for example, an image might span 7 columns while the text card is offset and overlaps it slightly.

- **Asymmetry:** Shift sections left or right by one column to create a sense of dynamic construction.
- **Spacing Rhythm:** Use a strict 8px base unit. Section gaps are intentionally large to let the work "breathe" and feel monumental.
- **Responsive Behavior:** On mobile, the layout collapses into a single column, but retains "structural" vertical lines using borders to guide the eye.

## Elevation & Depth
This design system rejects soft shadows and "fluffy" layers. Depth is communicated through **Tonal Stacking and Hard Lines**:

- **No Ambient Shadows:** Avoid soft, diffused shadows. Use "Hard Shadows" (100% opacity, 2px-4px offset) in Deep Charcoal if depth is required.
- **Structural Borders:** Use 1px or 2px solid borders in Steel Grey or Deep Charcoal to define containers.
- **Overlays:** Use high-contrast color blocking (e.g., a white text box sitting directly on a Charcoal section) to create hierarchy.
- **Industrial Textures:** Apply a faint SVG noise texture to the primary Charcoal backgrounds to mimic powder-coated metal.

## Shapes
The shape language is **Sharp and Geometric**. Metalwork is defined by precision cuts; therefore, the UI should reflect this.

- **Corners:** All buttons, cards, and input fields must have a 0px radius (Sharp).
- **Angled Cuts:** Optionally, use "clipped corners" (45-degree angles) for decorative elements or primary CTA buttons to mimic industrial chamfering.
- **Lines:** Use thick (2pt-4pt) horizontal and vertical rules to separate content, acting as "structural beams" for the page.

## Components
- **Primary CTA Buttons:** Sharp corners, Industrial Orange background, Deep Charcoal text (for maximum contrast), Montserrat Bold.
- **Service Cards:** White background, 1px Steel Grey border. On hover, the border thickens to 3px Deep Charcoal. Use JetBrains Mono for the "Service Category" label at the top.
- **Input Fields:** Thick bottom-border only (2px Deep Charcoal) to keep the form feeling lightweight but grounded. Label text should be uppercase JetBrains Mono.
- **Before/After Sliders:** Used for hail damage repairs. Use a vertical orange divider line with a "bolt" icon as the handle.
- **Estimator Tool:** A specialized card component with high-contrast inputs for dimensions (width, length, height), utilizing the industrial texture for the header of the card.
- **Badges/Chips:** Used for "Available Now" or "Local Favorite" status. These should look like metal tags—Grey background with small corner "rivet" dots.
