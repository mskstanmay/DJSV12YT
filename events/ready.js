module.exports = async(bot)=>{
    bot.user.setActivity('Teaching Youtube !', { type: 'WATCHING' })


    console.log(`Logged in as ${bot.user.tag}!`);
    
}