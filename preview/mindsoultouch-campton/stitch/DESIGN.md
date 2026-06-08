I've designed a bespoke, editorial-grade homepage for **MindSoulTouch** that captures the essence of a "Modern Sanctuary." 

### Design Highlights:
*   **Visual Identity**: I established a unique New Hampshire-inspired palette using **Granite Moss**, **Birch Bark**, and a muted **NH Sunset** terracotta accent to create a grounding, premium feel.
*   **Editorial Layout**: Eschewing generic templates, the page uses an asymmetrical grid with generous whitespace and thin typographic rules to mimic a high-end wellness magazine.
*   **Memorable Motifs**: Overlapping elements and large, sophisticated serif typography (**Playfair Display**) create a distinct brand voice that feels both clinical and ethereal.
*   **Production-Ready**: The screen includes the requested semantic sections, a functional mobile navigation, and the specific interactive map slot for your Campton location.

The site is now ready to serve as the definitive digital home for Sheryl Legie’s holistic practice. How would you like to proceed?

---

---
name: Modern Sanctuary
colors:
  surface: '#f8faf9'
  surface-dim: '#d8dada'
  surface-bright: '#f8faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f3'
  surface-container: '#eceeed'
  surface-container-high: '#e6e9e8'
  surface-container-highest: '#e1e3e2'
  on-surface: '#191c1c'
  on-surface-variant: '#424845'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#eff1f0'
  outline: '#737874'
  outline-variant: '#c2c8c3'
  surface-tint: '#50635a'
  primary: '#172821'
  on-primary: '#ffffff'
  primary-container: '#2c3e36'
  on-primary-container: '#95a99e'
  inverse-primary: '#b7cbc0'
  secondary: '#615e57'
  on-secondary: '#ffffff'
  secondary-container: '#e8e2d9'
  on-secondary-container: '#67645d'
  tertiary: '#421806'
  on-tertiary: '#ffffff'
  tertiary-container: '#5d2d18'
  on-tertiary-container: '#d99478'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e7dc'
  primary-fixed-dim: '#b7cbc0'
  on-primary-fixed: '#0d1f18'
  on-primary-fixed-variant: '#384b42'
  secondary-fixed: '#e8e2d9'
  secondary-fixed-dim: '#cbc6bd'
  on-secondary-fixed: '#1d1b16'
  on-secondary-fixed-variant: '#494640'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb598'
  on-tertiary-fixed: '#360f01'
  on-tertiary-fixed-variant: '#6c3923'
  background: '#f8faf9'
  on-background: '#191c1c'
  surface-variant: '#e1e3e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
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
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
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
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  overlap-offset: -40px
---

## Brand & Style
The brand personality is grounded, restorative, and sophisticated. It aims to evoke an immediate sense of exhale—a "Modern Sanctuary" that bridges the gap between clinical expertise and ethereal wellness. The target audience seeks a premium, intentional experience that values quiet luxury over loud marketing.

The design style is **Editorial Minimalism**. It draws heavily from high-end wellness publications, utilizing generous whitespace to provide "breathable" layouts. Unlike standard digital interfaces, this design system prioritizes a rule-based grid that allows for intentional asymmetry, overlapping elements, and a visual rhythm that feels curated rather than templated.

## Colors
The palette is inspired by the natural landscape of Campton, New Hampshire.
- **Granite Moss (#2C3E36):** The primary anchor. Used for typography and deep structural elements to provide a sense of groundedness and authority.
- **Frost Breath (#F9FBFA):** The canvas. This cool, airy off-white is used for primary backgrounds to maintain a crisp, clean environment.
- **Birch Bark (#E8E2D9):** A warm neutral used for large surface areas, tonal sections, and subtle separators to add softness to the cool background.
- **New Hampshire Sunset (#D18D72):** An accent color used sparingly for calls to action, highlights, and organic decorative elements to provide a warm, human touch.

## Typography
The typography pairing establishes a clear editorial hierarchy. 
- **Headlines:** Uses `Playfair Display`. Its high-contrast serifs convey elegance and tradition. For "Display" roles, use tight letter-spacing to create a more impactful, magazine-style header.
- **Body & UI:** Uses `Hanken Grotesk`. This crisp sans-serif ensures maximum legibility for functional text.
- **Rules:** Always prioritize generous line-heights to maintain the airy aesthetic. Use uppercase labels with increased letter-spacing for category headers or small metadata to create a distinct professional contrast against the serif headlines.

## Layout & Spacing
The design system utilizes a **12-column fluid grid** with an emphasis on intentional "white space as content." 

### Editorial Layout Rules:
- **Asymmetry:** Avoid centering all elements. Align text to the left 4 columns while allowing imagery to span the right 8, or vice versa.
- **Overlapping:** Use the `overlap-offset` variable to allow images or text containers to break the grid and bleed into adjacent sections, creating depth.
- **Negative Space:** Sections should have vertical padding ranging from 80px to 160px to prevent the UI from feeling "crowded."
- **Breakpoints:** 
  - *Desktop (1024px+):* Full 12-column asymmetry.
  - *Tablet (768px - 1023px):* 8-column grid, reduced margins, limited overlapping.
  - *Mobile (Under 768px):* 4-column vertical stack; remove complex overlaps to maintain legibility.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and light-play rather than heavy shadows.
- **Surface Tiers:** Use 'Frost Breath' as the base, with 'Birch Bark' used for secondary sections to create a subtle lift.
- **Soft Shadows:** If a shadow is required for a floating element (like a modal or a primary button), use a very large blur (32px+) with extremely low opacity (5-8%) using a 'Granite Moss' tint to keep it feeling natural.
- **Backdrop Blurs:** Use subtle background blurs (8px-12px) on navigation bars or overlays to maintain a sense of glass-like transparency, reinforcing the "Airy" brand pillar.

## Shapes
The shape language is primarily **Soft** and structured, but interspersed with **Organic Motifs**.
- **Structural Elements:** Buttons, input fields, and containers use a subtle 0.25rem (Soft) radius to maintain a professional, architectural feel.
- **Organic Motifs:** Use high-radius or "blob" shapes for background decorations or image masks. These should be asymmetrical (e.g., `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`) to mimic natural stones or botanical forms.
- **Rules:** Use thin 1px lines (using 'Birch Bark') for section dividers to reinforce the editorial "grid" look.

## Components
- **Buttons:**
  - *Primary:* Solid 'Granite Moss' with 'Frost Breath' text. Rectangular with soft corners.
  - *Secondary:* Outlined 'Granite Moss' or 'New Hampshire Sunset' with 1px borders.
  - *Text:* All-caps 'Hanken Grotesk' with 0.05em letter spacing.
- **Cards:** Do not use traditional "boxed" cards with shadows. Instead, use "Editorial Blocks"—an image with a caption using 'Playfair Display' for the title, placed with asymmetrical padding.
- **Inputs:** Minimalist bottom-border only or very light 'Birch Bark' fills. Labels should be small, uppercase 'Hanken Grotesk' placed above the field.
- **Chips/Tags:** Use 'Birch Bark' backgrounds with 'Granite Moss' text, fully pill-shaped (rounded-xl) to distinguish them from structural buttons.
- **Featured Quote:** A specific component for testimonials using 'Playfair Display' italic, centered or offset, with a thin 'New Hampshire Sunset' vertical line to the left.
