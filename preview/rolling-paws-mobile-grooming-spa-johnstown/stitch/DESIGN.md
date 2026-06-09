I've designed a bespoke, editorial-grade homepage for **Rolling Paws Mobile Grooming Spa**. 

### Design Rationale:
*   **Visual Identity:** I moved away from the standard "local business" template in favor of an **intentional density** layout. This uses overlapping elements and asymmetrical rounded corners (the "Curved Motion" motif) to create a high-end, boutique feel that emphasizes artisanal care.
*   **Color Story:** The palette combines **Midnight Blue** for professionalism, **Petal Peach** for a warm, welcoming vibe, and **Groomer Mint** to signal cleanliness and freshness.
*   **Typography:** I utilized **Playfair Display** (a high-contrast Serif) for headlines to establish a premium brand voice, paired with **Inter** for clear, modern utility.
*   **Editorial Layout:** Instead of a generic grid, the service sections and about area use staggered, overlapping containers to guide the eye and feel "designed," not just assembled.
*   **Technical Details:** The page includes a semantic structure, a custom map slot for your future integration, and a fully responsive layout that maintains its premium feel on mobile.

The site is ready for you to review on the canvas!

---

---
name: Rolling Paws
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474c'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#755849'
  on-secondary: '#ffffff'
  secondary-container: '#ffd8c4'
  on-secondary-container: '#795c4d'
  tertiary: '#001915'
  on-tertiary: '#ffffff'
  tertiary-container: '#082f2a'
  on-tertiary-container: '#739891'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#e4bfac'
  on-secondary-fixed: '#2b170b'
  on-secondary-fixed-variant: '#5b4132'
  tertiary-fixed: '#c4eae2'
  tertiary-fixed-dim: '#a8cec6'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#2a4d47'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
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
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  utility-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  overlap-sm: -12px
  overlap-md: -24px
---

## Brand & Style
The design system for this mobile grooming spa balances premium artisanal care with high-energy dependability. The brand personality is rooted in the "intentional density" of high-end editorial layouts—compact, rich in information, yet visually sophisticated.

The style is a hybrid of **Modern Editorial** and **Organic Minimalism**. It utilizes overlapping elements and asymmetrical containers to create a sense of motion, mimicking the mobility of the service. The visual signature is the "Curved Motion" motif: thick, organic borders and corners that vary in radius to evoke the silhouettes of pets and the aerodynamic profile of a premium grooming van.

The emotional response should be one of "Relaxed Luxury"—the client feels their pet is in expert hands, receiving a boutique experience that is both efficient and deeply caring.

## Colors
The palette is designed to oscillate between deep authority and soft, hygienic warmth.

- **Midnight Blue (#1A2B3C):** Used for primary typography, heavy borders, and hero backgrounds to establish premium sophistication and trust.
- **Petal Peach (#FFD8C4):** Used for primary CTA surfaces and highlight areas. It provides a warm, skin-tone adjacent softness that feels approachable and artisanal.
- **Groomer Mint (#B2D8D0):** Reserved for utility elements, success states, and secondary accents. It evokes a clinical yet "spa-like" cleanliness.
- **Neutral:** A slightly warm off-white is used for page backgrounds to prevent the high-contrast Midnight Blue from feeling too harsh.

## Typography
The typography strategy employs a "High-Contrast Pairing" to reinforce the editorial feel. 

**Playfair Display** serves as the authoritative voice. It should be used for large headings and pull-quotes. To emphasize the premium nature, use tight letter-spacing on larger sizes.

**Plus Jakarta Sans** provides the modern, utilitarian counterbalance. Its wide apertures and friendly geometry make it highly legible for service menus, booking flows, and body copy. Labels should frequently use uppercase with increased tracking to create a rhythmic, structured appearance against the flowing serif headlines.

## Layout & Spacing
This design system utilizes a **Fluid-Fixed Hybrid Grid**. While the underlying structure is a 12-column grid, the layout philosophy prioritizes "Intentional Density."

Elements should not always sit side-by-side with generous gutters; instead, use **negative spacing (overlaps)** to create depth. For example, an image of a groomed pet might overlap the edge of a text container by 24px. 

- **Desktop:** 12-column grid with 64px side margins. 
- **Mobile:** 4-column grid with 20px side margins.
- **Rhythm:** Use a 4px base unit. Component padding should be tight (e.g., 12px or 16px) to maintain the "dense editorial" look.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Physical Overlaps** rather than traditional shadows.

- **The Motif Border:** Key containers use a thick 2px or 3px border in Midnight Blue.
- **Asymmetrical Depth:** Instead of centered shadows, use "Hard Shadows" (0% blur) offset by 4px in Petal Peach or Groomer Mint to give elements a physical, paper-like lift.
- **Layering:** Background elements use the Neutral or Mint shades, while "floating" foreground cards use the white or Peach shades to pull forward.

## Shapes
The "Curved Motion" theme is executed through **Asymmetrical Radii**. 

Standard components (buttons, input fields) use a consistent 8px (0.5rem) radius. However, "Feature Containers" (cards, hero images, large sections) must use mismatched corner radii—for example, `top-left: 80px`, `top-right: 16px`, `bottom-right: 80px`, `bottom-left: 16px`. This creates an organic, sweeping shape that mimics the brand motif. 

All borders on primary elements should be a minimum of 2px thick to maintain the bold, editorial presence.

## Components
- **Buttons:** Primary buttons are Petal Peach with Midnight Blue text and a 2px Midnight Blue bottom-border. On hover, the button should shift 2px down to "press" onto the border.
- **Service Cards:** Use the asymmetrical "Curved Motion" shape. The image should occupy the large-radius corner, with text packed densely into the remaining space.
- **Chips:** Small, pill-shaped tags using Groomer Mint backgrounds with dark text, used for grooming styles (e.g., "Teddy Bear Cut", "De-Shedding").
- **Inputs:** Minimalist with a 2px bottom-border only. When focused, the border transitions from Midnight Blue to Petal Peach.
- **Booking Progress:** A thick, horizontal line in Groomer Mint that "grows" across the top of the viewport, maintaining the clean, spa-like feel.
- **The "Spa Badge":** A circular floating element that overlaps sections, containing "100% Mobile" or "Artisanal Care" in tightly packed typography.
