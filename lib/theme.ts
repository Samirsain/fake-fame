"use client";
import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";
import type { Mode } from "./questions";

// Which quiz world the UI is in: "friends" (blue, playful) or "couples" (romantic, 18+).
// The user's choice (the toggle) is saved; a page can also PIN a mode (a couples quiz link, /create/couples) without saving it.
const KEY = "mode";
let pinned: Mode | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

const saved = (): Mode => { try { return localStorage.getItem(KEY) === "couples" ? "couples" : "friends"; } catch { return "friends"; } };
const current = (): Mode => pinned ?? saved();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => { if (e.key === KEY) cb(); }; // other tabs
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(cb); window.removeEventListener("storage", onStorage); };
};

export const setMode = (m: Mode) => { try { localStorage.setItem(KEY, m); } catch {} emit(); };
/** The mode the UI is showing right now (pinned page mode, else the saved toggle). */
export const useMode = () => useSyncExternalStore(subscribe, current, () => "friends" as Mode);
/** The toggle's own position (ignores pinning). */
export const useSavedMode = () => useSyncExternalStore(subscribe, saved, () => "friends" as Mode);

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
/** Pin this page to a mode while it is mounted. Runs before paint so the theme never flashes. */
export function usePinMode(m: Mode | null | undefined) {
  useIsoLayoutEffect(() => {
    if (!m) return;
    pinned = m; emit();
    return () => { pinned = null; emit(); };
  }, [m]);
}

// 18+ confirmation (self-declared; saved on this device)
const AGE_KEY = "age18";
export const isAdult = () => { try { return localStorage.getItem(AGE_KEY) === "1"; } catch { return false; } };
export const confirmAdult = () => { try { localStorage.setItem(AGE_KEY, "1"); } catch {} };
