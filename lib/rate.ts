// ponytail: per-process sliding window. Move to Upstash Redis (PRD §7.4) when running more than one instance.
const hits = new Map<string, number[]>();

/** True when `key` has already used `max` hits inside `windowMs`. Disabled outside production so local testing isn't throttled. */
export function limited(key: string, max: number, windowMs: number) {
  if (process.env.NODE_ENV !== "production") return false;
  const now = Date.now();
  const a = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  const over = a.length >= max;
  if (!over) a.push(now);
  hits.set(key, a);
  return over;
}

export const ip = (req: Request) => req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";
export const tooMany = () => Response.json({ error: "slow down" }, { status: 429 });
