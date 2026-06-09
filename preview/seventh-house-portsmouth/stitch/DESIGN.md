I've designed and built a bespoke, editorial-grade homepage for **Seventh House**. 

### Design Rationale:
- **Architectural Grid**: Instead of a standard local-business layout, I used an asymmetrical editorial grid defined by thin, elegant rules. This mirrors the precision of hair artistry and the historic structure of Portsmouth.
- **Parchment & Ink Palette**: I moved away from generic "salon" colors to a sophisticated high-contrast palette of warm parchment and deep ink charcoal, creating an atmosphere of quiet luxury.
- **Typography as Art**: Large-scale serif headlines serve as visual anchors, reinforcing the "Artisan Studio" positioning.
- **Memorable Visual Motif**: The layout uses intentional density in the typographic headers contrasted with expansive whitespace, creating a rhythm that feels curated rather than assembled.

### Technical Details:
- **Production-Ready HTML/CSS**: A fully semantic document with a mobile-responsive navigation system.
- **Interactive Elements**: Includes a custom form validation UI and smooth-scroll navigation.
- **Standard-Compliant**: Built with the specific contact details and technical requirements you provided, including the designated map slot.

The resulting site provides Seventh House with a memorable digital presence that feels like a high-fashion editorial magazine, positioning the studio as Portsmouth's premier destination for bespoke hair.

---

---
name: Seventh House
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2dd'
  on-secondary-container: '#656461'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271900'
  on-tertiary-container: '#ab7c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#ffdea6'
  tertiary-fixed-dim: '#f7bd48'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
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
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.15em
  navigation:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
  unit-xs: 4px
  unit-sm: 8px
  unit-md: 16px
  unit-lg: 32px
  unit-xl: 64px
---

## Brand & Style
The brand personality is **Artisanal, Confident, and World-Class**, capturing a "New England Sophisticated" aesthetic. This design system bridges the gap between historic Portsmouth charm and contemporary high-fashion editorial.

The style is **Modern Editorial Minimalism**. It relies on high-contrast pairings, generous parchment-toned whitespace, and a structured grid defined by thin hairline rules. The visual narrative should feel like a premium printed lookbook—grounded, intentional, and quiet in its luxury. Photography should be treated with high-contrast, slightly desaturated tones and subtle film grain to reinforce the tactile, artisanal nature of the studio.

## Colors
The palette is rooted in a "Parchment and Ink" philosophy, creating a high-contrast environment that feels more like a physical document than a digital interface.

- **Primary (Ink Charcoal):** Used for all primary typography, iconography, and structural hairline rules.
- **Secondary (Warm Parchment):** The foundational background color. It provides a softer, more historic feel than pure white.
- **Tertiary (Heritage Gold):** Used sparingly for micro-interactions, active states, and small ornamental details (like "Available" indicators or special callouts).
- **Neutral:** A muted grey for secondary information to ensure the hierarchy remains sharp.

## Typography
The typography system uses a dramatic contrast between a traditional, high-contrast serif and a modern, airy sans-serif.

- **Headlines:** Playfair Display is used to establish the "Editorial" authority. Large-scale initials (drop caps or background elements) should be used for section transitions.
- **Body & Labels:** Montserrat provides a clean, functional counterpoint. For body text, ensure generous line-height to maintain readability and "air."
- **Navigation & Metadata:** Always use uppercase Montserrat with wide letter-spacing (0.1em to 0.15em) to evoke a sense of premium branding.

## Layout & Spacing
The layout follows a **Fixed Grid** model inspired by newspaper and magazine columns. 

- **The "House" Structure:** Use thin 1px rules (#1A1A1A at 20-30% opacity) to separate sections, creating a grid-like framework.
- **Density Contrast:** Alternate between "dense" blocks of text (3-column width) and "airy" areas of pure whitespace or large-scale imagery.
- **Responsive Behavior:** 
    - **Desktop:** 12-column grid with wide margins (80px) to frame the content.
    - **Tablet:** 8-column grid with 40px margins.
    - **Mobile:** 4-column grid with 24px margins; rules transition from vertical to horizontal separators.

## Elevation & Depth
This design system avoids shadows entirely. Depth is conveyed through **Tonal Layering** and **Structural Framing**.

- **Layers:** Most content sits flat on the Parchment surface. Use very subtle shifts to a slightly darker parchment shade for "sunken" elements like input fields or footers.
- **Framing:** High-fashion photography should be framed with thin 1px borders or offset by large serif initials behind the image to create a 2D-depth effect.
- **Overlays:** If an overlay is required (e.g., mobile menu), use a solid Warm Parchment background with no transparency to maintain the "printed paper" feel.

## Shapes
The shape language is strictly **Sharp (0px)**. 

To maintain the architectural and "house" motif, every element—including buttons, input fields, and image containers—must have square corners. This reinforces the professional, precise, and grounded New England character of the brand.

## Components
- **Buttons:** Primary buttons are solid Ink Charcoal with white (Parchment) uppercase text. Secondary buttons are outlined with a 1px border. All buttons are sharp-edged.
- **Chips:** Used for "Services" or "Stylists." These should be simple text labels separated by thin vertical bars (|) or heritage gold dots, rather than pills.
- **Inputs:** Underlined only (1px solid #1A1A1A) with labels in uppercase Montserrat 12px. No rounded boxes.
- **Cards:** Defined by their grid position and rule lines rather than containers. An image with a title and price below it, separated by a thin horizontal rule.
- **Lists:** Service menus should be styled with "Playfair Display" names on the left and prices on the right, connected by a faint dotted line or simply wide whitespace.
- **Special Component (The "Studio Seal"):** A large, semi-transparent Playfair Display "7" or "7H" that sits behind text blocks or in the corner of images as a watermark.
