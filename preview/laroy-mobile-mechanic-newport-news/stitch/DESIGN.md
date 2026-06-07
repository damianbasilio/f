I've designed and built a bespoke, high-performance landing page for **Laroy Mobile Mechanic**.

### Design Rationale:
*   **Visual Identity**: I moved away from the "generic handyman" look to create a **"High-Performance Editorial"** aesthetic. It uses a deep asphalt charcoal base with high-contrast hazard amber accents, conveying both grit and technical precision.
*   **Typography**: The layout utilizes **Archivo Narrow** (from the design system) for a bold, industrial, and "urgent" typographic hierarchy that commands attention.
*   **Unique Layout**: Instead of standard card grids, I used an **asymmetrical, editorial layout**. The services are presented as a technical "Capability List," and the hero section feels like a premium automotive magazine cover.
*   **Functionality**:
    *   **24/7 Accessibility**: The floating navigation and hero section prioritize the direct call action.
    *   **Credibility Ticker**: A custom-designed ticker bar provides social proof and service area context immediately.
    *   **Map Integration**: I've included the requested semantic map slot in the `#visit` section, ready for a real map embed.
    *   **Technical Excellence**: The code uses CSS Custom Properties for easy theme management and semantic HTML5 for SEO.

How does this visual direction feel for the brand? Would you like to explore a lighter "Clean Workshop" variant, or should we refine the interactive "Technical Capabilities" section?

---

---
name: High-Performance Editorial
colors:
  surface: '#111416'
  surface-dim: '#111416'
  surface-bright: '#36393d'
  surface-container-lowest: '#0b0f11'
  surface-container-low: '#191c1f'
  surface-container: '#1d2023'
  surface-container-high: '#272a2d'
  surface-container-highest: '#323538'
  on-surface: '#e1e2e6'
  on-surface-variant: '#d5c4ab'
  inverse-surface: '#e1e2e6'
  inverse-on-surface: '#2e3134'
  outline: '#9e8f78'
  outline-variant: '#514532'
  surface-tint: '#ffba20'
  primary: '#ffdca1'
  on-primary: '#412d00'
  primary-container: '#ffb800'
  on-primary-container: '#6b4c00'
  inverse-primary: '#7c5800'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#e0e0e3'
  on-tertiary: '#2f3133'
  tertiary-container: '#c4c4c7'
  on-tertiary-container: '#4f5153'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea8'
  primary-fixed-dim: '#ffba20'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e5'
  tertiary-fixed-dim: '#c6c6c9'
  on-tertiary-fixed: '#1a1c1e'
  on-tertiary-fixed-variant: '#454749'
  background: '#111416'
  on-background: '#e1e2e6'
  surface-variant: '#323538'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  cta-label:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style
This design system captures the "High-Performance Editorial" aesthetic, blending the technical grit of automotive engineering with the sophisticated layouts of premium magazines. The target audience is discerning vehicle owners who value precision, reliability, and the convenience of a bespoke, on-call service.

The design style is a hybrid of **Modern Minimalism** and **Industrial Brutalism**. It utilizes expansive white space (or dark space in this context) to allow high-contrast elements to breathe, while employing heavy borders and technical "precision lines" to ground the interface in mechanical reality. The emotional response should be one of absolute confidence—a sense that the user is engaging with a master technician who treats mechanical work as a craft.

## Colors
The palette, **Asphalt & Amber**, is designed for a high-contrast dark mode environment that mimics the visual language of high-end garages and hazard signaling.

- **Asphalt (#1A1C1E):** The foundational background. It is deep and authoritative, providing a canvas that eliminates eye strain and makes highlights pop.
- **Hazard Amber (#FFB800):** The primary action color. Used sparingly for critical CTAs, status indicators, and "precision line" accents. It demands attention without appearing cheap.
- **Brushed Aluminum (#E2E2E2):** The secondary color for primary text and iconography, providing a metallic, clean contrast against the dark background.
- **Machine Grey (#2D3033):** A neutral mid-tone used for card backgrounds and secondary borders, creating subtle depth within the dark interface.

## Typography
The typography strategy creates a hierarchy of "Industrial Precision." 

- **Headlines (Archivo Narrow):** Strong, condensed, and impactful. Always set in uppercase for a "stenciled" or "technical manual" feel.
- **Body (Hanken Grotesk):** A high-readability, contemporary sans-serif that balances the intensity of the headlines with professional clarity.
- **Data & Labels (JetBrains Mono):** Monospaced fonts are used for technical specs, timestamps, and service IDs to reinforce the "mechanic's log" aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile, utilizing a 12-column system. 

The rhythm is governed by a strict 4px baseline grid. Large section gaps (80px+) are used to create an editorial feel, ensuring the service feels "boutique" rather than crowded. Use asymmetrical layouts where technical data (labels) are aligned to the far left or right of a container, leaving central areas clear for "precision line" graphics or high-resolution automotive photography.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

- **Surfaces:** Use `#1A1C1E` for the base and `#2D3033` for elevated containers (cards).
- **Precision Lines:** Instead of shadows, use 1px solid borders in Hazard Amber or Machine Grey to define boundaries. 
- **Active States:** Elements being interacted with should glow subtly using a low-spread Hazard Amber outer stroke, simulating a backlit dashboard button.

## Shapes
The shape language is **Sharp (0px)**. To reflect the precision of mechanical tools and industrial architecture, the design system avoids rounded corners entirely. This creates a "machined" look where every edge is intentional and crisp. Buttons and inputs should be perfectly rectangular, reinforcing the grit and stability of the brand.

## Components
- **Primary Buttons:** Solid Hazard Amber (#FFB800) background with Black text. Sharp corners. Heavy weight.
- **Secondary Buttons:** Ghost style with a 2px Brushed Aluminum border.
- **Service Chips:** Monospaced text inside a Machine Grey container with a 1px left-hand Amber accent line.
- **Input Fields:** Bottom-border only (2px Brushed Aluminum), turning Hazard Amber on focus. Labels use the monospaced `label-caps` style.
- **Cards:** No shadows. 1px solid borders. Include a "technical spec" footer in monospaced type showing service duration or price estimates.
- **Visual Motif:** Use a repeating 45-degree diagonal stripe pattern (hazard lines) in low-opacity grey for background sections or as "loading" indicators.
