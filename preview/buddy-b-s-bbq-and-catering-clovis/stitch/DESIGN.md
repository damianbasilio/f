I've designed a bespoke, premium homepage for **Buddy B’s BBQ and Catering** that completely avoids the local-business template look. 

### Design Rationale:
*   **Visual Identity (Modern Smokehouse):** I moved away from rustic clichés, opting for a sophisticated "Modern Smokehouse" palette—deep charcoal ('Smoked'), bone white ('Ash'), and a vibrant burnt orange ('Glaze'). This creates a high-contrast, editorial feel that positions the brand as a master of its craft.
*   **The Hero Experience:** Instead of a standard banner, I used "intentional density" with a massive, high-contrast serif headline that overlaps moody, high-fidelity imagery. This establishes a "digital flagship" presence immediately.
*   **Editorial Flow:** I balanced the dense hero with a high-whitespace "The Wood, The Smoke, The Patience" section. This typographic focus treats their process like a high-end article, elevating the perception of quality.
*   **The Signature Layout:** I bypassed the common menu grid for a more elegant "feature" layout, showcasing a hero dish with beautifully wrapped text and minimalist pricing.

This design is crafted to make a memorable first impression that feels unique to Buddy B's, treating BBQ as a curated art form.

How does this editorial direction feel for the brand? We can refine the copy or adjust the visual weight of any section next.

---

---
name: Modern Smokehouse Editorial
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
  on-surface-variant: '#5a4138'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#8f7066'
  outline-variant: '#e3bfb2'
  surface-tint: '#a83900'
  primary: '#a43700'
  on-primary: '#ffffff'
  primary-container: '#cd4700'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59a'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5b5c59'
  on-tertiary: '#ffffff'
  tertiary-container: '#747571'
  on-tertiary-container: '#fefdf7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#802a00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c7c7c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#464744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Work Sans
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
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
---

## Brand & Style

The visual identity of the design system is defined by a "Modern Smokehouse" aesthetic—a sophisticated departure from traditional BBQ tropes. It balances the raw intensity of the pit with the precision of high-end culinary craft. The brand personality is confident, authentic, and unapologetically premium, targeting an audience that views barbecue as a culinary art form rather than a casual meal.

The design style blends **Minimalism** with **High-Contrast Editorial** layouts. It utilizes expansive whitespace to create a sense of "air," contrasted against dense, typographically heavy blocks in hero areas to evoke the intensity of the smoking process. This creates a rhythm of tension and release, mirroring the long, patient craft of slow-cooking followed by the vibrant energy of a served feast.

## Colors

The palette is built on three core pillars that represent the elements of the craft:

- **Glaze (Primary):** A vibrant, spicy burnt orange used sparingly for calls to action, highlights, and critical brand moments. It represents the heat and the finish.
- **Smoked (Secondary):** A deep, architectural charcoal used for high-contrast typography, heavy structural elements, and grounding the UI.
- **Ash (Tertiary/Background):** A warm, bone-white that serves as the canvas. It provides a more organic and premium feel than a clinical pure white.
- **Mist (Functional Neutral):** Subtle grey-silver tones derived from the charcoal, used for borders, secondary text, and topographic motifs.

Color application should follow a 60-30-10 rule to maintain the editorial feel, with Ash dominating the layout, Smoked providing the structure, and Glaze acting as the focal point.

## Typography

The typographic pairing is central to the "Modern Smokehouse" identity. 

**Newsreader** acts as the primary serif, bringing an authoritative and literary quality to the headings. Its high-contrast strokes and sturdy serifs evoke a modernized slab-serif feel. Use heavy weights for Display roles to create impact.

**Work Sans** provides the utilitarian counterpoint. It is used for all body copy, labels, and navigation. Its clean, neutral geometry ensures that even dense information remains readable and professional.

**Stylistic Notes:**
- All labels and small metadata should use `label-sm` with uppercase styling and increased letter spacing to enhance the "bespoke" feel.
- Pull-quotes should utilize `headline-md` in italics to break up long-form content.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop to maintain strict editorial control over line lengths and image placement. 

- **Grid System:** A 12-column grid with generous 32px gutters. 
- **The Hero Section:** Designed with intentional density. Elements may overlap or use tight margins to create a "packed" feel, representing the intensity of the smokehouse environment.
- **The Process Section:** Transitions to an expansive layout with double-sized vertical margins (e.g., 128px or 160px) to signify the slow, patient nature of the craft.

**Responsive Behavior:**
- **Desktop:** 12 columns, 64px side margins.
- **Tablet:** 8 columns, 32px side margins.
- **Mobile:** 4 columns, 24px side margins. Typography scales down specifically for `headline-lg` to ensure no awkward wrapping.

## Elevation & Depth

To maintain the high-end editorial feel, the design system avoids traditional drop shadows in favor of **Tonal Layering** and **Structural Outlines**.

- **Z-Axis Hierarchy:** Depth is created by stacking surfaces. A 'Smoked' (Charcoal) card might sit directly on an 'Ash' (Bone) background with no shadow, relying entirely on color contrast for separation.
- **Borders:** Use thin (1px) solid borders in the neutral 'Mist' color for secondary cards and inputs. This reinforces a technical, architectural quality.
- **Background Textures:** Subtle topographic line art or smoke plume vectors should be used at 5-10% opacity. These are not decorative "noise" but structural dividers that guide the eye between sections.

## Shapes

The shape language is disciplined and professional. A **Soft (0.25rem)** corner radius is applied to buttons, cards, and input fields. This provides just enough approachable warmth to prevent the UI from feeling cold or aggressive, without losing the precision of the grid.

- **Images:** Should remain strictly square or rectangular (0px radius) to emphasize the editorial, photography-first nature of the brand.
- **UI Elements:** Maintain the consistent `rounded-sm` (4px) theme across all interactive components.

## Components

### Buttons
Primary buttons use the 'Glaze' burnt orange with white text, featuring a subtle hover state that shifts to a slightly deeper shade. Secondary buttons are 'Smoked' charcoal with white text. All buttons use the `label-sm` typographic style for a compact, professional look.

### Cards
Cards are primarily 'Ash' on white or white on 'Ash'. They utilize the 1px neutral border instead of shadows. Content within cards should follow a strict vertical rhythm with high internal padding (e.g., 32px or 40px).

### Inputs
Text fields are rectangular with a 1px 'Mist' border. On focus, the border transitions to 'Smoked' charcoal. Labels are always positioned above the input in `label-sm` uppercase.

### Menu/Listings
Catering menus should be treated like a high-end restaurant menu: 'Newsreader' for item titles and 'Work Sans' for descriptions. Use dotted leaders for price alignments to reinforce the classic editorial feel.

### Topographic Dividers
Instead of simple lines, use the smoke plume line art to separate major content sections. These should be full-width and act as a transition between the "Dense" and "Airy" layout modes.
