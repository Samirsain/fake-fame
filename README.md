# Fake or Fam

A friendship-quiz web app: make a 10-question quiz about yourself, share the link, and see which friends actually know you.
Next.js 16 (App Router) · TypeScript · Tailwind v4 · MongoDB Atlas. English, हिन्दी and Hinglish.

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

## Swapping artwork

Option pictures are files named after the emoji's code points (`1f354.webp` = 🍔). Drop your own image with the same name
into `public/emoji/` and it replaces the stock one. To change a mascot, edit `components/Mascot.tsx`.

## Notes

- Rate limits (`lib/rate.ts`) are per-process and only active in production; use Upstash Redis once you run more than one instance.
- Share buttons use the platforms' own glyphs via `react-icons`; follow each platform's brand guidelines before launch.
- `.env.local` holds the database password and is git-ignored. Never commit it.
