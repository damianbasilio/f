I've designed a bespoke, premium landing page for South Central Towing that moves away from the standard local business template and embraces a "Rugged Industrial Luxury" aesthetic. 

### Design Decisions:
*   **Glacier Industrial Palette:** I established a dark, high-contrast identity using deep charcoals and slate blues, punctuated by a high-visibility "Safety Orange" for primary actions and emergency calls.
*   **Asymmetrical Grid:** The layout uses a non-standard, architectural grid with staggered sections and overlapping elements to create a more custom, editorial feel.
*   **Strong Typography:** I utilized a condensed, bold typographic hierarchy to convey strength and reliability—essential traits for a heavy-duty towing service in the Alaskan environment.
*   **Industrial Motifs:** Subtle rule lines and geometric color blocks are used throughout to reinforce the industrial nature of the business while maintaining a high-end, professional finish.
*   **Production-Ready Structure:** The site includes all required sections, including the specific map slot, a credibility stats bar, and a high-conversion dispatch form.

The design is fully responsive and built with semantic HTML and utility-first CSS, ensuring a fast, professional first impression for Anchorage residents and commercial partners alike.

---

---
name: Glacier Industrial
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c5c6ca'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8f9194'
  outline-variant: '#44474a'
  surface-tint: '#c6c6c9'
  primary: '#c6c6c9'
  on-primary: '#2f3133'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#5d5e61'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#b9c7e0'
  on-tertiary: '#233144'
  tertiary-container: '#0d1c2f'
  on-tertiary-container: '#76859b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
---

## Brand & Style
The design system is built on the narrative of "Rugged Industrial Luxury," specifically tailored for the demanding environment of Anchorage, Alaska. It rejects the frantic, low-fidelity tropes of the towing industry in favor of a calm, authoritative, and architectural presence. 

The aesthetic is a hybrid of **Minimalism** and **High-Contrast Brutalism**. It utilizes expansive negative space to evoke the Alaskan landscape, contrasted against heavy-weighted, structured elements that communicate mechanical reliability. The UI should feel like a premium tool—precise, heavy-duty, and sophisticated. Visual interest is driven by asymmetrical grid arrangements and technical line-work inspired by topographical maps and industrial schematics.

## Colors
The palette, "Glacier Midnight," leverages deep, atmospheric tones to establish a premium dark-mode foundation. 

- **Glacier Midnight (#1A1C1E):** The primary surface color. It provides a deep, non-pure black background that feels substantial and sophisticated.
- **Safety Orange (#F97316):** Used exclusively for critical actions and utility signaling. It provides maximum contrast against the dark base, ensuring immediate eye-tracking for emergency services.
- **Frost White (#F8FAFC):** Used for primary typography and high-emphasis icons. It is slightly cooled to prevent harsh optical vibration.
- **Slate Blue (#334155):** A secondary functional color for borders, dividers, and subtle UI elements, bridging the gap between the charcoal base and white text.

## Typography
The typographic system uses a strict "Neo-Grotesque" approach to emphasize strength. **Inter** is utilized for its technical precision and readability. Headlines should be set with tight letter-spacing to create a "blocky," architectural feel. 

For supplemental data and technical details, **JetBrains Mono** is introduced to reinforce the industrial, service-oriented nature of the brand. This monospaced face should be used for labels, coordinates, and vehicle specs. Large display type should often be treated as a structural element of the layout, sometimes bleeding off the edge or interacting with heavy borders.

## Layout & Spacing
The layout employs an **architectural fixed grid** on desktop and a **fluid column system** on mobile. 

- **The Grid:** A 12-column system with wide 24px gutters. Elements should purposefully align to different starting columns to create an asymmetrical, editorial rhythm.
- **Structural Lines:** Use 1px or 2px borders (Slate Blue) to define "zones" of content rather than relying on cards. This mimics technical blueprints.
- **Topographical Breaks:** Sections should be separated by significant vertical padding (stack-lg) to allow the "Glacier Midnight" background to act as a visual palette cleanser. 
- **Responsive Behavior:** On mobile, the 12 columns collapse to 4, and the horizontal margins tighten to 20px. Structural borders remain but may transition from vertical to horizontal to separate stacked content.

## Elevation & Depth
This design system avoids traditional shadows to maintain its "Industrial" persona. Depth is achieved through **Tonal Layering** and **Bold Outlines**:

- **Layer 0 (Base):** Glacier Midnight (#1A1C1E).
- **Layer 1 (Containers):** Slate Blue (#334155) at 10-15% opacity, or defined purely by a 1px solid border.
- **Interactive Elements:** Use Safety Orange for the highest level of visual "elevation"—it doesn't sit *above* the surface so much as it *pierces* through it.
- **Tactile Texture:** Subtle, low-opacity (5%) topographical line patterns can be used as background overlays on Layer 0 to provide a sense of grit and place without sacrificing legibility.

## Shapes
In keeping with the rugged, industrial theme, the design system utilizes **Sharp (0)** roundedness. Every button, input field, and container features hard 90-degree corners. This evokes the geometry of heavy machinery and steel beams. The only exception is the use of circular icons when contained within square framing to provide a focal point.

## Components
- **Buttons:** Primary buttons are solid Safety Orange with black text, strictly rectangular. Secondary buttons are Frost White outlines with no fill.
- **Cards/Blocks:** Avoid "floating" cards. Use full-width or grid-aligned blocks separated by 1px Slate Blue horizontal rules. 
- **Input Fields:** Bottom-border only or fully enclosed with a 1px Slate Blue border. Label text should be in JetBrains Mono above the field.
- **Status Indicators:** Use Safety Orange for "Active" or "Emergency" states. Use Frost White for "Standard" or "Completed" states.
- **Technical Lists:** Use a dot-leader (e.g., Service ....... $0.00) style for pricing or service lists to maintain the editorial/industrial aesthetic.
- **Iconography:** Thin-stroke, geometric line icons. Icons should never be filled; they should feel like technical drawings.
