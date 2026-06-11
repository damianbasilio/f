I've designed and built a bespoke, editorial-grade homepage for **El Tio Mexican Food Truck**. 

### Design Highlights:
*   **Unique Visual Identity:** I've moved away from standard "food truck" templates in favor of a premium, editorial layout dubbed the "Oaxaca Sun" style. This uses a bold palette of terracotta red, marigold yellow, and charcoal against a parchment background.
*   **Asymmetrical Composition:** The sections use staggered grids, overlapping images, and thick borders to create a memorable, high-end first impression that feels designed, not assembled.
*   **Strategic Sections:**
    *   **Hero:** A high-impact "Sabor de Corazón" introduction with artisanal image treatments.
    *   **The Signature Edit:** A curated showcase of flagship items like Quesabirria, avoiding generic menus in favor of a "collection" feel.
    *   **Heritage Storytelling:** A dedicated "The Soul of El Tio" section to build credibility through their Eugene roots and family history.
    *   **Functional Footer & Visit:** Includes a clean location section with the required map slot and a fully styled contact form for catering inquiries.

The site is production-ready with semantic HTML, responsive CSS, and smooth scrolling interactions.

---

---
name: El Tio Mexican Food Truck
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#7e5700'
  on-secondary: '#ffffff'
  secondary-container: '#feb300'
  on-secondary-container: '#6a4800'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b0900'
  on-tertiary-container: '#e05832'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdeac'
  secondary-fixed-dim: '#ffba35'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a1'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#882000'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: '900'
    lineHeight: 88px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  price-display:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 24px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  border-heavy: 3px
  border-standard: 1px
---

## Brand & Style

The brand personality for this design system is **Premium Editorial**. It moves away from the transient nature of street food and positions the product as a culinary authority. The aesthetic is a fusion of **Modern Brutalism** and **High-End Editorial**, evoking a sense of heritage through high-contrast visuals and intentional structural tension.

The target audience consists of food enthusiasts and urban professionals in Eugene who value authenticity and craft. The UI should feel substantial, tactile, and curated. To achieve this, the design system utilizes thick borders, asymmetric compositions, and overlapping layers to create a sense of physical "assembly," mirroring the preparation of artisanal food.

## Colors

The "Oaxaca Sun" palette is designed for high visual impact and legible hierarchy.
- **Deep Charcoal (#1A1A1A):** Used for primary typography, thick borders, and heavy structural elements. It provides the grounding force of the design.
- **Vibrant Marigold (#FFB400):** Reserved for primary actions, highlights, and critical emphasis. It represents the energy of the sun and corn.
- **Terracotta Red (#D14D28):** Used for secondary accents, special labels, and status indicators. It adds earthy warmth.
- **Parchment (#F9F7F2):** The universal background color. It should be treated as a physical paper surface, providing a soft, high-end contrast to the sharp black ink of the charcoal.

## Typography

The typography strategy relies on the tension between the classic, high-contrast **Playfair Display** and the geometric, urban **Montserrat**.

- **Headlines:** Use Playfair Display for all major headings. Large display sizes should use tighter tracking to emphasize the editorial feel.
- **Body:** Use Montserrat for legibility and a modern feel. The line height is intentionally generous to maintain a clean, premium reading experience.
- **Labels:** Small labels and navigational elements use Montserrat in all caps with increased letter spacing (0.1em) to mimic high-end fashion mastheads.
- **Hierarchy:** Dramatic scale shifts are encouraged. Do not be afraid of extremely large display type overlapping smaller elements.

## Layout & Spacing

This design system utilizes an **Asymmetrical Editorial Grid**. Avoid traditional centered layouts or standard card rows. 

- **Grid Model:** A 12-column fluid grid for desktop with 24px gutters. Elements should intentionally "break" the grid—for example, an image might span columns 1-7 while text begins on column 6, creating an overlapping effect.
- **Margins:** High-density content should be framed by wide external margins (64px on desktop) to evoke the feel of a printed broadsheet or premium magazine.
- **Overlaps:** Use negative margins to pull secondary elements (like price tags or labels) over the edges of images or containers.
- **Dividers:** Use thick 3px Charcoal (#1A1A1A) borders to separate major sections. Use 1px Charcoal borders for internal element separation.

## Elevation & Depth

Depth in this system is achieved through **Physical Layering** rather than shadows. 

- **Tonal Layers:** Use the Parchment background as the base. Use Charcoal containers for high-contrast callouts.
- **No Shadows:** Avoid Gaussian shadows entirely. Depth is signaled by the stacking order of elements and the thickness of their borders.
- **Subtle Texture:** Apply a very low-opacity paper grain texture to the Parchment background to reinforce the physical, editorial narrative.
- **Geometric Motifs:** Use Mexican textile-inspired geometric patterns as a "zero-elevation" background layer. These should be rendered in a subtle tint of the Parchment or very thin Charcoal lines to provide visual interest without competing with content.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—buttons, cards, input fields, and images—must have hard 90-degree corners. This reinforces the brutalist, architectural feel of the brand. Rounded corners would soften the "bold and authentic" intent and should be avoided entirely. Geometric accents (triangles, diamonds) can be used as decorative spacers or list bullets to pay homage to Oaxacan craftsmanship.

## Components

- **Buttons:** Rectangular with a 2px Charcoal border. The "Primary" state is a Marigold fill with Charcoal text. "Secondary" is an outline-only style. On hover, buttons should shift their position slightly (e.g., 2px up and left) with a heavy "drop-shadow" that is actually a solid Charcoal rectangle behind it, creating a tactile 3D effect.
- **Menu Items (Cards):** Avoid standard cards. Use horizontal rows separated by 1px Charcoal lines. Place the dish name in Playfair Display on the left and the price in Montserrat on the right. Overlap a small portion of the product photo onto the text area.
- **Chips/Labels:** Use Terracotta Red backgrounds with white text, or Charcoal backgrounds with Marigold text. Shapes must remain square.
- **Input Fields:** Simple 1px bottom-border only (ink-on-paper style). Labels stay above the line in Montserrat All-Caps.
- **Navigation:** Use a "sticky" vertical bar on large screens or a minimalist top bar. Navigation items are Charcoal text with a Marigold strike-through or underline on active state.
- **Pattern Dividers:** Full-width bands featuring repeating geometric textile patterns in Charcoal and Marigold to separate long-form content.
