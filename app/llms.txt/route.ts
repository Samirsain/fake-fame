import { GUIDES } from "@/lib/guides";
import { DESCRIPTION, SITE } from "@/lib/site";

export const dynamic = "force-static";

// llms.txt (llmstxt.org): a plain map of the site for AI assistants and answer engines.
export function GET() {
  const body = `# Fake or Fam

> ${DESCRIPTION}

Fake or Fam is a free browser game made in India by Zenviq Digital. A player answers 10 multiple-choice questions about themselves, gets a quiz link to share, and each friend who plays gets a score out of 10 on the creator's private scoreboard. No account is needed; only a nickname is stored, for 90 days.

## Pages
- [Home](${SITE}/): what the quiz is and how to play
- [Create a quiz](${SITE}/create): make your own friendship quiz
- [About](${SITE}/about): who makes Fake or Fam and common questions
- [Privacy policy](${SITE}/privacy): what is stored and for how long
- [For brands](${SITE}/for-business): custom quiz campaigns by Zenviq Digital
- [Contact](${SITE}/contact)

## Guides
${GUIDES.map((g) => `- [${g.title}](${SITE}/guides/${g.slug}): ${g.description}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
