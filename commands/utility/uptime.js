const ms = require("ms");

module.exports.run = (bot, message, args) => {
  message.reply(`${ms(bot.uptime)}`);
};

module.exports.help = {
  name: "uptime",
};
