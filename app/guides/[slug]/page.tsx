import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Doc, { MakeQuiz } from "@/components/Doc";
import { GUIDES, guideBySlug } from "@/lib/guides";

export const generateStaticParams = () => GUIDES.map((g) => ({ slug: g.slug }));
export const dynamicParams = false; // unknown guide = real 404 (notFound() alone streams a 200 under the root loading.tsx)

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const g = guideBySlug((await params).slug);
  return g ? { title: `${g.title} — Fake or Fam`, description: g.description, openGraph: { title: g.title, description: g.description, type: "article" } } : {};
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const g = guideBySlug((await params).slug);
  if (!g) notFound();
  const date = new Date(g.date).toLocaleDateString(g.lang === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric" });
  return (
    <Doc title={g.title} sub={`${date} · ${g.read}`} lang={g.lang}>
      {g.body.map((s, i) => (
        <section key={i}>
          {s.h && <h2>{s.h}</h2>}
          {s.p?.map((t, k) => <p key={k}>{t}</p>)}
          {s.ul && <ul>{s.ul.map((t, k) => <li key={k}>{t}</li>)}</ul>}
          {s.ol && <ol>{s.ol.map((t, k) => <li key={k}>{t}</li>)}</ol>}
        </section>
      ))}
      <div lang="en">
        <MakeQuiz />
        <h2>More guides</h2>
        <ul>{GUIDES.filter((x) => x !== g).map((x) => <li key={x.slug} lang={x.lang}><Link href={`/guides/${x.slug}`}>{x.title}</Link></li>)}</ul>
      </div>
    </Doc>
  );
}
