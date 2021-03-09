 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  usage: "ping",
  description: "ws ping",
  aliases: ["p"],
  run: async (client, message) => {
    let now = Date.now();

    let embed = new MessageEmbed()
      .setColor('BLUE')
      .addField("💓API💓", `${client.ws.ping} ms`)
      .addField("⏳Latency⏳", `${Math.round(Date.now() - now)} ms`);
       message.channel.send(embed);
  }
};
