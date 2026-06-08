I've designed a bespoke, editorial-grade landing page for **2 Bros Coastal Cuisine**. 

Instead of a generic food truck template, I created a **"Coastal Industrial"** visual identity that balances the grit of a mobile kitchen with high-end culinary polish.

### Key Design Decisions:
- **Editorial Layout**: Used an asymmetrical, layered grid with generous whitespace to create a premium, high-fidelity feel that stands out from typical local business sites.
- **The "Freshness Log"**: Replaced standard credibility logos with a "Freshness Log" component that tracks local ingredient arrivals, reinforcing their "dock-to-dish" philosophy.
- **Typographic Hierarchy**: Paired a high-contrast serif (Playfair Display) for headlines with a clean, wide-tracked sans-serif to create an authoritative yet approachable voice.
- **Atmospheric Palette**: Utilized a "Deep Atlantic Navy" and "Sun-bleached Sand" palette with "Burnt Sea-salt Orange" as a purposeful accent for action items.
- **Custom Map Integration**: Included the required `#visit` section with a high-contrast map slot, ready for API integration while maintaining the site's aesthetic.

The result is a production-ready, unique digital presence that captures the soul of the Leland/Wilmington coastal scene.

How does this editorial direction feel for the brand? We can refine the menu layout or adjust the color weighting if you'd like to see more grit or more luxury.

---

---
name: Coastal Industrial
colors:
  surface: '#f8f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e1e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474c'
  inverse-surface: '#2e3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#645e4b'
  on-secondary: '#ffffff'
  secondary-container: '#ece2c9'
  on-secondary-container: '#6b6450'
  tertiary: '#260f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#451f00'
  on-tertiary-container: '#db7618'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#ece2c9'
  secondary-fixed-dim: '#cfc6ae'
  on-secondary-fixed: '#201b0c'
  on-secondary-fixed-variant: '#4c4634'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e3e5'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system establishes a "Coastal Industrial" aesthetic, balancing the high-end culinary expertise of 2 Bros with the raw, mobile nature of a food truck. The brand persona is rooted in local mastery—unpretentious but undeniably premium.

The visual direction utilizes a **Modern-Brutalist** hybrid approach. It employs heavy, structural borders and asymmetrical layout blocks to mirror the industrial grit of a mobile kitchen, while using sophisticated typography and a refined color palette to signal culinary quality. Visual interest is driven by overlapping geometric shapes and subtle topographical textures that evoke the shifting Atlantic coastline. The interface should feel sturdy, expert, and deeply connected to the sea.

## Colors

The palette is anchored by **Deep Atlantic Navy**, providing a foundational weight and professionalism. **Sun-bleached Sand** serves as the primary background tone, offering a warmer, more organic feel than pure white, reminiscent of the shore.

**Burnt Sea-salt Orange** is used exclusively for high-action focal points—CTAs, price points, and active states—providing a sharp, energetic contrast against the cool navy. **Mist Grey** acts as a structural utility color for borders, dividers, and secondary information, grounding the more vibrant coastal tones in an industrial context.

## Typography

The typography strategy relies on the tension between the editorial elegance of **Playfair Display** and the technical precision of **Hanken Grotesk**. 

Headlines use Playfair Display with tight tracking and high weights to emphasize the "Premium" aspect of the cuisine. UI elements and body copy utilize Hanken Grotesk with wide tracking (`0.01em` to `0.1em` for labels) to ensure legibility and a clean, spacious industrial feel. Labels should frequently use uppercase styling to mimic industrial signage and manifests.

## Layout & Spacing

This design system uses a **Fluid Grid** with asymmetrical layout blocks. Elements should not always align to a traditional center; instead, they should "stagger" to create a sense of movement. 

The spacing rhythm is based on an 8px scale. Layouts should utilize "Overlap Blocks" where imagery or text containers partially obscure one another (5-10% overlap), referencing the layered nature of coastal landscapes and industrial shipyard stacking. Desktop layouts use wide 64px margins to allow the "Sun-bleached Sand" background to breathe, while mobile layouts collapse to 16px margins with vertically stacked asymmetrical cards.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Bold Outlines** rather than soft shadows. 

1. **Physicality:** Use 1px or 2px solid borders in Deep Atlantic Navy (#1A2B3C) or Mist Grey (#E5E7E9) to define containers.
2. **Layering:** Elements are stacked using z-index offsets. A "Topographical Overlay" (low-opacity SVG texture) should be applied to the base background layer to provide a tactile, paper-like quality.
3. **Hard Shadows:** If depth is required for buttons, use a "Hard Drop" shadow: a solid, non-blurred offset of 4px in the primary navy color, reinforcing the industrial, printed aesthetic.

## Shapes

The shape language is strictly **Sharp (0px)**. All containers, buttons, and input fields must have hard 90-degree corners. This reinforces the "Industrial" component of the brand, mimicking the sharp edges of shipping containers and kitchen equipment. To contrast these hard edges, "Visual Motifs" such as circular stamps or organic topographical lines may be used as background decorations, but never as functional UI containers.

## Components

### Buttons
Primary buttons are solid Deep Atlantic Navy with white text, or Burnt Sea-salt Orange for high-priority actions (e.g., "Order Now"). They feature a 1px solid border and 0px border radius. Hover states should trigger a "Solid Shift"—a 4px offset shadow appearing instantly.

### Cards
Cards use a white surface background with a 1px Mist Grey border. In a "Coastal Industrial" style, card titles should be Playfair Display, while descriptions are Hanken Grotesk. Cards often feature an asymmetrical image crop.

### Chips & Tags
Used for menu categories (e.g., "Catch of the Day"). These are outlined in Navy with Hanken Grotesk Bold uppercase text. They should look like industrial inventory tags.

### Input Fields
Fields are transparent with a 2px bottom-border only in Deep Atlantic Navy. Labels sit above the field in Hanken Grotesk, 12px, uppercase.

### Lists
Menu lists should utilize a "Leader Line" (dotted or dashed line) connecting the item name to the price, emphasizing a classic, high-end restaurant menu feel within the industrial framework.

### Navigation
The navigation bar should be a floating asymmetrical block, or a fixed sidebar on desktop, utilizing heavy typography and high-contrast active states.
