I have designed and built a bespoke, high-fidelity landing page for **Richardson Roadside Assistance Scranton**. 

### Design Rationale:
*   **Visual Identity**: I established an **Industrial Editorial** style that moves away from generic local business templates. The design uses a high-contrast palette of **Asphalt Black** and **Caution Amber**, reflecting the rugged reliability of roadside work.
*   **Typography**: Heavy, condensed headlines create a sense of urgency and strength, while generous whitespace ensures the information remains legible and premium.
*   **Custom Layout**: 
    *   The **Hero** section focuses on immediate action with a direct local message for Scranton.
    *   The **Service Matrix** uses an offset grid rather than standard boxes to feel more "engineered" and professional.
    *   The **#credibility** section uses data-driven blocks to build trust instantly.
*   **Local Roots**: The **About** and **Visit** sections are grounded in the business's actual location on **Prospect Avenue**, reinforcing their position as a pillar of the local automotive community.
*   **Technical Excellence**: The site is fully responsive, features a functional mobile menu, and includes a production-ready contact form with visual validation states.

The code is semantic, includes a dedicated map slot for your future integration, and avoids all filler text to ensure it is ready for immediate review.

---

---
name: Industrial Editorial
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1c'
  surface-container: '#1f1f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353536'
  on-surface: '#e4e2e3'
  on-surface-variant: '#d5c4ab'
  inverse-surface: '#e4e2e3'
  inverse-on-surface: '#303031'
  outline: '#9e8f78'
  outline-variant: '#514532'
  surface-tint: '#ffba20'
  primary: '#ffdca1'
  on-primary: '#412d00'
  primary-container: '#ffb800'
  on-primary-container: '#6b4c00'
  inverse-primary: '#7c5800'
  secondary: '#c8c6c7'
  on-secondary: '#303031'
  secondary-container: '#49494a'
  on-secondary-container: '#bab8b9'
  tertiary: '#e1e1e2'
  on-tertiary: '#2f3132'
  tertiary-container: '#c4c5c6'
  on-tertiary-container: '#505253'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea8'
  primary-fixed-dim: '#ffba20'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#e5e2e3'
  secondary-fixed-dim: '#c8c6c7'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#e2e2e3'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#131314'
  on-background: '#e4e2e3'
  surface-variant: '#353536'
typography:
  display-lg:
    fontFamily: Barlow Condensed
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-mono:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is engineered to reflect the grit and precision of heavy-duty roadside assistance. It adopts an **Industrial Editorial** style—a fusion of Swiss-inspired typography, high-contrast layouts, and mechanical details. The aesthetic is built to feel "over-engineered" and hyper-reliable, moving away from soft consumer tech trends toward a rugged, tool-like interface.

The target audience consists of local drivers in Scranton who need immediate, authoritative assistance. The UI avoids decorative fluff, prioritizing speed of information and a sense of physical durability. Visual cues are borrowed from industrial signage, technical manuals, and automotive spec sheets.

**Key Stylistic Pillars:**
- **Mechanical Precision:** Every element is aligned to a strict grid with zero-radius corners.
- **High-Velocity Information:** Headlines are condensed and impactful, designed to be read quickly in high-stress situations.
- **Tactile Utility:** Heavy borders (2px) and functional "hazard" accents (45-degree stripes) create a sense of physical presence.

## Colors

The palette is rooted in the high-visibility world of heavy machinery and asphalt. 

- **Caution Amber (#FFB800):** Used exclusively for primary actions, critical alerts, and branding highlights. It is the "light in the dark" for the user.
- **Asphalt Black (#1A1A1B):** The primary surface color. It provides a deep, low-glare background that makes the Amber and Steel Gray elements pop.
- **Steel Gray (#F4F4F5):** Used for primary body text and high-contrast UI elements, providing a clean, "machined" look.
- **Neutral (#2A2A2B):** A subtle mid-tone for card backgrounds and secondary containers to create depth without relying on shadows.

Color application should be bold. Avoid gradients; use solid blocks of color to maintain the industrial, screen-printed feel of professional equipment.

## Typography

The typography system is designed for maximum legibility and "speed." 

**Barlow Condensed** is used for all headlines. Its verticality and tight tracking evoke automotive speedometers and industrial shipping crates. Headlines must always be set in uppercase to reinforce the authoritative tone.

**Public Sans** serves as the workhorse for body copy. Its neutral, institutional grotesque character ensures that service details and safety instructions are clear and professional.

**Geist** is used for technical labels, status indicators, and "meta" information (like timestamps or coordinates). Its technical, monospaced-adjacent feel suggests a precise, data-driven service.

Apply generous line-height to body copy to maintain the "Editorial" side of the design narrative, allowing the content to breathe amidst the heavy borders.

## Layout & Spacing

The layout is governed by a **strict 12-column grid** on desktop and a **4-column grid** on mobile. The spacing system follows a 4px/8px base rhythm, ensuring a mathematical rigor to the interface.

**Grid Philosophy:**
- **Fixed & Rigid:** Content should feel locked into its grid position. Use heavy vertical rules to separate columns in complex data views.
- **Intentional Negative Space:** Large blocks of `xxl` (64px) white space should be used between major sections to prevent the "heavy" style from feeling cluttered.
- **Hazard Pattern Margins:** Subtle 45-degree diagonal stripes (Amber/Black) can be used as decorative borders or "caution" dividers between high-priority service modules.

Mobile layouts should stack vertically with `md` (16px) gutters, ensuring that primary call-to-action buttons (like "Request Tow") span the full width of the viewport for easy thumb access.

## Elevation & Depth

This design system rejects soft shadows and ambient blurs. Depth is communicated through **Tonal Layering** and **Bold Outlines**.

- **Flat Stack:** Elements do not "float"; they are "bolted" to the surface. Use a solid 2px border in Steel Gray or Caution Amber to define interactivity.
- **Interactivity via Inversion:** Instead of shadows, use color inversion to show state changes. A button might go from an Amber border to a solid Amber fill upon hover.
- **Active States:** An "active" card or input field should receive a 4px solid Amber left-border or a subtle hazard pattern overlay on its header to indicate focus.
- **Backdrop:** Backgrounds should remain solid Asphalt Black. Use a slightly lighter Neutral (#2A2A2B) to distinguish secondary containers from the main page body.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—from primary buttons to cards and images—must have 90-degree corners. This evokes the feeling of cut steel and structural beams. 

**Exceptions (Chamfers):** For specialized components like status badges or brand icons, a 45-degree "chamfered" corner (cutting off a corner at an angle) is permitted to further the "machined" aesthetic. Avoid standard rounding at all costs; it contradicts the rugged, industrial narrative of the brand.

## Components

### Buttons
- **Primary:** Solid Caution Amber background, Asphalt Black text, bold uppercase Barlow Condensed. 0px border-radius.
- **Secondary:** Transparent background, 2px Steel Gray border, Steel Gray text. 
- **Urgent/SOS:** 2px Caution Amber border with a flickering hazard pattern background (CSS animation) to denote emergency status.

### Cards
- 2px Steel Gray border, solid Asphalt Black background. 
- Headers should be separated from body content by a 1px horizontal rule.
- Use Geist for small technical labels in the top-right corner of cards.

### Input Fields
- 2px Neutral (#2A2A2B) border. 
- On focus, the border becomes 2px Caution Amber.
- Placeholder text in Steel Gray at 50% opacity.

### Chips & Badges
- Small, rectangular boxes with Geist typography.
- Status "Online" or "Available" should use a solid block of color (Success Green) with black text.

### The Hazard Divider
- A specific component consisting of a 12px tall bar with repeating 45-degree Amber and Black stripes. Use this to separate the "Header" from the "Content" or to highlight the "Service Request" section.

### Lists
- Each list item is separated by a 1px Steel Gray rule.
- Use "chevron-right" icons that are sharp and angular (not rounded).
