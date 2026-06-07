I've built the complete homepage for **Santa Fe Bakery**, specifically tailored to their "Casa de las conchas" identity using the real content from their Facebook page.

### Key Design Decisions:
*   **Artisanal Aesthetic**: I used a warm, appetizing palette (terra cotta, honey, and cream) to reflect the bakery's traditional roots and artisanal quality.
*   **Direct-to-Action**: The phone number is prominent in the header and hero section, ensuring customers can easily reach the business for orders or questions.
*   **Local Credibility**: Included a dedicated section highlighting their 4.4-star rating and large Facebook following to build trust with new visitors.
*   **Asymmetric Layout**: The hero and gallery sections use a non-standard grid to avoid a generic "template" look and feel more handcrafted.
*   **Interactive Features**: The page includes a mobile-responsive navigation, smooth-scrolling anchors, and a functional-looking contact form UI.

The design is production-ready and fully responsive. You can now preview the **#visit** section with its dedicated map slot and the **Services** section featuring their signature offerings.

What would you like to refine next? We could add a dynamic image gallery or expand on the "Casa de las conchas" story.

---

---
name: Santa Fe Panadería
colors:
  surface: '#fbf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fbf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ec'
  surface-container: '#f0eee6'
  surface-container-high: '#eae8e0'
  surface-container-highest: '#e4e3db'
  on-surface: '#1b1c17'
  on-surface-variant: '#57423a'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1e9'
  outline: '#8a7268'
  outline-variant: '#dec0b5'
  surface-tint: '#a14009'
  primary: '#9f3e07'
  on-primary: '#ffffff'
  primary-container: '#c05621'
  on-primary-container: '#fffeff'
  inverse-primary: '#ffb596'
  secondary: '#7d5700'
  on-secondary: '#ffffff'
  secondary-container: '#ffc250'
  on-secondary-container: '#725000'
  tertiary: '#7e5339'
  on-tertiary: '#ffffff'
  tertiary-container: '#9a6b50'
  on-tertiary-container: '#fffeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7d2d00'
  secondary-fixed: '#ffdeaa'
  secondary-fixed-dim: '#f8bc4b'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#f4ba9b'
  on-tertiary-fixed: '#311302'
  on-tertiary-fixed-variant: '#653d25'
  background: '#fbf9f1'
  on-background: '#1b1c17'
  surface-variant: '#e4e3db'
typography:
  display:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Literata
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Literata
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
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
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
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is built on the concept of "Handcrafted Heritage." It avoids the sterile, clinical feel of modern corporate bakeries in favor of a warm, artisanal, and neighborhood-centric aesthetic. The UI should evoke the sensory experience of a Mexican *panadería*—the smell of cinnamon, the warmth of an oven, and the tactile texture of sugar-dusted conchas.

The style is a blend of **Warm Minimalism** and **Tactile Design**. It uses heavy whitespace to let high-resolution photography of pastries breathe, while employing asymmetric layouts to suggest the organic, non-uniform nature of handmade baked goods. The emotional response should be one of comfort, appetite, and local trust.

## Colors
The palette is rooted in the "Casa de las conchas" identity, pulling directly from the oven-fired colors of traditional Mexican baking.

*   **Primary (Terra Cotta):** Used for key actions and branding to reflect traditional pottery and toasted crusts.
*   **Secondary (Amber/Cinnamon):** Used for accents, highlights, and secondary buttons, evoking warmth and sweetness.
*   **Tertiary (Dark Chocolate):** Used for primary typography and deep contrast elements to ensure legibility and a grounded feel.
*   **Neutral (Cream):** The base background color (not pure white), mimicking flour and light dough, providing a softer, more inviting canvas than a standard digital white.
*   **Success/Accent:** A muted sage green may be used sparingly for "In Stock" or "Freshly Baked" indicators to contrast the warm tones.

## Typography
Typography balances the "Artisanal" (Literata) with the "Professional" (Plus Jakarta Sans).

*   **Headlines:** Literata provides a bookish, traditional, and high-end feel. It should be used for all storytelling elements and product names.
*   **Body & UI:** Plus Jakarta Sans offers a soft, rounded, and highly legible counterpoint. It keeps the interface feeling modern and accessible.
*   **Scale:** Large display type should use tighter letter spacing to feel more like a printed editorial piece. Labels use slight tracking (letter spacing) to improve readability in navigation menus and tags.

## Layout & Spacing
The layout follows an **asymmetric fluid grid** to avoid a "templated" look.

*   **Asymmetry:** Images of pastries should frequently "break" the grid or be offset from text blocks to create a sense of movement and hand-placement.
*   **Rhythm:** Use a baseline of 8px. Large sections should be separated by `stack-lg` (48px) to maintain a premium, uncluttered feel.
*   **Grid:** On desktop, use a 12-column grid. Components like product cards should vary in width (e.g., some spanning 4 columns, some 6) to create visual interest in the "panadería" gallery.
*   **Responsive:** On mobile, transition to a single-column stack with generous side margins (`margin-mobile`) to ensure the photography remains the focus.

## Elevation & Depth
This design system utilizes **Ambient Shadows** and **Tonal Layering** to create a soft, tactile feel.

*   **Shadows:** Avoid harsh, black shadows. Use soft, diffused shadows tinted with the primary terra cotta color (e.g., `rgba(192, 86, 33, 0.08)`) to make elements like cards feel like they are resting on a wooden countertop.
*   **Depth Levels:** 
    *   *Level 0 (Base):* The Cream neutral background.
    *   *Level 1 (Cards):* Elevated with a very soft, wide blur shadow.
    *   *Level 2 (Interactive):* Hover states on buttons or cards increase shadow spread and slightly scale the element (1.02x) to mimic "picking up" a pastry.
*   **Overlays:** Use semi-transparent cream overlays for text on images to maintain legibility while preserving the warmth of the photography.

## Shapes
Shapes are intentionally soft to mirror the organic forms of bread and pastries.

*   **Corners:** A `rounded-lg` (1rem/16px) setting is the standard for cards and image containers.
*   **Buttons:** Should use `rounded-xl` or full pill shapes to feel friendly and "squishy."
*   **Decorative Elements:** Use circular frames or "scalloped" edges (reminiscent of concha patterns) for secondary decorative elements or badges.

## Components
*   **Buttons:** Primary buttons are Solid Terra Cotta with White or Cream text. Secondary buttons are outlined in Cinnamon. Use generous internal padding to create a "puffy" appearance.
*   **Product Cards:** Cards have no visible borders; depth is defined by soft ambient shadows. The product name (Literata) should be prominent, with the price in a subtle Plus Jakarta Sans label.
*   **Chips/Tags:** Use these for flavor profiles (e.g., "Dulce de Leche," "Spicy," "Vegan"). These should have a light amber background and dark chocolate text.
*   **Input Fields:** Use a subtle cream-tinted fill with a bottom-only border or a very light 1px stroke in terra cotta on focus.
*   **Lists:** Use custom concha-patterned bullets for unordered lists to reinforce the "Casa de las conchas" identity.
*   **Image Gallery:** Implement an "asymmetric masonry" layout for pastry photos, allowing for different aspect ratios to reflect the variety of the bakery's daily offerings.
