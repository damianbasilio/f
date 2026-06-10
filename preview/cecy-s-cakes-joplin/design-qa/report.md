# Design QA — cecy-s-cakes-joplin

**Result:** NEEDS FIX

**Craft warnings:** 1 (see craft section)

## Skills run

| Skill | Status |
| ----- | ------ |
| craft | pass |
| emil | pass |
| taste | pass |
| audit | fail |
| harden | pass |
| polish | pass |

## Fixes applied

- normalize: single DOCTYPE
- emil: added :active press feedback
- craft: injected brief fonts (Instrument Serif / Instrument Sans)
- harden: preview-only form behavior (removed fake send UX)
- harden: mobile nav aria labels

## Findings

### craft

- OK: No AI purple gradient
- OK: No fake ratings/hype
- OK: No obvious buzzwords
- OK: Layout: no excessive 3-col grids
- OK: Typography: brand fonts referenced
- WARN: Ghost-card pattern (1px border + heavy shadow) detected
- OK: Eyebrow count: 0
- OK: No transition: all
- OK: Reduced motion: present
- OK: Button :active feedback
- OK: Hero H1 length reasonable

### emil

- Motion: ease-out curves, no transition:all, :active scale(0.97), reduced-motion

### taste

- Eyebrow discipline: 0 uppercase-tracked labels
- Anti-slop: no em dashes, layout families from Stitch brief

### audit

- FAIL: stock or Stitch AI image URL still present
- Mockup notice: popup present
- Credibility section: present
- Map: embedded for location
- WARN: Tailwind CDN (Stitch export limitation — accepted in shipped mockups)
- WARN: Material Symbols icon font (Stitch export limitation — accepted in shipped mockups)
- FAIL: Stitch AI placeholder images still present after images:apply

### harden

- Forms: preview-only, no fake submit success
- Nav: aria-expanded on toggle where applicable

### polish

- Document normalized, meta viewport verified

_Auto-run after every `stitch:build`. Manual browser pass still recommended before outreach._
