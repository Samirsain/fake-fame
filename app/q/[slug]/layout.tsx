import type { Metadata } from "next";
import { getQuizOnce } from "@/lib/db";

// The play page is a client component, so link-preview metadata (WhatsApp / Instagram cards) lives here.
export async function generateMetadata({ params }: LayoutProps<"/q/[slug]">): Promise<Metadata> {
  const q = await getQuizOnce((await params).slug);
  const robots = { index: false, follow: true }; // user-made, short-lived pages: crawlable for ads, kept out of search results
  if (!q) return { title: "Fake or Fam", robots };
  // reads like a message from the friend, so the chat preview says who sent it
  const title = `${q.name} ne tumhare liye kuch bheja hai 💌`;
  const description = `Dekho tum ${q.name} ko kitna jaante ho. 10 sawaal, 1 minute.`;
  return { title, description, robots, openGraph: { title, description } };
}

export default function Layout({ children }: LayoutProps<"/q/[slug]">) {
  return children;
}
