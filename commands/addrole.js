const Discord = require('discord.js');

const bot = new Discord.Client();

module.exports.run = async (bot,message,args)=>{

    

    // !addrole bots/humans/@user @role

    

    //Bot permitted or not ?

    

    if(!message.guild.me.permissions.has('MANAGE_ROLES')) return message.reply('I Need Manage Roles Perm !');

    if(!message.member.permissions.has('MANAGE_ROLES')) return message.reply('You Need Manage Roles Perm !');

    

    // defining

    

    if(!args[0]) return message.reply('**Usage : !addrole bots/humans/@user @role**');

    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);

    if(!role) return message.reply('No role Mentioned !');

    

    

    //role cases 

    if(!message.guild.me.roles.highest.position >= role.position) return message.reply('Pls Check my role is above that role ');

    

   if(!message.member.roles.highest.position >= role.position) return message.reply("You Can't Manage That Role !");

   

   

     if(args[0] == "bots"){

        

        const botsofserver = message.guild.members.cache.filter(member=> member.user.bot);

      await   botsofserver.forEach(member=> {

         

          member.roles.add(role).catch(err=> console.log(err));

        })

         

        await message.reply(`Added Role \`${role.name}\` To All Bots ! (${botsofserver.size}))`);

         

       }

       else if(args[0] == "humans"){

         const manofserver = message.guild.members.cache.filter(member=> !member.user.bot);

      await   manofserver.forEach(member=> {

         

          member.roles.add(role).catch(err=> console.log(err));

        })

       

        await message.reply(`Added Role \`${role.name}\` To All Humans ! (${manofserver.size}))`);

       }

       else{

         message.reply('else');

       }

    

}

module.exports.help ={

    name:"addrole"

}
