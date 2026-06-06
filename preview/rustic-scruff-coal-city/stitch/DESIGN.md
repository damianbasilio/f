I've completed the production-ready homepage for **Rustic Scruff**.

### Key Features:
*   **Brand Continuity:** Used real content from their Facebook page, including the 2026 "Best in Grundy County" award and the "Let us girls be your go-to grooming crew" messaging.
*   **Rustic Design System:** Applied a warm, professional palette of forest greens and wood tones, paired with elegant serif typography to match the business name.
*   **Local SEO & Contact:** Integrated the Coal City location, direct phone links, and a dedicated contact form to drive local inquiries.
*   **Production-Ready Structure:** Built with semantic HTML, responsive layout, and the requested interactive map placeholder for their Division Street location.

The design is now live on your canvas. Would you like to adjust the color palette or add more specific service details?

---

---
name: Heritage Hearth & Hound
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#424844'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#173124'
  on-primary: '#ffffff'
  primary-container: '#2d4739'
  on-primary-container: '#98b5a3'
  inverse-primary: '#b0cdbb'
  secondary: '#805533'
  on-secondary: '#ffffff'
  secondary-container: '#fdc39a'
  on-secondary-container: '#794e2e'
  tertiary: '#3b2710'
  on-tertiary: '#ffffff'
  tertiary-container: '#543d24'
  on-tertiary-container: '#c8a888'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead6'
  primary-fixed-dim: '#b0cdbb'
  on-primary-fixed: '#062014'
  on-primary-fixed-variant: '#324c3e'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#f4bb92'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#653d1e'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#e3c19f'
  on-tertiary-fixed: '#291803'
  on-tertiary-fixed-variant: '#5a4229'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
  forest-deep: '#1B2E24'
  bark-warm: '#5D3A1A'
  cream-base: '#FDFBF7'
  sage-accent: '#829B89'
  moss-light: '#E9EDEA'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
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
  caption:
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
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style

This design system is built upon the concept of "Refined Rustic." It balances the organic, tactile warmth of a countryside cottage with the crisp, organized precision of a high-end professional service. The target audience consists of pet owners who view their animals as family and seek a grooming experience that feels more like a spa-day in a mountain lodge than a clinical procedure.

The visual style is **Tactile Modern**. It utilizes soft textures, generous whitespace, and a high-contrast palette to create an interface that feels established, approachable, and meticulously clean. We avoid the "industrial" feel of typical SaaS platforms in favor of a "boutique" aesthetic that emphasizes local community trust and artisanal care.

## Colors

The palette is rooted in a natural, earthy spectrum. 

- **Primary (Forest Green):** Used for main navigation, primary actions, and brand identification. It represents growth, health, and calmness.
- **Secondary (Wood Tone):** Used for accents, secondary buttons, and icons. It provides a warm, grounded contrast to the green.
- **Neutral (Cream):** Replaces pure white across the entire interface to eliminate "screen glare" and enhance the cozy, rustic feel.
- **Tones:** We use varying saturations of "Moss" and "Sage" for backgrounds and subtle separators to maintain a monochromatic harmony within the green spectrum.

## Typography

The typography strategy employs a "High-Low" pairing. 

**Libre Caslon Text** is used for all headlines. Its classic, editorial proportions evoke a sense of tradition and authority, grounding the "Rustic" identity in professional excellence. 

**Plus Jakarta Sans** provides a friendly, modern counterpoint for all functional text. Its slightly rounded terminals complement the overall shape language and ensure high legibility for service menus and booking forms. 

Use wide letter-spacing for **labels** to create an "upmarket" feel in navigation and small headers.

## Layout & Spacing

The design system utilizes a **Fixed Grid** on desktop and a **Fluid Grid** on mobile. 

- **Desktop:** 12-column grid with a 1200px max-width to maintain an intimate, readable feel. Large "Section Gaps" (80px+) are used to separate service tiers, preventing the UI from feeling cluttered.
- **Mobile:** 4-column grid with 16px margins. Content should be stacked vertically, utilizing large, easy-to-tap cards.
- **Rhythm:** All spacing (padding, margins, gaps) must be multiples of the 8px base unit. This ensures a mathematical harmony that the eye perceives as "professionalism."

## Elevation & Depth

To maintain the rustic aesthetic, we avoid heavy, synthetic-looking shadows. Instead, we use **Tonal Layering** and **Soft Ambient Shadows**.

- **Surface Levels:** The base layer is always the Cream neutral. Elevated elements (like cards) use a slightly lighter off-white or a very subtle thin border in `secondary_color_hex` at 10% opacity.
- **Shadows:** When necessary for interactivity (e.g., a hovered button), use a "tinted shadow." This is a low-opacity shadow that inherits the hue of the primary green, making it feel like it's part of the environment rather than a grey overlay.
- **Depth through Texture:** Backgrounds for large sections may use a subtle, low-contrast noise or "paper" texture to reinforce the rustic, physical nature of the brand.

## Shapes

The shape language is consistently **Rounded**. We avoid sharp 90-degree corners to maintain a "friendly" and "safe" emotional response—critical for a pet-related business.

- **Buttons & Chips:** Use a full pill-shape or the `rounded-lg` (1rem) setting to suggest softness.
- **Images:** Photography of pets and shop interiors should always feature rounded corners (`rounded-xl` or 1.5rem) to integrate seamlessly with the UI.
- **Input Fields:** Use 0.5rem (standard rounded) for form fields to balance approachability with functional structure.

## Components

- **Buttons:** 
  - *Primary:* Forest Green background with Cream text. Bold, rounded corners.
  - *Secondary:* Wood Tone outline with Wood Tone text.
- **Cards:** Use cards with a subtle Sage-tinted background (`moss-light`) to group service information. Cards should have no harsh shadows, instead using a 1px border in a slightly darker green tint.
- **Input Fields:** Cream background with a soft 1px border. On focus, the border transitions to the Secondary Wood Tone.
- **Chips/Badges:** Small, pill-shaped elements using `sage-accent` backgrounds with dark green text for service tags (e.g., "Puppy Friendly," "Full Groom").
- **Booking Progress Bar:** Use a thick, horizontal line in the Secondary color with rounded "step" indicators.
- **Service Lists:** Use high-quality icons in the Wood Tone followed by Caslon headlines and Jakarta body text. Separators should be thin and use the `tertiary_color_hex` at low opacity.
