const {Client} = require('discord.js');
const bot = new Client();
const {token} = require('./config.json')
const {evthandler,cmdhandler} = require('./loaders.js');
const mongo = require('./mongo.js');

bot.login(token);
evthandler(bot);
cmdhandler(bot);
mongo();