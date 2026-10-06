"use client";
import Emoji from "@/components/Emoji";
import { useT } from "@/lib/i18n";
import { useMode } from "@/lib/theme";

// A thin "18+ · Adults only" strip at the top of every couples-mode page.
export default function AdultBanner() {
  const t = useT();
  if (useMode() !== "couples") return null;
  return (
    <div role="note" className="adult-banner">
      <Emoji e="🔞" size={18} />
      <span>{t("adultBanner")}</span>
    </div>
  );
}
