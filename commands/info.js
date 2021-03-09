const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {      
  let embed = new MessageEmbed()
  .setTitle("INFO bot DARIYU")
    .setDescription("bot DARIYU prefix = /")
  .addField("Info","jadi bot ini adalah bot yang lumyan keren disini banyak sekali commands tanpa prefix mulai dari halo hai selamat pagi pagi malam sore sepi dan setwelcome tutor,aku meciptakan bot ini udah lumayan lama kira kira 3 bulan")
  .setColor("BLUE")
  .setTimestamp()
  .setThumbnail(message.author.displayAvatarURL({ size: 2048, dynamic: true, format:"png" }));
  message.channel.send(embed)
};
