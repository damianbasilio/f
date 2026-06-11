I have designed a bespoke, editorial-grade homepage for **Doggie Depot OKC**. This design moves away from generic local-business templates, opting for a high-end "Industrial Chic" aesthetic that reflects the business's Oklahoma City roots and premium service level.

### Design Highlights:
- **Editorial Layout**: Used an asymmetrical grid with generous whitespace and a bold typographic hierarchy to create a memorable first impression.
- **Unique Visual Motif**: Established a structural theme using **2px solid borders** and rule lines, echoing an architectural, industrial feel.
- **Bespoke Palette**: Created a high-contrast scheme of **Deep Charcoal**, **Sunset Ochre**, and **Raw Canvas** to differentiate the brand from typical "playful" pet businesses.
- **Content-First Approach**: Crafted compelling headlines and copy (e.g., "The Depot: Where OKC Dogs Discover Their Best Selves") to build immediate trust and credibility.
- **Production-Ready**: The screen includes all required sections—from the service grid and "The Depot" story to the dedicated map slot and contact form—with fully responsive CSS and smooth-scroll navigation.

The design is sharp, sophisticated, and built for the bold dogs of OKC. How does this visual direction feel to you?

---

---
name: Industrial Canine Editorial
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#885213'
  on-secondary: '#ffffff'
  secondary-container: '#fdb56e'
  on-secondary-container: '#774403'
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
  secondary-fixed: '#ffdcbf'
  secondary-fixed-dim: '#ffb872'
  on-secondary-fixed: '#2d1600'
  on-secondary-fixed-variant: '#6a3b00'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
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
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  stack-lg: 128px
  stack-md: 64px
---

## Brand & Style

The design system is built upon a philosophy of "Industrial Chic meets Canine Comfort." It targets discerning pet owners in Oklahoma City who value professional-grade reliability served with boutique, editorial flair. The aesthetic deviates from the typical "playful" pet industry tropes, instead opting for a sophisticated, structured environment that mirrors a high-end urban loft or a modern gallery.

The style is a hybrid of **Brutalism** and **Minimalism**. It utilizes heavy structural lines, high-contrast typography, and an asymmetrical grid to create a sense of architectural permanence. The emotional response should be one of absolute trust, quiet luxury, and local pride.

## Colors

The palette is grounded in the "Raw Canvas" base, providing a warm, organic texture that prevents the "Deep Charcoal" from feeling sterile. 

- **Primary (Deep Charcoal):** Used for typography, thick structural borders, and high-contrast section backgrounds.
- **Secondary (Sunset Ochre):** A high-impact accent reserved for call-to-action elements, key highlights, and active states. It represents the Oklahoma horizon.
- **Background (Raw Canvas):** The default canvas for the design system, creating an expensive, tactile feel.
- **Functional Colors:** Use Charcoal for success states (inverting the UI) and a muted clay-red for errors to maintain the earthy, industrial harmony.

## Typography

This design system relies on the tension between a high-contrast, traditional serif and a modern, wide-tracked sans-serif.

- **Headlines:** Use Playfair Display. Large-scale headings should utilize tight letter-spacing to feel impactful and editorial.
- **Body Text:** Use Montserrat with increased tracking (letter-spacing) to evoke a clean, architectural feel and ensure readability against the Raw Canvas background.
- **Labels:** Small labels and "Overlines" should always be uppercase with generous tracking to reinforce the industrial-chic aesthetic.

## Layout & Spacing

The layout philosophy follows an **asymmetrical fluid grid**. While content aligns to a 12-column structure, visual interest is created by intentionally leaving some columns empty to embrace generous whitespace.

- **Vertical Rhythm:** Sections are separated by large "stack" increments (128px) to allow the editorial photography and bold type to breathe.
- **Structural Motifs:** Use 2px "Deep Charcoal" borders to separate major sections or to frame specific content blocks, mimicking the look of architectural blueprints or high-end broadsheets.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to 4 columns. Borders that are vertical on desktop may transform into horizontal dividers to maintain the structural feel.

## Elevation & Depth

This design system rejects shadows in favor of **Tonal Layering** and **Bold Outlines**. Depth is communicated through stack order and color contrast rather than physical simulation.

- **Flat Hierarchy:** Elements do not "float." They are either part of the canvas or framed by 2px solid borders.
- **Contrast as Depth:** Dark sections (Deep Charcoal) are used to indicate a change in context or "elevated" importance, such as a footer or a primary CTA section.
- **Inversion:** Interactive depth is achieved by inverting colors (e.g., a Raw Canvas button becomes Deep Charcoal on hover) rather than lifting the element.

## Shapes

The shape language is strictly **geometric and sharp**. There are zero rounded corners in the design system. This reinforces the "Industrial" side of the brand, reflecting steel beams, brickwork, and the rugged, reliable nature of the boarding facility. 

- **Borders:** Use a consistent 2px weight for all UI borders.
- **Images:** Photography should always be contained in sharp-edged rectangles or squares.

## Components

### Buttons
Primary buttons are rectangular with no radius. They feature a 2px border. The default state is a Deep Charcoal background with Raw Canvas text. On hover, the button should transition to a Sunset Ochre background.

### Cards
Cards use a 2px Deep Charcoal border. They do not have shadows. Imagery within cards should fill the top half, with text content below separated by a horizontal 2px line.

### Input Fields
Inputs are minimalist: a single 2px bottom border that transitions to Sunset Ochre on focus. Labels sit above in the `label-caps` style.

### Lists & Bookings
Use list items separated by horizontal 2px lines. For boarding availability or price lists, use an asymmetrical layout where the price is emphasized in Playfair Display, offset from the service description.

### Sophisticated Transitions
All hover states (links, buttons, cards) should use a deliberate `200ms ease-in-out` transition. For an editorial touch, images may have a slight grayscale-to-color filter transition on hover.
