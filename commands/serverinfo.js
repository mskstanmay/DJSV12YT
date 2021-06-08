const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{   
let server = message.guild;
      let serverinfoembed = new Discord.MessageEmbed()

    .setTitle(`SERVERINFO OF __${server.name}__`)
    .setColor('RANDOM')
    .setThumbnail(server.iconURL({dynamic:true}))
    .addField(`Owner: `,`${server.owner}(ID:${server.ownerID})`,true)
    .addField(`REGION: `,`${server.region}`,true)
    .addField(`Channels`,`${server.channels.cache.size}`,true)
    .addField(`Members`,`${server.members.cache.size}`,true)
    .addField(`Roles`,`${server.roles.cache.size}`,true)
    .addField(`Created At`,`${server.createdAt}`,true)
    message.channel.send(serverinfoembed)
}

module.exports.help ={
    name:"serverinfo"
}