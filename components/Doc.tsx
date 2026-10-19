import Link from "next/link";

// Shell for the text pages (about, contact, privacy, terms, guides): sky band with a way home, then readable prose.
export default function Doc({ title, sub, lang, children }: { title: string; sub?: string; lang?: string; children: React.ReactNode }) {
  return (
    <>
      <div className="sky flex items-center gap-3 px-4 pt-4 pb-10">
        <Link href="/" className="sqbtn" aria-label="Home">‹</Link>
        <Link href="/" className="hand text-2xl">Fake or Fam</Link>
      </div>
      <article lang={lang} className="doc px-4 pb-6 -mt-4">
        <h1>{title}</h1>
        {sub && <p className="doc-sub">{sub}</p>}
        {children}
      </article>
    </>
  );
}

/** The closing nudge on text pages. */
export const MakeQuiz = () => <Link href="/create" className="btn mt-8">Create your quiz <span className="arrow">→</span></Link>;
