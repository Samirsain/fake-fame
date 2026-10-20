import type { Metadata } from "next";
import Link from "next/link";
import Doc, { MakeQuiz } from "@/components/Doc";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Fake or Fam — the friendship quiz",
  description: "What Fake or Fam is, how the friendship quiz works, who makes it, and answers to common questions.",
};

export default function About() {
  return (
    <Doc title="About Fake or Fam" sub="A free friendship quiz made in India.">
      <p>
        Fake or Fam is a small, free web app for a simple question: how well do your friends really know you? You answer ten
        quick questions about yourself, share one link with your friends, and see who gets the most right. It works in
        English, हिन्दी and Hinglish, on any phone, with no app to install and no account to create.
      </p>

      <h2>How it works</h2>
      <ol>
        <li><strong>Make your quiz.</strong> Type a nickname and answer ten everyday questions about your food, habits, favourite cartoons, cricket team, dream trip and more. Skip any question you don&apos;t like.</li>
        <li><strong>Share the link.</strong> Send it on WhatsApp, add it to an Instagram Story, or share it on Snapchat.</li>
        <li><strong>See who knows you.</strong> Each friend plays once and gets a score from 0 to 10. Your private scoreboard shows everyone&apos;s score and answers.</li>
      </ol>

      <h2>Why we made it</h2>
      <p>
        Friendship quizzes are one of the oldest games on the internet, and also one of the most fun. We wanted one that feels
        made for Indian friend groups, with questions about chai, street food and the IPL, speaks the way people actually text,
        and respects privacy: no sign-ups, only a nickname, and everything deletes itself after 90 days.
      </p>

      <h2>Who makes it</h2>
      <p>
        Fake or Fam is designed and built by <a href="https://www.zenviqdigital.in/" target="_blank" rel="noopener">Zenviq Digital</a>,
        a small digital studio in Hanumangarh, Rajasthan. The mascots, Pip and Boo, are original characters drawn for this app.
      </p>

      <h2>Common questions</h2>
      <h3>Is it free?</h3>
      <p>Yes. Making and playing quizzes is free. The site may show ads to cover hosting costs.</p>
      <h3>Do I need an account?</h3>
      <p>No. You only type a nickname. Your private scoreboard is opened with a secret link that only you get.</p>
      <h3>What do you store, and for how long?</h3>
      <p>Your nickname, your quiz answers, and your friends&apos; nicknames, answers and scores. Quizzes and results are deleted automatically after 90 days, and you can delete your quiz earlier from the scoreboard. The <Link href="/privacy">privacy policy</Link> has the details.</p>
      <h3>Can someone cheat?</h3>
      <p>Answers are checked on our server one question at a time and the first answer counts, so players can&apos;t see the right answers in advance or retry a question.</p>
      <h3>I lost my scoreboard link. What now?</h3>
      <p>The scoreboard link is the only key to your results, and we can&apos;t recover it for you. Open the site on the same phone and browser you used to make the quiz: the &quot;View my scoreboard&quot; button remembers your latest quiz. Otherwise, just make a new quiz.</p>
      <h3>How do I contact you?</h3>
      <p>Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or see the <Link href="/contact">contact page</Link>.</p>

      <MakeQuiz />
    </Doc>
  );
}
