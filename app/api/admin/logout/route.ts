import { cookie } from "@/lib/admin";

export async function POST() {
  return Response.json({ ok: true }, { headers: { "Set-Cookie": cookie("", 0) } });
}
