I have designed a bespoke, editorial-grade homepage for **Behind The Chair**. 

### Design Rationale:
- **Visual Identity:** I established a "Modern Yakima Industrial" theme, using a high-contrast palette of Deep Charcoal and Burnished Gold against a Warm Bone surface. This reflects a balance of raw craftsmanship and premium luxury.
- **Typographic Hierarchy:** I utilized **Playfair Display** for a sophisticated, editorial feel in the headlines, paired with **Inter** for clean, utility-driven navigation and body text.
- **Bespoke Layout:** I intentionally moved away from standard card grids. The services are presented as an asymmetrical list with oversized numerals, and the hero section uses overlapping elements to create depth and a "magazine cover" aesthetic.
- **Visual Motif:** A thin vertical brass rule repeats throughout the site, acting as a subtle structural guide and reinforcing the brand's attention to detail.
- **Production-Ready:** The site includes the specific map slot required, a fully functional contact form UI, and a responsive structure tailored for a premium desktop experience.

The site is now live on your canvas for review. How does this first impression feel for the brand?

---

---
name: Modern Yakima Industrial
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#46474a'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#321200'
  on-tertiary-container: '#c16f3a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68c'
  on-tertiary-fixed: '#321200'
  on-tertiary-fixed-variant: '#753401'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.01em
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
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  utility-mono:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  rule-width: 1px
---

## Brand & Style
The design system embodies a "Modern Yakima Industrial" aesthetic—a sophisticated intersection of raw, structural honesty and refined luxury. It targets a discerning clientele who values craftsmanship, heritage, and modern precision. 

The visual narrative is driven by an **Editorial-Minimalist** approach. It avoids the cluttered, utility-first patterns of standard SaaS, opting instead for a layout that feels like a high-end physical lookbook. The emotional response should be one of "rugged elegance": the weight of dark steel and concrete balanced by the warmth of hand-stitched leather and the glow of polished brass. Key pillars include asymmetric compositions, intentional use of "negative air," and high-contrast material metaphors.

## Colors
The palette is rooted in the "Modern Yakima" environment. 
- **Primary (Deep Charcoal):** Used for typography and structural anchors. It mimics the look of cold-rolled steel.
- **Surface (Warm Parchment):** The foundation for all backgrounds, providing a softer, more organic feel than pure white, reminiscent of high-grade paper or bone.
- **Accent (Burnished Gold):** Reserved for interactive highlights, thin vertical rules, and brand signatures.
- **Highlight (Cognac):** Used sparingly for high-value call-to-actions or specific status indicators, evoking the texture of premium leather upholstery.

## Typography
The typographic hierarchy relies on extreme contrast between the expressive Serif and the utilitarian Sans.
- **Headlines:** Use Playfair Display to convey editorial authority. Display sizes should utilize tight letter spacing and bold weights to command attention.
- **Body & Utility:** Inter provides a clean, neutral counterpoint. Use `label-caps` for all navigational elements and section headers to maintain a technical, "blueprinted" feel.
- **Asymmetry:** Headlines should frequently be offset from the main body column to create a dynamic, magazine-style rhythm.

## Layout & Spacing
This design system uses a **Fluid Editorial Grid** with a 12-column structure on desktop. 

- **Vertical Rules:** A core motif of the system is the 1px Brass vertical rule. These should be used to separate content columns or act as "gutters" in asymmetric layouts, extending the full height of content blocks.
- **Overlap & Depth:** Elements should not always sit side-by-side. Images should occasionally overlap text containers by 2-4 units to break the standard grid "boxiness."
- **Whitespace:** Emphasize large margins (`80px+`) on desktop to evoke a sense of luxury and calm. Content should "breathe" extensively.

## Elevation & Depth
Depth is created through **Tonal Layering** and material shadows rather than traditional elevation.
- **Overlapping Planes:** Use z-index to stack elements (e.g., a leather-colored button partially overlapping an image of concrete texture).
- **Subtle Shadows:** Shadows are rare. When used, they are very diffused, low-opacity Deep Charcoal (#1A1A1B) tints to suggest a heavy object resting on paper.
- **Backdrop Blurs:** On mobile navigation or overlays, use a subtle "frosted" effect over the Warm Parchment background to maintain readability without losing the textural depth of the background.

## Shapes
The shape language is strictly **Sharp (0px)**. This reinforces the industrial, architectural nature of the brand. All buttons, image containers, and input fields must have crisp, 90-degree corners to mimic cut steel and stone. The only exceptions are circular icons or specific biological imagery (portraits).

## Components
- **Buttons:** Primary buttons use the Deep Charcoal background with Burnished Gold text in `label-caps`. They feature a "staggered" hover state where a secondary 1px border appears offset from the main button.
- **Inputs:** Minimalist bottom-border only, using the Burnished Gold rule. Labels are always `label-caps` positioned above the input.
- **Chips/Labels:** Small, sharp-edged boxes with 1px Deep Charcoal borders.
- **Cards:** Avoid traditional cards with shadows. Instead, use "Section Blocks" defined by the vertical Brass rules and subtle shifts in background color (e.g., a slight transition to a cooler grey within a Parchment layout).
- **Navigation:** Top-tier navigation uses high-tracking `label-caps`. Mobile menus should be full-screen overlays in Deep Charcoal with Burnished Gold typography.
