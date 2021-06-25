const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
  let target =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[1]) ||
    message.member;
  if (!target) return message.reply(`No User Mentioned !`);
  let userinfoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`USERINFO COMMAND !`)
    .setDescription(
      `:black_square_button: Bot : ${target.user.bot} \n :black_square_button: USER ID : ${target.id} \n :black_square_button: Tag : ${target.user.tag}\n :black_square_button: Joined Discord : ${target.user.createdAt} \n `
    )
    .setThumbnail(target.user.displayAvatarURL({ dynamic: true }));

  message.channel.send(userinfoembed);
};

module.exports.help = {
  name: "userinfo",
};
