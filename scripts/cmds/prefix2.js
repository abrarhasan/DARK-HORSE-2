module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `


██╗░░░██╗░█████╗░███████╗
╚██╗░██╔╝██╔══██╗╚════██║
░╚████╔╝░███████║░░███╔═╝
░░╚██╔╝░░██╔══██║██╔══╝░░
░░░██║░░░██║░░██║███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝

━━━━━━━━━━━━━━━

Hello!🤗 It looks like you're not familiar with my prefix!,🥺 here's a guide, use this :➡

👑 SYSTEM PREFIX:➡【 + 】
🐰 BOX CHAT PREFIX:➡ 【 + 】

📌 𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘
+ai how to make a cake?
+ai what's a messenger bot?

⚙ 𝗠𝗢𝗥𝗘 𝗢𝗣𝗧𝗜𝗢𝗡𝗦
➖ ✅ [ +quiz ] 
➖ 🎰 [ +help ]
➖ 🎯 [ +pair ]
➖ 🏦 [ +ai ]
➖ 📝 [ +Sing ]

OWNER: https://www.facebook.com/md.hojaifa.125760?mibextid=ZbWKwL`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/voEHfHB.gif")
 });
 }
 }
}
