import { createHash, createHmac, timingSafeEqual } from "crypto";

// Admin login. The id and password live in env vars (ADMIN_ID, ADMIN_PASSWORD), never in the repo.
// A successful login sets a signed, httpOnly cookie that expires after 12 hours.
const sha = (s: string) => createHash("sha256").update(s).digest();
const same = (a: string, b: string) => timingSafeEqual(sha(a), sha(b));

export const adminConfigured = () => !!(process.env.ADMIN_ID && process.env.ADMIN_PASSWORD);
export const checkLogin = (id: unknown, pw: unknown) =>
  adminConfigured() && same(String(id), process.env.ADMIN_ID!) && same(String(pw), process.env.ADMIN_PASSWORD!);

const secret = () => process.env.ADMIN_SECRET ?? sha("fof:" + (process.env.ADMIN_PASSWORD ?? "")).toString("hex");
const sign = (exp: string) => createHmac("sha256", secret()).update(exp).digest("base64url");
export const makeSession = () => { const exp = String(Date.now() + 12 * 36e5); return `${exp}.${sign(exp)}`; };
const valid = (v?: string) => {
  const [exp, mac] = (v ?? "").split(".");
  if (!exp || !mac || Number(exp) < Date.now()) return false;
  const want = sign(exp);
  return mac.length === want.length && timingSafeEqual(Buffer.from(mac), Buffer.from(want));
};
export const isAdminReq = (req: Request) => valid(/(?:^|;\s*)admin=([^;]+)/.exec(req.headers.get("cookie") ?? "")?.[1]);
export const cookie = (value: string, maxAge: number) =>
  `admin=${value}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${maxAge}${process.env.NODE_ENV === "production" ? "; Secure" : ""}`;
