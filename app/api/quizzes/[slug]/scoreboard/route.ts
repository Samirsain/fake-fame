import { getQuiz, isAdmin, listFinished } from "@/lib/db";
import { byId } from "@/lib/questions";

export async function GET(req: Request, ctx: RouteContext<"/api/quizzes/[slug]/scoreboard">) {
  const { slug } = await ctx.params;
  const q = await getQuiz(slug);
  if (!q || !isAdmin(q, req)) return Response.json({ error: "forbidden" }, { status: 403 });
  const opt = (qid: string, oid: string) => byId(qid)?.options.find((o) => o.id === oid) ?? null;
  return Response.json({
    name: q.name,
    mode: q.mode ?? "friends",
    level: q.level ?? "sweet",
    players: (await listFinished(slug)).map((a) => ({
      id: a._id, name: a.name, score: a.score,
      detail: q.items.map((i) => {
        const x = a.answers.find((y) => y.questionId === i.questionId);
        return { qid: i.questionId, correct: !!x?.correct, you: opt(i.questionId, i.answerOptionId), they: x ? opt(i.questionId, x.optionId) : null };
      }),
    })),
  });
}
