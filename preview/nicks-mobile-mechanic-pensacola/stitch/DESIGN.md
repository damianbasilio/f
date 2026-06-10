I've designed a bespoke, award-winning-quality homepage for **Nick's Mobile Mechanic** that breaks away from the standard "local business" template.

### Design Highlights:
*   **Industrial Editorial Identity:** I established a visual language called "Industrial Editorial," using a high-contrast palette of **Deep Slate**, **High-Octane Amber**, and **Cool Silver**. The layout utilizes intentional density and thick rule lines to mimic the precision of mechanical blueprints.
*   **Bespoke Hero Layout:** Instead of a centered banner, I used an asymmetrical layout with a vertical typographic watermark ("ON-SITE PRECISION") to create immediate brand memorability.
*   **"Invoice-Style" Services:** To reinforce the mechanic theme, I designed the service section to look like a high-end service log, using large technical numbering and monospace type for a professional, "spec-sheet" feel.
*   **Interactive Elements:** The site includes a scrolling credibility ticker, a "Service Request" form styled as a digital work order, and the requested placeholder for your local Pensacola service map.
*   **Mobile-First Precision:** While designed for desktop, the layout is fully responsive down to 375px with a clean, slide-out navigation menu.

The code is production-ready, featuring semantic HTML5, utility-first styling with custom CSS properties for easy brand adjustments, and lightweight JavaScript for interactions.

How does this new visual direction feel for Nick's brand? We can refine the color balance or add more specific service details next.

---

---
name: Industrial Editorial
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#514532'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#847560'
  outline-variant: '#d6c4ac'
  surface-tint: '#7e5700'
  primary: '#7e5700'
  on-primary: '#ffffff'
  primary-container: '#ffb400'
  on-primary-container: '#6b4900'
  inverse-primary: '#ffba35'
  secondary: '#5d5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e5'
  on-secondary-container: '#636467'
  tertiary: '#5d5e62'
  on-tertiary: '#ffffff'
  tertiary-container: '#c2c2c6'
  on-tertiary-container: '#4e5053'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdeac'
  primary-fixed-dim: '#ffba35'
  on-primary-fixed: '#281900'
  on-primary-fixed-variant: '#5f4100'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e2e2e6'
  tertiary-fixed-dim: '#c6c6ca'
  on-tertiary-fixed: '#1a1c1f'
  on-tertiary-fixed-variant: '#45474a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  technical-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-padding: 120px
---

## Brand & Style

The brand personality for this design system is **Reliable, Expert, and Rugged-Premium**. It moves away from the "grease-monkey" clichés of the automotive industry toward a high-end, bespoke editorial aesthetic. It should evoke the feeling of a precision engineering firm—authoritative and clean, yet capable of getting the job done.

The design style is a hybrid of **Modern Minimalism and Industrial Brutalism**. It utilizes heavy whitespace to create a premium feel, while employing "raw" structural elements—like hairline borders and monospaced technical readouts—to signal mechanical expertise. The UI should feel like a high-end workshop manual: structured, efficient, and intentional.

- **Tone:** Direct and masculine.
- **Visual Motif:** Use thin `1px` grid lines (Deep Slate at 10% opacity) to create a blueprint-like background structure. 
- **Imagery:** High-contrast, desaturated photography with Deep Slate overlays.

## Colors

The palette is rooted in high-visibility industrial colors, refined for a premium digital experience.

- **High-Octane Amber (#FFB400):** Reserved strictly for primary actions, critical alerts, and brand highlights. It represents the energy and urgency of mobile service.
- **Deep Slate (#1A1C1E):** Used for primary typography, backgrounds in dark modes, and heavy structural elements. It provides the "heavy metal" weight of the brand.
- **Cool Silver (#E2E2E6):** A sophisticated neutral for secondary backgrounds, borders, and subtle technical partitions.
- **Functional Accents:** Success states should use a desaturated Forest Green; errors should use a muted Oxide Red to maintain the industrial harmony.

## Typography

Typography is the cornerstone of this system's "Industrial Editorial" look. 

1. **Hanken Grotesk:** Chosen for its sharp, contemporary, and engineered feel. Use **ExtraBold (800)** for massive typographic watermarks (e.g., "01 SERVICE" or "PENSACOLA") set at 10% opacity behind content.
2. **JetBrains Mono:** Used for all "technical" data—pricing, timestamps, VIN numbers, and contact details. This reinforces the precision of a mechanic.
3. **Contrast:** Pair large, tight-tracked headlines with small, wide-tracked monospaced labels for a blueprint aesthetic.

## Layout & Spacing

This design system follows a **Fixed-Fluid Hybrid Grid**. Content is housed in a 12-column grid on desktop with a maximum width of 1440px.

- **The "Blueprint" Grid:** Vertical and horizontal hairlines (0.5pt) should occasionally be visible to divide sections, mimicking technical drawings.
- **Asymmetry:** Content should favor a slight left-weighted bias, leaving larger right-side margins for oversized vertical monospaced text (watermarks).
- **Rhythm:** Use a strict 4px/8px base unit. Section spacing is aggressive (120px+) to allow the "premium" feel to breathe.
- **Mobile:** Reflow to a single-column stack with 20px side margins. Use horizontal scrolling for "Service Cards" to maintain an editorial horizontal flow.

## Elevation & Depth

To maintain the "rugged-premium" feel, avoid soft, generic drop shadows. Instead, use:

1. **Hard Tonal Layers:** Depth is created by stacking surfaces of slightly different shades (Neutral -> Cool Silver -> White).
2. **Industrial Insets:** Instead of shadows, use subtle inner-borders (1px) or slight value shifts to indicate "pressed" or "active" states.
3. **Ghost Borders:** Elements like cards use a `1px` solid border in Deep Slate at 15% opacity rather than a shadow.
4. **Active Highlighting:** When an element is focused or active, it should gain a solid `2px` border of High-Octane Amber, creating a "caution-tape" high-visibility effect.

## Shapes

The shape language is **strictly sharp (0px)**. 

Curves are avoided to maintain an architectural, engineered aesthetic. Every button, input field, and card should have crisp 90-degree corners. This communicates precision, stability, and a "built to last" mentality. 

For specific circular elements (like status pips or specialized iconography), use perfect circles, but never "rounded rectangles."

## Components

- **Primary Buttons:** Solid High-Octane Amber background, Deep Slate text (Hanken Grotesk Bold). No rounding. 1px solid black bottom-border for "tactile" weight.
- **Service Cards:** White background with a 1px Cool Silver border. The "Technical-SM" monospace type is used at the top-right of the card for service IDs or pricing.
- **Inputs:** Underline-style inputs only, or full-width boxes with a 1px Deep Slate border. No background fill unless focused. Focus state turns the border to Amber.
- **Chips/Status:** Rectangular blocks with monospaced text. For example, a "MOBILE" tag should be a Deep Slate block with white monospaced text.
- **Specialty Component: "The Spec Sheet":** A table-style list for technical specs (e.g., Oil Type, Diagnostic Codes) using alternating Cool Silver/White zebra striping and JetBrains Mono text.
- **Navigation:** Minimalist top bar. The "Nick's Mobile Mechanic" logo should be bold, all-caps Hanken Grotesk.
