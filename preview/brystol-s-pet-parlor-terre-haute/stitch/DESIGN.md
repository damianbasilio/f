I've completed the production-ready homepage for Brystol's Pet Parlor, custom-built from their real Facebook presence in Terre Haute. 

### Design Choices:
- **Warm & Trustworthy Tone**: I centered the messaging around their core philosophy—that "dogs are our babies"—to build an immediate emotional connection with local pet parents.
- **Local Credibility**: The design prominently features their 5-star rating and "Community Rooted" status to establish trust for a service-based local business.
- **Conversion-Focused Layout**: The header includes a click-to-call phone number and a primary "Book Now" CTA, ensuring the most important actions are always accessible.
- **Tailor-Made Aesthetic**: Instead of a generic grid, I used an asymmetric layout with soft, rounded corners and a calming palette of pet-friendly blues and creams, reflecting the boutique nature of their parlor.
- **Operational Ready**: I included a dedicated "Visit" section with a map placeholder and a contact form with preview-ready validation UI.

The site is fully responsive and uses semantic HTML5 to ensure it looks great on both desktop and mobile devices.

---

---
name: Brystol’s Heritage Grooming
colors:
  surface: '#f7f9ff'
  surface-dim: '#d5dae2'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4fc'
  surface-container: '#e9eef6'
  surface-container-high: '#e3e9f0'
  surface-container-highest: '#dde3eb'
  on-surface: '#161c22'
  on-surface-variant: '#41484d'
  inverse-surface: '#2b3137'
  inverse-on-surface: '#ecf1f9'
  outline: '#71787e'
  outline-variant: '#c1c7cd'
  surface-tint: '#356380'
  primary: '#32617d'
  on-primary: '#ffffff'
  primary-container: '#4c7a97'
  on-primary-container: '#fcfcff'
  inverse-primary: '#9fcced'
  secondary: '#47654e'
  on-secondary: '#ffffff'
  secondary-container: '#c9ebcd'
  on-secondary-container: '#4d6b53'
  tertiary: '#5b5c59'
  on-tertiary: '#ffffff'
  tertiary-container: '#747572'
  on-tertiary-container: '#fdfcf8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7e7ff'
  primary-fixed-dim: '#9fcced'
  on-primary-fixed: '#001e2e'
  on-primary-fixed-variant: '#194b67'
  secondary-fixed: '#c9ebcd'
  secondary-fixed-dim: '#aecfb2'
  on-secondary-fixed: '#04210e'
  on-secondary-fixed-variant: '#304d37'
  tertiary-fixed: '#e3e2df'
  tertiary-fixed-dim: '#c7c7c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#464744'
  background: '#f7f9ff'
  on-background: '#161c22'
  surface-variant: '#dde3eb'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
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
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  asymmetric-offset: 64px
---

## Brand & Style
The design system is built to evoke a sense of "professional warmth." It moves away from the clinical coldness often associated with pet care, instead leaning into a boutique, community-rooted aesthetic. The personality is expert yet approachable—the digital equivalent of a trusted neighbor who happens to be a master of their craft.

The design style is a blend of **Soft Minimalism** and **Modern Organic**. It utilizes a "tailor-made" layout philosophy, favoring bespoke asymmetric placements and organic shapes over rigid, blocky grids. This reflects the artisanal nature of grooming, where every pet receives individual attention. The visual response should be one of immediate calm, safety, and reliability.

## Colors
The palette is centered on "Calming Blue" and "Sage Green," colors scientifically noted for their soothing effect on animals and their association with organic health. 

- **Primary (Calming Blue):** Used for primary actions, links, and key brand moments. It anchors the professional side of the business.
- **Secondary (Sage Green):** Used for secondary buttons, success states, and botanical-inspired decorative elements.
- **Background (Warm Cream):** Replaces pure white to eliminate eye strain and provide a "living room" comfort level.
- **Typography (Dark Slate):** Provides high-contrast legibility without the harshness of true black, maintaining the sophisticated serif character.

## Typography
The typographic pairing establishes a "Heritage & Modernity" balance. **Source Serif 4** provides an authoritative, literary foundation that suggests years of experience and tradition. **Plus Jakarta Sans** offers a soft, rounded counterpoint for transactional and body content, ensuring the interface feels contemporary and easy to navigate.

Headlines should use tighter letter-spacing to appear more editorial. Body text maintains generous line-height to ensure accessibility for pet owners of all ages.

## Layout & Spacing
This design system rejects perfectly symmetrical layouts. It uses a **Flexible Asymmetric Grid**. Content blocks often shift 64px (the asymmetric-offset) off-center or overlap slightly with background decorative motifs to create a custom, scrapbooked feel.

- **Mobile:** Single column with 16px side margins. Cards span the full width minus margins.
- **Desktop:** 12-column grid. Key imagery should often break the grid, extending to the edge of the screen, while text remains contained.
- **Spacing Rhythm:** Based on an 8px scale. Use 48px or 64px of vertical padding between sections to maintain an airy, premium feel.

## Elevation & Depth
Depth is achieved through **Ambient Shadows** and organic layering. Shadows are never black; they are tinted with the Primary Blue at very low opacity (e.g., `rgba(93, 138, 168, 0.08)`).

1.  **Level 0 (Surface):** The Warm Cream background.
2.  **Level 1 (Cards):** Flat surfaces with a 1px Sage Green border or a very soft, diffused shadow to separate from the background.
3.  **Level 2 (Interaction):** Raised elements (hover states) utilize a slightly deeper shadow and a subtle scale increase (1.02x).
4.  **Motifs:** Decorative paw prints and fur-like curves should be placed at "Level -1," appearing as subtle watermarks or "ghost" patterns behind the content to add texture without clutter.

## Shapes
The shape language is dominated by **Roundedness**. There are no sharp 90-degree corners in this design system. This choice communicates safety and "pet-friendliness." 

Large containers and feature images should use `rounded-xl` (1.5rem) to mimic the soft curves of a well-groomed pet. Secondary elements like input fields and small buttons use `rounded-md` (0.5rem) for a more structured, functional appearance.

## Components
- **Buttons:** Primary buttons are pill-shaped with the Primary Blue background and white text. Secondary buttons use a Sage Green outline with a subtle cream fill.
- **Cards:** Feature "Service Cards" use a larger corner radius (24px). They should include a subtle organic fur-curve motif in the bottom corner.
- **Input Fields:** Softly rounded with a Warm Cream background and a Sage Green border that thickens on focus. Labels should always use the `label-md` typographic style.
- **Chips/Badges:** Used for pet categories (e.g., "Large Breed," "Sensitive Skin"). These are fully rounded (pill-shaped) with low-saturation versions of the brand colors.
- **Lists:** Service lists should use a custom "paw print" bullet point instead of standard dots.
- **Navigation:** The header should be transparent on scroll-up and transition to a semi-transparent Cream blur (Glassmorphism) when scrolling down, keeping the "airy" feel intact.
