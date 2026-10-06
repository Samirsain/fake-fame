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

export const byId = (id: string) => QUESTIONS.find((q) => q.id === id);

export const tier = (s: number) =>
  s <= 3 ? { emoji: "🚫", name: "Fake friend", copy: "Who even are you? Blocked." }
  : s <= 6 ? { emoji: "🤨", name: "Sus", copy: "On thin ice…" }
  : s <= 8 ? { emoji: "🫶", name: "Real one", copy: "You actually pay attention." }
  : { emoji: "👑", name: "Bestie", copy: "Certified fam." };

const BAD = ["fuck", "shit", "bitch", "asshole", "bastard", "madarchod", "behenchod", "chutiya", "bhosdi", "gandu", "randi", "harami"];
export const cleanName = (s: unknown) => {
  const n = String(s ?? "").trim();
  return n.length >= 1 && n.length <= 15 && !BAD.some((b) => n.toLowerCase().includes(b)) ? n : null;
};
