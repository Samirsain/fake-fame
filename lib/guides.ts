// Original articles for /guides. Each section is an optional heading, paragraphs and an optional list.
export type Section = { h?: string; p?: string[]; ul?: string[]; ol?: string[] };
export type Guide = { slug: string; title: string; description: string; date: string; read: string; body: Section[] };

export const GUIDES: Guide[] = [
  {
    slug: "how-to-make-a-friendship-quiz",
    title: "How to make a friendship quiz your friends will actually finish",
    description: "A step-by-step guide to making a fun 10-question friendship quiz, sharing it on WhatsApp, Instagram and Snapchat, and reading the results without starting a fight.",
    date: "2026-10-19",
    read: "5 min read",
    body: [
      { p: [
        "A friendship quiz is a tiny game with a big question behind it: how well do the people around you really know you? You answer ten questions about yourself, send the link to your friends, and they try to guess your answers. Everyone gets a score, and you get a leaderboard of who pays attention.",
        "It sounds simple, and it is. But a few small choices decide whether your friends play it to the end and laugh about it in the group chat, or close it after the second question. Here is how to make one that works.",
      ] },
      { h: "1. Answer like yourself, not like your bio", p: [
        "The quiz is about the real you. If your honest comfort drink is a cold drink at midnight, don't pick green tea because it sounds better. Your friends will guess based on what they have seen you do, so the most fun quizzes are the most honest ones.",
        "Go with your first instinct. Overthinking turns a two-minute quiz into a ten-minute one, and you will start second-guessing answers you were sure about.",
      ] },
      { h: "2. Keep it guessable", p: [
        "A good question is one that a close friend could get right and a random follower probably would not. \"Which app do you open first in the morning?\" works. \"What did I eat on 4 March?\" does not.",
        "On Fake or Fam the ten questions come from a pool of thirty everyday topics: food, habits, cricket, cartoons, travel, music and more. If a question feels too random or too personal, skip it. You can skip up to ten questions and a new one takes its place.",
      ] },
      { h: "3. Pick the right name", p: [
        "Use the name your friends actually call you. A nickname is perfect. There is no need to add your surname, phone number or anything else that identifies you outside your circle. The name is all the quiz shows.",
      ] },
      { h: "4. Share it where your friends already are", ul: [
        "WhatsApp: drop the link in your group with a small dare, like \"anyone below 5 is getting blocked\". Group chats create friendly competition fast.",
        "Instagram: copy the link and add it to a Story with the link sticker. Close Friends stories keep it to people who actually know you.",
        "Snapchat: share the link straight from the share screen. Streak friends tend to play first.",
        "Direct messages: send it one-to-one to the people whose score you are most curious about.",
      ] },
      { h: "5. Keep your secret scoreboard link safe", p: [
        "When your quiz is ready you get two links. The normal quiz link is for sharing. The scoreboard link carries a secret key and is the only way to see everyone's answers. Save it, bookmark it or take a screenshot, and don't post it publicly.",
        "From the scoreboard you can see each friend's score, open their answers one by one, hide a player, or delete the whole quiz.",
      ] },
      { h: "6. Read the results with a sense of humour", p: [
        "Someone who has known you for ten years may still score a 5, and a new friend may surprise you with a 9. Scores depend on luck, on which questions came up, and on how well your answers match the version of you that they see. Treat the result as a conversation starter, not a verdict.",
        "The best part of a friendship quiz is usually what happens afterwards: \"wait, since when do you like coffee?\" That is how you learn things about each other.",
      ] },
      { h: "Quick checklist before you share", ol: [
        "All ten answers are honest.",
        "Nothing in your name or answers is private information.",
        "You saved the scoreboard link.",
        "You picked one group or story to share it in first.",
      ] },
    ],
  },
  {
    slug: "friendship-quiz-questions",
    title: "50 friendship quiz questions to test your best friend",
    description: "Fifty fun, kind and India-friendly friendship quiz questions about food, daily habits, movies, school memories and dreams, plus tips on picking good ones.",
    date: "2026-10-19",
    read: "6 min read",
    body: [
      { p: [
        "Whether you are making an online quiz, killing time on a long train ride or running a game at a birthday party, good questions make or break a friendship quiz. The best ones are specific enough to be interesting and familiar enough that a real friend has a fair chance.",
        "Here are fifty of our favourites, grouped by theme. Many of them work as multiple choice (give four or five options) and all of them work as open questions when you are playing face to face.",
      ] },
      { h: "Food and chai", ol: [
        "What is their chai order: kadak, adrak, elaichi, or no chai at all?",
        "Which street food would they pick on a rainy evening?",
        "Maggi: plain, masala, or loaded with veggies and cheese?",
        "What do they order at their favourite restaurant without looking at the menu?",
        "Which sweet can they never say no to?",
        "Which pizza topping would they fight for?",
        "Which home-cooked dish do they miss most when they are away?",
        "Biryani or pulao, and which one starts an argument?",
        "Late-night craving: chips, chocolate, instant noodles or leftovers?",
        "Which food do they quietly dislike but eat to be polite?",
      ] },
      { h: "Daily habits", ol: [
        "What is the first app they open in the morning?",
        "How many times do they snooze the alarm?",
        "Do they reply instantly, after hours, or leave you on seen?",
        "Night owl or early bird?",
        "Where are they most likely to be on a Sunday afternoon?",
        "What do they always forget: charger, wallet, keys or earphones?",
        "How do they react when the WiFi stops working?",
        "What do they wear when nobody is watching?",
        "What do they do first when they are having a bad day?",
        "How long does their \"ready in five minutes\" really take?",
      ] },
      { h: "Movies, music and cricket", ol: [
        "Which cartoon did they never miss as a kid?",
        "Which IPL team do they support, and how loudly?",
        "Which movie can they rewatch any number of times?",
        "How would you describe their music taste in one word?",
        "Which web series did they finish in a single weekend?",
        "Which song is on their repeat right now?",
        "Reels, YouTube videos or full-length movies?",
        "Whose dialogues do they quote the most?",
        "Mobile games, console, PC, or not a gamer at all?",
        "Which fictional character are they most like?",
      ] },
      { h: "School, college and memories", ol: [
        "What was their favourite subject in school?",
        "Which teacher do they still talk about?",
        "Which trip together do they remember the most?",
        "What is the funniest thing that happened to them in class?",
        "Front bench, middle row or last bench?",
        "What did they want to become when they were little?",
        "What was their best excuse for unfinished homework?",
        "What was the first thing they did after the last exam?",
        "Which festival gets them most excited?",
        "Where did the two of you first meet?",
      ] },
      { h: "Dreams and \"what would you do\"", ol: [
        "Dream trip: Goa, Manali, Dubai or Japan?",
        "Which superpower would they choose?",
        "What would they do first with a sudden ₹1 crore?",
        "What is their dream pet?",
        "Which job would they drop everything for?",
        "If they could live in any city, which would it be?",
        "What is their biggest fear?",
        "What would they never lend, not even to you?",
        "What would they save first in a flood: phone, photos, or snacks?",
        "Where do they see themselves in ten years?",
      ] },
      { h: "How to pick good questions", ul: [
        "Ask about habits and tastes, not secrets. \"What do they do when they're sad?\" is sweet; \"Who did they last cry about?\" is not.",
        "Avoid topics that can hurt: money problems, health, religion, family issues, or anyone's looks.",
        "Mix easy and hard. Two or three easy questions keep everyone playing; one or two tricky ones separate the besties from the rest.",
        "Make the options believable. If one option is obviously right, the question is free points.",
        "Keep it short. Ten questions take about a minute, which is the sweet spot for a link shared in a group chat.",
      ] },
      { p: [
        "Want to skip the setup? Fake or Fam already has thirty of these topics ready, with pictures, in English, Hindi and Hinglish. You answer, it hides your answers, and you share one link.",
      ] },
    ],
  },
  {
    slug: "what-your-quiz-score-means",
    title: "What your friendship quiz score really means",
    description: "How friendship quiz scores work, what Fake friend, Sus, Real one and Bestie mean, and why a low score does not make someone a bad friend.",
    date: "2026-10-19",
    read: "4 min read",
    body: [
      { p: [
        "You played your friend's quiz, the ring filled up, and a badge popped out: Bestie, Real one, Sus, or the dreaded Fake friend. Here is what that number actually measures, and what it does not.",
      ] },
      { h: "How the score is counted", p: [
        "Every quiz has ten questions and every correct guess is worth one point, so scores run from 0 to 10. Your answers are checked on the server one question at a time, and the first option you pick is the one that counts. That keeps the game fair: nobody can peek at the right answers or retry a question until they get it.",
        "Each device can play a quiz once. The creator sees every player's score and answers on their private scoreboard, and the top five appear on the leaderboard you see after playing.",
      ] },
      { h: "The four tiers", ul: [
        "0 to 3, Fake friend: you guessed less than a third. The \"blocked\" joke is just that, a joke. It usually means you have not spent much time together lately, or the questions landed on topics you never talk about.",
        "4 to 6, Sus: you know the basics but missed the details. This is the most common range for friends from one part of someone's life, like college friends who have never seen them at home.",
        "7 to 8, Real one: you pay attention. You know their habits, their food and their favourite things.",
        "9 to 10, Bestie: you know them about as well as they know themselves. Screenshot it.",
      ] },
      { h: "Why a low score is not the end of a friendship", p: [
        "A ten-question quiz is a small, random sample of a whole person. A few things push scores down that have nothing to do with how good a friend you are:",
      ], ul: [
        "Different contexts. A school friend knows the old you; an office friend knows your lunch order. Neither sees everything.",
        "Changing tastes. People's favourite songs, foods and apps change. If you guessed what they liked two years ago, you are not wrong about them, just out of date.",
        "Honest answers that surprise. Sometimes the creator picks an answer that even they would not have guessed a year ago.",
        "Plain luck. With two to eight options per question, one or two unlucky guesses swing the badge.",
      ] },
      { h: "What to do with your result", p: [
        "If you scored high, enjoy it, and maybe make your own quiz to see if they know you just as well. If you scored low, the best move is curiosity: ask them about the answers you missed. \"Since when are you a night owl?\" is a better conversation than any badge.",
        "And if you are the creator: please don't actually block anyone over a quiz. Use the scores to start conversations, tease each other a little, and find out what your friends have been noticing about you.",
      ] },
    ],
  },
  {
    slug: "real-friend-vs-fake-friend",
    title: "Real friend vs fake friend: 10 everyday signs",
    description: "Ten everyday signs of a real friend, the red flags that mean a friendship needs an honest talk, and how to be a better friend yourself.",
    date: "2026-10-19",
    read: "6 min read",
    body: [
      { p: [
        "\"Fake friend\" is a fun badge in a quiz, but in real life friendships are rarely that black and white. Most people are not fake; some are just busy, some are going through something, and some friendships simply belong to one chapter of life. Still, there are patterns worth noticing. Here are ten everyday signs that someone is a real friend.",
      ] },
      { h: "Signs of a real friend", ol: [
        "They show up when it is inconvenient. Anyone can join a party. A real friend comes to the hospital, helps you move, or calls the night before your exam.",
        "They are genuinely happy for your wins. Your good news does not turn into a competition or a change of subject.",
        "They tell you the truth, kindly. They will say the haircut was a mistake, and they will say it gently and in private.",
        "They remember small things: your chai order, the name of your pet, the interview you were nervous about.",
        "Your secrets stay secrets. What you tell them does not come back to you through someone else.",
        "They respect your \"no\". They don't sulk or guilt-trip you when you can't come, can't lend, or don't want to.",
        "They reach out when they don't need anything. Not every message is a favour.",
        "You feel lighter after meeting them, not drained or judged.",
        "They make room for your other people: your family, your partner, your new friends.",
        "You can fight and repair. Real friends argue sometimes, and both of you can say sorry.",
      ] },
      { h: "Signs a friendship needs an honest talk", p: [
        "None of these automatically makes someone a \"fake\" friend, but if they keep happening, it is worth paying attention:",
      ], ul: [
        "They only get in touch when they need notes, money, a ride or a favour.",
        "Their \"jokes\" about you keep landing as put-downs, especially in front of others.",
        "Things you told them in confidence keep getting around.",
        "Every conversation is about them; they rarely ask how you are.",
        "They seem annoyed when good things happen to you.",
      ] },
      { h: "What you can do", p: [
        "Start with a direct, calm conversation. Many problems in friendships are misunderstandings that nobody said out loud. Say what you noticed and how it made you feel, and then listen.",
        "If things don't change, it is fine to step back. Spending less time with someone is not cruelty; it is choosing where your energy goes. Put more of it into the people who put it back.",
        "If a friendship ever involves threats, bullying or pressure to do something unsafe, that is not a friendship problem to solve alone. Talk to someone you trust: a family member, a teacher, a counsellor or another friend.",
      ] },
      { h: "Be the friend you want to have", p: [
        "Every sign above works in both directions. Remember the small things, show up when it is hard, keep secrets, and celebrate other people's wins. And if you want a light-hearted way to see how well your friends know you, or how well you know them, a quick quiz is a fun place to start.",
      ] },
    ],
  },
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
