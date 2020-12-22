const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = async(bot,message,args)=>{   

    let reason = args.join(' ');
if(!reason) return message.reply(`No Bug Specified !`)    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Bug Found !`)
    .setDescription(`Reported by ${message.author} | Id: ${message.author.id} \n Server : ${message.guild.name} | Id: ${message.guild.id} \n Reason : ${reason}`)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(`Powered by Yt Tutorials !`)

message.reply(`Bug Reported !`)
let chan = await bot.channels.cache.get('777807872100794369');
await chan.send(embed).catch(err=>{
    console.log(err);
})

}

module.exports.help ={
    name:"bug"
}