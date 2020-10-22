const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json')

const fs = require('fs');
bot.commands = new Discord.Collection();

fs.readdir('./commands',(err,files) =>{
  if(err) console.log(err);
  let jsfiles = files.filter(f=> f.split(".").pop() === "js");
  
  if(jsfiles.length <= 0) {
    console.log(`NO COMMANDS FOUND !`);
  }

console.log(`LOADING ${jsfiles.length} COMMANDS !`);

jsfiles.forEach((f,i)=>{
  let sss = require(`./commands/${f}`);
  console.log(`${i+1}: ${f} Has Been Loaded !`);  
  bot.commands.set(sss.help.name,sss)
})
})


const prefix = config.prefix ;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  });
  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
    
});

bot.login(config.token);


