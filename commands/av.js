module.exports.run = (bot,message,args)=>{
  
    let target = message.guild.members.cache.get(message.mentions.users.first()) || bot.users.cache.get(args[1]) || message.member;
    if(!target) return message.reply(`No User Mentioned !`)
   
   
    message.channel.send(message.author.displayAvatarURL({dynamic : true}))
}

module.exports.help ={
    name:"av"
}
