module.exports = {
  config: {
    name: "adminmention",
    version: "1.3.2",
    author: "abrar",
    countDown: 0,
    role: 0,
    shortDescription: "Replies angrily when someone tags admins",
    longDescription: "If anyone mentions an admin, bot will angrily reply with random messages.",
    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const adminIDs = ["100065524890378"].map(String);

    // Skip if sender is admin
    if (adminIDs.includes(String(event.senderID))) return;

    // যদি কেউ মেনশন দেয়
    const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
    const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

    if (!isMentioningAdmin) return;

    // র‍্যান্ডম রাগী রিপ্লাই
    const REPLIES = [
      " Dont mention him 😩🐸",
      "Boss, a pagal is mentioning uh 😂😏",
      "ে Please dont mention my boss🥹",
     " ি I saod, dont mention him😠",
      "Bossে is busy😌🥱"
    ];

    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return message.reply(randomReply);
  }
};

