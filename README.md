# Facebook Leads Mockups

Pipeline for Facebook-only local businesses: import JSON → verify no website on FB profile → scrape → Stitch mockup → outreach email.

**Live hub:** https://damianbasilio.github.io/f/  
**Mockup previews:** https://damianbasilio.github.io/f/preview/{slug}/

## Setup

```bash
npm install
npm run setup   # paste STITCH_API_KEY, GROQ_API_KEY, GMAIL_* in .env
```

## Quick start

```bash
# 1. Import leads
npm run import:leads -- data/sample-leads.json

# 2. Run full pipeline (verify → enrich → stitch → images → outreach draft)
npm run pipeline:run -- data/batches/batch-<N>/slugs.txt --batch <N>

# 3. Review outreach-report-<N>.md, then send (dry-run first)
npm run outreach:send -- --file data/batches/batch-<N>/approved.txt
npm run outreach:send -- --file data/batches/batch-<N>/approved.txt --send
```

## Web UI

```bash
npm run server
# → http://localhost:3456 — paste/upload JSON, run pipeline, approve send
```

## Commands

| Command | Purpose |
| ------- | ------- |
| `npm run import:leads -- file.json` | Import JSON → slug folders |
| `npm run pipeline:run -- slugs.txt --batch N` | Full pipeline |
| `npm run stitch:prompt -- slug` | Regenerate FB Stitch prompt |
| `npm run stitch:build -- slug` | Build one mockup |
| `npm run outreach:draft -- slug` | Draft outreach email (Groq AI when `GROQ_API_KEY` set) |
| `npm run outreach:report -- --batch N` | Merge emails into report |
| `npm run hub:sync` | Update index.html cards |

## Groq outreach emails

Outreach drafts use **Groq** when `GROQ_API_KEY` is in `.env`. Groq writes a **single tailor-made email** per business (not slot-filling into a template). The prompt includes scraped Facebook details, mockup sections, and preview URL.

**Default model:** `llama-3.1-8b-instant` — **500K tokens/day**, 30 RPM, **6K TPM**. Good balance of speed and quota for batches. Spacing ~**25s** between drafts (~1,900 tokens/request, ~2.4 drafts/min).

**Best writing quality:** `llama-3.3-70b-versatile` — better prose, but only **100K tokens/day** (~52 emails). Set `GROQ_MODEL=llama-3.3-70b-versatile` in `.env` for final sends on important leads. Spacing ~**10s** between drafts (12K TPM).

**Free tier comparison** ([Groq docs](https://console.groq.com/docs/rate-limits)):

| Model | TPM | TPD | ~Emails/day |
| ----- | --- | --- | ----------- |
| `llama-3.1-8b-instant` (default) | 6K | 500K | ~260 |
| `qwen/qwen3-32b` | 6K | 500K | ~260 |
| `llama-3.3-70b-versatile` | 12K | 100K | ~52 |

Outreach drafts use **~1,800–2,000 tokens** each. The client tracks TPM in a rolling 60s window against the model’s **6K TPM** limit and spaces requests automatically. On HTTP 429 it backs off using Groq’s headers.

Without `GROQ_API_KEY`, drafts fall back to the original template copy.
