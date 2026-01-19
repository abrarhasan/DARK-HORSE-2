const { Message } = require('discord.js');

module.exports = {
  config: {
    name: 'horror',
    aliases: ['scary'],
    version: '1.0',
    author: 'abrar',
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: 'Gửi một thông điệp kinh dị ngẫu nhiên',
      en: 'Send a random horror-themed message'
    },
    longDescription: {
      vi: 'Gửi một thông điệp kinh dị ngẫu nhiên để gây sốt xuất hiện cho người dùng',
      en: 'Send a random horror-themed message to spook the user'
    },
    category: 'horror',
    guide: {
      vi: '{pn}',
      en: '{pn}'
    }
  },

  onStart: async function({ message }) {
    
    const horrorMessages = [
      '👻 BOO! Did I scare you?', '🦇 Be careful... something sinister is lurking nearby!',
      '😱 Are you brave enough to face your fears?', '🕸 Watch your step... a web of horror awaits!',
      '💀 Darkness creeps in from every corner... what lurks in the shadows?'
    ];
    const horrorMessage = horrorMessages[Math.floor(Math.random() * horrorMessages.length)];

    await message.reply(horrorMessage);
  }
};
