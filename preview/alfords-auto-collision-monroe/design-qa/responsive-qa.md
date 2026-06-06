# Responsive QA — alfords-auto-collision-monroe

**Result:** FAIL

## Viewports checked
- mobile: 390×844
- tablet: 768×1024
- desktop: 1280×900

## Notes
- mobile (390×844): scroll=ok, h1≈4 lines, smallTargets=7
- tablet (768×1024): scroll=overflow, h1≈2 lines, smallTargets=0
- desktop (1280×900): scroll=ok, h1≈2 lines, smallTargets=0

## Errors (1)
- tablet: horizontal overflow at 768px

## Warnings (2)
- mobile: H1 may wrap to 4 lines
- mobile: 7 tap targets under 44px

_Auto-run after build. Fix horizontal overflow and tiny text before deploy._
