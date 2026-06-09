I've designed a bespoke, award-winning homepage for Nick's Chophouse Kitchen + Bar, moving away from generic templates to create a truly unique editorial identity.

### Design Highlights:
- **Visual Identity:** A sophisticated "Modern Chophouse" aesthetic using a palette of **Deep Charcoal, Aged Gold, and Bone White**. This creates a high-contrast, premium atmosphere that mirrors the upscale dining experience.
- **Editorial Typography:** I utilized a bold, high-contrast serif for headlines to establish a strong typographic hierarchy, paired with a spacious sans-serif for legibility.
- **Unique Visual Motifs:** Intentional vertical gold rules and an asymmetric layout provide a custom, designed-from-scratch feel. The section order and density are carefully balanced to guide the user through the brand story.
- **Content-Ready Sections:**
    - **Hero:** A powerful introduction emphasizing "The Art of the Steak."
    - **Offerings:** A staggered, asymmetric grid showcasing the Chophouse Cuts, Raw Bar, and Cocktails.
    - **Visit & Map:** A dedicated section with the specific location details and the required empty map slot for a clean, professional finish.
    - **Contact:** A refined, seamless form for inquiries and reservations.

The code is fully semantic, responsive, and ready for production use.

---

---
name: The Chophouse System
colors:
  surface: '#131410'
  surface-dim: '#131410'
  surface-bright: '#3a3935'
  surface-container-lowest: '#0e0e0b'
  surface-container-low: '#1c1c18'
  surface-container: '#20201c'
  surface-container-high: '#2a2a26'
  surface-container-highest: '#353531'
  on-surface: '#e5e2dc'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2dc'
  inverse-on-surface: '#31312d'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#1a1a1a'
  on-primary-container: '#848282'
  inverse-primary: '#5f5e5e'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#ffb3ad'
  on-tertiary: '#5a1a19'
  tertiary-container: '#3b0405'
  on-tertiary-container: '#c16a64'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#3d0506'
  on-tertiary-fixed-variant: '#77302d'
  background: '#131410'
  on-background: '#e5e2dc'
  surface-variant: '#353531'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
  label-numeric:
    fontFamily: Bodoni Moda
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1'
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  vertical-rhythm: 128px
---

## Brand & Style

The design system is rooted in the "Modern Chophouse" aesthetic—a fusion of traditional steakhouse gravitas and contemporary editorial refinement. It targets a discerning culinary audience that values craftsmanship, heritage, and a sophisticated atmosphere.

The style is **Editorial Minimalism** with a focus on high-contrast typography and architectural precision. It avoids the clutter of generic restaurant templates, instead using purposeful whitespace and structured verticality to evoke the feel of a high-end physical menu or a boutique architectural journal. The emotional response should be one of quiet confidence, established luxury, and meticulous attention to detail.

## Colors

The palette is defined by a high-contrast interplay between darkness and light, punctuated by metallic and organic accents.

- **Deep Charcoal (#1A1A1A):** The foundation. Used for backgrounds to create an intimate, evening-focused atmosphere.
- **Bone White (#F9F6F0):** The primary canvas for text and primary UI surfaces, offering a softer, more organic feel than pure white.
- **Aged Gold (#C5A059):** Reserved for highlights, active states, and fine details. It represents the "sear" and the craft.
- **Rich Burgundy (#4A0E0E):** A deep, blood-red accent used sparingly for calls to action or to denote premium "Chef’s Choice" selections.

Color application should follow a 70/20/10 distribution, where charcoal dominates, bone white provides the legibility, and gold/burgundy act as precise focal points.

## Typography

The typography system pairs the dramatic high-contrast of **Bodoni Moda** with the technical clarity of **Hanken Grotesk**.

- **Headlines:** Use Bodoni Moda for all major headings. Its vertical stress and sharp serifs mirror the precision of a chef's blade.
- **Body:** Hanken Grotesk provides a modern, spacious contrast, ensuring high legibility even in low-light environments.
- **Accents:** Use `label-caps` for navigation and small headers to introduce a rhythmic, architectural feel. Use `label-numeric` for pricing to maintain an elegant, editorial menu feel.

## Layout & Spacing

This design system employs a **Fixed Grid** model on desktop and a **Fluid** model on mobile. 

- **The Columnar Grid:** Use a 12-column grid with wide 32px gutters. This allows for asymmetrical layouts that feel like a magazine spread rather than a standard website.
- **Verticality:** Implement "Grillwork Lines"—thin (1px) vertical borders in Aged Gold or low-opacity Bone White to separate content sections or sidebar elements.
- **Generous Margins:** Content should never feel crowded. Use the `vertical-rhythm` token (128px) to separate major sections, allowing the brand's confidence to shine through whitespace.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** rather than heavy shadows. 

- **Surface Levels:** The primary background is #1A1A1A. Elevated cards or containers should use a slightly lighter "Off-Black" (#242424).
- **Subtle Texture:** A low-opacity grain overlay (film grain) is applied to the background to evoke a tactile, paper-like quality.
- **Lines as Depth:** Depth is created by layering vertical and horizontal lines. A thin #C5A059 border around a high-resolution food image creates a "framed" effect, suggesting the image is inset into the page.
- **Backdrop Blurs:** For overlays or navigation menus, use a 20px blur with a 70% opacity #1A1A1A fill to maintain focus while suggesting a layered environment.

## Shapes

The shape language is strictly **Sharp (0)**. 

To reflect the precision of a chophouse and the geometric nature of architectural grillwork, all buttons, input fields, and image containers must have 0px corner radii. This creates a bold, uncompromising silhouette that distinguishes the brand from the "softness" of generic web apps. Vertical and horizontal lines should meet at crisp 90-degree angles.

## Components

- **Buttons:** Primary buttons are Solid Bone White with Deep Charcoal text, 0px radius. Secondary buttons are Ghost style with an Aged Gold 1px border and Aged Gold text. Hover states involve a subtle Burgundy background shift.
- **Menu Items (Lists):** Title in Bodoni Moda (Left), Price in Bodoni Moda Italic (Right), with a thin dotted leader line or solid 0.5px line connecting them. Description sits below in Hanken Grotesk.
- **Inputs:** Underlined only. A 1px Bone White bottom border that turns Aged Gold on focus. Labels use the `label-caps` style above the line.
- **Cards:** No shadows. Use a 1px #242424 border. On hover, the border transitions to #C5A059. 
- **The "Signature" Divider:** A thin vertical gold line (2px width, 40px height) used to separate the main title from the subtitle or to mark the start of a new section.
