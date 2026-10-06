import { finishAttempt, getQuiz } from "@/lib/db";
import { tier } from "@/lib/questions";

// Score comes only from answers the server recorded; nothing is trusted from the client.
export async function POST(req: Request, ctx: RouteContext<"/api/quizzes/[slug]/finish">) {
  const { slug } = await ctx.params;
  const b = await req.json().catch(() => ({}));
  const [r, q] = await Promise.all([finishAttempt(slug, b.attemptId), getQuiz(slug)]);
  return r ? Response.json({ ...r, tier: tier(r.score, q?.mode ?? "friends", q?.level ?? "sweet") }) : Response.json({ error: "bad input" }, { status: 400 });
}
