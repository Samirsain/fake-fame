import { recordAnswer } from "@/lib/db";
import { ip, limited, tooMany } from "@/lib/rate";

export async function POST(req: Request, ctx: RouteContext<"/api/quizzes/[slug]/answer">) {
  const b = await req.json().catch(() => ({}));
  if (limited(`answer:${ip(req)}:${b.attemptId}`, 60, 6e4)) return tooMany(); // 60 answers / min / attempt
  const r = await recordAnswer((await ctx.params).slug, b.attemptId, b.questionId, b.optionId);
  return r ? Response.json(r) : Response.json({ error: "bad input" }, { status: 400 });
}
