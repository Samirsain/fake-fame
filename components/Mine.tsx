"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";

// "View my scoreboard" if this device already made a quiz (PRD §5.1)
export default function Mine() {
  const t = useT();
  const [m, setM] = useState<{ slug: string; token: string } | null>(null);
  useEffect(() => {
    try { setM(JSON.parse(localStorage.getItem("mine") ?? "null")); } catch {}
  }, []);
  return m ? <Link href={`/s/${m.slug}#k=${m.token}`} className="btn alt">{t("myBoard")}</Link> : null;
}
