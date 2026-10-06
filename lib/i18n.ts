"use client";
import { useSyncExternalStore } from "react";
import type { Question } from "./questions";

export type Lang = "en" | "hi" | "hx";
export const LANGS: { id: Lang; label: string; sub: string }[] = [
  { id: "en", label: "English", sub: "English" },
  { id: "hi", label: "हिन्दी", sub: "Hindi" },
  { id: "hx", label: "Hinglish", sub: "Hindi in English letters" },
];

// ---- language store (localStorage + custom event; server renders "en") ----
const KEY = "lang";
const get = (): Lang => {
  try { const v = localStorage.getItem(KEY); if (v === "hi" || v === "hx" || v === "en") return v; } catch {}
  return "en";
};
const subscribe = (cb: () => void) => { window.addEventListener("langchange", cb); return () => window.removeEventListener("langchange", cb); };
export const setLang = (l: Lang) => { try { localStorage.setItem(KEY, l); } catch {} window.dispatchEvent(new Event("langchange")); };
export const useLang = () => useSyncExternalStore(subscribe, get, () => "en" as Lang);

// ---- UI strings ----
type Dict = Record<string, string>;
const en: Dict = {
  chooseLang: "Choose language", close: "Close", search: "Search language", ig: "Instagram", snap: "Snapchat",
  igHint: "Link copied — paste it in a Story link sticker", linkCopied: "Link copied!", shareScore: "Share my score",
  scoreText: "I scored {s}/10 on {name}'s quiz! Think you can beat me?", shareAgain: "Share again", deleteQuiz: "Delete quiz",
  delTitle: "Delete this quiz?", delBody: "All players and scores will be removed for good.", cancel: "Cancel", del: "Delete",
  hide: "Hide this player", you: "You", deleted: "Quiz deleted", gone: "This quiz was deleted or has expired.", tooMany: "Too many tries — wait a bit.",
  tagline: "Find your fake friends", heroA: "create your quiz", heroBlock: "block", heroB: "your fake friends",
  create: "create quiz", myBoard: "View my scoreboard", howTitle: "how to play?", howSub: "Find your fake friends & decide who to block 🚫",
  s1t: "Create your quiz", s1d: "Answer 10 quick questions about yourself that show how well others know you.",
  s2t: "Share with friends", s2d: "Send the link on WhatsApp, Instagram or Snapchat and dare them to prove they're not faking it.",
  s3t: "Find fake friends", s3d: "Check everyone's score — and decide who gets blocked.",
  footer: "Original app — not affiliated with any other quiz site. Only your nickname is stored for 90 days.",
  whatsYour: "what's your", name: "name?", namePh: "name…", nameHint: "Only a nickname — no accounts, no tracking.", cont: "continue", badName: "Please pick a different name.",
  hi: "hi,", howCall: "how should we", callYou: "call you?", pronHint: "Used only for grammar — his / her / their.", he: "He", she: "She", they: "They",
  making: "hiding answers 🤫", err: "Something went wrong. Try again.",
  ready: "Your quiz is ready!", copy: "Copy", copied: "Copied ✓", copyLink: "Copy link", wa: "WhatsApp", more: "More…",
  saveWarn: "⚠️ Save your secret link or screenshot this — it's your only key to see results.", viewBoard: "View scoreboard",
  question: "Question", skip: "Skip question", correct: "Correct!", wrong: "Wrong", back: "Back", answers: "Answers",
  howWell1: "How well do you know", howWell2: "?", playedOne: "friend has played", playedMany: "friends have played", tenQ: "10 questions",
  start: "start quiz", yourName: "your name…", tease: "Score low and you might get blocked 🚫", topFriends: "Top friends", createOwn: "Create your own quiz",
  notFound: "Quiz not found", home: "Home", missingKey: "This link is missing the secret key 🔒",
  scoreboardOf: "'s scoreboard", players: "players", average: "average", toBlock: "to block", noPlayers: "No one has played yet. Share your link!",
  youSaid: "You said", said: "said", block: "BLOCK?",
  "t:Fake friend": "Fake friend", "c:Fake friend": "Who even are you? Blocked.", "t:Sus": "Sus", "c:Sus": "On thin ice…",
  "t:Real one": "Real one", "c:Real one": "You actually pay attention.", "t:Bestie": "Bestie", "c:Bestie": "Certified fam.",
};
const hx: Dict = {
  chooseLang: "Language chuno", close: "Band karo", search: "Language dhoondo", ig: "Instagram", snap: "Snapchat",
  igHint: "Link copy ho gaya — Story ke link sticker me paste karo", linkCopied: "Link copy ho gaya!", shareScore: "Mera score share karo",
  scoreText: "Maine {name} ke quiz me {s}/10 score kiya! Mujhse aage nikal sakte ho?", shareAgain: "Phir se share karo", deleteQuiz: "Quiz delete karo",
  delTitle: "Ye quiz delete karein?", delBody: "Saare players aur scores hamesha ke liye hat jaayenge.", cancel: "Cancel", del: "Delete",
  hide: "Is player ko chhupao", you: "Tum", deleted: "Quiz delete ho gaya", gone: "Ye quiz delete ho gaya ya expire ho chuka hai.", tooMany: "Bahut zyada try — thoda ruko.",
  tagline: "Apne fake friends dhoondo", heroA: "apna quiz banao", heroBlock: "block", heroB: "karo apne fake friends ko",
  create: "quiz banao", myBoard: "Mera scoreboard dekho", howTitle: "kaise khelna hai?", howSub: "Fake friends dhoondo aur decide karo kise block karna hai 🚫",
  s1t: "Apna quiz banao", s1d: "Apne bare me 10 quick sawaalon ke jawab do, jisse pata chale doosre tumhe kitna jaante hain.",
  s2t: "Friends ko bhejo", s2d: "WhatsApp, Instagram ya Snapchat pe link bhejo aur challenge do ki fake nahi hain to saabit karein.",
  s3t: "Fake friends pakdo", s3d: "Sabka score dekho — aur decide karo kise block karna hai.",
  footer: "Original app — kisi aur quiz site se koi connection nahi. Sirf tumhara nickname 90 din ke liye save hota hai.",
  whatsYour: "tumhara", name: "naam?", namePh: "naam…", nameHint: "Sirf nickname — koi account ya tracking nahi.", cont: "aage badho", badName: "Koi aur naam chuno.",
  hi: "hi,", howCall: "hum tumhe kya", callYou: "bulayein?", pronHint: "Sirf grammar ke liye — he / she / they.", he: "Wo (Ladka)", she: "Wo (Ladki)", they: "Wo (They)",
  making: "jawab chhupa rahe hain 🤫", err: "Kuch gadbad ho gayi. Dobara try karo.",
  ready: "Tumhara quiz ready hai!", copy: "Copy", copied: "Copy ho gaya ✓", copyLink: "Link copy karo", wa: "WhatsApp", more: "Aur…",
  saveWarn: "⚠️ Apna secret link save karo ya screenshot le lo — results dekhne ki yahi ek chaabi hai.", viewBoard: "Scoreboard dekho",
  question: "Sawaal", skip: "Sawaal skip karo", correct: "Sahi!", wrong: "Galat", back: "Wapas", answers: "Jawab",
  howWell1: "Tum", howWell2: "ko kitna jaante ho?", playedOne: "friend khel chuka hai", playedMany: "friends khel chuke hain", tenQ: "10 sawaal",
  start: "quiz shuru karo", yourName: "tumhara naam…", tease: "Score kam aaya to block ho sakte ho 🚫", topFriends: "Top friends", createOwn: "Apna quiz banao",
  notFound: "Quiz nahi mila", home: "Home", missingKey: "Is link me secret key nahi hai 🔒",
  scoreboardOf: " ka scoreboard", players: "players", average: "average", toBlock: "block karne", noPlayers: "Abhi tak kisi ne nahi khela. Apna link share karo!",
  youSaid: "Tumne kaha", said: "ne kaha", block: "BLOCK?",
  "t:Fake friend": "Fake friend", "c:Fake friend": "Tum ho kaun? Blocked.", "t:Sus": "Sus", "c:Sus": "Patli barf pe ho…",
  "t:Real one": "Asli dost", "c:Real one": "Tum sach me dhyaan dete ho.", "t:Bestie": "Bestie", "c:Bestie": "Certified fam.",
};
const hi: Dict = {
  chooseLang: "भाषा चुनो", close: "बंद करो", search: "भाषा खोजो", ig: "Instagram", snap: "Snapchat",
  igHint: "लिंक कॉपी हो गया — Story के लिंक स्टिकर में पेस्ट करो", linkCopied: "लिंक कॉपी हो गया!", shareScore: "मेरा स्कोर शेयर करो",
  scoreText: "मैंने {name} के क्विज़ में {s}/10 स्कोर किया! मुझसे आगे निकल सकते हो?", shareAgain: "फिर से शेयर करो", deleteQuiz: "क्विज़ डिलीट करो",
  delTitle: "यह क्विज़ डिलीट करें?", delBody: "सभी खिलाड़ी और स्कोर हमेशा के लिए हट जाएँगे।", cancel: "रद्द करो", del: "डिलीट",
  hide: "इस खिलाड़ी को छुपाओ", you: "तुम", deleted: "क्विज़ डिलीट हो गया", gone: "यह क्विज़ डिलीट हो गया या एक्सपायर हो चुका है।", tooMany: "बहुत ज़्यादा कोशिशें — थोड़ा रुको।",
  tagline: "अपने फेक फ्रेंड्स ढूँढो", heroA: "अपना क्विज़ बनाओ", heroBlock: "ब्लॉक", heroB: "करो अपने फेक फ्रेंड्स को",
  create: "क्विज़ बनाओ", myBoard: "मेरा स्कोरबोर्ड देखो", howTitle: "कैसे खेलें?", howSub: "फेक फ्रेंड्स ढूँढो और तय करो किसे ब्लॉक करना है 🚫",
  s1t: "अपना क्विज़ बनाओ", s1d: "अपने बारे में 10 छोटे सवालों के जवाब दो, जिससे पता चले दूसरे तुम्हें कितना जानते हैं।",
  s2t: "दोस्तों को भेजो", s2d: "WhatsApp, Instagram या Snapchat पर लिंक भेजो और चैलेंज दो कि फेक नहीं हैं तो साबित करें।",
  s3t: "फेक फ्रेंड्स पकड़ो", s3d: "सबका स्कोर देखो — और तय करो किसे ब्लॉक करना है।",
  footer: "ओरिजिनल ऐप — किसी और क्विज़ साइट से कोई संबंध नहीं। सिर्फ़ तुम्हारा निकनेम 90 दिन तक सेव रहता है।",
  whatsYour: "तुम्हारा", name: "नाम?", namePh: "नाम…", nameHint: "सिर्फ़ निकनेम — कोई अकाउंट या ट्रैकिंग नहीं।", cont: "आगे बढ़ो", badName: "कोई और नाम चुनो।",
  hi: "हाय,", howCall: "हम तुम्हें क्या", callYou: "बुलाएँ?", pronHint: "सिर्फ़ व्याकरण के लिए — he / she / they।", he: "वो (लड़का)", she: "वो (लड़की)", they: "वो (They)",
  making: "जवाब छुपा रहे हैं 🤫", err: "कुछ गड़बड़ हो गई। दोबारा कोशिश करो।",
  ready: "तुम्हारा क्विज़ तैयार है!", copy: "कॉपी", copied: "कॉपी हो गया ✓", copyLink: "लिंक कॉपी करो", wa: "WhatsApp", more: "और…",
  saveWarn: "⚠️ अपना सीक्रेट लिंक सेव करो या स्क्रीनशॉट ले लो — नतीजे देखने की यही एक चाबी है।", viewBoard: "स्कोरबोर्ड देखो",
  question: "सवाल", skip: "सवाल स्किप करो", correct: "सही!", wrong: "गलत", back: "वापस", answers: "जवाब",
  howWell1: "तुम", howWell2: "को कितना जानते हो?", playedOne: "दोस्त खेल चुका है", playedMany: "दोस्त खेल चुके हैं", tenQ: "10 सवाल",
  start: "क्विज़ शुरू करो", yourName: "तुम्हारा नाम…", tease: "स्कोर कम आया तो ब्लॉक हो सकते हो 🚫", topFriends: "टॉप फ्रेंड्स", createOwn: "अपना क्विज़ बनाओ",
  notFound: "क्विज़ नहीं मिला", home: "होम", missingKey: "इस लिंक में सीक्रेट की नहीं है 🔒",
  scoreboardOf: " का स्कोरबोर्ड", players: "खिलाड़ी", average: "औसत", toBlock: "ब्लॉक करने", noPlayers: "अभी तक किसी ने नहीं खेला। अपना लिंक शेयर करो!",
  youSaid: "तुमने कहा", said: "ने कहा", block: "ब्लॉक?",
  "t:Fake friend": "फेक फ्रेंड", "c:Fake friend": "तुम हो कौन? ब्लॉक।", "t:Sus": "सस", "c:Sus": "पतली बर्फ़ पर हो…",
  "t:Real one": "असली दोस्त", "c:Real one": "तुम सच में ध्यान देते हो।", "t:Bestie": "बेस्टी", "c:Bestie": "सर्टिफाइड फैम।",
};
const UI: Record<Lang, Dict> = { en, hi, hx };
export const t = (l: Lang, k: string) => UI[l][k] ?? en[k] ?? k;
export const useT = () => { const l = useLang(); return (k: string) => t(l, k); };

// ---- question text (neutral / honorific phrasing, so no pronoun variants needed) ----
const QT: Record<"hi" | "hx", Record<string, string>> = {
  hi: {
    outfit: "{name} का गो-टू आउटफिट क्या है?", weekend: "{name} का परफेक्ट वीकेंड कैसे बीतता है?", snack: "{name} का फेवरेट स्नैक?",
    watch: "{name} सबसे ज़्यादा क्या देखते हैं?", superpower: "{name} कौन-सी सुपरपावर चुनेंगे?", music: "{name} का म्यूज़िक टेस्ट?",
    sleep: "{name} आमतौर पर कितने बजे सोते हैं?", pet: "{name} का ड्रीम पेट?", subject: "स्कूल में {name} का फेवरेट सब्जेक्ट?",
    dessert: "{name} की फेवरेट स्वीट डिश?", ride: "{name} सबसे ज़्यादा किससे सफ़र करते हैं?", sad: "उदास होने पर {name} क्या करते हैं?",
    "text-call": "{name} को क्या ज़्यादा पसंद है?", "sweet-spicy": "{name} क्या खाना ज़्यादा पसंद करते हैं?", season: "{name} का फेवरेट मौसम?",
    sport: "{name} का फेवरेट खेल?", peeve: "किस बात पर {name} को सबसे ज़्यादा चिढ़ होती है?", gift: "{name} के लिए बेस्ट गिफ्ट?",
    money: "{name} सबसे ज़्यादा पैसे किस पर उड़ाते हैं?", cartoon: "{name} का ऑल-टाइम फेवरेट कार्टून?", "street-food": "{name} का फेवरेट स्ट्रीट फूड?",
    app: "सुबह उठते ही {name} सबसे पहले कौन-सा ऐप खोलते हैं?", owl: "{name} ज़्यादा किस टाइप के हैं?", trip: "{name} की ड्रीम ट्रिप कहाँ की है?",
    "never-share": "{name} किसी के साथ क्या कभी शेयर नहीं करते?", drink: "{name} का कम्फर्ट ड्रिंक?", ipl: "{name} कौन-सी IPL टीम को सपोर्ट करते हैं?",
    fear: "{name} का सबसे बड़ा डर?", texts: "{name} टेक्स्ट का रिप्लाई कैसे करते हैं?", festival: "{name} का फेवरेट त्योहार?",
  },
  hx: {
    outfit: "{name} ka go-to outfit kya hai?", weekend: "{name} ka perfect weekend kaise bitta hai?", snack: "{name} ka favourite snack?",
    watch: "{name} sabse zyada kya dekhte hain?", superpower: "{name} kaun si superpower chunenge?", music: "{name} ka music taste?",
    sleep: "{name} aamtaur pe kitne baje sote hain?", pet: "{name} ka dream pet?", subject: "School me {name} ka favourite subject?",
    dessert: "{name} ki favourite sweet dish?", ride: "{name} sabse zyada kisse safar karte hain?", sad: "Udaas hone par {name} kya karte hain?",
    "text-call": "{name} ko kya zyada pasand hai?", "sweet-spicy": "{name} kya khana zyada pasand karte hain?", season: "{name} ka favourite mausam?",
    sport: "{name} ka favourite khel?", peeve: "Kis baat pe {name} ko sabse zyada chidh hoti hai?", gift: "{name} ke liye best gift?",
    money: "{name} sabse zyada paise kis pe udate hain?", cartoon: "{name} ka all-time favourite cartoon?", "street-food": "{name} ka favourite street food?",
    app: "Subah uthte hi {name} sabse pehle kaun sa app kholte hain?", owl: "{name} zyada kis type ke hain?", trip: "{name} ki dream trip kahan ki hai?",
    "never-share": "{name} kisi ke saath kya kabhi share nahi karte?", drink: "{name} ka comfort drink?", ipl: "{name} kaun si IPL team ko support karte hain?",
    fear: "{name} ka sabse bada darr?", texts: "{name} text ka reply kaise karte hain?", festival: "{name} ka favourite festival?",
  },
};
// ---- option labels, keyed by the English label ----
const OL: Record<"hi" | "hx", Record<string, string>> = {
  hi: {
    "Hoodie": "हुडी", "Jeans & tee": "जीन्स & टी-शर्ट", "Kurta": "कुर्ता", "Tracksuit": "ट्रैकसूट", "Formal shirt": "फॉर्मल शर्ट", "Pyjamas": "पजामा",
    "Sleeping": "सोना", "Binge-watching": "बिंज-वॉचिंग", "Gaming": "गेमिंग", "Hanging out": "दोस्तों के साथ घूमना", "Playing sports": "खेलना", "Family time": "फैमिली टाइम",
    "Chips": "चिप्स", "Samosa": "समोसा", "Biscuits": "बिस्किट", "Popcorn": "पॉपकॉर्न", "Chocolates": "चॉकलेट", "Fruits": "फल",
    "Anime": "एनिमे", "Web series": "वेब सीरीज़", "Movies": "फ़िल्में", "Cricket": "क्रिकेट", "YouTube vlogs": "यूट्यूब व्लॉग्स", "Reels": "रील्स",
    "Invisibility": "अदृश्य होना", "Flying": "उड़ना", "Time travel": "टाइम ट्रैवल", "Mind reading": "दिमाग़ पढ़ना", "Teleport": "टेलीपोर्ट", "Super speed": "सुपर स्पीड",
    "Bollywood": "बॉलीवुड", "Punjabi": "पंजाबी", "Hip-hop": "हिप-हॉप", "Lo-fi": "लो-फाई", "Rock": "रॉक", "K-pop": "के-पॉप",
    "Before 10 pm": "रात 10 से पहले", "Around midnight": "आधी रात के आसपास", "1–2 am": "रात 1–2 बजे", "After 3 am": "सुबह 3 के बाद", "Whenever": "जब नींद आए",
    "Dog": "कुत्ता", "Cat": "बिल्ली", "Parrot": "तोता", "Rabbit": "खरगोश", "Fish": "मछली", "No pets": "कोई पेट नहीं",
    "Maths": "गणित", "Science": "विज्ञान", "English": "अंग्रेज़ी", "History": "इतिहास", "PT / Games": "पीटी / गेम्स", "Computers": "कंप्यूटर",
    "Gulab jamun": "गुलाब जामुन", "Ice cream": "आइसक्रीम", "Jalebi": "जलेबी", "Cake": "केक", "Kulfi": "कुल्फी", "Rasmalai": "रसमलाई",
    "Bike": "बाइक", "Auto": "ऑटो", "Metro": "मेट्रो", "Bus": "बस", "Car": "कार", "Walks": "पैदल",
    "Eats food": "खाना खाते हैं", "Sleeps": "सो जाते हैं", "Plays songs": "गाने सुनते हैं", "Calls a friend": "दोस्त को कॉल करते हैं", "Cries": "रो लेते हैं", "Acts fine": "ठीक होने का नाटक",
    "Text": "टेक्स्ट", "Call": "कॉल", "Sweet": "मीठा", "Spicy": "तीखा",
    "Summer": "गर्मी", "Monsoon": "बारिश", "Winter": "सर्दी", "Spring": "बसंत",
    "Football": "फुटबॉल", "Badminton": "बैडमिंटन", "Kabaddi": "कबड्डी", "Basketball": "बास्केटबॉल", "Chess": "शतरंज",
    "Loud chewing": "ज़ोर से चबाना", "Slow walkers": "धीरे चलने वाले", "Spoilers": "स्पॉइलर्स", "Late friends": "देर से आने वाले दोस्त", "Bad WiFi": "खराब वाईफाई", "Group-chat spam": "ग्रुप-चैट स्पैम",
    "Books": "किताबें", "Cash": "कैश", "Plants": "पौधे", "Surprise party": "सरप्राइज़ पार्टी", "Perfume": "परफ़्यूम",
    "Food": "खाना", "Clothes": "कपड़े", "Games": "गेम्स", "Gadgets": "गैजेट्स", "Going out": "घूमना-फिरना", "Saves it": "बचाते हैं",
    "Shinchan": "शिनचैन", "Doraemon": "डोरेमॉन", "Chhota Bheem": "छोटा भीम", "Motu Patlu": "मोटू पतलू", "Oggy": "ओगी", "Tom & Jerry": "टॉम & जेरी", "Pokémon": "पोकेमॉन", "Ben 10": "बेन 10",
    "Pani puri": "पानी पूरी", "Momos": "मोमोज़", "Vada pav": "वड़ा पाव", "Chole bhature": "छोले भटूरे", "Pav bhaji": "पाव भाजी", "Maggi": "मैगी",
    "Instagram": "इंस्टाग्राम", "WhatsApp": "व्हाट्सऐप", "YouTube": "यूट्यूब", "Snapchat": "स्नैपचैट", "Spotify": "स्पॉटिफ़ाई", "None — sleeps in": "कोई नहीं — सोते रहते हैं",
    "Night owl": "रात का उल्लू", "Early bird": "सुबह की चिड़िया",
    "Goa": "गोवा", "Manali": "मनाली", "Dubai": "दुबई", "Paris": "पेरिस", "Japan": "जापान", "Maldives": "मालदीव",
    "Phone": "फ़ोन", "Earphones": "ईयरफ़ोन", "Charger": "चार्जर", "Bed": "बिस्तर", "Secrets": "राज़",
    "Chai": "चाय", "Coffee": "कॉफ़ी", "Cold drink": "कोल्ड ड्रिंक", "Lassi": "लस्सी", "Juice": "जूस", "Water only": "सिर्फ़ पानी",
    "CSK": "CSK", "MI": "MI", "RCB": "RCB", "KKR": "KKR", "SRH": "SRH", "Doesn't watch": "देखते ही नहीं",
    "Exams": "एग्ज़ाम", "Cockroaches": "कॉकरोच", "Heights": "ऊँचाई", "Dark": "अँधेरा", "Being ignored": "इग्नोर होना", "Dogs": "कुत्ते",
    "Instantly": "तुरंत", "After hours": "घंटों बाद", "Seen-zone": "सीन-ज़ोन", "Voice notes": "वॉइस नोट्स",
    "Diwali": "दिवाली", "Holi": "होली", "Eid": "ईद", "Christmas": "क्रिसमस", "Navratri": "नवरात्रि", "Raksha Bandhan": "रक्षा बंधन",
  },
  hx: {
    "Hoodie": "Hoodie", "Jeans & tee": "Jeans & tee", "Kurta": "Kurta", "Tracksuit": "Tracksuit", "Formal shirt": "Formal shirt", "Pyjamas": "Pajama",
    "Sleeping": "Sona", "Binge-watching": "Binge-watching", "Gaming": "Gaming", "Hanging out": "Dosto ke saath ghumna", "Playing sports": "Khelna", "Family time": "Family time",
    "Biscuits": "Biscuit", "Chocolates": "Chocolate", "Fruits": "Fal",
    "Movies": "Filmein", "Anime": "Anime", "Web series": "Web series", "YouTube vlogs": "YouTube vlogs",
    "Invisibility": "Gayab hona", "Flying": "Udna", "Mind reading": "Dimaag padhna",
    "Before 10 pm": "Raat 10 se pehle", "Around midnight": "Aadhi raat ke aaspaas", "1–2 am": "Raat 1–2 baje", "After 3 am": "Subah 3 ke baad", "Whenever": "Jab neend aaye",
    "Dog": "Kutta", "Cat": "Billi", "Parrot": "Tota", "Rabbit": "Khargosh", "Fish": "Machhli", "No pets": "Koi pet nahi",
    "Maths": "Maths", "Science": "Science", "History": "History", "PT / Games": "PT / Games", "Computers": "Computer",
    "Gulab jamun": "Gulab jamun", "Ice cream": "Ice cream", "Jalebi": "Jalebi", "Rasmalai": "Rasmalai",
    "Walks": "Paidal", "Eats food": "Khana khate hain", "Sleeps": "So jaate hain", "Plays songs": "Gaane sunte hain", "Calls a friend": "Dost ko call karte hain", "Cries": "Ro lete hain", "Acts fine": "Theek hone ka natak",
    "Sweet": "Meetha", "Spicy": "Teekha", "Summer": "Garmi", "Monsoon": "Baarish", "Winter": "Sardi", "Spring": "Basant",
    "Chess": "Chess", "Loud chewing": "Zor se chabana", "Slow walkers": "Dheere chalne wale", "Late friends": "Late aane wale dost", "Bad WiFi": "Kharab WiFi",
    "Books": "Kitaabein", "Plants": "Paudhe", "Surprise party": "Surprise party",
    "Food": "Khana", "Clothes": "Kapde", "Games": "Games", "Gadgets": "Gadgets", "Going out": "Ghumna-firna", "Saves it": "Bachate hain",
    "Pani puri": "Pani puri", "Momos": "Momos", "Vada pav": "Vada pav", "Chole bhature": "Chole bhature", "Pav bhaji": "Pav bhaji", "Maggi": "Maggi",
    "None — sleeps in": "Koi nahi — sote rehte hain", "Night owl": "Raat ka ullu", "Early bird": "Subah ki chidiya",
    "Phone": "Phone", "Earphones": "Earphones", "Charger": "Charger", "Bed": "Bistar", "Secrets": "Raaz",
    "Chai": "Chai", "Cold drink": "Cold drink", "Water only": "Sirf paani", "Doesn't watch": "Dekhte hi nahi",
    "Exams": "Exams", "Cockroaches": "Cockroach", "Heights": "Oonchai", "Dark": "Andhera", "Being ignored": "Ignore hona", "Dogs": "Kutte",
    "Instantly": "Turant", "After hours": "Ghanton baad", "Seen-zone": "Seen-zone", "Voice notes": "Voice notes",
    "Raksha Bandhan": "Raksha Bandhan",
  },
};
export const tl = (label: string, l: Lang) => (l === "en" ? label : OL[l][label] ?? label);
export const locQ = (q: Question, l: Lang): Question =>
  l === "en" ? q : { ...q, text: QT[l][q.id] ?? q.text, options: q.options.map((o) => ({ ...o, label: tl(o.label, l) })) };
