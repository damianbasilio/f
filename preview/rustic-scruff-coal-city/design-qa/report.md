# Design QA — rustic-scruff-coal-city

**Result:** NEEDS FIX

## Skills run

| Skill | Status |
| ----- | ------ |
| emil | pass |
| taste | pass |
| audit | fail |
| harden | pass |
| polish | pass |

## Fixes applied

- normalize: single DOCTYPE
- emil: added :active press feedback
- harden: preview-only form behavior (removed fake send UX)
- harden: mobile nav aria labels

## Findings

### emil

- Motion: ease-out curves, no transition:all, :active scale(0.97), reduced-motion

### taste

- Eyebrow discipline: 5 uppercase-tracked labels
- Anti-slop: no em dashes, layout families from Stitch brief

### audit

- FAIL: stock or Stitch AI image URL still present
- Banner: present
- WARN: missing #credibility
- Map: embedded for location
- WARN: Tailwind CDN (Stitch export limitation — accepted in shipped mockups)
- WARN: Material Symbols icon font (Stitch export limitation — accepted in shipped mockups)
- FAIL: Stitch AI placeholder images still present after images:apply
- FAIL: Fake star ratings or unverifiable superlatives

### harden

- Forms: preview-only, no fake submit success
- Nav: aria-expanded on toggle where applicable

### polish

- Document normalized, meta viewport verified

_Auto-run after every `stitch:build`. Manual browser pass still recommended before outreach._
