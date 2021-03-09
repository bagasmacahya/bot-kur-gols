const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
 .setThumbnail(message.author.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048");
  message.channel.send(embed)
  .setDescription('Ini adalah beberapa command yang tersedia dengan prefix = /') //ini cuma contoh
  .addField('Commands', '`ping` `stats` `help`', true)
   message.channel.send(embed)
}