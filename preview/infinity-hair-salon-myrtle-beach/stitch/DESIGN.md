I've designed a bespoke, editorial-grade homepage for **Infinity Hair Salon** that moves far beyond a standard local business template. 

### Design Decisions:
*   **Visual Identity (Coastal Noir):** I established a premium brand identity using a palette of Deep Ocean Teal, Sun-Bleached Sand, and Muted Gold accents. This reflects the salon's Myrtle Beach location through a lens of high-fashion editorial.
*   **Typography:** I utilized **Bodoni Moda** for high-contrast, magazine-style headlines paired with minimalist sans-serif for clarity. This hierarchy emphasizes the "Master Colorists" and "Editorial Precision" of the salon.
*   **Asymmetric Layout:** I intentionally broke the standard "card grid" layout. Sections like the Service Collections and The Ritual use staggered, overlapping elements and generous whitespace to feel like a custom-designed digital lookbook.
*   **The Ritual of Transformation:** Instead of a generic "About Us," I framed the brand story around a "Ritual," creating a more exclusive and sanctuary-like invitation for the client.
*   **Production-Ready:** The code includes the required map visualization slot, a custom-validated "Request Invitation" form, and a mobile-responsive navigation system.

How does this editorial direction feel for the brand? Would you like to adjust the weight of the gold accents or perhaps explore a different layout for the service menu?

---

---
name: Coastal Noir
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414848'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#717878'
  outline-variant: '#c1c8c7'
  surface-tint: '#466463'
  primary: '#001414'
  on-primary: '#ffffff'
  primary-container: '#0a2a2a'
  on-primary-container: '#749292'
  inverse-primary: '#adcdcc'
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2dd'
  on-secondary-container: '#656461'
  tertiary: '#190f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#332300'
  on-tertiary-container: '#aa8843'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8e9e8'
  primary-fixed-dim: '#adcdcc'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#2e4c4c'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 92px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.2em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
  overlap-offset: -40px
---

## Brand & Style

The brand identity captures the intersection of high-fashion editorial aesthetics and the atmospheric tranquility of the Myrtle Beach coastline. The personality is exclusive, mysterious, and sophisticated—moving away from typical bright beach tropes toward a "Coastal Noir" mood. 

The design style utilizes a **Minimalist-Editorial** hybrid. It features expansive whitespace (the "Sand"), sharp typographic hierarchy, and intentional asymmetry. The visual narrative is driven by "The Flow"—a concept translated through overlapping translucent layers, staggered content blocks, and hairline-thin gold accents that mimic the precision of a stylist's shears. 

The UI should feel like a premium digital lookbook. Every interaction is measured and calm, prioritizing high-resolution imagery and bold, evocative statements over dense information clusters.

## Colors

The palette is rooted in the depth of the Atlantic at dusk. 
- **Deep Ocean Teal (#0A2A2A):** Used for immersive backgrounds, primary buttons, and heavy "Noir" accents.
- **Sun-Bleached Sand (#F5F2ED):** The primary canvas color. It provides a warm, organic alternative to pure white, reducing eye strain and feeling more "boutique."
- **Muted Gold (#C5A059):** Reserved for interactive cues, thin rule lines (dividers), and rare, high-impact highlights.
- **Soft Charcoal (#2D2D2D):** The primary color for long-form body text to ensure legibility without the harshness of pure black.

## Typography

The typographic strategy pairs high-contrast elegance with wide-tracked utility.
- **Headlines:** Use Bodoni Moda for all editorial titles. It should be used at large scales, often overlapping images or color blocks to create a layered depth.
- **Body Text:** Montserrat provides a clean, modern counterpoint. For body copy, keep line lengths short to maintain the editorial feel.
- **Labels & Navigation:** Use uppercase Montserrat with generous letter spacing (0.1em to 0.2em) to evoke a sense of luxury and airiness.

## Layout & Spacing

This design system rejects rigid symmetry in favor of a **Staggered Editorial Grid**.
- **The 12-Column Base:** While built on a 12-column foundation, elements rarely span simple predictable widths. 
- **Asymmetric Overlaps:** Images and color blocks should use negative margins (`overlap-offset`) to stack over one another. For example, a portrait image might sit on the right 6 columns while a Teal color block sits on the left 7 columns, creating a 1-column overlap.
- **Whitespace:** Use 80px or 120px vertical sections to allow the brand to breathe.
- **Mobile Reflow:** On mobile, the "overlap" motif is simplified to a vertical stack, but maintaining the staggered alignment (e.g., alternating left and right alignment for headers).

## Elevation & Depth

Depth in the "Coastal Noir" system is achieved through **Tonal Layering** rather than shadows.
- **Planes of Color:** Instead of shadows, depth is indicated by the stacking order of Sun-Bleached Sand, Deep Ocean Teal, and photography.
- **Hairline Rules:** Use 0.5px or 1px Gold (#C5A059) lines to separate content or frame staggered images. These represent precision and structure.
- **Grainy Texture:** Apply a subtle noise/film-grain overlay to the Deep Ocean Teal blocks to simulate the texture of "flowing hair" and organic coastal elements.
- **Opacity:** Use 90-95% opacity on overlapping Teal containers to let the underlying imagery "ghost" through, creating the "Noir" atmosphere.

## Shapes

The design system uses a **Sharp (0)** roundedness philosophy. 
- All buttons, images, and containers must have 90-degree corners to maintain a high-fashion, architectural feel. 
- The only exception to the "sharp" rule is the use of circular "Floating Action" style elements for decorative gold seals or specialized call-to-actions, providing a singular point of organic contrast.

## Components

### Buttons
- **Primary:** Solid Deep Ocean Teal (#0A2A2A) with white or Sand text. Sharp corners. Wide letter spacing.
- **Secondary:** Transparent with a 1px Muted Gold (#C5A059) border. 
- **Ghost:** Text-only with a gold underline that grows from the center on hover.

### Cards (The "Lookbook" Block)
- No traditional card containers. Instead, use a "Block" approach: a sharp-edged image with a floating typography label that overlaps the bottom-left edge.

### Inputs & Fields
- Bottom-border only (1px Soft Charcoal). Labels use the `label-caps` style sitting above the line. Focus state shifts the border color to Muted Gold.

### Lists
- Service menus should use a "Price List" format: Item name in Montserrat (Regular), a dotted Gold leader line, and the price in Bodoni Moda (Italic).

### The "Signature" Rule
- A decorative component consisting of a thin vertical or horizontal gold line exactly 1px thick, used to lead the eye between staggered sections.
