# Fake or Fam

A friendship-quiz web app: make a 10-question quiz about yourself, share the link, and see which friends actually know you.
Next.js 16 (App Router) · TypeScript · Tailwind v4 · MongoDB Atlas. English, हिन्दी and Hinglish.

## Two quiz types

A toggle at the top of the landing page switches the whole app between **Friends** (blue, playful, "block your fake friends") and **Couples 18+** (wine and rose, heart-eyed mascots, flirty questions, "test your partner").

- **Two couples levels, picked when creating the quiz:** *Sweet* (`COUPLES`, ids `c-`, 24 questions: cute and romantic) and *Spicy* (`SPICY`, ids `s-`, 24 questions: more adult, flirty and suggestive). Both stay **non-explicit**. Spicy quizzes have their own tier names (Cold feet → Perfect match). A quiz only accepts questions from its own pack (checked on the server).
- **18+ warning:** choosing Couples, opening `/create/couples` or opening a couples quiz link shows an "Adults only (18+)" sheet first, and every couples page has an "18+ · Adults only" strip. It is a self-declared warning saved on the device, **not age verification**. Get legal advice before relying on it (PRD §10).
- **Theme:** `<html data-theme="friends|love">` flips the CSS variables in `app/globals.css`; the couples-only copy lives in `lib/i18n.ts` as `love:<key>` overrides. A quiz link pins its own theme, whatever the visitor last chose.

## Run it

```bash
npm install
cp .env.example .env.local      # then put your Atlas username/password in MONGODB_URI
npm run dev                     # http://localhost:3000   (or: npm run dev -- -p 3111)
```

In Atlas, **Network Access** must allow your IP (or `0.0.0.0/0` for a deploy) and the database user needs read/write.
Collections (`quizzes`, `attempts`) and their TTL indexes are created on first request; data expires after 90 days.

## Where things are

| | |
|---|---|
| `app/page.tsx`, `app/create`, `app/q/[slug]`, `app/s/[slug]` | landing · creator flow · player flow · creator scoreboard |
| `app/api/quizzes/**` | REST API. Answers never reach the client before a player answers (`answer` is checked server-side, first answer wins) |
| `lib/db.ts` | MongoDB access: atomic writes, so many players can answer one quiz at once |
| `lib/questions.ts` | the 30-question India pack. Ids are stable keys — never rename one |
| `lib/i18n.ts` | all UI strings + Hindi/Hinglish for every question and option |
| `components/Stepper.tsx` | the question screen shared by creator and player |
| `components/Mascot.tsx` | Pip & Boo (original SVG mascots) |
| `public/emoji/` | option/topic pictures (Fluent 3D, MIT — see `NOTICE.txt` there) |
| `lib/voice.ts`, `components/VoiceToggle.tsx`, `public/voice/` | spoken feedback for players: right/wrong, "let's go", result tier. Hindi (also used for Hinglish) and English clips, on by default, speaker button mutes it. How the clips were made is in `NOTICE.txt` there |

## Swapping artwork

Option pictures are files named after the emoji's code points (`1f354.webp` = 🍔). Drop your own image with the same name
into `public/emoji/` and it replaces the stock one. To change a mascot, edit `components/Mascot.tsx`.

## Notes

- Rate limits (`lib/rate.ts`) are per-process and only active in production; use Upstash Redis once you run more than one instance.
- Share buttons use the platforms' own glyphs via `react-icons`; follow each platform's brand guidelines before launch.
- `.env.local` holds the database password and is git-ignored. Never commit it.
