"use client";
import Link from "next/link";
import { use, useCallback, useEffect, useRef, useState } from "react";
import { Boo } from "@/components/Mascot";
import Emoji from "@/components/Emoji";
import LangPill from "@/components/LangPill";
import Confirm from "@/components/Confirm";
import { useToast } from "@/components/Toast";
import { byId, tier } from "@/lib/questions";
import { locQ, tl, useLang, useT } from "@/lib/i18n";

type Opt = { emoji: string; label: string } | null;
type Player = { id: string; name: string; score: number; detail: { qid: string; correct: boolean; you: Opt; they: Opt }[] };
type Board = { name: string; players: Player[] };
const TIER_C: Record<string, [string, string]> = { Bestie: ["#FFF4CC", "#8A6A00"], "Real one": ["#DDF8E6", "#167A3E"], Sus: ["#FFF1E8", "#9C4A12"], "Fake friend": ["#FFE1E4", "#C21F33"] };

export default function Scoreboard({ params }: PageProps<"/s/[slug]">) {
  const { slug } = use(params);
  const t = useT();
  const lang = useLang();
  const [toast, say] = useToast();
  const [b, setB] = useState<Board | null>(null);
  const [bad, setBad] = useState(false);
  const [gone, setGone] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [asking, setAsking] = useState(false);
  const token = useRef("");

  useEffect(() => {
    // The key arrives once in the URL fragment; keep it in storage so a refresh still works, then scrub the address bar.
    const fromHash = location.hash.match(/k=([\w-]+)/)?.[1];
    let tok = fromHash ?? "";
    try {
      if (!tok) tok = localStorage.getItem(`tok:${slug}`) ?? JSON.parse(localStorage.getItem("mine") ?? "null")?.token ?? "";
      if (tok) localStorage.setItem(`tok:${slug}`, tok);
    } catch {}
    token.current = tok;
    if (fromHash) history.replaceState(null, "", location.pathname);
    let alive = true;
    const load = () =>
      fetch(`/api/quizzes/${slug}/scoreboard`, { headers: { Authorization: `Bearer ${token.current}` } })
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((d) => alive && setB(d))
        .catch(() => alive && setBad(true));
    load();
    const timer = setInterval(load, 15000); // polling (PRD §5.4)
    return () => { alive = false; clearInterval(timer); };
  }, [slug]);

  const link = () => `${location.origin}/q/${slug}`;
  const shareAgain = useCallback(async () => {
    if (!b) return;
    const text = `${t("howWell1")} ${b.name} ${t("howWell2")} 👀`;
    if (navigator.share) { navigator.share({ text, url: link() }).catch(() => {}); return; }
    try { await navigator.clipboard.writeText(link()); say(t("linkCopied")); } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [b, t, say]);

  async function hide(id: string) {
    const r = await fetch(`/api/quizzes/${slug}/attempts/${id}`, { method: "PATCH", headers: { Authorization: `Bearer ${token.current}` }, body: JSON.stringify({ hidden: true }) });
    if (r.ok) { setB((x) => x && { ...x, players: x.players.filter((p) => p.id !== id) }); setOpen(null); }
  }

  async function remove() {
    setAsking(false);
    const r = await fetch(`/api/quizzes/${slug}`, { method: "DELETE", headers: { Authorization: `Bearer ${token.current}` } });
    if (!r.ok) return;
    try { localStorage.removeItem(`tok:${slug}`); const m = JSON.parse(localStorage.getItem("mine") ?? "null"); if (m?.slug === slug) localStorage.removeItem("mine"); } catch {}
    setGone(true);
  }

  if (gone) return (
    <div className="p-6 pt-16 text-center space-y-4"><Boo mood="closed" size={120} className="mx-auto" /><p className="font-bold text-lg">{t("deleted")}</p><Link href="/" className="btn">{t("home")}</Link></div>
  );
  if (bad) return (
    <div className="p-6 pt-16 text-center space-y-4"><Boo mood="sad" size={120} className="mx-auto" /><p className="font-bold">{t("missingKey")}</p><Link href="/" className="btn">{t("home")}</Link></div>
  );
  if (!b) return <div className="splash"><div className="dots"><i /><i /><i /></div></div>;

  const avg = b.players.length ? (b.players.reduce((s, p) => s + p.score, 0) / b.players.length).toFixed(1) : "–";
  const toBlock = b.players.filter((p) => p.score <= 3).length;

  return (
    <>
      <div className="sky px-4 pt-4 pb-10 text-center">
        <div className="flex justify-between items-center"><Link href="/" className="sqbtn" aria-label={t("home")}>‹</Link><LangPill /></div>
        <h1 className="text-3xl font-extrabold mt-3">{b.name}{t("scoreboardOf")}</h1>
      </div>
      <div className="px-4 space-y-4 -mt-6 pb-10">
        <div className="grid grid-cols-3 gap-3 text-center">
          {[["players", b.players.length], ["average", avg], ["toBlock", toBlock]].map(([l, v]) => (
            <div key={l} className="bg-white rounded-[20px] py-3 shadow-[0_4px_0_#DCE4EF]"><div className="text-2xl font-extrabold">{v}</div><div className="text-[13px] uppercase tracking-wider font-bold text-[#8A96B0]">{t(String(l))}</div></div>
          ))}
        </div>

        {!b.players.length && (
          <div className="text-center space-y-3 py-4"><Boo mood="sad" size={120} className="mx-auto" /><p className="font-bold">{t("noPlayers")}</p></div>
        )}

        {b.players.map((p, i) => {
          const tr = tier(p.score), [bg, fg] = TIER_C[tr.name];
          return (
            <div key={p.id} className="space-y-2">
              <button className="row relative" onClick={() => setOpen(open === p.id ? null : p.id)} aria-expanded={open === p.id}>
                <span className="rank">{i + 1}</span>
                <span className="flex-1 text-lg font-extrabold truncate">{p.name}</span>
                {p.score <= 3 && <span className="stamp">{t("block")}</span>}
                <span className="pill inline-flex items-center gap-1" style={{ background: bg, color: fg }}><Emoji e={tr.emoji} size={20} />{p.score}/10</span>
                <span aria-hidden className="text-[#A5B0C6]">{open === p.id ? "⌃" : "›"}</span>
              </button>
              {open === p.id && (
                <div className="space-y-2 stepin">
                  {p.detail.map((d) => (
                    <div key={d.qid} className="bg-white rounded-[20px] p-3 space-y-2">
                      <p className="font-extrabold">{locQ(byId(d.qid)!, lang).text.replace("{name}", b.name)}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="rounded-xl bg-sky-100 p-2"><b className="block text-[11px] uppercase tracking-wider">{t("youSaid")}</b><span className="inline-flex items-center gap-1.5">{d.you && <Emoji e={d.you.emoji} size={22} />}{d.you && tl(d.you.label, lang)}</span></div>
                        <div className={`rounded-xl p-2 ${d.correct ? "bg-ok-soft" : "bg-bad-soft"}`}><b className="block text-[11px] uppercase tracking-wider">{p.name} {t("said")} {d.correct ? "✓" : "✕"}</b>{d.they ? <span className="inline-flex items-center gap-1.5"><Emoji e={d.they.emoji} size={22} />{tl(d.they.label, lang)}</span> : "—"}</div>
                      </div>
                    </div>
                  ))}
                  <button className="btn danger sm" onClick={() => hide(p.id)}>{t("hide")}</button>
                </div>
              )}
            </div>
          );
        })}

        <button className="btn mt-2" onClick={shareAgain}>{t("shareAgain")}</button>
        <button className="btn ghost !text-bad" onClick={() => setAsking(true)}>{t("deleteQuiz")}</button>
      </div>
      <Confirm open={asking} title={t("delTitle")} body={t("delBody")} action={t("del")} onYes={remove} onClose={() => setAsking(false)} />
      {toast}
    </>
  );
}
