"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/** const [toast, say] = useToast();  …  say("Copied!")  …  {toast} */
export function useToast() {
  const [msg, setMsg] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const say = useCallback((m: string) => {
    setMsg(m);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(""), 2600);
  }, []);
  const node = msg ? <div className="toast" role="status">{msg}</div> : null;
  return [node, say] as const;
}
