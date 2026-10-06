"use client";
import { useEffect, useLayoutEffect } from "react";
import { useMode, useNightFlag } from "@/lib/theme";

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

// Puts the active mode on <html data-theme="friends|love"> so the CSS variables switch the whole look at once.
export default function ThemeApplier() {
  const mode = useMode();
  const night = useNightFlag();
  useIso(() => { document.documentElement.dataset.theme = mode === "couples" ? "love" : "friends"; }, [mode]);
  useIso(() => { if (night) document.documentElement.dataset.night = "1"; else delete document.documentElement.dataset.night; }, [night]);
  return null;
}
