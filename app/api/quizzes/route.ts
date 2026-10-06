import { cleanName, packOf } from "@/lib/questions";
import { createQuiz, hash, newSlug, newToken } from "@/lib/db";
import { ip, limited, tooMany } from "@/lib/rate";

type Item = { questionId: string; answerOptionId: string };

export async function POST(req: Request) {
  if (limited(`create:${ip(req)}`, 5, 36e5)) return tooMany(); // 5 quizzes / hour / IP
  const b = await req.json().catch(() => ({}));
  const name = cleanName(b.name);
  const mode = b.mode === "couples" ? "couples" : "friends";
  const pack = packOf(mode); // a couples quiz may only use couples questions, a friends quiz only friends ones
  const items: Item[] = b.items;
  const ok = Array.isArray(items) && items.length === 10 &&
    items.every((i) => pack.find((q) => q.id === i?.questionId)?.options.some((o) => o.id === i.answerOptionId)) &&
    new Set(items.map((i) => i.questionId)).size === 10;
  if (!name || !ok) return Response.json({ error: "bad input" }, { status: 400 });
  const slug = newSlug(), token = newToken();
  await createQuiz({
    slug, tokenHash: hash(token), name, mode, at: Date.now(),
    items: items.map((i) => ({ questionId: i.questionId, answerOptionId: i.answerOptionId })),
    pronoun: ["he", "she", "they"].includes(b.pronoun) ? b.pronoun : "they",
  });
  return Response.json({ slug, token });
}
