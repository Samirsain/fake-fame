import { startAttempt } from "@/lib/db";
import { cleanName } from "@/lib/questions";
import { ip, limited, tooMany } from "@/lib/rate";

// A player starts an attempt; answers are then recorded server-side one question at a time.
export async function POST(req: Request, ctx: RouteContext<"/api/quizzes/[slug]/attempts">) {
  if (limited(`attempt:${ip(req)}`, 30, 36e5)) return tooMany(); // 30 attempts / hour / IP
  const name = cleanName((await req.json().catch(() => ({}))).name);
  if (!name) return Response.json({ error: "bad name" }, { status: 400 });
  const id = await startAttempt((await ctx.params).slug, name);
  return id ? Response.json({ attemptId: id }) : Response.json({ error: "not found" }, { status: 404 });
}
