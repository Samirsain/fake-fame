"use client";
import { useEffect, useRef, useState } from "react";
import { LANGS, setLang, useLang, useT } from "@/lib/i18n";

// Header pill that opens a native <dialog> bottom sheet (focus trap, Esc and backdrop-close come for free).
export default function LangPill() {
  const lang = useLang();
  const t = useT();
  const ref = useRef<HTMLDialogElement>(null);
  const [q, setQ] = useState("");

  useEffect(() => { document.documentElement.lang = lang === "hi" ? "hi" : lang === "hx" ? "hi-Latn" : "en"; }, [lang]);

  const cur = LANGS.find((l) => l.id === lang)!;
  const list = LANGS.filter((l) => `${l.label} ${l.sub}`.toLowerCase().includes(q.trim().toLowerCase()));
  const close = () => ref.current?.close();

  return (
    <>
      {/* full name from 420px up, a short code ("EN") on phones so the header row never overflows */}
      <button className="pillbtn" onClick={() => ref.current?.showModal()} aria-haspopup="dialog" aria-label={`${t("chooseLang")}: ${cur.label}`}>
        <span aria-hidden>🌐</span>
        <span aria-hidden className="hidden min-[420px]:inline">{cur.label}</span>
        <span aria-hidden className="min-[420px]:hidden">{cur.short}</span>
        <span aria-hidden className="text-sm">⌄</span>
      </button>
      <dialog ref={ref} className="sheet" aria-label={t("chooseLang")} onClick={(e) => e.target === ref.current && close()} onClose={() => setQ("")}>
        <div className="grab" aria-hidden />
        <h2 className="text-2xl font-extrabold mb-3">{t("chooseLang")}</h2>
        <input className="w-full h-12 rounded-2xl bg-[#F2F5FA] px-4 font-bold outline-none mb-3" placeholder={t("search")} value={q} onChange={(e) => setQ(e.target.value)} aria-label={t("search")} />
        <div role="radiogroup" className="space-y-1 mb-4">
          {list.map((l) => (
            <button key={l.id} role="radio" aria-checked={l.id === lang} className="langrow" onClick={() => { setLang(l.id); close(); }}>
              <span className="flex-1"><b className="block text-[19px] font-extrabold leading-tight">{l.label}</b><span className="text-sm text-[#8A96B0]">{l.sub}</span></span>
              {l.id === lang && <span className="grid place-items-center w-7 h-7 rounded-full bg-pink-500 text-white text-sm" aria-hidden>✓</span>}
            </button>
          ))}
        </div>
        <button className="btn alt sm" onClick={close}>{t("close")}</button>
      </dialog>
    </>
  );
}
