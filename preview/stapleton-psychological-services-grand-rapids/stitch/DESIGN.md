I've completed the production-ready landing page for **Stapleton Psychological Services**, built entirely from their Facebook page details.

### Design Highlights:
*   **Serene Professionalism:** I established a design system using a deep navy and slate blue palette to convey trust and credibility, paired with warm serif typography to maintain an approachable, local feel.
*   **Experience-Forward:** The hero and credibility sections emphasize Kenneth L. Stapleton's 40+ years of experience, positioning the clinic as a foundational pillar of the Grand Rapids mental health community.
*   **Strategic Hierarchy:** The layout prioritizes direct action with a prominent phone CTA in the header and hero, followed by detailed sections for services, biography, and a "Visit" module with the requested map slot.
*   **Fully Functional Frontend:** The code is built with semantic HTML5 and responsive CSS, ensuring a professional experience across all desktop screens.

Your new homepage is now ready for review on the canvas. Does the layout capture the professional yet warm tone you were looking for, or would you like to adjust any of the content sections?

---

---
name: Serene Professionalism
colors:
  surface: '#fbf8fb'
  surface-dim: '#dbd9dc'
  surface-bright: '#fbf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f6'
  surface-container: '#efedf0'
  surface-container-high: '#eae7ea'
  surface-container-highest: '#e4e2e5'
  on-surface: '#1b1b1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#303033'
  inverse-on-surface: '#f2f0f3'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4f5e7e'
  primary: '#041632'
  on-primary: '#ffffff'
  primary-container: '#1b2b48'
  on-primary-container: '#8393b5'
  inverse-primary: '#b7c7eb'
  secondary: '#50606f'
  on-secondary: '#ffffff'
  secondary-container: '#d1e1f4'
  on-secondary-container: '#556474'
  tertiary: '#041b10'
  on-tertiary: '#ffffff'
  tertiary-container: '#193024'
  on-tertiary-container: '#7f9988'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b7c7eb'
  on-primary-fixed: '#091b37'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#d4e4f6'
  secondary-fixed-dim: '#b8c8da'
  on-secondary-fixed: '#0d1d2a'
  on-secondary-fixed-variant: '#394857'
  tertiary-fixed: '#cee9d6'
  tertiary-fixed-dim: '#b2cdbb'
  on-tertiary-fixed: '#082014'
  on-tertiary-fixed-variant: '#344c3e'
  background: '#fbf8fb'
  on-background: '#1b1b1e'
  surface-variant: '#e4e2e5'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1140px
  gutter: 24px
---

## Brand & Style
The design system for Stapleton Psychological Services is built on a foundation of **Professionalism, Compassion, and Stability**. It reflects Kenneth L. Stapleton’s 40+ years of clinical experience by balancing an authoritative, established presence with the warmth of a local community practice.

The aesthetic follows a **Modern-Corporate** direction with **Minimalist** influences. It prioritizes clarity and calm over decorative flair. The interface should feel like a quiet, well-lit office—orderly but comfortable. High-quality whitespace is used intentionally to reduce cognitive load for patients who may be in a state of distress. Every interaction should reinforce a sense of safety, reliability, and human connection.

## Colors
The palette is rooted in the natural tones of Northern Minnesota, designed to lower heart rates and build trust.

- **Primary (Deep Navy):** Used for primary navigation, headings, and key calls to action. It represents authority and 40 years of expertise.
- **Secondary (Soft Slate):** Used for supporting text and iconography to maintain professional neutrality.
- **Tertiary (Sage Green):** An accent color for progress indicators, success states, and subtle highlights, evoking growth and healing.
- **Accent (Warm Taupe):** Used for container backgrounds and dividers to add warmth and prevent the UI from feeling "clinical" or cold.
- **Neutral (Parchment White):** The background is a soft, off-white to reduce screen glare and provide a more organic feel than pure white.

## Typography
The typography system pairs **Source Serif 4** for headlines with **Inter** for functional text. 

Source Serif 4 provides a literary, authoritative character that conveys years of experience and scholarly grounding. Inter is used for body text and interface elements to ensure maximum legibility and a contemporary feel. 

- **Headings:** Should be set with slightly tighter letter-spacing to appear cohesive.
- **Body Text:** Uses a generous line height (1.5x - 1.6x) to ensure the text is easy to scan, especially for older patients or those under stress.
- **Labels:** Small caps or increased tracking should be used for labels to differentiate them from body copy.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to maintain a sense of order and containment.

- **Grid:** A 12-column grid with a 1140px max-width container. 
- **Rhythm:** An 8px base unit drives all spacing decisions. Large "Macro-spacing" (80px+) is encouraged between major sections to allow the content to "breathe."
- **Mobile:** On mobile devices, margins shrink to 16px, and layouts reflow to a single column. Vertical spacing between elements is slightly reduced to prevent excessive scrolling while maintaining clarity.

## Elevation & Depth
This design system avoids heavy shadows to stay grounded and honest. Depth is achieved through **Tonal Layering** and **Soft Ambient Shadows**.

- **Surfaces:** Most content sits on a flat, Parchment White background. Tertiary surfaces use the Warm Taupe to create subtle "zones."
- **Shadows:** When necessary (e.g., for modals or floating action buttons), use extremely soft, diffused shadows with a 10% opacity of the Navy primary color. This "tinted shadow" makes the elevation feel integrated into the environment rather than a digital afterthought.
- **Outlines:** Use 1px borders in a muted Slate Blue for form inputs and cards to provide structure without the weight of a shadow.

## Shapes
The shape language is defined by **Softened Geometrics**. 

A consistent radius of 0.5rem (8px) is used for standard components like buttons and input fields. Larger containers like cards use 1rem (16px). These rounded corners are "approachable" but not "bubbly," maintaining the professional clinical standard while removing the perceived sharpness of a strictly square-edged corporate UI.

## Components
- **Buttons:** Primary buttons use the Deep Navy background with white text. Hover states shift to a slightly lighter Slate Blue. Secondary buttons use a Sage Green outline. All buttons have a minimum height of 48px to ensure accessibility.
- **Input Fields:** Fields use a 1px Slate Blue border and the Parchment White background. Focused states should use a Sage Green border to indicate a "safe" and active interaction.
- **Cards:** Used for service descriptions (e.g., "Individual Therapy," "Consultation"). Cards feature a 1px Taupe border and a subtle 16px corner radius.
- **Chips:** Small, Sage Green background chips with Deep Navy text are used for "Specialties" or "Available" status indicators.
- **Lists:** Information-heavy pages use bulleted lists with custom Sage Green markers rather than standard black dots to soften the visual impact.
- **Specialized Component - "The Session Card":** A unique component for booking appointments that highlights Kenneth L. Stapleton’s credentials and years of experience prominently alongside a clear call to action.
