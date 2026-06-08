/**
 * Write sample outreach.md and print send-ready text (body + signature).
 */
import { loadOutreachContext, writeOutreachMd } from "../lib/outreach-email-fb.mjs";
import { parseOutreachMd } from "../lib/parse-outreach.mjs";
import fs from "node:fs";
import { slugDir, mockupUrl } from "../lib/paths.mjs";

const samples = {
  "rustic-scruff-coal-city": {
    subject: "Your Grundy County award post",
    body: `Hi,

Your Grundy County award post caught my eye - congratulations on being named one of the best in pet services for multiple years! The way you're highlighted as the go-to grooming crew in Coal City is really impressive.

But I noticed you don't have your own website yet, which might mean you're relying on social media and word of mouth to attract new clients. As a pet grooming business, having a dedicated website can help you reach more customers and make it easier for them to book services directly.

On a whim, I pulled together a quick page concept from what you already post on Facebook, featuring sections on grooming services and a photo gallery showcasing your work. You can check it out here:

__MOCKUP_URL__

If you'd like to discuss building out a simple website that matches your brand and showcases your services, I'd be happy to walk you through the process and provide a flat fee for local businesses - just reply or give me a quick call to start the conversation.`,
  },
  "jbs-towing-and-recovery-chaparral": {
    subject: "Your Chaparral page caught my eye",
    body: `Hi,

I've been following your Facebook posts about roadside assistance in Chaparral, and I'm impressed by how you're staying visible during the cold weather. The post about Chaparral freezing but you're just warming up really stood out.

But I noticed you don't have your own website yet, which might be leaving some potential customers stuck in the snow - literally. Many people rely on search engines to find local businesses like yours, especially during emergencies.

On a whim I pulled together a quick page concept from what you already post on Facebook. The idea includes an emergency call CTA, a service list, and a service area map.

__MOCKUP_URL__

This kind of site is a straightforward project with a flat project fee for local businesses. I'd love to discuss the details with you further - reply here or hop on a quick call if that's easier.`,
  },
};

for (const [slug, email] of Object.entries(samples)) {
  const ctx = loadOutreachContext(slug);
  const body = email.body.replaceAll("__MOCKUP_URL__", mockupUrl(slug));
  writeOutreachMd(slug, { ...ctx, ...email, body, source: "groq" });
  const md = fs.readFileSync(slugDir(slug, "outreach.md"), "utf8");
  const send = parseOutreachMd(slug);
  console.log("=".repeat(72));
  console.log("OUTREACH.MD:", slug);
  console.log("=".repeat(72));
  console.log(md);
  console.log("=".repeat(72));
  console.log("ACTUAL SEND (To / Subject / Body+Signature):");
  console.log("To:", send.to);
  console.log("Subject:", send.subject);
  console.log("-".repeat(40));
  console.log(send.text);
  console.log("\n");
}
