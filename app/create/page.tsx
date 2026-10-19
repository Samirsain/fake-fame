import type { Metadata } from "next";
import CreateFlow from "@/components/CreateFlow";

export const metadata: Metadata = {
  title: "Create your friendship quiz — Fake or Fam",
  description: "Answer 10 quick questions about yourself and get a link to share with friends. Free, no sign-up.",
};

export default function Create() {
  return <CreateFlow />;
}
