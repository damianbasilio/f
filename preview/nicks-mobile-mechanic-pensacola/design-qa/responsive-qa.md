# Responsive QA — nicks-mobile-mechanic-pensacola

**Result:** FAIL

## Viewports checked
- mobile: 390×844
- tablet: 768×1024
- desktop: 1280×900

## Notes
- mobile (390×844): scroll=ok, h1≈0 lines, smallTargets=18
- tablet (768×1024): scroll=ok, h1≈8 lines, smallTargets=0
- desktop (1280×900): scroll=ok, h1≈8 lines, smallTargets=0

## Errors (1)
- mobile: body text below 12px

## Warnings (4)
- mobile: hero taller than viewport — CTA may be below fold
- mobile: 18 tap targets under 44px
- tablet: H1 may wrap to 8 lines
- desktop: H1 may wrap to 8 lines

_Auto-run after build. Fix horizontal overflow and tiny text before deploy._
