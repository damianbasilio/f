I've designed a bespoke, editorial-grade homepage for **Bones n Combs Dog Grooming**. 

This design intentionally moves away from the typical "local business" template, opting instead for a sophisticated, boutique "Atelier" aesthetic that reflects the premium care Rickey provides.

### Key Design Decisions:
- **Visual Identity:** I established a "Midnight & Gold" palette that communicates luxury and exclusivity, departing from the standard bright colors often seen in pet services.
- **Typographic Hierarchy:** Using *Playfair Display* for large, dramatic headings creates an editorial feel, while *Inter* ensures perfect readability for service details.
- **Unique Layout:** The hero section uses an asymmetric composition to break the standard grid, creating a more memorable first impression.
- **The "Atelier" Concept:** By framing the services as an "Atelier" (a workshop or studio used by an artist), the design elevates dog grooming to a form of artistry, justifying a premium price point.
- **Section Sophistication:** Instead of generic icons, I've used elegant typography and thin borders to define sections like "The Standard of Care," maintaining a clean, high-end look throughout.

The site is production-ready, featuring a responsive layout, a mobile-ready navigation menu, and the specific map slot requirement for your Mount Zion location.

How does this "Editorial Atelier" direction feel for the brand? We can refine the color balance or adjust the service descriptions as needed.

---

---
name: Canine Couture Editorial
colors:
  surface: '#131411'
  surface-dim: '#131411'
  surface-bright: '#393936'
  surface-container-lowest: '#0e0e0c'
  surface-container-low: '#1b1c19'
  surface-container: '#1f201d'
  surface-container-high: '#2a2a27'
  surface-container-highest: '#343532'
  on-surface: '#e4e2dd'
  on-surface-variant: '#c6c6ca'
  inverse-surface: '#e4e2dd'
  inverse-on-surface: '#30312e'
  outline: '#8f9094'
  outline-variant: '#45474a'
  surface-tint: '#c6c6ca'
  primary: '#c6c6ca'
  on-primary: '#2f3034'
  primary-container: '#121417'
  on-primary-container: '#7d7e82'
  inverse-primary: '#5d5e62'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#b4cdb8'
  on-tertiary: '#203527'
  tertiary-container: '#04180c'
  on-tertiary-container: '#6d8472'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e6'
  primary-fixed-dim: '#c6c6ca'
  on-primary-fixed: '#1a1c1f'
  on-primary-fixed-variant: '#45474a'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#d0e9d4'
  tertiary-fixed-dim: '#b4cdb8'
  on-tertiary-fixed: '#0b2013'
  on-tertiary-fixed-variant: '#364c3c'
  background: '#131411'
  on-background: '#e4e2dd'
  surface-variant: '#343532'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
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
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
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
  container-max: 1440px
  section-gap: 120px
---

## Brand & Style

The design system is defined by **Editorial Sophistication**, blending the high-end aesthetic of luxury fashion publications with the warmth of modern pet care. It moves away from the clichéd "playful" dog grooming tropes in favor of a bespoke, boutique experience.

The visual direction utilizes **Minimalism** with a **High-Contrast** edge. It prioritizes intentional whitespace and thin, precise line art to create an atmosphere of calm and expertise. The target audience is the discerning pet owner who views grooming as an essential wellness ritual rather than a chore. The emotional response is one of trust, exclusivity, and meticulous attention to detail.

## Colors

The palette is anchored in **Midnight Fur**, a deep, saturated charcoal that provides a sophisticated backdrop for content. **Golden Bone** serves as the primary metal-toned accent, used for interactive elements and key brand moments to signify premium quality.

**Cotton Poodle** acts as the canvas for text and organic shapes, providing a warm, human contrast to the dark depths of the primary UI. **Forest Green** is utilized sparingly as an organic accent, grounding the brand in a sense of natural health and vitality. 

The system defaults to **Dark Mode** to emphasize the boutique, "after-hours" luxury feel, though high-contrast light sections are used for editorial readability.

## Typography

Typography follows an editorial hierarchy. **Playfair Display** is the voice of the brand—bold, high-contrast, and authoritative. It should be used for all major headlines and "pull-quote" style text.

**Inter** provides a clean, functional counterbalance. Its airy tracking and high x-height ensure that detailed grooming service descriptions and pricing remain highly legible. 

For a bespoke look, display headings should occasionally use italic variants to emphasize specific keywords, mimicking the layout of a high-end fashion magazine.

## Layout & Spacing

This design system employs a **Fluid Grid** with an editorial twist. While a 12-column foundation exists, elements are encouraged to "break the grid" through asymmetrical positioning and overlapping layers.

- **Desktop:** 12 columns with wide 32px gutters to allow the UI to breathe.
- **Asymmetry:** Large imagery should often span 7 columns, while text blocks occupy the remaining 4, leaving a single column of "negative space" to create tension and focus.
- **Vertical Rhythm:** Generous `section-gap` units ensure that the user never feels overwhelmed. Each service or brand story should feel like its own "page" in a magazine.

## Elevation & Depth

In keeping with the editorial theme, depth is achieved through **Tonal Layers** and **Low-contrast Outlines** rather than traditional shadows.

1.  **Surfaces:** Use `surface_muted` for container backgrounds against the `background_deep` to create subtle separation.
2.  **Borders:** Define containers with 1px solid borders in a low-opacity version of Golden Bone (e.g., 20% opacity). This creates a "hairline" effect common in luxury print.
3.  **Glassmorphism:** Use subtle background blurs on navigation bars and floating action buttons to maintain a sense of modern technology within the organic aesthetic.

## Shapes

The shape language is a mix of **Soft** functional elements and **Organic** decorative motifs.

- **Interactive Elements:** Buttons and input fields use a `0.25rem` (Soft) radius to maintain a professional, slightly sharp edge.
- **Imagery:** Photography should remain sharp (0px radius) to mimic the look of printed photos, or utilize large, custom SVG "blob" masks for an organic, artisanal feel.
- **Dividers:** Use thin, horizontal lines that fade out at the edges to separate content sections without "boxing" them in.

## Components

### Buttons
Primary buttons are solid **Golden Bone** with Midnight Fur text, using the `label-sm` typographic style. Secondary buttons use a hairline Golden Bone border with no fill.

### Cards
Cards do not have shadows. They are defined by a `surface_muted` background and a 1px `Golden Bone` (low opacity) border. Padding within cards should be generous (min 32px).

### Input Fields
Inputs are "Ghost" style: a single 1px bottom border in Cotton Poodle. Labels float above in `label-sm` style.

### Chips/Badges
Small, pill-shaped tags used for grooming categories (e.g., "Full Groom," "Bath & Brush"). Use Forest Green background with Cotton Poodle text for a premium natural feel.

### Line Art
Incorporate custom thin-stroke (1px) illustrations of combs, scissors, and botanical elements. These should be treated as secondary background elements, often positioned to bleed off the edge of the screen.
