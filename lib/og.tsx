import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared pieces of the link-preview cards (app/opengraph-image.tsx and app/q/[slug]/opengraph-image.tsx).
export const size = { width: 1200, height: 630 };
export const ink = "#1E2640";
const HEART = "M0 5C-8-1-7-8-3-8c1.6 0 2.8.9 3 2.4C.2-7.1 1.4-8 3-8 7-8 8-1 0 5z";
const STAR = "M0-14 3.6-3.6 14 0 3.6 3.6 0 14-3.6 3.6-14 0-3.6-3.6z";

// Baloo 2 is the app's own font; the Devanagari file is there so a name typed in Hindi doesn't render as boxes.
const font = (f: string) => readFile(join(process.cwd(), "assets/fonts", f));
export const fontsReady = Promise.all((["baloo-2-latin-800-normal.woff", "baloo-2-devanagari-800-normal.woff"] as const).map(async (f) => ({
  name: "Baloo 2", data: await font(f), style: "normal" as const, weight: 800 as const,
})));

const L = { bg: ["#7CC4F8", "#D9EEFF"], envelope: "#FFFFFF", seal: "#FF5C93", boo: "#D6ECFF" } as const;
export const pink = "#FF5C93";

const Spark = ({ x, y, s, c }: { x: number; y: number; s: number; c: string }) => (
  <svg width="40" height="40" viewBox="-16 -16 32 32" style={{ position: "absolute", left: x, top: y, transform: `scale(${s})` }}>
    <path d={STAR} fill={c} />
  </svg>
);

export const Pill = ({ children, bg = "#fff", fontSize = 34 }: { children: string; bg?: string; fontSize?: number }) => (
  <div style={{ display: "flex", alignItems: "center", fontSize, background: bg, border: `4px solid ${ink}`, borderRadius: 50, padding: "4px 30px 0", boxShadow: `0 6px 0 ${ink}` }}>
    {children}
  </div>
);

// Sky background, sparkles, and Pip and Boo peeking out of an envelope on the right; the text column goes in `children`.
export const Card = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: `linear-gradient(${L.bg[0]}, ${L.bg[1]})`, fontFamily: "Baloo 2", fontWeight: 800, color: ink }}>
    <Spark x={560} y={36} s={1.3} c="#FFD23F" />
    <Spark x={1130} y={60} s={1} c="#fff" />
    <Spark x={1090} y={540} s={1.5} c="#FFD23F" />
    <Spark x={20} y={560} s={1} c="#fff" />
    <Spark x={610} y={560} s={0.8} c="#fff" />

    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", width: 720, paddingLeft: 72 }}>{children}</div>

    <svg width="470" height="430" viewBox="0 0 460 420" style={{ position: "absolute", right: 36, top: 100, transform: "rotate(5deg)" }}>
      <g transform="translate(6 36) rotate(-10 90 90) scale(1.5)">
        <path d="M18 72C18 38 38 26 60 26c22 0 42 12 42 46 0 26-16 34-42 34S18 98 18 72Z" fill="#FFD7BC" stroke={ink} strokeWidth="3.4" />
        <path d="M60 27C60 18 62 13 66 9" stroke={ink} strokeWidth="3" fill="none" />
        <path d="M66 10C73 3 85 5 84 12 78 17 70 15 66 10Z" fill="#8EE07A" stroke={ink} strokeWidth="2.8" />
        <circle cx="46" cy="62" r="5.5" fill={ink} />
        <circle cx="74" cy="62" r="5.5" fill={ink} />
        <ellipse cx="36" cy="74" rx="7.5" ry="4.6" fill="#FF8FB1" /><ellipse cx="84" cy="74" rx="7.5" ry="4.6" fill="#FF8FB1" />
        <ellipse cx="60" cy="80" rx="5" ry="6" fill={ink} />
      </g>
      <g transform="translate(250 30) rotate(9 60 60) scale(1.5)">
        <path d="M24 60C24 34 40 20 60 20s36 14 36 40v40q-6-8-14 0t-16 0q-6-6-12 0t-16 0q-8-8-14 0Z" fill={L.boo} stroke={ink} strokeWidth="3.4" />
        <path d="M40 60h12M68 60h12" stroke={ink} strokeWidth="4" strokeLinecap="round" />
        <path d="M54 73q8 4 13-2" stroke={ink} strokeWidth="3.2" fill="none" />
        <path d="M60 2l2.6 5.4 5.8.8-4.2 4 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4 5.8-.8z" fill="#FFD23F" stroke={ink} strokeWidth="2.4" />
      </g>
      <rect x="22" y="190" width="416" height="216" rx="30" fill={L.envelope} stroke={ink} strokeWidth="6" />
      <path d="M30 206 230 328 430 206" fill="none" stroke={ink} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="230" cy="326" r="38" fill={L.seal} stroke={ink} strokeWidth="6" />
      <path d={HEART} transform="translate(230 326) scale(3.4)" fill="#fff" />
    </svg>
  </div>
);
