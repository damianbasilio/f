I have designed a bespoke, editorial-grade homepage for **Seventh House** that breaks away from standard local business templates to create a truly premium first impression.

### Design Rationale:
*   **Modern Heritage Aesthetic**: I utilized a high-contrast palette of **Deep Charcoal**, **Muted Sage**, and **Warm Ochre** on an **Off-white Linen** background to reflect Portsmouth’s coastal history while maintaining a high-fashion, editorial edge.
*   **Editorial Layout**: The design uses an asymmetric, staggered grid with generous whitespace and a repeating visual motif of thin vertical rules—echoing the precision and artistry of hair design.
*   **Typographic Hierarchy**: Bold, high-contrast serifs create a sense of authority and luxury, while clean sans-serifs ensure clarity for service details and contact information.
*   **Memorable Sections**: 
    *   The **Hero** features overlapping typography for a distinctive visual statement.
    *   The **Services** section is styled like a magazine menu rather than a generic grid.
    *   The **Visit** section includes the requested technical map slot and a minimalist inquiry form for a seamless user experience.

The site is fully responsive, semantic, and production-ready with integrated smooth scrolling and form validation UI.

How does this visual direction feel for the brand? We can refine the color balance or adjust specific section layouts if you'd like to explore further.

---

---
name: Seventh House
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
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#556158'
  on-secondary: '#ffffff'
  secondary-container: '#d6e3d7'
  on-secondary-container: '#59665c'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#261900'
  on-tertiary-container: '#a17f3b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#d9e6da'
  secondary-fixed-dim: '#bdcabe'
  on-secondary-fixed: '#131e17'
  on-secondary-fixed-variant: '#3e4a41'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 92px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  statement-serif:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
spacing:
  unit: 4px
  strand-width: 0.5px
  margin-desktop: 80px
  margin-mobile: 20px
  gutter: 24px
  stagger-offset: 48px
---

## Brand & Style
The design system for Seventh House embodies "Modern Heritage." It is a premium, editorial-grade aesthetic that bridges the gap between Portsmouth’s coastal history and the avant-garde world of high-fashion hair artistry. The brand personality is sophisticated, confident, and meticulously curated.

The design style is **Editorial Minimalism** with **High-Contrast** accents. It utilizes expansive white space to create a sense of luxury and calm, while employing asymmetric layouts and overlapping elements to mimic the composition of a high-end fashion magazine. The visual signature is defined by "The Strand"—ultra-thin 0.5pt vertical lines that act as structural dividers and decorative motifs, subtly nodding to the craft of hair design.

## Colors
The palette is grounded in monochromatic depth with organic, coastal-inspired undertones.

- **Primary (Deep Charcoal):** Used for primary typography and structural "Strand" lines to ensure high-contrast authority.
- **Secondary (Muted Sage):** Used for subtle backgrounds, secondary buttons, and tonal shifts in editorial sections.
- **Accent (Warm Ochre):** Reserved for high-value calls to action, active states, and premium highlights (representing "Aged Brass").
- **Background (Linen):** The primary canvas for all interfaces, providing a warmer, more tactile feel than pure white.

## Typography
The typography is the core of this design system’s editorial feel. 

**Bodoni Moda** is used for all headlines and display text. For "Display LG" roles, use optical sizing to emphasize the high-contrast thins and thicks of the typeface. All serif headlines should utilize generous tracking (letter spacing) to evoke a sense of airiness and luxury.

**Inter** provides a functional, modern counterpoint for body copy and UI labels. It ensures legibility in service menus and booking flows. "Label Caps" should always be used in uppercase for navigational elements and small headers to maintain the "Modern Heritage" structure.

## Layout & Spacing
This design system utilizes an **Asymmetric Fluid Grid**. Avoid traditional, centered symmetry.

- **The Staggered Layout:** Content blocks (images and text) should be offset from one another by the `stagger-offset` value, creating a sense of movement down the page.
- **The Strand:** Use 0.5px vertical rules to separate columns or to "anchor" floating text. These rules should often extend beyond the content containers to the top or bottom of the viewport.
- **Overlays:** Imagery should frequently overlap background color blocks or typography to create depth without using shadows.
- **Margins:** Large horizontal margins are required (80px on desktop) to compress the content and focus the eye, mimicking the "safe zones" of a printed magazine.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Z-axis Overlaps** rather than traditional shadows.

- **Surfaces:** Use the Linen background as the base. Muted Sage and Deep Charcoal can be used as "layered sheets" that sit on top or underneath content.
- **Glass Effects:** On scroll-over or navigation overlays, use a very subtle backdrop blur (8px) with a 90% opacity Linen tint to maintain the editorial feel while providing functional focus.
- **Zero Shadow Policy:** Avoid drop shadows. Visual hierarchy is communicated through size, color contrast, and the physical stacking of elements.

## Shapes
The design system uses **Sharp (0px)** corners for all primary elements. 

The use of 90-degree angles reinforces the architectural, "heritage" feel of the brand. This applies to buttons, image containers, input fields, and cards. The only exception is for "The Strand" vertical lines, which should have no visible cap styling.

## Components
- **Primary Button:** Rectangular, sharp corners. Solid Deep Charcoal background with Linen text in `label-caps`. On hover, transition to Muted Sage.
- **Ghost Button:** 1px Deep Charcoal border, no background, `label-caps` text. Used for secondary actions.
- **Editorial Card:** Not a traditional card with a border; instead, a combination of an image with a `stagger-offset` and a floating `headline-md` that overlaps the image corner.
- **Input Fields:** A single 1px Deep Charcoal line at the bottom (underline style only) to maintain the "Strand" motif. Labels use `label-caps` positioned above the line.
- **The Hair Menu:** A list-style component where the service name (Bodoni Moda) and price are separated by a long, 0.5px horizontal line that spans the container.
- **Navigation:** Minimalist top-bar. Links in `label-caps`. Active state indicated by a 0.5px vertical line "Strand" appearing above the link.
