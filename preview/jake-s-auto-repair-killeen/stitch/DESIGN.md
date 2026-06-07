I've completed the bespoke homepage for **Jake's Auto Repair**, moving away from standard templates toward a **"Warm Boutique"** aesthetic.

### Design Highlights:
*   **Visual Motif:** The layout features a **photo-forward gallery strip** in the hero section, highlighting the precision and "artistry" of mechanical work through close-up imagery and soft, rounded containers.
*   **Typography:** A high-contrast serif (Playfair Display) provides an editorial, premium feel, while a clean sans-serif ensures maximum legibility for service details.
*   **Color Story:** I've utilized a sophisticated palette of **Deep Charcoal and Warm Greige**, accented by a vibrant **Mechanic Orange** to guide the eye toward key actions like the "Call Now" button and contact form.
*   **Architecture:** The flow transitions from high-level craftsmanship (Hero) to specific expertise (Services) and personal connection (Meet Jake), concluding with a functional "Visit the Workshop" section featuring a clean, minimalist map slot.

The frontend code is fully semantic, utilizes CSS custom properties for easy maintenance, and is optimized for both desktop and responsive mobile viewing.

---

---
name: Warm Boutique Auto
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#191919'
  on-primary: '#ffffff'
  primary-container: '#2e2e2e'
  on-primary-container: '#979595'
  inverse-primary: '#c8c6c6'
  secondary: '#5e5e5c'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdc'
  on-secondary-container: '#636360'
  tertiary: '#1a1918'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f2e2c'
  on-tertiary-container: '#989592'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e4e2df'
  secondary-fixed-dim: '#c8c6c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#474745'
  tertiary-fixed: '#e6e2de'
  tertiary-fixed-dim: '#c9c6c3'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484644'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system for this automotive service provider blends the rugged reliability of a workshop with the high-touch hospitality of a boutique hotel. The goal is to demystify auto repair, replacing the typical grease-stained anxiety with a sense of premium care and "greige" warmth.

The style is **Boutique Modernism**: it utilizes generous whitespace, soft organic shapes, and tactile depth. It avoids the harsh, technical aesthetics of the industry in favor of a sophisticated, editorial approach that suggests mastery and attention to detail. Key visual drivers include subtle grain textures on surfaces and a total rejection of sharp corners.

## Colors
The palette is rooted in a high-contrast relationship between deep charcoal and warm parchment tones.

- **Primary (Deep Charcoal):** Used for primary text and structural grounding. It represents grease and steel but refined into a premium "dark mode" element.
- **Secondary (Greige):** The primary canvas color. It provides a warm, approachable background that feels more human than pure white.
- **Accent (Mechanic Orange):** A vibrant, high-energy hue used sparingly for calls to action, urgent status updates, and interactive highlights.
- **Tertiary (Sage Green):** A soft, calming green used for success states, trust badges, and subtle dividers to reinforce credibility and environmental consciousness.

## Typography
The typography system uses a classic "Serif for Display, Sans for Utility" pairing. 

**Playfair Display** provides an editorial, premium feel for headings, suggesting a legacy of craftsmanship. **Plus Jakarta Sans** was chosen for its soft, modern curves that mirror the large border radii of the UI elements, ensuring high legibility for service menus and pricing.

For mobile, display sizes scale down aggressively to maintain readability without overwhelming the viewport. Labels use a slight letter-spacing increase and uppercase styling to provide a clear functional distinction from body copy.

## Layout & Spacing
The layout follows a **fluid-to-fixed grid** model. On desktop, content is contained within a 1200px max-width container using a 12-column grid. Mobile views utilize a single column with generous 24px side margins to ensure the interface feels "airy" and uncrowded.

Spacing is intentionally large (using the `lg` and `xl` units) to create a relaxed, premium pace. Components should never feel cramped; the "greige" background should act as a luxury negative space that guides the eye.

## Elevation & Depth
This design system rejects harsh shadows in favor of **ambient depth** and **tonal layering**. 

- **Level 1 (Surface):** The Greige (#F5F3F0) base.
- **Level 2 (Cards):** Pure white or slightly lighter greige with a very soft, diffused shadow (Blur: 32px, Opacity: 4%, Color: Primary).
- **Level 3 (Interactions):** Elements like active buttons or modals use a multi-layered shadow to simulate a physical "lift" off the page.

A subtle noise/grain overlay (opacity 2-3%) should be applied to the background surfaces to break up digital flat-colors and provide a tactile, "paper-like" boutique quality.

## Shapes
Shapes are the defining characteristic of this design system. All containers, buttons, and input fields utilize **Pill-shaped (3)** roundedness. 

Standard components use a minimum radius of **24px**. Larger card containers should use **32px to 48px** to create a friendly, approachable, and high-end aesthetic. Sharp 90-degree angles are strictly forbidden, even in image masks, which should always carry a soft radius.

## Components

### Buttons
Primary buttons use the **Mechanic Orange** background with deep charcoal text for maximum contrast. They are pill-shaped with significant horizontal padding (32px+). Secondary buttons use a thick 2px charcoal border with no fill.

### Cards
Cards are the primary organizational unit. They should feature a white background against the greige page, with 32px padding and 40px corner radii. Use these for service listings, mechanic bios, and testimonials.

### Input Fields
Inputs should have a thick 2px border in a muted version of the primary color. When focused, the border transitions to Mechanic Orange. The pill-shape must be maintained here to match the button style.

### Chips & Tags
Use Sage Green backgrounds with dark charcoal text for status indicators like "Completed" or "Verified." These should be fully rounded (100px radius) and small in scale to avoid competing with primary buttons.

### Additional Components
- **Service Timelines:** A vertical track using Sage Green to show the progress of a car repair, emphasizing transparency.
- **Expert Badges:** Small circular portraits of mechanics with high-contrast serif name labels, reinforcing the "boutique" personal touch.
