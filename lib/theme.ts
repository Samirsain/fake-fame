"use client";
import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";
import type { Mode } from "./questions";

// Which quiz world the UI is in: "friends" (blue, playful) or "couples" (romantic, 18+).
// The user's choice (the toggle) is saved; a page can also PIN a mode (a couples quiz link, /create/couples) without saving it.
const KEY = "mode";
let pinned: Mode | null = null;
let night = false; // Extreme (21+) quizzes wear the dark "night" look on top of the couples theme
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

// 21+ confirmation for the Extreme level: only the yes/no is kept on this device, never the date of birth.
const AGE21_KEY = "age21";
export const isAdult21 = () => { try { return localStorage.getItem(AGE21_KEY) === "1"; } catch { return false; } };
export const confirmAdult21 = () => { try { localStorage.setItem(AGE21_KEY, "1"); } catch {} };
/** Whole years between a YYYY-MM-DD birth date and today (null if the date is invalid or in the future). */
export function ageFrom(dob: string): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dob);
  if (!m) return null;
  const [y, mo, d] = [+m[1], +m[2], +m[3]], now = new Date();
  if (y < 1900 || new Date(y, mo - 1, d) > now) return null;
  return now.getFullYear() - y - (now.getMonth() + 1 < mo || (now.getMonth() + 1 === mo && now.getDate() < d) ? 1 : 0);
}

export const useNightFlag = () => useSyncExternalStore(subscribe, () => night, () => false);
/** Dark "night" look while mounted with `on` true (Extreme quizzes). */
export function useNight(on: boolean) {
  useIsoLayoutEffect(() => {
    if (!on) return;
    night = true; emit();
    return () => { night = false; emit(); };
  }, [on]);
}
