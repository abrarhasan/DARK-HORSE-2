module.exports = {
  config: {
    name: "handsome",
    version: "1.0",
    author: "Abrar",
    role: 0,
    category: "fun",
    guide: {
      vi: "Just For Fun",
      en: "Calculate Your Beautiness"
    } 
  },

  onStart: async function ({ api, event }) {
      const data = ["you are 000000% handsome😆, This command doesn't suit you, never try it again😆","You are 1% handsome😢", "You are 2% handsome😢", "You are 3% handsome😢", "You are 4% handsome🫠", "you are ugly🤪", "You are 6% handsome🫠", "You are 7% handsome🫠", "You are 8% handsome🫠", "You are 9% handsome🫠", "You are 10% handsome🫠", "You are 11% handsome🫠", "You are 12% handsome🫠", "You are 13% handsome🫠", "You are 14% handsome🫠", "You are 15% handsome🫠", "You are 16% handsome🫠", "You are 17% handsome🫠", "You are 18% handsome🫠", "You are 19% handsome🫠", "You are 20% handsome🫠", "You are 21% handsome🫠", "You are 22% handsome🫠", "You are 23% handsome🫠", "You are 24% handsome🫠", "You are 25% handsome🫠", "You are 26% handsome🫠", "You are 27% handsome🫠", "You are 28% handsome🫠", "You are 29% handsome🫠", "You are 30% handsome🫠", "You are 31% handsome🫠", "You are 32% handsome🫠", "You are 33% handsome🫠", "You are 34% handsome🫠", "You are 35% handsome🫠", "You are 36% handsome🫠", "You are 37% handsome🫠", "You are 38% handsome🫠", "You are 39% handsome🫠", "You are 40% handsome🫠", "You are 41% handsome🫠", "You are 42% handsome🫠", "You are 43% handsome🫠", "You are 44% handsome🫠", "You are 45 %handsome🫠", "You are 46% handsome🫠", "You are 47% handsome🫠", "You are 48% handsome🫠", "You are 49% handsome🫠", "You are 50% handsome🫠", "You are 51% handsome🫠", "You are 52% handsome🫠", "You are 53% handsome🫠", "You are 54% handsome🫠", "You are 55% handsome🫠", "You are 56% handsome🫠", "You are 57% handsome🫠", "You are 58% handsome🫠", "You are 59% handsome🫠", "You are 60% handsome🫠", "You are 61% handsome🫠", "You are 62% handsome🫠", "You are 63% handsome🫠", "You are 64% handsome🫠", "You are 65% handsome🫠", "You are 66% handsome🫠", "You are 67% handsome🫠", "You are 68% handsome🫠", "You are 69% handsome🫠", "You are 70% handsome🫠", "You are 71% handsome🫠", "You are 72% beautiful🫠", "You are 73% handsome🫠", "You are 74% handsome🫠", "You are 75% handsome🫠", "You are 76% handsome🫠", "You are 77% handsome🫠", "You are 78% handsome🫠", "You are 79% handsome🫠", "You are 80% handsome🫠", "You are 81% handsome🫠", "You are 82% handsome🫠", "You are 83% handsome🫠", "You are 84% handsome🫠", "You are 85% handsome🫠", "You are 86% handsome🫠", "You are 87% handsome🫠", "You are 88% handsome🫠", "You are 89% handsome🫠", "You are 90% handsome🫠", "You are 91% handsome🫠", "You are 92% handsome🫠", "You are 93% handsome🫠", "You are 94% handsome🫠", "You are 95% handsome🫠", "You are 96% handsome🫠", "You are 97% handsome🫠", "You are 98% handsome🫠", "Damn🔥 You are 99% handsome🫠", "Oh Oh O My God 😲 Handsomeness Overload... My System Is Gonna To Crash Out 🤯 !!", 
  ];
  return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
  }
};
