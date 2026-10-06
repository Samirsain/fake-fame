"use client";
import { useMode } from "@/lib/theme";

// Decorative doodles + cloud strip from DESIGN.md §3.2. All aria-hidden. In couples mode the sparkles become hearts.
const ink = "var(--c-ink, #1E2640)";
const HEART = "M12 21C5 16 2 12 2 8.5 2 5.500 4.400 3.500 7 3.500 9 3.500 11 4.800 12 6.600 13 4.800 15 3.500 17 3.500 19.600 3.500 22 5.500 22 8.500 22 12 19 16 12 21Z";
const STAR = "M12 1C13 8 16 11 23 12 16 13 13 16 12 23 11 16 8 13 1 12 8 11 11 8 12 1Z";

export const Sparkle = ({ c = "#FFD23F", s = 24, className = "", delay = 0 }: { c?: string; s?: number; className?: string; delay?: number }) => {
  const love = useMode() === "couples";
  return (
    <svg aria-hidden width={s} height={s} viewBox="0 0 24 24" className={`bob absolute pointer-events-none ${className}`} style={{ animationDelay: `${delay}s` }}>
      <path d={love ? HEART : STAR} style={{ fill: love && c !== "#fff" ? "var(--c-accent)" : c, stroke: ink, strokeWidth: 1.6, strokeLinejoin: "round" }} />
    </svg>
  );
};

export const Heart = ({ c = "#FF5C93", s = 26, className = "", delay = 0 }: { c?: string; s?: number; className?: string; delay?: number }) => (
  <svg aria-hidden width={s} height={s} viewBox="0 0 24 24" className={`bob absolute pointer-events-none ${className}`} style={{ animationDelay: `${delay}s` }}>
    <path d={HEART} style={{ fill: c, stroke: ink, strokeWidth: 1.6 }} />
  </svg>
);

export const Clouds = () => (
  <svg aria-hidden viewBox="0 0 390 46" preserveAspectRatio="none" className="block w-full h-[46px]">
    <g style={{ fill: "var(--c-page)" }}>
      {Array.from({ length: 9 }, (_, i) => <circle key={i} cx={(i * 390) / 8} cy="46" r={22 + ((i * 37) % 14)} />)}
      <rect y="40" width="390" height="6" />
    </g>
  </svg>
);

// One-shot confetti burst (share screen, high scores). Pure CSS, ~60 pieces; colours follow the theme.
export function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {Array.from({ length: 60 }, (_, i) => (
        <i key={i} className="confetti" style={{
          left: `${(i * 37) % 100}%`, background: `var(--cf${i % 6})`, animationDelay: `${(i % 10) * 0.04}s`,
          ["--dx" as string]: `${((i * 53) % 120) - 60}px`, ["--r" as string]: `${(i * 97) % 720}deg`,
        }} />
      ))}
    </div>
  );
}
