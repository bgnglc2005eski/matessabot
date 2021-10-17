const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor('Black')
  .setThumbnail(client.user.avatarURL({dynamic: true}))
  .setAuthor('Matessa Bot Davet Bilgi', client.user.avatarURL({dynamic: true}))
  .setDescription(`
  **__Botun Davet Linki __**
  <a:opcukkz:831787512748834826> » [Davet Linkim](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot) 
  
  **__Botun Destek Sunucusu__**
  <a:opcukkz:831787512748834826> » [Destek Sunucum](https://discord.gg/UfPx9SZyPQ)
  
  **__Bota Oy Vermek İçin Tıkla__**
  <a:opcukkz:831787512748834826> » [YAKINDA](Yakında)`)
  
.setFooter(`Komutu ${message.author.username} kullanıcı istedi .`, message.author.avatarURL({dynamic: true}))
  message.channel.send(davet)
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet-et'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gönderir.',
  usage: 'davet'
};