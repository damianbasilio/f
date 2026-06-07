I've completed the production-ready homepage for Vest Greenhouse, built entirely from their Facebook profile data.

### Design Highlights:
- **Heritage-First Identity**: I've emphasized their "Established 1968" roots throughout the site, using a sturdy heritage serif for headlines to build trust and authority.
- **Asymmetric Layout**: To avoid a generic template feel, I used an asymmetric grid for the hero and services sections, creating a modern yet approachable aesthetic that feels tailor-made for a local business.
- **Dual-Service Focus**: The layout clearly balances their greenhouse roots with their kitchen/food service offerings, using warm, earthy tones to bridge both worlds.
- **Action-Oriented Header**: The phone number and "Visit Us" CTA are fixed in the header for immediate access, optimized for the high-intent local customer.
- **Interactive Map Slot**: A dedicated, styled container is ready for a Google Maps integration to help customers find the 458 Laurels Road location.

The design is fully responsive and uses semantic HTML to ensure accessibility and professional performance.

---

---
name: Heritage Greenhouse & Kitchen
colors:
  surface: '#fff8f3'
  surface-dim: '#e2d8cd'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fdf2e7'
  surface-container: '#f7ece1'
  surface-container-high: '#f1e7db'
  surface-container-highest: '#ebe1d6'
  on-surface: '#1f1b14'
  on-surface-variant: '#424843'
  inverse-surface: '#353028'
  inverse-on-surface: '#faefe4'
  outline: '#727972'
  outline-variant: '#c2c8c0'
  surface-tint: '#466550'
  primary: '#163422'
  on-primary: '#ffffff'
  primary-container: '#2d4b37'
  on-primary-container: '#99baa1'
  inverse-primary: '#adcfb4'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#665f3d'
  on-tertiary: '#ffffff'
  tertiary-container: '#b5ac84'
  on-tertiary-container: '#464021'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8ebd0'
  primary-fixed-dim: '#adcfb4'
  on-primary-fixed: '#022110'
  on-primary-fixed-variant: '#2f4d39'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#ede3b8'
  tertiary-fixed-dim: '#d1c79d'
  on-tertiary-fixed: '#201c02'
  on-tertiary-fixed-variant: '#4d4727'
  background: '#fff8f3'
  on-background: '#1f1b14'
  surface-variant: '#ebe1d6'
typography:
  headline-xl:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  asymmetric-offset: 48px
---

## Brand & Style
The brand personality is rooted in "Cultivated Warmth." It bridges the gap between a historic 1960s greenhouse and a modern neighborhood kitchen. The UI evokes the feeling of a sun-drenched Saturday morning: optimistic, organic, and grounded. 

The design style is **Modern Tactile**. It leverages high-quality typography and generous whitespace (Minimalism) but grounds it with organic textures, soft shadows, and a warm color story. It avoids "tech-first" coldness in favor of a "community-first" approachable aesthetic that feels established yet fresh.

## Colors
The palette is inspired by the greenhouse ecosystem. 
- **Primary (Forest Grove):** A deep, sturdy green used for heritage headlines and primary actions, representing growth and stability.
- **Secondary (Sun-Drenched Ochre):** A warm, appetizing yellow-orange used for accents, highlights, and "call to dine" buttons.
- **Tertiary (Early Bloom):** A soft, pale butter-yellow used for large background sections to reduce eye strain and add warmth.
- **Neutral (Earth & Bark):** A warm charcoal-brown used for body text to maintain high legibility without the harshness of pure black.
- **Surface:** The primary background is a very light "Paper" cream (`#F9F8F3`) rather than pure white.

## Typography
The typography pairing establishes a "Heritage Professional" voice. 
- **Source Serif 4** provides the "established in 1968" authority. It is used for all major headlines and storytelling moments. Use tighter tracking on larger sizes.
- **Work Sans** provides a clean, functional contrast for menus, descriptions, and functional UI elements. It feels reliable and straightforward.
- **Labeling:** Use all-caps Work Sans for small eyebrows and metadata to create a structured, organized feel amidst the organic layout.

## Layout & Spacing
The design system utilizes an **Asymmetric Fluid Grid**. While content generally adheres to a 12-column structure, key imagery and featured text blocks should be intentionally offset or "broken" from the grid to create a bespoke, non-templated feel.

- **Desktop:** Use 12 columns. Content blocks should alternate between left-heavy and right-heavy alignments. Large high-resolution photography of plants or food should span 7 columns, while the accompanying text spans 4 columns, leaving 1 column of "breathing room" offset.
- **Mobile:** Transition to a single-column fluid layout with 20px margins. Maintain the boutique feel by using varying vertical padding between sections (e.g., 80px vs 120px) to dictate rhythm.
- **Spacing Rhythm:** Based on an 8px baseline. Use larger gaps (48px+) between distinct sections to reinforce a premium, unhurried experience.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and soft, natural shadows.
- **Surface Levels:** Use the Tertiary color (Early Bloom) to define containers like menu categories or "Today’s Harvest" sections against the cream background.
- **Shadows:** Use "Sun-cast" shadows—extremely soft, low-opacity (#2D4B37 at 8% opacity) with a large blur radius (24px) and a slight Y-offset. This mimics natural light hitting a physical object on a table.
- **Zero-Depth:** For functional forms and inputs, use low-contrast outlines in a muted version of the Primary green rather than shadows to keep the interface feeling light.

## Shapes
The shape language is **Organic & Defined**. 
- A base radius of **0.5rem (8px)** is used for standard interactive elements like buttons and input fields to feel approachable.
- Larger containers like Cards use **1rem (16px)** to emphasize a "soft" container feel.
- Imagery should occasionally use an "Arch" mask or one uniquely rounded corner (top-left) to reinforce the greenhouse architecture theme.

## Components
- **Buttons:** Primary buttons are solid Forest Grove green with white text. Secondary buttons use a thick 2px border in green with a transparent background. All buttons have a subtle hover lift.
- **Cards:** Cards for plants or menu items feature a full-bleed image at the top. The content area below uses the Tertiary color as a subtle background to separate it from the main page.
- **Input Fields:** Use a "floated label" style with a 1px bottom border only, creating a clean, high-end stationery feel.
- **Chips/Tags:** Use for plant categories (e.g., "Perennial", "Low Light"). These should be pill-shaped with a light tint of the Primary green and dark green text.
- **Lists:** Use custom "leaf" icons as bullet points for features or menu details to reinforce the brand identity.
- **Specialty Component (The 'Heritage Seal'):** A circular badge element (Established 1968) that can be pinned to the corner of featured sections or images, using a gold/ochre background.
