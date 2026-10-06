import { finishAttempt } from "@/lib/db";
import { tier } from "@/lib/questions";

// Score comes only from answers the server recorded; nothing is trusted from the client.
export async function POST(req: Request, ctx: RouteContext<"/api/quizzes/[slug]/finish">) {
  const b = await req.json().catch(() => ({}));
  const r = await finishAttempt((await ctx.params).slug, b.attemptId);
  return r ? Response.json({ ...r, tier: tier(r.score) }) : Response.json({ error: "bad input" }, { status: 400 });
}
