"use client";
import { useT } from "@/lib/i18n";
import { setVoice, useVoice } from "@/lib/voice";

// Speaker button for the quiz voice. Looks like the other square header buttons (.sqbtn).
export default function VoiceToggle() {
  const on = useVoice();
  const t = useT();
  return (
    <button className="sqbtn" aria-pressed={on} aria-label={t(on ? "voiceOn" : "voiceOff")} onClick={() => setVoice(!on)}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z" fill="currentColor" />
        {on ? <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" /> : <path d="m16 9.5 5 5m0-5-5 5" />}
      </svg>
    </button>
  );
}
