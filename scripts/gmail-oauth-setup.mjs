/**
 * One-time Gmail OAuth2 setup — prints GMAIL_REFRESH_TOKEN for .env
 *
 * Prerequisites:
 * 1. Enable Gmail API in Google Cloud Console
 * 2. Create OAuth 2.0 Client ID (Desktop app or Web app)
 * 3. Add redirect URI: http://localhost:3457/oauth2callback
 * 4. Set GMAIL_CLIENT_ID and GMAIL_CLIENT_SECRET in .env
 *
 * Usage: node scripts/gmail-oauth-setup.mjs
 */
import http from "node:http";
import { google } from "googleapis";
import { loadEnv } from "../lib/load-env.mjs";

loadEnv();

const clientId = process.env.GMAIL_CLIENT_ID?.trim();
const clientSecret = process.env.GMAIL_CLIENT_SECRET?.trim();
const port = 3457;
const redirectUri = `http://localhost:${port}/oauth2callback`;

if (!clientId || !clientSecret) {
  console.error("Set GMAIL_CLIENT_ID and GMAIL_CLIENT_SECRET in .env first.");
  process.exit(1);
}

const oauth2 = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
const scopes = ["https://www.googleapis.com/auth/gmail.modify"];

const authUrl = oauth2.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: scopes,
});

console.log("\nOpen this URL in your browser and authorize:\n");
console.log(authUrl);
console.log("\nWaiting for callback on http://localhost:3457 …\n");

const server = http.createServer(async (req, res) => {
  if (!req.url?.startsWith("/oauth2callback")) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  const url = new URL(req.url, `http://localhost:${port}`);
  const code = url.searchParams.get("code");
  if (!code) {
    res.writeHead(400);
    res.end("Missing code");
    return;
  }

  try {
    const { tokens } = await oauth2.getToken(code);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Success</h1><p>You can close this tab and return to the terminal.</p>");

    console.log("Authorization successful.\n");
    console.log("Add to your .env:\n");
    if (tokens.refresh_token) {
      console.log(`GMAIL_REFRESH_TOKEN=${tokens.refresh_token}`);
    } else {
      console.log("No refresh_token returned — revoke app access and re-run with prompt=consent.");
      console.log("access_token (short-lived):", tokens.access_token);
    }
    console.log(`GMAIL_USER=${process.env.GMAIL_USER || "dam.basilio@gmail.com"}`);
  } catch (err) {
    res.writeHead(500);
    res.end(err.message);
    console.error("Token exchange failed:", err.message);
  } finally {
    server.close();
    process.exit(0);
  }
});

server.listen(port, () => {
  /* waiting */
});
