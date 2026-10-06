"use client";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRight, FaChartSimple, FaCrown, FaTrash, FaUsers, FaBolt, FaHeart } from "react-icons/fa6";
import Confirm from "@/components/Confirm";
import { usePinMode } from "@/lib/theme";

type Quiz = { slug: string; name: string; kind: string; players: number; at: number };
type Player = { id: string; name: string; score: number; hidden: boolean; at: number; slug: string; creator: string; kind: string };
type Data = { totals: { quizzes: number; playersFinished: number; quizzesLast24h: number; playersLast24h: number; byKind: Record<string, number> }; quizzes: Quiz[]; players: Player[] };

const when = (t: number) => new Date(t).toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
// label, tile colours, bar colour
const KIND: Record<string, [string, string, string]> = {
  friends: ["Friends", "#E3F0FF", "#2F8CFF"], sweet: ["Couples · Sweet", "#FFE4EE", "#FF5C93"],
  spicy: ["Couples · Spicy", "#FFEBD9", "#FF8A3D"], extreme: ["Couples · Extreme", "#EADCFF", "#8B5CF6"],
};
const kind = (k: string) => KIND[k] ?? [k, "#EEF1F8", "#9AA5C4"];

// Admin panel: every creator (quiz) and every player (nickname + score). Names only; the app never stores birth dates.
export default function Admin() {
  usePinMode("friends");
  const [data, setData] = useState<Data | null>(null);
  const [state, setState] = useState<"loading" | "login" | "ok">("loading");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [tab, setTab] = useState<"players" | "creators">("players");
  const [q, setQ] = useState("");
  const [del, setDel] = useState<Quiz | null>(null);

  const load = useCallback(async () => {
    const r = await fetch("/api/admin/overview");
    if (r.status === 401) return setState("login");
    setData(await r.json());
    setState("ok");
  }, []);
  useEffect(() => { load(); }, [load]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    const r = await fetch("/api/admin/login", { method: "POST", body: JSON.stringify({ id, password: pw }) });
    if (r.ok) { setPw(""); load(); } else setErr(r.status === 429 ? "Too many tries, wait a few minutes." : "Wrong id or password.");
  }
  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); setData(null); setState("login"); }
  async function remove(slug: string) { setDel(null); await fetch(`/api/admin/quizzes/${slug}`, { method: "DELETE" }); load(); }

  if (state === "loading") return <div className="splash"><div className="dots"><i /><i /><i /></div></div>;

  if (state === "login") return (
    <main className="qz grid place-items-center">
      <form onSubmit={login} className="qz-card w-full max-w-sm p-6 space-y-4 text-center">
        <span className="qz-tile mx-auto !w-16 !h-16 !rounded-[20px] text-2xl" style={{ background: "#FFF1C2", color: "#F5A524" }}><FaCrown /></span>
        <h1 className="text-3xl font-extrabold">Admin</h1>
        <input className="qz-input" value={id} onChange={(e) => setId(e.target.value)} placeholder="Id" autoComplete="username" aria-label="Id" />
        <input className="qz-input" type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Password" autoComplete="current-password" aria-label="Password" />
        {err && <p className="font-bold text-bad" role="alert">{err}</p>}
        <button className="qz-btn w-full" disabled={!id || !pw}>Log in <FaArrowRight /></button>
      </form>
    </main>
  );

  const d = data!, term = q.trim().toLowerCase();
  const players = d.players.filter((p) => !term || `${p.name} ${p.creator}`.toLowerCase().includes(term));
  const quizzes = d.quizzes.filter((x) => !term || x.name.toLowerCase().includes(term));
  const stats = [
    { l: "Quizzes", v: d.totals.quizzes, i: <FaHeart />, bg: "#FFE4EE", fg: "#FF5C93" },
    { l: "Players", v: d.totals.playersFinished, i: <FaUsers />, bg: "#E3F0FF", fg: "#2F8CFF" },
    { l: "Quizzes 24h", v: d.totals.quizzesLast24h, i: <FaBolt />, bg: "#FFF1C2", fg: "#F5A524" },
    { l: "Players 24h", v: d.totals.playersLast24h, i: <FaChartSimple />, bg: "#DDF7E8", fg: "#2FBF68" },
  ];
  const kinds = Object.entries(d.totals.byKind);
  const top = Math.max(1, ...kinds.map(([, n]) => n));

  return (
    <main className="qz">
      <div className="mx-auto max-w-2xl space-y-4 pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Admin <span className="text-[#2F8CFF]">panel</span></h1>
          <button className="qz-btn soft" onClick={logout}>Log out</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.l} className="qz-card qz-row">
              <span className="qz-tile" style={{ background: s.bg, color: s.fg }}>{s.i}</span>
              <div><div className="text-2xl font-extrabold leading-none">{s.v}</div><div className="mt-1 text-[13px] font-bold text-[#7C89B2]">{s.l}</div></div>
            </div>
          ))}
        </div>

        {!!kinds.length && (
          <section className="qz-card p-4 space-y-3">
            <h2 className="text-lg font-extrabold">Quiz types</h2>
            {kinds.map(([k, n]) => (
              <div key={k}>
                <div className="flex justify-between text-sm font-bold"><span>{kind(k)[0]}</span><span>{n}</span></div>
                <div className="qz-bar mt-1"><i style={{ width: `${(n / top) * 100}%`, background: kind(k)[2] }} /></div>
              </div>
            ))}
          </section>
        )}

        <div className="qz-tabs" role="tablist">
          <button role="tab" aria-selected={tab === "players"} onClick={() => setTab("players")}>Players ({d.players.length})</button>
          <button role="tab" aria-selected={tab === "creators"} onClick={() => setTab("creators")}>Creators ({d.quizzes.length})</button>
        </div>
        <input className="qz-input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name…" aria-label="Search" />

        <section className="qz-card divide-y divide-[#EEF1FA]">
          {tab === "players" ? players.map((p) => (
            <div key={p.id} className="qz-row">
              <span className="qz-tile" style={{ background: kind(p.kind)[1], color: kind(p.kind)[2] }}>{p.name.slice(0, 1).toUpperCase()}</span>
              <div className="min-w-0 flex-1">
                <b className="block truncate">{p.name}{p.hidden && <span className="ml-2 text-xs text-bad">hidden</span>}</b>
                <span className="text-sm text-[#7C89B2]">{p.creator}&apos;s quiz · {kind(p.kind)[0]} · {when(p.at)}</span>
                <div className="qz-bar mt-1.5"><i style={{ width: `${p.score * 10}%`, background: kind(p.kind)[2] }} /></div>
              </div>
              <b className="text-lg">{p.score}<span className="text-sm text-[#7C89B2]">/10</span></b>
            </div>
          )) : quizzes.map((x) => (
            <div key={x.slug} className="qz-row">
              <span className="qz-tile" style={{ background: kind(x.kind)[1], color: kind(x.kind)[2] }}>{x.name.slice(0, 1).toUpperCase()}</span>
              <div className="min-w-0 flex-1">
                <b className="block truncate">{x.name}</b>
                <span className="text-sm text-[#7C89B2]">{kind(x.kind)[0]} · {x.players} players · {when(x.at)}</span>
              </div>
              <a className="qz-btn soft !px-3" href={`/q/${x.slug}`} target="_blank" rel="noreferrer">Open</a>
              <button className="qz-tile !w-11 !h-11 text-bad" style={{ background: "#FFE5E8" }} onClick={() => setDel(x)} aria-label={`Delete ${x.name}'s quiz`}><FaTrash /></button>
            </div>
          ))}
          {(tab === "players" ? !players.length : !quizzes.length) && <p className="p-6 text-center font-bold text-[#7C89B2]">Nothing here yet.</p>}
        </section>
      </div>
      <Confirm open={!!del} title={`Delete ${del?.name}'s quiz?`} body="The quiz and all its players are removed for good." action="Delete" onYes={() => del && remove(del.slug)} onClose={() => setDel(null)} />
    </main>
  );
}
