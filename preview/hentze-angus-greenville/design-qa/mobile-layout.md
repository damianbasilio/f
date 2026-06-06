# Mobile layout — hentze-angus-greenville

**Result:** PASS

## Autofix applied
- injected mobile safety CSS
- refreshed map layout CSS
- body overflow-x-clip
- section overflow-hidden for decorative layers
- map iframe: eager load (was lazy)
- map iframe: fetchpriority high
- preconnect https://www.google.com
- preconnect https://maps.googleapis.com
- preconnect https://maps.gstatic.com

## Viewports
- mobile (390px): overflow=no, tinyText=no, navToggle=ok
- tablet (768px): overflow=no, tinyText=no, navToggle=ok
- desktop (1280px): overflow=no, tinyText=no, navToggle=ok

## Errors (0)
- none


_Auto-run in post-build. Fixes overflow-x, nav toggle, and map slot gaps._
