"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Stepper from "@/components/Stepper";
import Logo from "@/components/Logo";
import LangPill from "@/components/LangPill";
import { Boo, Pip } from "@/components/Mascot";
import { Confetti, Heart, Sparkle } from "@/components/Doodles";
import { FaInstagram, FaShareNodes, FaSnapchat, FaWhatsapp } from "react-icons/fa6";
import { useToast } from "@/components/Toast";
import { useT } from "@/lib/i18n";
import { QUESTIONS, cleanName } from "@/lib/questions";

const PRON = [["he", "-rotate-[5deg]"], ["she", "rotate-3"], ["they", "-rotate-2"]] as const;
const DRAFT = "draft";
const MAX_SKIPS = 10;

const shuffle = <T,>(a: T[]) => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
};

function Band() {
  return (
    <div className="sky flex items-center justify-between px-4 pt-4 pb-8">
      <Link href="/" className="sqbtn" aria-label="Home">‹</Link>
      <div className="scale-50 -my-8"><Logo /></div>
      <LangPill />
    </div>
  );
}

export default function Create() {
  const [step, setStep] = useState<"name" | "pron" | "q" | "making" | "share">("name");
  const [name, setName] = useState("");
  const [pron, setPron] = useState("");
  const [pool, setPool] = useState(QUESTIONS);
  const [link, setLink] = useState("");
  const [token, setToken] = useState("");
  const [err, setErr] = useState("");
  const [toast, say] = useToast();
  const [copied, setCopied] = useState(false);
  const t = useT();
  const valid = !!cleanName(name);

  // C6: a webview reload mid-quiz resumes where the creator left off
  useEffect(() => {
    try {
      const d = JSON.parse(sessionStorage.getItem(DRAFT) ?? "null");
      if (d?.step === "q" && cleanName(d.name)) { setName(d.name); setPron(d.pron); setStep("q"); }
    } catch {}
  }, []);

  async function done(items: { questionId: string; optionId: string }[]) {
    setStep("making");
    try {
      const [res] = await Promise.all([
        fetch("/api/quizzes", { method: "POST", body: JSON.stringify({ name: name.trim(), pronoun: pron, items: items.map((i) => ({ questionId: i.questionId, answerOptionId: i.optionId })) }) }),
        new Promise((r) => setTimeout(r, 1200)), // anticipation beat (C7)
      ]);
      if (!res.ok) throw new Error(String(res.status));
      const { slug, token } = await res.json();
      localStorage.setItem("mine", JSON.stringify({ slug, token }));
      try { localStorage.setItem(`tok:${slug}`, token); } catch {}
      sessionStorage.removeItem(DRAFT);
      sessionStorage.removeItem("stepper:create");
      setLink(`${location.origin}/q/${slug}`);
      setToken(token);
      setStep("share");
    } catch (e) {
      setErr(String(e).includes("429") ? t("tooMany") : t("err"));
      setStep("q"); // answers are still in sessionStorage; tapping the last answer again retries
    }
  }

  const copy = async () => {
    try { await navigator.clipboard.writeText(link); } catch {}
    setCopied(true); say(t("linkCopied")); setTimeout(() => setCopied(false), 2000);
  };

  if (step === "name") return (
    <>
      <Band />
      <form className="px-4 -mt-2 space-y-5 text-center" onSubmit={(e) => { e.preventDefault(); if (valid) setStep("pron"); }}>
        <div className="relative pt-4">
          <Sparkle className="left-4 top-16" s={28} /><Heart className="left-10 top-2" c="#FF5C93" s={22} delay={1} />
          <div className="inline-block -rotate-[7deg] bg-pink-100 border-[3px] border-[#FFB3CC] rounded-[30px] px-8 py-4 hand">
            <span className="text-[22px] block">{t("whatsYour")}</span><span className="text-[34px] text-pink-500">{t("name")}</span>
          </div>
          <div className="absolute right-2 -bottom-6"><Boo mood="happy" wave size={100} /></div>
        </div>
        <div className="relative pt-10">
          <input className={`input pr-16 ${name.trim() && !valid ? "err" : ""}`} maxLength={15} value={name} onChange={(e) => { setName(e.target.value); setErr(""); }} placeholder={t("namePh")} autoFocus autoComplete="off" enterKeyHint="next" aria-label={t("name")} />
          <span className="absolute right-5 top-[62px] text-sm font-extrabold">{name.length}/15</span>
        </div>
        {name.trim() && !valid && <p className="text-bad font-bold">{t("badName")}</p>}
        {err && <p className="text-bad font-bold" role="alert">{err}</p>}
        <p className="text-sm">{t("nameHint")}</p>
        <button className="btn" disabled={!valid}>{t("cont")} <span className="arrow">→</span></button>
      </form>
    </>
  );

  if (step === "pron") return (
    <>
      <Band />
      <div className="px-4 space-y-5 text-center">
        <p className="hand text-2xl">{t("hi")} <span style={{ color: "#FF9F43" }}>{name.trim()}</span> 👋</p>
        <div className="card"><div className="in"><h2 className="text-3xl font-extrabold">{t("howCall")} <span className="text-pink-500">{t("callYou")}</span></h2></div></div>
        <div className="flex justify-center gap-3">
          {PRON.map(([v, r]) => (
            <button key={v} onClick={() => {
              setPron(v);
              setPool(shuffle(QUESTIONS)); // a fresh mix every quiz
              try { sessionStorage.setItem(DRAFT, JSON.stringify({ step: "q", name: name.trim(), pron: v })); sessionStorage.removeItem("stepper:create"); } catch {}
              setTimeout(() => setStep("q"), 300);
            }}
              className={`w-[106px] h-[132px] bg-white rounded-[22px] flex flex-col items-center justify-center gap-1 transition-transform ${r} ${pron === v ? "outline outline-[3px] outline-offset-[3px] outline-pink-500 scale-105" : ""}`}
              style={{ boxShadow: "0 6px 0 #D3DBE8, 0 12px 22px rgb(80 120 180 / .10)" }}>
              <span className={pron === v ? "hop" : ""}><Pip size={64} mood={pron === v ? "closed" : "happy"} /></span><span className="hand text-lg">{t(v)}</span>
            </button>
          ))}
        </div>
        <p className="text-sm">{t("pronHint")}</p>
        <button className="btn ghost" onClick={() => setStep("name")}>{t("back")}</button>
      </div>
    </>
  );

  if (step === "q") return (
    <>
      {err && <p className="text-bad font-bold text-center pt-4" role="alert">{err}</p>}
      <Stepper name={name.trim()} questions={pool.slice(0, 10)} skippable={pool.slice(10, 10 + MAX_SKIPS)} onDone={done} storageKey="stepper:create" />
    </>
  );

  if (step === "making") return (
    <div className="sky min-h-dvh grid place-items-center text-center px-6">
      <div><span className="hop inline-block"><Pip size={120} mood="closed" /></span><p className="hand text-2xl mt-4 animate-pulse">{t("making")}</p></div>
    </div>
  );

  const text = `${t("howWell1")} ${name.trim()} ${t("howWell2")} 👀 ${link}`;
  const canShare = typeof navigator !== "undefined" && "share" in navigator;
  const slug = link.split("/q/")[1];
  return (
    <>
      <Band />
      <div className="px-4 space-y-4 text-center pb-8">
        <Confetti />
        <div className="flex justify-center"><Pip size={90} mood="closed" wave /><Boo size={90} mood="closed" /></div>
        <h2 className="text-3xl font-extrabold">{t("ready")}</h2>
        <div className="flex items-center gap-2 bg-white rounded-[22px] border-[2.5px] border-dashed border-cyan-300 p-2 pl-4">
          <span className="flex-1 truncate text-blue-600 font-bold text-left" dir="ltr">{link}</span>
          <button className="h-11 px-4 rounded-2xl bg-pink-500 text-white font-extrabold" onClick={copy}>{copied ? t("copied") : t("copy")}</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a className="btn green sm" target="_blank" rel="noreferrer" href={`https://wa.me/?text=${encodeURIComponent(text)}`}><FaWhatsapp size={26} aria-hidden />{t("wa")}</a>
          <button className="btn ig sm" onClick={async () => { await copy(); say(t("igHint")); }}><FaInstagram size={26} aria-hidden />{t("ig")}</button>
          <a className="btn snap sm" target="_blank" rel="noreferrer" href={`https://www.snapchat.com/scan?attachmentUrl=${encodeURIComponent(link)}`}><FaSnapchat size={26} aria-hidden />{t("snap")}</a>
          <button className="btn alt sm" onClick={() => (canShare ? navigator.share({ text, url: link }).catch(() => {}) : copy())}><FaShareNodes size={22} aria-hidden />{canShare ? t("more") : t("copyLink")}</button>
        </div>
        <div className="bg-yellow-100 border-2 border-yellow-400 rounded-[20px] p-4 text-sm font-bold">{t("saveWarn")}</div>
        <Link className="btn alt" href={`/s/${slug}#k=${token}`}>{t("viewBoard")}</Link>
      </div>
      {toast}
    </>
  );
}
