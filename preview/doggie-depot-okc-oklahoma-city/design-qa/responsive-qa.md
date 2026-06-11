# Responsive QA — doggie-depot-okc-oklahoma-city

**Result:** FAIL

## Viewports checked
- mobile: 390×844
- tablet: 768×1024
- desktop: 1280×900

## Notes
- mobile (390×844): scroll=ok, h1≈9 lines, smallTargets=11
- tablet (768×1024): scroll=ok, h1≈8 lines, smallTargets=0
- desktop (1280×900): scroll=ok, h1≈5 lines, smallTargets=0

## Errors (1)
- mobile: body text below 12px

## Warnings (5)
- mobile: H1 may wrap to 9 lines
- mobile: hero taller than viewport — CTA may be below fold
- mobile: 11 tap targets under 44px
- tablet: H1 may wrap to 8 lines
- desktop: H1 may wrap to 5 lines

_Auto-run after build. Fix horizontal overflow and tiny text before deploy._
