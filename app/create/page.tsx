import type { Metadata } from "next";
import CreateFlow from "@/components/CreateFlow";

export const metadata: Metadata = {
  alternates: { canonical: "/create" },
  title: "Create a Friendship or Couple Quiz, Free — Fake or Fam",
  description: "Answer 10 quick questions about yourself and get a quiz link for your friends or your partner. Free, no sign-up, in English, Hindi and Hinglish.",
};

export default function Create() {
  return <CreateFlow />;
}
