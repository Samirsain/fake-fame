import type { Metadata } from "next";
import { getQuiz } from "@/lib/db";

// The play page is a client component, so link-preview metadata (WhatsApp / Instagram cards) lives here.
export async function generateMetadata({ params }: LayoutProps<"/q/[slug]">): Promise<Metadata> {
  const q = await getQuiz((await params).slug);
  if (!q) return { title: "Fake or Fam" };
  const title = `How well do you know ${q.name}?`;
  return { title, description: "10 questions. Find out who your real friends are.", openGraph: { title, description: "10 questions. Find out who your real friends are." } };
}

export default function Layout({ children }: LayoutProps<"/q/[slug]">) {
  return children;
}
