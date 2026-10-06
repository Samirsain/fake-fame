"use client";
import { useEffect, useRef, useState } from "react";
import { cleanName } from "@/lib/questions";
import { useT } from "@/lib/i18n";
import { ageFrom, confirmAdult21 } from "@/lib/theme";

// 21+ gate for the Extreme level: asks name + date of birth. The date is checked here, in the browser, and thrown away:
// only a yes flag is saved on this device. Self-declared, so a speed bump, not verification.
export default function AgeGate21({ open, onYes, onNo }: { open: boolean; onYes: (name: string) => void; onNo: () => void }) {
  const t = useT();
  const ref = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  function go(e: React.FormEvent) {
    e.preventDefault();
    const age = ageFrom(dob);
    if (!cleanName(name) || age === null) return setErr(t("extBad"));
    if (age < 21) return setErr(t("extUnder"));
    confirmAdult21();
    onYes(name.trim());
    setDob(""); // the birth date never leaves this component
  }

  return (
    <dialog ref={ref} data-theme="love" className="sheet agegate" aria-labelledby="a21-title" onCancel={(e) => e.preventDefault()}>
      <div className="grab" aria-hidden />
      <form onSubmit={go} className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="age-badge" aria-hidden>21+</span>
          <h2 id="a21-title" className="text-2xl font-extrabold leading-tight">{t("extTitle")}</h2>
        </div>
        <p className="text-[17px] leading-6">{t("extBody")}</p>
        <input className="input" maxLength={15} value={name} onChange={(e) => { setName(e.target.value); setErr(""); }} placeholder={t("extName")} aria-label={t("extName")} autoComplete="off" />
        <label className="block text-sm font-bold">{t("extDob")}
          <input className="input mt-1" type="date" value={dob} max={new Date().toISOString().slice(0, 10)} onChange={(e) => { setDob(e.target.value); setErr(""); }} aria-label={t("extDob")} autoComplete="off" />
        </label>
        {err && <p className="text-bad font-bold" role="alert">{err}</p>}
        <button className="btn sm" disabled={!name.trim() || !dob}>{t("extGo")}</button>
        <button type="button" className="btn alt sm" onClick={onNo}>{t("ageNo")}</button>
      </form>
    </dialog>
  );
}
