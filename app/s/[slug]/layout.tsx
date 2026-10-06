import PinMode from "@/components/PinMode";
import { getQuizOnce } from "@/lib/db";

// The scoreboard wears the same theme as its quiz (the mode itself is not a secret; the results still need the key).
export default async function Layout({ children, params }: LayoutProps<"/s/[slug]">) {
  const q = await getQuizOnce((await params).slug);
  const mode = q?.mode === "couples" ? "couples" : "friends";
  return (
    <>
      {q && <script dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.theme=${JSON.stringify(mode === "couples" ? "love" : "friends")}` }} />}
      {q && <PinMode mode={mode} />}
      {children}
    </>
  );
}
