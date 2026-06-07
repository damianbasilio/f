I've designed a bespoke, editorial-grade homepage for **Essential Sweets** that moves far beyond a standard local business template. 

### Design Highlights:
*   **Artisan Elegance Aesthetic**: The design uses a sophisticated palette of **Cocoa Noir** and **Clotted Cream**, punctuated by **Antique Gold** accents to reflect the premium, handcrafted nature of your confections.
*   **Editorial Layout**: Instead of a traditional block-based grid, I utilized an **asymmetric magazine-style layout**. This creates a more dynamic, high-end browsing experience that feels curated rather than assembled.
*   **Typographic Hierarchy**: High-contrast serif headlines provide a "couture" feel, while clean sans-serif body text ensures modern readability and whitespace balance.
*   **Signature Visual Motif**: Thin gold rules and staggered image placements serve as a recurring visual thread, reinforcing the brand's attention to detail.
*   **Conversion-Focused sections**: 
    *   A high-impact **Hero** section focused on "Grand Moments."
    *   **Couture Collections** staggered grid to showcase your range.
    *   A minimalist, integrated **Consultation Form** paired with the required map interface.

The site is fully responsive, semantic, and built with production-ready code. How does this look to you, or would you like to explore a different layout for one of the sections?

---

---
name: Artisan Elegance
colors:
  surface: '#fff8f6'
  surface-dim: '#dfd9d7'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2f0'
  surface-container: '#f4ecea'
  surface-container-high: '#eee7e5'
  surface-container-highest: '#e8e1df'
  on-surface: '#1e1b1a'
  on-surface-variant: '#4f4441'
  inverse-surface: '#33302f'
  inverse-on-surface: '#f6efed'
  outline: '#817470'
  outline-variant: '#d3c3be'
  surface-tint: '#725950'
  primary: '#110402'
  on-primary: '#ffffff'
  primary-container: '#2d1b14'
  on-primary-container: '#9d8177'
  inverse-primary: '#e0c0b4'
  secondary: '#605e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2dd'
  on-secondary-container: '#666460'
  tertiary: '#160102'
  on-tertiary: '#ffffff'
  tertiary-container: '#361516'
  on-tertiary-container: '#ad7a7a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fddbd0'
  primary-fixed-dim: '#e0c0b4'
  on-primary-fixed: '#291710'
  on-primary-fixed-variant: '#584239'
  secondary-fixed: '#e6e2dd'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#484743'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#f2b8b8'
  on-tertiary-fixed: '#321113'
  on-tertiary-fixed-variant: '#653b3c'
  background: '#fff8f6'
  on-background: '#1e1b1a'
  surface-variant: '#e8e1df'
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
    fontWeight: '500'
    lineHeight: 32px
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
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 120px
---

## Brand & Style
The brand personality is high-end, handcrafted, and intimate, positioning "Essential Sweets" as a boutique atelier rather than a commercial bakery. The design system adopts an **Editorial Minimalism** style, utilizing generous whitespace and a sophisticated hierarchy to evoke the feeling of a luxury lifestyle magazine.

The UI should feel bespoke and deliberate, avoiding standard "shop" templates. By blending high-contrast classical elements with modern structural layouts, the system communicates precision and artistry. Every interaction should feel calm and curated, mirroring the experience of walking into a high-end pastry shop.

## Colors
The palette is anchored by **Cocoa Noir** (#2D1B14) for all primary text and structural elements, providing a deep, grounded contrast. **Clotted Cream** (#F9F5F0) serves as the primary canvas, offering a warmer, more sophisticated alternative to pure white.

**Toasted Almond** (#F0E6DB) is used for subtle section shifts and background layering to provide depth without introducing heavy borders. **Antique Gold** (#B5945F) is reserved for "thin gold rules," iconography, and small call-to-action highlights. **Dusty Rose** (#C18C8C) acts as a soft secondary accent for interactive hover states or subtle UI feedback.

## Typography
Typography is the cornerstone of this design system. We use **Playfair Display** for headlines to convey heritage and elegance. For display sizes, negative letter-spacing is used to create a "tight," editorial look.

**Montserrat** provides a clean, modern counterpoint for body copy and UI labels. To maintain the premium feel, body text uses generous line-height and increased letter-spacing. All labels and secondary metadata should be set in uppercase with significant tracking to ensure a sophisticated, organized appearance.

## Layout & Spacing
The layout philosophy follows an **Asymmetric Grid** model. Rather than a standard centered 12-column grid, content is often offset to one side or staggered to create a dynamic, editorial rhythm.

- **Editorial Whitespace:** Use large `section-gap` (120px+) between major content blocks to allow the photography to "breathe."
- **Thin Gold Rules:** Use 0.5px horizontal lines in Antique Gold (#B5945F) to separate sections where whitespace alone is insufficient.
- **Mobile Reflow:** On mobile devices, the asymmetry collapses into a single-column stacked layout, but maintains large vertical padding to preserve the "high-end" feel.

## Elevation & Depth
Depth is created through **Tonal Layering** rather than traditional shadows.
- **Surfaces:** Use shifts between Clotted Cream and Toasted Almond to define different functional areas.
- **Glassmorphism:** Navigation bars and specific overlay modals should use a high-blur (20px+) backdrop with a low-opacity Clotted Cream tint.
- **Shadows:** Avoid heavy dropshadows. If elevation is required for a floating element, use a very soft, highly diffused #2D1B14 shadow at 5% opacity.

## Shapes
The shape language is defined by **Soft Geometricity**. While most UI elements like buttons and containers use a subtle "Soft" radius (4px) to feel modern and precise, the brand's visual motif introduces "Organic Curves" through image masking and background decorative shapes.

Interactive elements (buttons, inputs) remain structured with minimal roundedness, while lifestyle imagery may feature one or two rounded corners (e.g., top-left and bottom-right at 120px radius) to evoke the artisan nature of the cakes.

## Components
- **Buttons:** Primary buttons are solid Cocoa Noir with Clotted Cream text. They are rectangular with a 4px radius. Secondary buttons are "Ghost" style with a 1px Antique Gold border.
- **Thin Gold Rules:** A signature element. Used sparingly as a horizontal separator (0.5px height) or as a vertical "connector" between staggered text and images.
- **Cards:** Product cards should have no border or shadow. They rely on high-quality photography with a soft-focus background. The text (product name) is placed below the image in Playfair Display.
- **Input Fields:** Minimalist design with only a bottom border in Antique Gold. Labels are always in `label-caps`.
- **Photo Treatment:** All photography must be soft-focus, utilizing natural light and high-contrast styling. Images should be treated as part of the architecture, sometimes bleeding off the edge of the screen.
- **Menu/Lists:** Use wide spacing between list items, separated by 0.5px gold lines.
