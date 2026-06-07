I've designed a bespoke homepage for **NamasteWisconsin** that breaks away from traditional wellness aesthetics in favor of a premium **Industrial/Utilitarian** archetype.

### Design Rationale:
*   **Structural Rigidity:** The layout is defined by a heavy 2px border system and a strict grid, reflecting the "Rigid Discipline" and "Architectural Alignment" mentioned in the brand copy.
*   **Typography:** I paired the authoritative **Playfair Display** serif for headlines with a high-contrast **monospace** utility font. This creates an editorial, "technical manual" feel that positions the studio as a high-end, disciplined practice.
*   **Tabular Information:** Rather than using standard cards, I implemented class details and schedules as **tabular data blocks**. This reinforces the utilitarian theme while providing high clarity and a unique visual rhythm.
*   **Visual Motif:** The use of section indexing (e.g., `[01]`, `[02]`) and coordinate metadata adds a layer of "geographic precision" to the brand identity.

Would you like to explore a more fluid "Naturalist" direction next, or should we refine the specific class descriptions for the Practice section?

---

---
name: NamasteWisconsin Design System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#121212'
  on-primary-container: '#7e7d7d'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#b7cdac'
  on-tertiary: '#23351e'
  tertiary-container: '#051604'
  on-tertiary-container: '#6e8366'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#d2e9c7'
  tertiary-fixed-dim: '#b7cdac'
  on-tertiary-fixed: '#0e200a'
  on-tertiary-fixed-variant: '#394c33'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-num:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: '1.0'
  utility-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  border-width: 2px
---

## Brand & Style
The design system for this brand bridges the gap between the discipline of industrial utility and the serenity of high-end wellness. It rejects the soft, flowing clichés of the yoga industry in favor of a "Structured Zen" aesthetic—one that emphasizes strength, alignment, and deliberate practice.

The visual language is rooted in **Industrial Minimalism** and **Brutalist** editorial design. It utilizes high-contrast interfaces, rigid structural hierarchies, and architectural motifs to evoke an atmosphere of premium exclusivity. The emotional response is one of grounded authority and focused calm.

**Key Principles:**
- **Rigid Discipline:** Layouts follow a visible, strict grid that mirrors the alignment found in yoga practice.
- **Utilitarian Elegance:** Functionality is laid bare. Technical metadata, monospace labels, and numbered sections provide a "work-in-progress" architectural feel executed with luxury materials.
- **Editorial Whitespace:** Generous negative space ensures the heavy borders and dark tones do not feel cramped, maintaining a high-end, gallery-like experience.

## Colors
The palette is dominated by a deep, monochromatic foundation to create a "sanctuary" effect, punctuated by a single organic accent.

- **Primary (Deep Charcoal):** Used for the vast majority of surfaces and backgrounds. It provides a heavy, grounded weight to the UI.
- **Secondary (Stark White):** Used for high-contrast typography and prominent structural borders. It creates an "ink-on-paper" feel against the charcoal.
- **Tertiary (Wisconsin Moss):** A desaturated, earthy green. Used sparingly for calls to action, active states, and success indicators. It represents the only "living" element in the industrial landscape.
- **Neutral:** Mid-tone charcoals and greys used exclusively for subtle grid lines and secondary metadata.

## Typography
The typography strategy relies on a sharp juxtaposition between the classical and the technical.

- **Headlines:** Use **Playfair Display**. It should be set with tight leading and slight negative tracking for a commanding, editorial presence. Headlines are the "soul" of the design.
- **Body Text:** Use **Hanken Grotesk**. This provides a neutral, highly legible contemporary base that balances the intensity of the other two faces.
- **Utility & Metadata:** Use **JetBrains Mono**. All technical data, labels, timestamps, and navigation elements should use monospace. This reinforces the utilitarian/industrial theme. 
- **Section Numbering:** Every major section should be prefaced with a `label-num` (e.g., 01, 02) to simulate an architectural blueprint or a technical manual.

## Layout & Spacing
The layout is governed by a **Rigid Grid** system. All components must align to a visible or perceived 8px baseline.

- **Grid Lines:** Use subtle 1px neutral borders to define the 12-column grid structure in the background, especially on large desktop views.
- **Heavy Framing:** Major UI containers (Cards, Modals, Header) are defined by a **2px Stark White border**.
- **Tabular Alignment:** Information should be presented in a tabular format wherever possible. Avoid "floating" elements; everything should be anchored to a border or a grid line.
- **Padding:** Use extreme internal padding (minimum 32px for cards) to prevent the heavy borders from feeling suffocating.

## Elevation & Depth
This design system avoids shadows and traditional depth metaphors. Depth is communicated through **Layered Outlines** and **High-Contrast Overlays**.

- **Flat Stack:** Elements do not "float" above the surface with shadows. Instead, they "stack" using 2px borders. A modal appears as a bordered box directly on top of the grid.
- **Tonal Stepping:** Use the `neutral_color_hex` to create "inset" areas or secondary sections, but keep them strictly within the 2px border framework.
- **Active States:** Instead of elevation, active states are indicated by a solid fill of the `tertiary_color_hex` (Wisconsin Moss) or by inverting the colors (Stark White background with Charcoal text).

## Shapes
The shape language is strictly **Sharp (0px)**. 

To maintain the industrial and architectural integrity of the design, no rounded corners are permitted. All buttons, input fields, cards, and image containers must have hard 90-degree angles. This reinforces the "Strength" and "Structure" pillars of the brand.

## Components

### Buttons
- **Primary:** Stark White background, Charcoal text, JetBrains Mono (Bold), all-caps. No rounding.
- **Secondary:** Transparent background, 2px Stark White border, Stark White text.
- **Ghost:** Monospace text with a "Wisconsin Moss" prefix symbol (e.g., `[+] VIEW MORE`).

### Input Fields
- **Style:** 2px border on the bottom only, or a full 2px rectangular box.
- **Labels:** Always placed above the input in `label-mono` style.
- **Focus State:** Border color changes to Wisconsin Moss.

### Cards
- **Structure:** 2px Stark White border, no shadow.
- **Header:** Often includes a top-right `label-num` to denote sequence.
- **Content:** Information is separated by 1px horizontal neutral lines, creating a "data table" look.

### Chips & Tags
- **Style:** Small, rectangular boxes with 1px borders. Text is always in JetBrains Mono.
- **Usage:** Used for categories like "Vinyasa," "Advanced," or "60 MIN."

### Lists
- Lists should mimic a ledger. Each item is separated by a 1px border. Use monospace numbers for bullet points (01., 02., 03.).

### Progress Indicators
- Use solid blocks instead of smooth bars. A "loading" or "progress" bar should look like a series of filled segments, maintaining the industrial aesthetic.
