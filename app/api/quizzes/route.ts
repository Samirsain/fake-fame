import { cleanName, extremeReady, packOf } from "@/lib/questions";
import { createQuiz, hash, newSlug, newToken } from "@/lib/db";
import { ip, limited, tooMany } from "@/lib/rate";

type Item = { questionId: string; answerOptionId: string };

export async function POST(req: Request) {
  if (limited(`create:${ip(req)}`, 5, 36e5)) return tooMany(); // 5 quizzes / hour / IP
  const b = await req.json().catch(() => ({}));
  const name = cleanName(b.name);
  const mode = b.mode === "couples" ? "couples" : "friends";
  const level = mode === "couples" && b.level === "extreme" && extremeReady() ? "extreme" : b.level === "spicy" ? "spicy" : "sweet";
  const pack = packOf(mode, level); // a quiz may only use the questions of its own pack: friends, couples-sweet or couples-spicy
  const items: Item[] = b.items;
  const ok = Array.isArray(items) && items.length === 10 &&
    items.every((i) => pack.find((q) => q.id === i?.questionId)?.options.some((o) => o.id === i.answerOptionId)) &&
    new Set(items.map((i) => i.questionId)).size === 10;
  if (!name || !ok) return Response.json({ error: "bad input" }, { status: 400 });
  const slug = newSlug(), token = newToken();
  await createQuiz({
    slug, tokenHash: hash(token), name, mode, ...(mode === "couples" ? { level } : {}), at: Date.now(),
    items: items.map((i) => ({ questionId: i.questionId, answerOptionId: i.answerOptionId })),
    pronoun: ["he", "she", "they"].includes(b.pronoun) ? b.pronoun : "they",
  });
  return Response.json({ slug, token });
}
