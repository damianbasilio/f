I have completed the bespoke homepage for **Hakmods Mobile Phone Repair**. 

### Design Strategy
- **Visual Identity**: I've crafted a "Technical Editorial" aesthetic using a dark charcoal and navy palette accented by "Electric Ember" (#ff4500) to signify technical energy and precision. 
- **Typography**: A high-contrast serif (Bodoni Moda) provides a premium, authoritative voice for headlines, while monospaced labels ground the design in technical expertise.
- **Layout**: I avoided standard component grids in favor of an asymmetrical, editorial flow. The services section uses overlapping layouts to feel like a high-end technical journal rather than a generic repair shop.
- **Memorable Motif**: Fine-line borders and "Micro-Scale Precision" technical metrics create a cohesive visual language that repeats throughout the page.

### Technical Features
- **Semantic HTML**: Built with a clean, SEO-friendly structure.
- **Responsive**: Fully optimized for desktop with fluid layouts that transition seamlessly to smaller breakpoints.
- **Map Integration**: The specific `data-map-slot` container is placed in the "Laboratory" section for future map implementation.
- **Interactive**: Included smooth scroll behavior and pre-styled form validation states for the technical request form.

The site is now ready to serve as a premium first impression for the Cedar Rapids community.

---

---
name: Technical Editorial
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#e7bdb2'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#ad887e'
  outline-variant: '#5d4038'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#601400'
  primary-container: '#ff5625'
  on-primary-container: '#541100'
  inverse-primary: '#b12d00'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#8691a7'
  on-tertiary-container: '#1f2a3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The visual identity of the design system balances the intricate precision of micro-engineering with the sophisticated aesthetic of high-end editorial publishing. The brand personality is that of an expert craftsman: meticulous, authoritative, and unapologetically premium. 

The design style is a hybrid of **Minimalism** and **Technical Editorial**. It utilizes vast amounts of whitespace to frame content like a gallery, while employing fine-lined "technical" accents that evoke the feeling of blueprints or circuit diagrams. It moves away from the generic repair shop aesthetic, opting instead for a look that mirrors luxury watchmaking or high-end automotive design. Visuals should prioritize macro photography of internal components—treating silicon and copper as precious materials.

## Colors

The palette is rooted in **Deep Circuit**, a rich, dark navy-charcoal that serves as the canvas for the entire experience. This provides a high-contrast foundation that feels more premium and intentional than pure black.

- **Primary (Electric Ember):** A saturated, high-energy orange-red. Use this sparingly for critical calls to action, diagnostic status indicators, and precision focal points. It represents the "spark" of repair and technical vitality.
- **Secondary (Solder Silver):** A cool, metallic grey used for borders, secondary text, and iconography. It mimics the appearance of brushed aluminum and solder joints.
- **Neutral / Background:** Layered shades of Deep Circuit create depth without relying on traditional shadows, maintaining a clean, technical atmosphere.

## Typography

Typography is used to create a stark contrast between "The Art" and "The Science."

**Bodoni Moda** is utilized for headlines to provide a high-fashion, editorial feel. Its extreme contrast between thick and thin strokes reflects the delicate nature of high-end electronics.

**Geist** provides the technical backbone. As a typeface designed with precision in mind, it handles technical specs, pricing, and body copy with the clarity of a technical manual. Use the `label-mono` style for all metadata, serial numbers, and small UI labels to reinforce the monospaced, engineered aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (12 columns) and a fluid 4-column model on mobile. A strict 4px baseline rhythm ensures all elements align with mathematical precision.

Margins are generous to maintain a premium, editorial feel. Elements should often be separated by significant vertical "air" (section-gap) to allow the high-quality macro photography to breathe. Use hairline dividers (1px) to separate technical data points, mimicking the layout of a spec sheet or a premium watch catalog.

## Elevation & Depth

This design system avoids traditional, heavy drop shadows in favor of **Tonal Layering** and **Hairline Outlines**.

- **Surfaces:** Use subtle shifts in the neutral palette (e.g., moving from `#0F172A` to `#1E293B`) to indicate hierarchy.
- **Glassmorphism:** Use very subtle backdrop blurs (8px to 12px) on navigation bars and overlays to maintain a sense of modern tech-stacking.
- **Borders:** Depth is primarily defined by 1px "Solder Silver" borders with 20-30% opacity. This creates a "blueprint" effect where the UI feels like it's been assembled from components.

## Shapes

The shape language is **Soft (0.25rem)**. While the brand is technical, purely sharp corners can feel aggressive. A minimal radius on buttons, cards, and input fields provides a sophisticated "machined" look—reminiscent of the subtle curves on a smartphone chassis. 

Interactive elements like "Status Chips" or "Price Tags" may occasionally use a pill-shape to contrast against the predominantly rectangular grid, but these should be used sparingly to mark specific technical states.

## Components

### Buttons
Primary buttons use the **Electric Ember** background with white text. They should be rectangular with a subtle 4px radius. Secondary buttons should be "Ghost" style with a 1px Solder Silver border and Geist-based uppercase labels.

### Cards
Cards are defined by their borders rather than shadows. Use a 1px border in a slightly lighter shade of the background. Card headers should use Bodoni Moda for titles, while the content inside uses Geist for a technical breakdown of services.

### Inputs & Forms
Form fields should feel like diagnostic inputs. Use a dark background with a 1px border that illuminates in Electric Ember when focused. Labels should always use the `label-mono` style.

### Technical Spec Lists
When listing repair details (e.g., "OLED Replacement," "TrueTone Calibration"), use a dotted leader line to connect the service name to the price, similar to a high-end menu or a technical blueprint.

### Photography Containers
Images should always be high-resolution macro shots. Use a "Scanline" overlay or a subtle 10% opacity grid pattern over images to reinforce the technical theme without obscuring the craftsmanship shown in the photo.
