import type { Metadata } from "next";
import Link from "next/link";
import Doc from "@/components/Doc";
import { EMAIL, TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Fake or Fam",
  description: "How to contact the Fake or Fam team about a quiz, a deletion request, a bug or a partnership.",
};

export default function Contact() {
  return (
    <Doc title="Contact us" sub="We read every message.">
      <p>
        Questions, bug reports, feedback or a quiz you want removed: email us at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, or WhatsApp / call <a href={`tel:${TEL}`}>+91 93119 08389</a>.
      </p>

      <h2>To report or remove a quiz</h2>
      <p>
        Send us the quiz link (it looks like <strong>/q/abc123</strong>) and tell us what is wrong, for example an offensive
        name or a quiz made about you without your consent. If you made the quiz yourself, you can delete it instantly from
        your scoreboard with the &quot;Delete quiz&quot; button.
      </p>

      <h2>To ask about your data</h2>
      <p>
        We don&apos;t have accounts, so we can only find a quiz by its link. Include the quiz link and, if you played it, the
        nickname you used. Our <Link href="/privacy">privacy policy</Link> explains what we store and for how long.
      </p>

      <h2>Everything else</h2>
      <p>
        Fake or Fam is made by Zenviq Digital, Hanumangarh, Rajasthan, India. You can also reach us through{" "}
        <a href="https://www.zenviqdigital.in/contact" target="_blank" rel="noopener">zenviqdigital.in</a>. Want a website, app or
        quiz campaign for your business? See <Link href="/for-business">what we build</Link>.
      </p>
    </Doc>
  );
}
