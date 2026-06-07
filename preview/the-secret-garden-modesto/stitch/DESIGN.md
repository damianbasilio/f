I've designed a bespoke, editorial-grade homepage for **The Secret Garden** that prioritizes a unique visual identity and premium atmosphere.

### Design Highlights:
*   **Asymmetrical Hero Layout:** I broke away from standard centered templates to create a layered, "A Sanctuary Hidden in Plain Sight" entrance that feels like an editorial magazine cover.
*   **Intentional Density & Texture:** The "Philosophy" section uses deep forest greens and vertical typography to create a sense of depth and artisanal craft.
*   **The Curated Wild Gallery:** Instead of a standard grid, I used a staggered, artistic layout for the collections to emphasize the rare and untamed nature of your offerings.
*   **Refined Palette:** A sophisticated mix of Deep Forest green, soft Petal cream, and Gilded Leaf gold accents creates a memorable, high-end first impression.

Does this direction capture the "hidden sanctuary" feel you were looking for, or should we adjust the visual density?

---

---
name: The Secret Garden
colors:
  surface: '#fdf9f6'
  surface-dim: '#ddd9d6'
  surface-bright: '#fdf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f0'
  surface-container: '#f1edea'
  surface-container-high: '#ebe7e4'
  surface-container-highest: '#e5e2df'
  on-surface: '#1c1b1a'
  on-surface-variant: '#434843'
  inverse-surface: '#31302f'
  inverse-on-surface: '#f4f0ed'
  outline: '#737873'
  outline-variant: '#c3c8c1'
  surface-tint: '#506355'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1f14'
  on-primary-container: '#748979'
  inverse-primary: '#b6ccba'
  secondary: '#3a674f'
  on-secondary: '#ffffff'
  secondary-container: '#bceecf'
  on-secondary-container: '#406d55'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#261900'
  on-tertiary-container: '#a17f3b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e8d6'
  primary-fixed-dim: '#b6ccba'
  on-primary-fixed: '#0d1f14'
  on-primary-fixed-variant: '#384b3e'
  secondary-fixed: '#bceecf'
  secondary-fixed-dim: '#a1d1b4'
  on-secondary-fixed: '#002112'
  on-secondary-fixed-variant: '#224f39'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fdf9f6'
  on-background: '#1c1b1a'
  surface-variant: '#e5e2df'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
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
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is rooted in the "Secret Garden" narrative—a sanctuary that feels both ancient and curated. The aesthetic blends **Editorial Minimalism** with **Organic Sophistication**, evoking the atmosphere of a high-end botanical journal or a private greenhouse estate. 

The emotional response should be one of quiet discovery and artisanal luxury. We achieve this through:
- **Intentional Negative Space:** Large, breathable margins that allow content to feel like a featured exhibition.
- **Botanical Accents:** Occasional use of fine-line botanical illustrations (0.5pt to 1pt stroke weight) that intersect with layout boundaries.
- **Atmospheric Depth:** Subtle transitions and layered transparencies that suggest a misty, layered forest environment.

## Colors

The palette is derived from deep ecological tones and antique metallic finishes. 

- **Deep Forest (#0B1D12):** Used for primary typography and high-contrast backgrounds to ground the design.
- **Veridian (#2D5A43):** Used for secondary elements, active states, and botanical accents.
- **Petal (#F9F5F2):** The primary canvas color. It is a warm, breathable neutral that avoids the sterility of pure white.
- **Gilded Leaf (#C5A059):** Reserved for highlights, CTAs, and delicate borders to provide a sense of "high-end" craftsmanship.
- **Muted Blush (#E8DED1):** Used for subtle container fills and non-interactive dividers.

## Typography

Typography is the primary vehicle for the brand’s "Editorial" feel.

1.  **Headlines (Playfair Display):** High-contrast serifs create an immediate sense of elegance and authority. Display sizes should utilize a tighter letter-spacing for a modern, bespoke look.
2.  **Body & UI (DM Sans):** Chosen for its clean, geometric, yet low-contrast nature. It provides a contemporary counterpoint to the traditional serif. 
3.  **Wide Tracking:** All labels and navigation items using **DM Sans** must implement wide letter-spacing (`0.15em`) to maintain a sense of luxury and legibility.
4.  **Optical Sizing:** Ensure that for display text, the "italic" variants of Playfair Display are used sparingly for emphasis, mimicking traditional typesetting.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is centered within a 1280px container on desktop, but margins are intentionally oversized to reinforce the "Artisanal" feeling of a printed book.

- **The 8px Rhythm:** All spacing between elements (padding, margins) must be increments of 8px.
- **Asymmetric Balance:** While the grid is a standard 12-column system, designers are encouraged to use "white-space blocks" (empty columns) to create a more dynamic, editorial flow.
- **Vertical Rhythm:** Large vertical gaps (80px - 120px) should separate major sections to allow the eye to rest.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layers** and **Soft Ambient Occlusion**.

- **Depth via Color:** Use the "Muted Blush" and "Petal" tones to create stacked surfaces. A card may sit on a "Petal" background with a slightly darker "Muted Blush" fill to indicate depth.
- **Soft Shadows:** When elevation is required (e.g., for floating menus), use a "Forest-Tinted" shadow: `0px 10px 30px rgba(11, 29, 18, 0.05)`. The shadow should be barely perceptible, appearing more like a soft glow of darkness.
- **Glassmorphism:** For top navigation bars, use a backdrop blur (12px) with a 90% opacity "Petal" tint to maintain context of the "garden" background as the user scrolls.

## Shapes

The shape language is **Soft (0.25rem)**. While the theme is organic, the UI remains structured and professional.

- **Soft Corners:** Standard buttons and input fields use a subtle 4px radius.
- **Large Containers:** Cards or featured sections can use `rounded-lg` (8px) or `rounded-xl` (12px) to feel more inviting.
- **The "Circle" Exception:** Profile images and specific icon backdrops may use full 100% rounding to echo the circular motifs found in botanical geometry.

## Components

- **Buttons:** Primary buttons feature a "Deep Forest" background with "Petal" text. Secondary buttons use a "Gilded Leaf" 1px border with wide-tracked uppercase labels. Hover states involve a soft shift in background opacity or a slight lift via an ambient shadow.
- **Cards:** Cards should be borderless with a "Muted Blush" fill or have a very thin (0.5pt) "Gilded Leaf" border. Padding within cards must be generous (min 32px).
- **Inputs:** Text fields are "ghost-style"—a single 1px bottom border in "Veridian" with a "Petal" background. The label floats above in uppercase DM Sans.
- **Chips/Tags:** Small, pill-shaped elements with "Veridian" text on a "Muted Blush" background. Used for botanical categories or status indicators.
- **Dividers:** Use botanical line art (e.g., a single leaf or a thin gold vine) to separate major sections instead of standard horizontal lines.
- **Navigation:** Top-level links are wide-tracked "DM Sans". The active state is indicated by a small "Gilded Leaf" dot centered beneath the text.
