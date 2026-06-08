# Debian Server Setup — 24/7 Autonomous Outreach Pipeline

Run the full outreach pipeline on a Debian server with no manual intervention after initial setup.

## Schedule (America/Mexico_City)

| Time | Task |
|------|------|
| 6:00 AM | Run 30 searches → import leads → draft emails → auto-approve → queue |
| 8:00 AM | Reply checker → follow-up worker → send queue (150s between emails) |
| 8:00 AM–12:00 PM | Send window — pauses at noon, resumes next day |
| Daily | Follow-ups after 3 days; mark dead after 3 more days with no reply |

## 1. System packages

```bash
sudo apt update
sudo apt install -y git curl build-essential \
  libnss3 libatk-bridge2.0-0 libdrm2 libxkbcommon0 libgbm1 libasound2
```

Puppeteer (Facebook verification) needs the libraries above.

## 2. Node.js 20+ via nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
node -v   # should print v20.x
```

## 3. Clone and install

```bash
git clone <your-repo-url> facebook-leads
cd facebook-leads
npm install
npm run setup
npm run puppeteer:install
```

## 4. Environment variables

```bash
cp .env.example .env
nano .env
```

Required keys:

| Variable | Purpose |
|----------|---------|
| `DASHBOARD_PASSWORD` | Dashboard login (password only) |
| `STITCH_API_KEY` | Mockup generation |
| `GROQ_API_KEY` | Email drafts |
| `GMAIL_USER` | SMTP send + reply matching |
| `GMAIL_APP_PASSWORD` | Gmail SMTP app password |
| `GMAIL_CLIENT_ID` | Gmail API OAuth |
| `GMAIL_CLIENT_SECRET` | Gmail API OAuth |
| `GMAIL_REFRESH_TOKEN` | Gmail API OAuth |
| `GOOGLE_PLACES_API_KEY` | Lead discovery |
| `DATAFORSEO_LOGIN` | SERP checks |
| `DATAFORSEO_PASSWORD` | SERP checks |
| `OUTREACH_SEND_DELAY_MS` | `150000` (150 seconds) |

Optional but recommended for production:

```env
GITHUB_DEPLOY=1
GITHUB_REPO=https://github.com/youruser/yourrepo.git
GITHUB_TOKEN=ghp_...
PIPELINE_MAX_SEARCHES=30
PIPELINE_TIMEZONE=America/Mexico_City
```

## 5. Gmail API refresh token (one-time)

See [Gmail API setup](../README.md#gmail-api-setup) in the main README.

```bash
node scripts/gmail-oauth-setup.mjs
```

Copy the printed `GMAIL_REFRESH_TOKEN` into `.env`.

## 6. PM2 — keep the pipeline alive

```bash
npm install -g pm2
cd /path/to/facebook-leads   # repo root — required
pm2 start ecosystem.config.cjs
pm2 status
```

This starts both `outreach-pipeline` (cron automation) and `outreach-dashboard` (web UI on port 3456). Always run PM2 from the repo directory, or use `ecosystem.config.cjs` which sets `cwd` automatically.

Enable restart on boot:

```bash
pm2 startup
# run the command PM2 prints (sudo env PATH=...)
pm2 save
```

## 7. Verify before going live

Run each step manually once:

```bash
npm run pipeline        # morning: discover + draft + auto-approve
npm run reply:check     # Gmail reply detection
npm run followup        # follow-up emails
npm run send:queue      # send queued emails (only works 8 AM–12 PM Mexico City)
```

Check logs:

```bash
pm2 logs outreach-pipeline
pm2 monit
```

Log files are also written to `~/.pm2/logs/`.

## 8. Monitoring

- `pm2 logs outreach-pipeline` — live stdout/stderr
- `pm2 monit` — CPU/memory dashboard
- `pm2 restart outreach-pipeline` — restart after `.env` changes
- Send summaries appear in logs: `[morning-pipeline]`, `[send-worker]`, `[gmail-reply-checker]`, `[followup-worker]`

## Troubleshooting

**Sends not going out outside 8 AM–12 PM** — by design. Queue resumes next morning.

**Gmail API auth errors** — re-run `node scripts/gmail-oauth-setup.mjs` and update `GMAIL_REFRESH_TOKEN`.

**Puppeteer crashes** — ensure system libraries from step 1 are installed.

**Morning pipeline overlaps 8 AM job** — the orchestrator skips concurrent runs; queued sends from prior days are picked up at the next 8 AM window.
