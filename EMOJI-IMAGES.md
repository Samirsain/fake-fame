# Emoji → Real image guide (Fake or Fam)

> Ye doc `2026-10-06` ko project ke source se **script se generate** hua hai, to list exact hai.
> Matlab: app me **kahan-kahan emoji hai**, har ek ki **file ka naam** kya hai, aur apni real image kaise lagegi.

## 0. Ek nazar me

| Kya | Kitne |
|---|---|
| Question ke topic icons | **78** (30 friends + 24 couples-sweet + 24 couples-spicy; 64 alag emoji) |
| Option thumbnails (answer cards) | **406** slots (237 alag emoji) |
| Tier badges (friends, couples-sweet and couples-spicy: 4 each) | **12** |
| How-to-play step icons | **3** |
| Chips (players / questions) | **2** |
| Kul alag image files `public/emoji/` me | **270** |
| Abhi bhi **plain text** emoji (image nahi) | **25** jagah (Section 7) |

## 1. Image abhi kaise lagti hai

1. Har emoji ek **image file** se dikhta hai: `components/Emoji.tsx` emoji ke **Unicode code points** se file ka naam banata hai aur `public/emoji/<naam>.webp` kholta hai.
   - Jaise 🍔 = `1f354` → `public/emoji/1f354.webp`; ❤️ = `2764-fe0f` → `public/emoji/2764-fe0f.webp`.
2. **Apni image lagane ka sabse aasan tareeka (aaj hi chalta hai):** usi naam ki file `public/emoji/` me daal do (purani ko replace). Browser me hard refresh (`Ctrl+Shift+R`) karo.
3. File na mile to app **text emoji** dikha deta hai, to kuch tootega nahi.

**⚠️ Ek seema:** abhi **ek emoji = ek image**. Jahan same emoji kai options me hai (Section 5), wahan ek hi image sab jagah dikhegi. Agar har option ki **alag real photo** chahiye (jaise "Vada pav" aur "Food" dono 🍔 hain), to code me chhota change chahiye: har option ki image `public/options/<question-id>/<option-id>.webp` se aaye. Wo naam Section 4 ke table me pehle se likhe hain. Bolo to main laga dunga.

## 2. Image ki specs (jo sabse aachi chalegi)

| | |
|---|---|
| Format | **WebP** (`.webp`). PNG/JPG ho to pehle WebP me badlo (squoosh.app) |
| Shape | **Square** (1:1), transparent background |
| Size | **256 × 256 px** (kam se kam 128). Screen pe 52–58 px dikhti hai, to bada mat banao |
| File weight | 30 KB se kam har ek (abhi stock images 3–5 KB hain) |
| Option card | image ek **80×80 pastel tile** ke andar, 58 px (2-column wale question me 52 px) ki dikhti hai. Tile ke rang: `#FFE8D6 #E3F1FF #EAF9E3 #F3E8FF #FFF4CC #FFE3EE` |
| Photo use karo to | square crop karke do. Abhi image tile ke andar **chhoti** dikhegi, poori tile bharne ke liye code me `object-fit: cover` + bada size lagana padega (main kar dunga) |

## 3. Question ke topic icons (78)

Question card ke neeche-left me dikhta hai (44 px). Code: `components/Stepper.tsx`. **Couples-sweet** (18+) ke question ids `c-` se aur **couples-spicy** (18+) ke `s-` se shuru hote hain.

| # | Pack | Question id | Question | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|---|---|---|
| 1 | friends | `money` | What does {name} spend most money on? | 💸 | `1f4b8.webp` | `public/topics/money.webp` |
| 2 | friends | `cartoon` | {name}'s all-time favourite cartoon? | 📺 | `1f4fa.webp` | `public/topics/cartoon.webp` |
| 3 | friends | `street-food` | {name}'s go-to street food? | 🌮 | `1f32e.webp` | `public/topics/street-food.webp` |
| 4 | friends | `app` | Which app does {name} open first in the morning? | 📱 | `1f4f1.webp` | `public/topics/app.webp` |
| 5 | friends | `owl` | {name} is more of a… | 🌙 | `1f319.webp` | `public/topics/owl.webp` |
| 6 | friends | `trip` | {name}'s dream trip? | ✈️ | `2708-fe0f.webp` | `public/topics/trip.webp` |
| 7 | friends | `never-share` | What would {name} never share? | 🙅 | `1f645.webp` | `public/topics/never-share.webp` |
| 8 | friends | `drink` | {name}'s comfort drink? | ☕ | `2615.webp` | `public/topics/drink.webp` |
| 9 | friends | `ipl` | Which IPL team does {name} support? | 🏏 | `1f3cf.webp` | `public/topics/ipl.webp` |
| 10 | friends | `fear` | {name}'s biggest fear? | 😱 | `1f631.webp` | `public/topics/fear.webp` |
| 11 | friends | `texts` | How does {name} reply to texts? | 💬 | `1f4ac.webp` | `public/topics/texts.webp` |
| 12 | friends | `festival` | {name}'s favourite festival? | 🪔 | `1fa94.webp` | `public/topics/festival.webp` |
| 13 | friends | `outfit` | {name}'s go-to outfit? | 👕 | `1f455.webp` | `public/topics/outfit.webp` |
| 14 | friends | `weekend` | How does {name} spend a perfect weekend? | 🛋️ | `1f6cb-fe0f.webp` | `public/topics/weekend.webp` |
| 15 | friends | `snack` | {name}'s favourite snack? | 🍿 | `1f37f.webp` | `public/topics/snack.webp` |
| 16 | friends | `watch` | What does {name} watch the most? | 🎬 | `1f3ac.webp` | `public/topics/watch.webp` |
| 17 | friends | `superpower` | Which superpower would {name} pick? | 🦸 | `1f9b8.webp` | `public/topics/superpower.webp` |
| 18 | friends | `music` | {name}'s music taste? | 🎵 | `1f3b5.webp` | `public/topics/music.webp` |
| 19 | friends | `sleep` | What time does {name} usually sleep? | 🛏️ | `1f6cf-fe0f.webp` | `public/topics/sleep.webp` |
| 20 | friends | `pet` | {name}'s dream pet? | 🐾 | `1f43e.webp` | `public/topics/pet.webp` |
| 21 | friends | `subject` | {name}'s favourite subject in school? | 🏫 | `1f3eb.webp` | `public/topics/subject.webp` |
| 22 | friends | `dessert` | {name}'s favourite sweet dish? | 🍨 | `1f368.webp` | `public/topics/dessert.webp` |
| 23 | friends | `ride` | How does {name} travel the most? | 🚦 | `1f6a6.webp` | `public/topics/ride.webp` |
| 24 | friends | `sad` | What does {name} do when sad? | 🌧️ | `1f327-fe0f.webp` | `public/topics/sad.webp` |
| 25 | friends | `text-call` | {name} would rather… | ☎️ | `260e-fe0f.webp` | `public/topics/text-call.webp` |
| 26 | friends | `sweet-spicy` | {name} would rather eat… | 🌶️ | `1f336-fe0f.webp` | `public/topics/sweet-spicy.webp` |
| 27 | friends | `season` | {name}'s favourite season? | 🌦️ | `1f326-fe0f.webp` | `public/topics/season.webp` |
| 28 | friends | `sport` | {name}'s favourite sport? | 🏅 | `1f3c5.webp` | `public/topics/sport.webp` |
| 29 | friends | `peeve` | What annoys {name} the most? | 😤 | `1f624.webp` | `public/topics/peeve.webp` |
| 30 | friends | `gift` | Best gift for {name}? | 🎁 | `1f381.webp` | `public/topics/gift.webp` |
| 31 | couples | `c-love-lang` | What is {name}'s love language? | 💞 | `1f49e.webp` | `public/topics/c-love-lang.webp` |
| 32 | couples | `c-date` | {name}'s dream date? | 🌹 | `1f339.webp` | `public/topics/c-date.webp` |
| 33 | couples | `c-flirt` | How does {name} flirt? | 😉 | `1f609.webp` | `public/topics/c-flirt.webp` |
| 34 | couples | `c-pet-name` | What does {name} call you? | 🥰 | `1f970.webp` | `public/topics/c-pet-name.webp` |
| 35 | couples | `c-first-text` | What does {name} text first in the morning? | 📱 | `1f4f1.webp` | `public/topics/c-first-text.webp` |
| 36 | couples | `c-jealous` | What does {name} do when jealous? | 😒 | `1f612.webp` | `public/topics/c-jealous.webp` |
| 37 | couples | `c-mad` | How long can {name} stay mad at you? | 😠 | `1f620.webp` | `public/topics/c-mad.webp` |
| 38 | couples | `c-apology` | How does {name} say sorry? | 🍫 | `1f36b.webp` | `public/topics/c-apology.webp` |
| 39 | couples | `c-kiss` | What is {name}'s kissing style? | 💋 | `1f48b.webp` | `public/topics/c-kiss.webp` |
| 40 | couples | `c-cuddle` | {name}'s favourite way to cuddle? | 🛌 | `1f6cc.webp` | `public/topics/c-cuddle.webp` |
| 41 | couples | `c-attract` | What attracts {name} the most? | 🔥 | `1f525.webp` | `public/topics/c-attract.webp` |
| 42 | couples | `c-outfit` | What does {name} love seeing you in? | 👗 | `1f457.webp` | `public/topics/c-outfit.webp` |
| 43 | couples | `c-evening` | {name}'s perfect romantic evening? | 🌙 | `1f319.webp` | `public/topics/c-evening.webp` |
| 44 | couples | `c-trip` | {name}'s dream couple trip? | ✈️ | `2708-fe0f.webp` | `public/topics/c-trip.webp` |
| 45 | couples | `c-say-love` | When would {name} say 'I love you'? | 💘 | `1f498.webp` | `public/topics/c-say-love.webp` |
| 46 | couples | `c-dealbreaker` | What is {name}'s biggest dealbreaker? | 🚩 | `1f6a9.webp` | `public/topics/c-dealbreaker.webp` |
| 47 | couples | `c-gesture` | {name}'s most romantic gesture? | 💐 | `1f490.webp` | `public/topics/c-gesture.webp` |
| 48 | couples | `c-wakeup` | How does {name} love to be woken up? | ☀️ | `2600-fe0f.webp` | `public/topics/c-wakeup.webp` |
| 49 | couples | `c-call` | How long can {name} talk to you on a call? | 📞 | `1f4de.webp` | `public/topics/c-call.webp` |
| 50 | couples | `c-argue` | What do you and {name} argue about the most? | 🥊 | `1f94a.webp` | `public/topics/c-argue.webp` |
| 51 | couples | `c-song` | {name}'s love-song vibe? | 🎶 | `1f3b6.webp` | `public/topics/c-song.webp` |
| 52 | couples | `c-future` | Where does {name} see you two in 5 years? | 🏠 | `1f3e0.webp` | `public/topics/c-future.webp` |
| 53 | couples | `c-valentine` | {name}'s perfect Valentine's Day? | 💝 | `1f49d.webp` | `public/topics/c-valentine.webp` |
| 54 | couples | `c-first-date` | How did {name} feel on your first date? | 🦋 | `1f98b.webp` | `public/topics/c-first-date.webp` |
| 55 | spicy | `s-kiss-spot` | Where does {name} love being kissed most? | 💋 | `1f48b.webp` | `public/topics/s-kiss-spot.webp` |
| 56 | spicy | `s-late-text` | What does {name} text you late at night? | 🌙 | `1f319.webp` | `public/topics/s-late-text.webp` |
| 57 | spicy | `s-swoon` | What makes {name} swoon fastest? | 😍 | `1f60d.webp` | `public/topics/s-swoon.webp` |
| 58 | spicy | `s-outfit-wow` | Which look makes {name} weak at the knees? | 🥵 | `1f975.webp` | `public/topics/s-outfit-wow.webp` |
| 59 | spicy | `s-night-in` | {name}'s idea of a perfect romantic night in? | 🕯️ | `1f56f-fe0f.webp` | `public/topics/s-night-in.webp` |
| 60 | spicy | `s-daring` | What is the most daring romantic thing {name} would try? | 😈 | `1f608.webp` | `public/topics/s-daring.webp` |
| 61 | spicy | `s-first-kiss` | Where would {name} want a perfect first kiss? | 💋 | `1f48b.webp` | `public/topics/s-first-kiss.webp` |
| 62 | spicy | `s-pda` | How does {name} feel about PDA? | 💑 | `1f491.webp` | `public/topics/s-pda.webp` |
| 63 | spicy | `s-romantic-time` | When is {name} at their most romantic? | 🌅 | `1f305.webp` | `public/topics/s-romantic-time.webp` |
| 64 | spicy | `s-touch` | What is {name}'s favourite kind of touch? | 🫶 | `1faf6.webp` | `public/topics/s-touch.webp` |
| 65 | spicy | `s-line` | Which line would melt {name}? | 😏 | `1f60f.webp` | `public/topics/s-line.webp` |
| 66 | spicy | `s-blush` | What makes {name} blush fastest? | 😊 | `1f60a.webp` | `public/topics/s-blush.webp` |
| 67 | spicy | `s-pillow-talk` | What does {name} love talking about late at night? | 💬 | `1f4ac.webp` | `public/topics/s-pillow-talk.webp` |
| 68 | spicy | `s-after-date` | What does {name} want after a perfect date night? | 🌃 | `1f303.webp` | `public/topics/s-after-date.webp` |
| 69 | spicy | `s-notice` | What does {name} notice first about someone? | 👀 | `1f440.webp` | `public/topics/s-notice.webp` |
| 70 | spicy | `s-into-you` | How does {name} show they are into you? | 😏 | `1f60f.webp` | `public/topics/s-into-you.webp` |
| 71 | spicy | `s-mood-song` | Which song vibe sets the mood for {name}? | 🎶 | `1f3b6.webp` | `public/topics/s-mood-song.webp` |
| 72 | spicy | `s-type` | What is {name}'s guilty-pleasure type? | 😈 | `1f608.webp` | `public/topics/s-type.webp` |
| 73 | spicy | `s-kiss-length` | How long is {name}'s perfect kiss? | 💋 | `1f48b.webp` | `public/topics/s-kiss-length.webp` |
| 74 | spicy | `s-flirted` | What does {name} do when someone flirts with you? | 😎 | `1f60e.webp` | `public/topics/s-flirted.webp` |
| 75 | spicy | `s-bold-text` | What is the boldest thing {name} would text you? | 📱 | `1f4f1.webp` | `public/topics/s-bold-text.webp` |
| 76 | spicy | `s-weakness` | What is {name}'s weakness in love? | 💘 | `1f498.webp` | `public/topics/s-weakness.webp` |
| 77 | spicy | `s-dance` | If you two danced, how would {name} lead? | 💃 | `1f483.webp` | `public/topics/s-dance.webp` |
| 78 | spicy | `s-anniv` | What is {name}'s dream anniversary? | 💝 | `1f49d.webp` | `public/topics/s-anniv.webp` |

## 4. Options (har question ke)

Answer cards ki thumbnail. Code: `components/Stepper.tsx`. "Proposed unique naam" tabhi kaam karega jab per-option images ka code change ho (Section 1).

### 1. `money` — What does {name} spend most money on?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Food | 🍔 | `1f354.webp` | `public/options/money/food.webp` |
| Clothes | 👟 | `1f45f.webp` | `public/options/money/clothes.webp` |
| Games | 🎮 | `1f3ae.webp` | `public/options/money/games.webp` |
| Gadgets | 🎧 | `1f3a7.webp` | `public/options/money/gadgets.webp` |
| Going out | 👫 | `1f46b.webp` | `public/options/money/going-out.webp` |
| Saves it | 💰 | `1f4b0.webp` | `public/options/money/saves-it.webp` |

### 2. `cartoon` — {name}'s all-time favourite cartoon?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Shinchan | 🖍️ | `1f58d-fe0f.webp` | `public/options/cartoon/shinchan.webp` |
| Doraemon | 🐱 | `1f431.webp` | `public/options/cartoon/doraemon.webp` |
| Chhota Bheem | 🧒 | `1f9d2.webp` | `public/options/cartoon/chhota-bheem.webp` |
| Motu Patlu | 🥟 | `1f95f.webp` | `public/options/cartoon/motu-patlu.webp` |
| Oggy | 🐈 | `1f408.webp` | `public/options/cartoon/oggy.webp` |
| Tom & Jerry | 🐭 | `1f42d.webp` | `public/options/cartoon/tom-jerry.webp` |
| Pokémon | ⚡ | `26a1.webp` | `public/options/cartoon/pok-mon.webp` |
| Ben 10 | ⌚ | `231a.webp` | `public/options/cartoon/ben-10.webp` |

### 3. `street-food` — {name}'s go-to street food?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Pani puri | 🫓 | `1fad3.webp` | `public/options/street-food/pani-puri.webp` |
| Momos | 🥟 | `1f95f.webp` | `public/options/street-food/momos.webp` |
| Vada pav | 🍔 | `1f354.webp` | `public/options/street-food/vada-pav.webp` |
| Chole bhature | 🍛 | `1f35b.webp` | `public/options/street-food/chole-bhature.webp` |
| Pav bhaji | 🍞 | `1f35e.webp` | `public/options/street-food/pav-bhaji.webp` |
| Maggi | 🍜 | `1f35c.webp` | `public/options/street-food/maggi.webp` |

### 4. `app` — Which app does {name} open first in the morning?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Instagram | 📸 | `1f4f8.webp` | `public/options/app/instagram.webp` |
| WhatsApp | 💬 | `1f4ac.webp` | `public/options/app/whatsapp.webp` |
| YouTube | ▶️ | `25b6-fe0f.webp` | `public/options/app/youtube.webp` |
| Snapchat | 👻 | `1f47b.webp` | `public/options/app/snapchat.webp` |
| Spotify | 🎵 | `1f3b5.webp` | `public/options/app/spotify.webp` |
| None — sleeps in | 😴 | `1f634.webp` | `public/options/app/none-sleeps-in.webp` |

### 5. `owl` — {name} is more of a…

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Night owl | 🦉 | `1f989.webp` | `public/options/owl/night-owl.webp` |
| Early bird | 🐦 | `1f426.webp` | `public/options/owl/early-bird.webp` |

### 6. `trip` — {name}'s dream trip?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Goa | 🏖️ | `1f3d6-fe0f.webp` | `public/options/trip/goa.webp` |
| Manali | 🏔️ | `1f3d4-fe0f.webp` | `public/options/trip/manali.webp` |
| Dubai | 🏙️ | `1f3d9-fe0f.webp` | `public/options/trip/dubai.webp` |
| Paris | 🗼 | `1f5fc.webp` | `public/options/trip/paris.webp` |
| Japan | 🗾 | `1f5fe.webp` | `public/options/trip/japan.webp` |
| Maldives | 🏝️ | `1f3dd-fe0f.webp` | `public/options/trip/maldives.webp` |

### 7. `never-share` — What would {name} never share?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Food | 🍕 | `1f355.webp` | `public/options/never-share/food.webp` |
| Phone | 📱 | `1f4f1.webp` | `public/options/never-share/phone.webp` |
| Earphones | 🎧 | `1f3a7.webp` | `public/options/never-share/earphones.webp` |
| Charger | 🔌 | `1f50c.webp` | `public/options/never-share/charger.webp` |
| Bed | 🛏️ | `1f6cf-fe0f.webp` | `public/options/never-share/bed.webp` |
| Secrets | 🤫 | `1f92b.webp` | `public/options/never-share/secrets.webp` |

### 8. `drink` — {name}'s comfort drink?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Chai | 🍵 | `1f375.webp` | `public/options/drink/chai.webp` |
| Coffee | ☕ | `2615.webp` | `public/options/drink/coffee.webp` |
| Cold drink | 🥤 | `1f964.webp` | `public/options/drink/cold-drink.webp` |
| Lassi | 🥛 | `1f95b.webp` | `public/options/drink/lassi.webp` |
| Juice | 🧃 | `1f9c3.webp` | `public/options/drink/juice.webp` |
| Water only | 💧 | `1f4a7.webp` | `public/options/drink/water-only.webp` |

### 9. `ipl` — Which IPL team does {name} support?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| CSK | 💛 | `1f49b.webp` | `public/options/ipl/csk.webp` |
| MI | 💙 | `1f499.webp` | `public/options/ipl/mi.webp` |
| RCB | ❤️ | `2764-fe0f.webp` | `public/options/ipl/rcb.webp` |
| KKR | 💜 | `1f49c.webp` | `public/options/ipl/kkr.webp` |
| SRH | 🧡 | `1f9e1.webp` | `public/options/ipl/srh.webp` |
| Doesn't watch | 🙄 | `1f644.webp` | `public/options/ipl/doesn-t-watch.webp` |

### 10. `fear` — {name}'s biggest fear?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Exams | 📝 | `1f4dd.webp` | `public/options/fear/exams.webp` |
| Cockroaches | 🪳 | `1fab3.webp` | `public/options/fear/cockroaches.webp` |
| Heights | 🏢 | `1f3e2.webp` | `public/options/fear/heights.webp` |
| Dark | 🌑 | `1f311.webp` | `public/options/fear/dark.webp` |
| Being ignored | 👀 | `1f440.webp` | `public/options/fear/being-ignored.webp` |
| Dogs | 🐕 | `1f415.webp` | `public/options/fear/dogs.webp` |

### 11. `texts` — How does {name} reply to texts?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Instantly | ⚡ | `26a1.webp` | `public/options/texts/instantly.webp` |
| After hours | 🐢 | `1f422.webp` | `public/options/texts/after-hours.webp` |
| Seen-zone | 👀 | `1f440.webp` | `public/options/texts/seen-zone.webp` |
| Voice notes | 🎙️ | `1f399-fe0f.webp` | `public/options/texts/voice-notes.webp` |

### 12. `festival` — {name}'s favourite festival?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Diwali | 🪔 | `1fa94.webp` | `public/options/festival/diwali.webp` |
| Holi | 🎨 | `1f3a8.webp` | `public/options/festival/holi.webp` |
| Eid | 🌙 | `1f319.webp` | `public/options/festival/eid.webp` |
| Christmas | 🎄 | `1f384.webp` | `public/options/festival/christmas.webp` |
| Navratri | 💃 | `1f483.webp` | `public/options/festival/navratri.webp` |
| Raksha Bandhan | 🧵 | `1f9f5.webp` | `public/options/festival/raksha-bandhan.webp` |

### 13. `outfit` — {name}'s go-to outfit?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Hoodie | 🧥 | `1f9e5.webp` | `public/options/outfit/hoodie.webp` |
| Jeans & tee | 👖 | `1f456.webp` | `public/options/outfit/jeans-tee.webp` |
| Kurta | 👘 | `1f458.webp` | `public/options/outfit/kurta.webp` |
| Tracksuit | 🏃 | `1f3c3.webp` | `public/options/outfit/tracksuit.webp` |
| Formal shirt | 👔 | `1f454.webp` | `public/options/outfit/formal-shirt.webp` |
| Pyjamas | 🛌 | `1f6cc.webp` | `public/options/outfit/pyjamas.webp` |

### 14. `weekend` — How does {name} spend a perfect weekend?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Sleeping | 😴 | `1f634.webp` | `public/options/weekend/sleeping.webp` |
| Binge-watching | 📺 | `1f4fa.webp` | `public/options/weekend/binge-watching.webp` |
| Gaming | 🎮 | `1f3ae.webp` | `public/options/weekend/gaming.webp` |
| Hanging out | 👫 | `1f46b.webp` | `public/options/weekend/hanging-out.webp` |
| Playing sports | 🏏 | `1f3cf.webp` | `public/options/weekend/playing-sports.webp` |
| Family time | 🏠 | `1f3e0.webp` | `public/options/weekend/family-time.webp` |

### 15. `snack` — {name}'s favourite snack?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Chips | 🥔 | `1f954.webp` | `public/options/snack/chips.webp` |
| Samosa | 🥟 | `1f95f.webp` | `public/options/snack/samosa.webp` |
| Biscuits | 🍪 | `1f36a.webp` | `public/options/snack/biscuits.webp` |
| Popcorn | 🍿 | `1f37f.webp` | `public/options/snack/popcorn.webp` |
| Chocolates | 🍫 | `1f36b.webp` | `public/options/snack/chocolates.webp` |
| Fruits | 🍎 | `1f34e.webp` | `public/options/snack/fruits.webp` |

### 16. `watch` — What does {name} watch the most?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Anime | 🎌 | `1f38c.webp` | `public/options/watch/anime.webp` |
| Web series | 📺 | `1f4fa.webp` | `public/options/watch/web-series.webp` |
| Movies | 🎞️ | `1f39e-fe0f.webp` | `public/options/watch/movies.webp` |
| Cricket | 🏏 | `1f3cf.webp` | `public/options/watch/cricket.webp` |
| YouTube vlogs | 🎥 | `1f3a5.webp` | `public/options/watch/youtube-vlogs.webp` |
| Reels | 📱 | `1f4f1.webp` | `public/options/watch/reels.webp` |

### 17. `superpower` — Which superpower would {name} pick?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Invisibility | 🫥 | `1fae5.webp` | `public/options/superpower/invisibility.webp` |
| Flying | 🕊️ | `1f54a-fe0f.webp` | `public/options/superpower/flying.webp` |
| Time travel | ⏳ | `23f3.webp` | `public/options/superpower/time-travel.webp` |
| Mind reading | 🧠 | `1f9e0.webp` | `public/options/superpower/mind-reading.webp` |
| Teleport | ✨ | `2728.webp` | `public/options/superpower/teleport.webp` |
| Super speed | ⚡ | `26a1.webp` | `public/options/superpower/super-speed.webp` |

### 18. `music` — {name}'s music taste?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Bollywood | 🎬 | `1f3ac.webp` | `public/options/music/bollywood.webp` |
| Punjabi | 🎤 | `1f3a4.webp` | `public/options/music/punjabi.webp` |
| Hip-hop | 🎧 | `1f3a7.webp` | `public/options/music/hip-hop.webp` |
| Lo-fi | 🌙 | `1f319.webp` | `public/options/music/lo-fi.webp` |
| Rock | 🎸 | `1f3b8.webp` | `public/options/music/rock.webp` |
| K-pop | 💜 | `1f49c.webp` | `public/options/music/k-pop.webp` |

### 19. `sleep` — What time does {name} usually sleep?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Before 10 pm | 🌆 | `1f306.webp` | `public/options/sleep/before-10-pm.webp` |
| Around midnight | 🌙 | `1f319.webp` | `public/options/sleep/around-midnight.webp` |
| 1–2 am | 🦉 | `1f989.webp` | `public/options/sleep/1-2-am.webp` |
| After 3 am | 🧛 | `1f9db.webp` | `public/options/sleep/after-3-am.webp` |
| Whenever | 🤷 | `1f937.webp` | `public/options/sleep/whenever.webp` |

### 20. `pet` — {name}'s dream pet?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Dog | 🐕 | `1f415.webp` | `public/options/pet/dog.webp` |
| Cat | 🐈 | `1f408.webp` | `public/options/pet/cat.webp` |
| Parrot | 🦜 | `1f99c.webp` | `public/options/pet/parrot.webp` |
| Rabbit | 🐇 | `1f407.webp` | `public/options/pet/rabbit.webp` |
| Fish | 🐠 | `1f420.webp` | `public/options/pet/fish.webp` |
| No pets | 🙅 | `1f645.webp` | `public/options/pet/no-pets.webp` |

### 21. `subject` — {name}'s favourite subject in school?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Maths | ➕ | `2795.webp` | `public/options/subject/maths.webp` |
| Science | 🔬 | `1f52c.webp` | `public/options/subject/science.webp` |
| English | 📖 | `1f4d6.webp` | `public/options/subject/english.webp` |
| History | 🏛️ | `1f3db-fe0f.webp` | `public/options/subject/history.webp` |
| PT / Games | 🏃 | `1f3c3.webp` | `public/options/subject/pt-games.webp` |
| Computers | 💻 | `1f4bb.webp` | `public/options/subject/computers.webp` |

### 22. `dessert` — {name}'s favourite sweet dish?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Gulab jamun | 🍡 | `1f361.webp` | `public/options/dessert/gulab-jamun.webp` |
| Ice cream | 🍦 | `1f366.webp` | `public/options/dessert/ice-cream.webp` |
| Jalebi | 🍥 | `1f365.webp` | `public/options/dessert/jalebi.webp` |
| Cake | 🍰 | `1f370.webp` | `public/options/dessert/cake.webp` |
| Kulfi | 🍧 | `1f367.webp` | `public/options/dessert/kulfi.webp` |
| Rasmalai | 🥣 | `1f963.webp` | `public/options/dessert/rasmalai.webp` |

### 23. `ride` — How does {name} travel the most?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Bike | 🏍️ | `1f3cd-fe0f.webp` | `public/options/ride/bike.webp` |
| Auto | 🛺 | `1f6fa.webp` | `public/options/ride/auto.webp` |
| Metro | 🚇 | `1f687.webp` | `public/options/ride/metro.webp` |
| Bus | 🚌 | `1f68c.webp` | `public/options/ride/bus.webp` |
| Car | 🚗 | `1f697.webp` | `public/options/ride/car.webp` |
| Walks | 🚶 | `1f6b6.webp` | `public/options/ride/walks.webp` |

### 24. `sad` — What does {name} do when sad?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Eats food | 🍔 | `1f354.webp` | `public/options/sad/eats-food.webp` |
| Sleeps | 😴 | `1f634.webp` | `public/options/sad/sleeps.webp` |
| Plays songs | 🎧 | `1f3a7.webp` | `public/options/sad/plays-songs.webp` |
| Calls a friend | 📞 | `1f4de.webp` | `public/options/sad/calls-a-friend.webp` |
| Cries | 😭 | `1f62d.webp` | `public/options/sad/cries.webp` |
| Acts fine | 🙂 | `1f642.webp` | `public/options/sad/acts-fine.webp` |

### 25. `text-call` — {name} would rather…

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Text | 💬 | `1f4ac.webp` | `public/options/text-call/text.webp` |
| Call | 📞 | `1f4de.webp` | `public/options/text-call/call.webp` |

### 26. `sweet-spicy` — {name} would rather eat…

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Sweet | 🍰 | `1f370.webp` | `public/options/sweet-spicy/sweet.webp` |
| Spicy | 🌶️ | `1f336-fe0f.webp` | `public/options/sweet-spicy/spicy.webp` |

### 27. `season` — {name}'s favourite season?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Summer | ☀️ | `2600-fe0f.webp` | `public/options/season/summer.webp` |
| Monsoon | 🌧️ | `1f327-fe0f.webp` | `public/options/season/monsoon.webp` |
| Winter | ❄️ | `2744-fe0f.webp` | `public/options/season/winter.webp` |
| Spring | 🌸 | `1f338.webp` | `public/options/season/spring.webp` |

### 28. `sport` — {name}'s favourite sport?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Cricket | 🏏 | `1f3cf.webp` | `public/options/sport/cricket.webp` |
| Football | ⚽ | `26bd.webp` | `public/options/sport/football.webp` |
| Badminton | 🏸 | `1f3f8.webp` | `public/options/sport/badminton.webp` |
| Kabaddi | 🤼 | `1f93c.webp` | `public/options/sport/kabaddi.webp` |
| Basketball | 🏀 | `1f3c0.webp` | `public/options/sport/basketball.webp` |
| Chess | ♟️ | `265f-fe0f.webp` | `public/options/sport/chess.webp` |

### 29. `peeve` — What annoys {name} the most?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Loud chewing | 😤 | `1f624.webp` | `public/options/peeve/loud-chewing.webp` |
| Slow walkers | 🐌 | `1f40c.webp` | `public/options/peeve/slow-walkers.webp` |
| Spoilers | 🙈 | `1f648.webp` | `public/options/peeve/spoilers.webp` |
| Late friends | ⏰ | `23f0.webp` | `public/options/peeve/late-friends.webp` |
| Bad WiFi | 📶 | `1f4f6.webp` | `public/options/peeve/bad-wifi.webp` |
| Group-chat spam | 💬 | `1f4ac.webp` | `public/options/peeve/group-chat-spam.webp` |

### 30. `gift` — Best gift for {name}?

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Books | 📚 | `1f4da.webp` | `public/options/gift/books.webp` |
| Chocolates | 🍫 | `1f36b.webp` | `public/options/gift/chocolates.webp` |
| Cash | 💵 | `1f4b5.webp` | `public/options/gift/cash.webp` |
| Plants | 🪴 | `1fab4.webp` | `public/options/gift/plants.webp` |
| Surprise party | 🎉 | `1f389.webp` | `public/options/gift/surprise-party.webp` |
| Perfume | 🧴 | `1f9f4.webp` | `public/options/gift/perfume.webp` |

### 31. `c-love-lang` — What is {name}'s love language? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Words of affirmation | 💬 | `1f4ac.webp` | `public/options/c-love-lang/words-of-affirmation.webp` |
| Quality time | ⏰ | `23f0.webp` | `public/options/c-love-lang/quality-time.webp` |
| Gifts | 🎁 | `1f381.webp` | `public/options/c-love-lang/gifts.webp` |
| Acts of service | 🤝 | `1f91d.webp` | `public/options/c-love-lang/acts-of-service.webp` |
| Physical touch | 🤗 | `1f917.webp` | `public/options/c-love-lang/physical-touch.webp` |

### 32. `c-date` — {name}'s dream date? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Candlelight dinner | 🕯️ | `1f56f-fe0f.webp` | `public/options/c-date/candlelight-dinner.webp` |
| Beach sunset | 🌅 | `1f305.webp` | `public/options/c-date/beach-sunset.webp` |
| Long drive | 🚗 | `1f697.webp` | `public/options/c-date/long-drive.webp` |
| Movie night at home | 🎬 | `1f3ac.webp` | `public/options/c-date/movie-night-at-home.webp` |
| Stargazing on the terrace | 🌌 | `1f30c.webp` | `public/options/c-date/stargazing-on-the-terrace.webp` |

### 33. `c-flirt` — How does {name} flirt? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Eye contact | 👀 | `1f440.webp` | `public/options/c-flirt/eye-contact.webp` |
| Teasing | 😜 | `1f61c.webp` | `public/options/c-flirt/teasing.webp` |
| Compliments | 💬 | `1f4ac.webp` | `public/options/c-flirt/compliments.webp` |
| Memes and reels | 📱 | `1f4f1.webp` | `public/options/c-flirt/memes-and-reels.webp` |
| Playful bickering | 🙃 | `1f643.webp` | `public/options/c-flirt/playful-bickering.webp` |

### 34. `c-pet-name` — What does {name} call you? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Baby | 👶 | `1f476.webp` | `public/options/c-pet-name/baby.webp` |
| Jaan | 💖 | `1f496.webp` | `public/options/c-pet-name/jaan.webp` |
| Babu / Shona | 🧸 | `1f9f8.webp` | `public/options/c-pet-name/babu-shona.webp` |
| Your real name | 🪪 | `1faaa.webp` | `public/options/c-pet-name/your-real-name.webp` |
| Something silly | 🤪 | `1f92a.webp` | `public/options/c-pet-name/something-silly.webp` |

### 35. `c-first-text` — What does {name} text first in the morning? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Good morning | ☀️ | `2600-fe0f.webp` | `public/options/c-first-text/good-morning.webp` |
| A meme | 😂 | `1f602.webp` | `public/options/c-first-text/a-meme.webp` |
| A selfie | 🤳 | `1f933.webp` | `public/options/c-first-text/a-selfie.webp` |
| Nothing, still asleep | 😴 | `1f634.webp` | `public/options/c-first-text/nothing-still-asleep.webp` |
| Where are you? | 🤔 | `1f914.webp` | `public/options/c-first-text/where-are-you-.webp` |

### 36. `c-jealous` — What does {name} do when jealous? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Goes quiet | 🤐 | `1f910.webp` | `public/options/c-jealous/goes-quiet.webp` |
| Acts totally fine | 🙂 | `1f642.webp` | `public/options/c-jealous/acts-totally-fine.webp` |
| Asks you directly | 🗣️ | `1f5e3-fe0f.webp` | `public/options/c-jealous/asks-you-directly.webp` |
| Sulks until you notice | 😞 | `1f61e.webp` | `public/options/c-jealous/sulks-until-you-notice.webp` |
| Makes you jealous back | 😈 | `1f608.webp` | `public/options/c-jealous/makes-you-jealous-back.webp` |

### 37. `c-mad` — How long can {name} stay mad at you? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| A few minutes | ⏱️ | `23f1-fe0f.webp` | `public/options/c-mad/a-few-minutes.webp` |
| A few hours | 🕒 | `1f552.webp` | `public/options/c-mad/a-few-hours.webp` |
| A whole day | 📅 | `1f4c5.webp` | `public/options/c-mad/a-whole-day.webp` |
| Until you say sorry | 🥺 | `1f97a.webp` | `public/options/c-mad/until-you-say-sorry.webp` |
| Forever (kidding) | ♾️ | `267e-fe0f.webp` | `public/options/c-mad/forever-kidding-.webp` |

### 38. `c-apology` — How does {name} say sorry? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Chocolates | 🍫 | `1f36b.webp` | `public/options/c-apology/chocolates.webp` |
| A long message | 💌 | `1f48c.webp` | `public/options/c-apology/a-long-message.webp` |
| A funny meme | 😂 | `1f602.webp` | `public/options/c-apology/a-funny-meme.webp` |
| A warm hug | 🤗 | `1f917.webp` | `public/options/c-apology/a-warm-hug.webp` |
| Cooks dinner | 🍝 | `1f35d.webp` | `public/options/c-apology/cooks-dinner.webp` |

### 39. `c-kiss` — What is {name}'s kissing style? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Slow and soft | 🕊️ | `1f54a-fe0f.webp` | `public/options/c-kiss/slow-and-soft.webp` |
| Playful pecks | 😘 | `1f618.webp` | `public/options/c-kiss/playful-pecks.webp` |
| Passionate | 🔥 | `1f525.webp` | `public/options/c-kiss/passionate.webp` |
| Forehead kisses | 🤍 | `1f90d.webp` | `public/options/c-kiss/forehead-kisses.webp` |
| Surprise kisses | ✨ | `2728.webp` | `public/options/c-kiss/surprise-kisses.webp` |

### 40. `c-cuddle` — {name}'s favourite way to cuddle? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Spooning | 🥄 | `1f944.webp` | `public/options/c-cuddle/spooning.webp` |
| Head on your chest | 💓 | `1f493.webp` | `public/options/c-cuddle/head-on-your-chest.webp` |
| Holding hands | 🤝 | `1f91d.webp` | `public/options/c-cuddle/holding-hands.webp` |
| Tangled legs | 🦵 | `1f9b5.webp` | `public/options/c-cuddle/tangled-legs.webp` |
| Big bear hug | 🐻 | `1f43b.webp` | `public/options/c-cuddle/big-bear-hug.webp` |

### 41. `c-attract` — What attracts {name} the most? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Confidence | 😎 | `1f60e.webp` | `public/options/c-attract/confidence.webp` |
| A great sense of humour | 😂 | `1f602.webp` | `public/options/c-attract/a-great-sense-of-humour.webp` |
| Looks and style | 💅 | `1f485.webp` | `public/options/c-attract/looks-and-style.webp` |
| A kind heart | 🤍 | `1f90d.webp` | `public/options/c-attract/a-kind-heart.webp` |
| Smart conversation | 🧠 | `1f9e0.webp` | `public/options/c-attract/smart-conversation.webp` |

### 42. `c-outfit` — What does {name} love seeing you in? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Saree or kurta | 🥻 | `1f97b.webp` | `public/options/c-outfit/saree-or-kurta.webp` |
| An all-black look | 🖤 | `1f5a4.webp` | `public/options/c-outfit/an-all-black-look.webp` |
| Jeans & tee | 👖 | `1f456.webp` | `public/options/c-outfit/jeans-tee.webp` |
| Formal shirt | 👔 | `1f454.webp` | `public/options/c-outfit/formal-shirt.webp` |
| Hoodie | 🧥 | `1f9e5.webp` | `public/options/c-outfit/hoodie.webp` |

### 43. `c-evening` — {name}'s perfect romantic evening? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Netflix and chill | 📺 | `1f4fa.webp` | `public/options/c-evening/netflix-and-chill.webp` |
| A slow dance | 💃 | `1f483.webp` | `public/options/c-evening/a-slow-dance.webp` |
| Long kisses | 💋 | `1f48b.webp` | `public/options/c-evening/long-kisses.webp` |
| Cuddling till we sleep | 😴 | `1f634.webp` | `public/options/c-evening/cuddling-till-we-sleep.webp` |
| Midnight snacks | 🍕 | `1f355.webp` | `public/options/c-evening/midnight-snacks.webp` |

### 44. `c-trip` — {name}'s dream couple trip? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Maldives | 🏝️ | `1f3dd-fe0f.webp` | `public/options/c-trip/maldives.webp` |
| Paris | 🗼 | `1f5fc.webp` | `public/options/c-trip/paris.webp` |
| Bali | 🌴 | `1f334.webp` | `public/options/c-trip/bali.webp` |
| Switzerland | 🏔️ | `1f3d4-fe0f.webp` | `public/options/c-trip/switzerland.webp` |
| Kashmir | ❄️ | `2744-fe0f.webp` | `public/options/c-trip/kashmir.webp` |
| Goa | 🏖️ | `1f3d6-fe0f.webp` | `public/options/c-trip/goa.webp` |

### 45. `c-say-love` — When would {name} say 'I love you'? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| In the first week | ⚡ | `26a1.webp` | `public/options/c-say-love/in-the-first-week.webp` |
| Within 3 months | 🌱 | `1f331.webp` | `public/options/c-say-love/within-3-months.webp` |
| After 6 months | 🌳 | `1f333.webp` | `public/options/c-say-love/after-6-months.webp` |
| After a year | 🗓️ | `1f5d3-fe0f.webp` | `public/options/c-say-love/after-a-year.webp` |
| Only when 100% sure | 💯 | `1f4af.webp` | `public/options/c-say-love/only-when-100-sure.webp` |

### 46. `c-dealbreaker` — What is {name}'s biggest dealbreaker? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Cheating | 💔 | `1f494.webp` | `public/options/c-dealbreaker/cheating.webp` |
| Lying | 🤥 | `1f925.webp` | `public/options/c-dealbreaker/lying.webp` |
| Ignoring them | 📵 | `1f4f5.webp` | `public/options/c-dealbreaker/ignoring-them.webp` |
| Controlling behaviour | ⛓️ | `26d3-fe0f.webp` | `public/options/c-dealbreaker/controlling-behaviour.webp` |
| Rudeness to waiters | 😒 | `1f612.webp` | `public/options/c-dealbreaker/rudeness-to-waiters.webp` |
| Bad hygiene | 🧼 | `1f9fc.webp` | `public/options/c-dealbreaker/bad-hygiene.webp` |

### 47. `c-gesture` — {name}'s most romantic gesture? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| A handwritten letter | ✉️ | `2709-fe0f.webp` | `public/options/c-gesture/a-handwritten-letter.webp` |
| A surprise trip | 🧳 | `1f9f3.webp` | `public/options/c-gesture/a-surprise-trip.webp` |
| Cooking for you | 🍳 | `1f373.webp` | `public/options/c-gesture/cooking-for-you.webp` |
| A playlist made for you | 🎧 | `1f3a7.webp` | `public/options/c-gesture/a-playlist-made-for-you.webp` |
| Flowers | 💐 | `1f490.webp` | `public/options/c-gesture/flowers.webp` |

### 48. `c-wakeup` — How does {name} love to be woken up? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| A soft kiss | 😘 | `1f618.webp` | `public/options/c-wakeup/a-soft-kiss.webp` |
| Breakfast in bed | 🥞 | `1f95e.webp` | `public/options/c-wakeup/breakfast-in-bed.webp` |
| Cuddles | 🧸 | `1f9f8.webp` | `public/options/c-wakeup/cuddles.webp` |
| Just the alarm | ⏰ | `23f0.webp` | `public/options/c-wakeup/just-the-alarm.webp` |
| Chai | 🍵 | `1f375.webp` | `public/options/c-wakeup/chai.webp` |

### 49. `c-call` — How long can {name} talk to you on a call? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Under 10 minutes | ⏱️ | `23f1-fe0f.webp` | `public/options/c-call/under-10-minutes.webp` |
| About an hour | 🕐 | `1f550.webp` | `public/options/c-call/about-an-hour.webp` |
| Until we fall asleep | 😴 | `1f634.webp` | `public/options/c-call/until-we-fall-asleep.webp` |
| Texts only, no calls | 💬 | `1f4ac.webp` | `public/options/c-call/texts-only-no-calls.webp` |

### 50. `c-argue` — What do you and {name} argue about the most? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Where to eat | 🍽️ | `1f37d-fe0f.webp` | `public/options/c-argue/where-to-eat.webp` |
| Phone time | 📱 | `1f4f1.webp` | `public/options/c-argue/phone-time.webp` |
| Being late | ⏰ | `23f0.webp` | `public/options/c-argue/being-late.webp` |
| Who is right | ⚖️ | `2696-fe0f.webp` | `public/options/c-argue/who-is-right.webp` |
| The TV remote | 📺 | `1f4fa.webp` | `public/options/c-argue/the-tv-remote.webp` |

### 51. `c-song` — {name}'s love-song vibe? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Old Bollywood | 🎻 | `1f3bb.webp` | `public/options/c-song/old-bollywood.webp` |
| Slow sad songs | 😢 | `1f622.webp` | `public/options/c-song/slow-sad-songs.webp` |
| Punjabi | 🎤 | `1f3a4.webp` | `public/options/c-song/punjabi.webp` |
| English love songs | 🎹 | `1f3b9.webp` | `public/options/c-song/english-love-songs.webp` |
| Lo-fi | 🌙 | `1f319.webp` | `public/options/c-song/lo-fi.webp` |

### 52. `c-future` — Where does {name} see you two in 5 years? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Married | 💍 | `1f48d.webp` | `public/options/c-future/married.webp` |
| Living together | 🏡 | `1f3e1.webp` | `public/options/c-future/living-together.webp` |
| Travelling the world | 🌍 | `1f30d.webp` | `public/options/c-future/travelling-the-world.webp` |
| Running our own business | 💼 | `1f4bc.webp` | `public/options/c-future/running-our-own-business.webp` |
| Still figuring it out | 🤷 | `1f937.webp` | `public/options/c-future/still-figuring-it-out.webp` |

### 53. `c-valentine` — {name}'s perfect Valentine's Day? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Dinner out | 🍽️ | `1f37d-fe0f.webp` | `public/options/c-valentine/dinner-out.webp` |
| Staying in together | 🛋️ | `1f6cb-fe0f.webp` | `public/options/c-valentine/staying-in-together.webp` |
| A big surprise | 🎁 | `1f381.webp` | `public/options/c-valentine/a-big-surprise.webp` |
| A little trip | ✈️ | `2708-fe0f.webp` | `public/options/c-valentine/a-little-trip.webp` |
| Skip it, overrated | 🙄 | `1f644.webp` | `public/options/c-valentine/skip-it-overrated.webp` |

### 54. `c-first-date` — How did {name} feel on your first date? *(couples sweet, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Super nervous | 😬 | `1f62c.webp` | `public/options/c-first-date/super-nervous.webp` |
| Butterflies | 🦋 | `1f98b.webp` | `public/options/c-first-date/butterflies.webp` |
| Totally calm | 😌 | `1f60c.webp` | `public/options/c-first-date/totally-calm.webp` |
| Overthinking everything | 🤯 | `1f92f.webp` | `public/options/c-first-date/overthinking-everything.webp` |
| Honestly just hungry | 🤤 | `1f924.webp` | `public/options/c-first-date/honestly-just-hungry.webp` |

### 55. `s-kiss-spot` — Where does {name} love being kissed most? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Lips | 👄 | `1f444.webp` | `public/options/s-kiss-spot/lips.webp` |
| Neck | 🧣 | `1f9e3.webp` | `public/options/s-kiss-spot/neck.webp` |
| Forehead | 🤍 | `1f90d.webp` | `public/options/s-kiss-spot/forehead.webp` |
| Cheek | 😊 | `1f60a.webp` | `public/options/s-kiss-spot/cheek.webp` |
| On the hands | ✋ | `270b.webp` | `public/options/s-kiss-spot/on-the-hands.webp` |

### 56. `s-late-text` — What does {name} text you late at night? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| I miss you | 🥺 | `1f97a.webp` | `public/options/s-late-text/i-miss-you.webp` |
| Are you awake? | 👀 | `1f440.webp` | `public/options/s-late-text/are-you-awake-.webp` |
| Come over | 🏠 | `1f3e0.webp` | `public/options/s-late-text/come-over.webp` |
| Netflix? | 📺 | `1f4fa.webp` | `public/options/s-late-text/netflix-.webp` |
| Thinking of you | 💭 | `1f4ad.webp` | `public/options/s-late-text/thinking-of-you.webp` |

### 57. `s-swoon` — What makes {name} swoon fastest? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| A whisper in the ear | 🤫 | `1f92b.webp` | `public/options/s-swoon/a-whisper-in-the-ear.webp` |
| A tight hug from behind | 🫂 | `1fac2.webp` | `public/options/s-swoon/a-tight-hug-from-behind.webp` |
| A surprise kiss | 😘 | `1f618.webp` | `public/options/s-swoon/a-surprise-kiss.webp` |
| A sincere compliment | 💬 | `1f4ac.webp` | `public/options/s-swoon/a-sincere-compliment.webp` |
| Eye contact across the room | 👁️ | `1f441-fe0f.webp` | `public/options/s-swoon/eye-contact-across-the-room.webp` |

### 58. `s-outfit-wow` — Which look makes {name} weak at the knees? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Saree | 🥻 | `1f97b.webp` | `public/options/s-outfit-wow/saree.webp` |
| Little black dress | 🖤 | `1f5a4.webp` | `public/options/s-outfit-wow/little-black-dress.webp` |
| Sharp suit | 🕴️ | `1f574-fe0f.webp` | `public/options/s-outfit-wow/sharp-suit.webp` |
| Gym fit | 🏋️ | `1f3cb-fe0f.webp` | `public/options/s-outfit-wow/gym-fit.webp` |
| Wearing their shirt | 👕 | `1f455.webp` | `public/options/s-outfit-wow/wearing-their-shirt.webp` |

### 59. `s-night-in` — {name}'s idea of a perfect romantic night in? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Candles and soft music | 🕯️ | `1f56f-fe0f.webp` | `public/options/s-night-in/candles-and-soft-music.webp` |
| Lights low, phones off | 📵 | `1f4f5.webp` | `public/options/s-night-in/lights-low-phones-off.webp` |
| Cooking together | 🍳 | `1f373.webp` | `public/options/s-night-in/cooking-together.webp` |
| Slow dancing at home | 💃 | `1f483.webp` | `public/options/s-night-in/slow-dancing-at-home.webp` |
| Rain outside and cuddles | 🌧️ | `1f327-fe0f.webp` | `public/options/s-night-in/rain-outside-and-cuddles.webp` |

### 60. `s-daring` — What is the most daring romantic thing {name} would try? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| A kiss in a crowd | 💋 | `1f48b.webp` | `public/options/s-daring/a-kiss-in-a-crowd.webp` |
| A midnight swim | 🏊 | `1f3ca.webp` | `public/options/s-daring/a-midnight-swim.webp` |
| A surprise weekend away | 🧳 | `1f9f3.webp` | `public/options/s-daring/a-surprise-weekend-away.webp` |
| A rooftop slow dance | 🏙️ | `1f3d9-fe0f.webp` | `public/options/s-daring/a-rooftop-slow-dance.webp` |
| Sneaking out for a date | 🌃 | `1f303.webp` | `public/options/s-daring/sneaking-out-for-a-date.webp` |

### 61. `s-first-kiss` — Where would {name} want a perfect first kiss? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| In the rain | 🌧️ | `1f327-fe0f.webp` | `public/options/s-first-kiss/in-the-rain.webp` |
| On a rooftop | 🏙️ | `1f3d9-fe0f.webp` | `public/options/s-first-kiss/on-a-rooftop.webp` |
| In a movie theatre | 🎬 | `1f3ac.webp` | `public/options/s-first-kiss/in-a-movie-theatre.webp` |
| On a beach | 🏖️ | `1f3d6-fe0f.webp` | `public/options/s-first-kiss/on-a-beach.webp` |
| Under the stars | ✨ | `2728.webp` | `public/options/s-first-kiss/under-the-stars.webp` |

### 62. `s-pda` — How does {name} feel about PDA? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Hand-holding only | 🤝 | `1f91d.webp` | `public/options/s-pda/hand-holding-only.webp` |
| A quick kiss is fine | 😘 | `1f618.webp` | `public/options/s-pda/a-quick-kiss-is-fine.webp` |
| Loves showing off | 😎 | `1f60e.webp` | `public/options/s-pda/loves-showing-off.webp` |
| Totally private | 🙈 | `1f648.webp` | `public/options/s-pda/totally-private.webp` |
| Depends on the mood | 🤷 | `1f937.webp` | `public/options/s-pda/depends-on-the-mood.webp` |

### 63. `s-romantic-time` — When is {name} at their most romantic? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Early morning | 🌅 | `1f305.webp` | `public/options/s-romantic-time/early-morning.webp` |
| Lazy afternoon | 🌤️ | `1f324-fe0f.webp` | `public/options/s-romantic-time/lazy-afternoon.webp` |
| Sunset | 🌇 | `1f307.webp` | `public/options/s-romantic-time/sunset.webp` |
| Late at night | 🌙 | `1f319.webp` | `public/options/s-romantic-time/late-at-night.webp` |
| Rainy days | 🌧️ | `1f327-fe0f.webp` | `public/options/s-romantic-time/rainy-days.webp` |

### 64. `s-touch` — What is {name}'s favourite kind of touch? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Playing with hair | 💇 | `1f487.webp` | `public/options/s-touch/playing-with-hair.webp` |
| A back rub | 💆 | `1f486.webp` | `public/options/s-touch/a-back-rub.webp` |
| Holding hands | 🤝 | `1f91d.webp` | `public/options/s-touch/holding-hands.webp` |
| A gentle cheek stroke | 🥰 | `1f970.webp` | `public/options/s-touch/a-gentle-cheek-stroke.webp` |
| A long hug | 🤗 | `1f917.webp` | `public/options/s-touch/a-long-hug.webp` |

### 65. `s-line` — Which line would melt {name}? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| You look incredible | 😍 | `1f60d.webp` | `public/options/s-line/you-look-incredible.webp` |
| I can't stop thinking about you | 💭 | `1f4ad.webp` | `public/options/s-line/i-can-t-stop-thinking-about-you.webp` |
| Dance with me? | 💃 | `1f483.webp` | `public/options/s-line/dance-with-me-.webp` |
| Let me cook for you | 🍳 | `1f373.webp` | `public/options/s-line/let-me-cook-for-you.webp` |
| Can I steal a kiss? | 😘 | `1f618.webp` | `public/options/s-line/can-i-steal-a-kiss-.webp` |

### 66. `s-blush` — What makes {name} blush fastest? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| A bold compliment | 🔥 | `1f525.webp` | `public/options/s-blush/a-bold-compliment.webp` |
| A surprise kiss | 😘 | `1f618.webp` | `public/options/s-blush/a-surprise-kiss.webp` |
| A whisper | 🤫 | `1f92b.webp` | `public/options/s-blush/a-whisper.webp` |
| A wink | 😉 | `1f609.webp` | `public/options/s-blush/a-wink.webp` |
| Teasing in public | 😜 | `1f61c.webp` | `public/options/s-blush/teasing-in-public.webp` |

### 67. `s-pillow-talk` — What does {name} love talking about late at night? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Future plans | 🏡 | `1f3e1.webp` | `public/options/s-pillow-talk/future-plans.webp` |
| Silly memories | 😂 | `1f602.webp` | `public/options/s-pillow-talk/silly-memories.webp` |
| Secrets and confessions | 🤫 | `1f92b.webp` | `public/options/s-pillow-talk/secrets-and-confessions.webp` |
| Dream trips | ✈️ | `2708-fe0f.webp` | `public/options/s-pillow-talk/dream-trips.webp` |
| Wild dreams | ✨ | `2728.webp` | `public/options/s-pillow-talk/wild-dreams.webp` |

### 68. `s-after-date` — What does {name} want after a perfect date night? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Cuddling till sunrise | 🌅 | `1f305.webp` | `public/options/s-after-date/cuddling-till-sunrise.webp` |
| A late-night snack run | 🍕 | `1f355.webp` | `public/options/s-after-date/a-late-night-snack-run.webp` |
| A long goodnight kiss | 💋 | `1f48b.webp` | `public/options/s-after-date/a-long-goodnight-kiss.webp` |
| Dancing in the kitchen | 💃 | `1f483.webp` | `public/options/s-after-date/dancing-in-the-kitchen.webp` |
| Netflix and sleep | 📺 | `1f4fa.webp` | `public/options/s-after-date/netflix-and-sleep.webp` |

### 69. `s-notice` — What does {name} notice first about someone? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Smile | 😊 | `1f60a.webp` | `public/options/s-notice/smile.webp` |
| Eyes | 👀 | `1f440.webp` | `public/options/s-notice/eyes.webp` |
| Voice | 🎙️ | `1f399-fe0f.webp` | `public/options/s-notice/voice.webp` |
| Style | 💅 | `1f485.webp` | `public/options/s-notice/style.webp` |
| Hands | ✋ | `270b.webp` | `public/options/s-notice/hands.webp` |

### 70. `s-into-you` — How does {name} show they are into you? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Stares a little too long | 👀 | `1f440.webp` | `public/options/s-into-you/stares-a-little-too-long.webp` |
| Finds reasons to touch your arm | 🤚 | `1f91a.webp` | `public/options/s-into-you/finds-reasons-to-touch-your-arm.webp` |
| Texts nonstop | 💬 | `1f4ac.webp` | `public/options/s-into-you/texts-nonstop.webp` |
| Teases you | 😜 | `1f61c.webp` | `public/options/s-into-you/teases-you.webp` |
| Goes shy and quiet | 🤐 | `1f910.webp` | `public/options/s-into-you/goes-shy-and-quiet.webp` |

### 71. `s-mood-song` — Which song vibe sets the mood for {name}? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Slow R&B | 🎷 | `1f3b7.webp` | `public/options/s-mood-song/slow-r-b.webp` |
| Soft acoustic | 🎸 | `1f3b8.webp` | `public/options/s-mood-song/soft-acoustic.webp` |
| Old Bollywood romance | 🎻 | `1f3bb.webp` | `public/options/s-mood-song/old-bollywood-romance.webp` |
| Lo-fi beats | 🌙 | `1f319.webp` | `public/options/s-mood-song/lo-fi-beats.webp` |
| Jazz | 🎺 | `1f3ba.webp` | `public/options/s-mood-song/jazz.webp` |

### 72. `s-type` — What is {name}'s guilty-pleasure type? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Mysterious and quiet | 🕶️ | `1f576-fe0f.webp` | `public/options/s-type/mysterious-and-quiet.webp` |
| Funny and flirty | 😄 | `1f604.webp` | `public/options/s-type/funny-and-flirty.webp` |
| Tall, dark and striking | 🧔 | `1f9d4.webp` | `public/options/s-type/tall-dark-and-striking.webp` |
| Sweet and caring | 🤗 | `1f917.webp` | `public/options/s-type/sweet-and-caring.webp` |
| Bad boy or bad girl | 😈 | `1f608.webp` | `public/options/s-type/bad-boy-or-bad-girl.webp` |

### 73. `s-kiss-length` — How long is {name}'s perfect kiss? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| A quick peck | ⚡ | `26a1.webp` | `public/options/s-kiss-length/a-quick-peck.webp` |
| A few slow seconds | ⏳ | `23f3.webp` | `public/options/s-kiss-length/a-few-slow-seconds.webp` |
| Long enough to lose track of time | 🌌 | `1f30c.webp` | `public/options/s-kiss-length/long-enough-to-lose-track-of-time.webp` |
| As long as the song plays | 🎵 | `1f3b5.webp` | `public/options/s-kiss-length/as-long-as-the-song-plays.webp` |
| Forehead, then a hug | 🤍 | `1f90d.webp` | `public/options/s-kiss-length/forehead-then-a-hug.webp` |

### 74. `s-flirted` — What does {name} do when someone flirts with you? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Smirks and plays it cool | 😏 | `1f60f.webp` | `public/options/s-flirted/smirks-and-plays-it-cool.webp` |
| Pulls you closer | 🫂 | `1fac2.webp` | `public/options/s-flirted/pulls-you-closer.webp` |
| Gets visibly jealous | 😒 | `1f612.webp` | `public/options/s-flirted/gets-visibly-jealous.webp` |
| Laughs it off | 😂 | `1f602.webp` | `public/options/s-flirted/laughs-it-off.webp` |
| Asks about it later | 🗣️ | `1f5e3-fe0f.webp` | `public/options/s-flirted/asks-about-it-later.webp` |

### 75. `s-bold-text` — What is the boldest thing {name} would text you? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| A flirty compliment | 😘 | `1f618.webp` | `public/options/s-bold-text/a-flirty-compliment.webp` |
| Missing your hugs | 🤗 | `1f917.webp` | `public/options/s-bold-text/missing-your-hugs.webp` |
| A low-voice voice note | 🎙️ | `1f399-fe0f.webp` | `public/options/s-bold-text/a-low-voice-voice-note.webp` |
| A teasing dare | 😈 | `1f608.webp` | `public/options/s-bold-text/a-teasing-dare.webp` |
| A poem for you | 💌 | `1f48c.webp` | `public/options/s-bold-text/a-poem-for-you.webp` |

### 76. `s-weakness` — What is {name}'s weakness in love? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Your smile | 😊 | `1f60a.webp` | `public/options/s-weakness/your-smile.webp` |
| Your voice | 🎙️ | `1f399-fe0f.webp` | `public/options/s-weakness/your-voice.webp` |
| Your hugs | 🤗 | `1f917.webp` | `public/options/s-weakness/your-hugs.webp` |
| Your jokes | 😂 | `1f602.webp` | `public/options/s-weakness/your-jokes.webp` |
| Your cooking | 🍳 | `1f373.webp` | `public/options/s-weakness/your-cooking.webp` |

### 77. `s-dance` — If you two danced, how would {name} lead? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| Slow and close | 💞 | `1f49e.webp` | `public/options/s-dance/slow-and-close.webp` |
| Playful spins | 🌀 | `1f300.webp` | `public/options/s-dance/playful-spins.webp` |
| Wild and silly | 🤪 | `1f92a.webp` | `public/options/s-dance/wild-and-silly.webp` |
| Stepping on your feet | 🦶 | `1f9b6.webp` | `public/options/s-dance/stepping-on-your-feet.webp` |
| Eyes locked the whole time | 👀 | `1f440.webp` | `public/options/s-dance/eyes-locked-the-whole-time.webp` |

### 78. `s-anniv` — What is {name}'s dream anniversary? *(couples spicy, 18+)*

| Option | Emoji | Abhi ki file (`public/emoji/`) | Proposed unique naam |
|---|---|---|---|
| A private dinner for two | 🍽️ | `1f37d-fe0f.webp` | `public/options/s-anniv/a-private-dinner-for-two.webp` |
| A surprise trip | 🧳 | `1f9f3.webp` | `public/options/s-anniv/a-surprise-trip.webp` |
| Revisiting the first-date spot | 📍 | `1f4cd.webp` | `public/options/s-anniv/revisiting-the-first-date-spot.webp` |
| A letter and a gift | 💌 | `1f48c.webp` | `public/options/s-anniv/a-letter-and-a-gift.webp` |
| Staying in and cuddling | 🛋️ | `1f6cb-fe0f.webp` | `public/options/s-anniv/staying-in-and-cuddling.webp` |

## 5. Same emoji, kai jagah

**109 emoji** ek se zyada jagah use hue hain. Abhi inki **ek hi file** sab jagah dikhti hai. Alag-alag photo chahiye to per-option change zaroori hai.

| Emoji | File | Kitni baar | Kahan-kahan |
|---|---|---|---|
| 💬 | `1f4ac.webp` | 10 | `app` → WhatsApp; topic of `texts`; `text-call` → Text; `peeve` → Group-chat spam; `c-love-lang` → Words of affirmation; `c-flirt` → Compliments; `c-call` → Texts only, no calls; `s-swoon` → A sincere compliment; topic of `s-pillow-talk`; `s-into-you` → Texts nonstop |
| 🌙 | `1f319.webp` | 9 | topic of `owl`; `festival` → Eid; `music` → Lo-fi; `sleep` → Around midnight; topic of `c-evening`; `c-song` → Lo-fi; topic of `s-late-text`; `s-romantic-time` → Late at night; `s-mood-song` → Lo-fi beats |
| 👀 | `1f440.webp` | 8 | `fear` → Being ignored; `texts` → Seen-zone; `c-flirt` → Eye contact; `s-late-text` → Are you awake?; topic of `s-notice`; `s-notice` → Eyes; `s-into-you` → Stares a little too long; `s-dance` → Eyes locked the whole time |
| 📺 | `1f4fa.webp` | 7 | topic of `cartoon`; `weekend` → Binge-watching; `watch` → Web series; `c-evening` → Netflix and chill; `c-argue` → The TV remote; `s-late-text` → Netflix?; `s-after-date` → Netflix and sleep |
| 📱 | `1f4f1.webp` | 7 | topic of `app`; `never-share` → Phone; `watch` → Reels; `c-flirt` → Memes and reels; topic of `c-first-text`; `c-argue` → Phone time; topic of `s-bold-text` |
| 💋 | `1f48b.webp` | 7 | topic of `c-kiss`; `c-evening` → Long kisses; topic of `s-kiss-spot`; `s-daring` → A kiss in a crowd; topic of `s-first-kiss`; `s-after-date` → A long goodnight kiss; topic of `s-kiss-length` |
| 😘 | `1f618.webp` | 7 | `c-kiss` → Playful pecks; `c-wakeup` → A soft kiss; `s-swoon` → A surprise kiss; `s-pda` → A quick kiss is fine; `s-line` → Can I steal a kiss?; `s-blush` → A surprise kiss; `s-bold-text` → A flirty compliment |
| 😴 | `1f634.webp` | 6 | `app` → None — sleeps in; `weekend` → Sleeping; `sad` → Sleeps; `c-first-text` → Nothing, still asleep; `c-evening` → Cuddling till we sleep; `c-call` → Until we fall asleep |
| 💃 | `1f483.webp` | 6 | `festival` → Navratri; `c-evening` → A slow dance; `s-night-in` → Slow dancing at home; `s-line` → Dance with me?; `s-after-date` → Dancing in the kitchen; topic of `s-dance` |
| 🤗 | `1f917.webp` | 6 | `c-love-lang` → Physical touch; `c-apology` → A warm hug; `s-touch` → A long hug; `s-type` → Sweet and caring; `s-bold-text` → Missing your hugs; `s-weakness` → Your hugs |
| 😂 | `1f602.webp` | 6 | `c-first-text` → A meme; `c-apology` → A funny meme; `c-attract` → A great sense of humour; `s-pillow-talk` → Silly memories; `s-flirted` → Laughs it off; `s-weakness` → Your jokes |
| 🎧 | `1f3a7.webp` | 5 | `money` → Gadgets; `never-share` → Earphones; `music` → Hip-hop; `sad` → Plays songs; `c-gesture` → A playlist made for you |
| ⚡ | `26a1.webp` | 5 | `cartoon` → Pokémon; `texts` → Instantly; `superpower` → Super speed; `c-say-love` → In the first week; `s-kiss-length` → A quick peck |
| 🌧️ | `1f327-fe0f.webp` | 5 | topic of `sad`; `season` → Monsoon; `s-night-in` → Rain outside and cuddles; `s-first-kiss` → In the rain; `s-romantic-time` → Rainy days |
| 😈 | `1f608.webp` | 5 | `c-jealous` → Makes you jealous back; topic of `s-daring`; topic of `s-type`; `s-type` → Bad boy or bad girl; `s-bold-text` → A teasing dare |
| ✈️ | `2708-fe0f.webp` | 4 | topic of `trip`; topic of `c-trip`; `c-valentine` → A little trip; `s-pillow-talk` → Dream trips |
| 🤫 | `1f92b.webp` | 4 | `never-share` → Secrets; `s-swoon` → A whisper in the ear; `s-blush` → A whisper; `s-pillow-talk` → Secrets and confessions |
| 🏏 | `1f3cf.webp` | 4 | topic of `ipl`; `weekend` → Playing sports; `watch` → Cricket; `sport` → Cricket |
| 🎙️ | `1f399-fe0f.webp` | 4 | `texts` → Voice notes; `s-notice` → Voice; `s-bold-text` → A low-voice voice note; `s-weakness` → Your voice |
| 🍫 | `1f36b.webp` | 4 | `snack` → Chocolates; `gift` → Chocolates; topic of `c-apology`; `c-apology` → Chocolates |
| 🎬 | `1f3ac.webp` | 4 | topic of `watch`; `music` → Bollywood; `c-date` → Movie night at home; `s-first-kiss` → In a movie theatre |
| ✨ | `2728.webp` | 4 | `superpower` → Teleport; `c-kiss` → Surprise kisses; `s-first-kiss` → Under the stars; `s-pillow-talk` → Wild dreams |
| ⏰ | `23f0.webp` | 4 | `peeve` → Late friends; `c-love-lang` → Quality time; `c-wakeup` → Just the alarm; `c-argue` → Being late |
| 🤝 | `1f91d.webp` | 4 | `c-love-lang` → Acts of service; `c-cuddle` → Holding hands; `s-pda` → Hand-holding only; `s-touch` → Holding hands |
| 🌅 | `1f305.webp` | 4 | `c-date` → Beach sunset; topic of `s-romantic-time`; `s-romantic-time` → Early morning; `s-after-date` → Cuddling till sunrise |
| 🤍 | `1f90d.webp` | 4 | `c-kiss` → Forehead kisses; `c-attract` → A kind heart; `s-kiss-spot` → Forehead; `s-kiss-length` → Forehead, then a hug |
| 🍳 | `1f373.webp` | 4 | `c-gesture` → Cooking for you; `s-night-in` → Cooking together; `s-line` → Let me cook for you; `s-weakness` → Your cooking |
| 😊 | `1f60a.webp` | 4 | `s-kiss-spot` → Cheek; topic of `s-blush`; `s-notice` → Smile; `s-weakness` → Your smile |
| 🍔 | `1f354.webp` | 3 | `money` → Food; `street-food` → Vada pav; `sad` → Eats food |
| 🥟 | `1f95f.webp` | 3 | `cartoon` → Motu Patlu; `street-food` → Momos; `snack` → Samosa |
| 🎵 | `1f3b5.webp` | 3 | `app` → Spotify; topic of `music`; `s-kiss-length` → As long as the song plays |
| 🏖️ | `1f3d6-fe0f.webp` | 3 | `trip` → Goa; `c-trip` → Goa; `s-first-kiss` → On a beach |
| 🏙️ | `1f3d9-fe0f.webp` | 3 | `trip` → Dubai; `s-daring` → A rooftop slow dance; `s-first-kiss` → On a rooftop |
| 🍕 | `1f355.webp` | 3 | `never-share` → Food; `c-evening` → Midnight snacks; `s-after-date` → A late-night snack run |
| 🛋️ | `1f6cb-fe0f.webp` | 3 | topic of `weekend`; `c-valentine` → Staying in together; `s-anniv` → Staying in and cuddling |
| 🏠 | `1f3e0.webp` | 3 | `weekend` → Family time; topic of `c-future`; `s-late-text` → Come over |
| 🤷 | `1f937.webp` | 3 | `sleep` → Whenever; `c-future` → Still figuring it out; `s-pda` → Depends on the mood |
| 📞 | `1f4de.webp` | 3 | `sad` → Calls a friend; `text-call` → Call; topic of `c-call` |
| ☀️ | `2600-fe0f.webp` | 3 | `season` → Summer; `c-first-text` → Good morning; topic of `c-wakeup` |
| 🎁 | `1f381.webp` | 3 | topic of `gift`; `c-love-lang` → Gifts; `c-valentine` → A big surprise |
| 🕯️ | `1f56f-fe0f.webp` | 3 | `c-date` → Candlelight dinner; topic of `s-night-in`; `s-night-in` → Candles and soft music |
| 😜 | `1f61c.webp` | 3 | `c-flirt` → Teasing; `s-blush` → Teasing in public; `s-into-you` → Teases you |
| 😒 | `1f612.webp` | 3 | topic of `c-jealous`; `c-dealbreaker` → Rudeness to waiters; `s-flirted` → Gets visibly jealous |
| 💌 | `1f48c.webp` | 3 | `c-apology` → A long message; `s-bold-text` → A poem for you; `s-anniv` → A letter and a gift |
| 🔥 | `1f525.webp` | 3 | `c-kiss` → Passionate; topic of `c-attract`; `s-blush` → A bold compliment |
| 😎 | `1f60e.webp` | 3 | `c-attract` → Confidence; `s-pda` → Loves showing off; topic of `s-flirted` |
| 🧳 | `1f9f3.webp` | 3 | `c-gesture` → A surprise trip; `s-daring` → A surprise weekend away; `s-anniv` → A surprise trip |
| 🍽️ | `1f37d-fe0f.webp` | 3 | `c-argue` → Where to eat; `c-valentine` → Dinner out; `s-anniv` → A private dinner for two |
| 😏 | `1f60f.webp` | 3 | topic of `s-line`; topic of `s-into-you`; `s-flirted` → Smirks and plays it cool |
| 🎮 | `1f3ae.webp` | 2 | `money` → Games; `weekend` → Gaming |
| 👫 | `1f46b.webp` | 2 | `money` → Going out; `weekend` → Hanging out |
| 🐈 | `1f408.webp` | 2 | `cartoon` → Oggy; `pet` → Cat |
| 🦉 | `1f989.webp` | 2 | `owl` → Night owl; `sleep` → 1–2 am |
| 🏔️ | `1f3d4-fe0f.webp` | 2 | `trip` → Manali; `c-trip` → Switzerland |
| 🗼 | `1f5fc.webp` | 2 | `trip` → Paris; `c-trip` → Paris |
| 🏝️ | `1f3dd-fe0f.webp` | 2 | `trip` → Maldives; `c-trip` → Maldives |
| 🙅 | `1f645.webp` | 2 | topic of `never-share`; `pet` → No pets |
| 🛏️ | `1f6cf-fe0f.webp` | 2 | `never-share` → Bed; topic of `sleep` |
| ☕ | `2615.webp` | 2 | topic of `drink`; `drink` → Coffee |
| 🍵 | `1f375.webp` | 2 | `drink` → Chai; `c-wakeup` → Chai |
| 💜 | `1f49c.webp` | 2 | `ipl` → KKR; `music` → K-pop |
| 🙄 | `1f644.webp` | 2 | `ipl` → Doesn't watch; `c-valentine` → Skip it, overrated |
| 🐕 | `1f415.webp` | 2 | `fear` → Dogs; `pet` → Dog |
| 🪔 | `1fa94.webp` | 2 | topic of `festival`; `festival` → Diwali |
| 👕 | `1f455.webp` | 2 | topic of `outfit`; `s-outfit-wow` → Wearing their shirt |
| 🧥 | `1f9e5.webp` | 2 | `outfit` → Hoodie; `c-outfit` → Hoodie |
| 👖 | `1f456.webp` | 2 | `outfit` → Jeans & tee; `c-outfit` → Jeans & tee |
| 🏃 | `1f3c3.webp` | 2 | `outfit` → Tracksuit; `subject` → PT / Games |
| 👔 | `1f454.webp` | 2 | `outfit` → Formal shirt; `c-outfit` → Formal shirt |
| 🛌 | `1f6cc.webp` | 2 | `outfit` → Pyjamas; topic of `c-cuddle` |
| 🍿 | `1f37f.webp` | 2 | topic of `snack`; `snack` → Popcorn |
| 🕊️ | `1f54a-fe0f.webp` | 2 | `superpower` → Flying; `c-kiss` → Slow and soft |
| ⏳ | `23f3.webp` | 2 | `superpower` → Time travel; `s-kiss-length` → A few slow seconds |
| 🧠 | `1f9e0.webp` | 2 | `superpower` → Mind reading; `c-attract` → Smart conversation |
| 🎤 | `1f3a4.webp` | 2 | `music` → Punjabi; `c-song` → Punjabi |
| 🎸 | `1f3b8.webp` | 2 | `music` → Rock; `s-mood-song` → Soft acoustic |
| 🍰 | `1f370.webp` | 2 | `dessert` → Cake; `sweet-spicy` → Sweet |
| 🚗 | `1f697.webp` | 2 | `ride` → Car; `c-date` → Long drive |
| 🙂 | `1f642.webp` | 2 | `sad` → Acts fine; `c-jealous` → Acts totally fine |
| 🌶️ | `1f336-fe0f.webp` | 2 | topic of `sweet-spicy`; `sweet-spicy` → Spicy |
| ❄️ | `2744-fe0f.webp` | 2 | `season` → Winter; `c-trip` → Kashmir |
| 😤 | `1f624.webp` | 2 | topic of `peeve`; `peeve` → Loud chewing |
| 🙈 | `1f648.webp` | 2 | `peeve` → Spoilers; `s-pda` → Totally private |
| 💞 | `1f49e.webp` | 2 | topic of `c-love-lang`; `s-dance` → Slow and close |
| 🌌 | `1f30c.webp` | 2 | `c-date` → Stargazing on the terrace; `s-kiss-length` → Long enough to lose track of time |
| 😉 | `1f609.webp` | 2 | topic of `c-flirt`; `s-blush` → A wink |
| 🥰 | `1f970.webp` | 2 | topic of `c-pet-name`; `s-touch` → A gentle cheek stroke |
| 🧸 | `1f9f8.webp` | 2 | `c-pet-name` → Babu / Shona; `c-wakeup` → Cuddles |
| 🤪 | `1f92a.webp` | 2 | `c-pet-name` → Something silly; `s-dance` → Wild and silly |
| 🤐 | `1f910.webp` | 2 | `c-jealous` → Goes quiet; `s-into-you` → Goes shy and quiet |
| 🗣️ | `1f5e3-fe0f.webp` | 2 | `c-jealous` → Asks you directly; `s-flirted` → Asks about it later |
| ⏱️ | `23f1-fe0f.webp` | 2 | `c-mad` → A few minutes; `c-call` → Under 10 minutes |
| 🥺 | `1f97a.webp` | 2 | `c-mad` → Until you say sorry; `s-late-text` → I miss you |
| 💅 | `1f485.webp` | 2 | `c-attract` → Looks and style; `s-notice` → Style |
| 🥻 | `1f97b.webp` | 2 | `c-outfit` → Saree or kurta; `s-outfit-wow` → Saree |
| 🖤 | `1f5a4.webp` | 2 | `c-outfit` → An all-black look; `s-outfit-wow` → Little black dress |
| 💘 | `1f498.webp` | 2 | topic of `c-say-love`; topic of `s-weakness` |
| 📵 | `1f4f5.webp` | 2 | `c-dealbreaker` → Ignoring them; `s-night-in` → Lights low, phones off |
| 💐 | `1f490.webp` | 2 | topic of `c-gesture`; `c-gesture` → Flowers |
| 🎶 | `1f3b6.webp` | 2 | topic of `c-song`; topic of `s-mood-song` |
| 🎻 | `1f3bb.webp` | 2 | `c-song` → Old Bollywood; `s-mood-song` → Old Bollywood romance |
| 🏡 | `1f3e1.webp` | 2 | `c-future` → Living together; `s-pillow-talk` → Future plans |
| 💝 | `1f49d.webp` | 2 | topic of `c-valentine`; topic of `s-anniv` |
| 🦋 | `1f98b.webp` | 2 | topic of `c-first-date`; `c-first-date` → Butterflies |
| ✋ | `270b.webp` | 2 | `s-kiss-spot` → On the hands; `s-notice` → Hands |
| 💭 | `1f4ad.webp` | 2 | `s-late-text` → Thinking of you; `s-line` → I can't stop thinking about you |
| 😍 | `1f60d.webp` | 2 | topic of `s-swoon`; `s-line` → You look incredible |
| 🫂 | `1fac2.webp` | 2 | `s-swoon` → A tight hug from behind; `s-flirted` → Pulls you closer |
| 🌃 | `1f303.webp` | 2 | `s-daring` → Sneaking out for a date; topic of `s-after-date` |

## 6. Baaki jagah jahan image dikhti hai

### Tier badges

| Pack | Score | Emoji | Naam | File |
|---|---|---|---|---|
| friends | 0–3 | 🚫 | Fake friend | `1f6ab.webp` |
| friends | 4–6 | 🤨 | Sus | `1f928.webp` |
| friends | 7–8 | 🫶 | Real one | `1faf6.webp` |
| friends | 9–10 | 👑 | Bestie | `1f451.webp` |
| couples-sweet | 0–3 | 🙈 | Strangers? | `1f648.webp` |
| couples-sweet | 4–6 | 😏 | Getting there | `1f60f.webp` |
| couples-sweet | 7–8 | 🥰 | Partner in crime | `1f970.webp` |
| couples-sweet | 9–10 | 💞 | Soulmate | `1f49e.webp` |
| couples-spicy | 0–3 | 🧊 | Cold feet | `1f9ca.webp` |
| couples-spicy | 4–6 | 😏 | Warming up | `1f60f.webp` |
| couples-spicy | 7–8 | 🔥 | Hot stuff | `1f525.webp` |
| couples-spicy | 9–10 | 💘 | Perfect match | `1f498.webp` |

Result screen (24 px) aur creator scoreboard pill (20 px) me dikhte hain. Data `lib/questions.ts` ke `tier()` me hai.

### How-to-play (landing page)

| Step | Emoji | File |
|---|---|---|
| s1 | ✍️ | `270d-fe0f.webp` |
| s2 | 📤 | `1f4e4.webp` |
| s3 | 🏆 | `1f3c6.webp` |

### Chips (player landing)

| Chip | Emoji | File |
|---|---|---|
| Players | 👥 | `1f465.webp` |
| Questions | ❓ | `2753.webp` |

### Code me jahan `<Emoji>` render hota hai

| File : line | Kya dikhata hai | Size (px) |
|---|---|---|
| `app/page.tsx:58` | How-to-play step icon (landing) | 38 |
| `app/q/[slug]/page.tsx:124` | Tier badge (player result screen) | 24 |
| `app/q/[slug]/page.tsx:157` | Chip icon 👥 | 18 |
| `app/q/[slug]/page.tsx:158` | Chip icon ❓ | 18 |
| `app/q/[slug]/page.tsx:159` | quiz.level === "spicy" ? "🔥" : "💕" | 18 |
| `app/s/[slug]/page.tsx:110` | Tier pill (creator scoreboard) | 20 |
| `app/s/[slug]/page.tsx:119` | Creator ka jawab (scoreboard comparison) | 22 |
| `app/s/[slug]/page.tsx:120` | Player ka jawab (scoreboard comparison) | 22 |
| `components/AdultBanner.tsx:12` | 18+ warning icon 🔞 | 18 |
| `components/AgeGate.tsx:26` | 18+ warning icon 🔞 | 22 |
| `components/CreateFlow.tsx:172` | em | 52 |
| `components/ModeToggle.tsx:37` | Friends/Couples toggle icon 👫 | 22 |
| `components/ModeToggle.tsx:40` | Friends/Couples toggle icon 💕 | 22 |
| `components/Stepper.tsx:121` | Question ka topic icon (question card) | 44 |
| `components/Stepper.tsx:130` | Option thumbnail (answer cards) | tiles ? 52 : 58 |

## 7. Abhi bhi plain text emoji (image nahi)

Ye **text ke andar** hain (sentence ke beech), image nahi. Inhe badalna ho to text se hata kar `<Emoji e="…" />` ya apna icon lagana padega.

| File : line | Kahan | Emoji | Context |
|---|---|---|---|
| `app/s/[slug]/page.tsx:52` | UI | 🔥 | `` const text = `${t("howWell1")} ${b.name} ${t("howWell2")} ${b.mode === "couples" ? `${b.level === "spicy" ? "🔥 `` |
| `app/s/[slug]/page.tsx:52` | UI | 💕 | `` const text = `${t("howWell1")} ${b.name} ${t("howWell2")} ${b.mode === "couples" ? `${b.level === "spicy" ? "🔥 `` |
| `app/s/[slug]/page.tsx:52` | UI | 👀 | `` const text = `${t("howWell1")} ${b.name} ${t("howWell2")} ${b.mode === "couples" ? `${b.level === "spicy" ? "🔥 `` |
| `components/CreateFlow.tsx:143` | UI | 👋 | `<p className="hand text-2xl">{t("hi")} <span style={{ color: "#FF9F43" }}>{name.trim()}</span> 👋</p>` |
| `components/CreateFlow.tsx:170` | UI | 💕 | `{([["sweet", "💕", "levelSweet", "levelSweetD", "#FFE3EE"], ["spicy", "🔥", "levelSpicy", "levelSpicyD", "#FFE0C` |
| `components/CreateFlow.tsx:170` | UI | 🔥 | `{([["sweet", "💕", "levelSweet", "levelSweetD", "#FFE3EE"], ["spicy", "🔥", "levelSpicy", "levelSpicyD", "#FFE0C` |
| `components/CreateFlow.tsx:198` | UI | 🔥 | `` const text = `${t("howWell1")} ${name.trim()} ${t("howWell2")} ${couples ? `${level === "spicy" ? "🔥" : "💕"} ( `` |
| `components/CreateFlow.tsx:198` | UI | 💕 | `` const text = `${t("howWell1")} ${name.trim()} ${t("howWell2")} ${couples ? `${level === "spicy" ? "🔥" : "💕"} ( `` |
| `components/CreateFlow.tsx:198` | UI | 👀 | `` const text = `${t("howWell1")} ${name.trim()} ${t("howWell2")} ${couples ? `${level === "spicy" ? "🔥" : "💕"} ( `` |
| `components/LangPill.tsx:22` | UI | 🌐 | `<span aria-hidden>🌐</span>` |
| `lib/i18n.ts:83` | EN · `howSub` | 🚫 | Find your fake friends & decide who to block 🚫 |
| `lib/i18n.ts:90` | EN · `making` | 🤫 | hiding answers 🤫 |
| `lib/i18n.ts:92` | EN · `saveWarn` | ⚠️ | ⚠️ Save your secret link or screenshot this — it's your only key to see results. |
| `lib/i18n.ts:95` | EN · `tease` | 🚫 | Score low and you might get blocked 🚫 |
| `lib/i18n.ts:96` | EN · `missingKey` | 🔒 | This link is missing the secret key 🔒 |
| `lib/i18n.ts:160` | Hinglish · `howSub` | 🚫 | Fake friends dhoondo aur decide karo kise block karna hai 🚫 |
| `lib/i18n.ts:167` | Hinglish · `making` | 🤫 | jawab chhupa rahe hain 🤫 |
| `lib/i18n.ts:169` | Hinglish · `saveWarn` | ⚠️ | ⚠️ Apna secret link save karo ya screenshot le lo — results dekhne ki yahi ek chaabi hai. |
| `lib/i18n.ts:172` | Hinglish · `tease` | 🚫 | Score kam aaya to block ho sakte ho 🚫 |
| `lib/i18n.ts:173` | Hinglish · `missingKey` | 🔒 | Is link me secret key nahi hai 🔒 |
| `lib/i18n.ts:237` | Hindi · `howSub` | 🚫 | फेक फ्रेंड्स ढूँढो और तय करो किसे ब्लॉक करना है 🚫 |
| `lib/i18n.ts:244` | Hindi · `making` | 🤫 | जवाब छुपा रहे हैं 🤫 |
| `lib/i18n.ts:246` | Hindi · `saveWarn` | ⚠️ | ⚠️ अपना सीक्रेट लिंक सेव करो या स्क्रीनशॉट ले लो — नतीजे देखने की यही एक चाबी है। |
| `lib/i18n.ts:249` | Hindi · `tease` | 🚫 | स्कोर कम आया तो ब्लॉक हो सकते हो 🚫 |
| `lib/i18n.ts:250` | Hindi · `missingKey` | 🔒 | इस लिंक में सीक्रेट की नहीं है 🔒 |

## 8. Text symbols (emoji nahi, par chaaho to icons bana sakte ho)

Ye Unicode **symbols** hain jo font se aate hain. Dikhne me icon jaise hain, par emoji nahi.

| Symbol | Matlab | Kahan (file:lines) |
|---|---|---|
| ✓ | tick | `app/s/[slug]/page.tsx`:120; `components/LangPill.tsx`:35; `components/Stepper.tsx`:135 |
| ✕ | cross | `app/s/[slug]/page.tsx`:120; `components/Stepper.tsx`:136 |
| ‹ | back arrow | `app/s/[slug]/page.tsx`:88; `components/CreateFlow.tsx`:30; `components/Stepper.tsx`:102 |
| › | row chevron | `app/s/[slug]/page.tsx`:111 |
| → | arrow in buttons | `app/page.tsx`:47; `app/q/[slug]/page.tsx`:139; `components/CreateFlow.tsx`:134 |
| ⌃ | chevron up | `app/s/[slug]/page.tsx`:111 |
| ⌄ | chevron down | `components/LangPill.tsx`:25 |
| ⟳ | skip | `components/Stepper.tsx`:146 |

## 9. Emoji nahi hain (inhe mat badlo)

- **Pip & Boo** mascots: SVG code me hain (`components/Mascot.tsx`).
- **Share buttons** (WhatsApp / Instagram / Snapchat): `react-icons` ke brand glyphs.
- **App icon**: `app/icon.svg`. **Zenviq logo**: `public/zenviq-logo.svg`.

## 10. Agla kadam

1. Sirf kuch images badalni hain → Section 3/4 ki "Abhi ki file" wale naam se `public/emoji/` me daal do. Bas.
2. Har option ki alag real photo chahiye → mujhe bolo; main `public/options/<question-id>/<option-id>.webp` support laga dunga (jo photo mile wahi dikhegi, baaki jagah stock image rahegi) aur photo ke liye tile ko full-bleed bana dunga.
3. Image licence: apni photos ya licensed (Unsplash/Pexels) hi rakho. Kisi site se uthayi hui images mat lagana.
