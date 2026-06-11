# Mobile layout — patron-barbershop-salon-winston-salem

**Result:** FAIL

## Autofix applied
- refreshed map layout CSS
- injected mobile safety CSS
- refreshed map layout CSS

## Viewports
- mobile (390px): overflow=no, tinyText=no, navToggle=ok, width=ok
- tablet (768px): overflow=no, tinyText=no, navToggle=ok, width=ok
- desktop (1280px): overflow=no, tinyText=no, navToggle=ok, width=ok

## Errors (2)
- map @ 390px: empty gap under embed (parent gap 170px, slot 280px vs iframe 278px)
- map @ 1280px: empty gap under embed (parent gap 50px, slot 400px vs iframe 398px)


## Map layout
- parent gap 170px, slot 280px, iframe 278px
- parent gap 50px, slot 400px, iframe 398px

_Auto-run in post-build. Fixes overflow-x, nav toggle, and map slot gaps._
