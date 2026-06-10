I've designed a bespoke, 'Modern Heritage' landing page for Scalawags Grooming & Boutique. 

### Design Decisions:
- **Visual Identity**: I established a "Modern Heritage" aesthetic, using a sophisticated palette of **Deep Kennel Blue**, **Groomer’s Gold**, and **Parchment White**. This creates a premium, established feel that sets Scalawags apart from generic local competitors.
- **Editorial Typography**: By pairing the elegant **Libre Caslon Text** for headlines with clean, functional sans-serifs, the site feels like a high-end boutique rather than just a service business.
- **Custom Layouts**: I avoided standard "component-library" patterns. The **Service Menu** is styled with a ledger-like aesthetic, and the **About** section uses asymmetrical layouts to feel more like a magazine feature.
- **Functionality**: The page is fully responsive and includes a production-ready **appointment request form**, integrated **contact details**, and the specific **map slot** you requested for Jonesboro.

The result is a unique, high-fidelity digital storefront that captures the artisanal quality of your grooming services and the curated nature of your boutique.

---

---
name: Modern Heritage
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
  on-surface-variant: '#44474d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4b5f7e'
  primary: '#021a35'
  on-primary: '#ffffff'
  primary-container: '#1a2f4b'
  on-primary-container: '#8397b8'
  inverse-primary: '#b3c8eb'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#1a1a18'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e2f2c'
  on-tertiary-container: '#979692'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#b3c8eb'
  on-primary-fixed: '#041c37'
  on-primary-fixed-variant: '#334865'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  rule-weight: 1px
---

## Brand & Style
The design system for Scalawags Grooming & Boutique is built on the "Modern Heritage" aesthetic—a sophisticated blend of traditional high-end barbering and contemporary boutique retail. The brand personality is authoritative yet warm, evoking the feeling of a trusted local institution in Jonesboro. 

The visual style leans into **Editorial Minimalism** with **Tactile accents**. It avoids the sterile, rounded nature of modern SaaS interfaces in favor of a structured, bespoke layout that utilizes high-contrast typography and subtle physical metaphors (like parchment textures and metallic rules). The goal is to make every digital interaction feel as curated as a visit to a physical boutique.

## Colors
The palette is rooted in classic masculinity and premium craft. 
- **Deep Kennel Blue (#1A2F4B)**: Used for primary backgrounds, navigation, and heavy "anchor" elements to establish trust and depth.
- **Groomer’s Gold (#C5A059)**: Applied sparingly as an accent for call-to-actions, iconography, and decorative "rule" lines to signify quality and prestige.
- **Parchment White (#F9F7F2)**: The primary canvas color. It provides a warmer, more sophisticated alternative to pure white, giving the interface a paper-like, editorial quality.
- **Charcoal (#2D2D2D)**: Reserved for body text and secondary UI elements where maximum legibility is required without the harshness of pure black.

## Typography
The typography strategy creates a tension between the "Old World" and the "New." 

**Libre Caslon Text** is used for all headings. Its weathered, classic serif forms provide the editorial weight necessary for a boutique brand. It should be used with tight leading and occasional negative letter-spacing for large displays to create a high-impact, printed-matter feel.

**Work Sans** provides a functional, grounded counterpoint. It is used for all functional text, body copy, and navigation labels. Its neutral, professional character ensures the interface remains highly legible and modern. 

**Label Caps** (all-caps Work Sans with generous tracking) should be used for sub-headers and small UI labels to maintain a structured, organized information hierarchy.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop, centered to create a sense of focused attention. On mobile, it transitions to a fluid single-column layout with generous margins.

The spacing rhythm is intentional and open, favoring whitespace over density. Key layout features include:
- **Rule Lines**: Use 1px horizontal and vertical lines in `Groomer's Gold` (at 30% opacity) or `Charcoal` (at 10% opacity) to separate sections, mimicking a broadsheet newspaper or a ledger.
- **Asymmetrical Accents**: Hero sections should utilize asymmetrical placement of text and imagery to enhance the "bespoke" feel.
- **Strict Alignment**: All elements must snap to a consistent vertical axis to maintain the structured, professional tone of a high-end establishment.

## Elevation & Depth
In keeping with the Modern Heritage style, this design system avoids heavy shadows and floating elements. Depth is achieved through **Tonal Layering** and **Contained Outlines**.

- **Stacked Surfaces**: Use subtle shifts between `Parchment White` and a slightly darker "Dusty Parchment" (Primary 5% tint) to define content areas.
- **Keyline Borders**: Instead of shadows, use crisp 1px borders in `Deep Kennel Blue` or `Groomer's Gold` to define cards and input fields.
- **Low-Opacity Overlays**: For modals or menus, use a `Deep Kennel Blue` backdrop with 80% opacity to maintain focus while keeping the brand's primary color present.

## Shapes
This design system utilizes **Sharp (0px)** corners for almost all UI elements. The lack of rounding reinforces the architectural, structured feel of the brand and differentiates it from the "bubbly" aesthetics of generic pet apps.

Buttons and card containers should remain perfectly rectangular. The only exception is the use of circular decorative elements (such as "certified" badges or small action icons) to provide a single point of visual relief against the rigid grid.

## Components
- **Buttons**: Primary buttons are solid `Deep Kennel Blue` with white `Label-caps` text. Secondary buttons are `Groomer's Gold` outlines with sharp corners. The hover state should involve a subtle shift to a gold fill.
- **Cards**: Cards feature a 1px `Charcoal` border (10% opacity) with no shadow. A `Groomer's Gold` top-border rule (2px) can be used to signify "featured" or "premium" services.
- **Input Fields**: These are underlined only—not fully enclosed boxes—to mimic a formal fill-in-the-blank form, reinforcing the "Heritage" theme.
- **Chips/Tags**: Use `Label-caps` typography inside a sharp-edged box with a light `Deep Kennel Blue` tint.
- **Lists**: Service menus should resemble high-end bistro menus, with the item name in `Libre Caslon Text` and the price separated by a dotted leader or a gold rule line.
- **The "Boutique Seal"**: A recurring component—a circular badge with the Scalawags logo or "Est. Jonesboro"—should be used as a watermark or overlay on imagery to add an extra layer of local authenticity.
