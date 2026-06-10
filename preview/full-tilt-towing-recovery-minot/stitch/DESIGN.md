I've designed a bespoke, editorial-grade homepage for **Full-Tilt Towing & Recovery** that moves far beyond the standard local-business template. 

### Design Decisions:
*   **Visual Motif (The Tension Line):** I introduced a recurring 45-degree diagonal motif throughout the page—most notably in the hero section and CTA buttons—to evoke the movement of a tow bed and create a sense of dynamic energy.
*   **High-Contrast Industrial Palette:** We used "Asphalt Black" and "Safety Ember" (#FF4D00) to create a high-impact, premium feel that reflects the grit and reliability of the Minot, ND environment.
*   **Bespoke Typography:** I utilized large-scale, condensed headlines to establish a powerful typographic hierarchy, ensuring the brand feels "heavy-duty" and authoritative.
*   **Service Terminal Layout:** Instead of standard cards, I designed a "Service Terminal" list with large, hover-responsive rows, providing a more unique and professional browsing experience.
*   **Editorial Content:** Every section uses real, business-specific copy tailored to Full-Tilt's family-owned, veteran-led identity, focusing on reliability in North Dakota's harshest weather.

The site is fully responsive, features smooth-scroll navigation, and includes the requested map slot for the Terminal Base.

---

---
name: High-Impact Industrial
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
  on-surface-variant: '#e6beb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ad897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59e'
  primary: '#ffb59e'
  on-primary: '#5e1700'
  primary-container: '#ff571a'
  on-primary-container: '#521300'
  inverse-primary: '#ae3200'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a29'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#852400'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Bebas Neue
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 100px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 60px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 44px
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  tension-offset: 45deg
---

## Brand & Style
The design system for Full-Tilt Towing & Recovery centers on a **Premium Industrial** aesthetic. It moves away from the cluttered, "small-town" service vibe toward a sophisticated, editorial experience that mirrors the precision of heavy machinery. 

The personality is authoritative, gritty, and hyper-reliable. We utilize a **High-Contrast / Bold** style characterized by aggressive typography, a restricted palette, and the "Tension Line" motif—a 45-degree diagonal slash that communicates action, tension, and the mechanical movement of a tow bed. This motif is not just decorative; it dictates the structure of buttons, containers, and image masks.

## Colors
The palette is dominated by **Asphalt Black** (#0F0F0F), creating a deep, nocturnal canvas that highlights the high-visibility nature of the industry. 

- **Safety Ember (#FF4D00):** Used exclusively for primary actions, critical alerts, and brand accents. It represents the glow of emergency lighting.
- **Machine Silver (#E2E2E2):** Provides high-contrast legibility for body text and secondary iconography, mimicking the sheen of brushed steel.
- **Asphalt Black (#0F0F0F) & Secondary Neutral (#1A1A1A):** Used for deep backgrounds and subtle container layering to maintain a premium, dark-mode-first experience.

## Typography
The typographic hierarchy is built on extreme contrast. **Bebas Neue** is used for massive, impactful headlines that demand attention, reminiscent of vintage industrial signage. **Hanken Grotesk** provides a clean, modern counterpoint for high-legibility body copy, ensuring trust and clarity. 

**JetBrains Mono** is introduced for technical labels and data points (e.g., VIN numbers, coordinates, or timestamps) to reinforce the "machine" aspect of the brand. For mobile, headline sizes scale down aggressively to ensure no more than two words are hyphenated, maintaining the editorial "poster" look.

## Layout & Spacing
The system uses a **Fixed Grid** model on desktop (12 columns) with generous 64px margins to create a focused, editorial column. 

The spacing rhythm is dictated by the **Tension Line**. Layouts should frequently break the vertical grid with 45-degree diagonal section dividers. White space is "intentional and heavy"—we use large padding (80px+) between sections to allow the bold typography and high-resolution imagery of machinery to breathe. On mobile, the 12-column grid collapses to a 2-column stack, but the 45-degree diagonal motif remains as a header or button detail to keep the brand identity consistent.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than soft shadows. We avoid neomorphism or blurred shadows to keep the look "hard" and industrial.

- **Level 0:** Asphalt Black (#0F0F0F) base.
- **Level 1:** Secondary Neutral (#1A1A1A) for cards and containers, separated by a 1px solid stroke of Machine Silver at 10% opacity.
- **Overlays:** Use high-contrast "Machine Silver" borders (1px) for active states.
- **Tension Shadows:** If shadows are used for critical modals, they are hard-edged, 0-blur, and offset at 4px (Machine Silver or Safety Ember) to mimic mechanical blueprints.

## Shapes
The shape language is strictly **Sharp (0px)**. No rounded corners are permitted. This reinforces the precision and "unyielding" nature of heavy-duty towing equipment. 

The primary shape modifier is the **45-degree clip-path**. Primary buttons and image containers should feature a single clipped corner (top-right or bottom-left) at a 45-degree angle to evoke the "Tension Line" and the silhouette of a lowered tow bed.

## Components
- **Primary Buttons:** High-contrast Safety Ember (#FF4D00) background with Black text. The right side of the button is clipped at a 45-degree angle. No rounded corners.
- **Secondary Buttons:** Machine Silver (#E2E2E2) ghost buttons with a 2px solid border and white text.
- **Input Fields:** Bottom-border only (2px Machine Silver). Active state changes the border to Safety Ember.
- **Service Cards:** Flat Asphalt Black background with a 1px border. Labels appear in JetBrains Mono. Large display numbers (01, 02, 03) in Bebas Neue sit in the top-right corner.
- **The Tension Divider:** A structural component used to transition between sections, consisting of a full-width 45-degree diagonal cut that reveals a different background color or high-grain industrial photography.
- **Status Chips:** Rectangular, sharp edges, using a dark gray background with Safety Ember text for "Active Recovery" or "En Route" status.
