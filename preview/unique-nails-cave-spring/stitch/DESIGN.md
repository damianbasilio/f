I've designed a bespoke, editorial-grade homepage for **Unique Nails**, moving far beyond the typical local business template. 

### Design Rationale:
- **Visual Identity:** I established the **"Midnight & Pearl"** palette—a sophisticated combination of deep charcoal (#0F172A) and soft cream (#F8FAFC) accented with champagne gold. This creates an immediate sense of luxury and exclusivity.
- **Editorial Layout:** Instead of a standard grid, I used an **asymmetrical, magazine-style composition**. This includes overlapping elements and organic, curved image treatments that mirror the fluid artistry of nail design.
- **Typography:** I paired the high-contrast **Playfair Display** serif for headlines with an airy, wide-tracked sans-serif for body copy to emphasize a premium, boutique feel.
- **Memorable Motif:** The "Artistry in Motion" theme is woven throughout, using intentional whitespace and elegant dividers to guide the eye through the salon's story, services, and studio details.

### Key Features:
- **Production-Ready Code:** Full semantic HTML, responsive CSS with custom properties, and smooth-scroll navigation.
- **Dynamic Services Menu:** A curated layout for services like Custom Artistry and Sterilization standards.
- **Interactive Visit Section:** Dedicated space for studio details and a placeholder for your future map integration.
- **Conversion-Focused:** High-visibility CTAs for the studio phone number and a refined appointment request form.

Does this visual direction capture the premium feel you had in mind, or would you like to explore a different typographic pairing or color story?

---

---
name: Midnight & Pearl
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e5'
  on-secondary-container: '#626567'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
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
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  fluid-margin: clamp(1rem, 5vw, 6rem)
  fluid-gutter: clamp(1rem, 3vw, 2rem)
  asymmetric-offset: 4rem
  section-gap: clamp(4rem, 10vh, 12rem)
---

## Brand & Style

The brand personality is defined by "Midnight & Pearl"—a study in high-contrast luxury, precision, and the fluid artistry of nail design. This design system caters to a high-end clientele who values sophistication, meticulous detail, and an editorial aesthetic over standard commercial layouts. 

The visual style is **Minimalist Editorial**. It leverages generous whitespace (the "Pearl") against deep, authoritative foundations (the "Midnight") to create a sense of breathing room and exclusivity. Intentional asymmetry and overlapping elements break the rigidity of traditional web grids, mirroring the organic, flowing lines of hand-painted nail art. The emotional response should be one of calm, confidence, and bespoke care.

## Colors

The palette is centered on a high-contrast relationship between light and dark, punctuated by soft, skin-tone adjacent accents and metallic highlights.

- **Primary (Midnight Navy):** Used for primary text, deep backgrounds, and heavy structural elements to convey authority and depth.
- **Secondary (Pearl Cream):** The primary canvas color. It provides a softer, more luxurious alternative to pure white, reducing eye strain while maintaining a clean, airy feel.
- **Tertiary (Champagne Gold):** An accent for interactive states, borders, and "prestige" indicators. Use sparingly to maintain its value.
- **Accent (Blush Clay):** A soft, organic tone used for secondary buttons, illustrative flourishes, and backgrounds for textural sections. It grounds the palette in the physical reality of the services provided.

## Typography

Typography is the primary vehicle for the "Editorial" feel. The system utilizes a classic high-contrast pairing:

- **Headlines:** Use **Playfair Display**. It should be set with tight line height for display sizes and occasional italicization for emphasis on specific words to mimic luxury magazine layouts.
- **Body & Interface:** Use **Inter**. Set body copy with generous line heights and subtle letter spacing to ensure maximum readability against the high-contrast background.
- **Labels:** Small caps with wide letter-spacing (0.15em) should be used for section headers and eyebrow text to provide a systematic, navigable structure.

## Layout & Spacing

This design system moves away from rigid block-based layouts in favor of a **Fluid Editorial Grid**.

- **The Asymmetric Grid:** While based on a 12-column foundation, content should often be "offset" by 1 or 2 columns to create visual interest. For example, a heading may sit on column 2, while the body text starts on column 4.
- **Fluid Scale:** Margins and padding use `clamp()` functions to ensure the "breathability" of the design translates from a 27-inch desktop to a mobile device without manual breakpoint adjustments.
- **Overlapping Elements:** Utilize the `asymmetric-offset` for images and cards that break their container boundaries. An image might overflow into the page margin to create a sense of movement.
- **Section Gaps:** Use large vertical spacing (`section-gap`) to separate distinct "stories" or service categories, ensuring the user is never overwhelmed by information.

## Elevation & Depth

To maintain the "Pearl" aesthetic, the system avoids heavy, muddy shadows. Depth is achieved through:

- **Glassmorphism:** Use high-diffusion backdrop blurs (20px+) for navigation bars and modal overlays. This suggests the semi-translucent quality of high-end nail finishes.
- **Tonal Stacking:** Instead of shadows, use slight color shifts. A "Pearl" surface might sit atop a "Midnight" background with no shadow, relying entirely on color contrast for hierarchy.
- **The "Champagne" Stroke:** Low-opacity (20-30%) outlines in Champagne Gold are used for high-tier interactive cards to provide a subtle glow without the weight of a shadow.

## Shapes

The shape language reflects "Flowing Lines." While a base roundedness of `0.5rem` is used for standard components, specific "Bespoke" elements utilize a more organic approach:

- **Standard UI:** 8px (0.5rem) corners for buttons and input fields to maintain a modern, professional structure.
- **Editorial Images:** Use asymmetrical corner rounding (e.g., top-left and bottom-right at 100px, others at 0px) to mimic the silhouette of a manicured nail or organic liquid flow.
- **The Flowing Motif:** Decorative SVG paths (thin 1px lines in Gold or Blush) should weave between sections, occasionally intersecting with text or images to guide the eye.

## Components

### Buttons
- **Primary:** Midnight background, Pearl text, sharp transitions. Hover state introduces a Champagne Gold bottom-border (2px).
- **Secondary/Ghost:** Transparent background with a thin Blush Clay border. 
- **Text Link:** Label-caps style with a persistent underline that "grows" on hover.

### Cards (The "Editorial Card")
Cards should not look like containers. They consist of an image with an `asymmetric-offset`, a Playfair Display headline slightly overlapping the image, and Inter body text below. No borders or shadows; the separation is created by the whitespace.

### Inputs & Fields
Ultra-minimalist. Bottom-border only (1px Midnight), with labels using the `label-caps` typography style. Focus states shift the border color to Champagne Gold.

### Chips & Tags
Small, rounded pills in Blush Clay with low-opacity. Used for service categories (e.g., "Gel," "Art," "Acrylic").

### Navigation
A fixed top-bar with a backdrop-blur. The logo is centered to maintain the editorial balance, with links split to the left and right.
