const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  let embed = new MessageEmbed()
  .setTitle("Daftar Command")
    .setDescription("Ini adalah beberapa command yang tersedia dengan prefix = /")
  .addField("commands ku", "`info`, `pi` , `stats`,`say`,`invite`,`saran`") 
  .setColor("BLUE")
  .setTimestamp()
  .setThumbnail(message.author.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048");
  message.channel.send(embed)
};
