const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{
let therole = message.mentions.roles.first();
if(!therole) return message.reply(`No Role Mentioned !`)

let theroleembed = new Discord.MessageEmbed()
.setTitle(`Roleinfo OF <a:JSBOTGIF:758518728601632768> __${therole.name}__ <a:JSBOTGIF:758518728601632768> `)
.setColor('RANDOM')
.addField(`Name`,`${therole.name}`)
.addField(`Role Id`,`${therole.id}`)
.addField(`Color`,`${therole.hexColor}`)
.addField(`Hoisted`,`${therole.hoist}`)
.setTimestamp()

message.channel.send(theroleembed);
}

module.exports.help ={
    name:"roleinfo"
}