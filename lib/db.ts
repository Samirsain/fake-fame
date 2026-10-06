import { cache } from "react";
import { MongoClient, type Db } from "mongodb";
import { createHash, randomBytes, timingSafeEqual } from "crypto";

// MongoDB Atlas, two collections (PRD §7.1). Every write is a single atomic operation, so any number of players
// can answer the same quiz at once without overwriting each other.

export type Answer = { questionId: string; optionId: string; correct: boolean };
export type Quiz = {
  _id: string; // = slug
  slug: string; tokenHash: string; name: string; pronoun: string;
  mode?: "friends" | "couples"; // missing on quizzes made before couples mode existed = friends
  level?: "sweet" | "spicy" | "extreme"; // couples quizzes only; missing = sweet
  items: { questionId: string; answerOptionId: string }[];
  at: number; expiresAt: Date;
};
export type Attempt = {
  _id: string; slug: string; name: string; answers: Answer[]; score: number; done: boolean; hidden?: boolean;
  at: number; expiresAt: Date;
};

export const TTL = 90 * 864e5; // quizzes and their attempts expire after 90 days (PRD §10)
const SLUG = /^[\w-]{1,32}$/; // base64url slugs only

// One connection per server process, kept on globalThis so dev hot-reloads and serverless warm starts reuse it.
const g = globalThis as unknown as { __mongo?: Promise<Db> };
const db = (): Promise<Db> =>
  (g.__mongo ??= (async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI is not set — copy .env.example to .env.local");
    // Small pool: on Vercel every warm instance opens its own, and Atlas caps total connections (500 on the free tier).
    const client = new MongoClient(uri, { maxPoolSize: 5, maxIdleTimeMS: 60_000, serverSelectionTimeoutMS: 8000 });
    await client.connect();
    const d = client.db(process.env.MONGODB_DB ?? "fakeorfam");
    await Promise.all([
      d.collection("quizzes").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }), // TTL: Mongo deletes expired docs itself
      d.collection("attempts").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
      d.collection("attempts").createIndex({ slug: 1, done: 1, hidden: 1, score: -1, at: 1 }),
    ]);
    return d;
  })().catch((e) => { g.__mongo = undefined; throw e; })); // a failed connect must not be cached

const quizzes = async () => (await db()).collection<Quiz>("quizzes");
const attempts = async () => (await db()).collection<Attempt>("attempts");
const visible = (slug: string) => ({ slug, done: true, hidden: { $ne: true } });

// ---------- quizzes ----------
export const getQuiz = async (slug: string) => {
  if (!SLUG.test(slug)) return null;
  const q = await (await quizzes()).findOne({ _id: slug });
  return q && q.expiresAt > new Date() ? q : null; // the TTL sweep runs about once a minute, so double-check
};

/** Same as getQuiz, but a layout, its metadata and the OG image of one request share a single DB read. */
export const getQuizOnce = cache(getQuiz);

export const createQuiz = async (q: Omit<Quiz, "_id" | "expiresAt">) => {
  await (await quizzes()).insertOne({ ...q, _id: q.slug, expiresAt: new Date(q.at + TTL) });
};

export const deleteQuiz = async (slug: string) => {
  if (!SLUG.test(slug)) return;
  await Promise.all([(await quizzes()).deleteOne({ _id: slug }), (await attempts()).deleteMany({ slug })]);
};

// ---------- attempts ----------
/** A player starts an attempt. Null when the quiz is gone. */
export const startAttempt = async (slug: string, name: string) => {
  const q = await getQuiz(slug);
  if (!q) return null;
  const id = newId();
  await (await attempts()).insertOne({ _id: id, slug, name, answers: [], score: 0, done: false, at: Date.now(), expiresAt: q.expiresAt });
  return id;
};

/**
 * Record one answer. Atomic and idempotent: the FIRST option an attempt sends for a question is the one that counts,
 * so a script can't probe every option to find the right one. Null if the attempt/question is unknown or already finished.
 */
export const recordAnswer = async (slug: string, attemptId: string, questionId: string, optionId: unknown) => {
  if (typeof attemptId !== "string" || typeof questionId !== "string" || typeof optionId !== "string") return null;
  const q = await getQuiz(slug);
  const item = q?.items.find((i) => i.questionId === questionId);
  if (!item) return null;
  const col = await attempts();
  const rec: Answer = { questionId, optionId: optionId.slice(0, 64), correct: item.answerOptionId === optionId };
  const pushed = await col.updateOne(
    { _id: attemptId, slug, done: false, "answers.questionId": { $ne: questionId } },
    { $push: { answers: rec } },
  );
  if (pushed.modifiedCount) return { correct: rec.correct, correctOptionId: item.answerOptionId };
  const prev = (await col.findOne({ _id: attemptId, slug, done: false }))?.answers.find((a) => a.questionId === questionId);
  return prev ? { correct: prev.correct, correctOptionId: item.answerOptionId } : null;
};

/** Score = answers the server recorded (unanswered count as wrong). Safe to call twice. */
export const finishAttempt = async (slug: string, attemptId: string) => {
  if (typeof attemptId !== "string") return null;
  const col = await attempts();
  const a = await col.findOne({ _id: attemptId, slug });
  if (!a) return null;
  const score = a.answers.filter((x) => x.correct).length;
  await col.updateOne({ _id: attemptId, slug }, { $set: { done: true, score } });
  const [top, ahead, players] = await Promise.all([
    col.find(visible(slug)).sort({ score: -1, at: 1 }).limit(5).project<{ _id: string; name: string; score: number }>({ name: 1, score: 1 }).toArray(),
    col.countDocuments({ ...visible(slug), $or: [{ score: { $gt: score } }, { score, at: { $lt: a.at } }] }),
    col.countDocuments(visible(slug)),
  ]);
  return { id: a._id, name: a.name, score, rank: ahead + 1, players, top5: top.map((t) => ({ id: t._id, name: t.name, score: t.score })) };
};

/** A finished attempt, for the score-card image (null if unknown / not finished). */
export const getAttempt = async (slug: string, id: string) => {
  if (typeof id !== "string" || !SLUG.test(slug)) return null;
  return (await (await attempts()).findOne({ _id: id, slug, done: true })) ?? null;
};

export const countFinished = async (slug: string) => (await attempts()).countDocuments(visible(slug));

export const listFinished = async (slug: string) =>
  (await attempts()).find(visible(slug)).sort({ score: -1, at: 1 }).toArray();

export const hideAttempt = async (slug: string, id: string, hidden: boolean) =>
  ((await (await attempts()).updateOne({ _id: id, slug }, { $set: { hidden } })).matchedCount) > 0;

// ---------- auth + ids ----------
export const hash = (t: string) => createHash("sha256").update(t).digest("hex");
export const isAdmin = (q: Quiz, req: Request) => {
  const a = Buffer.from(hash(req.headers.get("authorization")?.replace("Bearer ", "") ?? ""));
  const b = Buffer.from(q.tokenHash);
  return a.length === b.length && timingSafeEqual(a, b);
};
export const newToken = () => randomBytes(32).toString("base64url");
export const newSlug = () => randomBytes(6).toString("base64url");
export const newId = () => randomBytes(8).toString("base64url");

// ---------- admin overview (counts and names only: no tokens, answers or birth dates) ----------
export const adminOverview = async () => {
  const [qs, ats] = [await quizzes(), await attempts()];
  const list = await qs.find({}, { projection: { tokenHash: 0, items: 0 } }).sort({ at: -1 }).limit(500).toArray();
  const counts = await ats.aggregate<{ _id: string; n: number }>([{ $match: { done: true } }, { $group: { _id: "$slug", n: { $sum: 1 } } }]).toArray();
  const n = new Map(counts.map((c) => [c._id, c.n]));
  const kind = (q: Quiz) => (q.mode === "couples" ? q.level ?? "sweet" : "friends");
  const info = new Map(list.map((q) => [q.slug, { creator: q.name, kind: kind(q) }]));
  const day = Date.now() - 864e5;
  const rows = list.map((q) => ({ slug: q.slug, name: q.name, kind: kind(q), players: n.get(q.slug) ?? 0, at: q.at }));
  const players = (await ats.find({ done: true }, { projection: { answers: 0 } }).sort({ at: -1 }).limit(1000).toArray()).map((a) => ({
    id: String(a._id), name: a.name, score: a.score, hidden: !!a.hidden, at: a.at, slug: a.slug,
    creator: info.get(a.slug)?.creator ?? "(deleted)", kind: info.get(a.slug)?.kind ?? "-",
  }));
  const byKind: Record<string, number> = {};
  for (const r of rows) byKind[r.kind] = (byKind[r.kind] ?? 0) + 1;
  return {
    totals: {
      quizzes: await qs.countDocuments(), playersFinished: await ats.countDocuments({ done: true }),
      quizzesLast24h: await qs.countDocuments({ at: { $gt: day } }), playersLast24h: await ats.countDocuments({ done: true, at: { $gt: day } }), byKind,
    },
    quizzes: rows, players,
  };
};
