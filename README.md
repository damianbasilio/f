# Facebook Leads Mockups

Pipeline for Facebook-only local businesses: import JSON → verify no website on FB profile → scrape → Stitch mockup → outreach email.

**Live hub:** https://damianbasilio.github.io/f/  
**Mockup previews:** https://sites.damianbasilio.dev/preview/{slug}

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
# → http://localhost:3456 — password-protected dashboard (set DASHBOARD_PASSWORD in .env)
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

## Autonomous pipeline (24/7 server)

The pipeline can run fully automated on a Debian server via PM2. See **[setup/README-server.md](setup/README-server.md)** for full deployment instructions.

| Time (Mexico City) | Task |
| ------------------ | ---- |
| 6:00 AM | 30 searches → import → draft → auto-approve → queue |
| 8:00 AM | Reply check → follow-ups → send queue starts |
| 8:00 AM–12:00 PM | Send emails (150s cooldown between each) |
| Daily | Follow-up after 3 days; mark dead after 3 more days |

```bash
# PM2 (production)
pm2 start ecosystem.config.cjs
pm2 startup && pm2 save

# Manual one-shot commands
npm run pipeline      # morning import + draft + approve
npm run send:queue    # send queued emails (8 AM–12 PM window)
npm run reply:check   # Gmail reply detection only
npm run followup      # follow-up worker
```

Set `OUTREACH_SEND_DELAY_MS=150000` in `.env` for 150-second spacing between sends.

## Gmail API setup

Reply detection uses the Gmail API (separate from the SMTP app password used for sending).

### 1. Enable Gmail API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create or select a project
3. **APIs & Services → Library** → search **Gmail API** → Enable

### 2. OAuth consent screen

1. **APIs & Services → OAuth consent screen**
2. Choose **External** (or Internal if using Workspace)
3. Add your email as a test user if in testing mode
4. Add scope: `https://www.googleapis.com/auth/gmail.modify`

### 3. Create OAuth credentials

1. **APIs & Services → Credentials → Create Credentials → OAuth client ID**
2. Application type: **Web application** (or Desktop)
3. Add authorized redirect URI: `http://localhost:3457/oauth2callback`
4. Copy **Client ID** and **Client secret** to `.env`:

```env
GMAIL_CLIENT_ID=your-client-id.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=your-client-secret
GMAIL_USER=dam.basilio@gmail.com
```

### 4. Get refresh token

```bash
node scripts/gmail-oauth-setup.mjs
```

Open the printed URL, authorize, and copy the `GMAIL_REFRESH_TOKEN` line into `.env`.

The reply checker reads unread inbox messages, matches sender email to lead `emails`, sets `repliedAt` on `lead.json`, and marks messages as read.
