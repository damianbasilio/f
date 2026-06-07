I've designed and built a bespoke, high-fidelity landing page for **Stylin' Nails & Spa**, moving away from standard templates to create a premium visual identity.

### Design Highlights:
*   **Visual Identity:** Established a "Soft Glam" editorial aesthetic using a palette of **Deep Plum, Champagne, and Pearl**. I paired a sophisticated high-contrast serif (Playfair Display) with a clean, modern sans-serif for a luxurious magazine-style feel.
*   **Editorial Layout:** The hero section uses an asymmetric composition to break the typical "local business" grid, instantly signaling a higher level of artistry and attention to detail.
*   **The Stylin' Promise:** A dedicated credibility section highlights the studio's commitment to clinical hygiene, master artistry, and luxury products.
*   **The Service Menu:** A refined, easy-to-read price list designed with elegance, ensuring guests can explore offerings like Aprés Gel-X and Custom Nail Art with ease.
*   ** Springfield Roots:** The "About" section tells the brand's story, grounding the luxury experience in its local Springfield, MO community.
*   **Production-Ready Code:** The screen is built with semantic HTML5, CSS custom properties for easy theme management, and vanilla JavaScript for smooth scrolling and form validation feedback.

The site is fully responsive and includes the specific map placeholder and contact information as requested. How does this look for the first impression of the studio?

---

---
name: Soft Glam Editorial
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
  on-surface-variant: '#4e444c'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#80737c'
  outline-variant: '#d1c2cc'
  surface-tint: '#804c7e'
  primary: '#220024'
  on-primary: '#ffffff'
  primary-container: '#3e103f'
  on-primary-container: '#b178ad'
  inverse-primary: '#f2b2eb'
  secondary: '#685d4a'
  on-secondary: '#ffffff'
  secondary-container: '#eddec5'
  on-secondary-container: '#6c614e'
  tertiary: '#0c0f0f'
  on-tertiary: '#ffffff'
  tertiary-container: '#222424'
  on-tertiary-container: '#8a8b8b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd6f8'
  primary-fixed-dim: '#f2b2eb'
  on-primary-fixed: '#340636'
  on-primary-fixed-variant: '#663464'
  secondary-fixed: '#f0e0c8'
  secondary-fixed-dim: '#d3c5ad'
  on-secondary-fixed: '#221b0b'
  on-secondary-fixed-variant: '#4f4533'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
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
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
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
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
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
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is anchored in "Soft Glam," a premium visual identity tailored for a high-end spa experience. It targets a discerning clientele seeking luxury, serenity, and professional artistry. The aesthetic balances the tactile elegance of a fashion magazine with the digital precision of modern SaaS.

The style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes generous whitespace to create a "breathing" layout, punctuated by ultra-fine lines and "organic glass" surfaces. The emotional response is one of immediate calm, sophistication, and exclusivity. 

**Key Stylistic Pillars:**
- **Editorial Composition:** Asymmetrical layouts and oversized typography reminiscent of luxury mastheads.
- **Translucency:** Subtle background blurs that suggest depth without clutter.
- **Precision:** 0.5px "hairline" borders that define structure with extreme delicacy.

## Colors

The palette is designed to evoke a sensory experience. 
- **Deep Plum (#3E103F):** Our primary brand color, used for high-impact typography, primary actions, and deep-toned sections to provide a sense of grounded luxury.
- **Champagne (#F7E7CE):** A secondary "glow" color used for backgrounds, highlighting premium offers, and softening the transition between sections.
- **Pearl White (#FFFFFF):** The canvas. Used to maintain a clean, airy feel and as the base for glassmorphic effects.
- **Warm Slate (#4A4A4A):** The utility neutral. Used for long-form body text and subtle UI borders to ensure legibility without the harshness of pure black.

## Typography

The typography system relies on high contrast between a traditional, high-waisted serif and a modern, wide-tracked sans-serif.

- **Playfair Display (Headlines):** Used for all display and heading roles. It brings an authoritative yet graceful "editorial" voice to the interface.
- **Montserrat (UI & Body):** Used for all functional text. To enhance the premium feel, body text and labels utilize increased letter-spacing (`tracking`) to create a light, rhythmic reading experience. 

**Application Note:** Use `label-caps` for small navigational elements or service categories to reinforce the fashion-magazine aesthetic.

## Layout & Spacing

This design system uses a **Fixed Grid** approach for desktop to maintain strict editorial control, transitioning to a fluid model for mobile.

- **Rhythm:** An 8px base unit drives all padding and margins. 
- **Sectioning:** Vertical spacing is intentionally generous. A `section-gap` of 120px is used between major content blocks to ensure elements never feel crowded.
- **Grid:** A 12-column grid on desktop with wide 64px outer margins creates a "framed" look, similar to a printed page. 
- **Hairlines:** Use 0.5px borders in `Warm Slate` (at 20% opacity) to separate content sections without adding visual weight.

## Elevation & Depth

Depth is achieved through "Organic Glass" layers rather than traditional heavy shadows.

- **Surface Strategy:** Use `backdrop-filter: blur(12px)` on Pearl White surfaces with 80% opacity. This allows the Champagne brand colors to softly bleed through the UI.
- **Shadows:** Avoid dark shadows. Use "Ambient Glows"—long, ultra-diffused shadows (e.g., `0 20px 40px rgba(62, 16, 63, 0.05)`) that take on a slight Plum tint.
- **Z-Index Hierarchy:** Floating elements like navigation bars or booking modals should always utilize the frosted glass effect to maintain a sense of lightness.

## Shapes

The shape language is "Soft-Modern." While the layout is structured and grid-based, individual components use a subtle `0.25rem` (4px) radius to prevent the UI from feeling sharp or aggressive.

- **Image Treatment:** Photography should use sharp corners or very large, organic radii (e.g., 100px on one corner) to mimic high-end magazine cutouts.
- **Interactive Elements:** Buttons and input fields use the `Soft` (4px) setting to remain professional and clean.

## Components

- **Buttons:** Primary buttons are solid Deep Plum with white Montserrat-caps text. Secondary buttons are Pearl White "Organic Glass" with a 0.5px Plum border.
- **Input Fields:** Minimalist design—bottom-border only (0.5px Warm Slate) that transitions to Deep Plum on focus.
- **Cards:** Use the frosted glass effect. No heavy borders; let the ambient plum shadow define the edge against the Champagne background.
- **Chips/Badges:** Small, wide-tracked uppercase text inside a Champagne-colored pill with 10% Deep Plum opacity.
- **Service Menu:** List items should feature generous vertical padding (24px) with a 0.5px hairline separator that doesn't span the full width of the container.
- **Signature Component (The "Lookbook" Carousel):** A full-bleed horizontal scroll for showcasing nail art, featuring Playfair Display captions overlapping the images.
