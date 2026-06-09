# Design QA — red-hawks-mobile-mechanics-st-louis

**Result:** NEEDS FIX

**Craft warnings:** 1 (see craft section)

## Skills run

| Skill | Status |
| ----- | ------ |
| craft | fail |
| emil | pass |
| taste | pass |
| audit | pass |
| harden | pass |
| polish | pass |

## Fixes applied

- normalize: single DOCTYPE
- craft: fixed 2 broken hash anchor(s)
- harden: preview-only form behavior (removed fake send UX)
- harden: mobile nav aria labels

## Findings

### craft

- OK: No AI purple gradient
- FAIL: Fake ratings or hype copy detected
- OK: No obvious buzzwords
- OK: Layout: no excessive 3-col grids
- OK: Typography: brand fonts referenced
- WARN: Ghost-card pattern (1px border + heavy shadow) detected
- OK: Eyebrow count: 1
- OK: No transition: all
- OK: Reduced motion: present
- OK: Button :active feedback
- OK: Hero H1 length reasonable

### emil

- Motion: ease-out curves, no transition:all, :active scale(0.97), reduced-motion

### taste

- Eyebrow discipline: 1 uppercase-tracked labels
- Anti-slop: no em dashes, layout families from Stitch brief

### audit

- Images: no stock/aida URLs in HTML
- Mockup notice: popup present
- Credibility section: present
- Map: embedded for location
- WARN: Tailwind CDN (Stitch export limitation — accepted in shipped mockups)
- WARN: Material Symbols icon font (Stitch export limitation — accepted in shipped mockups)

### harden

- Forms: preview-only, no fake submit success
- Nav: aria-expanded on toggle where applicable

### polish

- Document normalized, meta viewport verified

_Auto-run after every `stitch:build`. Manual browser pass still recommended before outreach._
