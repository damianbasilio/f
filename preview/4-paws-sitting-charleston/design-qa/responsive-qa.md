# Responsive QA — 4-paws-sitting-charleston

**Result:** FAIL

## Viewports checked
- mobile: 390×844
- tablet: 768×1024
- desktop: 1280×900

## Notes
- mobile (390×844): scroll=ok, h1≈6 lines, smallTargets=12
- tablet (768×1024): scroll=ok, h1≈3 lines, smallTargets=0
- desktop (1280×900): scroll=ok, h1≈5 lines, smallTargets=0

## Errors (1)
- mobile: body text below 12px

## Warnings (4)
- mobile: H1 may wrap to 6 lines
- mobile: hero taller than viewport — CTA may be below fold
- mobile: 12 tap targets under 44px
- desktop: H1 may wrap to 5 lines

_Auto-run after build. Fix horizontal overflow and tiny text before deploy._
