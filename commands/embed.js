const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{   

let content = args.join(' ');
if(!content) return message.reply(`Please Specify Something To Embed !`)  

const embedname = new Discord.MessageEmbed()
.setDescription(content)
.setColor('0x#00ffff')
.setFooter(`REQUESTED BY ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic : true})}`)
.setTimestamp();
message.channel.send(embedname)
}

module.exports.help ={
    name:"embed"
}