# Mobile layout — 209-broadway-diagonal

**Result:** PASS

## Autofix applied
- refreshed map layout CSS
- map-slot: removed h-full (use aspect-ratio fill)
- map iframe: eager load (was lazy)
- map iframe: fetchpriority high
- preconnect https://www.google.com
- preconnect https://maps.googleapis.com
- preconnect https://maps.gstatic.com
- injected mobile safety CSS
- refreshed map layout CSS

## Viewports
- mobile (390px): overflow=no, tinyText=no, navToggle=ok
- tablet (768px): overflow=no, tinyText=no, navToggle=ok
- desktop (1280px): overflow=no, tinyText=no, navToggle=ok

## Errors (0)
- none


_Auto-run in post-build. Fixes overflow-x, nav toggle, and map slot gaps._
