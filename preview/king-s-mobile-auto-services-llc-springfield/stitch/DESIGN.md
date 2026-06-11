I have designed a bespoke, editorial-grade homepage for **King's Mobile Auto Services llc**. 

### Design Rationale:
*   **Visual Identity**: I moved away from the generic "grease and tools" aesthetic in favor of a **'Royal Obsidian & Crown Gold'** theme. The dark, high-contrast palette combined with **Playfair Display** (a classic high-contrast serif) positions the business as a premium, white-glove service provider.
*   **The Service Ledger**: Instead of standard card grids, I implemented a vertical "ledger" layout for services. This reinforces the editorial feel and allows the service titles to command more visual authority.
*   **Framing & Motif**: I used thick geometric rules and generous whitespace to create a sense of precision and reliability.
*   **Conversion Focus**: The gold "Crown Gold" CTA buttons and the prominent phone number in the header ensure that while the site is beautiful, it remains a functional tool for generating consultations.

The code is production-ready, featuring a responsive layout, custom CSS variables for easy maintenance, and semantic HTML structure. 

How does this visual direction feel for the brand? We can refine the color balance or adjust the specific service descriptions if you'd like.

---

---
name: Royal Precision Editorial
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c7c6ca'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#919094'
  outline-variant: '#46464a'
  surface-tint: '#c8c6c7'
  primary: '#c8c6c7'
  on-primary: '#313031'
  primary-container: '#0a0a0b'
  on-primary-container: '#7a797a'
  inverse-primary: '#5f5e5f'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#c1c8ca'
  on-tertiary: '#2b3234'
  tertiary-container: '#050b0d'
  on-tertiary-container: '#737b7d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1c1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#dde4e6'
  tertiary-fixed-dim: '#c1c8ca'
  on-tertiary-fixed: '#161d1f'
  on-tertiary-fixed-variant: '#41484a'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
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
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  utility-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  margin-page: 5vw
  gutter: 32px
  section-gap: 160px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system establishes a visual language of "Industrial Royalty." It merges the grit of professional automotive service with the prestige of a luxury lifestyle brand. The aesthetic is heavily influenced by **high-end editorial design** and **modern minimalism**, moving away from typical "grease-monkey" tropes toward a concierge-level service experience.

The emotional response should be one of absolute confidence and "white-glove" reliability. To achieve this, the design system utilizes a structured layout, generous negative space, and a refined tactile quality. Visual elements are governed by geometric precision, using thick rules and deliberate framing to anchor content, ensuring the interface feels as sturdy as the vehicles being serviced.

## Colors

The palette is anchored in **Royal Obsidian**, providing a deep, sophisticated canvas that commands authority. **Crown Gold** is our "high-impact" accent; it must be used with surgical precision—reserved for thin borders, key call-to-actions, and essential contact information—to prevent the design from feeling gaudy.

**Industrial Slate** serves as our structural neutral, used for surface layering and secondary text to maintain depth without sacrificing the "dark mode" aesthetic. **Pure Ivory** provides the necessary contrast for maximum legibility, used primarily for body copy and high-level headers against the dark backgrounds.

## Typography

The typographic hierarchy is a study in contrast. **Playfair Display** provides the "Editorial Voice"—it is bold, authoritative, and unapologetically classic. Use it for all major headings and section titles.

**Inter** provides the "Functional Voice." By applying wide letter-spacing (tracking) to labels and body text, we maintain a sense of luxury and breathing room even in dense information areas. 
- **Display styles** should use tighter tracking to feel like a magazine cover.
- **Label styles** should always be uppercase with generous tracking (0.2em) to differentiate utility from narrative.

## Layout & Spacing

This design system uses a **Fluid Editorial Grid**. Unlike standard 12-column frameworks, this layout favors asymmetrical compositions and "offset" positioning. 

- **The Offset Principle:** Hero sections and featured content should be weighted to the left or right, leaving significant whitespace on the opposite side to evoke a high-end magazine spread.
- **Rules & Framing:** Use 1px or 2px horizontal rules (Industrial Slate or subtle Gold) to separate content sections. Elements should feel "framed" by the layout.
- **Generous Gaps:** Section vertical spacing is intentionally large (160px) to force the user to focus on one "story" or service at a time.
- **Mobile Reflow:** On mobile, the offset layouts collapse into a single-column stack, but retain the heavy horizontal rules to maintain the "framed" aesthetic.

## Elevation & Depth

Depth in this system is achieved through **Tonal Layering** and **Geometric Outlines** rather than traditional shadows. 

- **Flat Depth:** Use Royal Obsidian (#0A0A0B) as the base level. Use Industrial Slate (#2D3436) for elevated cards or containers.
- **Strokes over Shadows:** Instead of drop shadows, use 1px solid strokes in Industrial Slate to define boundaries. 
- **Gold Accents:** Reserve Crown Gold for the most "elevated" state—such as a hover state on a service item or the border of the primary CTA.
- **Backdrop:** Backgrounds should remain solid; avoid gradients unless they are extremely subtle dark-to-black fades to emphasize a specific focal point.

## Shapes

To maintain the "Rugged" and "Industrial" personality, the shape language is strictly **Sharp (0px roundedness)**. Every button, input field, card, and image container must have crisp 90-degree corners. This architectural approach reinforces the feeling of precision engineering and stability.

## Components

### Header
A minimalist bar. The navigation links are positioned to the left in `label-caps` style. The right side is dominated by the **Crown Gold phone number**, rendered in a medium-weight sans-serif for immediate clarity.

### Hero Section
The Hero must be **asymmetrical**. Place the headline and a brief sub-line on the left 60% of the screen. An high-quality, high-contrast image of a vehicle or service detail should be offset to the right or bleed off the edge of the screen.

### Services List
Reject the standard 3-column grid. Use a **Vertical Editorial List**. Each service is a full-width row separated by a 1px rule. 
- **Default State:** Typography is Pure Ivory; service name is Playfair Display.
- **Hover State:** The entire row gains a subtle Slate background, the service name shifts slightly to the right, and a "Crown Gold" vertical bar appears on the far left.

### Buttons
Buttons are rectangular with no border-radius.
- **Primary:** Solid Crown Gold with Obsidian text.
- **Secondary:** Transparent background with a 1px Pure Ivory or Slate border.

### Map Slot
The map should be monochromatic or "dark mode" styled. It is housed in a rigid container with a **1px Crown Gold border** and significant "inner padding" (whitespace) between the border and the map edge to create a "framed art" effect.

### Input Fields
Bottom-border only (1px Industrial Slate). On focus, the border transitions to Crown Gold. Labels remain above the field in `label-caps`.
