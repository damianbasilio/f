I have designed and built a bespoke, editorial-quality landing page for **Holly’s Pooch Pawlor**. 

This design moves away from generic local-business templates, opting instead for a high-end, boutique aesthetic that reflects the "Artisanal Excellence" of Holly’s brand. 

### Key Design Features:
- **Editorial Visual Identity:** A sophisticated color palette of *Midnight Groom* (Charcoal) and *Champagne Suds* (Cream), paired with high-contrast Serif typography for a premium magazine-like feel.
- **Asymmetric Hero Layout:** A bold, memorable first impression that highlights the "Art of the Groom" with intentional whitespace.
- **Tailored Service Grid:** A clean, structured menu of treatments that emphasizes the bespoke nature of the services.
- **Story-Driven About Section:** A personalized area that focuses on Holly's vision, building trust and credibility.
- **Functional & Refined:** Includes a custom contact form with validation UI, a dedicated "Visit" section with the required map slot, and a mobile-responsive navigation system.

The code is fully semantic and production-ready, featuring smooth scrolling and a cohesive visual motif throughout.

Is there anything specific you'd like to refine, or shall we explore mobile-specific optimizations next?

---

---
name: Holly’s Pooch Pawlor Design System
colors:
  surface: '#fcf9f5'
  surface-dim: '#dcdad6'
  surface-bright: '#fcf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ef'
  surface-container: '#f0ede9'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e5e2de'
  on-surface: '#1c1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f3f0ec'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#7d562d'
  on-secondary: '#ffffff'
  secondary-container: '#ffca98'
  on-secondary-container: '#7a532a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c19'
  on-tertiary-container: '#848480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f5'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2de'
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
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.02em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

This design system embodies the essence of a boutique, high-end editorial publication. It is crafted to evoke a sense of artisanal precision and professional warmth, positioning dog grooming not just as a service, but as a luxury spa experience.

The aesthetic leans heavily into **Minimalism** with an **Editorial** flair. High-contrast typography is paired with expansive whitespace to create a breathable, "Champagne Suds" environment. The style is punctuated by thin, elegant line work and a signature scalloped motif that softens the sophisticated charcoal elements, ensuring the brand remains approachable and "paw-friendly" without sacrificing its premium status.

**Target Audience:** Discerning pet owners who view their dogs as family and seek a trustworthy, high-caliber aesthetic that mirrors their own lifestyle choices.

## Colors

The palette is anchored by high-contrast neutrals and a single, warm accent to ground the sophisticated atmosphere.

- **Midnight Groom (#1A1A1A):** Used primarily for typography, borders, and high-impact UI elements. It provides the "ink" in our editorial layout.
- **Champagne Suds (#F9F7F2):** The primary canvas color. It is warmer than pure white, providing a luxurious, creamy backdrop that feels soft and inviting.
- **Powder Paw (#D4A373):** A muted terracotta used for calls to action, highlights, and delicate accents. It adds the "warmth" to the professional charcoal.
- **Neutral Accent (#706F6C):** A secondary charcoal for labels, metadata, and disabled states to maintain legibility without the weight of the primary black.

## Typography

The typographic hierarchy is the backbone of this design system's editorial feel. 

- **Headlines:** Use Playfair Display. It provides a high-contrast serif look that feels classic yet fashion-forward. Display sizes should utilize tighter letter spacing to feel "locked in."
- **Body & Labels:** Use Montserrat. To achieve the "wide-spaced" boutique look, body text uses a slightly increased letter-spacing (0.01em to 0.02em) and generous line heights.
- **Labels:** Labels and small metadata should often be set in uppercase with increased tracking (0.08em) to create a structured, professional appearance.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for desktop to ensure the editorial compositions remain controlled and balanced. 

- **The Grid:** A 12-column system with 24px gutters. Elements should often span 6 or 8 columns to leave ample "white space" on the sides, mimicking a magazine layout.
- **Rhythm:** An 8px baseline grid drives vertical rhythm.
- **Responsive Behavior:** 
    - **Desktop:** 64px outer margins with a 1200px max-width container.
    - **Tablet:** 40px outer margins, fluid 8-column grid.
    - **Mobile:** 20px outer margins, fluid 4-column grid. Vertical spacing between sections should be aggressive (80px+) to maintain the premium, uncrowded feel.

## Elevation & Depth

To maintain a clean, artisanal aesthetic, this design system avoids heavy shadows. Depth is communicated through **Low-Contrast Outlines** and **Tonal Layers**.

- **Thin Line Work:** Use 1px solid lines in Midnight Groom (#1A1A1A) with low opacity (10-20%) for section dividers and card borders.
- **Tonal Stacking:** Surfaces are distinguished by subtle shifts in background color. For example, a card might use a slightly brighter white or a very pale tint of Powder Paw to sit atop the Champagne Suds background.
- **Interactive Depth:** Only use extremely soft, diffused shadows (0px 4px 20px rgba(0,0,0,0.05)) on primary floating elements like "Book Now" buttons to give them a tactile "lift" without breaking the flat editorial style.

## Shapes

The shape language balances sharp, professional lines with soft, organic curves.

- **Standard Elements:** Buttons and input fields use a **Soft (0.25rem)** corner radius, providing a modern but disciplined structure.
- **Scalloped Motif:** For featured images, container headers, or "Brand Moments," a custom scalloped edge should be applied. This is a series of small, outward semi-circles along the top or bottom edge of a container, reminiscent of classic grooming shears or soap suds.
- **Thin Rules:** Horizontal and vertical rules should be 1px thick, reflecting the precision of professional grooming tools.

## Components

- **Buttons:** Primary buttons are solid Midnight Groom with white Montserrat text (Uppercase). Secondary buttons are outlined (1px Midnight Groom) with no fill.
- **Cards:** Cards should have a 1px border (#1A1A1A at 10% opacity) and 0.25rem corner radius. The top edge can optionally feature the signature "Scalloped" decorative border for premium service highlights.
- **Input Fields:** Minimalist design with only a bottom border (1px) in Midnight Groom. Labels should be small, uppercase, and placed above the line.
- **Chips/Badges:** Small, pill-shaped elements using a Powder Paw fill at 15% opacity with dark Powder Paw text.
- **Lists:** Service menus should be styled like a restaurant menu—Playfair Display for the service name on the left, a thin dotted line connecting to the price on the right.
- **Selection Controls:** Checkboxes and radios should be geometric and thin-lined. When selected, they should fill with Powder Paw (#D4A373).
