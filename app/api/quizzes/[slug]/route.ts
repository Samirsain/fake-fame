import { countFinished, deleteQuiz, getQuiz, isAdmin } from "@/lib/db";
import { byId } from "@/lib/questions";

// Public view: question ids + options only — never the answers.
export async function GET(_: Request, ctx: RouteContext<"/api/quizzes/[slug]">) {
  const { slug } = await ctx.params;
  const q = await getQuiz(slug);
  if (!q) return Response.json({ error: "not found" }, { status: 404 });
  return Response.json({ name: q.name, mode: q.mode ?? "friends", players: await countFinished(slug), questions: q.items.map((i) => byId(i.questionId)) });
}

export async function DELETE(req: Request, ctx: RouteContext<"/api/quizzes/[slug]">) {
  const { slug } = await ctx.params;
  const q = await getQuiz(slug);
  if (!q || !isAdmin(q, req)) return Response.json({ error: "forbidden" }, { status: 403 });
  await deleteQuiz(slug);
  return Response.json({ ok: true });
}
