I've completed the production-ready homepage for **The Fluffy Bus**. This design is tailor-made to transition the business from a Facebook-only presence to a professional, dedicated web platform while maintaining the warm, community-focused brand identity you established.

### Design Highlights:
- **Conversion-First Hero**: A bold, full-bleed hero section that immediately presents the core value proposition and the "Text to Book" primary action with the real business phone number.
- **Brand Storytelling**: Integrated the specific "Rainy days, muddy paws, happy dogs" voice into the About and Services sections to resonate with their existing Facebook community.
- **Service Clarity**: Dedicated cards for the Pick-up, Play, and Socialize workflow, emphasizing the unique "Happy, tired pups delivered home" promise.
- **Credibility Engine**: A prominent social proof section highlighting the 5-star review status to build immediate trust with new local clients.
- **Technical Specs**: Semantic HTML5 structure, responsive layout optimized for desktop and mobile, and a dedicated `#visit` section with the specific map slot requirement.

The website is ready for launch as a high-fidelity first impression for Myrtle Beach's favorite dog adventure bus!

---

---
name: Coastal Canine Adventure System
colors:
  surface: '#f4faff'
  surface-dim: '#cfdce4'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e9f6fd'
  surface-container: '#e3f0f8'
  surface-container-high: '#ddeaf2'
  surface-container-highest: '#d7e4ec'
  on-surface: '#111d23'
  on-surface-variant: '#4f4632'
  inverse-surface: '#263238'
  inverse-on-surface: '#e6f3fb'
  outline: '#827660'
  outline-variant: '#d4c5ab'
  surface-tint: '#785900'
  primary: '#785900'
  on-primary: '#ffffff'
  primary-container: '#ffc107'
  on-primary-container: '#6d5100'
  inverse-primary: '#fabd00'
  secondary: '#00658d'
  on-secondary: '#ffffff'
  secondary-container: '#3dbeff'
  on-secondary-container: '#004a69'
  tertiary: '#006e1c'
  on-tertiary: '#ffffff'
  tertiary-container: '#7ce17b'
  on-tertiary-container: '#006419'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf9e'
  primary-fixed-dim: '#fabd00'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5b4300'
  secondary-fixed: '#c6e7ff'
  secondary-fixed-dim: '#83cfff'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#004c6b'
  tertiary-fixed: '#94f990'
  tertiary-fixed-dim: '#78dc77'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005313'
  background: '#f4faff'
  on-background: '#111d23'
  surface-variant: '#d7e4ec'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Quicksand
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
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system embodies the spirit of an outdoor adventure, blending the professional reliability of a premium daycare service with the unbridled joy of a dog’s day at the beach. It targets busy pet parents in Myrtle Beach who value both the safety and the happiness of their dogs.

The visual style is **Soft-Modern & Playful**, leaning into high-legibility and tactile interfaces. It uses generous white space to balance the vibrant palette, ensuring the experience feels organized and trustworthy rather than chaotic. The emotional response is one of optimism, energy, and comfort—mimicking the feeling of a sunny morning trip to the park.

## Colors
The palette is inspired by the Myrtle Beach landscape and the iconic "Fluffy Bus" itself.

*   **Primary (Sunny Yellow):** Used for key branding moments, primary call-to-actions, and highlights. It represents the bus and the sun.
*   **Secondary (Sky Blue):** Used for interactive elements, links, and coastal-themed accents. 
*   **Tertiary (Earthy Green):** Used for success states, park-related content, and adventure indicators.
*   **Neutral (Dark Charcoal):** Reserved for high-contrast typography and structural borders to ensure WCAG AA accessibility standards are met.
*   **Base:** A clean white background keeps the "adventure" photography center stage, with light grey surfaces used to differentiate content blocks.

## Typography
The typography strategy pairs the friendly, rounded terminals of **Quicksand** with the modern, high-legibility structure of **Plus Jakarta Sans**.

Headlines should always use Quicksand to reinforce the playful "Fluffy" nature of the brand. For long-form text and technical details (booking times, pricing), Plus Jakarta Sans provides a professional, grounded feel. Tracking is slightly tightened on display sizes for a more cohesive "sticker" look, while body text maintains standard spacing for maximum readability.

## Layout & Spacing
The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

Spacing follows a strict 8px base unit. 
- **Internal Padding:** Use 16px or 24px for card internals to maintain a "breathable" feel.
- **Section Vertical Spacing:** Use 80px - 120px on desktop to separate "Daily Adventures" to prevent the UI from feeling cluttered.
- **Safe Areas:** Maintain a minimum 16px margin on mobile devices to ensure tap targets and text remain clear of screen edges.

## Elevation & Depth
This design system avoids heavy, realistic shadows in favor of **Tonal Layers** and **Soft Ambient Occlusion**.

*   **Level 0 (Base):** White (#FFFFFF).
*   **Level 1 (Cards/Containers):** Soft Sky Blue or Light Grey tint with a very subtle, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)).
*   **Level 2 (Interactive/Floating):** Use a slightly more defined shadow (0px 8px 30px rgba(0,0,0,0.1)) when an element is hovered or active.
*   **Overlays:** High-blur backdrops (20px) for modals to keep the focus on the adventure booking or dog profile details.

## Shapes
Shapes are defined by "Rounded" logic (8px default) to mirror the friendly brand personality.

*   **Small Components (Buttons/Inputs):** 8px radius.
*   **Medium Components (Cards/Modals):** 16px radius.
*   **Large Components (Hero Images/Sections):** 24px radius.
*   **Icons:** Contained within circular or squircle containers to maintain the soft, "fluffy" aesthetic.

## Components

### Buttons
Primary buttons use the Sunny Yellow base with Dark Charcoal text for maximum contrast. They feature a slight "pop" effect on hover (scaling 1.02x). Secondary buttons use the Sky Blue with a 2px stroke.

### Cards
"Adventure Cards" are the core of the system. They feature a 16px radius, a Level 1 elevation, and a 1px soft border (#E0E0E0). Photography within cards should always have a 12px internal radius.

### Input Fields
Forms use a soft grey fill (#F1F3F5) with an 8px radius. On focus, the border transitions to Sky Blue with a 2px stroke to provide clear visual feedback for pet owners.

### Chips & Badges
Used for dog personality traits (e.g., "High Energy," "Beach Lover"). These are pill-shaped with low-saturation backgrounds of the Primary/Secondary/Tertiary colors to keep the UI colorful but not distracting.

### Adventure Progress
A custom component for the "Daily Dog Adventure" tracker—a playful dotted line path (reminiscent of a map) using the Earthy Green to show the bus's progress throughout the day.
