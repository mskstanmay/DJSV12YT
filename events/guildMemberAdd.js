const Discord = require('discord.js');
const bot = new Discord.Client();
const canvas = require("discord-canvas"),
welcomeCanvas = new canvas.Welcome();

module.exports = async(bot,member)=>{

    if(member.guild.id != '750742343870709794') return;
   
    const WELCOMECHAN = member.guild.channels.cache.get('776058851802873868');
     
    if(!WELCOMECHAN) return console.log(`WELCOME CHANNEL NOT FOUND !`);
    
    
    let image = await welcomeCanvas
      .setUsername(member.user.username)
      .setDiscriminator(member.user.discriminator)
      .setMemberCount(member.guild.memberCount)
      .setGuildName(member.guild.name)
      .setAvatar(member.user.displayAvatarURL({dynamic:false , format: 'jpg',size: 512}))
      .setColor("border", "#8015EA")
      .setColor("username-box", "#8015EA")
      .setColor("discriminator-box", "#8015EA")
      .setColor("message-box", "#8015EA")
      .setColor("title", "#8015EA")
      .setColor("avatar", "#8015EA")
      .setBackground("https://markcannondotcom.files.wordpress.com/2012/12/bethlehem-village-1024x450.jpg")
      .toAttachment();
       
    let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");
     
    WELCOMECHAN.send(`Welcome to the server, ${member.user}!`,attachment);

}