I've designed a bespoke, premium homepage for **Patron Barbershop Salon** that moves away from generic local-business templates in favor of a **"Modern Heritage"** editorial aesthetic.

### Design Rationale:
*   **Visual Identity**: Established a high-contrast palette of **Deep Obsidian** and **Vintage Brass** on a warm **Antique Parchment** background. This combination evokes the luxury of a private club while remaining contemporary.
*   **Editorial Layout**: Eschewed standard symmetrical grids for an **asymmetrical, magazine-style composition**. I've used a recurring motif of vertical brass rule lines to create a sense of structure and craftsmanship.
*   **Typography**: Paired a high-contrast serif (**Playfair Display**) for headlines to convey authority and heritage, with a clean, spaced-out sans-serif for body copy to ensure modern readability.
*   **Bespoke Sections**: 
    *   The **Services** section is designed as a refined "Menu of Craft," utilizing large typographic indices to guide the user.
    *   The **Hero** section uses overlapping elements to create depth and a memorable first impression.
    *   The **Visit** section includes the requested technical map slot, framed by elegant location details.
*   **Production-Ready**: The delivery includes semantic HTML5, utility-first CSS for responsiveness, and vanilla JavaScript for a smooth-scroll experience and mobile navigation.

The site is fully responsive and uses your real contact information throughout. How does this look for the brand's first dedicated digital home?

---

---
name: Modern Heritage
colors:
  surface: '#fafaf5'
  surface-dim: '#dadad5'
  surface-bright: '#fafaf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4ef'
  surface-container: '#eeeee9'
  surface-container-high: '#e8e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1a1c19'
  on-surface-variant: '#444748'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ec'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#7b5800'
  on-secondary: '#ffffff'
  secondary-container: '#fdc34d'
  on-secondary-container: '#715000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d1c2f'
  on-tertiary-container: '#76859b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdea6'
  secondary-fixed-dim: '#f7bd48'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#fafaf5'
  on-background: '#1a1c19'
  surface-variant: '#e3e3de'
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
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.03em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  quote:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 30px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  rule-thin: 1px
---

## Brand & Style
The brand personality is authoritative yet welcoming, embodying the spirit of a modern gentleman's sanctuary. The "Patron" is the focal point—a person of taste who appreciates the ritual of grooming as much as the result. 

This design system utilizes a **Modern Editorial** style. It rejects the cluttered, "macho" tropes of traditional barbershops in favor of a sophisticated, fashion-forward aesthetic. The visual language is defined by intentional density, generous use of "Antique Parchment" to provide a tactile, paper-like feel, and sharp, high-contrast typography that mirrors the precision of a master barber’s blade. Elements are arranged with a sense of architectural balance, using thin rule lines to frame content like a luxury broadside.

## Colors
The palette is rooted in "Antique Parchment," which serves as the primary canvas to avoid the clinical sterility of pure white. 

- **Deep Obsidian (#0A0A0A):** Used for primary typography and high-impact structural elements. It provides the "weight" and authority of the brand.
- **Vintage Brass (#B8860B):** Used sparingly for interactive accents, thin divider lines, and "quality marks." It represents the heritage and the tools of the craft.
- **Cool Slate (#334155):** A secondary functional color for UI elements like icons, borders, or secondary text, providing a soft bridge between the black and parchment.
- **Antique Parchment (#F5F5F0):** The foundational surface color. It evokes a sense of longevity, history, and premium quality.

## Typography
The typography strategy relies on the tension between the high-contrast **Playfair Display** and the wide-tracked **Montserrat**.

- **Headlines:** Set in Playfair Display. Large displays should use tighter letter-spacing to emphasize the dramatic contrast of the strokes.
- **Body:** Montserrat is used for all functional text. It must be set with increased letter-spacing (`0.02em` to `0.03em`) to achieve a modern, airy feel that balances the weight of the serif headlines.
- **Micro-copy:** Use "label-caps" for navigation, section headers, and small buttons to create an organized, technical feel reminiscent of high-end watchmaking or fragrance packaging.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. On desktop, content is contained within a maximum width but uses asymmetrical placement to create an editorial rhythm.

- **Asymmetry:** Offset images and text blocks so they do not always align perfectly with the vertical center. Use "Deep Obsidian" or "Vintage Brass" rule lines (1px) to visually "tether" floating elements to the grid.
- **Intentional Density:** Group related information tightly, then surround that group with vast white space (parchment). This creates a sense of "preciousness" for the content.
- **Rule Lines:** Use horizontal rule lines to separate sections rather than background color shifts. Vertical rule lines can be used to separate sidebar navigation or secondary details in a multi-column layout.

## Elevation & Depth
This design system avoids heavy shadows and 3D effects. Depth is communicated through **Tonal Layering** and **Line Work**.

- **Layers:** Most elements sit directly on the "Antique Parchment" surface. For modal or floating elements, use a solid "Deep Obsidian" or "Cool Slate" background with no shadow, creating a "cut-out" effect.
- **Borders:** Instead of shadows, use 1px "Vintage Brass" borders to define high-priority containers.
- **Texture:** Apply a subtle, low-opacity noise grain to the "Antique Parchment" background to hint at heavy paper stock. Avoid literal leather or wood textures; instead, use photography of these materials to provide the organic contrast.

## Shapes
The shape language is strictly **Sharp (0px)**. 

Rectangular forms convey the precision, cleanliness, and architectural stability of the brand. Every button, image container, and input field must have 90-degree corners. This sharp geometry creates a high-fashion, premium feel that contrasts beautifully with the organic curves of the serif typography.

## Components
- **Buttons:** Primary buttons are "Deep Obsidian" rectangles with "Antique Parchment" text in "label-caps." Secondary buttons are 1px "Vintage Brass" outlines. Hover states should involve a solid color fill rather than a shadow.
- **Chips/Labels:** Small, rectangular tags with "Cool Slate" borders. Text is always uppercase with wide tracking.
- **Input Fields:** Minimalist design—only a bottom border (1px) in "Cool Slate." Labels sit above the line in "label-caps."
- **Cards:** No shadows or background fills. Cards are defined by a 1px "Cool Slate" or "Vintage Brass" border on all sides or a simple rule line separating the image from the content below.
- **Dividers:** 1px horizontal lines in "Vintage Brass." Occasionally use a small "quality mark" (e.g., a small brass diamond or dot) in the center of the divider for long-form editorial content.
- **The "Service List":** Use a classic editorial table layout—Service Name (Serif), Price (Sans-serif), and a dotted or solid brass leader line connecting them.
