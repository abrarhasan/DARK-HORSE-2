global.botData = {};

module.exports = {
		config: {
				name: "chat",
				version: "1.2",
				description: "Command to turn on/off chat",
				guide: {
						vi: "Dùng để bật/tắt chức năng chat",
						en: "Used to turn on/off chat functionality"
				},
				category: "BOX CHAT",
				countDown: 15,
				role: 2,
				author: "Cliff"
		},

		onStart: async function ({ message, args, role, getLang }) {
				if (args[0] === "on") {
						if (role < 1) {
								return message.reply(getLang("onlyAdmin"));
            }
						global.botData.chatEnabled = true;
						message.reply("Chat is now enabled. Members can chat freely.");
				} else if (args[0] === "off") {
						if (role < 1) {
								return message.reply(getLang("onlyAdmin"));
						}
						global.botData.chatEnabled = false;
						message.reply("Chat is now disabled. Members will be kicked when chatting.");
				}
		},

		onChat: async function ({ message, event, api, getLang }) {
				const chatEnabled = global.botData.chatEnabled === undefined ? true : global.botData.chatEnabled;

				if (!chatEnabled) {
						
						api.removeUserFromGroup(event.senderID, event.threadID, (err) => {
								if (err) {
										console.error(err);
								}
						});
						message.reply("Chat off detected. You have been kicked from the group.");
				}
		}
};
