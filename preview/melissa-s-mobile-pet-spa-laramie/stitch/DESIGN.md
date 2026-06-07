I've designed a bespoke, award-winning-quality homepage for **Melissa's Mobile Pet Spa**, focusing on a **"Bold Single-Column Stack"** layout that breaks away from generic templates.

### Design Rationale:
*   **Editorial Visual Identity**: I've implemented a high-contrast color palette of **Deep Forest Green** and **Cream**, accented by an organic **Terracotta**. This combination conveys trust, luxury, and a connection to nature.
*   **Strong Vertical Rhythm**: The site uses full-bleed color bands to create clear thematic breaks, guiding the eye downward through a curated narrative of services and brand story.
*   **Premium Typography**: A sophisticated serif (**Fraunces**) for headlines provides an editorial feel, paired with **Inter** for legible, modern body copy.
*   **Memorable Motif**: Subtle vertical lines and organic image treatments serve as a recurring visual motif, reinforcing the "Gentle Care" brand promise.
*   **Strategic Hierarchy**: The "Request a Booking" CTA is strategically placed and styled to stand out against the deep background, driving conversions while maintaining aesthetic elegance.

The site includes all requested sections: a minimalist header, high-impact hero, credibility indicators, a services catalog, a personal "About Melissa" section, the interactive-ready map slot, and a comprehensive booking form.

### Technical Highlights:
*   **Semantic HTML5**: Clean, accessible structure.
*   **Custom CSS Properties**: A flexible, token-based styling system.
*   **Map Integration Ready**: The designated `<div data-map-slot>` is styled and ready for a map provider script.
*   **Form Validation**: Interactive UI feedback for the booking request form.

How does this new creative direction feel for Melissa's brand?

---

---
name: Forest & Fur
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1b1c1a'
  on-surface-variant: '#434843'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#2f0b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#511900'
  on-tertiary-container: '#dc774d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb598'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7b2e08'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Fraunces
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Fraunces
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: '600'
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
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  stack-unit: 1rem
  section-gap: 8rem
  section-gap-mobile: 4rem
  container-max-width: 800px
  gutter: 1.5rem
---

## Brand & Style

The design system is built on a "Bold Single-Column Stack" architecture, evoking the feel of a luxury printed editorial. It targets pet owners who view grooming as a premium wellness experience rather than a chore. The aesthetic is rooted in **Minimalism** with **Editorial** influences, emphasizing high-end service through generous whitespace and a rhythmic vertical flow. 

The emotional response is one of "Sophisticated Care"—tranquil, professional, and bespoke. The UI avoids complex grids in favor of a curated, linear journey, using thin dividers and organic curves to soften the bold structure.

## Colors

The palette utilizes a high-contrast foundation to establish luxury and legibility.
- **Deep Forest (#1B3022):** Used for primary typography on light backgrounds and as a solid background for high-impact full-bleed sections.
- **Soft Cream (#F9F7F2):** The primary canvas color, providing a warmer, more premium feel than pure white.
- **Terracotta (#C3643B):** Reserved for primary actions and critical highlights, providing a grounded, earthy warmth.
- **Sage (#8DA08B):** Used for secondary accents, decorative elements, and success states, bridging the gap between the dark forest and light cream.

## Typography

This design system employs a high-contrast typographic pairing. **Fraunces** (Variable Serif) provides the editorial "voice," used for headlines to convey heritage and luxury. **Inter** (Sans-Serif) handles all functional and body text, ensuring clarity and a modern edge. Large display type should use the "Soft" optical size variant of Fraunces where available to maintain the organic brand feel.

## Layout & Spacing

The layout follows a **Fixed Single-Column** philosophy. Content is centered within a maximum width of 800px to maintain editorial readability and focus. 

- **Vertical Rhythm:** A strict 8px baseline is used, with generous vertical gaps (8rem) between major content sections to emphasize the "bespoke" nature of the service.
- **Full-Bleed Transitions:** Certain sections (like testimonials or service highlights) should ignore the container width to span the full viewport width, alternating between Deep Forest and Soft Cream backgrounds.
- **Thin Dividers:** 1px lines in Sage or low-opacity Forest are used to separate logical groupings without adding visual bulk.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layers** and **Flat Precision**. 
- **Depth through Contrast:** Hierarchy is established by layering elements (like cards) with subtle color shifts (e.g., a Sage tinted surface on a Cream background).
- **Glassmorphism (Minimal):** On mobile, the navigation bar uses a subtle Cream backdrop-blur to maintain context without breaking the editorial aesthetic.
- **Outlines:** Use 1px solid borders in the Terracotta or Sage colors for interactive elements, emphasizing a tactile, "pen-on-paper" feel.

## Shapes

The shape language is defined by **Soft Organic Curves**. While the overall layout is structured and linear, individual components utilize a medium roundedness (0.5rem) to reflect the friendly, "pet-focused" nature of the brand. 
- Large image containers may feature asymmetrical "blob" masks or single-corner rounding (e.g., top-left and bottom-right) to reinforce the organic motif.
- Dividers should have rounded caps.

## Components

### Buttons
- **Primary:** Solid Terracotta (#C3643B) with Cream text. Rectangular with 0.5rem radius. High-contrast, no shadow.
- **Secondary:** Transparent with 1px Deep Forest border.

### Sophisticated Forms
- **Input Fields:** Bottom-border only (editorial style) or fully enclosed with a very light Sage tint. Labels use the `label-caps` style positioned above the field.
- **Selection:** Custom radio buttons using the Terracotta color for the active state, designed with a thick stroke rather than a solid fill.

### Cards & Sections
- **Service Cards:** Minimalist. No borders or shadows. Content is separated by generous whitespace and a single thin horizontal line at the bottom.
- **Full-Bleed Callouts:** High-impact sections with Deep Forest backgrounds should use Cream typography exclusively.

### Navigation
- **Minimalist Header:** Centered logo with 2-3 text links in `label-caps` style. On scroll, the header stays fixed with a blurred Soft Cream background.

### Lists
- Use custom "paw" or "leaf" icons in Sage as bullets to reinforce the organic theme, or simple numbered lists using Fraunces for the numerals.
