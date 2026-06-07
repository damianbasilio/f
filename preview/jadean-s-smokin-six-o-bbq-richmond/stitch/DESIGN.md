I've designed a bespoke, editorial-grade homepage for **Jadean's Smokin' Six O BBQ**, moving away from standard templates to create a unique "Smoke & Steel" identity.

### Design Rationale:
*   **Visual Identity**: I established a sophisticated dark-mode palette ("Smoke & Steel") using deep onyx, smoked ember accents, and parchment typography to reflect the grit and craft of authentic Richmond BBQ.
*   **Editorial Layout**: The homepage uses an asymmetrical grid and strong typographic hierarchy. I've avoided generic card grids in favor of overlapping elements and intentional whitespace that makes the food photography feel premium.
*   **Narrative Flow**: The user journey starts with a cinematic hero, moves through a credibility-building testimonial strip, showcases the "Pitmaster's Choice" with an emphasis on craftsmanship, and ends with a streamlined contact/visit section.
*   **Technical Excellence**: The code is fully semantic, responsive down to mobile sizes, and includes custom CSS properties for easy theme management. I've also implemented the specific map slot requirement and built-in form validation UI.

The result is a digital presence that feels as smoky, authentic, and deliberate as the BBQ itself.

---

---
name: Smoke & Steel
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e0bfb8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a78a83'
  outline-variant: '#58413c'
  surface-tint: '#ffb4a2'
  primary: '#ffb4a2'
  on-primary: '#611200'
  primary-container: '#c84c2c'
  on-primary-container: '#fffcff'
  inverse-primary: '#aa3618'
  secondary: '#c9c6c2'
  on-secondary: '#31302d'
  secondary-container: '#474743'
  on-secondary-container: '#b7b5b0'
  tertiary: '#c8c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#757474'
  on-tertiary-container: '#fefcfb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd2'
  primary-fixed-dim: '#ffb4a2'
  on-primary-fixed: '#3c0800'
  on-primary-fixed-variant: '#881f01'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Libre Caslon Text
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 88px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style
The design system embodies a "High-End BBQ" aesthetic—merging the raw, visceral nature of wood-fired cooking with the precision of premium editorial design. It targets a discerning audience that appreciates culinary craft, positioning BBQ not just as comfort food, but as a sophisticated art form.

The design style is **Editorial Minimalism with a Brutalist edge**. It utilizes heavy structural lines (Steel) against expansive, clean layouts (Parchment) to create a sense of established authority. The emotional response is one of confidence, warmth, and curated grit. Visuals should prioritize high-contrast photography of fire, smoke, and texture, framed by rigid typographic structures.

## Colors
This design system operates primarily in a high-contrast dark mode to evoke the atmosphere of a smokehouse. 

- **Deep Onyx (#1A1A1A):** The foundation. Used for all primary backgrounds to provide a canvas where smoke and fire imagery can pop.
- **Smoked Ember (#C84C2C):** The heat source. Used sparingly for primary calls-to-action, active states, and critical brand moments.
- **Parchment (#F5F2ED):** The light source. Used for primary typography and high-contrast surfaces to ensure maximum legibility against the dark background.
- **Steel Grey (#4A4A4A):** The structure. Used for borders, dividers, and secondary UI elements that require subtle definition without distracting from the content.

## Typography
The typography strategy relies on the tension between the classic, authoritative weight of **Libre Caslon Text** and the modern, industrial precision of **Hanken Grotesk**.

Headlines should utilize large, offset positioning. For a "letterpress" feel, ensure display headers have tight tracking and are occasionally paired with vertical rules. Body text should maintain generous line heights to ensure readability against dark backgrounds. Use the `label-caps` style for navigation and small metadata to maintain an organized, catalog-like feel.

## Layout & Spacing
The layout follows a **Rigid Grid System** inspired by broadsheet newspapers.

- **Desktop:** A 12-column grid with wide 64px outer margins. Use large blocks of whitespace (Deep Onyx) to isolate imagery and key text.
- **Mobile:** A 4-column grid with 20px margins.
- **Rules:** Incorporate heavy 2px vertical lines (`Steel Grey`) to separate content columns, reinforcing the "Steel" motif. 
- **Offsets:** To create a modern editorial feel, allow headline elements to offset slightly (e.g., -24px) from the primary grid container where space allows, creating a layered, dynamic depth.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Heavy Outlines** rather than traditional shadows.

- **Base Layer:** Deep Onyx (#1A1A1A).
- **Surface Layer:** For cards or elevated sections, use a slightly lighter shade of Onyx or a 1px border of Steel Grey.
- **Accents:** Use Smoked Ember for subtle "glow" effects behind high-priority items, simulating the warmth of a coal bed.
- **Textured Overlays:** Apply a subtle noise or grain texture (3-5% opacity) to backgrounds to mimic the feel of weathered paper or cast iron.
- **Dividers:** Use 1px or 2px solid lines in Steel Grey. Avoid blurs or soft shadows; keep all transitions sharp and architectural.

## Shapes
This design system uses **Sharp (0px)** corners exclusively. The BBQ aesthetic is rooted in the industrial—steel pits, knives, and butcher blocks. Rounded corners conflict with the "Steel" motif. 

All buttons, cards, input fields, and image containers must have hard 90-degree angles. To lean into the "burnt edge" motif, use 1px Steel Grey borders that occasionally "overshoot" their corners by 4px, creating a technical, blueprint-like detail.

## Components

### Buttons
- **Primary:** Solid Smoked Ember (#C84C2C) with Parchment text. Bold, uppercase Hanken Grotesk. Sharp corners.
- **Secondary:** Transparent background with a 2px Steel Grey border.
- **Ghost:** Parchment text with a heavy vertical line to the left.

### Cards & Surfaces
- Surfaces should be Deep Onyx with a 1px Steel Grey border. 
- Use large, high-resolution imagery that fills at least 50% of the card area.
- Typography within cards should be strictly aligned to a baseline grid.

### Input Fields
- Sharp edges, Steel Grey 1px border. 
- Focus state: Border changes to Smoked Ember with a subtle inner glow.
- Labels: Use `label-caps` typography, positioned above the field or floating within a notched border.

### Interactive Elements
- **Lists:** Use heavy horizontal dividers between items. Icons should be monolinear and industrial.
- **Chips/Badges:** Small, rectangular (0px radius) boxes with Parchment text on a Steel Grey background.
- **Menu/Navigation:** Large-scale typography. On hover, navigation items should trigger a Smoked Ember vertical bar to their left.

### Editorial Accents
- **Vertical Rules:** Use 2px Steel Grey vertical lines to lead the eye between sections.
- **The "Pit Master" Stamp:** A decorative component using Libre Caslon Text in a bordered box, used for highlighted quotes or chef's notes.
