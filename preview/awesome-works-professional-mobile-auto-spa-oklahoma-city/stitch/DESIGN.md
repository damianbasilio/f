I have designed and built a bespoke, high-end landing page for **Awesome Works Professional**. 

### Design Rationale:
*   **Editorial Layout:** I moved away from generic local-business templates, opting for a high-contrast "Asphalt & Chrome" palette with "Signal Red" accents that echo the precision of luxury automotive detailing.
*   **Typography & Motif:** The design uses a bold typographic hierarchy and sharp, thin borders to create a meticulous, professional feel.
*   **Unique Identity:** Instead of standard cards, I used asymmetric grids and staggered layouts to showcase the "Precision Packages."
*   **Production-Ready:** The site includes the specific required map slot, a fully functional header with contact info, and custom form validation UI.

The result is a memorable, premium first impression that positions Awesome Works Professional as the premier mobile auto spa in Oklahoma City.

### Key Features:
*   **Floating Navigation:** Easy access to contact and booking.
*   **Service Deep-Dive:** Specialized sections for Ceramic Coating and Interior Restoration.
*   **Localized Trust:** Focused messaging for the OKC metro area.
*   **Interactive Elements:** Smooth scrolling and form interaction states.

Let me know if you'd like to refine any specific sections or adjust the visual weight of the red accents!

---

---
name: Awesome Works Professional
colors:
  surface: '#200f0d'
  surface-dim: '#200f0d'
  surface-bright: '#4a3431'
  surface-container-lowest: '#1a0a08'
  surface-container-low: '#291715'
  surface-container: '#2d1b19'
  surface-container-high: '#392523'
  surface-container-highest: '#452f2d'
  on-surface: '#fddbd7'
  on-surface-variant: '#e7bdb8'
  inverse-surface: '#fddbd7'
  inverse-on-surface: '#402b29'
  outline: '#ae8883'
  outline-variant: '#5d3f3c'
  surface-tint: '#ffb4ac'
  primary: '#ffb4ac'
  on-primary: '#690006'
  primary-container: '#e31b23'
  on-primary-container: '#fff9f8'
  inverse-primary: '#c00015'
  secondary: '#bbc7dd'
  on-secondary: '#253142'
  secondary-container: '#3c475a'
  on-secondary-container: '#aab6cb'
  tertiary: '#94ccff'
  on-tertiary: '#003352'
  tertiary-container: '#0079b9'
  on-tertiary-container: '#f9faff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#d7e3fa'
  secondary-fixed-dim: '#bbc7dd'
  on-secondary-fixed: '#101c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#94ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004b74'
  background: '#200f0d'
  on-background: '#fddbd7'
  surface-variant: '#452f2d'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
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
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is engineered to evoke the high-stakes precision of a high-end automotive atelier. The brand personality is authoritative, meticulous, and elite, targeting a discerning clientele in Oklahoma City who view their vehicles as investments rather than just transport. 

The aesthetic follows a **Modern Editorial** approach with a **Tactile Gloss** influence. It utilizes expansive whitespace (or "asphalt space"), razor-sharp geometry, and subtle depth effects that mimic the reflective surfaces of freshly polished clear coats. The UI should feel like a premium automotive magazine: spacious, confident, and unapologetically professional.

## Colors

The palette, titled **"Asphalt & Chrome,"** is grounded in deep, monochromatic blacks to establish a premium "Night Mode" foundation. 

- **Obsidian Black (#0A0A0B):** The primary canvas. It should feel infinite and deep, like a showroom floor.
- **Asphalt (#1A1A1B):** Used for elevated surfaces and containers to create structural separation.
- **Signal Red (#E31B23):** Reserved strictly for high-priority actions, critical alerts, and brand accents. It represents performance and heat.
- **Cool Slate (#8E9AAF):** Provides a metallic, "chrome" contrast for secondary text and decorative precision lines, softening the intensity of the pure blacks.

## Typography

Typography is used to convey power and engineering precision. 

**Montserrat** is the display typeface, utilized in heavy weights (ExtraBold/Black) to mimic automotive badging and bold editorial headlines. It should be typeset with tight letter-spacing for a cohesive, "machined" look.

**Inter** serves as the functional workhorse for body text and technical specifications. It provides a neutral, systematic contrast to the aggressive display type, ensuring maximum readability for service descriptions and pricing tiers. All labels and overlines should use Inter in All-Caps with generous tracking to emulate technical diagrams.

## Layout & Spacing

The layout philosophy is a **Fixed-Fluid Hybrid**. On desktop, content is centered within a 1280px max-width container to maintain an editorial feel, while on mobile, it utilizes a 4-column grid with tight margins to maximize verticality.

Spacing follows a strict 8px base unit. To achieve the "spacious" vibe, section vertical padding is intentionally exaggerated (using the `section-gap` token). This prevents the UI from feeling cluttered, reinforcing the meticulous and unhurried nature of professional detailing.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Precision Outlines** rather than traditional shadows. 

1.  **Base:** Obsidian Black (#0A0A0B).
2.  **Elevation 1 (Cards/Sections):** Asphalt (#1A1A1B) with a subtle 1px "Chrome" border (#8E9AAF at 20% opacity).
3.  **Elevation 2 (Interactive):** Asphalt surfaces with a 1px Signal Red border to indicate focus or active states.

A "High-Gloss" effect is applied to primary cards using a subtle linear gradient (Top-Left to Bottom-Right) from #252526 to #1A1A1B, mimicking light hitting a polished hood.

## Shapes

The design system utilizes **Sharp (0px)** roundedness across all primary UI elements. Hard corners communicate clinical precision and technical rigidity. This geometric severity is a hallmark of high-end performance automotive branding. 

Circular elements are permitted only for functional icons or specific status indicators to provide a visual break from the architectural grid.

## Components

- **Buttons:** Primary buttons use a Signal Red background with white text, 0px border radius, and a "shimmer" hover effect. Secondary buttons are "Ghost" style: 1px Slate borders with uppercase label-caps text.
- **Precision Lines:** Horizontal and vertical rules should be 1px thick, using Cool Slate at 30% opacity. Use these to separate service tiers or frame high-resolution photography.
- **Service Cards:** Use a "Full-Bleed" image top with a sharp transition to an Asphalt container. Pricing should be displayed in Montserrat Bold for high visibility.
- **Status Chips:** Small, rectangular tags with monochromatic fills (e.g., "Ceramic Pro Certified") using the label-caps typography style.
- **Inputs:** Darker than the surface (#050505), with a 1px Slate bottom-border only. On focus, the border transitions to Signal Red.
- **Booking Progress:** A linear, thin-gauge bar at the top of the viewport in Signal Red, moving with precision as the user completes steps.
