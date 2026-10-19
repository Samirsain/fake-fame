import type { Metadata } from "next";
import Link from "next/link";
import Doc from "@/components/Doc";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use — Fake or Fam",
  description: "The rules for using Fake or Fam, the free friendship quiz.",
};

export default function Terms() {
  return (
    <Doc title="Terms of use" sub="Last updated: 19 October 2026">
      <p>
        These terms apply to your use of Fake or Fam (the &quot;service&quot;), operated by Zenviq Digital, India. By making or playing a
        quiz you agree to them. If you don&apos;t agree, please don&apos;t use the service.
      </p>

      <h2>The service</h2>
      <p>
        Fake or Fam is a free entertainment app. You make a quiz about yourself, share it, and friends try to guess your answers.
        Scores and badges like &quot;Fake friend&quot; or &quot;Bestie&quot; are jokes, not real judgements about anyone. Quizzes are
        deleted automatically after 90 days.
      </p>

      <h2>Who can use it</h2>
      <p>You must be at least 13 years old, or the minimum age required to use online services in your country if that is higher.</p>

      <h2>Your content and behaviour</h2>
      <p>You are responsible for the nicknames you type and the links you share. Don&apos;t use Fake or Fam to:</p>
      <ul>
        <li>harass, bully, threaten or embarrass anyone;</li>
        <li>use hateful, sexual or abusive names, or impersonate someone else;</li>
        <li>share other people&apos;s personal information, such as full names, phone numbers or addresses;</li>
        <li>spam, automate attempts, or try to break, overload or get around the security of the service.</li>
      </ul>
      <p>
        We may filter names, and we may remove any quiz or attempt that breaks these rules, without notice. You keep any rights
        you have in what you type, and you allow us to store and show it as needed to run the service.
      </p>

      <h2>Our content</h2>
      <p>
        The app, its design, the Pip and Boo mascots, the questions and the guides belong to Zenviq Digital. The option pictures
        are Fluent 3D emoji by Microsoft, used under the MIT licence. Please don&apos;t copy the app or its content for commercial use
        without permission.
      </p>

      <h2>Ads and links</h2>
      <p>
        The service may show ads from Google and contains links to other websites and apps (for example WhatsApp, Instagram and
        Snapchat). We are not responsible for their content or practices. See our <Link href="/privacy">privacy policy</Link> for
        how ads use cookies.
      </p>

      <h2>No warranty</h2>
      <p>
        The service is provided &quot;as is&quot;. We try to keep it running and accurate, but we don&apos;t promise it will always be
        available, error-free, or that data won&apos;t be lost. To the extent the law allows, we are not liable for any indirect or
        consequential loss arising from your use of the service.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows the latest version; continuing to use the service means you accept it.</p>

      <h2>Law and contact</h2>
      <p>
        These terms are governed by the laws of India. Questions or complaints: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </Doc>
  );
}
