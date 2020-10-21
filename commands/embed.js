const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{   

const embedname = new Discord.MessageEmbed()
.setDescription(message.content.substring(6))
.setColor('0x#00ffff')
.setFooter(`REQUESTED BY ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic : true})}`)
.setTimestamp();
message.channel.send(embedname)
}

module.exports.help ={
    name:"embed"
}