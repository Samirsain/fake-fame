"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";
import type { Mode } from "@/lib/questions";

// "View my scoreboard" if this device already made a quiz of this kind (PRD §5.1). Friends and couples quizzes are remembered separately.
export default function Mine({ mode = "friends" }: { mode?: Mode }) {
  const t = useT();
  const [m, setM] = useState<{ slug: string; token: string } | null>(null);
  useEffect(() => {
    try { setM(JSON.parse(localStorage.getItem(mode === "couples" ? "mine:couples" : "mine") ?? "null")); } catch { setM(null); }
  }, [mode]);
  return m ? <Link href={`/s/${m.slug}#k=${m.token}`} className="btn alt">{t("myBoard")}</Link> : null;
}
