import { checkLogin, cookie, makeSession } from "@/lib/admin";
import { ip, limited, tooMany } from "@/lib/rate";

export async function POST(req: Request) {
  if (limited(`admin:${ip(req)}`, 10, 6e5)) return tooMany(); // 10 tries / 10 min / IP
  const b = await req.json().catch(() => ({}));
  if (!checkLogin(b.id, b.password)) return Response.json({ error: "wrong id or password" }, { status: 401 });
  return Response.json({ ok: true }, { headers: { "Set-Cookie": cookie(makeSession(), 12 * 3600) } });
}
