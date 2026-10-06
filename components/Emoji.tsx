"use client";
import { useState } from "react";

/** "🍔" → "1f354", "❤️" → "2764-fe0f": the file name under /public/emoji (Fluent 3D, see NOTICE.txt). */
export const emojiFile = (e: string) => [...e].map((c) => c.codePointAt(0)!.toString(16).padStart(4, "0")).join("-");

/** Warm the browser cache for the next question's pictures while the current answer is revealed. */
export const preloadEmoji = (list: string[]) => list.forEach((e) => { new Image().src = `/emoji/${emojiFile(e)}.webp`; });

// A real picture, self-hosted. Falls back to the text emoji only if a file is ever missing.
export default function Emoji({ e, size = 40, className = "" }: { e: string; size?: number; className?: string }) {
  const [bad, setBad] = useState(false);
  if (bad) return <span aria-hidden className={className} style={{ fontSize: size * 0.85, lineHeight: 1 }}>{e}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny static webp, nothing to optimise
    <img src={`/emoji/${emojiFile(e)}.webp`} width={size} height={size} alt="" aria-hidden draggable={false} decoding="async" onError={() => setBad(true)} className={`inline-block shrink-0 select-none ${className}`} />
  );
}
