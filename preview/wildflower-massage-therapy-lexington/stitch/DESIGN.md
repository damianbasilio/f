I have designed a bespoke, editorial-grade homepage for **Wildflower Massage Therapy**. 

### Design Strategy
*   **Visual Identity**: I established a "Bespoke Editorial Organic" style, moving away from generic templates in favor of a layout that feels like a curated magazine. 
*   **Color Palette**: I developed a custom "Sun-drenched Meadow" theme using deep forest green (#1A3A32) for authority, muted terracotta (#D48166) for warmth, and soft cream (#F9F7F2) to ensure a premium, calming atmosphere.
*   **Typography**: I used **EB Garamond** for headers to convey trust and elegance, paired with a clean sans-serif for body copy to maintain readability.
*   **Layout & Motifs**: The hero section uses an asymmetrical, overlapping layout to break the standard grid. I’ve incorporated fine hairline separators and large-scale, artisanal-style imagery to ground the brand in its Lexington, KY roots.
*   **Interactive Elements**: The services are presented in a refined vertical list with large numeral indicators, and the "Visit" section includes the requested map placeholder.

### Technical Notes
*   **Semantic HTML**: The page is built with a full semantic structure for SEO and accessibility.
*   **Responsive**: The layout is fully fluid and adjusts seamlessly to mobile devices.
*   **Production-Ready**: The CSS uses custom properties for easy brand management and includes smooth-scrolling and form-validation logic.

The site is now live on your canvas for review. How does this initial direction feel for the Wildflower brand?

---

---
name: Bespoke Editorial Organic
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#414846'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#717975'
  outline-variant: '#c1c8c4'
  surface-tint: '#45655b'
  primary: '#02241d'
  on-primary: '#ffffff'
  primary-container: '#1a3a32'
  on-primary-container: '#82a499'
  inverse-primary: '#abcec2'
  secondary: '#914b34'
  on-secondary: '#ffffff'
  secondary-container: '#ffa588'
  on-secondary-container: '#793822'
  tertiary: '#291e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#433200'
  on-tertiary-container: '#ba9944'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7eade'
  primary-fixed-dim: '#abcec2'
  on-primary-fixed: '#002019'
  on-primary-fixed-variant: '#2d4d44'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59d'
  on-secondary-fixed: '#390b00'
  on-secondary-fixed-variant: '#73341f'
  tertiary-fixed: '#ffdf96'
  tertiary-fixed-dim: '#e7c268'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4400'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: ebGaramond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  title-lg:
    fontFamily: dmSans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: dmSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: dmSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: dmSans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 24px
  margin-desktop: 64px
  overlap-offset: -40px
---

## Brand & Style

The design system is centered on a "Bespoke Editorial Organic" aesthetic, designed to evoke a sense of premium restoration and artistic locality. It rejects the clinical coldness often found in wellness platforms, favoring instead a layout that feels like a high-end lifestyle magazine. 

The visual narrative combines **Minimalism** with **Tactile** influences. It prioritizes generous whitespace to allow the content to "breathe," mirroring the restorative nature of massage therapy. The style is characterized by asymmetrical compositions, intentional overlapping of elements, and a focus on high-quality, large-scale botanical imagery. This approach creates a sophisticated, human-centric experience that feels curated rather than templated.

## Colors

The palette, "Sun-drenched Meadow," uses nature-inspired tones to establish a premium and grounded atmosphere.

- **Soft Cream (#F9F7F2):** The primary canvas. This off-white base reduces eye strain and provides a warm, parchment-like quality compared to pure white.
- **Deep Forest Green (#1A3A32):** Used for primary typography and brand-defining structural elements. It conveys growth, stability, and quiet luxury.
- **Muted Terracotta (#D48166):** The primary action color. It adds an earthy warmth and serves as the main hue for buttons and interactive highlights.
- **Wildflower Yellow (#E9C46A):** A vibrant accent reserved for small functional cues, notifications, or artistic flourishes that guide the eye without overwhelming the serenity of the layout.

## Typography

The typographic system utilizes a high-contrast pairing to reinforce the editorial feel.

**Headings (ebGaramond):** This classical serif brings an authoritative, timeless, and premium weight to the design. Large display sizes should use tighter tracking to emphasize the elegant ligatures.

**Body & Labels (dmSans):** A modern, geometric sans-serif that ensures absolute legibility for service descriptions and booking flows. Its understated nature balances the more expressive serif headings.

Hierarchy is established through significant scale shifts. Display headings are used sparingly for hero sections, while uppercase labels in **dmSans** provide clear navigation and categorization.

## Layout & Spacing

The layout philosophy follows a **fluid asymmetric grid**. Instead of standard symmetrical columns, the design system utilizes an 8px base rhythm but encourages elements to break the grid to create visual interest.

- **Asymmetry:** Content should be weighted intentionally; for example, a 7-column image block paired with a 4-column text block, leaving a 1-column empty "breathing" gap.
- **Overlapping Elements:** To achieve the bespoke organic look, images and text containers should frequently overlap. Use the `overlap-offset` to pull elements into the adjacent section's space.
- **Generous Margins:** Desktop layouts utilize a wide 64px margin to frame the content like a page in an art book. On mobile, this scales to 24px to maintain a sense of airiness without sacrificing screen real estate.

## Elevation & Depth

This design system avoids heavy drop shadows and traditional skeuomorphism in favor of **Tonal Layers** and **Low-Contrast Outlines**.

Depth is created through:
1.  **Layering:** Placing a solid Terracotta or Green element over a Cream background or a background image.
2.  **Subtle Tinted Shadows:** When elevation is strictly necessary (e.g., for a floating booking button), use a very soft, highly diffused shadow tinted with the primary Forest Green (#1A3A32) at 5% opacity.
3.  **Backdrop Blurs:** Use subtle blurs on navigation overlays to maintain the organic, soft feel while ensuring text legibility over large-scale imagery.

## Shapes

The shape language is **Organic and Refined**. 

Standard UI components like buttons and input fields use a `0.5rem` (8px) radius to maintain a modern look. However, imagery and large structural containers should occasionally utilize **asymmetric rounding**—for example, a top-left and bottom-right corner having a large 3rem radius while the others remain standard—to mimic the silhouette of a leaf or petal. This adds a subtle "artistic" touch that differentiates the brand from standard corporate systems.

## Components

- **Buttons:** Primary buttons are solid Muted Terracotta with White or Cream text. Hover states should transition to Deep Forest Green. Use a generous horizontal padding (32px) to give them an expansive, premium feel.
- **Input Fields:** Use "Ghost" styling—bottom borders only or very light Forest Green outlines (10% opacity). Labels should use the **label-md** typography style, positioned above the field.
- **Cards (The "Editorial" Card):** Eschew standard boxed cards. An "Editorial Card" consists of a large-scale image with a Title (ebGaramond) and a brief description (dmSans) positioned to overlap the bottom edge of the image in a Cream-colored container.
- **Chips:** Small, rounded-pill shapes used for service categories (e.g., "Deep Tissue", "Aromatherapy"). These should use a light Forest Green tint with dark Green text.
- **Lists:** Service menus should be styled with thin Forest Green horizontal dividers and ample vertical padding (24px+), creating a clean, legible list that feels like a spa menu.
- **Booking Progress:** A minimal, horizontal line-based stepper using the Wildflower Yellow for the active state to provide a warm, encouraging path to completion.
