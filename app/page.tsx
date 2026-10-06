"use client";
import Link from "next/link";
import Mine from "@/components/Mine";
import LangPill from "@/components/LangPill";
import ModeToggle from "@/components/ModeToggle";
import { Boo, Pip } from "@/components/Mascot";
import Logo from "@/components/Logo";
import { Clouds, Heart, Sparkle } from "@/components/Doodles";
import Emoji from "@/components/Emoji";
import { useT } from "@/lib/i18n";
import { useMode } from "@/lib/theme";

const steps = [["✍️", "s1"], ["📤", "s2"], ["🏆", "s3"]];

export default function Home() {
  const t = useT();
  const love = useMode() === "couples";
  return (
    <>
      <header className="sky relative text-center px-4 pt-4 pb-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 max-w-[270px]"><ModeToggle /></div>
          <LangPill />
        </div>
        <Sparkle c="#fff" className="right-4 top-24" /><Sparkle className="left-6 top-28" s={30} delay={1} /><Sparkle c="#B79CFF" className="right-10 top-60" s={20} delay={2} />
        <div className="absolute left-2 top-40 bob"><Pip mood={love ? "love" : "shock"} size={96} /></div>
        <div className="absolute right-2 top-40 bob" style={{ animationDelay: "1s" }}><Boo mood={love ? "love" : "smug"} wave size={100} /></div>
        <div className="mt-4"><Logo /></div>
        <p className="hand inline-block mt-6 bg-white/90 text-ink rounded-xl px-6 py-2 -rotate-1 shadow">{t("tagline")}</p>
        <div className="mt-6 -mx-4 -mb-6"><Clouds /></div>
      </header>

      <div className="px-4 space-y-10 pb-10">
        <div className="card relative mt-2">
          <Heart className="-right-1 -top-3 z-10" s={44} />
          <Sparkle className="left-6 top-14 z-10" s={22} />
          <div className="in text-center space-y-4">
            <div className="flex justify-center items-end gap-3 rounded-full bg-sky-100 mx-6 pt-4 px-4">
              <Pip size={110} mood={love ? "love" : "happy"} /><Boo size={110} mood={love ? "love" : "happy"} />
            </div>
            <h2 className="text-[34px] leading-10 font-extrabold">
              {t("heroA")}<br /><span className="text-pink-500">&amp;</span><br />
              <span className="tape">{t("heroBlock")}</span> {t("heroB")}
            </h2>
            <div className="wavy mx-8" />
            <Link href={love ? "/create/couples" : "/create"} className="btn">{t("create")} <span className="arrow">→</span></Link>
            <Mine mode={love ? "couples" : "friends"} />
          </div>
        </div>

        <section className="text-center space-y-4">
          <h3 className="text-3xl font-extrabold">{t("howTitle")}</h3>
          <p className="text-pink-500 font-extrabold">{t("howSub")}</p>
          <ul className="text-left divide-y divide-ink/10">
            {steps.map(([e, k]) => (
              <li key={k} className="flex gap-4 py-5">
                <span className="w-14 h-14 shrink-0 grid place-items-center rounded-2xl bg-pink-100"><Emoji e={e} size={38} /></span>
                <div><b className="uppercase text-lg">{t(k + "t")}</b><p className="leading-6 text-ink/80">{t(k + "d")}</p></div>
              </li>
            ))}
          </ul>
        </section>
        <footer className="text-center text-xs opacity-60">{t("footer")}</footer>
      </div>
    </>
  );
}
