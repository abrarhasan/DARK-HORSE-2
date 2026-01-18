module.exports = {
config: {
name: "autorespondv3",
version: "2.0.0",
author: "Haru",
cooldown: 5,
role: 0,
shortDescription: "Autoresponds with reactions and replies",
longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
category: "fun",
guide: "?autorespondv3",
},
onStart: async ({ api, event }) => {
// Blank onStart function as per the request
},
onChat: async ({ api, event }) => {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
"💜": ["how are you?", "allah", "god", "purple", "ameen", "good", "fine", "say", "morning", "night", "evening", "afternoon", "noon", "assalamu", "salam", "best", "luck", "care", "blessed", "forgive", "💜", "yes",  "help", "quiz", "yeah" ],
"💚": ["💚", "people", "human", "gaganunin", "pfft", "xyrene", "gumanun"],
"😾": ["uffs", "offs", "uff", ],
"🤬": ["wtf", "fuck", "what the fuck", "hell", "shut up", "lol", "luh", "😡", "🤬", "😠"],
"😸": ["pill", "laugh", "lt ", "gagi", "huy", "hoy"],
"🌀": ["prodia", "sdxl", "bardv3", "tanongv2", "+imagine", "genimg", "Tanongv4", "kamla", "-shortcut"],
"👋": ["hi", "hello", "salute", "hey", "bye", "hola", "👋","Bot","ai", "bard", "oi"],
"🔥": ["🔥", ".jpg", "fire", "chubby ", "damn", "wow", "beautiful", "handsome", "crush", "bangladesh", "super" ],
  "💩":["awak","cheh","caca","Caca","shit"],"🤢":["beurk",
			"degueulasse",
			"horrible"
		],"🥵": [
			"fuck",
			"fucking",
			"hot",
			"pussy",
			"nake",
			"kda",
			"sex",
			"sunny",
			"boobs",
			"boobies",
  "boop", "🥵", "sexy", "hentai", "hvd","fingering", "fuck", "hotness", "horny", "sperm", "wet" 
		],
		"😂": [
			"ridicule",
			"clownesque",
			"farce",
			"pitrerie",
			"comique",
			"funny",
			"😂",
			"hilarant",
			"loufoque",
			"bouffonnerie",
			"cocasse",
			"burlesque",
			"rigolo",
			"absurde",
			"irrévérencieux",
			"ironique",
			"ironie",
			"parodie",
			"esprit",
			"facétieux", "🤣", "kiss"
		],
		"😆": [
			"ouch","😆","hhh", "haha", "kill you", "bad", "hehe", "talking about", "only", "joke", "meme", "hilarious", "jan", "janu", "chi","no", "hmm", "aha", "ummm", "oh", "dont leave me", "yasso"
		],
		"🩷": [
			"amabel"
		],
		"🤖": [
			"prefix", "robot"
		],
		"🔰": [
			"nathan","barro"
		],
		"✔️": [
			"okay",
			"ok","okie"
		],
		"🎉": [
			"congrats",
			"félicitation",
			"goddess-Anaïs"
		],
		"😆": [
			"😆", "😁", "yasser", "hehe"
		],
		"♻️": [
			"restart"
		],
		"🖕": [
			"fuck","enculer","fdp","🖕"
		],
		"🌀": [
			"imagine","prodia","textpro","photofy"
		],
		"🌼": [
			"goddess-Anaïs"
		],
		"😑": [
			"mmmh",
			"kii"
		],
		"🐔": [
			"urooj", "chicken"
		],
		"🤭": [
			"aham","🤭"
		],
		"😝": [
			"😝", "bla"
		],
		"✨": [
			"oui","super"
		],
		"✖️": [
			"wrong",
			"faux"
		],
		"😘": [
			"love", "baby", ,"babu", "sweetie", "sweetheart", "stay", "bot", "cutie", "mawa", "babe", "mahal", "mine", "yours", "Sophia","girlfriend", "boyfriend", "husband", "wife", "gf", "bf", "boss", "abrar", "😘", "😻", "🙈"
		],
		"🤡": [
			"kindly provide the question","joke","won't","huhu"
		],
		"😕": [
			"bruh", "bro", "bhai", "brother"
		],
		"👎": [
			"Kindly provide"
		],
		"🌩️": [
			"*thea",
			"Tatakae",
			"damare"
		],
	"😎": [
			"😎", "smart", "excellent", "lovely", "gorgeous", "amazing", "wonderful", "spectacular", "cool", "chill", "nice", "great"
		],
	"🔪": [
			"kill", "knife", "murder", "stab", "stabbed", "stabbing"
		], "🙈": ["chay", "choy", "heart", "🙈", "😘", "Jammy", "jam"], "🧟‍♂️": ["🧟‍♂️", "zamie", "zombie"], "🦂": ["scorpion", "🦂", "irhaa", "uswa"]
};

// Replies to specific words
const replies = {"loft":"~~𝙾𝚞𝚒 ?? 🙃🌷"
};

// React based on words
for (const [emoji, words] of Object.entries(emojis)) {
for (const word of words) {
if (body.toLowerCase().includes(word)) {
api.setMessageReaction(emoji, messageID, () => {}, true);
}
}
}

// Reply based on triggers
for (const [trigger, reply] of Object.entries(replies)) {
if (body.toLowerCase().includes(trigger)) {
api.sendMessage(reply, threadID, messageID);
}
}
},
};
