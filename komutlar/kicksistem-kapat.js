const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('<a:onemlo:827218882431025152> | Bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`kicklog_${message.guild.id}`)) return message.channel.send('<a:onemlo:827218882431025152> | Kick Sistemi Zaten Kapalı!')
   

   message.reply('<a:onemlo:827218882431025152> | Kicklog Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
db.delete(`kicklog_${message.guild.id}`)
db.delete(`kickyetkilisi_${message.guild.id}`) 


}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'kicksistem-kapat', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};