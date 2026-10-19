"use client";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { useT } from "@/lib/i18n";
import { TEL, wa } from "@/lib/site";

// "Want something like this?" card for the studio that built the app. Shown once, at the very end of the result
// and share screens, never during play. It is plainly Zenviq's own message, not styled or labelled like an ad.
export default function ZenviqCard({ from }: { from: "result screen" | "share screen" }) {
  const t = useT();
  return (
    <aside aria-label="Zenviq Digital" className="card text-left !mt-8">
      <div className="in space-y-3">
        <p className="flex items-center gap-2 text-[13px] font-bold text-ink/60">
          {/* eslint-disable-next-line @next/next/no-img-element -- small static svg */}
          <img src="/zenviq-logo.svg" alt="Zenviq Digital" width={73} height={22} className="h-[22px] w-auto" />
          <span>{t("zvTag")}</span>
        </p>
        <p className="text-xl font-extrabold leading-tight">{t("zvTitle")}</p>
        <p className="text-[15px] leading-6 font-semibold text-ink/75">{t("zvBody")}</p>
        <div className="grid grid-cols-2 gap-3">
          <a className="btn green sm" href={wa(from)} target="_blank" rel="noopener"><FaWhatsapp size={24} aria-hidden />{t("zvWa")}</a>
          <a className="btn alt sm" href={`tel:${TEL}`}><FaPhone size={18} aria-hidden />{t("zvCall")}</a>
        </div>
        <Link href="/for-business" className="block text-center text-[15px] font-bold text-blue-600 underline underline-offset-4">{t("zvMore")}</Link>
      </div>
    </aside>
  );
}
