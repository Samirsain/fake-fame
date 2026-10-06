import { ImageResponse } from "next/og";
import { getQuiz } from "@/lib/db";

export const alt = "How well do you know me? — Fake or Fam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#1E2640";

// Link-preview card: the single most important share asset for a link-spread product.
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const q = await getQuiz((await params).slug);
  const name = q?.name ?? "me";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(#58B1F1, #BFE1FB)", fontFamily: "sans-serif", color: ink }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* Pip */}
          <svg width="220" height="220" viewBox="0 0 120 120">
            <path d="M18 72C18 38 38 26 60 26c22 0 42 12 42 46 0 26-16 34-42 34S18 98 18 72Z" fill="#FFD7BC" stroke={ink} strokeWidth="4" />
            <path d="M60 27C60 18 62 13 66 9" stroke={ink} strokeWidth="3.6" fill="none" />
            <path d="M66 10C73 3 85 5 84 12 78 17 70 15 66 10Z" fill="#8EE07A" stroke={ink} strokeWidth="3.2" />
            <circle cx="46" cy="62" r="5.5" fill={ink} /><circle cx="74" cy="62" r="5.5" fill={ink} />
            <ellipse cx="36" cy="74" rx="7.5" ry="4.6" fill="#FF8FB1" /><ellipse cx="84" cy="74" rx="7.5" ry="4.6" fill="#FF8FB1" />
            <ellipse cx="60" cy="78" rx="5" ry="6" fill={ink} />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 120, fontWeight: 900, lineHeight: 0.95 }}>
            <span style={{ color: "#FF5C93" }}>Fake</span>
            <span style={{ fontSize: 48, background: "#FFD23F", borderRadius: 40, padding: "0 24px", margin: "6px 0" }}>or</span>
            <span style={{ color: "#fff" }}>Fam</span>
          </div>
          {/* Boo */}
          <svg width="220" height="220" viewBox="0 0 120 120">
            <path d="M24 60C24 34 40 20 60 20s36 14 36 40v40q-6-8-14 0t-16 0q-6-6-12 0t-16 0q-8-8-14 0Z" fill="#D6ECFF" stroke={ink} strokeWidth="4" />
            <path d="M40 60h12M68 60h12" stroke={ink} strokeWidth="4" strokeLinecap="round" />
            <path d="M54 73q8 4 13-2" stroke={ink} strokeWidth="3.2" fill="none" />
            <path d="M60 2l2.6 5.4 5.8.8-4.2 4 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4 5.8-.8z" fill="#FFD23F" stroke={ink} strokeWidth="2.6" />
          </svg>
        </div>
        <div style={{ marginTop: 28, display: "flex", background: "#fff", borderRadius: 40, padding: "18px 44px", fontSize: 54, fontWeight: 800 }}>
          {`How well do you know ${name}?`}
        </div>
      </div>
    ),
    size,
  );
}
