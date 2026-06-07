# Mobile layout — madame-matisse-santa-fe

**Result:** PASS

## Autofix applied
- refreshed map layout CSS
- injected mobile safety CSS
- pulled in decorative absolute offsets
- body overflow-x-clip
- section overflow-hidden for decorative layers
- responsive horizontal margins (8 blocks)
- map-slot: removed h-full (use aspect-ratio fill)
- map-shell: removed tall min-height wrapper

## Viewports
- mobile (390px): overflow=no, tinyText=no, navToggle=ok, width=ok
- tablet (768px): overflow=no, tinyText=no, navToggle=ok, width=ok
- desktop (1280px): overflow=no, tinyText=no, navToggle=ok, width=ok

## Errors (0)
- none


_Auto-run in post-build. Fixes overflow-x, nav toggle, and map slot gaps._
