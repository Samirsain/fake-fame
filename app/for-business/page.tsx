import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import Doc from "@/components/Doc";
import { siteStats } from "@/lib/db";
import { EMAIL, TEL, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "For brands & businesses — Zenviq Digital, the team behind Fake or Fam",
  description: "Zenviq Digital built Fake or Fam. We build viral quiz campaigns, websites, apps, e-commerce stores and SEO for brands, colleges, events and small businesses in India.",
};

// Starting prices as listed on zenviqdigital.in; the final price is fixed in a written quote.
const SERVICES = [
  ["Viral campaigns like Fake or Fam", "Quizzes, contests, polls and microsites for brands, colleges and events", "Price on request"],
  ["Website development", "Business websites that load fast and rank on Google", "From ₹8,000"],
  ["E-commerce development", "Online stores with payments and order management", "From ₹25,000"],
  ["App development", "Web and mobile apps", "From ₹50,000"],
  ["SEO & Google ranking", "Get found by people searching for what you sell", "From ₹6,000/month"],
  ["AI automation & chatbots", "WhatsApp and website bots that answer customers", "From ₹10,000"],
  ["UI/UX design", "App and website design", "From ₹5,000"],
];

const IDEAS = [
  "A brand quiz where your products are the answer options, shared by customers on WhatsApp and Instagram.",
  "A college-fest leaderboard: every department makes a quiz and the best-known class wins.",
  "A wedding or sangeet quiz: \"How well do you know the couple?\" for the guests.",
  "An office team-building quiz for new joiners and remote teams.",
  "A fan quiz for creators and influencers, with a leaderboard of their biggest fans.",
];

const fmt = (n: number) => n.toLocaleString("en-IN");

export default async function ForBusiness() {
  await connection(); // live numbers: render per request, never at build time
  const stats = await siteStats().catch(() => null); // the page still works if the database is unreachable

  return (
    <Doc title="Want an app like this for your brand?" sub="Fake or Fam is built by Zenviq Digital, a web and app studio in Hanumangarh, Rajasthan.">
      <p>
        Fake or Fam spreads by itself: people make a quiz, share one link, and their friends bring in more friends. We design and build
        products like this, and the websites, stores and apps that businesses run on every day.
      </p>

      {stats && (
        <>
          <h2>Fake or Fam, right now</h2>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[[fmt(stats.quizzes), "quizzes made"], [fmt(stats.plays), "friends played"], ["3", "languages"]].map(([v, l]) => (
              <div key={l} className="bg-white rounded-[20px] py-3 shadow-[0_4px_0_var(--slab-row)]">
                <div className="text-2xl font-extrabold leading-tight">{v}</div>
                <div className="text-[12px] uppercase tracking-wider font-bold text-ink/55 leading-4 mt-1">{l}</div>
              </div>
            ))}
          </div>
          <p className="doc-sub mt-2">Counted live from our database. Quizzes delete themselves after 90 days, so these are last-90-day numbers.</p>
        </>
      )}

      <h2>What we build</h2>
      <ul className="!list-none !p-0 space-y-3">
        {SERVICES.map(([name, what, price]) => (
          <li key={name} className="row !items-start !min-h-0 !px-4 !py-3 flex-col !gap-0.5">
            <span className="flex w-full items-baseline justify-between gap-3">
              <b className="font-extrabold leading-snug">{name}</b>
              <span className="shrink-0 text-sm font-extrabold text-pink-600">{price}</span>
            </span>
            <span className="text-[15px] leading-6 text-ink/70">{what}</span>
          </li>
        ))}
      </ul>
      <p className="doc-sub">The final price depends on the scope and is fixed in a written quote. Domain, hosting and payment-gateway fees are separate.</p>

      <h2>Quiz campaign ideas</h2>
      <ul>{IDEAS.map((i) => <li key={i}>{i}</li>)}</ul>

      <h2>How it works</h2>
      <ol>
        <li>Message us on WhatsApp or call, and tell us what you have in mind.</li>
        <li>We understand your goal, audience and budget on a short call.</li>
        <li>You get a written quote with the scope, price and timeline.</li>
        <li>We design, build and launch, and you see progress along the way.</li>
      </ol>

      <h2>Talk to us</h2>
      <div className="grid grid-cols-2 gap-3">
        <a className="btn green sm" href={wa("for-business page")} target="_blank" rel="noopener"><FaWhatsapp size={24} aria-hidden />WhatsApp</a>
        <a className="btn alt sm" href={`tel:${TEL}`}><FaPhone size={18} aria-hidden />Call</a>
      </div>
      <p className="mt-4">
        Phone and WhatsApp: <a href={`tel:${TEL}`}>+91 93119 08389</a> · Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · Website:{" "}
        <a href="https://www.zenviqdigital.in/?utm_source=fake-or-fam&utm_medium=for-business" target="_blank" rel="noopener">zenviqdigital.in</a>
      </p>
      <p className="doc-sub">Just here for the quiz? <Link href="/create">Make your own friendship quiz</Link>.</p>
    </Doc>
  );
}
