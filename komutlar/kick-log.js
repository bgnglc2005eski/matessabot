const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let kicklogkanal = message.mentions.channels.first()
if (!kicklogkanal) return message.channel.send('<a:oembeyldz:830026533636276255> | Lütfen Kick Log Kanalını Etiketler misin?')
   
  db.set(`kicklog_${message.guild.id}`, kicklogkanal.id)

 
  message.channel.send(`<a:yrnex_tiks:810222648113496075> | KickLog Kanalı Başarıyla Ayarlandı; **${kicklogkanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'kicklog-ayarla',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kicklog-kanal <#kanal>'
};