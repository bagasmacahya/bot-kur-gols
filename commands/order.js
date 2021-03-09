const a = require('discord.js')


exports.run = async(client, message, args) => {
  const d = args.join(' ')
  const b = new a.MessageEmbed()
  .setTitle('📢New Order!')
  .setDescription(args[0])
  .addField('📦Order', (args[1]))
  .addField('📊Status', args[2])
  .setColor('RANDOM');
  message.channel.send(b);
  
  message.channel.bulkDelete(1)    
};//jan diapa apain