I've designed and built a bespoke, editorial-style landing page for **Breezes Delight** that captures a premium coastal aesthetic.

### Design Highlights:
*   **Visual Identity**: I established a "Coastal Editorial" theme, using a sophisticated palette of **Seafoam Mist**, **Deep Atlantic**, and **Sandcastle** to move away from generic beach tropes toward a high-end boutique feel.
*   **Typographic Hierarchy**: Large, elegant serif headings create a magazine-like experience, while wide-spaced sans-serif body copy ensures modern readability and a "breezy" atmosphere.
*   **Editorial Layout**: The page uses an asymmetrical grid and intentional whitespace to feel curated and unique. I've integrated a custom "Credibility Ribbon" and a layered hero section to make a memorable first impression.
*   **Production-Ready**: The code is fully semantic, responsive down to 375px, and includes custom form validation UI and smooth scrolling.

The site is ready for deployment as a unique, high-fidelity digital storefront for the Jacksonville community.

---

---
name: Coastal Editorial
colors:
  surface: '#fbfbe2'
  surface-dim: '#dbdcc3'
  surface-bright: '#fbfbe2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f5dc'
  surface-container: '#efefd7'
  surface-container-high: '#eaead1'
  surface-container-highest: '#e4e4cc'
  on-surface: '#1b1d0e'
  on-surface-variant: '#3f4945'
  inverse-surface: '#303221'
  inverse-on-surface: '#f2f2d9'
  outline: '#707975'
  outline-variant: '#bfc9c4'
  surface-tint: '#29695b'
  primary: '#00342b'
  on-primary: '#ffffff'
  primary-container: '#004d40'
  on-primary-container: '#7ebdac'
  inverse-primary: '#94d3c1'
  secondary: '#516161'
  on-secondary: '#ffffff'
  secondary-container: '#d4e6e5'
  on-secondary-container: '#576867'
  tertiary: '#5d0f0e'
  on-tertiary: '#ffffff'
  tertiary-container: '#7b2622'
  on-tertiary-container: '#ff9389'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#afefdd'
  primary-fixed-dim: '#94d3c1'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#065043'
  secondary-fixed: '#d4e6e5'
  secondary-fixed-dim: '#b8cac9'
  on-secondary-fixed: '#0e1e1e'
  on-secondary-fixed-variant: '#3a4a49'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#7f2924'
  background: '#fbfbe2'
  on-background: '#1b1d0e'
  surface-variant: '#e4e4cc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 84px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.03em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  section-gap: 120px
  element-gap: 24px
  container-padding: 64px
  grid-gutter: 32px
---

## Brand & Style
The brand personality is rooted in the quiet luxury of a high-end seaside boutique. It balances the expansive, airy feeling of the coast with the structured precision of a premium fashion editorial. The target audience seeks sophistication, tranquility, and a curated experience that feels personal rather than mass-market.

The design style is **Minimalist-Editorial**. It leverages heavy whitespace to create a "breezy" atmosphere, punctuated by high-contrast typography and thin, elegant rules. The interface should feel like a digital coffee-table book: intentional, rhythmic, and calm. Visual interest is generated through the tension between vast empty spaces and dense, beautifully typeset information blocks.

## Colors
This design system utilizes a palette that avoids "maritime" clichés in favor of "coastal luxury."

- **Deep Atlantic (#004D40):** The primary anchor. Used for headlines, primary buttons, and heavy borders to provide structural authority.
- **Seafoam Mist (#E0F2F1):** A light, airy tint used for large background sections or subtle container fills to soften the white space.
- **Sandcastle (#F5F5DC):** A warm neutral used for page backgrounds or card surfaces to prevent the UI from feeling sterile.
- **Coral Accent (#FF8A80):** A sophisticated, warm pop used sparingly for notifications, specific calls to action, or decorative motifs.

The primary background should alternate between pure white and **Sandcastle**, with **Seafoam Mist** used as a transitional wash.

## Typography
The typography is the core of the editorial identity. 

**Playfair Display** is used for all headlines and display text. It should be typeset with tight tracking in larger sizes to emphasize its elegant serifs. For a truly high-end feel, use italicized styles for emphasis within a headline.

**Montserrat** provides a modern, breathable counterpoint for body copy. To achieve the "breezy" feel, body text uses generous line heights (1.75x+) and increased letter spacing.

Labels and metadata should always be set in uppercase Montserrat with wide tracking to act as architectural markers on the page.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop (12 columns) but transitions to a fluid, high-margin layout on smaller devices.

- **Intentional Density:** Content-heavy sections (like articles or product details) should be tightly grouped with narrow gutters to create "islands" of information.
- **Expansive Voids:** These islands are separated by massive vertical gaps (up to 160px) to allow the eye to rest and emphasize the "breezy" atmosphere.
- **Rule Lines:** Use 1px "Deep Atlantic" lines to separate sections horizontally or vertically. These lines should often extend beyond the grid to the edge of the viewport to create a sense of scale.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** and **Subtle Overlaps** rather than traditional shadows.

- **Stacked Surfaces:** Use the contrast between "Sandcastle" and White to create hierarchy. A card or container should feel distinct because of its color fill, not a drop shadow.
- **Organic Overlaps:** Images or text blocks should occasionally overlap section boundaries or 1px rule lines to create a sense of tactile layering, reminiscent of a scrapbook or magazine spread.
- **Ghost Shadows:** If elevation is strictly required for functional clarity (like a floating menu), use a very large, extremely faint (3% opacity) shadow tinted with "Deep Atlantic".

## Shapes
The shape language is primarily **Sharp (0px)** to maintain a sophisticated, architectural edge. This reinforces the editorial magazine feel.

To introduce the "coastal" element, use **Organic Masks** for imagery—subtle, hand-drawn-like curves or soft "pebble" shapes—that contrast against the rigid, sharp-cornered UI elements and lines. Buttons and input fields must remain perfectly rectangular to preserve the premium aesthetic.

## Components

- **Buttons:** Primary buttons are solid "Deep Atlantic" with white "Montserrat" text in uppercase. Secondary buttons use a 1px "Deep Atlantic" border with no fill.
- **Input Fields:** Minimalist design with only a bottom border (1px). Labels sit above the line in small, wide-spaced Montserrat.
- **Cards:** No borders or shadows. Use a "Sandcastle" fill or a simple 1px outline to define the container. Images within cards should occupy the full width.
- **Chips/Tags:** Small, pill-shaped outlines with "label-sm" typography, used sparingly to not break the sharp-edged aesthetic.
- **Editorial Pull-Quotes:** Large "Playfair Display" text set in italics, framed by thin 1px horizontal lines above and below.
- **Navigation:** Deeply minimal. Use an oversized "Mega-menu" that utilizes the full screen width, featuring large imagery and descriptive labels rather than simple lists.
