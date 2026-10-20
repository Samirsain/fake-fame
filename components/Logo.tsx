// `as`/`label`: the logo is the page's h1 only where it names the page (home, create); the loading splash uses a div.
export default function Logo({ scale = 1, as: Tag = "div", label = "Fake or Fam" }: { scale?: number; as?: "h1" | "div"; label?: string }) {
  const o = "[-webkit-text-stroke:9px_var(--c-ink)] [paint-order:stroke_fill]";
  return (
    <Tag className="logo-sticker relative text-center leading-[.85] font-black select-none" style={{ fontSize: 76 * scale }}>
      <span className="sr-only">{label}</span>
      <span aria-hidden className={`block text-pink-500 -rotate-[4deg] ${o}`}>Fake</span>
      <span aria-hidden className={`inline-block bg-yellow-400 text-ink rounded-full px-3 rotate-[8deg] -my-1 border-[3px] border-ink`} style={{ fontSize: 28 * scale, WebkitTextStroke: 0 }}>or</span>
      <span aria-hidden className={`block text-white rotate-[3deg] ${o}`}>Fam</span>
    </Tag>
  );
}
