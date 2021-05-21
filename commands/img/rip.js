const Discord = require('discord.js');
const bot = new Discord.Client();
const canvacord = require("canvacord");


module.exports.run = async(bot,message,args)=>{

let target = message.mentions.users.first() ;
if(!target) return message.reply(`User Not Specified !`)

let avatar = target.displayAvatarURL({ dynamic: false, format: 'png', size: 512 });
let image = await canvacord.Canvas.rip(avatar);
let attachment = new Discord.MessageAttachment(image, "rip.png");
return message.channel.send(attachment);

}

module.exports.help ={
    name:"rip"
}