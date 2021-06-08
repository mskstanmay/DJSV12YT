const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json')
const fs = require('fs');
bot.commands = new Discord.Collection();
const mongoose = require('mongoose');

bot.login(config.token);
mongoose.connect(config.mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(console.log(`Connected To MongoDB !`));

//COMMAND HANDLER 

fs.readdir('./commands',(err,files) =>{
  if(err) console.log(err);
  let jsfiles = files.filter(f=> f.split(".").pop() === "js");
  
  if(jsfiles.length <= 0) {
    console.log(`NO COMMANDS FOUND !`);
  }

  jsfiles.forEach((f,i)=>{
    let sss = require(`./commands/${f}`);
    bot.commands.set(sss.help.name,sss)
  })
console.log(`LOADED ${jsfiles.length} COMMANDS !`);
})

//EVENT HANDLER 

fs.readdir('./events/',(err,files)=>{
  if(err) return console.error();
  files.forEach(file=>{
    if(!file.endsWith('.js')) return;
    const event = require(`./events/${file}`);
    let eventname = file.split('.')[0];
    console.log(`Loaded ${eventname} Event !`);
    bot.on(eventname , event.bind(null , bot));
  });
  console.log(`Loaded Events !`);
})





