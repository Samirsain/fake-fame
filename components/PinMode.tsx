"use client";
import { useNight, usePinMode } from "@/lib/theme";
import type { Mode } from "@/lib/questions";

// Server layouts that already know a quiz's mode render this to pin the theme to it.
export default function PinMode({ mode, night = false }: { mode: Mode; night?: boolean }) {
  usePinMode(mode);
  useNight(night);
  return null;
}
