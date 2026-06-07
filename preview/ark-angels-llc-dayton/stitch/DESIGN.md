I've completed the bespoke redesign for ARK Angels, LLC, creating a high-fidelity, editorial-grade homepage that emphasizes their local heritage and professional integrity.

### Design Highlights:
- **Visual Identity**: Established a "Slate & Gold" palette paired with high-contrast serif typography to create a premium, authoritative first impression.
- **Classic Centered Layout**: The hero and core sections use a symmetrical, centered composition that feels balanced and timeless.
- **Editorial Flair**: I used large serif numerals for the services section and fine hairline dividers throughout to give the site a sophisticated magazine-like quality.
- **Local Context**: Focused the copy on Dayton, OH, and the business's community roots to differentiate it from generic national competitors.

The code is fully production-ready, featuring a mobile-responsive navigation system, smooth scrolling, and the specific map slot you requested.

How does this new direction feel for the brand? We can refine the color balance or adjust the visual weight of the services section if you'd like.

---

---
name: ARK Angels Editorial System
colors:
  surface: '#fbf9fa'
  surface-dim: '#dbd9da'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#efedee'
  surface-container-high: '#eae7e8'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1c1c'
  on-surface-variant: '#46474a'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f1'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c19'
  on-tertiary-container: '#848480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9fa'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e3'
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
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 128px
---

## Brand & Style
The design system for this brand is rooted in **Modern Editorialism**. It prioritizes a bespoke, high-end experience that feels more like a curated monograph than a standard service website. The brand personality is authoritative yet approachable, evoking the quiet confidence of a heritage institution.

The design style utilizes **Minimalism** combined with **Tactile** elements. We employ generous whitespace (macro-gestures) to create a sense of luxury and breathing room. To differentiate from "tech" minimalism, we introduce subtle parchment textures and hairline rules—referencing traditional lithography and premium stationery. The goal is to evoke an emotional response of absolute trust and meticulous attention to detail.

## Colors
The palette, "Slate & Gold," is designed for high-contrast legibility and a sense of "quiet luxury."

- **Slate (#1A1A1B):** Used for primary typography and deep-toned backgrounds. It is a soft black that feels more natural and expensive than pure hex #000.
- **Gold (#C5A059):** A muted metallic used sparingly for accents, key CTAs, and decorative hairline flourishes. It should never be used for large blocks of text.
- **Parchment (#F9F7F2):** The primary canvas color. This off-white reduces eye strain and provides a tactile, paper-like quality compared to stark white.
- **Neutral (#4A4A4B):** Used for secondary body text and metadata to maintain a clear hierarchy without competing with the primary slate headings.

## Typography
The typographic strategy relies on a high-contrast pairing:

- **Headlines:** Playfair Display provides the "editorial voice." Use it with tight tracking for large displays and slightly more air for subheads. It should feel authoritative and graceful.
- **Body:** Inter is chosen for its utilitarian clarity, providing a modern counterweight to the serif. Increased line-height (1.8) for `body-lg` is essential to maintain the magazine-style readability.
- **Labels:** Use `label-caps` for eyebrows, small descriptors, and navigation items. The wide letter-spacing is a key "high-end" brand signifier.

## Layout & Spacing
This design system uses a **Fixed Grid** model for desktop to ensure the "editorial" compositions remain perfectly balanced. 

- **Grid:** 12-columns with wide 32px gutters to prevent content density.
- **Symmetry:** Center-aligned layouts should be used for high-impact landing sections. Asymmetric layouts (e.g., text in 5 columns, image in 7) should be used for narrative sections to keep the eye moving.
- **The "Editorial Gap":** Use the `section-gap` (128px) between major content blocks. This intentional "over-spacing" is what separates this system from a generic business template.
- **Mobile:** On mobile, collapse to a single column with 24px margins, but maintain the vertical whitespace to preserve the premium feel.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Hairline Outlines** rather than heavy shadows.

- **Flat Surfaces:** Elements should generally appear to exist on the same physical plane as the parchment background.
- **Hairlines:** Use 0.5pt or 1pt solid rules in Slate (#1A1A1B) at 15% opacity to separate sections or frame content. This mimics the look of a printed newspaper or journal.
- **Depth:** When elevation is required (e.g., a modal or dropdown), use a sharp, zero-blur shadow with a very low opacity, or a "ghost" border. Avoid soft, blurry "Material" style shadows.

## Shapes
The shape language is **Sharp (0px)**. 

To maintain the sophisticated, architectural feel of a professional services firm, all containers, buttons, and form fields must have hard 90-degree corners. Rounded corners are perceived as "friendly" or "tech-oriented," whereas sharp corners evoke precision, heritage, and structure. 

Images should follow this rule strictly, often framed by a thin gold or slate border with a 4px-8px inset to create a "matted print" effect.

## Components
- **Buttons:** Primary buttons are solid Slate (#1A1A1B) with white Inter text in all caps. Secondary buttons are Slate hairlines (1px) with no fill. Interaction states should be a subtle shift to the Gold (#C5A059) color.
- **Input Fields:** Bottom-border only (1px Slate). No background fill unless focused. Placeholder text should be in italics (Playfair Display) to feel bespoke.
- **Cards:** Cards should not have shadows. Use a subtle parchment-on-white contrast or a simple 1px hairline border. Headers within cards should be center-aligned.
- **Rules/Dividers:** Horizontal rules are a signature element. Use them to lead the eye between headlines and body copy.
- **The "Signature" Component:** A decorative gold serif "A" or a small crest should be used as a divider or "end-of-article" mark to reinforce the bespoke nature of the services.
