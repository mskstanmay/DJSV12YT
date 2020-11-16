const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = async(bot,guild)=>{

    bot.channels.cache.get('776727210911989771').send(`Added to a new server ${guild.name} !`)
    
}