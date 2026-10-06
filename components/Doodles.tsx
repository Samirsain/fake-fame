// Decorative doodles + cloud strip from DESIGN.md §3.2. All aria-hidden.
const ink = "#1E2640";

export const Sparkle = ({ c = "#FFD23F", s = 24, className = "", delay = 0 }: { c?: string; s?: number; className?: string; delay?: number }) => (
  <svg aria-hidden width={s} height={s} viewBox="0 0 24 24" className={`bob absolute pointer-events-none ${className}`} style={{ animationDelay: `${delay}s` }}>
    <path d="M12 1C13 8 16 11 23 12 16 13 13 16 12 23 11 16 8 13 1 12 8 11 11 8 12 1Z" fill={c} stroke={ink} strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const Heart = ({ c = "#FF5C93", s = 26, className = "", delay = 0 }: { c?: string; s?: number; className?: string; delay?: number }) => (
  <svg aria-hidden width={s} height={s} viewBox="0 0 24 24" className={`bob absolute pointer-events-none ${className}`} style={{ animationDelay: `${delay}s` }}>
    <path d="M12 21C5 16 2 12 2 8.5 2 5.500 4.400 3.500 7 3.500 9 3.500 11 4.800 12 6.600 13 4.800 15 3.500 17 3.500 19.600 3.500 22 5.500 22 8.500 22 12 19 16 12 21Z" fill={c} stroke={ink} strokeWidth="1.6" />
  </svg>
);

export const Clouds = ({ fill = "#EDF5FD" }: { fill?: string }) => (
  <svg aria-hidden viewBox="0 0 390 46" preserveAspectRatio="none" className="block w-full h-[46px]">
    {Array.from({ length: 9 }, (_, i) => <circle key={i} cx={(i * 390) / 8} cy="46" r={22 + ((i * 37) % 14)} fill={fill} />)}
    <rect y="40" width="390" height="6" fill={fill} />
  </svg>
);

// One-shot confetti burst (share screen). Pure CSS, ~60 pieces.
export function Confetti() {
  const cols = ["#FF5C93", "#FFD23F", "#0A8CFF", "#2FBF68", "#B79CFF", "#FF9F43"];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {Array.from({ length: 60 }, (_, i) => (
        <i key={i} className="confetti" style={{
          left: `${(i * 37) % 100}%`, background: cols[i % 6], animationDelay: `${(i % 10) * 0.04}s`,
          ["--dx" as string]: `${((i * 53) % 120) - 60}px`, ["--r" as string]: `${(i * 97) % 720}deg`,
        }} />
      ))}
    </div>
  );
}
