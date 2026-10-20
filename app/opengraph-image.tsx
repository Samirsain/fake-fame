import { ImageResponse } from "next/og";
import { Card, Pill, fontsReady, ink, pink, size } from "@/lib/og";

export const alt = "Fake or Fam — make a friendship quiz and find out who really knows you";
export { size };
export const contentType = "image/png";

// Site-wide link preview (home, create, guides...). Without it WhatsApp picks the first <img> on the page: the footer logo.
export default async function Image() {
  return new ImageResponse(
    (
      <Card>
        <Pill>Friendship quiz</Pill>
        <div style={{ display: "flex", marginTop: 22, fontSize: 104, lineHeight: 1.05, color: pink, textShadow: `0 8px 0 ${ink}` }}>Fake or Fam?</div>
        <div style={{ display: "flex", fontSize: 54, lineHeight: 1.1, color: ink }}>Kaun dost tumhe sach mein jaanta hai?</div>
        <div style={{ display: "flex", marginTop: 30 }}><Pill bg="#FFD23F" fontSize={40}>Apna quiz banao, free →</Pill></div>
      </Card>
    ),
    { ...size, fonts: await fontsReady },
  );
}
