import { ImageResponse } from "next/og";
import { getAttempt, getQuizOnce } from "@/lib/db";
import { TIER_COLORS, tier } from "@/lib/questions";

const ink = "#1E2640";
const W = 1080, H = 1920;
const BG = {
  friends: ["#58B1F1", "#BFE1FB"],
  couples: ["#4A0E32", "#E8648F"],
  extreme: ["#0B0412", "#7B2CBF"],
} as const;

// Story-size score card (1080x1920) for a finished attempt: GET /q/<slug>/card?a=<attemptId>
// Everything on it comes from the database (name, score, tier), never from the URL, so a card can't be faked.
export async function GET(req: Request, ctx: RouteContext<"/q/[slug]/card">) {
  const { slug } = await ctx.params;
  const a = new URL(req.url).searchParams.get("a") ?? "";
  const [quiz, att] = await Promise.all([getQuizOnce(slug), getAttempt(slug, a)]);
  if (!quiz || !att) return new Response("not found", { status: 404 });

  const mode = quiz.mode === "couples" ? "couples" : "friends";
  const look = mode === "couples" && quiz.level === "extreme" ? "extreme" : mode;
  const [c1, c2] = BG[look];
  const dark = look !== "friends";
  const t = tier(att.score, mode, quiz.level ?? "sweet");
  const [soft, text, arc] = TIER_COLORS[t.band];
  const tag = mode === "couples" ? (quiz.level === "extreme" ? "Couples quiz · 21+" : "Couples quiz · 18+") : "Friend quiz";
  const host = (process.env.NEXT_PUBLIC_SITE_URL ?? new URL(req.url).host).replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div style={{ width: W, height: H, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "120px 70px 100px", background: `linear-gradient(${c1}, ${c2})`, fontFamily: "sans-serif", color: dark ? "#fff" : ink }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, background: "rgba(255,255,255,.88)", color: ink, borderRadius: 40, padding: "10px 34px" }}>{tag}</div>
          <div style={{ display: "flex", marginTop: 50, fontSize: 84, fontWeight: 900, lineHeight: 1.1, justifyContent: "center" }}>{`How well do you know ${quiz.name}?`}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 620, height: 620, borderRadius: 310, background: "#fff", border: `44px solid ${arc}`, boxShadow: "0 20px 60px rgba(0,0,0,.25)" }}>
            <div style={{ display: "flex", alignItems: "flex-end", color: ink, fontWeight: 900 }}>
              <span style={{ fontSize: 300, lineHeight: 1 }}>{att.score}</span>
              <span style={{ fontSize: 110, color: "#8A96B0", marginBottom: 26 }}>/10</span>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 56, fontSize: 70, fontWeight: 900, background: soft, color: text, border: `6px solid ${text}`, borderRadius: 60, padding: "14px 56px" }}>{t.name}</div>
          <div style={{ display: "flex", marginTop: 30, fontSize: 52, fontWeight: 700, textAlign: "center", justifyContent: "center" }}>{t.copy}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ display: "flex", fontSize: 54, fontWeight: 800 }}>{`${att.name} took the quiz`}</div>
          <div style={{ display: "flex", marginTop: 30, fontSize: 46, fontWeight: 800, background: "#FF5C93", color: "#fff", borderRadius: 50, padding: "16px 50px" }}>Think you know them better? Take it →</div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 38, opacity: 0.85 }}>{`${host}/q/${slug}`}</div>
        </div>
      </div>
    ),
    { width: W, height: H, headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
