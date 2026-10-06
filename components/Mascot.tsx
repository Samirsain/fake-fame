// Pip & Boo — original mascots from the design pack (DESIGN.md §3.1). Eyes blink on a slow loop.
// "love" = heart eyes, used in couples mode. Boo's colours follow the theme (blue ghost / blush ghost).
const ink = "#1E2640";
type P = { mood?: "happy" | "shock" | "closed" | "sad" | "smug" | "love"; size?: number; wave?: boolean; flip?: boolean; className?: string };
const sw = { stroke: ink, strokeLinecap: "round" as const, fill: "none" };
const boo = { body: { fill: "var(--boo-body, #D6ECFF)" }, hand: { fill: "var(--boo-hand, #CFE9FF)" } };

// A little heart centred on (x, y) that pulses; wrapped in <g> so the CSS animation doesn't fight the SVG transform.
const HeartEye = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <path className="beat" d="M0 5C-8-1-7-8-3-8c1.6 0 2.8.9 3 2.4C.2-7.1 1.4-8 3-8 7-8 8-1 0 5z" fill="#FF3D77" />
  </g>
);

export function Pip({ mood = "happy", size = 120, wave, flip, className = "" }: P) {
  const r = mood === "shock" ? 5.5 : 4.6;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden className={className} style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <ellipse cx="60" cy="110" rx="34" ry="5" fill="rgba(30,38,64,.10)" />
      <ellipse cx="21" cy="80" rx="7" ry="9" fill="#FFCBA8" stroke={ink} strokeWidth="3.6" />
      <path d="M18 72C18 38 38 26 60 26c22 0 42 12 42 46 0 26-16 34-42 34S18 98 18 72Z" fill="#FFD7BC" stroke={ink} strokeWidth="4" />
      <path d="M28 88c12 10 52 10 64 0" stroke="#FFC29E" strokeWidth="5" fill="none" strokeLinecap="round" />
      {wave
        ? <g className="wave-arm"><path d="M98 66q14-14 10-26" {...sw} strokeWidth="4" fill="#FFCBA8" /><ellipse cx="108" cy="38" rx="7" ry="7" fill="#FFCBA8" stroke={ink} strokeWidth="3.6" /></g>
        : <ellipse cx="99" cy="80" rx="7" ry="9" fill="#FFCBA8" stroke={ink} strokeWidth="3.6" />}
      <g className="sprout">
        <path d="M60 27C60 18 62 13 66 9" {...sw} strokeWidth="3.6" />
        <path d="M66 10C73 3 85 5 84 12 78 17 70 15 66 10Z" fill="#8EE07A" stroke={ink} strokeWidth="3.2" strokeLinejoin="round" />
        <path d="M64 13C57 6 47 9 49 15c6 4 12 2 15-2Z" fill="#A9EC98" stroke={ink} strokeWidth="3.2" strokeLinejoin="round" />
      </g>
      {mood === "closed"
        ? <path d="M40 63q6-6 12 0M68 63q6-6 12 0" {...sw} strokeWidth="3.6" />
        : mood === "love"
          ? <><HeartEye x={46} y={62} /><HeartEye x={74} y={62} /></>
          : <g className="blink"><circle cx="46" cy="62" r={r} fill={ink} /><circle cx="74" cy="62" r={r} fill={ink} /><circle cx="47.5" cy="60" r="1.6" fill="#fff" /><circle cx="75.5" cy="60" r="1.6" fill="#fff" /></g>}
      <ellipse cx="36" cy="74" rx="7.5" ry="4.6" fill="#FF8FB1" opacity={mood === "love" ? 1 : 0.75} /><ellipse cx="84" cy="74" rx="7.5" ry="4.6" fill="#FF8FB1" opacity={mood === "love" ? 1 : 0.75} />
      {mood === "shock" ? <ellipse cx="60" cy="78" rx="5" ry="6" fill={ink} />
        : mood === "sad" ? <><path d="M54 79q6-5 12 0" {...sw} strokeWidth="3.2" /><path d="M80 68q3 8 0 12-3-4 0-12z" fill="#7CC8FF" /></>
        : <path d="M54 74q6 7 12 0" stroke={ink} strokeWidth="3.2" fill="#FF8AA8" strokeLinecap="round" />}
    </svg>
  );
}

export function Boo({ mood = "happy", size = 120, wave, flip, className = "" }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden className={className} style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <ellipse cx="60" cy="112" rx="32" ry="5" fill="rgba(30,38,64,.10)" />
      <path d="M24 60C24 34 40 20 60 20s36 14 36 40v40q-6-8-14 0t-16 0q-6-6-12 0t-16 0q-8-8-14 0Z" style={boo.body} stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <g className="sprout">
        <path d="M60 20v-8" {...sw} strokeWidth="3.4" />
        <path d="M60 2l2.6 5.4 5.8.8-4.2 4 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4 5.8-.8z" fill="#FFD23F" stroke={ink} strokeWidth="2.6" strokeLinejoin="round" />
      </g>
      {wave
        ? <g className="wave-arm"><path d="M22 66q-14-10-12-26" {...sw} strokeWidth="4" /><circle cx="10" cy="38" r="7" style={boo.hand} stroke={ink} strokeWidth="3.6" /></g>
        : <ellipse cx="20" cy="76" rx="7" ry="9" style={boo.hand} stroke={ink} strokeWidth="3.6" />}
      <ellipse cx="100" cy="76" rx="7" ry="9" style={boo.hand} stroke={ink} strokeWidth="3.6" />
      {mood === "smug" ? <path d="M40 60h12M68 60h12" {...sw} strokeWidth="4" />
        : mood === "closed" ? <path d="M40 62q6-7 12 0M68 62q6-7 12 0" {...sw} strokeWidth="3.6" />
        : mood === "love" ? <><HeartEye x={46} y={60} /><HeartEye x={74} y={60} /></>
        : <g className="blink"><ellipse cx="46" cy="60" rx="4.4" ry="6" fill={ink} /><ellipse cx="74" cy="60" rx="4.4" ry="6" fill={ink} /><circle cx="47.3" cy="57.5" r="1.6" fill="#fff" /><circle cx="75.3" cy="57.5" r="1.6" fill="#fff" /></g>}
      <path d="M30 70q6-5 12 0-6 6-12 0zM78 70q6-5 12 0-6 6-12 0z" fill="#FF9DBB" opacity=".8" />
      {mood === "sad" ? <><path d="M54 76q6-5 12 0" {...sw} strokeWidth="3.2" /><path d="M42 68q-3 8 0 12 3-4 0-12z" fill="#7CC8FF" /></>
        : mood === "smug" ? <path d="M54 73q8 4 13-2" {...sw} strokeWidth="3.2" />
        : <path d="M52 71q8 9 16 0z" fill={ink} />}
    </svg>
  );
}
