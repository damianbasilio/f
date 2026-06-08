I have designed a bespoke, editorial-grade homepage for **Sun-kissed Spray Tanning & Bootyful Bar**. 

### Design Rationale
- **Visual Identity:** I developed the "Golden Hour Glamour" identity, featuring a high-contrast palette of deep bronze, sun-drenched gold, and soft sand. This creates a sophisticated, premium atmosphere that distinguishes the brand from typical local service sites.
- **Editorial Layout:** I moved away from standard card grids in favor of asymmetric, overlapping layouts and generous whitespace. This reinforces the boutique nature of the business.
- **Typography:** The use of high-contrast serifs for headlines creates an immediate sense of luxury and "award-winning" craft.
- **Interactive Elements:** The page includes smooth scrolling and refined UI for the contact form, ensuring a seamless user experience that matches the brand's premium positioning.

The site is production-ready with semantic HTML, integrated CSS custom properties for the unique palette, and responsive behavior for all devices.

How does this bespoke direction feel for the brand? We can refine the service descriptions or adjust the specific "Golden Hour" tones if needed.

---

---
name: Golden Hour Glamour
colors:
  surface: '#fbfbe2'
  surface-dim: '#dbdcc3'
  surface-bright: '#fbfbe2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f5dc'
  surface-container: '#efefd7'
  surface-container-high: '#eaead1'
  surface-container-highest: '#e4e4cc'
  on-surface: '#1b1d0e'
  on-surface-variant: '#4f453f'
  inverse-surface: '#303221'
  inverse-on-surface: '#f2f2d9'
  outline: '#81756e'
  outline-variant: '#d2c4bc'
  surface-tint: '#705a4c'
  primary: '#26170c'
  on-primary: '#ffffff'
  primary-container: '#3d2b1f'
  on-primary-container: '#ac9181'
  inverse-primary: '#dec1af'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#3f0001'
  on-tertiary: '#ffffff'
  tertiary-container: '#660004'
  on-tertiary-container: '#f7695c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbddca'
  primary-fixed-dim: '#dec1af'
  on-primary-fixed: '#28180d'
  on-primary-fixed-variant: '#574335'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4aa'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#8b1a16'
  background: '#fbfbe2'
  on-background: '#1b1d0e'
  surface-variant: '#e4e4cc'
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
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
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
    letterSpacing: 0.05em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  section-gap: 120px
  container-margin: 64px
  gutter: 24px
---

## Brand & Style
The design system embodies the essence of "Golden Hour Glamour"—a high-end, editorial aesthetic tailored for a premium beauty boutique. It evokes a sense of warmth, luxury, and confidence. The target audience seeks more than a service; they seek an aspirational lifestyle experience.

The visual style is a blend of **Editorial Minimalism** and **Tactile Sophistication**. It avoids the cluttered, grid-locked look of traditional SaaS or e-commerce sites in favor of asymmetric layouts, generous whitespace, and overlapping elements that feel like a high-fashion magazine. A subtle organic grain texture is applied to background surfaces to break the digital flatness and provide a premium, paper-like quality.

## Colors
The palette is rooted in the hues of a late-summer sunset. 
- **Deep Bronze (#3D2B1F):** Used for primary typography and deep grounding elements. It provides better legibility and a more "expensive" feel than pure black.
- **Sun-drenched Gold (#D4AF37):** Reserved for thin accents, borders, and interactive highlights. It represents the "Sun-kissed" glow.
- **Soft Sand (#F5F5DC):** The primary canvas color. It is warmer and more inviting than white, reducing eye strain and reinforcing the boutique's beachy yet sophisticated vibe.
- **Bootyful Coral (#FF6F61):** An energetic accent color used sparingly for calls to action or "Bootyful Bar" specific highlights to inject personality and playfulness.

## Typography
The typography relies on a high-contrast pairing to establish editorial authority. 
- **Playfair Display** is used for all headlines. Its sharp serifs and variable stroke weights evoke classic luxury and fashion mastheads.
- **Montserrat** provides a clean, modern counterpoint for body copy and labels. To enhance the "premium" feel, Montserrat should always be set with increased letter-spacing (tracking), especially in uppercase labels, to create a sense of breathability and elegance.

## Layout & Spacing
This design system rejects rigid, symmetrical grids. It utilizes a **Fluid Asymmetric Model**. 
- **Margins:** Large 64px outer margins on desktop ensure content never feels cramped.
- **Asymmetry:** Key elements (images and text blocks) should be intentionally offset. Use "pull quotes" or images that break the container edges.
- **Dividers:** Use 1px thin lines in Gold (#D4AF37) to separate sections, rather than heavy background color shifts.
- **Mobile:** On mobile, spacing should compress to 24px margins, but the vertical "Section-Gap" remains generous to maintain the feeling of luxury and space.

## Elevation & Depth
Depth is achieved through **Overlapping Tonal Layers** rather than traditional drop shadows.
- **Stacking:** Elements should physically overlap (e.g., a text block partially covering an image). 
- **Subtle Depth:** Where separation is needed, use a extremely soft, tinted shadow (Bronze at 5% opacity) or a thin Gold border.
- **Texture:** Apply a CSS `noise` filter or a high-quality grain SVG overlay on the Soft Sand background to create a tactile, physical presence that mimics high-end stationery.

## Shapes
The shape language is "Soft" yet structured. 
- **Buttons and Inputs:** Use a small 0.25rem (4px) radius. This maintains a sharp, professional editorial look while removing the "stinging" sharpness of 90-degree corners.
- **Imagery:** Large editorial images can remain sharp-edged (0px) to mimic magazine spreads, or use organic, "blob" masks sparingly for lifestyle photography to reinforce the natural "Sun-kissed" theme.

## Components
- **Buttons:** Primary buttons use a Bronze (#3D2B1F) background with Sand (#F5F5DC) text in Montserrat Bold Caps. Secondary buttons are "Ghost" style: no background, 1px Gold border, and high tracking.
- **Cards:** Do not use traditional boxed cards with shadows. Instead, represent "items" as floating text layers over images, or as simple vertical lists separated by thin gold lines.
- **Inputs:** Minimalist bottom-border only (1px Bronze). Labels are always in `label-caps` Montserrat style, positioned above the line.
- **Imagery:** All imagery should have a warm, high-exposure "Golden Hour" filter. Use CSS `mix-blend-mode` (like multiply or overlay) when placing text over images to ensure a seamless, integrated editorial look.
- **Dividers:** Use a 1px Gold horizontal line that does not span the full width of the container, creating an intentional, "unfinished" elegant break.
