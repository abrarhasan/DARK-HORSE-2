module.exports = {
config: {
name: "autorespondv2",
version: "2.0.0",
author: "abrar",
cooldown: 5,
role: 0,
shortDescription: "Autoresponds with reactions and replies",
longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
category: "fun",
guide: "?autorespondv2",
},
onStart: async ({ api, event }) => {
// Blank onStart function as per the request
},
onChat: async ({ api, event }) => {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
"🌸": ["Ritsu", "Princess", "sanchokuin", "Goddess", "Anaïs", "Barro", "Tsiaro", "Kazu", "Thea", "Aesther"],
"💚": ["well", "beau", "gaganunin", "pfft", "xyrene", "fantastique"],
"😾": ["🤨", "nooo", "talong", "galit"],
"🥰": [ "Excellent" ],
"😢": ["sad", "😢", "What happened", "Sorry", "Rip", "fever", "sick"],
"⏳": ["prodia", "sdxl", "bardv3", "tanongv2", "+imagine", "genimg", "Tanongv4", "kamla", "+shortcut", "play", "wait", "sing", "anime", "animefy", "ani", "slap", "Pinterest", "what's", "why"],
"🔍": ["search", "youtube", "music","history", "wiki", "google"],
"🌊": ["ok", "cool", "bien", "super", "d'accord", "génial", "merveille"],
"💜": ["abrar", "abrar hasan", "good boy"],
};

// Replies to specific words
const replies = {
"bye": "Stay😔...",
"muaah": "Chi Astagfirullah 🙈",
"😘": "Chi Astagfirullah I'm shy🙈", "fairy": "Fairy is cute but dont call her, she is busy now.❤️",
"admin": "My owner and admin is Abrar hasan🌻","owner": "My creator is Abrar hasan🌻","who is your lover?": "Abrar🌷 𝗶𝘀 𝗺𝘆 𝗘𝘃𝗲𝗿𝘆𝘁𝗵𝗶𝗻𝗴🌸🙈", "who is your creator": "My creator is Abrar hasan🌻", "who is your owner": "My owner is Abrar hasan🌻", "do you love me?": "no, you are dead to me🙂", "nobody loves me": "shhhhh I love you babe😘", "i love you": "I love you too, ummah😘", "💋": "Chi Astagfirullah🙈", "gf": "chi Astagfirullah, it's haram bro🙈", "i am angry": "don't be angry at me😔, I'm a good girl", "😠": "I'm sorry, dont be mad at me😔", "😡": "I'm sorry, dont be mad at me😔", "🙂": "what?🙂", "hate you": "hate you too🙂", "abru": "Abrar is sleeping, don't disturb him.😾😡", "good boy": "Only Abrar is the worldwide trustworthy goodboy😘", "shut up": "You are so rude, hate you 😡", "abrar": "Abrar is busy, tell me instead😈", "good morning": "Good morning too, have a nice day🌻", "good night": "Good night too, have a good horror mixed dream.🤭", "good afternoon": "Good afternoon too, enjoy your day🤗", "good evening": "Good evening too, stay alert about our official quiz and enjoy with us🌻🥰", "assalamu": "Walaikumassalam, May Allah bless you 🌻", "allah hafiz": "Allah hafiz, Take care of yourself dear🤗", "&quiztime": "👑ROYAL CLUB ENGLISH{RCE}🌠\n\n    📢Official Quiz Time⏰\n\n\n____________&&&&&____________\n\n👉🏻1) USA  ➡️ 10:30 am\n👉🏻2) Bangladesh  ➡️ 8:30 pm\n👉🏻3) India  ➡️ 8:00 pm\n👉🏻4) Pakistan  ➡️ 7:30 pm\n👉🏻5) Afganistan  ➡️ 6:30 pm\n👉🏻6) Philippines  ➡️ 10:30 pm\n👉🏻7) Ghana  ➡️ 2:30 pm\n👉🏻8) Morocco  ➡️ 3:30 pm\n👉🏻9) Belgium  ➡️ 3:30 pm\n👉🏻10) Germany  ➡️ 3:30 pm\n👉🏻11) Indonesia  ➡️ 9:30 pm\n👉🏻12) Algeria  ➡️ 3:30 pm\n👉🏻13) Nigeria  ➡️ 3:30 pm\n👉🏻14) Egypt   ➡️ 4:30 pm\n👉🏻15) South Africa ➡️ 4:30 pm\n👉🏻16) Saudi Arabia ➡️ 5:30 pm\n👉🏻17) Kuwait ➡️ 5:30 pm\n👉🏻18) Iraq ➡️ 5:30 pm\n👉🏻19) Kurdistan ➡️ 5:30 pm\n👉🏻20) Madagascar ➡️ 5:30 pm\n👉🏻21) UAE ➡️ 6:30pm\n👉🏻22) Nepal ➡️ 8:15 pm\n👉🏻23) Myanmar ➡️ 9:00 pm\n👉🏻24) Cambodia ➡️ 9:30 pm\n👉🏻25) Vietnam ➡️ 9:30 pm\n👉🏻26) China ➡️ 9:30 pm\n👉🏻27) Malaysia ➡️ 10:30 pm\n\n\n____________&&&&&_____________", "&mentionlist": "@JAndrés Dlr @Rawda Ábd El Hady @Mīr Rêñy @Kinza Rajput @Yamur Mh @Kaif Salmani @Manu Patel @شوخ ننګرهاری @Rajat K @Ayesha Siddika @Ňøbî Ţä @Ashish Kohli @Sari Purnama @It'x Nomii @Shåhzådå Khāñ @Malaha Noor @Youssef Alhabib @Himel Tasnim @Cas Per @Narcisse Na @Valkerie Siera @Ariha Arohi @Abrár Hāsāñ Aādīl @Yousuf Jan @Noura Ali @Haleema Khatoon @Priyotoma Fatima @Aáfiā Afrīn Mâwâ @Zamie N'dutz Muaniez @Hameed Ur Rahman @Waheed Kn @Cathy Blaire @Niveudhan Subramanian @Syed Ali Shah @Syed Sarwar Shah @Ğišo Šařfařaz @Adeel Shaukat @Đò Chiều @FarHan KhaLil @Md Anowar @Reina Wiersema @Hamza Khan @Andria Lovah @Ayşegül Yavuz @Fenk Varan @Rahim Zaman @Kamran Khakhbaz @Itx NoMii @Idriss Salisu Ibraheem @Muhammad Farooq @ᎷᎾᎻᎪᎷᎷᎪᎠ ᏚᎻᎪᎻᏆᎠᏌᏞᏞᎪᎻ @Malik Faisal @Lainyrain Corbito @Jan Sharifi @Zindagi Khan @Niaz Dilber Dars @Anwar Ali AK @Richel Daguimol @Hanan S Mohmmed @Jahangeer Khan @Irsha Ali @Sheraz Khan @Md Riyad Hossain @Arav Ahmed Rasel @Kazi Nasiruddin Mostafa @Samina Ali @Pierre Tandamba @Ying Cantillo @Gm Taslim @Yashfa Shah @Adriana Luccy @Zip Marasigan @Maniribuka Venuste Theoneste @Zaidi Sb @Jahid Hasan Shehab @Naj Jesika @Bâ Aly Bâ @Ahsan Emon @Itz Yusuf Moh'd @Michelle Touzo Mondigo @Abubakar Bello Zk @Aryan Khan @Hemn Denis @Noyon Chandra @Real Senior Adam Moozee @Khan Asfi Khan @Tenten Amarille @Eva Abendan @Mansoor Aminy @Shimaa Ayman @P　R　I　N　C　 E　ツ @Mariwan Ramazan @Ma'Kyaru @Taravat Omar @Shah Zain @S Arif Shinwari @Jannah Ahmad @Nshimiyimana Jean Claude @Mohammad Khan @Huzaifa Rajput @Shawon Islam @Jamil Khan @Faithful Tactician @Swetswet @Zeeshan Shamir @Muhammad Jibran @Sanam Ali @Sa Diya @Carcinus Manius @Gulab Rehman @A Ali @Huzaifa Sheikh @Ella Song @Dina Masangcay @Sajjad Khan @Muhammad Yousaf @Dilawar Kurdi @Mariyam Ali @Urooj Rajput @Rehyan Anjeleena @Err Mondigo @Noor Haya @L H NaEem @Haris Majroh @Aqib Khan @Novice Tyro @Shahzad Ahmad @Hibat Errahmane @Jyothi Munagala @Mujeeb Ghunio @Mai Loan @Nedz H. Ahsan @Emak Riweuh React @Abrar Hasan @Ae Ri @Sara Kurdi @Komiyãlee MinãtozãkiNozumi Hãnãmãru Akãtã @Nily Shamuradova @Gurmit Singh @Deep Thinker @Maryam Khan @Lisa Nawabi @أميرة نائمة @Sania Shahab @Ling Ling @Sharmin Shorma @Prince Dave Houston @Sahil Khan @It'z Diamond M Sani @Narayan Rathod @Mohsin Ullah Jan @Amber Ella @Qiana @Mujju B Patao @Ajay Adwani @Iqra Zaman @Irfan @Laly Pukhtoon @Nawshad Patowary @Audrey Ava @Elizabeth Paracale @Faria Fari @Mirah Shaikh @Prince Sahil @George Santillian @S Khalid Wafa @Bright Spark @Ah Nin @Rafi Ullah @Ishart Alahaji @Bilal Abbas @Creed Nala @Poorvi Saini @Shriya Verma @Muhammad Ali @Rahul Sharma @Kavya Singh @Hadi Khan Korai @Dolly Singh @Real Bïñ Khamîs @Mansoor Waziry @Md Akash @Kantikumar Borkar @Kazi Mostafa @Ahmet Çakır @Mis Lonar @Zia Khan @Bienvenue Nsengumuremyi @Ali Bunu @Ali Bunu @Bryce E Xavier @Shizuka Akira Moon @Haf Saa @It'z Great Moh'd Abdull @Yung Bull @Tulip Tulipe @Anna Scorliza @Mst Keya @Ahmed Ali Bita @Nadia King @Ismail Umar @Baba Gana Mamman @Gódñęss Résērvę Dé L'ètęrñèl @Golfe Mokoko @╰━➗🎲🎲╤━─────━◎➛➣ ╰♡╮⎝҂⚈⏝⚆⍀卝◉卝➗🎲🎲➗╤══─────◎➛➣ ╰😘╮🄳🄴🅂🅃🅁🄾🅈🄴🅁║🌾║🄷🄴🅁🄴╰🥰╮🦋🌻🐝╭⍝╮⚃⚄⚃⚃⚀🥀🟥🟩🟦🟨🟪🌾🅅🄸🄿 🄿🅁🄾🄵🄸🄻🄴╭⍝╮⎝⎝҂⚈⏝⚆⍀⎠╰🤩╮☆↔️❤️💙💚💜↔️☆ @April Burgen @Balqees Youssef @Noctis Lucis Caelum @Kawsar Ali Haider @Yuè Liang @Temple Kang @Helin Idrisu @Shu Wawei @Yalda Mohammadi @P　R　I　 N　C　C　 E　Sツ @Brahim Maleef @Kinza Batool @ evryone\n\n\n____________&&&&&____________\n\nGood evening evryone. Hope u all are doing great by the God's grace. We are gonna start our official quiz shortly. We expect ur kind cooperation. Stay blessed always ❤️"};

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
