@@ -4,7 +4,7 @@ module.exports = {
config: {
    name: "info",
    version: "2.5.3",
    author: "ST | Sheikh Tamim",
    role: 0,
    countDown: 20,
    shortDescription: {
@@ -21,10 +21,10 @@ module.exports = {

  onStart: async function ({ message }) {

    const ownerName = "ABRAR HASAN";
    const ownerAge = "22";
    const ownerFB = "https://www.facebook.com/abrar.hasan.125760550";
    const ownerNumber = "+88018XXXXXXX";
    const status = "Active";

    const botName = global.GoatBot?.config?.nickNameBot || "GoatBot";
@@ -34,7 +34,7 @@ module.exports = {
    const totalCommands = global.GoatBot?.commands?.size || 0;

    const images = ["https://i.imgur.com/L5fGnYX.jpeg","https://i.imgur.com/mAifBNb.jpeg","https://i.imgur.com/Lf028tD.jpeg","https://i.imgur.com/CdzNRud.jpeg"
     
    ];
    const image = images[Math.floor(Math.random() * images.length)];

@@ -53,18 +53,18 @@ module.exports = {
      body: `
╔═《 ✨ 𝗢𝗪𝗡𝗘𝗥 & 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ✨ 》═╗

⭓ 🤖 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲   : 『 ${botName} 』
⭓ ☄️ 𝗣𝗿𝗲𝗳𝗶𝘅      : 『 ${prefix} 』
⭓ 🧠 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀    : 『 ${totalCommands} 』
⭓ ⚡ 𝗨𝗽𝘁𝗶𝗺𝗲      : 『 ${uptimeString} 』
⭓ 🗓️ 𝗗𝗮𝘁𝗲        : 『 ${date} 』
⭓ ⏰ 𝗧𝗶𝗺𝗲        : 『 ${time} 』

⭓ 👑 𝗢𝘄𝗻𝗲𝗿      : 『 ${ownerName} 』
⭓ 🎂 𝗔𝗴𝗲        : 『 ${ownerAge} 』
⭓ ❤️ 𝗦𝘁𝗮𝘁𝘂𝘀     : 『 ${status} 』
⭓ 📱 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽  : 『 ${ownerNumber} 』
⭓ 🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸  : 『 ${ownerFB} 』

╚══════════════════════════╝
