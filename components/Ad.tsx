"use client";
import { useEffect, useRef } from "react";
import { useT } from "@/lib/i18n";

// Adsterra units (the keys are public: they ship in every page's script tag). Only at the end of a page, never during
// play, and never pop-under / social-bar units: Google bars AdSense from any site that triggers pop-unders.
// Banner units read one global `atOptions`, so keep a single banner per page.
const UNITS = {
  native: { src: "https://bicea.org/21/9f3d170b24d1d560a8a319ae991dbfca", key: "9f3d170b24d1d560a8a319ae991dbfca", h: 0 },
  "300x250": { src: "https://bicea.org/22/d8965a2c3566b765aa9326919f9e4920", key: "d8965a2c3566b765aa9326919f9e4920", w: 300, h: 250 },
  "320x50": { src: "https://bicea.org/22/fcb5e39358a1e0024f268bd01c3d70b7", key: "fcb5e39358a1e0024f268bd01c3d70b7", w: 320, h: 50 },
};

export default function Ad({ unit }: { unit: keyof typeof UNITS }) {
  const t = useT();
  const box = useRef<HTMLDivElement>(null);
  const u = UNITS[unit];
  useEffect(() => {
    const el = box.current!;
    if ("w" in u) Object.assign(window, { atOptions: { key: u.key, format: "iframe", width: u.w, height: u.h, params: {} } });
    else el.append(Object.assign(document.createElement("div"), { id: `container-${u.key}` }));
    const s = Object.assign(document.createElement("script"), { src: u.src, async: true });
    s.dataset.cfasync = "false";
    el.append(s); // the script renders next to itself / into the container, so both live inside the box
    return () => el.replaceChildren();
  }, [u]);
  return (
    <aside aria-label={t("ad")} className="!mt-8 text-center">
      <p className="text-[11px] font-bold uppercase tracking-wider text-ink/40">{t("ad")}</p>
      <div ref={box} className={"w" in u ? "flex justify-center overflow-hidden" : "overflow-hidden"} style={{ minHeight: u.h }} />
    </aside>
  );
}
