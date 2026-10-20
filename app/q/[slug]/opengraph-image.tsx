import { ImageResponse } from "next/og";
import { getQuizOnce } from "@/lib/db";
import { Card, Pill, fontsReady, ink, pink, size } from "@/lib/og";

export const alt = "Someone sent you a quiz — Fake or Fam";
export { size };
export const contentType = "image/png";

// Link-preview card: it opens with the sender's name, like a message from a friend ("Samir ne tumhare liye kuch bheja hai"),
// not with a product pitch.
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const [q, fontData] = await Promise.all([getQuizOnce((await params).slug), fontsReady]);
  const name = q?.name ?? "Someone";
  const n = [...name].length;
  const nameSize = n <= 6 ? 168 : n <= 9 ? 136 : n <= 12 ? 108 : 88;

  return new ImageResponse(
    (
      <Card>
        <Pill>Fake or Fam</Pill>
        <div style={{ display: "flex", marginTop: 22, fontSize: nameSize, lineHeight: 1.05, color: pink, textShadow: `0 8px 0 ${ink}` }}>{name}</div>
        <div style={{ display: "flex", fontSize: 54, lineHeight: 1.1, color: ink }}>ne tumhare liye kuch bheja hai</div>
        <div style={{ display: "flex", marginTop: 30 }}><Pill bg="#FFD23F" fontSize={40}>Tum unhe kitna jaante ho? →</Pill></div>
      </Card>
    ),
    { ...size, fonts: fontData },
  );
}
