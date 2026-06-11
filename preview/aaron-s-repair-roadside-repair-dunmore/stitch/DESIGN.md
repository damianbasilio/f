I have designed a bespoke, industrial-strength visual identity and homepage for Aaron's Repair.

### Design Highlights:
- **Visual Identity:** Named "Roadside Industrial," the brand uses a high-contrast **Midnight & Safety Orange** palette. This combination ensures immediate legibility and evokes the urgency of roadside assistance while maintaining a professional shop aesthetic.
- **Typography:** I utilized bold, condensed headings to mimic automotive signage and heavy machinery branding, establishing a sense of strength and reliability.
- **Editorial Layout:** Instead of a standard template, I created a layout that alternates between dense information blocks (like the service grid) and generous, purposeful whitespace to guide the user's eye to the most critical actions, such as the **Emergency Dispatch** contact.
- **Custom Motifs:** A recurring diagonal hazard stripe motif and heavy industrial borders are used to tie the sections together, creating a unique visual thread that feels specific to the mechanical industry.
- **Technical Excellence:** The site is built with semantic HTML, responsive CSS using custom properties for easy theme management, and includes the specific map-slot requirements for your physical location in Dunmore.

The resulting design is a premium, memorable first impression that positions Aaron's Repair as the premier local destination for both emergency recovery and precision shop work.

---

---
name: Roadside Industrial
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e0c0b1'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#a88b7d'
  outline-variant: '#594237'
  surface-tint: '#ffb691'
  primary: '#ffb691'
  on-primary: '#552000'
  primary-container: '#f56e0f'
  on-primary-container: '#531f00'
  inverse-primary: '#9e4300'
  secondary: '#c8c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b6b5b4'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#989696'
  on-tertiary-container: '#2f2f2f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcb'
  primary-fixed-dim: '#ffb691'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#793100'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Barlow Condensed
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  hazard-stripe-width: 12px
---

## Brand & Style
The design system embodies a premium, rugged aesthetic tailored for the automotive repair industry. The brand personality is authoritative, dependable, and mechanically precise. It targets motorists and fleet managers who value efficiency and high-stakes reliability in emergency situations. 

The visual style is a fusion of **Industrial Brutalism** and **Modern Editorial**. It leverages heavy borders, high-contrast layouts, and intentional density to create a sense of structural integrity. The interface avoids soft aesthetics in favor of sharp angles and raw textures, evoking the physical environment of asphalt, steel, and heavy machinery. The emotional response is one of immediate confidence and professional grit.

## Colors
This design system utilizes a high-visibility, dark-mode-first palette. 

- **Primary (Burnished Orange):** Reserved for critical actions, status indicators, and primary branding. It provides a high-contrast focal point against dark backgrounds.
- **Secondary (Slate Grey):** Used for surface elevation and secondary UI elements to provide depth without breaking the monochromatic foundation.
- **Tertiary (Deep Charcoal):** The primary background color, representing asphalt and industrial materials.
- **Neutral (Cream White):** Used exclusively for typography and icons to ensure maximum readability and a premium editorial finish.

Functional colors (Success, Warning, Error) should be desaturated to maintain the rugged aesthetic, except for the "Burnished Orange" which serves as the primary alert signal.

## Typography
The typography strategy relies on the tension between high-impact, condensed headings and technical, airy body text. 

- **Headlines:** Utilize *Barlow Condensed* in heavy weights. These should always be uppercase to mimic automotive signage and industrial labeling. Tight line heights and negative letter spacing on larger displays emphasize the "heavy" feel.
- **Body:** *Inter* provides a modern, neutral contrast. Wider tracking (0.01em+) is encouraged for a premium, editorial feel.
- **Labels/Technical Data:** *Space Mono* (monospaced) is used for timestamps, VIN numbers, and status labels to reinforce the mechanical, diagnostic nature of the service.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile. 

- **Desktop:** A 12-column grid with a substantial 48px outer margin to create an editorial "frame." Gutters are kept at a rigid 24px.
- **Mobile:** A 4-column grid with 16px margins. 
- **Rhythm:** All spacing must be multiples of 8px. Density should be "High," meaning elements are packed tightly to suggest industrial efficiency, separated by heavy 2px or 4px borders rather than whitespace alone.
- **Motif:** Use a 45-degree "Hazard Stripe" pattern (Burnished Orange/Deep Charcoal) as a decorative divider or header accent to guide the eye toward critical information.

## Elevation & Depth
This system rejects traditional shadows and blurs. Depth is achieved through **Bold Outlines** and **Tonal Layering**.

- **Surface Tiers:** Backgrounds use Deep Charcoal (#1A1A1A). Interactive containers or cards use Slate Grey (#2D2D2D) with a mandatory 2px solid border in either Burnished Orange (for active states) or Cream White (for inactive states).
- **Hard Shadows:** If a shadow is required for depth, use a 100% opacity "Hard Drop" shadow (0px blur) offset by 4px or 8px, creating a 3D-extruded effect common in brutalist design.
- **Texture:** A subtle "grain" or "asphalt" noise overlay (3-5% opacity) should be applied to the base background to give the digital interface a tactile, physical quality.

## Shapes
The shape language is strictly **Geometric and Sharp**. 

- **Corners:** 0px radius across all elements (buttons, cards, inputs). This communicates precision and mechanical durability.
- **Accents:** Use clipped corners (45-degree chamfers) on primary action buttons or decorative containers to reinforce the "industrial tool" aesthetic.
- **Dividers:** Use 2px solid lines. Vertical dividers are preferred for metadata to maintain the condensed, columnar look.

## Components
- **Buttons:** Large, blocky, and sharp. Primary buttons are #F56E0F with black uppercase text. Secondary buttons are ghost-style with a 2px Cream White border.
- **Cards:** No shadows. Use a solid 2px border (#2D2D2D). Card headers should feature a thin "Hazard Stripe" top border.
- **Input Fields:** Deep Charcoal background with a bottom-only 2px border in Slate Grey. On focus, the border turns Burnished Orange. Labels use *Space Mono*.
- **Chips/Status:** Rectangular with no radius. Use high-contrast fills (e.g., Burnished Orange for "En Route," Cream White for "Completed").
- **Lists:** Separated by 2px solid lines. Every list item should have a hover state that changes the background color to Slate Grey (#2D2D2D) instantly, without a transition, to feel "mechanical."
- **Additional Elements:** "Service Gauges" for tracking repair progress, using bold linear progress bars with segmented steps rather than smooth transitions.
