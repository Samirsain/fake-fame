import type { Metadata } from "next";
import Link from "next/link";
import Doc from "@/components/Doc";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy policy — Fake or Fam",
  description: "What Fake or Fam stores, how long it keeps it, the cookies used by Google ads, and how to delete your data.",
};

export default function Privacy() {
  return (
    <Doc title="Privacy policy" sub="Last updated: 19 October 2026">
      <p>
        This policy explains what information Fake or Fam (&quot;we&quot;, &quot;us&quot;) collects when you use this website, why, and
        what choices you have. Fake or Fam is operated by Zenviq Digital, Hanumangarh, Rajasthan, India. Questions:{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>No accounts, no email, no phone number. You only type a nickname.</li>
        <li>Quizzes and results delete themselves after 90 days.</li>
        <li>You can delete your quiz and all its results at any time from your scoreboard.</li>
        <li>We show ads from Google, which may use cookies. You can opt out of personalised ads.</li>
      </ul>

      <h2>What we collect</h2>
      <h3>When you make a quiz</h3>
      <ul>
        <li>The nickname you type and the pronoun you pick (used only for grammar).</li>
        <li>Your answers to the ten questions.</li>
        <li>A secret key for your scoreboard. We store only a one-way hash of it, so even we can&apos;t read the key.</li>
      </ul>
      <h3>When you play a friend&apos;s quiz</h3>
      <ul>
        <li>The nickname you type, the options you choose, your score and the time you played.</li>
        <li>The quiz creator can see your nickname, score and answers on their scoreboard. Other players see only the top five nicknames and scores.</li>
      </ul>
      <h3>Technical information</h3>
      <ul>
        <li>Your IP address is used briefly, in memory, to limit how many quizzes or attempts can be made per hour (to stop spam). It is not saved in our database.</li>
        <li>Our hosting provider, Vercel, keeps standard server logs (such as IP address, browser type and the page requested) for security and reliability.</li>
      </ul>
      <p>We do not ask for, and you should not enter, real names of other people, phone numbers, addresses or other sensitive information.</p>

      <h2>Information stored on your device</h2>
      <p>
        The site uses your browser&apos;s local storage (not cookies) to remember your language, whether the voice is on, the link
        to your latest quiz and scoreboard, and the result of quizzes you have already played, so you aren&apos;t asked to play
        the same quiz twice. You can clear this at any time by clearing your browser&apos;s site data.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To run the quiz: save answers, check guesses, calculate scores and show the scoreboard.</li>
        <li>To keep the service safe: rate limits, blocking abusive names, and removing quizzes that break our <Link href="/terms">terms</Link>.</li>
        <li>To understand overall usage, such as the number of quizzes made per day. We do not build profiles of individual users.</li>
      </ul>
      <p>We do not sell your information.</p>

      <h2>Advertising and cookies</h2>
      <p>
        We use Google AdSense to show ads. Third-party vendors, including Google, use cookies to serve ads based on your
        previous visits to this website or other websites. Google&apos;s use of advertising cookies enables it and its partners
        to serve ads to you based on your visits to this site and/or other sites on the internet.
      </p>
      <ul>
        <li>You can opt out of personalised advertising in Google&apos;s <a href="https://adssettings.google.com" target="_blank" rel="noopener">Ads Settings</a>.</li>
        <li>You can opt out of some third-party vendors&apos; use of cookies for personalised advertising at <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">aboutads.info</a>.</li>
        <li>Learn <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">how Google uses information from sites that use its services</a>.</li>
      </ul>
      <p>
        Visitors from the European Economic Area, the United Kingdom and Switzerland are asked for consent before personalised
        ads are shown, through Google&apos;s consent message.
      </p>

      <h2>Where data is stored and for how long</h2>
      <p>
        Quiz data is stored in a MongoDB Atlas database, and the site is hosted on Vercel. These providers may process data
        outside India. Every quiz, its attempts and results are deleted automatically 90 days after the quiz is created. When
        you delete a quiz from your scoreboard, it and all its results are deleted immediately.
      </p>

      <h2>Children</h2>
      <p>
        Fake or Fam is meant for a general audience and is not directed at children under 13. If you believe a child under 13
        has shared personal information with us, contact us and we will delete it.
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>Delete your quiz and all its results from your scoreboard at any time.</li>
        <li>Ask us to delete a quiz or an attempt by emailing the quiz link to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</li>
        <li>Clear the data on your device through your browser settings.</li>
      </ul>
      <p>
        Depending on where you live (for example under India&apos;s Digital Personal Data Protection Act, 2023, or the GDPR),
        you may have further rights to access, correct or erase your data. Contact us and we will help.
      </p>

      <h2>Changes to this policy</h2>
      <p>If we change this policy, we will update the date at the top of this page.</p>
    </Doc>
  );
}
