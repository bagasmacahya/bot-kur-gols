const { MessageEmbed } = require("discord.js");

const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (client, message, args) => {
     if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("Aku Tidak Memiliki Izin Untuk Menjalankan/Menggunakan Cmd Ini!")

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("MINTA IJIN DULU YA KAMU GAK ADA IJIN")
    if (!args[0]) return message.channel.send(`tolong masukan waktu yang benar!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `tolong lebih benar lagi dengan "d =day, m=minute, h=hour"!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Tidak Menemukan Channel!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);
    message.channel.send(`*giveaway telah dibuat dichannel ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`:tada:New giveaway!:loudspeaker:`)
      .setDescription(
        `**React Untuk Mengikuti Giveaway**`
      )
    .addField('Hadiah', `${prize}`)
    .addField('Hosted By', `${message.author}`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`RANDOM`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Not enough people reacted for me to start draw a winner!`
        );
      }
     

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `Selamat Kepada ${winner} jangan lupa dm ${message.author}`)
    }, ms(args[0]));
  },
};