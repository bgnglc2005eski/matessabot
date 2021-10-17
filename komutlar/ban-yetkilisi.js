const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let banyetkilirol = message.mentions.roles.first()
  if (!banyetkilirol) return message.channel.send('<a:YanpSnennleGif:808663374002257960> | Lütfen yetkili rolünü etiketler misin?')
   
  db.set(`banyetkilisi_${message.guild.id}`, banyetkilirol.id)
  message.channel.send(`<a:yrnex_tiks8:810223523959799829> | Yetkili Rolü Başarıyla Ayarlandı; **${banyetkilirol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'banyetkilisi-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'banyetkili-rol <@rol>'
};