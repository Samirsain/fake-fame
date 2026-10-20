"use client";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRight, FaChartSimple, FaCrown, FaUsers } from "react-icons/fa6";

type Data = { players: number; playersLast24h: number };

// Admin panel: two numbers only (no names, no lists), so a visit costs one small request.
export default function Admin() {
  const [data, setData] = useState<Data | null>(null);
  const [state, setState] = useState<"loading" | "login" | "ok">("loading");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

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
    if (r.ok) { setPw(""); load(); } else setErr(r.status === 429 ? "Too many tries, wait a few minutes." : r.status === 503 ? "Admin login is not set up on the server (ADMIN_ID / ADMIN_PASSWORD)." : "Wrong id or password.");
  }
  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); setData(null); setState("login"); }

  if (state === "loading") return <div className="splash"><div className="dots"><i /><i /><i /></div></div>;

  if (state === "login") return (
    <main className="qz grid place-items-center">
      <form onSubmit={login} className="qz-card w-full max-w-sm p-6 space-y-4 text-center">
        <span className="qz-tile mx-auto !w-16 !h-16 !rounded-[20px] text-2xl" style={{ background: "#FFF1C2", color: "#F5A524" }}><FaCrown /></span>
        <h1 className="text-3xl font-extrabold">Admin</h1>
        <input className="qz-input" value={id} onChange={(e) => setId(e.target.value)} placeholder="Id" autoComplete="username" autoCapitalize="none" autoCorrect="off" spellCheck={false} aria-label="Id" />
        <input className="qz-input" type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Password" autoComplete="current-password" aria-label="Password" />
        {err && <p className="font-bold text-bad" role="alert">{err}</p>}
        <button className="qz-btn w-full" disabled={!id || !pw}>Log in <FaArrowRight /></button>
      </form>
    </main>
  );

  const stats = [
    { l: "Total players", v: data!.players, i: <FaUsers />, bg: "#E3F0FF", fg: "#2F8CFF" },
    { l: "Players last 24h", v: data!.playersLast24h, i: <FaChartSimple />, bg: "#DDF7E8", fg: "#2FBF68" },
  ];
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
      </div>
    </main>
  );
}
