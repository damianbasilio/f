I've designed a bespoke, editorial-grade homepage for **Paradise Pet Grooming** that breaks away from typical local business templates. 

### Design Rationale:
*   **Visual Identity:** Established an **"Editorial Tropical Luxe"** aesthetic, using a deep jungle green and warm sand palette to evoke a high-end spa rather than a standard kennel.
*   **Typography:** Leveraged high-contrast serif typography for headings to create an authoritative yet elegant brand voice.
*   **Layout:** Employed an **asymmetrical, layered layout** with organic background motifs (leaf shapes and textures) to provide a unique, premium feel that sets them apart from competitors.
*   **Functionality:** Included all requested sections, such as the **"Menu of Services,"** a refined inquiry form, and the required map slot, all while maintaining a smooth, high-fidelity experience.

The site is production-ready, semantic, and fully responsive. How does this first impression feel for the brand?

---

---
name: Editorial Tropical Luxe
colors:
  surface: '#f9faf7'
  surface-dim: '#d9dad7'
  surface-bright: '#f9faf7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f1'
  surface-container: '#edeeeb'
  surface-container-high: '#e7e8e6'
  surface-container-highest: '#e2e3e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#414944'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#f0f1ee'
  outline: '#717974'
  outline-variant: '#c0c8c3'
  surface-tint: '#396756'
  primary: '#00261b'
  on-primary: '#ffffff'
  primary-container: '#0b3d2e'
  on-primary-container: '#79a894'
  inverse-primary: '#a0d1bc'
  secondary: '#675d4e'
  on-secondary: '#ffffff'
  secondary-container: '#efe0cd'
  on-secondary-container: '#6d6354'
  tertiary: '#3a1411'
  on-tertiary: '#ffffff'
  tertiary-container: '#542925'
  on-tertiary-container: '#cc8f88'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcedd7'
  primary-fixed-dim: '#a0d1bc'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#214f3f'
  secondary-fixed: '#efe0cd'
  secondary-fixed-dim: '#d2c4b2'
  on-secondary-fixed: '#221a0f'
  on-secondary-fixed-variant: '#4f4538'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#f9b6af'
  on-tertiary-fixed: '#34100d'
  on-tertiary-fixed-variant: '#693a35'
  background: '#f9faf7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e0'
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
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 24px
---

## Brand & Style
The brand personality is sophisticated, exclusive, and restorative. It moves away from the clinical or cartoonish tropes of pet care into the realm of high-end lifestyle and wellness. The target audience consists of discerning pet owners who view their animals as family and value professional artistry over simple maintenance.

The design style is a blend of **Minimalism** and **Glassmorphism**, leaning heavily into an editorial layout. It uses generous whitespace (the "Sand") to let the "Jungle" elements breathe. Visual interest is driven by asymmetrical compositions, overlapping organic shapes, and high-quality photography that feels like a spread in a luxury travel or fashion magazine. The emotional response should be one of "calm confidence"—reassuring the client that their pet is in a serene, high-end environment.

## Colors
The palette is grounded in the "Deep Jungle Green," used for primary actions and authoritative brand moments. "Warm Sand" serves as the primary canvas, providing a soft, tactile warmth that feels more premium than pure white. 

"Muted Coral" is used sparingly as an accent for call-to-actions or highlights to prevent the palette from becoming too monochromatic. "Pale Celadon" is reserved for secondary backgrounds and subtle section breaks, creating a layered, "foliage-like" depth without introducing harsh lines. Text is rendered in "Rich Charcoal" rather than pure black to maintain a softer, high-end editorial feel.

## Typography
The typography system relies on the high-contrast elegance of Playfair Display for all headlines. These should often be used in an asymmetrical manner, sometimes overlapping image masks.

Body copy uses Inter with generous line height and slightly increased tracking (0.01em to 0.02em) to maintain an "airy" feel. Labels and small buttons use Inter in uppercase with wider tracking (0.05em) to mimic the look of luxury brand tagging. Ensure that for mobile views, the display sizes scale down significantly to maintain readability without overwhelming the viewport.

## Layout & Spacing
The layout follows a **Fluid Grid** but breaks it intentionally to create an editorial flow. Use a 12-column grid for desktop with wide 80px margins to frame the content. Elements should not always snap to the grid; instead, use "offset" compositions where images and text blocks slightly overlap.

Spacing should feel expansive. Avoid crowding elements. Large sections of "Warm Sand" should separate distinct content blocks. On mobile, transition to a 4-column grid with narrower margins, but maintain the vertical whitespace to keep the premium feel.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Glassmorphism** rather than traditional drop shadows. Surfaces should feel like they are floating gently above one another. 

Use backdrop blurs (20px - 40px) on navigation bars and floating appointment widgets to give a sense of translucency. When depth is required for a floating element, use a very soft, diffused "Deep Jungle Green" shadow at 5% opacity to ground the object without it appearing heavy. Layered organic leaf masks should have varying z-index values to create a "canopy" effect.

## Shapes
The shape language is organic and soft. While standard UI components use a 0.5rem (Rounded) base, primary visual elements—such as image containers and large background "islands"—should use asymmetrical, hand-drawn organic paths. Avoid perfect circles; instead, use "squircle" shapes or custom SVG masks that mimic tropical Monstera or Palm leaves. This removes the "boxy" feel of standard web design.

## Components
- **Buttons:** Primary buttons are "Deep Jungle Green" with white or "Warm Sand" text, using a subtle 0.5rem corner radius. Secondary buttons should be ghost-style with a 1px "Deep Jungle Green" border.
- **Chips/Badges:** Use "Pale Celadon" backgrounds with "Deep Jungle Green" text for service categories (e.g., "Full Groom," "Spa Treatment").
- **Inputs:** Minimalist bottom-border only or very light "Pale Celadon" fills. Focus states should transition the border to "Muted Coral."
- **Floating Elements:** Instead of cards, group related content (like a testimonial or service description) on a slightly off-white or "Warm Sand" floating surface with no border and a very soft, ambient shadow.
- **Image Masks:** All featured photography must be masked in organic, leaf-like shapes. Never use sharp 90-degree corners for images.
- **Navigation:** A persistent, glassmorphic top bar that blurs the background content as the user scrolls, maintaining the "Deep Jungle Green" for the logo and primary links.
