# Responsive QA — erection-metal-works-arthur-city

**Result:** FAIL

## Viewports checked
- mobile: 390×844
- tablet: 768×1024
- desktop: 1280×900

## Notes
- mobile (390×844): scroll=overflow, h1≈6 lines, smallTargets=8
- tablet (768×1024): scroll=ok, h1≈6 lines, smallTargets=0
- desktop (1280×900): scroll=ok, h1≈3 lines, smallTargets=0

## Errors (2)
- mobile: horizontal overflow at 390px
- mobile: body text below 12px

## Warnings (3)
- mobile: H1 may wrap to 6 lines
- mobile: 8 tap targets under 44px
- tablet: H1 may wrap to 6 lines

_Auto-run after build. Fix horizontal overflow and tiny text before deploy._
