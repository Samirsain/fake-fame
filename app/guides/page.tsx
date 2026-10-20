import type { Metadata } from "next";
import Link from "next/link";
import Doc, { MakeQuiz } from "@/components/Doc";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: "Friendship quiz guides — Fake or Fam",
  description: "Guides on making a friendship quiz, the best quiz questions to ask, what your score means, and the signs of a real friend.",
};

export default function Guides() {
  return (
    <Doc title="Guides" sub="Tips for better quizzes and better friendships.">
      <ul className="!list-none !p-0 space-y-3 mt-5">
        {GUIDES.map((g) => (
          <li key={g.slug} lang={g.lang}>
            <Link href={`/guides/${g.slug}`} className="card block">
              <span className="in block space-y-1">
                <b className="block text-xl leading-tight font-extrabold">{g.title}</b>
                <span className="block text-[15px] leading-6 font-medium text-ink/70">{g.description}</span>
                <span className="block text-sm font-bold text-pink-600">{g.read}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <MakeQuiz />
    </Doc>
  );
}
