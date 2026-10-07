import type { Metadata } from "next";
import PinMode from "@/components/PinMode";
import { getQuizOnce } from "@/lib/db";

// The play page is a client component, so link-preview metadata (WhatsApp / Instagram cards) and the quiz's theme live here.
export async function generateMetadata({ params }: LayoutProps<"/q/[slug]">): Promise<Metadata> {
  const q = await getQuizOnce((await params).slug);
  if (!q) return { title: "Fake or Fam" };
  const couples = q.mode === "couples";
  const tag = q.level === "extreme" ? "21+ couples quiz" : q.level === "spicy" ? "18+ spicy couples quiz" : "18+ couples quiz"; // neutral: never any question text
  // reads like a message from the friend, so the chat preview says who sent it
  const title = `${q.name} ne tumhare liye kuch bheja hai 💌${couples ? ` (${tag})` : ""}`;
  const description = couples ? `Dekho tum ${q.name} ko kitna jaante ho. A flirty couples quiz for adults (18+), 10 questions.` : `Dekho tum ${q.name} ko kitna jaante ho. 10 sawaal, 1 minute.`;
  return { title, description, openGraph: { title, description } };
}

export default async function Layout({ children, params }: LayoutProps<"/q/[slug]">) {
  const q = await getQuizOnce((await params).slug);
  const mode = q?.mode === "couples" ? "couples" : "friends";
  return (
    <>
      {/* set before first paint so a couples quiz never flashes the blue theme */}
      {q && <script dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.theme=${JSON.stringify(mode === "couples" ? "love" : "friends")};${q.level === "extreme" ? `document.documentElement.dataset.night="1"` : ""}` }} />}
      {q && <PinMode mode={mode} night={q.level === "extreme"} />}
      {children}
    </>
  );
}
