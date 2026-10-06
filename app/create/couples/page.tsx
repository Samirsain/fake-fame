import type { Metadata } from "next";
import CreateFlow from "@/components/CreateFlow";

export const metadata: Metadata = { title: "Couples quiz (18+) — Fake or Fam" };

export default function CreateCouples() {
  return <CreateFlow mode="couples" />;
}
