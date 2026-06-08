/**
 * Gmail API reply detection — marks repliedAt on matching leads.
 */
import { google } from "googleapis";
import { fileURLToPath } from "node:url";
import { loadEnv } from "./load-env.mjs";
import {
  findLeadByEmail,
  parseEmailFromHeader,
  setLeadTimestamp,
  getFirstOutreachSendAt,
  formatGmailAfterDate,
} from "./lead-timestamps.mjs";

function requireGmailApiEnv() {
  loadEnv();
  const clientId = process.env.GMAIL_CLIENT_ID?.trim();
  const clientSecret = process.env.GMAIL_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN?.trim();
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Missing Gmail API credentials — set GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN in .env"
    );
  }
  return { clientId, clientSecret, refreshToken };
}

function createGmailClient() {
  const { clientId, clientSecret, refreshToken } = requireGmailApiEnv();
  const oauth2 = new google.auth.OAuth2(clientId, clientSecret);
  oauth2.setCredentials({ refresh_token: refreshToken });
  return google.gmail({ version: "v1", auth: oauth2 });
}

function parseMessageDate(dateHeader) {
  const d = new Date(dateHeader || "");
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

/**
 * Check unread inbox messages and update repliedAt on matching leads.
 */
export async function runGmailReplyCheck() {
  const firstSend = getFirstOutreachSendAt();
  if (!firstSend) {
    console.log("[gmail-reply-checker] no outreach sends yet — skipping");
    return { matched: 0, markedRead: 0, noMatch: 0, skipped: true };
  }

  const afterDate = formatGmailAfterDate(firstSend);
  const query = `in:inbox is:unread after:${afterDate}`;
  console.log(`[gmail-reply-checker] query: ${query} (first send ${firstSend})`);

  const gmail = createGmailClient();
  let matched = 0;
  let markedRead = 0;
  let noMatch = 0;

  const listRes = await gmail.users.messages.list({
    userId: "me",
    q: query,
    maxResults: 100,
  });

  const messages = listRes.data.messages || [];
  if (!messages.length) {
    console.log("[gmail-reply-checker] no unread inbox messages");
    return { matched: 0, markedRead: 0, noMatch: 0 };
  }

  for (const { id } of messages) {
    const msg = await gmail.users.messages.get({
      userId: "me",
      id,
      format: "metadata",
      metadataHeaders: ["From", "Date"],
    });

    const headers = msg.data.payload?.headers || [];
    const fromHeader = headers.find((h) => h.name === "From")?.value || "";
    const dateHeader = headers.find((h) => h.name === "Date")?.value || "";
    const senderEmail = parseEmailFromHeader(fromHeader);

    const leadMatch = findLeadByEmail(senderEmail, { requireNoReply: true });
    if (leadMatch) {
      const repliedAt = parseMessageDate(dateHeader);
      setLeadTimestamp(leadMatch.slug, "repliedAt", repliedAt);
      matched += 1;
      console.log(`[gmail-reply-checker] ✓ reply from ${senderEmail} → ${leadMatch.slug} (${repliedAt})`);
    } else {
      noMatch += 1;
    }

    await gmail.users.messages.modify({
      userId: "me",
      id,
      requestBody: { removeLabelIds: ["UNREAD"] },
    });
    markedRead += 1;
  }

  console.log(`[gmail-reply-checker] matched=${matched} marked-read=${markedRead} no-match=${noMatch}`);
  return { matched, markedRead, noMatch };
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isMain) {
  runGmailReplyCheck()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(`[gmail-reply-checker] ✗ ${err.message}`);
      process.exit(1);
    });
}
