const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
  let say = message.content.split(" ").slice(1).join(" ")
  message.delete()
  
     let embed = new MessageEmbed().setDescription(say).setFooter(``).setColor("BLUE");
  message.channel.send(embed)
}