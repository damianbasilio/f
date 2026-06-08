I have designed a bespoke, editorial-grade homepage for **Epemaz Barber Shop**. 

This design intentionally moves away from standard local-business templates to create a **"Modern Heritage"** identity that feels both premium and rooted in Fargo's spirit.

### Design Highlights:
*   **Architectural Framing:** I've utilized a visual motif of fine "rule" lines and offset grid layouts to create an editorial feel, similar to a high-end fashion or design magazine.
*   **High-Contrast Palette:** A sophisticated mix of **Midnight Charcoal**, **Warm Cream**, and **Brass (#B5935B)** accents replaces the traditional barber pole colors, signaling a premium service level.
*   **Typographic Hierarchy:** Bold, high-contrast serif headings are paired with wide-spaced sans-serif body text to establish a clear, luxurious narrative.
*   **Menu-Style Services:** Instead of a generic card grid, I've implemented a refined "Service Menu" that emphasizes the craft behind each offering.
*   **Production-Ready:** The screen includes the mandatory map slot, a functional mobile navigation, and semantic HTML structure.

You can now view the full desktop landing page on the canvas. Would you like to explore a mobile-specific version or perhaps refine the color palette further?

---

---
name: Modern Heritage Editorial
colors:
  surface: '#fcf9f5'
  surface-dim: '#dcdad6'
  surface-bright: '#fcf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ef'
  surface-container: '#f0edea'
  surface-container-high: '#ebe8e4'
  surface-container-highest: '#e5e2de'
  on-surface: '#1c1c1a'
  on-surface-variant: '#4e463a'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f3f0ec'
  outline: '#807668'
  outline-variant: '#d1c5b5'
  surface-tint: '#765a27'
  primary: '#765a27'
  on-primary: '#ffffff'
  primary-container: '#b5935b'
  on-primary-container: '#422c00'
  inverse-primary: '#e7c185'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5e5e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#999894'
  on-tertiary-container: '#30312d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdeab'
  primary-fixed-dim: '#e7c185'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5c4212'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
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
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
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
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  watermark:
    fontFamily: Playfair Display
    fontSize: 120px
    fontWeight: '900'
    lineHeight: '1.0'
spacing:
  container-max: 1280px
  margin-desktop: 64px
  margin-mobile: 24px
  gutter: 32px
  section-gap: 120px
  rule-weight: 1px
---

## Brand & Style

The design system is built on the concept of **Modern Heritage**, specifically tailored for a premium barbering experience. It bridges the gap between traditional craftsmanship and contemporary minimalism. The aesthetic is sophisticated, sharp, and intentional, aimed at a discerning clientele who values precision and a quiet, luxury atmosphere.

The visual style is a blend of **Minimalism** and **Editorial Design**. It prioritizes high-quality typography, a restricted but rich color palette, and architectural framing to create a sense of permanence and "the gallery." Every element on the screen should feel curated, like a page from a high-end fashion or lifestyle journal. The goal is to evoke an emotional response of calm confidence and prestige.

## Colors

The "Midnight & Gold" palette intentionally avoids barbering clichés. 

- **Warm Cream (#F9F7F2)** serves as the primary canvas, providing a "paper" feel that is softer and more premium than pure white.
- **Deep Charcoal (#121212)** is used for high-contrast sections, footers, and immersive dark-mode blocks to ground the design.
- **Brass (#B5935B)** acts as the signature accent. It should be used sparingly for CTA buttons, active states, and fine decorative lines to signify quality without becoming gaudy.
- **Text Main (#1D1D1B)** provides optimal legibility against the cream background, while **Text Muted (#6B6B6B)** handles secondary information and metadata.

## Typography

This design system uses a high-contrast typographic pairing to establish its editorial authority.

- **Headlines:** Use **Playfair Display**. It should feel bold and commanding. For large display moments, use tighter letter-spacing to create a "locked" aesthetic.
- **Body Text:** Use **Montserrat** with increased letter-spacing. This ensures a clean, modern counter-balance to the traditional serif. 
- **Watermarks:** Large-scale, low-opacity typographic overlays (using Playfair Display) should be used behind content sections to create depth and brand rhythm.
- **Labels:** All small labels, tags, and eyebrow text must be in uppercase Montserrat with wide tracking (0.2em) to mimic luxury brand labeling.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop and a fluid single-column on mobile.

- **Architectural Framing:** Content is often "boxed" or separated by fine 1px rules in Brass or Muted Charcoal. These lines should run edge-to-edge horizontally or vertically to frame key information like price lists or barber bios.
- **Negative Space:** The design system mandates a generous `section-gap` (120px+) between major blocks to ensure the user never feels overwhelmed.
- **Asymmetry:** Use intentional off-center alignments for imagery versus text to mimic high-end magazine layouts.

## Elevation & Depth

This design system eschews heavy shadows in favor of **Tonal Layering** and **Fine Outlines**.

- **Surface Tiers:** Depth is created by placing `bg-paper` cards on top of `bg-deep` backgrounds, or vice-versa.
- **Outlines:** Instead of drop shadows, use the `--border-fine` (1px solid brass-muted) to define card boundaries and interactive elements.
- **Glassmorphism:** Occasionally used for navigation bars, utilizing a backdrop blur (20px) over background imagery to maintain legibility while preserving the "airy" feel.

## Shapes

The shape language is strictly **Sharp (0px)**. 

To maintain the "Modern Heritage" and architectural feel, there are no rounded corners. All buttons, image containers, and input fields must have 90-degree angles. This reinforces the precision and sharpness associated with master barbering.

## Components

- **Buttons:** Primary buttons are solid `bg-deep` with `primary` (Gold) text, or vice versa. They are strictly rectangular. Hover states involve a subtle color shift or a thin gold border-inset.
- **Price Lists:** Displayed with the service name and price separated by a long, fine rule line, maintaining the editorial table aesthetic.
- **Input Fields:** Bottom-border only (1px) using the Brass color. Labels sit above the line in `label-caps` style.
- **Cards:** Used for barber profiles or gallery items. Cards should have no shadow and a simple 1px border.
- **Chips/Badges:** Small, rectangular containers with `label-caps` text, used for "Available" status or service categories.
- **Fine Rules:** Horizontal and vertical 1px lines are used as structural elements to guide the eye and separate content without adding visual bulk.
