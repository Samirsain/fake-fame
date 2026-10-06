import { getQuiz, hideAttempt, isAdmin } from "@/lib/db";

// Creator hides (or un-hides) a player.
export async function PATCH(req: Request, ctx: RouteContext<"/api/quizzes/[slug]/attempts/[id]">) {
  const { slug, id } = await ctx.params;
  const q = await getQuiz(slug);
  if (!q || !isAdmin(q, req)) return Response.json({ error: "forbidden" }, { status: 403 });
  const hidden = (await req.json().catch(() => ({}))).hidden !== false;
  return (await hideAttempt(slug, id, hidden)) ? Response.json({ ok: true }) : Response.json({ error: "not found" }, { status: 404 });
}
