I've designed a bespoke, editorial-grade homepage for **Fatback's Barbecue**, moving away from standard local-business templates to create a premium, memorable first impression.

### Key Design Decisions:
- **Visual Identity**: Established a "Smoky Industrial Editorial" aesthetic using a high-contrast palette of **Deep Charcoal**, **Smoked Amber**, and a refined **Paper Cream** background.
- **The Daily Board**: Reimagined the menu/offerings section as a high-density typographic list with thick rules, mimicking a traditional butcher's shop board rather than using generic cards.
- **Editorial Layout**: Balanced intentional density in the menu with generous whitespace in the "Our Story" section, utilizing bold, condensed typography (Anton) to reflect the rugged, authentic nature of BBQ.
- **Memorable Motif**: Integrated 2px solid borders and asymmetrical layout blocks as a repeating visual theme, ensuring the site feels custom-crafted.
- **Functionality**: Included a sticky navigation for quick access to ordering and contact, a specialized catering inquiry form, and the required `#visit` map placeholder.

The design is fully responsive and built with production-ready semantic HTML, CSS, and interactive JavaScript for smooth scrolling and form validation.

How would you like to refine this design? We could explore adding motion effects to the smoke textures or perhaps building out a dedicated catering sub-page.

---

---
name: Smoky Industrial Editorial
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#444748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#795553'
  on-secondary: '#ffffff'
  secondary-container: '#ffcfcb'
  on-secondary-container: '#7a5653'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#c76c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#eabcb8'
  on-secondary-fixed: '#2e1413'
  on-secondary-fixed-variant: '#5f3e3c'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  headline-xl:
    fontFamily: Anton
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 90%
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 100%
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 100%
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 110%
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 150%
  label-caps:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 120%
    letterSpacing: 0.1em
  price-display:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 100%
spacing:
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
  gutter: 24px
  margin-edge: 40px
---

## Brand & Style

The design system establishes a premium, "Smoky Industrial Editorial" identity for a local BBQ legend. It captures the raw grit of a pitmaster’s workspace and elevates it with the refined pacing of a high-end food magazine. The brand personality is authoritative, seasoned, and unapologetically bold.

The style leans into a **Modern Industrial** aesthetic with **Editorial** influences:
- **High-Contrast Typography:** Massive, rugged headlines paired with utilitarian body text.
- **Asymmetrical Layouts:** Avoiding standard card grids in favor of intentional density and overlapping elements.
- **Tactile Boundaries:** Heavy 2px–4px borders that evoke butcher shop signage and industrial steel framing.
- **Negative Space:** Generous "Paper Cream" whitespace to allow high-quality photography of smoked meats to breathe.

## Colors

The palette is rooted in the materials of the craft: soot, wood, flame, and parchment.

- **Deep Charcoal (#1A1A1A):** Used for primary text, heavy borders, and structural elements. It provides the "ink" on the page.
- **Paper Cream (#F9F7F2):** The universal background color. It avoids the clinical feel of pure white, providing a warm, organic texture reminiscent of butcher paper.
- **Smoked Amber (#D97706):** An accent color used sparingly for calls to action, highlights, and status indicators. It represents the glow of the embers.
- **Burnt Umber (#4A2C2A):** Used for secondary surfaces, subtle textures, and decorative accents to add depth without losing the industrial vibe.

## Typography

The typography strategy relies on the tension between the "Rugged Display" and the "Technical Utility."

- **Headlines:** Use **Anton** for its heavy, condensed, and impactful presence. It should feel like it was stamped onto a wooden crate. In editorial sections, use extreme scale (84px+) to create visual anchors.
- **Body:** Use **Hanken Grotesk** for all long-form content. Its clean, contemporary lines provide a necessary "modern" counter-balance to the gritty headlines.
- **Labels & Data:** Use **Space Mono** for prices, nutritional info, or menu categories. This reinforces the industrial/utilitarian butcher shop feel.

## Layout & Spacing

This design system eschews standard bootstrap-style grids in favor of a **Modular Editorial Layout**.

- **Density vs. Air:** Menu sections use high density with tight vertical spacing (stack-sm) and 2px dividers to mimic vintage price lists. Narrative sections (About, Process) use expansive margins (stack-xl) to evoke luxury.
- **Asymmetry:** Content blocks should be offset. For example, a headline may start on column 2 of a 12-column grid while the body text starts on column 5.
- **Borders as Structure:** Use 2px–4px Deep Charcoal borders to define sections instead of background color changes. 
- **Breakpoints:**
  - **Desktop (1280px+):** 12-column grid, 40px outer margins.
  - **Tablet (768px):** 6-column grid, 24px outer margins.
  - **Mobile (375px):** 2-column grid, 16px outer margins. Headlines scale down significantly to maintain legibility.

## Elevation & Depth

Depth is achieved through **Layered Flatness** rather than shadows. 

- **Tonal Stacking:** Use "Burnt Umber" surfaces behind "Paper Cream" content blocks to create a physical sense of stacked paper or boards.
- **Heavy Outlines:** All interactive elements and containers use a solid 2px Deep Charcoal border. 
- **No Shadows:** Shadows are strictly prohibited. The "weight" of the UI comes from thickness of lines and opacity of the Smoked Amber accents.
- **Smoke Textures:** Apply a low-opacity (5-10%) grain or smoke texture overlay on the Burnt Umber or Deep Charcoal backgrounds to add organic grit.

## Shapes

The shape language is **Strictly Geometric and Sharp**.

- **Zero Radius:** All buttons, cards, and input fields must have a 0px border radius. This reinforces the industrial, "cut-with-a-cleaver" aesthetic.
- **Thick Strokes:** Use a consistent 2px stroke for standard components and a 4px stroke for primary call-to-action buttons or featured "Hero" sections.
- **Angled Accents:** Occasional 45-degree corner "cuts" can be used on decorative elements to mimic industrial metalwork.

## Components

- **Buttons:** Primary buttons are solid Deep Charcoal with Paper Cream text in "Label-Caps" typography. Secondary buttons are Paper Cream with a 2px Deep Charcoal border. Interaction state: Fill with Smoked Amber on hover.
- **The "Butcher List":** Menu items are styled as a list with a 2px bottom border. The item name is in Hanken Grotesk Bold, and the price is in Anton (Price-Display) aligned to the right.
- **Input Fields:** Sharp 0px corners, 2px Deep Charcoal border. Labels use Space Mono in all caps above the field.
- **Cards:** No standard cards. Instead, use "Framed Sections"—large 2px charcoal boxes that contain imagery and text, often with the headline overlapping the top border.
- **Chips/Badges:** Use Space Mono, white text on Burnt Umber background, 0px radius. Used for tags like "Award Winning" or "Sold Out."
- **Checkboxes:** Square, 2px border, filled with a Deep Charcoal "X" when selected, rather than a checkmark.
