"use client";
import { useSyncExternalStore } from "react";
import type { Lang } from "./i18n";

// Spoken lines for the player: right/wrong feedback, "let's go" and the result tier.
// Clips live in /public/voice/<hi|en>/<name>.mp3 (HeyGen TTS, see NOTICE.txt there). Hinglish uses the Hindi voice.
// On by default; the speaker button turns it off and the choice is kept on this device.
const KEY = "voice";
const listeners = new Set<() => void>();
const enabled = () => { try { return localStorage.getItem(KEY) !== "off"; } catch { return true; } };
const subscribe = (cb: () => void) => { listeners.add(cb); return () => { listeners.delete(cb); }; };

export const useVoice = () => useSyncExternalStore(subscribe, enabled, () => true);
export const setVoice = (on: boolean) => {
  try { localStorage.setItem(KEY, on ? "on" : "off"); } catch {}
  if (!on) el?.pause();
  listeners.forEach((l) => l());
};

let el: HTMLAudioElement | undefined; // one shared element: a new clip simply replaces the one still playing
const SILENT = "data:audio/wav;base64,UklGRiwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQgAAACAgICAgICAgA==";

/** Call inside a tap. iOS only lets an element play later (e.g. after the server answers) if a tap has already started it once. */
export const unlockVoice = () => { if (!el && typeof Audio !== "undefined") { el = new Audio(SILENT); el.play().catch(() => {}); } };

/** Play one clip ("ok1", "bad2", "start", "tier0"–"tier3"). Does nothing when muted; never throws. */
export function speak(name: string, lang: Lang) {
  if (!enabled() || typeof Audio === "undefined") return;
  el ??= new Audio();
  el.src = `/voice/${lang === "en" ? "en" : "hi"}/${name}.mp3`;
  el.play().catch(() => {});
}

/** One of several takes, so repeated answers don't sound identical. */
export const oneOf = (...names: string[]) => names[Math.floor(Math.random() * names.length)];
