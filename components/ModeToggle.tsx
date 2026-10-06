"use client";
import { useState } from "react";
import { flushSync } from "react-dom";
import AgeGate from "@/components/AgeGate";
import Emoji from "@/components/Emoji";
import { useT } from "@/lib/i18n";
import type { Mode } from "@/lib/questions";
import { confirmAdult, isAdult, setMode, useSavedMode } from "@/lib/theme";

// Friends | Couples 18+ switch. Picking Couples shows the 18+ warning first; the whole theme changes only after "I'm 18 or older".
export default function ModeToggle() {
  const t = useT();
  const mode = useSavedMode();
  const [asking, setAsking] = useState(false);

  const apply = (m: Mode) => {
    const swap = () => flushSync(() => setMode(m));
    type VT = { ready?: Promise<unknown>; finished?: Promise<unknown>; updateCallbackDone?: Promise<unknown> };
    const vt = (document as Document & { startViewTransition?: (cb: () => void) => VT }).startViewTransition;
    // cross-fade the whole page where supported (never in a hidden tab or with reduced motion)
    if (vt && !document.hidden && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const tr = vt.call(document, swap);
      for (const p of [tr.ready, tr.finished, tr.updateCallbackDone]) p?.catch(() => {}); // a skipped transition is not an error
    } else swap();
  };
  const pick = (m: Mode) => {
    if (m === mode) return;
    if (m === "couples" && !isAdult()) { setAsking(true); return; }
    apply(m);
  };

  return (
    <>
      <div role="radiogroup" aria-label={t("modeLabel")} className="modetoggle">
        <span className="mt-thumb" aria-hidden style={{ transform: mode === "couples" ? "translateX(100%)" : "translateX(0)" }} />
        <button role="radio" aria-checked={mode === "friends"} onClick={() => pick("friends")}>
          <Emoji e="👫" size={22} />{t("modeFriends")}
        </button>
        <button role="radio" aria-checked={mode === "couples"} onClick={() => pick("couples")}>
          <Emoji e="💕" size={22} />{t("modeCouples")}<b className="mt-age">18+</b>
        </button>
      </div>
      <AgeGate open={asking} onYes={() => { confirmAdult(); setAsking(false); apply("couples"); }} onNo={() => setAsking(false)} />
    </>
  );
}
