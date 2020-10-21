const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{
    message.channel.send(message.author.displayAvatarURL({dynamic : true}))
}

module.exports.help ={
    name:"av"
}