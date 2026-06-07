I've designed and built a bespoke, editorial-grade homepage for **Cajun Catfish House**. 

### Design Decisions & Rationale:
*   **Visual Identity**: I moved away from generic food truck templates to create a "Bayou Modernist" aesthetic. This uses a deep, atmospheric palette of midnight blues and spicy reds, paired with high-contrast typography (Playfair Display) to evoke the heritage and heat of Cajun cooking.
*   **Layout & Density**: The "Today's Catch" section uses an asymmetrical grid to feel curated and professional, while the "Wall of Flavor" credibility section uses dense, layered typography to create a sense of local community and excitement.
*   **Unique Motifs**: I've integrated subtle "Weathered Cypress" textures and custom wavy dividers to subtly reinforce the river/bayou connection throughout the scroll.
*   **Find The Truck**: The map section is designed as a focal point, emphasizing the mobile nature of the business with a high-impact placeholder ready for live integration.

The site is fully responsive, uses semantic HTML5, and is styled with a robust CSS variable system for easy maintenance.

Would you like to explore a lighter "Daytime" variant for the site, or should we add some subtle hover animations to the menu items?

---

---
name: Bayou Modernist
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e4beba'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#ab8985'
  outline-variant: '#5b403d'
  surface-tint: '#ffb3ac'
  primary: '#ffb3ac'
  on-primary: '#680008'
  primary-container: '#d32f2f'
  on-primary-container: '#fff2f0'
  inverse-primary: '#ba1a20'
  secondary: '#ffdf9e'
  on-secondary: '#3f2e00'
  secondary-container: '#fabd00'
  on-secondary-container: '#6a4e00'
  tertiary: '#b9c7e4'
  on-tertiary: '#233148'
  tertiary-container: '#62708a'
  on-tertiary-container: '#f1f4ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#930010'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#fabd00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#b9c7e4'
  on-tertiary-fixed: '#0d1c32'
  on-tertiary-fixed-variant: '#39475f'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is **Bold, Rustic-Modern, and High-Energy**. It captures the soul of Southern hospitality through a sophisticated editorial lens. The design system balances the raw, unrefined textures of a roadside food truck with the elevated precision of a premium culinary publication.

The visual style is a hybrid of **High-Contrast Bold** and **Tactile Minimalism**. It utilizes massive typography and a punchy color palette, grounded by "weathered" digital surfaces that evoke the feeling of cast iron and cypress wood. The emotional response should be one of immediate appetite, reliability, and cultural authenticity.

## Colors
This design system utilizes a high-impact, dark-mode-first palette to evoke the atmosphere of a Southern twilight.

- **Deep Bayou (#0A192F):** The foundational surface color. Use this for deep backgrounds to make food imagery and gold accents pop.
- **Spicy Cayenne (#D32F2F):** The primary action color. Used for critical CTAs, price points, and high-energy accents.
- **Cornmeal Gold (#FFC107):** The secondary highlight. Used for ratings, special offers, and icons to provide a "warm glow" against the dark base.
- **Weathered Cypress (#E0E0E0):** The primary typography and border color. It provides a crisp, legible contrast without the harshness of pure white.

## Typography
The typographic strategy relies on a dramatic contrast between the high-fashion elegance of **Playfair Display** and the industrial clarity of **Work Sans**.

Headlines should be treated as editorial elements—large, tight-leaded, and authoritative. Use `display-lg` for hero sections and menu categories. Use `label-bold` with increased letter spacing for navigation and metadata to provide a "structured" feel that balances the flowing serif headers. All body copy is set in Work Sans to ensure maximum readability against dark, textured backgrounds.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). 

Intentional density is achieved through "staggered" content blocks that mimic the organic flow of a river. Use generous vertical whitespace (`xl`) between major sections to allow the bold typography to breathe, while keeping internal component spacing tight (`sm` to `md`) to maintain a "packed" food-truck-menu energy. 

**Reflow Rules:**
- Desktop: 64px outer margins, 24px gutters.
- Tablet: 32px outer margins, 16px gutters.
- Mobile: 16px outer margins, 12px gutters. Headlines scale down significantly to prevent awkward line breaks.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Subtle Textures** rather than traditional drop shadows.

- **Base Layer:** Deep Bayou (#0A192F) with a subtle grain texture overlay (3% opacity) to mimic cast iron.
- **Surface Layer:** A slightly lighter tint of Deep Bayou for cards and containers, defined by 1px solid borders in Weathered Cypress (#E0E0E0) at 15% opacity.
- **Interactive Depth:** Elements do not "lift" with shadows; instead, they "illuminate." Hovering over a card should increase the border opacity or change the border color to Cornmeal Gold.
- **Overlays:** Use semi-transparent Deep Bayou (80% opacity) with a background blur (12px) for navigation bars and modals to maintain the premium feel.

## Shapes
The shape language is primarily **Soft (0.25rem)**, leaning towards a structured, architectural feel. 

To contrast the rigid grid, incorporate "Riverine" motifs: organic, wavy SVG dividers that separate major sections. Buttons and input fields should remain strictly rectangular or minimally rounded (`rounded-sm`) to reflect the sturdy, "built" nature of a food truck. Photography should use sharp corners or very subtle rounding to maintain the editorial aesthetic.

## Components
- **Buttons:** Primary buttons use a solid Spicy Cayenne fill with Weathered Cypress text (Work Sans Bold). Secondary buttons use a Weathered Cypress outline with no fill. Transitions should be instant and snappy.
- **Cards:** Product cards use a "Full-Bleed" image top with the bottom half in a slightly lifted Deep Bayou tint. Use a 1px border.
- **Chips/Badges:** Use for "Spicy Level" or "Sold Out" status. High-contrast: Cornmeal Gold background with Deep Bayou text.
- **Input Fields:** Bottom-border only (1px Weathered Cypress) to keep the look minimal and editorial. Labels sit above in `label-bold`.
- **Lists:** Menu lists use a "Dot Leader" style (Item .......... $Price) to evoke classic Southern diner menus, but rendered in modern typography.
- **Specialty Component - "The River Divider":** A horizontal separator that uses an organic, hand-drawn wave shape rather than a straight line, appearing at the end of long scrolling sections.
