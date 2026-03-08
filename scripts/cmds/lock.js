const lockedThreads = {};
const pageID = ""; // তোমার পেজ আইডি

module.exports = {
  config: {
    name: "lock",
    version: "3.0",
    author: "abrar",
    countDown: 5,
    role: 1,
    description: "Lock/unlock group to prevent members from sending messages",
    category: "box chat"
  },

  // কমান্ড হ্যান্ডলার
  onStart: async function({ api, event, args }) {
    const threadID = event.threadID;
    const senderID = event.senderID;

    // থ্রেড ইনফো
    const info = await api.getThreadInfo(threadID);
    const adminIDs = info.adminIDs.map(i => i.id);

    // শুধুমাত্র এডমিন
    if (!adminIDs.includes(senderID)) {
      return api.sendMessage("❌ Only groupadmin can use this command!", threadID);
    }

    const action = args[0]?.toLowerCase();

    // 🔒 LOCK
    if (action === "on" || action === "lock") {
      if (lockedThreads[threadID]) 
        return api.sendMessage("✅ The group has already been locked!", threadID);

      try {
        await api.addUserToGroup(pageID, threadID);
      } catch (e) {}

      lockedThreads[threadID] = true;
      return api.sendMessage("🔒The group has been locked! If any member sends text will be removed hehe", threadID);
    }

    // 🔓 UNLOCK
    if (action === "off" || action === "unlock") {
      if (!lockedThreads[threadID])
        return api.sendMessage("✅ The group has already been unlocked!", threadID);

      delete lockedThreads[threadID];

      // পেজ কিক করা
      try {
        await api.removeUserFromGroup(pageID, threadID);
      } catch (e) {
        console.error("❌ Error to kick the member:", e.message);
      }

      return api.sendMessage("🔓The group has been unlocked! Everyone can text now", threadID);
    }

    // ভুল ইনপুট
    return api.sendMessage("❌Usage: +lock on or +lock off", threadID);
  },

  // 🔇 কেউ মেসেজ দিলে (যদি লক থাকে)
  onEvent: async function({ api, event }) {
    const threadID = event.threadID;
    const senderID = event.senderID;

    if (!lockedThreads[threadID]) return;

    const info = await api.getThreadInfo(threadID);
    const adminIDs = info.adminIDs.map(i => i.id);

    // এডমিন মেসেজ দিতে পারবে
    if (adminIDs.includes(senderID)) return;

    // অন্য কেউ মেসেজ দিলে ডিলিট করে দেবে
    try {
      await api.unsendMessage(event.messageID);
    } catch (e) {
      console.error(e);
    }
  }
};
