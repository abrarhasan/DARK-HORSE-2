module.exports = {
	config: {
		name: "goiadmin",
		author: "cliff",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "Admin",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100065524890378") {
		var aid = ["100065524890378"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = [ "Tag Admin again, I'll punch you", "Don't tag admin, he's busy 😗", "Admin is currently unavailable 🤧", "Sorry, admin is offline 😪","You are tagging him as if he escaped with your partner😏", "I said stop disturbing him😾", "he is sleeping now 🤭", "What do you wanna know?🤨", "you can ask me instead, Im his personal assistant 🙃", "What?🤨", "Wait lemme call him😘"];
      api.setMessageReaction("😍", event.messageID, (err) => {}, true);
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
