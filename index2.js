const mineflayer = require('mineflayer');

// Set up the bot options
const botOptions = {
  host: 'effected55.aternos.me',
  port: 44569, // default Minecraft server port
  username: 'notmimo33',
  version: '1.16.5', // the version of Minecraft your server is running
};

// Create a new bot instance
const bot = mineflayer.createBot(botOptions);

// When the bot is ready, join the server and start doing stuff
bot.on('spawn', () => {
  bot.chat('MIMO NOOOOOOOOOOOB NTA . NTA BOOST 15 YOUM VIP MCDONALD'); // send a message to the chat
  bot.setControlState('forward', true); // move the bot forward
})