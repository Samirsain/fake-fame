"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import Stepper from "@/components/Stepper";
import LangPill from "@/components/LangPill";
import AgeGate from "@/components/AgeGate";
import AgeGate21 from "@/components/AgeGate21";
import { Boo, Pip } from "@/components/Mascot";
import { Confetti } from "@/components/Doodles";
import Emoji from "@/components/Emoji";
import { useToast } from "@/components/Toast";
import { TIER_COLORS, band, cleanName, type Level, type Mode, type Question } from "@/lib/questions";
import { useLang, useT } from "@/lib/i18n";
import { confirmAdult, isAdult, isAdult21, setMode } from "@/lib/theme";
import { speak, unlockVoice } from "@/lib/voice";
import VoiceToggle from "@/components/VoiceToggle";

type Quiz = { name: string; mode?: Mode; level?: Level; players: number; questions: Question[] };
type Result = { id: string; name: string; score: number; rank?: number; tier: { emoji: string; name: string; copy: string; band?: number }; top5: { id: string; name: string; score: number }[] };

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t0 = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      const p = Math.min((now - t0) / 900, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 4)))); // ease-out-quart
      if (p < 1) raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{n}</>;
}

export default function Play({ params }: PageProps<"/q/[slug]">) {
  const { slug } = use(params);
  const t = useT();
  const lang = useLang();
  const router = useRouter();
  const [toast, say] = useToast();
  const [quiz, setQuiz] = useState<Quiz | null | undefined>();
  const [adult, setAdult] = useState<boolean | null>(null); // 18+ confirmation, only asked for couples quizzes
  const [me, setMe] = useState("");
  const [attempt, setAttempt] = useState("");
  const [starting, setStarting] = useState(false);
  const [err, setErr] = useState("");
  const [res, setRes] = useState<Result | null>(null);

  useEffect(() => {
    fetch(`/api/quizzes/${slug}`).then((r) => (r.ok ? r.json() : null)).then(setQuiz).catch(() => setQuiz(null));
    try { setRes(JSON.parse(localStorage.getItem(`done:${slug}`) ?? "null")); } catch {} // one attempt per device (P5)
  }, [slug]);
  useEffect(() => { if (quiz) setAdult(quiz.mode === "couples" ? isAdult() && (quiz.level !== "extreme" || isAdult21()) : true); }, [quiz]);

  async function start() {
    if (!cleanName(me) || starting) return;
    unlockVoice();
    setStarting(true); setErr("");
    try {
      const r = await fetch(`/api/quizzes/${slug}/attempts`, { method: "POST", body: JSON.stringify({ name: me.trim() }) });
      if (r.status === 429) throw new Error(t("tooMany"));
      if (!r.ok) throw new Error(t("err"));
      setAttempt((await r.json()).attemptId);
      speak("start", lang);
    } catch (e) {
      setErr((e as Error).message || t("err"));
    }
    setStarting(false);
  }

  async function check(questionId: string, optionId: string) {
    const r = await fetch(`/api/quizzes/${slug}/answer`, { method: "POST", body: JSON.stringify({ attemptId: attempt, questionId, optionId }) });
    if (!r.ok) throw new Error("answer failed");
    return r.json() as Promise<{ correct: boolean; correctOptionId: string }>;
  }

  async function finish() {
    const r = await fetch(`/api/quizzes/${slug}/finish`, { method: "POST", body: JSON.stringify({ attemptId: attempt }) });
    if (!r.ok) { setErr(t("err")); return; }
    const out: Result = await r.json();
    localStorage.setItem(`done:${slug}`, JSON.stringify(out));
    setRes(out);
    if (quiz?.mode !== "couples") speak(`tier${out.tier.band ?? band(out.score)}`, lang); // the tier lines are written for friends quizzes
  }

  // Share the score card as an image where the browser can (phones: straight into Instagram/Snapchat/WhatsApp), else share the text + link.
  const cardUrl = () => `/q/${slug}/card?a=${res?.id}`;
  const shareScore = async () => {
    if (!res || !quiz) return;
    const text = t("scoreText").replace("{s}", String(res.score)).replace("{name}", quiz.name);
    const url = location.href;
    try {
      const blob = await (await fetch(cardUrl())).blob();
      const file = new File([blob], "my-score.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) { await navigator.share({ files: [file], text, url }); return; }
    } catch (e) { if ((e as Error).name === "AbortError") return; }
    if (navigator.share) { navigator.share({ text, url }).catch(() => {}); return; }
    try { await navigator.clipboard.writeText(`${text} ${url}`); say(t("linkCopied")); } catch {}
  };

  if (quiz === undefined) return <div className="splash"><div className="dots"><i /><i /><i /></div></div>;
  if (!quiz) return (
    <div className="p-6 pt-16 text-center space-y-4">
      <Boo mood="sad" size={120} className="mx-auto" />
      <p className="font-bold text-lg">{t("notFound")}</p><p className="text-sm">{t("gone")}</p>
      <Link href="/create" className="btn">{t("createOwn")}</Link>
    </div>
  );

  const couples = quiz.mode === "couples";
  const createHref = couples ? "/create/couples" : "/create";

  // couples quiz opened by link: nothing of it is shown until the player has seen the 18+ warning
  if (adult !== true) return (
    <>
      <div className="min-h-dvh" />
      {quiz.level === "extreme" && !isAdult21()
        ? <AgeGate21 open={adult === false} onYes={() => { confirmAdult(); setAdult(true); }} onNo={() => { setMode("friends"); router.push("/"); }} />
        : <AgeGate open={adult === false} onYes={() => { confirmAdult(); setAdult(true); }} onNo={() => { setMode("friends"); router.push("/"); }} />}
    </>
  );

  if (res) {
    const [bg, fg, arc] = TIER_COLORS[res.tier.band ?? band(res.score)];
    const inTop = res.top5.some((p) => p.id === res.id);
    const good = res.score >= 7;
    return (
      <div className="space-y-5 px-4 py-6 text-center">
        {res.score >= 9 && <Confetti />}
        <div className="flex justify-center items-end -space-x-1">
          <Pip size={84} mood={res.score <= 3 ? "sad" : res.score <= 6 ? "shock" : couples ? "love" : "closed"} wave={res.score >= 9} />
          <Boo size={84} mood={res.score <= 3 ? "sad" : res.score <= 6 ? "smug" : couples ? "love" : "closed"} flip />
        </div>
        <div className="ring" style={{ ["--c" as string]: arc, ["--ang" as string]: `${res.score * 36}deg` }} role="img" aria-label={`${res.score}/10`}>
          <div className="w-[146px] h-[146px] rounded-full bg-white grid place-items-center">
            <div className="text-[54px] font-extrabold leading-none"><CountUp to={res.score} /><span className="text-[28px] text-ink/50">/10</span></div>
          </div>
        </div>
        <span className="inline-block h-[42px] leading-[38px] px-5 rounded-full text-[19px] font-extrabold border-[2.5px]" style={{ background: bg, color: fg, borderColor: fg }}><Emoji e={res.tier.emoji} size={24} className="align-[-5px] mr-1.5" />{t("t:" + res.tier.name)}</span>
        <p className="text-lg font-bold">{t("c:" + res.tier.name)}</p>
        <div className="card"><div className="in text-left space-y-2">
          <p className="text-[13px] font-bold uppercase tracking-wider text-ink/50">{t("topFriends")}</p>
          {res.top5.map((p, i) => (
            <div key={p.id} className={`row ${p.id === res.id ? "me" : ""}`}>
              <span className="rank">{i + 1}</span>
              <span className="flex-1 text-lg font-extrabold truncate">{p.name}{p.id === res.id && <span className="ml-2 text-xs font-bold text-pink-600">{t("you")}</span>}</span>
              <b>{p.score}/10</b>
            </div>
          ))}
          {!inTop && (
            <div className="row me"><span className="rank">…</span><span className="flex-1 text-lg font-extrabold truncate">{res.name}<span className="ml-2 text-xs font-bold text-pink-600">{t("you")}</span></span><b>{res.score}/10</b></div>
          )}
        </div></div>
        <Link href={createHref} className="btn pink mt-2">{t("createOwn")} <span className="arrow">→</span></Link>
        <button className="btn ghost" onClick={shareScore}>{t("shareScore")}</button>
        <a className="btn ghost" href={cardUrl()} download="my-score.png">{t("saveCard")}</a>
        {good && <p className="sr-only">{t("c:" + res.tier.name)}</p>}
        {toast}
      </div>
    );
  }

  if (!attempt) return (
    <>
      <div className="sky text-center px-4 pt-4 pb-12">
        <div className="flex justify-end gap-2"><VoiceToggle /><LangPill /></div>
        <div className="flex justify-center mt-4"><Pip size={110} mood={couples ? "love" : "shock"} className="bob" /><Boo size={110} mood={couples ? "love" : "smug"} className="bob" flip /></div>
      </div>
      <form className="px-4 -mt-4 space-y-4 text-center" onSubmit={(e) => { e.preventDefault(); start(); }}>
        <div className="card"><div className="in space-y-3">
          <h1 className="text-3xl font-extrabold leading-9">{t("howWell1")} <span className="text-pink-500">{quiz.name}</span> {t("howWell2")}</h1>
          <div className="flex flex-wrap justify-center gap-2 text-sm font-extrabold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1"><Emoji e="👥" size={18} />{quiz.players} {t(quiz.players === 1 ? "playedOne" : "playedMany")}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100 px-3 py-1"><Emoji e="❓" size={18} />{t("tenQ")}</span>
            {couples && <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100 px-3 py-1"><Emoji e={quiz.level === "extreme" ? "🔞" : quiz.level === "spicy" ? "🔥" : "💕"} size={18} />{t(quiz.level === "extreme" ? "extremeTag" : quiz.level === "spicy" ? "spicyTag" : "couplesTag")}</span>}
          </div>
        </div></div>
        <input className="input" maxLength={15} value={me} onChange={(e) => setMe(e.target.value)} placeholder={t("yourName")} autoComplete="off" aria-label={t("yourName")} />
        {me.trim() && !cleanName(me) && <p className="text-bad font-bold">{t("badName")}</p>}
        {err && <p className="text-bad font-bold" role="alert">{err}</p>}
        <button className="btn pink" disabled={!cleanName(me) || starting}>{t("start")}</button>
        <p className="text-sm">{t("tease")}</p>
      </form>
    </>
  );

  return <Stepper name={quiz.name} questions={quiz.questions} check={check} onDone={finish} />;
}
