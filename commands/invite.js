const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {      
  let embed = new MessageEmbed()
   .setDescription("LINK FOR YOU")
  .addField("ADD LINK", "[Invite link](https://top.gg/bot/757768959037800539/invite) | [Vote Link](https://top.gg/bot/757768959037800539/vote)")
   .setColor("BLUE")
  .setTimestamp()
  .setThumbnail(message.author.displayAvatarURL({ size: 2048, dynamic: true, format:"png" }));
  message.channel.send(embed)
};