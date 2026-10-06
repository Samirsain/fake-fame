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

// Spicy pack (18+): more adult than the sweet pack. Flirty, sensual and suggestive, never explicit. Ids start with "s-".
export const SPICY: Question[] = [
  { id: "s-kiss-spot", emoji: "💋", text: "Where does {name} love being kissed most?", options: [o("👄", "Lips"), o("🧣", "Neck"), o("🤍", "Forehead"), o("😊", "Cheek"), o("✋", "On the hands")] },
  { id: "s-late-text", emoji: "🌙", text: "What does {name} text you late at night?", options: [o("🥺", "I miss you"), o("👀", "Are you awake?"), o("🏠", "Come over"), o("📺", "Netflix?"), o("💭", "Thinking of you")] },
  { id: "s-swoon", emoji: "😍", text: "What makes {name} swoon fastest?", options: [o("🤫", "A whisper in the ear"), o("🫂", "A tight hug from behind"), o("😘", "A surprise kiss"), o("💬", "A sincere compliment"), o("👁️", "Eye contact across the room")] },
  { id: "s-outfit-wow", emoji: "🥵", text: "Which look makes {name} weak at the knees?", options: [o("🥻", "Saree"), o("🖤", "Little black dress"), o("🕴️", "Sharp suit"), o("🏋️", "Gym fit"), o("👕", "Wearing their shirt")] },
  { id: "s-night-in", emoji: "🕯️", text: "{name}'s idea of a perfect romantic night in?", options: [o("🕯️", "Candles and soft music"), o("📵", "Lights low, phones off"), o("🍳", "Cooking together"), o("💃", "Slow dancing at home"), o("🌧️", "Rain outside and cuddles")] },
  { id: "s-daring", emoji: "😈", text: "What is the most daring romantic thing {name} would try?", options: [o("💋", "A kiss in a crowd"), o("🏊", "A midnight swim"), o("🧳", "A surprise weekend away"), o("🏙️", "A rooftop slow dance"), o("🌃", "Sneaking out for a date")] },
  { id: "s-first-kiss", emoji: "💋", text: "Where would {name} want a perfect first kiss?", options: [o("🌧️", "In the rain"), o("🏙️", "On a rooftop"), o("🎬", "In a movie theatre"), o("🏖️", "On a beach"), o("✨", "Under the stars")] },
  { id: "s-pda", emoji: "💑", text: "How does {name} feel about PDA?", options: [o("🤝", "Hand-holding only"), o("😘", "A quick kiss is fine"), o("😎", "Loves showing off"), o("🙈", "Totally private"), o("🤷", "Depends on the mood")] },
  { id: "s-romantic-time", emoji: "🌅", text: "When is {name} at their most romantic?", options: [o("🌅", "Early morning"), o("🌤️", "Lazy afternoon"), o("🌇", "Sunset"), o("🌙", "Late at night"), o("🌧️", "Rainy days")] },
  { id: "s-touch", emoji: "🫶", text: "What is {name}'s favourite kind of touch?", options: [o("💇", "Playing with hair"), o("💆", "A back rub"), o("🤝", "Holding hands"), o("🥰", "A gentle cheek stroke"), o("🤗", "A long hug")] },
  { id: "s-line", emoji: "😏", text: "Which line would melt {name}?", options: [o("😍", "You look incredible"), o("💭", "I can't stop thinking about you"), o("💃", "Dance with me?"), o("🍳", "Let me cook for you"), o("😘", "Can I steal a kiss?")] },
  { id: "s-blush", emoji: "😊", text: "What makes {name} blush fastest?", options: [o("🔥", "A bold compliment"), o("😘", "A surprise kiss"), o("🤫", "A whisper"), o("😉", "A wink"), o("😜", "Teasing in public")] },
  { id: "s-pillow-talk", emoji: "💬", text: "What does {name} love talking about late at night?", options: [o("🏡", "Future plans"), o("😂", "Silly memories"), o("🤫", "Secrets and confessions"), o("✈️", "Dream trips"), o("✨", "Wild dreams")] },
  { id: "s-after-date", emoji: "🌃", text: "What does {name} want after a perfect date night?", options: [o("🌅", "Cuddling till sunrise"), o("🍕", "A late-night snack run"), o("💋", "A long goodnight kiss"), o("💃", "Dancing in the kitchen"), o("📺", "Netflix and sleep")] },
  { id: "s-notice", emoji: "👀", text: "What does {name} notice first about someone?", options: [o("😊", "Smile"), o("👀", "Eyes"), o("🎙️", "Voice"), o("💅", "Style"), o("✋", "Hands")] },
  { id: "s-into-you", emoji: "😏", text: "How does {name} show they are into you?", options: [o("👀", "Stares a little too long"), o("🤚", "Finds reasons to touch your arm"), o("💬", "Texts nonstop"), o("😜", "Teases you"), o("🤐", "Goes shy and quiet")] },
  { id: "s-mood-song", emoji: "🎶", text: "Which song vibe sets the mood for {name}?", options: [o("🎷", "Slow R&B"), o("🎸", "Soft acoustic"), o("🎻", "Old Bollywood romance"), o("🌙", "Lo-fi beats"), o("🎺", "Jazz")] },
  { id: "s-type", emoji: "😈", text: "What is {name}'s guilty-pleasure type?", options: [o("🕶️", "Mysterious and quiet"), o("😄", "Funny and flirty"), o("🧔", "Tall, dark and striking"), o("🤗", "Sweet and caring"), o("😈", "Bad boy or bad girl")] },
  { id: "s-kiss-length", emoji: "💋", text: "How long is {name}'s perfect kiss?", options: [o("⚡", "A quick peck"), o("⏳", "A few slow seconds"), o("🌌", "Long enough to lose track of time"), o("🎵", "As long as the song plays"), o("🤍", "Forehead, then a hug")] },
  { id: "s-flirted", emoji: "😎", text: "What does {name} do when someone flirts with you?", options: [o("😏", "Smirks and plays it cool"), o("🫂", "Pulls you closer"), o("😒", "Gets visibly jealous"), o("😂", "Laughs it off"), o("🗣️", "Asks about it later")] },
  { id: "s-bold-text", emoji: "📱", text: "What is the boldest thing {name} would text you?", options: [o("😘", "A flirty compliment"), o("🤗", "Missing your hugs"), o("🎙️", "A low-voice voice note"), o("😈", "A teasing dare"), o("💌", "A poem for you")] },
  { id: "s-weakness", emoji: "💘", text: "What is {name}'s weakness in love?", options: [o("😊", "Your smile"), o("🎙️", "Your voice"), o("🤗", "Your hugs"), o("😂", "Your jokes"), o("🍳", "Your cooking")] },
  { id: "s-dance", emoji: "💃", text: "If you two danced, how would {name} lead?", options: [o("💞", "Slow and close"), o("🌀", "Playful spins"), o("🤪", "Wild and silly"), o("🦶", "Stepping on your feet"), o("👀", "Eyes locked the whole time")] },
  { id: "s-anniv", emoji: "💝", text: "What is {name}'s dream anniversary?", options: [o("🍽️", "A private dinner for two"), o("🧳", "A surprise trip"), o("📍", "Revisiting the first-date spot"), o("💌", "A letter and a gift"), o("🛋️", "Staying in and cuddling")] },
];

// Extreme pack (21+). Intentionally empty: the owner supplies these questions (same shape as the other packs, ids start with "x-").
// The Extreme level only appears once there are at least EXTREME_MIN of them (10 to play + 10 spare for skips).
export const EXTREME: Question[] = [
  { id: "x-late-night-text", emoji: "🌙", text: "What does {name} usually text late at night?", options: [o("😘", "Miss you"), o("🔥", "Come over"), o("😏", "Can't sleep"), o("💭", "Thinking of you"), o("🛏️", "Are you up")] },
  { id: "x-first-attraction", emoji: "👀", text: "What first attracted {name} to you the most?", options: [o("💬", "Your vibe"), o("😌", "Your smile"), o("🧠", "Your mind"), o("✨", "Your energy"), o("🗣️", "Your voice")] },
  { id: "x-secret-desire", emoji: "🤫", text: "What is {name}'s biggest secret desire right now?", options: [o("🌅", "Morning together"), o("🔓", "No limits night"), o("📍", "Spontaneous plan"), o("🕯️", "Slow evening"), o("🚪", "Just us alone")] },
  { id: "x-turn-on-style", emoji: "⚡", text: "What turns {name} on the fastest?", options: [o("📱", "Flirty texts"), o("👀", "Direct eye contact"), o("🤏", "Light touch"), o("🗣️", "Soft voice"), o("😏", "Confident talk")] },
  { id: "x-kissing-pref", emoji: "💋", text: "How does {name} prefer kissing most?", options: [o("⏳", "Slow and deep"), o("⚡", "Quick and hungry"), o("😌", "Soft and sweet"), o("🔥", "Intense and long"), o("😊", "Playful")] },
  { id: "x-after-midnight", emoji: "🕛", text: "What does {name} want most after midnight?", options: [o("🛋️", "Cuddle close"), o("💬", "Deep talk"), o("🔥", "Stay up longer"), o("😴", "Sleep together"), o("🎵", "Music and vibes")] },
  { id: "x-control-pref", emoji: "🎮", text: "Does {name} like to lead or follow in private?", options: [o("👑", "Always lead"), o("🤝", "Switch often"), o("🙇", "Prefer follow"), o("🎲", "Depends on mood")] },
  { id: "x-body-language", emoji: "🪞", text: "What body language of yours drives {name} crazy?", options: [o("👀", "Looking back"), o("😌", "Biting lip"), o("🤏", "Light touch back"), o("😏", "Confident walk"), o("💬", "Close whispering")] },
  { id: "x-fantasy-setting", emoji: "🌆", text: "Where does {name} most want a private moment?", options: [o("🚗", "In the car"), o("🏨", "Hotel room"), o("🏠", "At home"), o("🌅", "Early morning"), o("🌃", "Late balcony")] },
  { id: "x-tease-style", emoji: "😈", text: "How does {name} like to be teased?", options: [o("📱", "Over text"), o("👂", "In ear"), o("👀", "Across room"), o("🤏", "With touch"), o("⏳", "All day long")] },
  { id: "x-morning-mood", emoji: "☀️", text: "What is {name} like right after waking up with you?", options: [o("🤗", "Super clingy"), o("😴", "Still sleepy"), o("🔥", "Already playful"), o("💬", "Wants to talk"), o("😌", "Quiet and soft")] },
  { id: "x-jealous-trigger", emoji: "💚", text: "What makes {name} a little jealous fastest?", options: [o("📱", "Late replies"), o("👀", "Too much attention"), o("💬", "Flirty jokes"), o("⏰", "Busy all day"), o("😏", "Someone else staring")] },
  { id: "x-compliment-love", emoji: "🥰", text: "Which compliment does {name} melt over most?", options: [o("🧠", "You're so smart"), o("🔥", "You look hot"), o("💓", "I need you"), o("😌", "You feel safe"), o("✨", "You're addictive")] },
  { id: "x-private-nickname", emoji: "🙊", text: "What kind of private name does {name} like?", options: [o("💕", "Sweet ones"), o("🔥", "Spicy ones"), o("😏", "Playful ones"), o("👑", "Possessive ones")] },
  { id: "x-weekend-plan", emoji: "📅", text: "What does {name} want most on a free weekend?", options: [o("🛏️", "Stay in all day"), o("🚗", "Spontaneous drive"), o("🕯️", "Cozy night in"), o("🎉", "Go out late"), o("😴", "Sleep and chill")] },
  { id: "x-eye-contact", emoji: "👁️", text: "When does {name} hold eye contact the longest?", options: [o("💬", "During deep talk"), o("🔥", "In charged moments"), o("😌", "While smiling"), o("🤫", "When teasing"), o("💓", "Before saying something")] },
  { id: "x-touch-craving", emoji: "✋", text: "Where does {name} crave your touch most?", options: [o("🤗", "Full hug"), o("✋", "Hand holding"), o("😌", "Back of neck"), o("💓", "Waist pull"), o("🤏", "Light arm touch")] },
  { id: "x-mood-reader", emoji: "🔮", text: "How well can you read {name}'s mood without words?", options: [o("💯", "Always know"), o("😊", "Most times"), o("🤔", "Sometimes miss"), o("😅", "Often guess wrong")] },
  { id: "x-late-confession", emoji: "🌑", text: "What does {name} confess more easily late at night?", options: [o("💓", "Feelings"), o("🔥", "Desires"), o("🤫", "Secrets"), o("😌", "Insecurities"), o("💭", "Random thoughts")] },
  { id: "x-energy-match", emoji: "⚡", text: "What energy from you matches {name} best?", options: [o("🔥", "Bold and direct"), o("😌", "Calm and soft"), o("😏", "Playful tease"), o("💓", "Warm and close"), o("🎲", "Unpredictable")] },
  { id: "x-forbidden-thought", emoji: "🚫", text: "What kind of thought does {name} have but rarely says?", options: [o("🔥", "How badly they want you"), o("💓", "How much they need you"), o("😏", "What they would do"), o("🌙", "How you looked last night")] },
  { id: "x-aftercare-style", emoji: "🤍", text: "What does {name} need most after intense moments?", options: [o("🤗", "Tight hugs"), o("💬", "Soft words"), o("😌", "Quiet closeness"), o("💧", "Water and rest"), o("😘", "More kisses")] },
  { id: "x-risk-level", emoji: "🎲", text: "How risky does {name} like things to feel?", options: [o("😌", "Safe and soft"), o("😏", "A little daring"), o("🔥", "Quite bold"), o("⚡", "Depends on day")] },
  { id: "x-last-thought", emoji: "🌌", text: "What is usually {name}'s last thought before sleep with you?", options: [o("💓", "Stay close"), o("😌", "This feels right"), o("🔥", "Want more"), o("😴", "Don't let go"), o("💭", "Tomorrow again")] },
];
export const EXTREME_MIN = 20;
export const extremeReady = () => EXTREME.length >= EXTREME_MIN;

export type Mode = "friends" | "couples";
export type Level = "sweet" | "spicy" | "extreme";
/** The question pool for a quiz: friends, or couples at the chosen level (sweet = romantic, spicy = more adult). */
export const packOf = (m: Mode, level: Level = "sweet") => (m === "friends" ? QUESTIONS : level === "extreme" ? EXTREME : level === "spicy" ? SPICY : COUPLES);
export const byId = (id: string) => QUESTIONS.find((q) => q.id === id) ?? COUPLES.find((q) => q.id === id) ?? SPICY.find((q) => q.id === id) ?? EXTREME.find((q) => q.id === id);

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
  spicy: [
    { emoji: "🧊", name: "Cold feet", copy: "Time to warm things up." },
    { emoji: "😏", name: "Warming up", copy: "Getting interesting…" },
    { emoji: "🔥", name: "Hot stuff", copy: "You know exactly what they like." },
    { emoji: "💘", name: "Perfect match", copy: "Sparks everywhere." },
  ],
} as const;

/** 0–3 → 0, 4–6 → 1, 7–8 → 2, 9–10 → 3 */
export const band = (s: number) => (s <= 3 ? 0 : s <= 6 ? 1 : s <= 8 ? 2 : 3);
export const tier = (s: number, mode: Mode = "friends", level: Level = "sweet") =>
  ({ ...TIERS[mode === "couples" && level !== "sweet" ? "spicy" : mode][band(s)], band: band(s) });
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
