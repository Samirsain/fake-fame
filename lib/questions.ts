export type Option = { id: string; emoji: string; label: string };
export type Question = { id: string; emoji: string; text: string; options: Option[] };

const o = (emoji: string, label: string): Option => ({ id: label.toLowerCase().replace(/\W+/g, "-"), emoji, label });

// IN pack: 30 questions (PRD §6). Ids are stable keys for stored quizzes — never rename one.
export const QUESTIONS: Question[] = [
  { id: "money", emoji: "💸", text: "What does {name} spend most money on?", options: [o("🍔", "Food"), o("👟", "Clothes"), o("🎮", "Games"), o("🎧", "Gadgets"), o("👫", "Going out"), o("💰", "Saves it")] },
  { id: "cartoon", emoji: "📺", text: "{name}'s all-time favourite cartoon?", options: [o("🖍️", "Shinchan"), o("🐱", "Doraemon"), o("🧒", "Chhota Bheem"), o("🥟", "Motu Patlu"), o("🐈", "Oggy"), o("🐭", "Tom & Jerry"), o("⚡", "Pokémon"), o("⌚", "Ben 10")] },
  { id: "street-food", emoji: "🌮", text: "{name}'s go-to street food?", options: [o("🫓", "Pani puri"), o("🥟", "Momos"), o("🍔", "Vada pav"), o("🍛", "Chole bhature"), o("🍞", "Pav bhaji"), o("🍜", "Maggi")] },
  { id: "app", emoji: "📱", text: "Which app does {name} open first in the morning?", options: [o("📸", "Instagram"), o("💬", "WhatsApp"), o("▶️", "YouTube"), o("👻", "Snapchat"), o("🎵", "Spotify"), o("😴", "None — sleeps in")] },
  { id: "owl", emoji: "🌙", text: "{name} is more of a…", options: [o("🦉", "Night owl"), o("🐦", "Early bird")] },
  { id: "trip", emoji: "✈️", text: "{name}'s dream trip?", options: [o("🏖️", "Goa"), o("🏔️", "Manali"), o("🏙️", "Dubai"), o("🗼", "Paris"), o("🗾", "Japan"), o("🏝️", "Maldives")] },
  { id: "never-share", emoji: "🙅", text: "What would {name} never share?", options: [o("🍕", "Food"), o("📱", "Phone"), o("🎧", "Earphones"), o("🔌", "Charger"), o("🛏️", "Bed"), o("🤫", "Secrets")] },
  { id: "drink", emoji: "☕", text: "{name}'s comfort drink?", options: [o("🍵", "Chai"), o("☕", "Coffee"), o("🥤", "Cold drink"), o("🥛", "Lassi"), o("🧃", "Juice"), o("💧", "Water only")] },
  { id: "ipl", emoji: "🏏", text: "Which IPL team does {name} support?", options: [o("💛", "CSK"), o("💙", "MI"), o("❤️", "RCB"), o("💜", "KKR"), o("🧡", "SRH"), o("🙄", "Doesn't watch")] },
  { id: "fear", emoji: "😱", text: "{name}'s biggest fear?", options: [o("📝", "Exams"), o("🪳", "Cockroaches"), o("🏢", "Heights"), o("🌑", "Dark"), o("👀", "Being ignored"), o("🐕", "Dogs")] },
  { id: "texts", emoji: "💬", text: "How does {name} reply to texts?", options: [o("⚡", "Instantly"), o("🐢", "After hours"), o("👀", "Seen-zone"), o("🎙️", "Voice notes")] },
  { id: "festival", emoji: "🪔", text: "{name}'s favourite festival?", options: [o("🪔", "Diwali"), o("🎨", "Holi"), o("🌙", "Eid"), o("🎄", "Christmas"), o("💃", "Navratri"), o("🧵", "Raksha Bandhan")] },
  { id: "outfit", emoji: "👕", text: "{name}'s go-to outfit?", options: [o("🧥", "Hoodie"), o("👖", "Jeans & tee"), o("👘", "Kurta"), o("🏃", "Tracksuit"), o("👔", "Formal shirt"), o("🛌", "Pyjamas")] },
  { id: "weekend", emoji: "🛋️", text: "How does {name} spend a perfect weekend?", options: [o("😴", "Sleeping"), o("📺", "Binge-watching"), o("🎮", "Gaming"), o("👫", "Hanging out"), o("🏏", "Playing sports"), o("🏠", "Family time")] },
  { id: "snack", emoji: "🍿", text: "{name}'s favourite snack?", options: [o("🥔", "Chips"), o("🥟", "Samosa"), o("🍪", "Biscuits"), o("🍿", "Popcorn"), o("🍫", "Chocolates"), o("🍎", "Fruits")] },
  { id: "watch", emoji: "🎬", text: "What does {name} watch the most?", options: [o("🎌", "Anime"), o("📺", "Web series"), o("🎞️", "Movies"), o("🏏", "Cricket"), o("🎥", "YouTube vlogs"), o("📱", "Reels")] },
  { id: "superpower", emoji: "🦸", text: "Which superpower would {name} pick?", options: [o("🫥", "Invisibility"), o("🕊️", "Flying"), o("⏳", "Time travel"), o("🧠", "Mind reading"), o("✨", "Teleport"), o("⚡", "Super speed")] },
  { id: "music", emoji: "🎵", text: "{name}'s music taste?", options: [o("🎬", "Bollywood"), o("🎤", "Punjabi"), o("🎧", "Hip-hop"), o("🌙", "Lo-fi"), o("🎸", "Rock"), o("💜", "K-pop")] },
  { id: "sleep", emoji: "🛏️", text: "What time does {name} usually sleep?", options: [o("🌆", "Before 10 pm"), o("🌙", "Around midnight"), o("🦉", "1–2 am"), o("🧛", "After 3 am"), o("🤷", "Whenever")] },
  { id: "pet", emoji: "🐾", text: "{name}'s dream pet?", options: [o("🐕", "Dog"), o("🐈", "Cat"), o("🦜", "Parrot"), o("🐇", "Rabbit"), o("🐠", "Fish"), o("🙅", "No pets")] },
  { id: "subject", emoji: "🏫", text: "{name}'s favourite subject in school?", options: [o("➕", "Maths"), o("🔬", "Science"), o("📖", "English"), o("🏛️", "History"), o("🏃", "PT / Games"), o("💻", "Computers")] },
  { id: "dessert", emoji: "🍨", text: "{name}'s favourite sweet dish?", options: [o("🍡", "Gulab jamun"), o("🍦", "Ice cream"), o("🍥", "Jalebi"), o("🍰", "Cake"), o("🍧", "Kulfi"), o("🥣", "Rasmalai")] },
  { id: "ride", emoji: "🚦", text: "How does {name} travel the most?", options: [o("🏍️", "Bike"), o("🛺", "Auto"), o("🚇", "Metro"), o("🚌", "Bus"), o("🚗", "Car"), o("🚶", "Walks")] },
  { id: "sad", emoji: "🌧️", text: "What does {name} do when sad?", options: [o("🍔", "Eats food"), o("😴", "Sleeps"), o("🎧", "Plays songs"), o("📞", "Calls a friend"), o("😭", "Cries"), o("🙂", "Acts fine")] },
  { id: "text-call", emoji: "☎️", text: "{name} would rather…", options: [o("💬", "Text"), o("📞", "Call")] },
  { id: "sweet-spicy", emoji: "🌶️", text: "{name} would rather eat…", options: [o("🍰", "Sweet"), o("🌶️", "Spicy")] },
  { id: "season", emoji: "🌦️", text: "{name}'s favourite season?", options: [o("☀️", "Summer"), o("🌧️", "Monsoon"), o("❄️", "Winter"), o("🌸", "Spring")] },
  { id: "sport", emoji: "🏅", text: "{name}'s favourite sport?", options: [o("🏏", "Cricket"), o("⚽", "Football"), o("🏸", "Badminton"), o("🤼", "Kabaddi"), o("🏀", "Basketball"), o("♟️", "Chess")] },
  { id: "peeve", emoji: "😤", text: "What annoys {name} the most?", options: [o("😤", "Loud chewing"), o("🐌", "Slow walkers"), o("🙈", "Spoilers"), o("⏰", "Late friends"), o("📶", "Bad WiFi"), o("💬", "Group-chat spam")] },
  { id: "gift", emoji: "🎁", text: "Best gift for {name}?", options: [o("📚", "Books"), o("🍫", "Chocolates"), o("💵", "Cash"), o("🪴", "Plants"), o("🎉", "Surprise party"), o("🧴", "Perfume")] },
];


// Couples pack (18+): flirty and romantic, never explicit. Ids start with "c-". Same stable-id rule as above.
export const COUPLES: Question[] = [
  { id: "c-love-lang", emoji: "💞", text: "What is {name}'s love language?", options: [o("💬", "Words of affirmation"), o("⏰", "Quality time"), o("🎁", "Gifts"), o("🤝", "Acts of service"), o("🤗", "Physical touch")] },
  { id: "c-date", emoji: "🌹", text: "{name}'s dream date?", options: [o("🕯️", "Candlelight dinner"), o("🌅", "Beach sunset"), o("🚗", "Long drive"), o("🎬", "Movie night at home"), o("🌌", "Stargazing on the terrace")] },
  { id: "c-flirt", emoji: "😉", text: "How does {name} flirt?", options: [o("👀", "Eye contact"), o("😜", "Teasing"), o("💬", "Compliments"), o("📱", "Memes and reels"), o("🙃", "Playful bickering")] },
  { id: "c-pet-name", emoji: "🥰", text: "What does {name} call you?", options: [o("👶", "Baby"), o("💖", "Jaan"), o("🧸", "Babu / Shona"), o("🪪", "Your real name"), o("🤪", "Something silly")] },
  { id: "c-first-text", emoji: "📱", text: "What does {name} text first in the morning?", options: [o("☀️", "Good morning"), o("😂", "A meme"), o("🤳", "A selfie"), o("😴", "Nothing, still asleep"), o("🤔", "Where are you?")] },
  { id: "c-jealous", emoji: "😒", text: "What does {name} do when jealous?", options: [o("🤐", "Goes quiet"), o("🙂", "Acts totally fine"), o("🗣️", "Asks you directly"), o("😞", "Sulks until you notice"), o("😈", "Makes you jealous back")] },
  { id: "c-mad", emoji: "😠", text: "How long can {name} stay mad at you?", options: [o("⏱️", "A few minutes"), o("🕒", "A few hours"), o("📅", "A whole day"), o("🥺", "Until you say sorry"), o("♾️", "Forever (kidding)")] },
  { id: "c-apology", emoji: "🍫", text: "How does {name} say sorry?", options: [o("🍫", "Chocolates"), o("💌", "A long message"), o("😂", "A funny meme"), o("🤗", "A warm hug"), o("🍝", "Cooks dinner")] },
  { id: "c-kiss", emoji: "💋", text: "What is {name}'s kissing style?", options: [o("🕊️", "Slow and soft"), o("😘", "Playful pecks"), o("🔥", "Passionate"), o("🤍", "Forehead kisses"), o("✨", "Surprise kisses")] },
  { id: "c-cuddle", emoji: "🛌", text: "{name}'s favourite way to cuddle?", options: [o("🥄", "Spooning"), o("💓", "Head on your chest"), o("🤝", "Holding hands"), o("🦵", "Tangled legs"), o("🐻", "Big bear hug")] },
  { id: "c-attract", emoji: "🔥", text: "What attracts {name} the most?", options: [o("😎", "Confidence"), o("😂", "A great sense of humour"), o("💅", "Looks and style"), o("🤍", "A kind heart"), o("🧠", "Smart conversation")] },
  { id: "c-outfit", emoji: "👗", text: "What does {name} love seeing you in?", options: [o("🥻", "Saree or kurta"), o("🖤", "An all-black look"), o("👖", "Jeans & tee"), o("👔", "Formal shirt"), o("🧥", "Hoodie")] },
  { id: "c-evening", emoji: "🌙", text: "{name}'s perfect romantic evening?", options: [o("📺", "Netflix and chill"), o("💃", "A slow dance"), o("💋", "Long kisses"), o("😴", "Cuddling till we sleep"), o("🍕", "Midnight snacks")] },
  { id: "c-trip", emoji: "✈️", text: "{name}'s dream couple trip?", options: [o("🏝️", "Maldives"), o("🗼", "Paris"), o("🌴", "Bali"), o("🏔️", "Switzerland"), o("❄️", "Kashmir"), o("🏖️", "Goa")] },
  { id: "c-say-love", emoji: "💘", text: "When would {name} say 'I love you'?", options: [o("⚡", "In the first week"), o("🌱", "Within 3 months"), o("🌳", "After 6 months"), o("🗓️", "After a year"), o("💯", "Only when 100% sure")] },
  { id: "c-dealbreaker", emoji: "🚩", text: "What is {name}'s biggest dealbreaker?", options: [o("💔", "Cheating"), o("🤥", "Lying"), o("📵", "Ignoring them"), o("⛓️", "Controlling behaviour"), o("😒", "Rudeness to waiters"), o("🧼", "Bad hygiene")] },
  { id: "c-gesture", emoji: "💐", text: "{name}'s most romantic gesture?", options: [o("✉️", "A handwritten letter"), o("🧳", "A surprise trip"), o("🍳", "Cooking for you"), o("🎧", "A playlist made for you"), o("💐", "Flowers")] },
  { id: "c-wakeup", emoji: "☀️", text: "How does {name} love to be woken up?", options: [o("😘", "A soft kiss"), o("🥞", "Breakfast in bed"), o("🧸", "Cuddles"), o("⏰", "Just the alarm"), o("🍵", "Chai")] },
  { id: "c-call", emoji: "📞", text: "How long can {name} talk to you on a call?", options: [o("⏱️", "Under 10 minutes"), o("🕐", "About an hour"), o("😴", "Until we fall asleep"), o("💬", "Texts only, no calls")] },
  { id: "c-argue", emoji: "🥊", text: "What do you and {name} argue about the most?", options: [o("🍽️", "Where to eat"), o("📱", "Phone time"), o("⏰", "Being late"), o("⚖️", "Who is right"), o("📺", "The TV remote")] },
  { id: "c-song", emoji: "🎶", text: "{name}'s love-song vibe?", options: [o("🎻", "Old Bollywood"), o("😢", "Slow sad songs"), o("🎤", "Punjabi"), o("🎹", "English love songs"), o("🌙", "Lo-fi")] },
  { id: "c-future", emoji: "🏠", text: "Where does {name} see you two in 5 years?", options: [o("💍", "Married"), o("🏡", "Living together"), o("🌍", "Travelling the world"), o("💼", "Running our own business"), o("🤷", "Still figuring it out")] },
  { id: "c-valentine", emoji: "💝", text: "{name}'s perfect Valentine's Day?", options: [o("🍽️", "Dinner out"), o("🛋️", "Staying in together"), o("🎁", "A big surprise"), o("✈️", "A little trip"), o("🙄", "Skip it, overrated")] },
  { id: "c-first-date", emoji: "🦋", text: "How did {name} feel on your first date?", options: [o("😬", "Super nervous"), o("🦋", "Butterflies"), o("😌", "Totally calm"), o("🤯", "Overthinking everything"), o("🤤", "Honestly just hungry")] },
];

export type Mode = "friends" | "couples";
export const packOf = (m: Mode) => (m === "couples" ? COUPLES : QUESTIONS);
export const byId = (id: string) => QUESTIONS.find((q) => q.id === id) ?? COUPLES.find((q) => q.id === id);

const TIERS = {
  friends: [
    { emoji: "🚫", name: "Fake friend", copy: "Who even are you? Blocked." },
    { emoji: "🤨", name: "Sus", copy: "On thin ice…" },
    { emoji: "🫶", name: "Real one", copy: "You actually pay attention." },
    { emoji: "👑", name: "Bestie", copy: "Certified fam." },
  ],
  couples: [
    { emoji: "🙈", name: "Strangers?", copy: "Have we even met?" },
    { emoji: "😏", name: "Getting there", copy: "Still learning each other." },
    { emoji: "🥰", name: "Partner in crime", copy: "You really know them." },
    { emoji: "💞", name: "Soulmate", copy: "Made for each other." },
  ],
} as const;

/** 0–3 → 0, 4–6 → 1, 7–8 → 2, 9–10 → 3 */
export const band = (s: number) => (s <= 3 ? 0 : s <= 6 ? 1 : s <= 8 ? 2 : 3);
export const tier = (s: number, mode: Mode = "friends") => ({ ...TIERS[mode][band(s)], band: band(s) });
/** [soft background, text, ring arc] per band (DESIGN.md §4.13) */
export const TIER_COLORS = [
  ["#FFE1E4", "#C21F33", "#FF4D5E"],
  ["#FFF1E8", "#9C4A12", "#FF9F43"],
  ["#DDF8E6", "#167A3E", "#2FBF68"],
  ["#FFF4CC", "#8A6A00", "#FFD23F"],
] as const;

const BAD = ["fuck", "shit", "bitch", "asshole", "bastard", "madarchod", "behenchod", "chutiya", "bhosdi", "gandu", "randi", "harami"];
export const cleanName = (s: unknown) => {
  const n = String(s ?? "").trim();
  return n.length >= 1 && n.length <= 15 && !BAD.some((b) => n.toLowerCase().includes(b)) ? n : null;
};
