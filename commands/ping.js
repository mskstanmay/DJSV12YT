const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');

module.exports.run = async (bot,message,args)=>{

const msgsent = await message.channel.send(`Calculating......`);
const botping = msgsent.createdTimestamp - message.createdTimestamp+"ms";
const apilatency = ms(bot.ws.ping);
    msgsent.edit(`Api Latency : ${apilatency} \nMsgLatency : ${botping}`);
}

module.exports.help ={
    name:"ping"
}