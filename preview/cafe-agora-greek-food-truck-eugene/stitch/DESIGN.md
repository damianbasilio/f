I've designed a bespoke, editorial-grade homepage for **Cafe Agora** that establishes a premium first impression for their Greek food truck. 

### Design Highlights:
*   **Unique Visual Identity:** I've moved away from standard local-business templates in favor of a "Modern Aegean" aesthetic. This features a high-contrast color story using **Aegean Blue**, **Santorini White**, and **Terra Cotta** accents.
*   **Editorial Typography:** I used a sophisticated serif for headlines to create an "award-winning" editorial feel, paired with a clean, widely-tracked sans-serif for body copy.
*   **Bespoke Layouts:** 
    *   **Hero:** An asymmetrical composition that treats food photography as art rather than just a product shot.
    *   **The Agora Menu:** A custom-styled menu section that feels like a physical printed menu, moving away from typical card grids.
    *   **About Section:** Incorporates organic-shaped image masks and a layout that emphasizes the "local soul" of the business.
*   **Functional Elements:**
    *   Included the required `#visit` section with the specified `data-map-slot` for production readiness.
    *   A custom contact form designed with minimalist underlined inputs and tailored validation UI states.
    *   Full responsive support, ensuring the editorial quality translates to mobile devices.

The site is built with semantic HTML and CSS custom properties, making it production-ready and easy to maintain. Would you like to adjust the visual motif or add more detail to the menu section?

---

---
name: Aegean Editorial
colors:
  surface: '#faf9fd'
  surface-dim: '#dad9dd'
  surface-bright: '#faf9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f7'
  surface-container: '#eeedf1'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e3e2e6'
  on-surface: '#1a1c1e'
  on-surface-variant: '#43474e'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f1f0f4'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#000d22'
  on-primary: '#ffffff'
  primary-container: '#002349'
  on-primary-container: '#718bb7'
  inverse-primary: '#adc8f6'
  secondary: '#5e5f5d'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0dd'
  on-secondary-container: '#626361'
  tertiary: '#0a1000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d2700'
  on-tertiary-container: '#809246'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#adc8f6'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2c476f'
  secondary-fixed: '#e3e2e0'
  secondary-fixed-dim: '#c7c6c4'
  on-secondary-fixed: '#1a1c1a'
  on-secondary-fixed-variant: '#464745'
  tertiary-fixed: '#d7ec95'
  tertiary-fixed-dim: '#bbcf7c'
  on-tertiary-fixed: '#161e00'
  on-tertiary-fixed-variant: '#3d4c05'
  background: '#faf9fd'
  on-background: '#1a1c1e'
  surface-variant: '#e3e2e6'
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
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built on the philosophy of "Editorial Premium," treating a food truck digital experience with the same reverence as a high-end culinary publication. The brand personality is authentic and elevated, moving away from street-food clichés toward a sophisticated, Mediterranean aesthetic. 

The visual style blends **Minimalism** with **Modern Brutalist** structures—specifically through the use of heavy borders and generous whitespace—balanced by organic, asymmetrical shapes that mimic the coastal geography of Greece. The goal is to evoke the sensory memory of a sun-drenched afternoon in the Mediterranean: warm, calm, and memorable.

## Colors

The palette is a curated "unique color story" that avoids the high-saturation blues often associated with Greek themes.

- **Agora Blue (#002349):** A deep, ink-like navy used for primary typography, borders, and heavy structural elements.
- **Santorini White (#FAF9F6):** The primary canvas. A soft, warm off-white that reduces eye strain and provides a premium, paper-like feel.
- **Olive Grove (#708238):** A muted, sophisticated sage used for secondary text, icons, and subtle decorative accents.
- **Terra Cotta (#C05746):** An earthy, clay-inspired red reserved exclusively for high-priority Call-to-Actions (CTAs) and critical price points.

## Typography

The typography system relies on a high-contrast pairing to achieve its editorial look. 

**Headlines** use *Playfair Display*, a transitional serif that conveys elegance and authority. Large display sizes should utilize negative letter-spacing to feel more "locked-in" and bespoke.

**Body Text** uses *DM Sans*, chosen for its geometric purity and low contrast, which provides a modern counterpoint to the serif headings. Generous tracking (letter-spacing) is applied to all body copy to enhance the airy, luxurious feel of the layout.

**Labels** are strictly uppercase with significant letter-spacing to act as navigational anchors without distracting from the editorial flow.

## Layout & Spacing

The layout follows a **Fluid Grid** with an emphasis on "negative space as a feature." 

- **Desktop:** A 12-column grid with wide 64px margins. Content is often offset; for example, a description might occupy columns 2-6 while the corresponding image occupies 8-12, creating an asymmetrical editorial flow.
- **Mobile:** A 4-column grid with 20px margins. Vertical rhythm is prioritized, with large gaps between sections to prevent the UI from feeling "cramped."
- **Greek Key Motif:** Modernized Greek key patterns are used as thin, horizontal dividers (1px height) to separate major sections, replacing standard solid lines.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layers** and **Bold Outlines**. 

Depth is communicated through the physical stacking of elements rather than light sources. Components like cards or menus utilize 1px solid borders in *Agora Blue* or *Olive Grove*. To create a "lifted" effect, elements may use a hard, 4px offset "block shadow" (a solid color fill shifted down and right) rather than a soft blur, maintaining the crisp, graphic nature of the brand.

Asymmetrical organic shapes—inspired by rough-cut marble or island coastlines—are placed in the background layer at low opacity (5-10%) to provide a subtle sense of terrain and movement behind the structured grid.

## Shapes

The shape language is **Sharp (0px)** for structural components to maintain a premium, architectural feel. 

Rectilinear buttons, input fields, and containers provide a disciplined framework. However, this rigidity is intentionally broken by **Organic Image Masks**. High-quality food photography should be housed in containers with custom, hand-drawn asymmetrical paths (blobs or "stone" shapes) to contrast against the sharp-edged UI.

## Components

### Buttons
Primary buttons are rectangular (0px radius) with an *Agora Blue* fill and *Santorini White* text. For CTAs like "Order Now," use a *Terra Cotta* fill. Hover states involve a slight shift in the 1px border weight or a color inversion.

### Cards
Menu items are displayed on *Santorini White* cards with a subtle 1px *Olive Grove* border. Titles are Serif, and prices are set in *DM Sans* Bold.

### Input Fields
Inputs are minimalist: a single 1px bottom border in *Agora Blue*. Labels sit above in `label-caps` style.

### Greek Motifs
A "Modern Key" component—a simplified, single-line geometric pattern—is used as a decorative footer element or a header underline to reinforce brand identity without looking dated.

### Food Photography
All imagery must utilize "moody" lighting (Chiaroscuro style), emphasizing texture and deep shadows. Images should never be full-bleed rectangles; they must always be masked by an organic, asymmetrical shape or offset from their container.
