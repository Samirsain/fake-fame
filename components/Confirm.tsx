"use client";
import { useEffect, useRef } from "react";
import { useT } from "@/lib/i18n";

// Destructive-action confirmation as a bottom sheet (native <dialog>; no window.confirm in webviews).
export default function Confirm({ open, title, body, action, onYes, onClose }: {
  open: boolean; title: string; body: string; action: string; onYes: () => void; onClose: () => void;
}) {
  const t = useT();
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (d && open && !d.open) d.showModal();
    if (d && !open && d.open) d.close();
  }, [open]);
  return (
    <dialog ref={ref} className="sheet" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()} aria-label={title}>
      <div className="grab" aria-hidden />
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="mt-1 mb-5">{body}</p>
      <div className="space-y-3">
        <button className="btn danger sm" onClick={onYes}>{action}</button>
        <button className="btn alt sm" onClick={onClose}>{t("cancel")}</button>
      </div>
    </dialog>
  );
}
