module.exports = {
  config: {
    name: "emoji",
    version: "1.1.0",
    author: "abrar",
    countDown: 0,
    role: 0,
    shortDescription: "Change group emoji 😘",
    longDescription: "Messenger গ্রুপের ইমোজি (Quick Reaction) পরিবর্তন করো মাত্র এক কমান্ডে!",
    category: "box chat",
    guide: "{pn} 😘"
  },

  onStart: async function ({ api, event, args }) {
    const emoji = args.join(" ");

    // ⚠️ যদি কোনো ইমোজি না দেয়
    if (!emoji) {
      return api.sendMessage("❌ | Please, give an emoji! Example: +emoji 😘", event.threadID, event.messageID);
    }

    try {
      // ✅ গ্রুপ ইমোজি পরিবর্তন
      await api.changeThreadEmoji(emoji, event.threadID);
      return api.sendMessage(`✅ |ে Group emoji has been changed to ${emoji} এ!`, event.threadID, event.messageID);
    } catch (err) {
      console.error(err);
      return api.sendMessage("⚠️ | ে Something went wrong, Try again later!", event.threadID, event.messageID);
    }
  }
};

