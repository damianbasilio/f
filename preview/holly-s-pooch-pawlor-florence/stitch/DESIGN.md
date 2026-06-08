I have designed a bespoke, editorial-inspired landing page for **Holly’s Pooch Pawlor**. 

This design intentionally moves away from standard local business templates, adopting a "Vogue for Dogs" aesthetic that emphasizes the craftsmanship and artistry of grooming.

### Design Highlights:
*   **Editorial Typography:** I've utilized a high-contrast serif (Bodoni-inspired) for headlines to establish a sense of premium luxury, paired with wide-tracked labels for a modern, fashion-forward feel.
*   **Bespoke Visual Motif:** The layout features asymmetric, overlapping containers and delicate vertical line work, creating a "Lookbook" atmosphere rather than a generic service grid.
*   **Sophisticated Palette:** A deep 'Espresso' text color on a 'Biscuit Cream' background provides a warm, high-end contrast that feels more inviting and professional than standard black-and-white.
*   **Functional Elegance:** The page includes a mobile-responsive navigation, a refined inquiry form with validation UI, and the specified map integration slot for your Florence location.

Does this visual direction capture the premium experience you want to offer your clients, or should we adjust the balance of whitespace and density?

---

---
name: Holly’s Pooch Pawlor Editorial System
colors:
  surface: '#fff8f6'
  surface-dim: '#f8d2c4'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e2'
  surface-container-high: '#ffe2d9'
  surface-container-highest: '#ffdbce'
  on-surface: '#2b160f'
  on-surface-variant: '#504442'
  inverse-surface: '#422b22'
  inverse-on-surface: '#ffede7'
  outline: '#827472'
  outline-variant: '#d3c3c0'
  surface-tint: '#745853'
  primary: '#271310'
  on-primary: '#ffffff'
  primary-container: '#3e2723'
  on-primary-container: '#ae8d87'
  inverse-primary: '#e3beb8'
  secondary: '#5e604d'
  on-secondary: '#ffffff'
  secondary-container: '#e1e1c9'
  on-secondary-container: '#636451'
  tertiary: '#081c17'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d312b'
  on-tertiary-container: '#839991'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e3beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#e4e4cc'
  secondary-fixed-dim: '#c8c8b0'
  on-secondary-fixed: '#1b1d0e'
  on-secondary-fixed-variant: '#474836'
  tertiary-fixed: '#d0e8de'
  tertiary-fixed-dim: '#b5ccc3'
  on-tertiary-fixed: '#0b1f1a'
  on-tertiary-fixed-variant: '#364b44'
  background: '#fff8f6'
  on-background: '#2b160f'
  surface-variant: '#ffdbce'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 120px
---

## Brand & Style

The brand personality is rooted in high-end editorial sophistication, treating pet grooming not as a chore, but as a bespoke luxury experience. This design system moves away from typical "paw-print" aesthetics toward a "Vogue for Dogs" visual language. 

The design style is **Minimalist / Editorial**, characterized by:
- **Quiet Luxury:** Extensive use of whitespace to signal exclusivity and calm.
- **Tactile Detail:** Subtle scalloped edge patterns and hair-thin line work that reference high-end stationery and boutique interiors.
- **Asymmetric Composition:** Overlapping imagery and offset text containers to mimic fashion magazine spreads.
- **Sophistication:** A focus on precision, expert care, and warmth without being "cute."

## Colors

The palette, "Pooch & Cream," is designed to evoke leather, grooming salons, and high-quality textiles.

- **Primary (Deep Espresso):** Used for all primary typography and structural borders. It provides a grounded, authoritative feel.
- **Secondary (Soft Biscuit Cream):** The foundational background color. It is warmer and more premium than pure white, providing a soft, skin-like canvas.
- **Accent (Dog Collar Red):** A sophisticated, deep crimson used sparingly for calls to action, important notifications, and heritage markers.
- **Neutral (Tanned Leather):** Used for secondary text, metadata, and subtle dividers.

## Typography

This design system utilizes high-contrast pairings to create visual hierarchy. 

- **Headlines:** Use **Bodoni Moda**. Its vertical stress and sharp serifs command attention and signal "luxury." Use tight tracking for display sizes and slightly more generous leading for sub-headers.
- **Body & Utility:** Use **Montserrat**. This geometric sans-serif provides a modern counterpoint. To maintain the editorial feel, body copy should be set with slightly increased line height and tracking (letter spacing) to ensure a breezy, expensive feel.
- **Micro-copy:** Use `label-caps` for eyebrows and category labels, always in uppercase with wide tracking to emphasize the boutique nature of the brand.

## Layout & Spacing

The layout model follows a **Fixed Grid** approach with generous gutters to allow the content to "breathe."

- **Grid:** Use a 12-column grid for desktop. Elements should often span 6 or 8 columns, centered, to create large margins.
- **Whitespace:** Section gaps should be aggressive (120px+). This creates a rhythmic "pause" between services and stories.
- **Asymmetry:** For imagery, use a "layering" technique where photos are offset from the grid by 1-2 columns or overlap one another by 40-80px.
- **Mobile:** On mobile, move to a single column with 24px side margins. High-contrast headlines should remain large to preserve the brand’s "bold" personality.

## Elevation & Depth

This design system eschews shadows in favor of **Tonal Layers** and **Bold Outlines**.

- **Depth through Contrast:** Depth is created by placing Espresso elements on Cream backgrounds. 
- **The Scalloped Edge:** Use a subtle, repeating scalloped SVG pattern for the bottom edge of hero sections or the top edge of cards to suggest the hand-cut nature of grooming.
- **Hairline Borders:** Use 0.5pt or 1pt Espresso borders for containers and buttons. Do not use blurs or soft shadows; the luxury comes from the sharpness and precision of the lines.
- **Image Treatment:** Use "Framed" depth where images have a 1px border or sit inside a container with a thin, contrasting "inset" stroke.

## Shapes

The shape language is primarily architectural and sharp, with very slight rounding to prevent it from feeling "clinical."

- **Corners:** Use "Soft" (0.25rem) rounding for most UI components like buttons and input fields.
- **Scallops:** Decorative elements use a small-radius (8px) half-circle repeating pattern to create the brand's signature "scalloped" motif.
- **Imagery:** Photos should remain sharp-cornered (0px) to maintain the editorial magazine look.

## Components

- **Buttons:** Primary buttons are Espresso with Cream text, using 1px Espresso borders and wide-tracked Montserrat. Secondary buttons are "Ghost" style (transparent background, Espresso border).
- **Cards:** Use a "Bordered Floating" style. No shadows. A 1px Espresso border on a Cream background. The header of the card should use the Scalloped Edge motif.
- **Input Fields:** Bottom-border only (1px Espresso). Labels are `label-caps` placed 8px above the line.
- **Chips/Badges:** Small, rectangular badges with Espresso borders and `label-caps` text. No rounded pills.
- **Lists:** Service lists should use a "Menu" style—Left-aligned service name in Montserrat, a dotted line (leader), and right-aligned price in Bodoni Moda.
- **Bespoke Component - "The Lookbook":** A horizontally scrolling component for "Grooming Collections," featuring high-resolution photography where text overlays the image in a "Dog Collar Red" tab.
