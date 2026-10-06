import { isAdminReq } from "@/lib/admin";
import { adminOverview } from "@/lib/db";

export async function GET(req: Request) {
  if (!isAdminReq(req)) return Response.json({ error: "login required" }, { status: 401 });
  return Response.json(await adminOverview(), { headers: { "Cache-Control": "no-store" } });
}
