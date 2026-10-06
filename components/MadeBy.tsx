"use client";
import { useT } from "@/lib/i18n";

// "Made by Zenviq" credit with the company logo, shown at the bottom of every page.
// The utm tags let zenviqdigital.in analytics show how much traffic comes from this app.
const SITE = "https://www.zenviqdigital.in/?utm_source=fake-or-fam&utm_medium=footer";

export default function MadeBy() {
  const t = useT();
  return (
    <footer className="px-4 pt-4 pb-8 text-center">
      <a href={SITE} target="_blank" rel="noopener" aria-label="Zenviq Digital — zenviqdigital.in" className="madeby inline-flex flex-col items-center gap-1.5 rounded-2xl px-4 py-2 transition-opacity hover:opacity-80">
        <span className="inline-flex items-center gap-2 text-sm font-bold text-ink/70">
          {t("madeBy1") && <span>{t("madeBy1")}</span>}
          {/* eslint-disable-next-line @next/next/no-img-element -- small static svg */}
          <img src="/zenviq-logo.svg" alt="Zenviq Digital" width={96} height={29} className="h-[29px] w-auto" />
          {t("madeBy2") && <span>{t("madeBy2")}</span>}
        </span>
        <span className="text-xs font-bold text-ink/50">zenviqdigital.in</span>
      </a>
    </footer>
  );
}
