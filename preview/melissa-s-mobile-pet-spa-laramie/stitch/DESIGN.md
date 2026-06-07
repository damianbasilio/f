I have designed a bespoke, premium homepage for **Melissa's Mobile Pet Spa** using a sophisticated **bento grid** layout. 

### Design Rationale:
*   **Bento Grid Archetype**: Instead of a traditional linear scroll, I used a modular grid to create a sense of density and editorial quality. Each service, testimonial, and value proposition occupies a dedicated cell, making the information easy to scan while feeling uniquely "designed."
*   **Color & Typography**: I paired a deep Midnight Blue with soft Cream and Petal Pink accents to establish an elite, trustworthy, yet approachable brand identity. The high-contrast serif typography (Playfair Display) reinforces the premium "spa" aesthetic.
*   **Visual Motif**: Rounded corners and a clean modular border system repeat throughout the design, ensuring the bento structure feels intentional rather than just a collection of boxes.
*   **Editorial Focus**: The hero section is integrated directly into the grid, balancing a strong visual statement with immediate value propositions like "Why Mobile?" to convert visitors quickly.

This layout is a complete departure from your previous version, focusing on a more structured, premium digital editorial feel that distinguishes Melissa's business from standard local competitors.

How does this new bento-style direction feel to you? We can further refine the color balance or adjust the modular weights of the cards.

---

---
name: Melissa’s Mobile Pet Spa
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#44474c'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#250d15'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d212a'
  on-tertiary-container: '#ae8690'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#e7bbc6'
  on-tertiary-fixed: '#2d141c'
  on-tertiary-fixed-variant: '#5e3e47'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  cell-padding: 32px
---

## Brand & Style
The brand personality is "Elite Canine Couture"—a blend of high-end editorial sophistication and approachable warmth. This design system targets affluent pet owners who view their pets as family members deserving of white-glove service.

The design style is **Editorial Minimalism** with a **Bento Grid** structure. It utilizes heavy whitespace, luxurious typography, and modular "cells" to organize information. The aesthetic balances the seriousness of a premium service with playful, rounded elements that echo the softness of the pets being served. The emotional response should be one of immediate trust, calm, and exclusive quality.

## Colors
The palette is rooted in a "Midnight and Cream" foundation to establish authority and cleanliness.
- **Midnight Blue (#1A2B3C):** Used for primary text, deep backgrounds, and heavy UI elements to convey professional reliability.
- **Cream (#F9F7F2):** The primary canvas color. It is softer and more premium than pure white, providing a "parchment" feel that aligns with editorial design.
- **Petal Pink (#FFD1DC):** A vibrant yet sophisticated accent used for calls to action, highlights, and playful decorative elements.
- **Neutral (#4A5568):** A muted slate for secondary body text and borders to ensure hierarchy without competing with the Midnight Blue.

## Typography
The typography strategy pairings a high-contrast serif with a wide, modern sans-serif. 
- **Playfair Display** (Headlines): Chosen for its classic, high-fashion elegance. It should be used for all major headings to establish the "Pet Spa" as a luxury brand.
- **Montserrat** (Body/Labels): A geometric sans-serif with wide proportions that ensure legibility and a contemporary feel. 

For the Bento grid layout, use `display-lg` sparingly within large cells to create focal points. Labels should almost always utilize the uppercase transformation with increased letter spacing to mimic high-end magazine mastheads.

## Layout & Spacing
The design system employs a **Fixed Bento Grid** model. On desktop, this is a 12-column grid where content is housed in modular cards (cells) of varying widths (e.g., 4-column, 6-column, 8-column spans).

- **Grid Logic:** Use a 24px gutter between all cells to maintain a clean, airy feel.
- **Bento Cells:** Every cell must have an internal padding of `cell-padding` (32px) to prevent content from feeling cramped.
- **Responsive Behavior:** On tablet, the 12-column grid collapses to 6 columns. On mobile, it becomes a single-column vertical stack of cards with 16px gutters and 20px side margins.
- **Rhythm:** All vertical spacing should be multiples of the 8px base unit.

## Elevation & Depth
This design system avoids heavy shadows, instead using **Tonal Layers** and **Subtle Outlines** to define depth, keeping the look "flat-premium."

- **Layer 0 (Background):** Always the Cream (#F9F7F2) base.
- **Layer 1 (Cards/Cells):** Background-color is pure white or a very light tint of Midnight Blue (5% opacity).
- **Outlines:** Instead of shadows, use a 1px solid border in a 10% opacity version of Midnight Blue for all Bento cells.
- **Hover States:** When interacting with a card, apply a soft, diffused Petal Pink shadow (`0px 10px 30px rgba(255, 209, 220, 0.4)`) to make the card feel like it is lifting off the cream surface.

## Shapes
The shape language is defined by the "Pill" motif. While the Bento grid provides a structured, rectangular foundation, the internal elements and the cards themselves utilize generous rounding to soften the aesthetic.

- **Bento Cards:** Use `rounded-lg` (1rem / 16px) for all primary container corners.
- **Interactive Elements:** Buttons and tags must be fully pill-shaped (rounded-full) to echo the friendly, "pet-friendly" nature of the brand.
- **Imagery:** Photos within cards should either fill the card (inheriting the 16px radius) or be contained in circular/organic shapes to break the rigidity of the grid.

## Components
- **Buttons:** Primary buttons are pill-shaped, Midnight Blue with Cream text. Secondary buttons are Petal Pink with Midnight Blue text. Use a slight scale-up effect (1.02x) on hover.
- **Bento Cards:** The hero of the UI. Cards can contain imagery, testimonials, or booking CTAs. Every card should have a consistent 1px subtle border.
- **Status Chips:** Small, pill-shaped tags used for "Available Now" or "Luxury Treatment." Use Petal Pink background with 70% opacity for a soft look.
- **Inputs:** Text fields should be Cream-filled with a Midnight Blue bottom-border only, maintaining the editorial "form" feel.
- **Lists:** Service lists should use custom "Paw" icons in Petal Pink as bullet points.
- **The "Service Card":** A specific Bento cell variant featuring a high-resolution pet photo, a Playfair Display title, and a Montserrat price tag in the corner.
