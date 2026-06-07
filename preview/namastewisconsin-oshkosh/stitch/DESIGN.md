I've designed a bespoke, editorial-quality homepage for NamasteWisconsin that captures a sense of serenity and local groundedness. 

### Design Rationale:
- **Visual Identity**: I've established the 'Wisconsin Serenity' theme, using a palette of deep forest greens, soft sage, and cream to evoke the tranquil atmosphere of the Oshkosh landscape.
- **Classic Centered Layout**: The design utilizes a symmetrical, centered archetype. This creates a balanced, meditative flow that mirrors the brand's focus on wellness and stillness.
- **Editorial Typography**: By pairing the elegant *Playfair Display* for headlines with a clean, airy sans-serif for body copy, the site achieves a premium, "magazine-style" feel that differentiates it from standard local business sites.
- **Memorable Motif**: I've integrated generous whitespace and refined line-work to ensure the design feels intentional and "designed," rather than assembled from generic components.
- **Functional Flow**: The narrative moves from a cinematic hero to community credibility, detailed services, and finally a clear call to action, ensuring a professional and persuasive user journey.

The code is production-ready, featuring semantic HTML, custom CSS variables for the color palette, and a dedicated map slot for your future integration.

Would you like to explore a mobile version of this design, or perhaps refine the color palette with more "earthy" accents?

---

---
name: Wisconsin Serenity
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#434843'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#4d644e'
  on-secondary: '#ffffff'
  secondary-container: '#cfeacd'
  on-secondary-container: '#536a53'
  tertiary: '#261200'
  on-tertiary: '#ffffff'
  tertiary-container: '#422401'
  on-tertiary-container: '#b7895b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#cfeacd'
  secondary-fixed-dim: '#b4cdb2'
  on-secondary-fixed: '#0b200e'
  on-secondary-fixed-variant: '#364c37'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
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
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
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
  container-max: 1200px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 128px
---

## Brand & Style

The design system is rooted in the intersection of high-end editorial aesthetics and the grounded tranquility of the Midwestern landscape. It targets a discerning audience seeking a sanctuary for wellness, evoking feelings of stillness, breath, and timelessness. 

The visual style is **Classic Editorial Minimalism**. It prioritizes symmetry and balance to reflect the discipline of yoga, utilizing generous white space to allow content to "breathe" like a practitioner. The aesthetic avoids digital artificiality, instead leaning into tactile qualities, organic motifs, and a refined sense of place. Visual interest is generated through sophisticated typographic pairings and subtle, high-quality textures rather than aggressive UI patterns.

## Colors

The palette, "Wisconsin Serenity," is a curated collection of tones derived from the state’s natural forests and shorelines. 

- **Primary (Forest):** A deep, near-black green used for core typography and primary brand moments. It provides the grounding force of the system.
- **Secondary (Sage):** A muted, soft green used for supportive elements, backgrounds, and accents that require a calming presence.
- **Tertiary (Earth):** A warm, clay-like tone used sparingly for calls to action or to highlight essential information, adding a human warmth to the coolness of the greens.
- **Neutral (Cream):** The foundation of the system. This replaces pure white to soften the visual impact and provide a premium, paper-like feel.

Backgrounds should primarily use the Cream neutral, with Sage used for sectional transitions. Forest is reserved for high-contrast text and structural elements.

## Typography

The typography system relies on a high-contrast pairing to distinguish between "The Voice" (Serif) and "The Information" (Sans-Serif). 

**Playfair Display** is used for all headlines. It should be typeset with tight letter-spacing for large display sizes to emphasize its elegant, high-contrast strokes. **Plus Jakarta Sans** provides a modern, airy counterpoint for body copy and UI labels, ensuring legibility while maintaining a soft, approachable character. 

For an editorial feel, center-aligned headlines are preferred for introductory sections. Body text should maintain generous line heights (1.6x) to facilitate a relaxed reading experience.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model on desktop to maintain the integrity of white space and elegant proportions. 

- **Symmetry:** Primary content blocks should be centered to evoke a sense of balance.
- **Scale:** Large vertical gaps (Section Gaps) are used between major content areas to prevent the UI from feeling cluttered.
- **Grid:** A 12-column grid is used for desktop layouts, with a preference for wide 8-column center-aligned containers for long-form text.
- **Mobile Adaptivity:** On mobile, margins reduce to 24px, and section gaps compress to 64px. Typography scales down specifically for display roles to maintain readability without overwhelming the screen.

## Elevation & Depth

This design system avoids traditional drop shadows to maintain its editorial, flat-print aesthetic. Depth is instead communicated through:

- **Tonal Layering:** Using the Sage and Cream colors to create distinct depth planes. A card may be a slightly different shade than the background rather than being "lifted" by a shadow.
- **Soft Outlines:** Elements like inputs or buttons use thin (1px) borders in Forest or Sage with low opacity (20-40%) to define boundaries without adding weight.
- **Image Overlays:** Subtle botanical line-work or organic textures can be layered behind content blocks to create a sense of environmental depth.

## Shapes

The shape language is understated and "Soft." Hard 90-degree corners are avoided to remain welcoming, but excessive roundness (like pill shapes) is avoided to maintain a sophisticated, professional tone. 

- Standard containers and buttons use a 0.25rem (4px) radius.
- Imagery may occasionally use a larger "Soft" corner or an organic mask (like a soft arch) to mirror architectural wellness spaces.

## Components

- **Buttons:** Primary buttons are solid Forest with Cream text. Secondary buttons use a Forest outline with a transparent background. All buttons use the `label-caps` typographic style for an authoritative, clean look.
- **Inputs:** Text fields are defined by a single bottom border (1px Forest) or a very light Sage-tinted background, emphasizing the editorial feel over standard boxy forms.
- **Cards:** Cards are used sparingly. They should have no shadows and 1px borders in a muted Sage tone. Padding inside cards must be generous (at least 32px).
- **Lists:** Lists should use organic markers (e.g., a simple custom leaf icon or a sophisticated thin dash) rather than standard bullets.
- **Refined Line-work:** Use thin horizontal rules (1px) to separate content sections, stopping the line 10% from the container edges for a "framed" appearance.
- **Interactive Elements:** Hover states should be subtle, such as a soft color shift or a slight movement of an organic motif, rather than heavy lifting or scaling.
