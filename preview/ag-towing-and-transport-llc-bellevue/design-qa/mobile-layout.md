# Mobile layout — ag-towing-and-transport-llc-bellevue

**Result:** PASS

## Autofix applied
- refreshed map layout CSS
- injected mobile safety CSS
- pulled in decorative absolute offsets
- body overflow-x-clip
- section overflow-hidden for decorative layers
- responsive horizontal margins (1 blocks)
- nav min-width + tighter mobile gap
- nav brand truncate on mobile
- nav toggle aria-label
- map-slot: removed h-full (use aspect-ratio fill)
- map-shell: removed tall min-height wrapper

## Viewports
- mobile (390px): overflow=no, tinyText=no, navToggle=ok, width=ok
- tablet (768px): overflow=no, tinyText=no, navToggle=ok, width=ok
- desktop (1280px): overflow=no, tinyText=no, navToggle=ok, width=ok

## Errors (0)
- none


_Auto-run in post-build. Fixes overflow-x, nav toggle, and map slot gaps._
