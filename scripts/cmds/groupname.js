module.exports = {
  config: {
    name: "groupname",
    version: "1.1.0",
    author: "abrar",
    countDown: 0,
    role: 1, // শুধু গ্রুপ অ্যাডমিন বা বট অ্যাডমিন (চাওলে 0 করো)
    shortDescription: "Change group name",
    longDescription: "তুমি যেই নাম দেবে সেটাই গ্রুপের নতুন নাম হবে।",
    category: "box",
    guide: "{pn} [new name]"
  },

  onStart: async function ({ api, event, args }) {
    const name = args.join(" ");

    if (!name) {
      return api.sendMessage(
        "❌ | Write the new group name!\n\n📝 Example: +groupname ABRAR-BOT💀 GROUP",
        event.threadID,
        event.messageID
      );
    }

    try {
      await api.setTitle(name, event.threadID);
      api.sendMessage(`✅ |Groupname has been changed successfully:\n➡️ ${name}`, event.threadID, event.messageID);
    } catch (err) {
      console.error(err);
      api.sendMessage("⚠️ | Something went wrong, makesure that uh have permission to use this command.", event.threadID, event.messageID);
    }
  }
};

