I have designed a bespoke homepage for Ole Glory Barbershop that captures a "Modern Americana Heritage" aesthetic. The design moves away from generic local business templates, opting instead for a sophisticated editorial layout that reflects Nashville's premium grooming scene.

### Key Design Choices:
- **Visual Identity**: Established a palette of midnight navy, heritage gold, and parchment to evoke a sense of tradition and luxury.
- **Typographic Hierarchy**: Used high-contrast serifs for a bold, editorial feel, paired with wide-set sans-serifs for modern clarity.
- **Memorable Motif**: Integrated thin gold rules and subtle "monogram" elements throughout to create a cohesive brand signature.
- **Editorial Layout**: Utilized generous whitespace and a split-screen hero section to frame the barbershop as a destination, not just a service.
- **Production Ready**: The code includes semantic HTML, responsive CSS, and the specific map slot requirement for a seamless developer handoff.

The site is built to serve as a powerful first impression, bridging the gap between Ole Glory's local heritage and its premium service standard.

---

---
name: Modern Americana Heritage
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#46464d'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#76767e'
  outline-variant: '#c6c6ce'
  surface-tint: '#575d78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141a32'
  on-primary-container: '#7c839f'
  inverse-primary: '#bfc5e4'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1a'
  on-tertiary-container: '#848481'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#bfc5e4'
  on-primary-fixed: '#141a32'
  on-primary-fixed-variant: '#3f465f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e3e2df'
  tertiary-fixed-dim: '#c7c7c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#464744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
  nav-link:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
---

## Brand & Style
The design system embodies the spirit of a high-end, contemporary barbershop that respects the traditions of the craft while catering to a modern, discerning clientele. The brand personality is authoritative, refined, and meticulously groomed. 

The aesthetic draws from **Editorial Minimalism** mixed with **Modern Heritage**. It utilizes generous whitespace to create a sense of luxury and breathing room, punctuated by thin gold rules and a monogram-driven visual language. The emotional response should be one of "quiet confidence"—a digital environment that feels as curated and deliberate as a premium grooming experience.

## Colors
The palette is rooted in a "Parchment" base to avoid the harshness of pure white, providing a subtle paper-like texture to the interface. 

- **Midnight Navy (#0A1128):** Used for primary backgrounds in immersive sections and for high-contrast typography. It represents depth and professional stability.
- **Heritage Gold (#C5A059):** Applied sparingly for accents, thin dividers, and interactive states. This color signifies the "premium" tier of the brand.
- **Parchment (#FDFCF8):** The primary background color. It should be used to create an editorial, tactile feel.
- **Charcoal (#1A1A1A):** Used for secondary text and structural elements where the Navy might feel too heavy.

## Typography
The typographic hierarchy relies on the tension between the high-contrast **Playfair Display** (Serif) and the clean, wide-set **DM Sans** (Sans-Serif).

- **Headlines:** Should be set in Playfair Display. For a truly editorial feel, use "Display" sizes for hero sections with slight negative letter spacing.
- **Body Text:** Use DM Sans with increased letter spacing and generous line heights to ensure a modern, airy feel.
- **Captions and Labels:** These should always be uppercase with high tracking (letter spacing) to mimic traditional tailoring or apothecary labels.

## Layout & Spacing
The design system follows a **Fixed Grid** model for desktop to maintain the centered, editorial focus of a high-end magazine. 

- **Desktop (1440px+):** 12-column grid, 1200px max-width, 24px gutters.
- **Tablet (768px - 1024px):** 8-column grid, fluid width with 40px side margins.
- **Mobile (<768px):** 4-column grid, fluid width with 20px side margins.

Spacing is intentionally oversized. Sections should be separated by large vertical gaps (`section-gap-desktop`) and often divided by a single 1px "Heritage Gold" horizontal rule to maintain structure without clutter.

## Elevation & Depth
This design system avoids heavy shadows, instead using **Tonal Layers** and **Paper-inspired Depth**.

- **Surface Tiers:** The base layer is "Parchment." Secondary containers (like cards or sidebars) can use "Midnight Navy" for a dramatic "Inverted" look.
- **Dividers:** Use 1px rules in "Heritage Gold" (at 40% opacity) or "Charcoal" (at 10% opacity) to create structure.
- **Interactive Depth:** When an element is hovered, use a very subtle, diffused "Heritage Gold" ambient glow (0px blur, but 2px offset) to suggest a physical "lift" without looking like standard software.

## Shapes
To maintain a classic and masculine heritage feel, the design system utilizes **Sharp (0px)** roundedness. 

All buttons, input fields, and image containers must have 90-degree corners. This evokes the precision of a barber's blade and the architectural lines of a traditional shop. The only exception to the "sharp" rule is the use of circular "Monogram" motifs for brand icons or decorative badges.

## Components
- **Buttons:** Primary buttons are solid "Midnight Navy" with "Parchment" text, sharp corners, and 16px vertical padding. Secondary buttons are "Heritage Gold" outlines (1px) with "Charcoal" text.
- **Input Fields:** Bottom-border only (1px Charcoal). Labels sit above in `label-caps` style. Focus state changes the bottom border to "Heritage Gold."
- **Cards:** No borders or shadows. Cards are defined by their internal alignment and the use of thin rules between them.
- **Chips:** Small, rectangular boxes with "Charcoal" 1px borders and `label-caps` typography.
- **Monogram Motif:** A recurring design element consisting of the shop's initials within a thin gold circle, used as a watermark or a bullet point for premium lists.
- **Lists:** Service menus should use a "leader" style (Service Name ........ Price) with the dots being very fine and spaced out.
