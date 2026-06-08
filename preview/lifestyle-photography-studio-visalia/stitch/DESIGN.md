I have designed a bespoke, editorial-grade homepage for **Lifestyle Photography Studio**. 

### Design Rationale:
- **Visual Identity**: Established a sophisticated "Studio Editorial" theme using a high-contrast serif typeface (**Bodoni Moda**) and a palette of charcoal, warm oat, and muted terracotta to convey a premium, timeless feel.
- **Layout Architecture**: Employed an asymmetrical grid and generous whitespace to break away from generic local-business templates, creating a rhythmic flow that mirrors the "Rhythm of Life" brand messaging.
- **Editorial Details**: Integrated thin rule lines, overlapping typography, and intentional photo placements to mimic high-end fashion and lifestyle magazines.
- **Functional Features**: Included a specialized Visit section with the requested map slot, a minimalist contact form with validation UI, and a fully responsive navigation system that scales gracefully down to 375px.

The result is a production-ready desktop experience that prioritizes authenticity and professional excellence.

---

---
name: Studio Editorial
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#454844'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#757873'
  outline-variant: '#c5c7c2'
  surface-tint: '#5f5e5d'
  primary: '#171817'
  on-primary: '#ffffff'
  primary-container: '#2c2c2b'
  on-primary-container: '#949391'
  inverse-primary: '#c8c6c4'
  secondary: '#625e55'
  on-secondary: '#ffffff'
  secondary-container: '#e5dfd3'
  on-secondary-container: '#666259'
  tertiary: '#300b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b1f0c'
  on-tertiary-container: '#c68369'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e0'
  primary-fixed-dim: '#c8c6c4'
  on-primary-fixed: '#1b1c1b'
  on-primary-fixed-variant: '#474745'
  secondary-fixed: '#e8e2d6'
  secondary-fixed-dim: '#cbc6ba'
  on-secondary-fixed: '#1e1c14'
  on-secondary-fixed-variant: '#4a473e'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#360f01'
  on-tertiary-fixed-variant: '#6c3924'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  rule-weight: 1px
---

## Brand & Style

This design system is built for a high-end photography studio, prioritizing an **Editorial** aesthetic that feels like a premium print monograph. The brand personality is **Authentic, Timeless, and High-End**, specifically tailored for clients in Central California who value legacy and artistry.

The design style leans into **Minimalism** with a focus on high-quality typography and intentional, asymmetrical whitespace. To achieve a physical, tactile feel, the interface uses subtle grain textures and thin "rule" lines to frame content, mirroring the layout of a luxury lifestyle magazine. The emotional response should be one of quiet confidence, warmth, and artistic sophistication.

## Colors

The palette is rooted in natural, earthy tones to evoke the warmth of the Visalia landscape and the authenticity of human connection.

- **Primary (Deep Charcoal):** Used for primary typography, borders, and heavy-impact UI elements. It provides the "ink" for our editorial layout.
- **Secondary (Warm Oat):** Used for large surface areas and container backgrounds to prevent the clinical feel of pure white.
- **Tertiary (Muted Terracotta):** An accent color used sparingly for calls to action, active states, or subtle highlights. It adds a touch of organic warmth.
- **Neutral (Soft Ivory):** The base canvas color, providing a clean, high-contrast backdrop for photography.

Texture Note: Apply a 3% opacity noise overlay to all large background surfaces to simulate premium paper stock.

## Typography

The typography system relies on a high-contrast pairing that defines the editorial look.

- **Headlines:** Use **Bodoni Moda**. This high-contrast serif provides the "fashion" and "luxury" feel. Italics should be used for emphasis or sub-headers to add a rhythmic, poetic quality to the layout.
- **Body & UI:** Use **Montserrat**. This is chosen for its geometric purity and wide aperture. It must be tracked out slightly (letter-spacing) in all instances to maintain an airy, premium feel. 
- **Label Caps:** Used for navigation items, small metadata, and buttons. Always presented in uppercase with generous tracking (0.15em) to distinguish UI elements from editorial content.

## Layout & Spacing

This design system uses a **Fixed Grid** model for desktop to ensure photography remains the focal point without over-stretching. 

- **Grid:** 12-column grid with 24px gutters. 
- **Asymmetry:** Content should rarely be perfectly centered. Lean into "off-balance" layouts—for example, a photo spanning 7 columns with text occupying 3 columns on the opposite side, leaving a 2-column gap.
- **Framing:** Use 1px "rule lines" in Deep Charcoal (at 20% opacity) to separate sections or frame imagery. 
- **Mobile:** Transition to a 4-column fluid grid. Increase vertical margins between sections to maintain the "breathable" feel even on smaller screens.

## Elevation & Depth

To maintain a sophisticated, print-like aesthetic, this system avoids traditional shadows and neomorphism.

- **Flat Depth:** Hierarchy is established through **Tonal Layers** (Soft Ivory vs. Warm Oat) and high-contrast typography.
- **Rule Lines:** Use 1px borders to define containers rather than shadows.
- **Image Overlays:** Images can slightly overlap one another or extend past container boundaries to create a sense of physical layering, as if photos were laid out on a table.
- **Micro-shadows:** If a shadow is absolutely required (e.g., a modal), use a very large blur (32px+) with a very low opacity (5%) tinted with the Muted Terracotta color.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

Sharp corners reinforce the editorial, architectural feel of the brand. This applies to all buttons, input fields, image containers, and cards. The only exception is the use of circular "badges" for decorative elements like "Est. 2015" or "Award Winning" stamps, which should feel like wax seals or embossed stickers.

## Components

- **Buttons:** Sharp corners, 1px border. Primary buttons use Deep Charcoal background with Soft Ivory text. Secondary buttons are ghost-style with a 1px Charcoal border. Labels are always `label-caps`.
- **Inputs:** A single 1px line at the bottom (underline style) rather than a box, keeping the UI minimal. Labels sit above in `label-caps`.
- **Cards:** No borders or shadows. Cards are defined by the image they contain. Information is placed below the image using an asymmetrical alignment (e.g., Title left, Date right).
- **Navigation:** Top-level links are `label-caps`. The active state is indicated by a simple 1px rule line beneath the text.
- **Chips/Tags:** Small, sharp-edged rectangles with a Soft Oat background and Deep Charcoal text. Use sparingly for "New Gallery" or "Editorial" categories.
- **Image Frames:** Photos should often feature a "mat" or "bleed" effect, where a thin rule line sits 16px outside the image border, creating a framed-print look.
