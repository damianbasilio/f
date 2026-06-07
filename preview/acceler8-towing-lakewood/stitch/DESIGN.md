I've completed the production-ready homepage for **Acceler8 Towing**, built specifically around their local Denver/Lakewood presence and Facebook content.

### Design Rationale:
*   **Rugged Reliability:** Established a "Heavy Duty Service System" design language using high-contrast charcoal and emergency orange to convey professional authority and visibility.
*   **Local Trust:** Integrated verbatim copy from their Facebook page—including their "Continue to pray..." mission statement—to maintain their authentic local voice and community focus.
*   **Action-Oriented:** The header and hero sections prioritize their phone number **(720) 938-1779** with high-visibility CTA buttons, essential for an "Always Open" emergency service.
*   **Professional Structure:** Included dedicated sections for services, a credibility bar, a contact form, and the requested map slot for their Denver/Lakewood service area.

The site is fully responsive, semantic, and ready for deployment. You can view the complete desktop layout on the canvas.

---

---
name: Heavy Duty Service System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#564334'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#897362'
  outline-variant: '#ddc1ae'
  surface-tint: '#904d00'
  primary: '#904d00'
  on-primary: '#ffffff'
  primary-container: '#ff8c00'
  on-primary-container: '#623200'
  inverse-primary: '#ffb77d'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#00658f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b5fc'
  on-tertiary-container: '#004360'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#85cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Montserrat
    fontSize: 34px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
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
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  button-text:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '800'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style
The brand personality is authoritative, dependable, and intensely local. It evokes the feeling of a heavy-duty fleet ready to mobilize in any weather. The UI prioritizes high-trust signals and immediate utility, ensuring users in stressful roadside situations feel a sense of calm and professional rescue.

The design style is a hybrid of **Industrial Minimalism** and **Bold High-Contrast**. It utilizes heavy structural lines, high-visibility signaling colors, and a utilitarian layout. The aesthetic draws inspiration from industrial machinery and emergency vehicle liveries—clean, functional, and built to withstand pressure. Whitespace is used not just for elegance, but for extreme legibility under harsh lighting or on small mobile devices during emergencies.

## Colors
The palette is engineered for maximum visibility and "emergency-first" response. 

- **Emergency Orange (#FF8C00)**: The primary action color, used for critical buttons (Request a Tow) and primary branding. It demands attention without the "stop" connotation of red.
- **Rescue Yellow (#FFD700)**: A secondary accent used for warning banners, highlights, and secondary status indicators.
- **Deep Charcoal (#1A1A1A)**: The "Asphalt" base. Used for typography and heavy structural elements to provide a grounded, rugged feel.
- **Surface & Backgrounds**: A cool gray-white (#F4F4F4) reduces glare compared to pure white while maintaining high contrast against charcoal text.

## Typography
Typography is bold and utilitarian. **Montserrat** provides the authoritative "Heavy Duty" look for headlines, using extra-bold weights to mimic the lettering found on commercial trucks. **Inter** is used for body text to ensure maximum readability in low-light or high-stress environments.

- **Scale**: Use large, impactful headers for immediate messaging.
- **Hierarchy**: Use uppercase labels for metadata and section headers to reinforce the industrial aesthetic.
- **Line Height**: Generous line heights for body text to ensure ease of reading on mobile devices.

## Layout & Spacing
The layout follows a **Tight, Focused Grid** based on 4px increments. It is designed to feel dense and "packed" rather than airy, communicating efficiency and strength.

- **Desktop**: A 12-column fluid grid with 24px gutters. Use large margins (64px) to keep content centered and readable.
- **Mobile**: A 4-column grid with 16px margins. Critical "Emergency Call" buttons should be pinned to the bottom or span the full width of the viewport.
- **Stacking**: Use a vertical rhythm that favors 16px and 24px increments between related components.

## Elevation & Depth
This design system avoids soft ambient shadows in favor of **Structural Depth** and **Bold Borders**.

- **Borders**: UI elements like cards and buttons use thick (2px - 3px) solid borders in Charcoal (#1A1A1A).
- **Hard Shadows**: Use 0-blur "hard" shadows offset by 4px or 6px to create a tactile, physical feel—as if the UI elements are metal plates bolted to the screen.
- **Tonal Layers**: Use subtle shifts in gray (#E0E0E0 to #F4F4F4) to differentiate container backgrounds without relying on transparency or blurs.

## Shapes
Shapes are "Soft" but leaning toward "Sharp" (4px radius). This mimics the slightly rounded corners of machined metal parts. Avoid large pills or circular buttons; stick to rectangles with slight corner radii to maintain the professional, rugged aesthetic. 

Structural elements like service area maps or photo uploads should be framed with the same 2px Charcoal border used for buttons.

## Components
- **Buttons**: Every button should feel like a physical switch. Primary buttons use Emergency Orange with a 2px Charcoal border and a 4px hard bottom-right shadow. Typography is Montserrat Bold, Uppercase.
- **High-Visibility Contact Section**: A sticky or prominent footer section with a large phone number in Rescue Yellow on a Charcoal background. This is the most critical component.
- **Cards**: Use a white background with a 2px Charcoal border. Headers within cards should have a thin horizontal line separating them from the body.
- **Inputs**: Clean, rectangular fields with 2px borders that thicken or change color to Emergency Orange when focused.
- **Status Chips**: For "Truck En Route" or "Service Completed," use high-contrast badges with Montserrat Bold text.
- **Iconography**: Use "Thick" or "Bold" stroke icons. Avoid thin, delicate lines. Icons should feel like the symbols found on a dashboard or industrial equipment.
