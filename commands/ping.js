module.exports.run = (bot,message,args)=>{

    if(message.author.id != "685101975385276469") return message.reply(`You're Not A Owner ! `);

    message.reply(`Pong!`);
}

module.exports.help ={
    name:"ping"
}