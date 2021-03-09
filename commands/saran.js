const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
  
    if(!args.length) {
      return message.channel.send("Please Give the saran")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "saran" || x.name === "saran"))
    
    
    if(!channel) {
      return message.channel.send("gak ada channel yang bernama - saran")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("SARAN: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
      m.react("😚")
    }).catch(err => {})
    

  }
 }