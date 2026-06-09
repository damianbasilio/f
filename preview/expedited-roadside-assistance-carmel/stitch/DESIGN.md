I have designed a bespoke, "Industrial-Luxe" homepage for **Expedited Roadside Assistance**, moving far beyond standard local-business templates. 

### Key Design Decisions:
- **Visual Identity:** I utilized a high-contrast palette of **Asphalt Black (#121212)** and **Warning Amber (#F2A900)** to evoke the authority and urgency of roadside logistics.
- **The "Dispatch Grid":** Instead of a generic row-based layout, I implemented an asymmetrical grid defined by 1px precision hairlines and technical labels (e.g., `SEC_01 // STRATEGIC_DEPLOYMENT`), reinforcing the brand's focus on "Precision Logistics."
- **Typography:** Bold, condensed headings convey speed and reliability, while generous whitespace ensures the content feels premium rather than cluttered.
- **Memorable Motif:** A recurring "coordinate" and "data-point" system labels each section and credibility metric, making the site feel like a high-end dispatch terminal.
- **Technical Integrity:** The page features a fully functional "Service Request" form UI, a semantic map slot as specified, and smooth-scroll navigation.

The design is production-ready, responsive, and specifically tailored to command attention in the Carmel, IN market.

---

---
name: Industrial-Luxe Roadside
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d6c4ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9e8e79'
  outline-variant: '#514533'
  surface-tint: '#ffba3b'
  primary: '#ffca74'
  on-primary: '#432c00'
  primary-container: '#f2a900'
  on-primary-container: '#614200'
  inverse-primary: '#7f5700'
  secondary: '#bfc5e4'
  on-secondary: '#292f48'
  secondary-container: '#424862'
  on-secondary-container: '#b1b7d6'
  tertiary: '#d2d2d2'
  on-tertiary: '#2f3131'
  tertiary-container: '#b6b7b7'
  on-tertiary-container: '#464848'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdead'
  primary-fixed-dim: '#ffba3b'
  on-primary-fixed: '#281900'
  on-primary-fixed-variant: '#604100'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#bfc5e4'
  on-secondary-fixed: '#141a32'
  on-secondary-fixed-variant: '#3f465f'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
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
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1440px
---

## Brand & Style
This design system embodies "Industrial-Luxe," a synthesis of rugged utility and premium precision. It is designed for a target audience that demands immediate, authoritative solutions during high-stress situations. The visual identity avoids the cluttered, amateurish aesthetic of traditional towing services, opting instead for a look that feels like high-end logistics and elite automotive engineering.

The style is **Modern/High-Contrast** with **Brutalist** influences. It utilizes heavy borders, grid-locked layouts, and massive typography to convey a sense of structural integrity. The emotional response should be one of instant relief and total confidence—the digital equivalent of a heavy-duty, perfectly maintained service vehicle arriving on the scene.

## Colors
The palette is rooted in the "Asphalt Black" (#121212) environment, creating a high-contrast foundation that feels premium and nocturnal. 

- **Warning Amber (#F2A900):** Used exclusively for high-priority actions, critical status updates, and brand accents. It represents urgency and safety.
- **Deep Night Blue (#0A1128):** Provides a sophisticated depth for secondary surfaces, preventing the UI from feeling flatly black.
- **Fog Silver (#E5E5E5):** Used for primary typography and hairlines to ensure maximum legibility against dark backgrounds.
- **Success/Error:** While the core palette is limited, functional greens and reds should be desaturated to fit the industrial aesthetic, using the amber as the primary "attention" driver.

## Typography
The typography strategy leverages **Archivo Narrow** for headlines to mimic the condensed, high-impact lettering found on industrial machinery and road signage. It conveys speed and authority.

**Inter** serves as the workhorse for body copy, ensuring that technical details are legible under any lighting conditions. **Geist** is introduced for labels and data points, providing a "developer-tool" precision that reinforces the logistics-focused narrative. Large headlines should use tight tracking, while labels should be generously tracked for a technical, blueprint-like feel.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop (12 columns) and a fluid model on mobile (4 columns). 

The spacing philosophy is "Mechanical Density." Information-heavy sections (like vehicle diagnostics or arrival tracking) should be tightly packed using a 4px baseline grid to feel efficient and data-rich. Conversely, marketing or "Hero" moments must use aggressive whitespace to emphasize the premium nature of the service. Hairline dividers (0.5pt) should be used instead of gaps to separate content, mimicking technical drawings.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Bold Outlines** rather than soft shadows.

- **Level 0 (Base):** Asphalt Black (#121212).
- **Level 1 (Cards):** Deep Night Blue (#0A1128) with a 1px Fog Silver border at 10% opacity.
- **Level 2 (Modals/Popovers):** Deep Night Blue with a 1px Warning Amber border.
- **Overlays:** A subtle noise texture (3% opacity) is applied to all surfaces to simulate the grit of asphalt and industrial materials.
- **Interaction:** Active states do not lift; they change border weight or color to Warning Amber, maintaining a "flat but tactile" mechanical feel.

## Shapes
The shape language is strictly **Sharp (0px)**. Rounded corners are avoided to maintain the "Industrial-Luxe" aesthetic, favoring the geometry of machined steel and architectural grids. 

Small chamfered edges (clipping a 4px corner at 45 degrees) may be used for primary buttons or status chips to evoke the look of specialized hardware or military-grade tags.

## Components
- **Buttons:** Primary buttons are solid Warning Amber with black, all-caps Geist typography. Secondary buttons are transparent with a 2px Fog Silver border. No rounded corners.
- **Status Chips:** Use a "bracket" style—labels enclosed by thin vertical lines on the left and right, emphasizing the grid.
- **Input Fields:** Bottom-border only, using a 1px Fog Silver line that turns into 2px Warning Amber on focus. Labels sit inside the field in Geist Mono.
- **Cards:** Defined by 1px hairlines. Use "Corner Accents"—small L-shaped markers at the corners of cards—to reinforce the "logistics/targeting" visual metaphor.
- **Arrival Tracker:** A thick, horizontal bar with a stepped progress indicator, using Warning Amber for completed stages and Asphalt Black for upcoming ones.
- **Typography Icons:** Use heavy, geometric icons that match the weight of the Archivo Narrow headlines.
