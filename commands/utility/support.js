const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`SUPPORT SERVER INVITE`)
    .setDescription(`[CLICK HERE](https://discord.gg/UatfmrmT)`)
    message.channel.send(embed);

}

module.exports.help ={
    name:"support"
}