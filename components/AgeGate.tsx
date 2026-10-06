"use client";
import { useEffect, useRef } from "react";
import Emoji from "@/components/Emoji";
import { useT } from "@/lib/i18n";

// The 18+ warning: a sheet that must be answered (Esc and the backdrop do nothing).
// Self-declared age only — it is a warning and a speed bump, not verification.
export default function AgeGate({ open, onYes, onNo }: { open: boolean; onYes: () => void; onNo: () => void }) {
  const t = useT();
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog ref={ref} data-theme="love" className="sheet agegate" aria-labelledby="age-title" aria-describedby="age-body" onCancel={(e) => e.preventDefault()}>
      <div className="grab" aria-hidden />
      <div className="flex items-center gap-3">
        <span className="age-badge" aria-hidden>18+</span>
        <h2 id="age-title" className="text-2xl font-extrabold leading-tight">{t("ageTitle")}</h2>
      </div>
      <p id="age-body" className="mt-3 text-[17px] leading-6">{t("ageBody")}</p>
      <p className="mt-3 flex gap-2 rounded-2xl bg-pink-100 p-3 text-sm font-bold leading-5">
        <Emoji e="🔞" size={22} />
        <span>{t("ageNote")}</span>
      </p>
      <div className="mt-5 space-y-3">
        <button className="btn sm" onClick={onYes}>{t("ageYes")}</button>
        <button className="btn alt sm" onClick={onNo}>{t("ageNo")}</button>
      </div>
    </dialog>
  );
}
