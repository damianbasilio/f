I've completed the bespoke, editorial-style homepage for Nicole's Pet Services LLC. 

### Design Rationale:
- **Visual Identity**: Developed 'The Modern Guardian' aesthetic, using a warm palette of terracotta and charcoal on parchment to convey both professional authority and domestic warmth.
- **Editorial Layout**: Moved away from generic business grids in favor of an asymmetrical, whitespace-heavy layout that positions the business as a premium, boutique service rather than a standard utility.
- **Typography**: Used a high-contrast serif for headings to establish a sophisticated brand voice, balanced with a highly readable sans-serif for service details.
- **Memorable Motif**: Integrated soft-cornered image frames and a distinctive 'Connect' section that merges the contact form with the physical location details.
- **Clarksville Local Focus**: The copy and imagery are centered on the Clarksville community, emphasizing the business's role as a trusted local guardian.

The code is fully responsive, semantic, and includes the specific map container and contact validation UI as requested.

---

---
name: The Modern Guardian
colors:
  surface: '#fcf8f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#434748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747879'
  outline-variant: '#c4c7c8'
  surface-tint: '#5b5f60'
  primary: '#181c1d'
  on-primary: '#ffffff'
  primary-container: '#2d3132'
  on-primary-container: '#95999a'
  inverse-primary: '#c4c7c8'
  secondary: '#974822'
  on-secondary: '#ffffff'
  secondary-container: '#ff996d'
  on-secondary-container: '#77300b'
  tertiary: '#111f15'
  on-tertiary: '#ffffff'
  tertiary-container: '#263429'
  on-tertiary-container: '#8c9c8e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e3e4'
  primary-fixed-dim: '#c4c7c8'
  on-primary-fixed: '#181c1d'
  on-primary-fixed-variant: '#434748'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb597'
  on-secondary-fixed: '#360f00'
  on-secondary-fixed-variant: '#78310c'
  tertiary-fixed: '#d6e7d7'
  tertiary-fixed-dim: '#bacbbc'
  on-tertiary-fixed: '#111f15'
  on-tertiary-fixed-variant: '#3c4a3f'
  background: '#fcf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
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
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
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
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system embodies "The Modern Guardian," a persona that balances professional expertise with the warmth of a local caregiver. The brand targets discerning pet owners who view their animals as family and seek a "boutique" level of service that feels both premium and deeply personal.

The visual style is **Editorial Minimalism**. It leverages high-contrast typography and a generous use of whitespace to create a calm, sophisticated atmosphere. Unlike standard service platforms, this design system utilizes organic, non-linear section transitions and overlapping elements to mimic the fluid, natural movement of animals and the Tennessee landscape. The result is a digital experience that feels curated, trustworthy, and distinctly high-end.

## Colors
The palette, "Tennessee Earth & Sky," is grounded in natural tones that evoke stability and warmth.

*   **Deep Charcoal (#2D3132):** Used for primary typography and structural elements. It provides the "Guardian" weight and authority.
*   **Rich Terracotta (#D97B51):** The primary action color. It represents warmth, energy, and the red clay of the earth. Use for CTAs and key highlights.
*   **Soft Parchment (#F9F7F2):** The universal background. It is softer than pure white, reducing eye strain and providing a premium, paper-like editorial feel.
*   **Muted Sage (#8A9A8C):** A secondary accent used for success states, natural category tags, or subtle background deviations.

## Typography
The typography strategy relies on the tension between the expressive **Playfair Display** and the functional **Inter**.

Headlines should be treated as editorial elements. Use the `display-lg` style for hero sections with tight letter spacing to emphasize the high-contrast serifs. Body text uses `Inter` with generous line height (1.6) to ensure maximum readability and a spacious, airy feel. Labels and small captions should use increased letter spacing and uppercase styling to provide a modern, organized contrast to the fluid headlines.

## Layout & Spacing
The layout follows a **fluid grid** model with significant vertical breathing room. 

*   **Section Transitions:** Avoid straight horizontal lines between sections. Use subtle, organic "S-curves" or large-scale overlapping shapes (e.g., a Parchment container partially overlapping a Sage background) to maintain an editorial flow.
*   **Whitespace:** Use a `section-gap` of 120px on desktop to separate primary narratives. This prevents the "cluttered service app" look and promotes a calm browsing experience.
*   **Grid:** A 12-column grid on desktop with wide 64px outer margins. On mobile, transition to a single column with 20px margins, ensuring that Serif headlines remain the focal point.

## Elevation & Depth
This design system avoids heavy shadows in favor of **Tonal Layering** and **Subtle Outlines**. 

Depth is achieved through the physical metaphor of stacked paper. Most cards and containers should be flat against the Parchment background, distinguished by a fine 1px border in a slightly darker shade of Parchment or a very low-opacity Charcoal. 

When interaction is required (e.g., hovering over a service card), use a "Soft Ambient Shadow"—a very wide, low-opacity (5-8%) Charcoal blur that suggests the element is gently lifting off the page. Overlapping images should use different Z-index levels to create a sense of collage rather than digital windows.

## Shapes
The shape language is defined by **"Soft-Cornered Organicism."** 

Standard UI components like buttons and input fields use a consistent `0.5rem` (Rounded) corner radius to feel approachable. However, image frames and large decorative containers should feature asymmetrical rounding (e.g., 80px on the top-left and 12px on the other corners) or true organic blob-like masks. This contrast between "structured" functional elements and "fluid" visual elements reinforces the professional-yet-natural brand identity.

## Components

*   **Buttons:** Primary buttons are Solid Terracotta with Charcoal text for high contrast. They should feature a slightly wider horizontal padding (2.5x the vertical padding) to appear more "editorial." Secondary buttons are Charcoal outlines with no fill.
*   **Cards:** Use the Parchment background for card surfaces with a 1px #2D3132 (at 10% opacity) border. Images within cards should always use the "soft-cornered" mask on at least two diagonal corners.
*   **Chips/Tags:** Use the Muted Sage palette for service tags (e.g., "Dog Walking," "Overnight Stay"). These are pill-shaped and use the `label-md` typography.
*   **Input Fields:** Minimalist design with a bottom-only border in Charcoal. When focused, the border transitions to Terracotta. Use `Inter` for all placeholder and input text.
*   **Lists:** Service lists should be punctuated by custom organic bullets or small, stylized icons of pet silhouettes in Charcoal.
*   **Non-Linear Elements:** Floating "Review" bubbles that break the grid and overlap two different section backgrounds, adding to the curated, scrapbook-like aesthetic.
