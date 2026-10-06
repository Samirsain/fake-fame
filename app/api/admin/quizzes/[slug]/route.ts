import { isAdminReq } from "@/lib/admin";
import { deleteQuiz } from "@/lib/db";

export async function DELETE(req: Request, ctx: RouteContext<"/api/admin/quizzes/[slug]">) {
  if (!isAdminReq(req)) return Response.json({ error: "login required" }, { status: 401 });
  await deleteQuiz((await ctx.params).slug);
  return Response.json({ ok: true });
}
