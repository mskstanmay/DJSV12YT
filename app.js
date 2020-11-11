const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json')
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
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

bot.on('guildMemberAdd', async member => {
const WELCOMECHAN = bot.channels.cache.get('776058851802873868')
if(!WELCOMECHAN) return console.log(`WELCOME CHANNEL NOT FOUND !`);
let data = await canva.welcome(member, { gradiant: "peakblue" })
 
const attachment = new Discord.MessageAttachment(
  data,
  "welcome-image.png"
);

WELCOMECHAN.send(`Welcome to the server, ${member.user.username}!`,attachment);  
});



bot.on('ready', () => {
bot.user.setActivity('Teaching Youtube !', { type: 'STREAMING' })


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


function newFunction(member) {
  return member.guild.channels.cache.find(ch => ch.name === 'member-log');
}

