I've completed the bespoke homepage for **Tacos 7 Luminarias**, designed with a unique **'Celestial Earth'** editorial aesthetic. 

### Design Rationale:
*   **Visual Identity:** Inspired by the *7 Luminarias* (the seven extinct volcanic craters of Valle de Santiago), I've used a deep Obsidian and Burnt Terracotta palette. The design avoids common restaurant tropes in favor of a high-end, editorial look that positions the brand as an "award-winning" local gem.
*   **Typography:** I utilized high-contrast serif headings (Playfair Display) to create a premium, rhythmic hierarchy that feels intentional and memorable.
*   **Layout:** Instead of a standard grid, the site features asymmetrical sections, overlapping elements, and generous whitespace to create a sense of discovery as the user scrolls.
*   **Narrative Focus:** The site emphasizes the brand's heritage and the "alchemy" of their traditional process, turning a simple meal into a celestial experience.

### Key Features:
*   **Editorial Hero:** A bold, typographic entry point centered around the brand's mystical origin.
*   **Heritage Ledger:** A dedicated section for credibility markers like hand-pressed tortillas and 30 years of tradition.
*   **Signature Collection:** A curated menu showcase using bespoke card treatments.
*   **Orem Outpost:** A full-width location section with the requested functional map slot and contact details.

The code is fully responsive, semantic, and production-ready. You can now explore the design or request specific adjustments to the flow or visual details.

---

---
name: Celestial Earth
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#dfc0b7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a78b83'
  outline-variant: '#58423c'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#601500'
  primary-container: '#ea6944'
  on-primary-container: '#541100'
  inverse-primary: '#a73918'
  secondary: '#ebc246'
  on-secondary: '#3d2f00'
  secondary-container: '#b08c09'
  on-secondary-container: '#352800'
  tertiary: '#cdc5c0'
  on-tertiary: '#34302c'
  tertiary-container: '#968f8b'
  on-tertiary-container: '#2d2926'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#862201'
  secondary-fixed: '#ffe08b'
  secondary-fixed-dim: '#ebc246'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#eae1dc'
  tertiary-fixed-dim: '#cdc5c0'
  on-tertiary-fixed: '#1f1b18'
  on-tertiary-fixed-variant: '#4b4642'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system for this brand is rooted in the "Celestial Earth" narrative—a fusion of ancestral Mexican volcanic landscapes and cosmic precision. The brand personality is premium, editorial, and mystical, moving away from rustic cliches toward a sophisticated culinary authority. It targets a discerning audience that values heritage through a modern lens.

The visual style is a hybrid of **Minimalism** and **High-Contrast Editorial**. It utilizes expansive whitespace (the "void") to let high-quality food photography and geometric motifs breathe. The aesthetic is defined by intentional density—tightly packed type settings contrasting with vast margins—and subtle stippled textures that evoke both volcanic ash and stardust.

## Colors
The palette abandons traditional vibrance for a grounded, atmospheric spectrum. **Deep Obsidian (#1A1A1A)** serves as the primary canvas, providing a high-end "night sky" foundation. **Burnt Terracotta (#D95D39)** is used for primary actions and brand accents, representing the clay and heat of the kitchen. **Golden Maize (#F2C94C)** acts as a celestial highlight for secondary information and iconography. **Sandstone (#F2E9E4)** provides a muted, sophisticated surface for long-form reading and high-contrast typography against the dark background. 

Color application should follow a 70/20/10 ratio: Obsidian dominates the space, Sandstone provides the structure, and Terracotta/Maize provide the "luminaria" focal points.

## Typography
The typographic system is built on a high-contrast pairing that echoes editorial magazines. Headlines use **Playfair Display**, set with tight kerning to emphasize its elegant serifs and dramatic stroke weights. 

For body copy, **DM Sans** provides a clean, wide-tracked foundation that ensures legibility in low-light environments. Secondary labels and technical data (like prices or origins) are set in **Space Mono** to introduce a geometric, "celestial mapping" feel. Text should be set with generous line heights to maintain a sense of luxury and ease.

## Layout & Spacing
The layout follows a **Fixed Grid** system for desktop (12 columns) and a fluid 4-column system for mobile. The hallmark of this design system is the use of "Asymmetric Density"—grouping elements tightly in one quadrant while leaving the rest of the container empty.

Margins are intentionally oversized (64px+) to create a frame-like effect for the content. Spacing between sections should be aggressive (120px+) to signify the transition between different "chapters" of the dining experience. Elements may overlap the grid boundaries slightly to create a sense of depth and motion.

## Elevation & Depth
Depth is achieved through **Tonal Layers** rather than traditional drop shadows. We use a "Deep-to-Light" stacking order:
1.  **Base:** Obsidian (#1A1A1A) for the primary background.
2.  **Elevated Surface:** A 5% opacity Sandstone overlay on Obsidian to create subtle containers.
3.  **Accent Elements:** Terracotta or Maize elements that appear to float over the surface.

Stippled gradients (grainy textures) are used as background masks to soften the transition between depth layers, simulating the hazy glow of a crater or a distant star. Overlapping photography should use hard edges with a 1px Sandstone border to maintain a crisp, editorial look.

## Shapes
The shape language is strictly **Sharp (0)**. Square corners reinforce the architectural and high-fashion editorial feel. The only exception is the "Luminaria Motif": perfect circles used as decorative background elements, image masks, or floating graphic accents. These circles must never be distorted; they represent the seven craters and should always be perfectly geometric.

## Components
-   **Buttons:** Rectangular with 0px radius. Primary buttons are Terracotta with Sandstone text. Ghost buttons use a 1px Sandstone border and wide-tracked Space Mono text.
-   **Cards:** Bespoke layouts where the image is offset from the text container. Images should have a slight "stippled" shadow effect on one edge to feel integrated into the background.
-   **Menu Lists:** High-contrast Sandstone text on Obsidian. Prices are set in Space Mono, aligned to the right, connected to the item name by a thin, dotted Sandstone line.
-   **Input Fields:** Minimalist underlines only (no boxes). Labels appear in Space Mono (caps) above the line. Focus state changes the underline to Golden Maize.
-   **Luminaria Divider:** A specialized component consisting of seven small dots or thin concentric circles used to separate major page sections.
-   **Photography Placeholders:** Use high-contrast, moody imagery with deep shadows. Text should occasionally overlap the edge of images using a "multiply" or "screen" blend mode for an editorial feel.
