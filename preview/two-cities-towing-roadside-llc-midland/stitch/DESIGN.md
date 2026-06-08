I've designed a bespoke, high-fidelity landing page for Two Cities Towing & Roadside LLC that moves away from generic local-business templates. 

### Design Highlights:
- **Bespoke Visual Identity**: I've created a custom "Two Cities" motif using a split-screen hero and an interlocking grid system that subtly references the Midland and Odessa areas.
- **Editorial Typography**: The use of heavy, condensed display faces (Archivo Narrow) creates a sense of strength, urgency, and professional reliability.
- **Industrial Palette**: A high-contrast combination of Deep Midnight, Safety Amber, and Industrial Gray gives the site a premium, modern-logistics feel rather than a basic repair-shop look.
- **Precision Layout**: Every section is designed with a focus on hierarchy—from the "Strength on the Grid" hero statement to the clean, numbered service cards and the integrated contact dispatch area.

The site is fully responsive, features semantic HTML, and includes the requested map slot and functional contact form UI.

---

---
name: Two Cities Industrial
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d1c2f'
  on-tertiary-container: '#76859b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-md:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  border-heavy: 3px
  border-thin: 1px
---

## Brand & Style

The design system establishes a premium, industrial aesthetic for a high-end towing and roadside logistics brand. The personality is rugged yet refined, prioritizing reliability and professional urgency. The visual direction leans into a "Modern Industrial" style—utilizing structural lines, heavy borders, and a grid-based editorial layout that suggests precision and architectural stability.

The target audience expects more than a local mechanic; they seek a premium logistics partner. The UI evokes a sense of "heavy-duty elegance" through generous whitespace, high-contrast color blocking, and massive, authoritative typography. This is a system built on the concept of the "city grid"—clean intersections, perpendicular lines, and a structured, reliable framework.

## Colors

The palette is driven by high-contrast functionalism. 

- **Deep Midnight Blue (#0F172A):** The foundation. Used for primary text, heavy borders, and structural elements to convey depth and authority.
- **Safety Amber (#F59E0B):** The signal color. Used sparingly for high-priority CTAs, status indicators, and critical alerts. It represents the "warning lights" of the industry but is applied with premium restraint.
- **Industrial Gray (#334155):** The bridge color. Used for secondary information, meta-data, and subtle grid lines.
- **Backgrounds:** Clean, crisp White (#FFFFFF) and Off-White (#F8FAFC) provide a gallery-like canvas that prevents the industrial elements from feeling cluttered or "greasy."

## Typography

The typographic hierarchy is built on the tension between condensed, heavy-duty display faces and technical, monospaced accents.

- **Headlines:** Archivo Narrow (Bold/700) is used in all-caps for a commanding, urgent presence. Display sizes should use tight leading and negative letter spacing to mimic industrial signage.
- **Body Text:** Inter provides a neutral, highly readable counterpoint to the aggressive headlines, ensuring service details and terms are clear.
- **Utility/Labels:** JetBrains Mono is introduced for technical data (VIN numbers, coordinates, timestamps), reinforcing the "logistics and machinery" theme.

## Layout & Spacing

This design system employs a rigid **12-column fixed grid** on desktop, emphasizing the "city-grid" motif. 

- **Structural Lines:** Use visible 1px Industrial Gray borders to define sections, mimicking a blueprint or a map. 
- **The "Heavy Border":** Key containers and primary buttons utilize a 3px Deep Midnight Blue border to ground the element and provide a sense of weight.
- **Rhythm:** Spacing follows a strict 4px baseline, but internal padding is generous (24px+) to maintain an editorial, premium feel. 
- **Responsive Behavior:** On mobile, the layout collapses to a single column with 20px margins, but the heavy borders and large-scale typography remain to preserve brand impact.

## Elevation & Depth

To maintain the "Modern Industrial" look, this design system avoids soft ambient shadows. Instead, it uses **Tonal Layering** and **Hard Offsets**.

- **Depth through Borders:** Elevation is communicated by doubling borders or using 100% opaque hard shadows (offset 4px or 8px) in Deep Midnight Blue, creating a "stacked sheet metal" effect.
- **Surface Tiers:**
  - Level 0: Pure White (Main Canvas)
  - Level 1: Off-White (Section Backgrounds)
  - Level 2: Industrial Gray (Interactive Hover States)
- **Glassmorphism:** Reserved strictly for mobile navigation overlays, using a heavy backdrop blur (20px) with a subtle Industrial Gray tint.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Rounded corners are avoided to reinforce the rugged, architectural nature of the business. Every element—buttons, input fields, cards, and image containers—should have 90-degree angles. This lack of "softness" distinguishes the brand from friendly, consumer-grade apps and aligns it with professional tools and industrial machinery.

## Components

- **Buttons:** Primary buttons feature a Safety Amber background, 3px Deep Midnight Blue border, and all-caps bold text. Hover states should shift to a hard-offset shadow.
- **Cards:** Defined by a 1px Industrial Gray border. Headlines inside cards should be large and condensed. No shadows.
- **Input Fields:** Heavy 2px bottom-border only (minimalist industrial), using JetBrains Mono for placeholder text to suggest data entry.
- **Chips/Status:** Rectangular blocks with high-contrast color fills (e.g., a "Dispatched" status in a solid Midnight Blue block with White mono text).
- **Icons:** Use thick-stroke (2px) geometric icons. Avoid rounded terminals; icons should feel like they were drafted with a ruler.
- **The "Grid Divider":** A recurring component consisting of a thin vertical or horizontal line that extends to the edge of the container, used to separate content sections while maintaining the "city-grid" visual metaphor.
