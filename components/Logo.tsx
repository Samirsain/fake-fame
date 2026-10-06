export default function Logo({ scale = 1 }: { scale?: number }) {
  const o = "[-webkit-text-stroke:9px_#1E2640] [paint-order:stroke_fill]";
  return (
    <h1 className="logo-sticker relative text-center leading-[.85] font-black select-none" style={{ fontSize: 76 * scale }}>
      <span className="sr-only">Fake or Fam</span>
      <span aria-hidden className={`block text-pink-500 -rotate-[4deg] ${o}`}>Fake</span>
      <span aria-hidden className={`inline-block bg-yellow-400 text-ink rounded-full px-3 rotate-[8deg] -my-1 border-[3px] border-ink`} style={{ fontSize: 28 * scale, WebkitTextStroke: 0 }}>or</span>
      <span aria-hidden className={`block text-white rotate-[3deg] ${o}`}>Fam</span>
    </h1>
  );
}

