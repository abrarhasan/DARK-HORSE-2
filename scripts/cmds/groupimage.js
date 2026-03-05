const fs = require("fs");
const axios = require("axios");

module.exports = {
  config: {
    name: "groupimage",
    version: "1.1.0",
    author: "abrar",
    countDown: 0,
    role: 1, // অ্যাডমিন বা মডারেটরদের জন্য (চাওলে 0 করো)
    shortDescription: "Change group photo",
    longDescription: "রিপ্লাই দেওয়া ছবিটাকে গ্রুপ প্রোফাইল ছবিতে সেট করবে",
    category: "box",
    guide: "{pn} (reply a picture)"
  },

  onStart: async function ({ api, event }) {
    try {
      // ✅ প্রথমে চেক করবো রিপ্লাই আছে কিনা
      if (event.type !== "message_reply") {
        return api.sendMessage("❌Please, reply a picture!", event.threadID, event.messageID);
      }

      // ✅ অ্যাটাচমেন্ট আছে কিনা
      const attachments = event.messageReply.attachments;
      if (!attachments || attachments.length === 0) {
        return api.sendMessage("❌ I didnt get any pic in ur reply!", event.threadID, event.messageID);
      }

      // ✅ একাধিক ছবি দেওয়া থাকলে
      if (attachments.length > 1) {
        return api.sendMessage("⚠️ Reply only one pic!", event.threadID, event.messageID);
      }

      // ✅ ডাউনলোড ও সেট করা
      const imageURL = attachments[0].url;
      const pathImg = __dirname + "/cache/groupimage.png";
      const getData = (await axios.get(imageURL, { responseType: "arraybuffer" })).data;

      fs.writeFileSync(pathImg, Buffer.from(getData, "utf-8"));
      await api.changeGroupImage(fs.createReadStream(pathImg), event.threadID);
      fs.unlinkSync(pathImg);

      return api.sendMessage("✅ |  Group photo has been changed successfully!", event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      return api.sendMessage("⚠️ | Something went wrong, try again later!", event.threadID, event.messageID);
    }
  }
};

