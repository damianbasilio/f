I have designed a bespoke, editorial-grade homepage for **Nailcessity** that moves beyond standard templates to create a premium, high-contrast visual identity.

### Design Highlights:
*   **Editorial Layout**: The design adopts a magazine-inspired hierarchy with generous whitespace, oversized serif typography, and a "Sophisticated Noir" palette (Deep Espresso and Sand).
*   **Signature Motif**: I've incorporated thin vertical rules and offset image framing throughout the site to create a cohesive, luxury aesthetic.
*   **Intentional Density**: The service menu is designed with high typographic density to emphasize the breadth and meticulous nature of the offerings, contrasted against the airy hero and about sections.
*   **Production-Ready Structure**: The site includes all requested sections—from the credibility-building "Est. 2012" block to the specialized map container and refined contact form—all built with semantic HTML and responsive CSS.

The result is a digital presence that reflects the precision and high-fashion artistry of the Nailcessity brand.

---

---
name: Editorial Noir
colors:
  surface: '#fff8f4'
  surface-dim: '#e0d9d4'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ed'
  surface-container: '#f4ece7'
  surface-container-high: '#eee7e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#4e4542'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f7efea'
  outline: '#807571'
  outline-variant: '#d1c4c0'
  surface-tint: '#655c5a'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#201a18'
  on-primary-container: '#8c827e'
  inverse-primary: '#d0c4c0'
  secondary: '#675d4e'
  on-secondary: '#ffffff'
  secondary-container: '#efe0cd'
  on-secondary-container: '#6d6354'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2c1600'
  on-tertiary-container: '#a77b4e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ede0dc'
  primary-fixed-dim: '#d0c4c0'
  on-primary-fixed: '#201a18'
  on-primary-fixed-variant: '#4d4542'
  secondary-fixed: '#efe0cd'
  secondary-fixed-dim: '#d2c4b2'
  on-secondary-fixed: '#221a0f'
  on-secondary-fixed-variant: '#4f4538'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#fff8f4'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
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
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.2em
  service-item:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system embodies "Nailcessity"—an exclusive, editorial-grade nail salon experience. The brand personality is sophisticated, quiet, and high-fashion, positioning the salon as a destination for artistry rather than just service. 

The aesthetic is a blend of **Minimalism** and **Modern Classic**. It leverages generous negative space to create a sense of luxury and breathing room, contrasted by moments of intentional density in information-rich areas like service menus. A signature visual motif of hairline vertical rules and offset image containers creates a rhythmic, "magazine-spread" feel throughout the interface.

## Colors
The palette is a curated "Sophisticated Noir & Nude" selection. 
- **Primary (Deep Espresso):** Used for typography, borders, and high-contrast background sections to ground the design.
- **Secondary (Soft Sand):** The primary background color. It provides a warm, organic alternative to stark white, mimicking high-end stationary.
- **Tertiary (Polished Rose):** An accent for active states, calls to action, and subtle highlights, reflecting the luminosity of a fresh manicure.
- **Neutrals:** Muted tones derived from the espresso base used for secondary text and subtle dividers.

## Typography
Typography is the cornerstone of this design system. We use a high-contrast serif for headlines to evoke the timelessness of luxury fashion mastheads. 

- **Headlines:** Set in Playfair Display. Use `display-lg` for hero sections, ensuring tight leading and slightly negative letter spacing for a custom, "set-by-hand" look.
- **Body & Utility:** Montserrat is used for all functional text. To maintain the premium feel, body text uses `0.03em` tracking (letter spacing), and labels use `0.2em` tracking with all-caps for a rhythmic, architectural quality.
- **Hierarchy:** Dramatic scale shifts between headlines and body text are encouraged to create visual tension and interest.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to preserve the intentional whitespace characteristic of editorial design. 

- **The Rule of Rules:** Use thin 1px vertical lines (Deep Espresso at 20% opacity) to separate columns in service lists or to anchor floating images.
- **Offset Frames:** Images should rarely be centered in their containers. Use an offset margin (e.g., 24px) to shift images slightly out of their expected alignment, creating a bespoke, curated look.
- **Sectioning:** Use large `section-gap` values to separate different content clusters, ensuring the user is never overwhelmed.
- **Density:** In service menus, use tight vertical spacing for text items to create a "menu card" effect, contrasted against the massive margins of the rest of the page.

## Elevation & Depth
In line with the editorial aesthetic, depth is created through **Tonal Layers** and **Overlap**, rather than traditional drop shadows.

- **Surface Strategy:** Use Soft Sand as the base layer. Deep Espresso sections act as "overlays" to signify a change in content type (e.g., a dark footer or a dark "Book Now" callout).
- **Glassmorphism:** Reserved exclusively for navigation bars. A very subtle blur (8px) with a semi-transparent Soft Sand background allows content to peek through as the user scrolls.
- **Shadows:** If a shadow is absolutely necessary for accessibility, use a "Hard Shadow" (0px blur, 2px offset) in Deep Espresso at 10% opacity to maintain the sharp, graphic look.

## Shapes
This design system utilizes a **Sharp** shape language. All corners—buttons, image containers, input fields, and cards—are set to 0px radius. This reinforces the high-fashion, "cut" aesthetic of a luxury brand.

The only exception to the sharp rule is the "Polished Rose" accent elements when used as decorative dots or circular motifs, which should be perfect circles to contrast the otherwise rigid geometry.

## Components
- **Buttons:** Primary buttons are solid Deep Espresso with Soft Sand text, sharp corners, and `label-caps` typography. Secondary buttons use a 1px Espresso border with a hover state that fills the background with Polished Rose.
- **Input Fields:** Minimalist design consisting of a single 1px Espresso bottom border. Labels use `label-caps` and sit above the line.
- **Cards:** Cards should not have background colors or shadows. Instead, use a 1px frame or define the space using the thin vertical rule motif.
- **Service Lists:** Designed for "Intentional Density." Service names are on the left (Playfair Display), prices on the right, connected by a hairline dotted leader or a long horizontal rule.
- **Offset Images:** Images are wrapped in a container where the image itself is shifted 20px top/left, revealing a Deep Espresso or Polished Rose "frame" behind it.
- **Chips:** Small, all-caps tags with a light Espresso border, used for categorizing nail art styles or service durations.
