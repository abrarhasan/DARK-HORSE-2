const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "ownerinfo",
  aurthor:"abrar",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "OWNER",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '🌻Abrar Hasan🌻',
      gender: 'Male',
      age: '22',
      height: 'Unknown',
      nick: 'Good boy🤭',
      facebookLink: 'https://www.facebook.com/abrar.hasan.125760550'
      '
    };

    const bold = 'https://i.ibb.co/xqNbSRhr/image0.jpg'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_image.jph');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
🌺🌺🌺Owner Information🌺🌺🌺\n👉🏻
Name: ${ownerInfo.name}\n👉🏻Gender: ${ownerInfo.gender}\n👉🏻
Age: ${ownerInfo.age}\n👉🏻Height: ${ownerInfo.height}\n👉🏻Nick: ${ownerInfo.nick}\n👉🏻Facebook: ${ownerInfo.facebookLink}
\n\n________&&&&&&&________`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
