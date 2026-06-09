I've designed a bespoke, editorial-grade homepage for Northland Boarding that moves away from generic local business templates in favor of a "Rugged Elegance" aesthetic.

### Design Rationale:
- **Visual Identity:** I established a premium "Northwoods" palette of Forest Green, Frosted Slate, and Warm Earth tones. This is paired with high-contrast serif typography for an editorial, high-end feel.
- **Asymmetrical Layout:** The design uses intentional whitespace and overlapping elements (specifically in the Canine and Feline sections) to create a unique flow that feels designed rather than assembled.
- **Visual Motifs:** I used thin rule lines and a moody, immersive hero section to reflect the Duluth landscape and the business's premium positioning.
- **Functionality:** The site includes the requested #visit section with the dedicated map slot, a story-driven "Northland Standard" section for credibility, and a refined contact form.

The code is fully semantic, responsive, and ready for production use. You can see the full layout on the canvas.

---

---
name: Northland Boarding
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#424843'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737973'
  outline-variant: '#c2c8c2'
  surface-tint: '#4d6355'
  primary: '#051a0f'
  on-primary: '#ffffff'
  primary-container: '#1a2f23'
  on-primary-container: '#809787'
  inverse-primary: '#b4ccbb'
  secondary: '#715a3e'
  on-secondary: '#ffffff'
  secondary-container: '#fdddb9'
  on-secondary-container: '#786044'
  tertiary: '#041827'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a2d3c'
  on-tertiary-container: '#8194a7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d6'
  primary-fixed-dim: '#b4ccbb'
  on-primary-fixed: '#0a2014'
  on-primary-fixed-variant: '#364c3e'
  secondary-fixed: '#fdddb9'
  secondary-fixed-dim: '#e0c29f'
  on-secondary-fixed: '#281803'
  on-secondary-fixed-variant: '#584329'
  tertiary-fixed: '#d1e5f9'
  tertiary-fixed-dim: '#b5c9dd'
  on-tertiary-fixed: '#081d2c'
  on-tertiary-fixed-variant: '#364959'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
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
  stack-lg: 80px
  stack-md: 48px
  stack-sm: 24px
---

## Brand & Style

This design system embodies the "Northwoods Premium" aesthetic—a sophisticated intersection of rugged natural textures and high-end editorial clarity. Designed for a luxury pet boarding facility in Duluth, the brand personality is quiet, authoritative, and deeply rooted in the landscape. 

The visual style leans into **Minimalism** with an **Editorial** edge. It utilizes generous whitespace to convey a sense of calm and safety, while incorporating organic textures through high-contrast, slightly grainy photography. The UI should evoke the feeling of a premium outdoor lifestyle magazine: structured yet breathable, professional yet warm.

**Key Visual Pillars:**
- **Asymmetry:** Layouts should feel intentional and curated, breaking standard grid patterns to mimic the unpredictability of nature.
- **Topographic Detail:** Subtle vector line work representing the Duluth terrain should be used as background overlays (opacity 5-10%) to add depth.
- **Photography:** Imagery should feature moody, natural lighting with high contrast and a fine-film grain. Subjects (pets) should be captured in "heroic" or serene poses within the Northland environment.

## Colors

The palette is derived directly from the Minnesota Northwoods—coniferous forests, granite bluffs, and the muted tones of Lake Superior.

- **Deep Forest Green (#1A2F23):** Used for primary headings, navigation backgrounds, and high-impact UI elements. It represents stability and the density of the woods.
- **Warm Earth (#8C7355):** An accent color used for call-to-action buttons, secondary highlights, and active states. It provides a tactile, grounded warmth.
- **Frosted Slate (#4A5D6E):** Used for supporting text, borders, and secondary icons. It echoes the cool, atmospheric tones of the lake.
- **Crisp Cream (#F9F7F2):** The universal canvas. This replaces pure white to soften the visual experience and create a "premium paper" feel.

## Typography

The typography system relies on a high-contrast pairing that balances traditional elegance with modern utility.

- **Headlines (Playfair Display):** Should be set with tight letter-spacing. Use for all major titles and storytelling elements. The high-contrast serifs convey a sense of bespoke service and heritage.
- **UI & Body (Montserrat):** Set with wider-than-average tracking (letter-spacing) to enhance readability and give a modern, "airy" feel. Montserrat's geometric clarity balances the ornate nature of the serif.
- **Micro-copy:** Use `label-caps` for eyebrows, breadcrumbs, and button labels to create a sophisticated, structural hierarchy.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** on desktop (12 columns) but transitions to a fluid, spacious model on smaller screens. 

- **Generous Margins:** Desktop layouts utilize a 64px outer margin to frame content, reinforcing the editorial "magazine" aesthetic.
- **The "Breath" Rule:** Vertical rhythm is intentionally loose. Sections should be separated by `stack-lg` (80px) to prevent the UI from feeling cluttered or "discount."
- **Asymmetric Offsets:** Content blocks (like image and text pairings) should often be offset by 1-2 columns to create a dynamic, modern visual flow rather than a perfectly symmetrical split.

## Elevation & Depth

To maintain the "Rugged Elegance" theme, depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Tiers:** Use subtle shifts between `Cream (#F9F7F2)` and a very light tint of `Frosted Slate` to define separate content areas.
- **Ghost Borders:** Cards and containers should use a 1px solid border in a low-opacity `Frosted Slate` (#4A5D6E at 20%) to provide structure without adding weight.
- **Textural Depth:** Depth is primarily communicated through layering typography over background textures (topographic lines) or high-contrast imagery, creating a physical sense of "stacking."

## Shapes

The shape language is primarily **Soft (0.25rem)**. While the brand is premium, it must remain approachable and pet-friendly. 

- **Primary Radius:** Use a subtle 4px radius for buttons and input fields to take the "edge" off while maintaining a professional, structured appearance.
- **Large Components:** Images and cards can occasionally use a `rounded-lg` (8px) if they contain softer lifestyle content, but sharp 0px corners are preferred for hero image containers to maintain the editorial look.

## Components

- **Buttons:** Primary buttons are solid `Deep Forest Green` with `Cream` text in `label-caps`. They should have a 1px border of the same color to ensure crispness. Secondary buttons are "Ghost" style: `Deep Forest Green` borders with no fill.
- **Cards:** Use a 1px `Frosted Slate` (low opacity) border. Avoid shadows. The background should be the same as the page (`Cream`) or slightly off-set.
- **Input Fields:** Minimalist design with only a bottom border (2px) in `Frosted Slate`, transitioning to `Warm Earth` on focus. This mimics a high-end stationary or registration form.
- **Chips/Badges:** Use `Warm Earth` backgrounds with `Cream` text for status indicators (e.g., "Available," "Luxury Suite").
- **Booking Progress:** Use a custom-styled thin line with small circular nodes, utilizing `Frosted Slate` for inactive and `Deep Forest Green` for active steps.
- **Image Treatments:** All hero images should feature a 1-2% grain overlay and a slight vignette to pull the focus toward the center, enhancing the "moody Northwoods" atmosphere.
