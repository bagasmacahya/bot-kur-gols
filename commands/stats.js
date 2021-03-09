const { MessageEmbed } = require("discord.js")
const { platform, arch, cpus } = require("os")

exports.run = async(client, message, args) => {
  const model = cpus()[0].model + " " + arch()
  const tanggalBuat = client.user.createdAt
  
  const embed = new MessageEmbed()
  .setColor("BLUE")
  .setTitle("🔰keterangan")
  .setThumbnail(client.user.displayAvatarURL())
  .addField("💨Bot", `
Username: ${client.user.username}
Tanggal Dibuat: ${tanggalBuat}`)
  .setDescription("silakan rate bot ini di tempat yang kami sediakan apa yang kurang dari bot ini")
   .addField("👨‍💻System", `
CPU: ${model}
Platform: ${platform}
Websocket: ${client.ws.ping} ms(miliseconds)`)
  message.channel.send(embed)
}