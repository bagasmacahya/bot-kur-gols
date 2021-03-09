const discord = require('discord.js')
 
 exports.run = async(client, message, args) => {
   

  
  if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("Aku Tidak Memiliki Izin Untuk Menjalankan/Menggunakan Cmd Ini!")

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("IJIN DULU YA")

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Tolong Berikan Jumlah Chat Yg Ingin Dihpus!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('Kamu Hanya Bisa Mengahpus 99 chat/message Saja!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);

 }