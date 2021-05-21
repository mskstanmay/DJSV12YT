const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');

module.exports.run = (bot,message,args)=>{
    message.reply(`${ms(bot.uptime)}`)
}

module.exports.help ={
    name:"uptime"
}