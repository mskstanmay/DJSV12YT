const { readdir, readdirSync } = require("fs");
const { Collection } = require("discord.js");
module.exports = {
  cmdhandler: async (bot) => {
    bot.commands = new Collection();

    let cmdsfolders = readdirSync("./commands");
    for (const category of cmdsfolders) {
      let cmdfiles = readdirSync(`./commands/${category}`).filter((f) =>
        f.endsWith(".js")
      );

      for (cmdfile of cmdfiles) {
        const command = require(`./commands/${category}/${cmdfile}`);
        bot.commands.set(command.help.name, command);
        console.log(`LOADED ${command.help.name} Cmd !`);
      }
    }
  },
  evthandler: async (bot) => {
    readdir("./events/", (err, files) => {
      if (err) return console.error();
      files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventname = file.split(".")[0];
        console.log(`Loaded ${eventname} Event !`);
        bot.on(eventname, event.bind(null, bot));
      });
      console.log(`Loaded Events !`);
    });
  },
};
