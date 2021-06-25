const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
  let content = args.slice(2).join(" ");

  const embedname = new Discord.MessageEmbed()
    .setDescription(content)
    .setColor("0x#00ffff")
    .setFooter(
      `REQUESTED BY ${message.author.tag}`,
      `${message.author.displayAvatarURL({ dynamic: true })}`
    )
    .setTimestamp();
  message.channel.send(embedname);
};

module.exports.help = {
  name: "embed",
};
