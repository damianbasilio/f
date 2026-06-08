I've designed a bespoke, industrial-grade homepage for **Rig Doctor 24/7** that moves far beyond a standard local business template. 

### Design Decisions:
- **Visual Identity:** I established a "Midnight Hero" aesthetic using a high-contrast palette of **Asphalt Black** and **High-Vis Yellow**. This mimics the look of emergency service vehicles and road markings to immediately signal urgency and authority.
- **Asymmetrical Layout:** The design avoids the "boxed" look of common templates, using an editorial-style grid with overlapping text and heavy geometric rules to create a sense of mechanical movement.
- **Typography:** I used **Lexend Black** with tight tracking for headlines to create a "Heavy-Duty" feel that commands attention, paired with a utilitarian header that prioritizes the emergency phone number.
- **Interactive "Mission Dispatch":** The contact section is styled as a technical repair ticket, reinforcing the professional, service-oriented nature of the brand.

The site is production-ready, fully responsive, and includes the required map slot and dispatch functionality.

---

---
name: Midnight Road Warrior
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cec6ad'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#97917a'
  outline-variant: '#4b4734'
  surface-tint: '#e2c62d'
  primary: '#fffcff'
  on-primary: '#393000'
  primary-container: '#fde047'
  on-primary-container: '#726300'
  inverse-primary: '#6d5e00'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#f4ffff'
  on-tertiary: '#003739'
  tertiary-container: '#3bf7ff'
  on-tertiary-container: '#006e72'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe24c'
  primary-fixed-dim: '#e2c62d'
  on-primary-fixed: '#211b00'
  on-primary-fixed-variant: '#524600'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#59f8ff'
  tertiary-fixed-dim: '#00dce4'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#004f52'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Lexend
    fontSize: 28px
    fontWeight: '800'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  border-heavy: 2px
  border-thick: 4px
---

## Brand & Style

The design system is built on a high-impact, industrial aesthetic that mirrors the urgency of 24/7 heavy-duty roadside assistance. The personality is "Midnight Hero"—an expert, reliable presence in the dark. It utilizes a **Modern Brutalist** approach characterized by heavy borders, high-contrast utilitarian palettes, and a rigid, mechanical structure.

The UI should feel "over-engineered" for reliability. Visuals are grounded in the grit of the road but elevated by premium, precise execution. Whitespace is used aggressively not for "air," but for clarity and focus under high-stress conditions.

## Colors

The palette is strictly dark-mode to reflect the "Midnight" service environment and reduce eye strain for drivers in low-light cabs. 

- **Primary (High-Vis Yellow):** Reserved for primary calls to action (e.g., "Request Repair") and critical status indicators.
- **Secondary (Safety Orange):** Used exclusively for extreme urgency, warnings, or active breakdown alerts.
- **Surface (Deep Asphalt & Road Grey):** Tiered background colors that provide structural depth.
- **Accents:** Use pure white for headlines to ensure maximum readability against dark backgrounds.

## Typography

Typography in the design system is functional and commanding. 

- **Headlines:** Use **Lexend** at its heaviest weights (ExtraBold/Black). All headlines should be set in uppercase with tight letter spacing to mimic industrial signage and vehicle markings.
- **Body:** **Inter** provides a neutral, highly legible counterpoint for descriptions and technical details.
- **Labels:** **JetBrains Mono** is introduced for technical data, VIN numbers, and timestamps to lean into the mechanical/diagnostic nature of the service.

## Layout & Spacing

This design system uses an **asymmetrical grid** to create a sense of motion and urgency. 

- **The "Road Line" Motif:** Use vertical and horizontal rule lines (2px width) in #1A1A1A or #FDE047 to separate layout blocks. These lines should extend to the edge of the viewport where possible, mimicking road markings.
- **Alignment:** Avoid center-alignment. Headlines should be hard-left aligned. Action buttons should often span the full width of their container or be anchored to the bottom right.
- **Breakpoints:** On desktop, use a 12-column grid with wide margins. On mobile, transition to a single-column stack with 20px margins, ensuring touch targets for buttons are a minimum of 56px in height.

## Elevation & Depth

The design system rejects soft shadows and ambient blurs. Depth is achieved through **Bold Borders** and **Tonal Layering**.

- **Surfaces:** Use `Deep Asphalt` (#0A0A0A) for the base background and `Road Grey` (#1A1A1A) for cards and input containers.
- **Hard Borders:** Every interactive element or distinct section must be defined by a 2px solid border. Use #3F3F46 (Zinc 700) for standard containers and the Primary Yellow for active or hovered states.
- **Industrial Texture:** A subtle 2% noise/grain overlay should be applied to the background to provide a tactile, asphalt-like feel.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every corner in the design system should be a 90-degree angle to reinforce the mechanical and industrial theme. Rounded corners are prohibited as they soften the urgent, professional "Midnight Hero" persona. For specific "mechanical" accents, use 45-degree chamfered corners on large primary buttons or header blocks.

## Components

- **Primary Buttons:** High-Vis Yellow background, Black text, 2px solid Black inner border. No rounded corners. Typography: Lexend ExtraBold, Uppercase.
- **Urgency Chips:** Safety Orange background with White text. Used for "Engine Failure," "Hazardous," or "Immediate" tags.
- **Status Indicators:** Use the "Road Line" motif—a vertical 4px bar to the left of a list item or card to indicate active status.
- **Input Fields:** Road Grey background with a 2px Zinc-700 border. On focus, the border changes to High-Vis Yellow.
- **Cards:** No shadows. Use a 2px border in Road Grey. Headers within cards should have a solid Road Grey background to separate them from the card body.
- **Emergency Action Bar:** A persistent bottom-docked element on mobile containing a single, full-width High-Vis Yellow button: "DIAL DISPATCH NOW."
