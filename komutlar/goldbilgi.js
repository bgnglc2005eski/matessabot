const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client,message,args)=>{
    let komut = new Discord.MessageEmbed()
    .setTitle("**__Matessa Gold Bilgi__**")//komutun ismi
    .setImage("https://cdn.discordapp.com/attachments/827850345455681617/833608234605477939/matessagold.gif")//gifin linki
    .setDescription(`
    <a:hawlikedi:832558108797698049> Gold üye olduğunuz zaman otomatik sunucunuza yapılan DDOS saldırılarını engeller.
    <a:hawlikedi:832558108797698049> Destek sunucusunda Gold paketi kullanan üyelere verilen özel rolü alabilme.
    <a:hawlikedi:832558108797698049> Özel karşılama mesajları.
    <a:hawlikedi:832558108797698049> Ratelimit vb. kapanmalardan etkilenmeme.
    <a:hawlikedi:832558108797698049> Gold paketi alanlar Matessa'ya eklenecek olan yeni komutları önceden deneyebilir.
    <a:hawlikedi:832558108797698049> Ayrıca ₺5 ve üzeri alışverişlerde HuluTV hediye!
    `)//mesajlar
     .addField('<a:dnd:831834557233102888> **__Peki Kaç TL?__**', 
    `<a:opcukkz:831787512748834826> **__Gold Üye Paketi ₺4,99/Aylık__\n<a:opcukkz:831787512748834826> __Gold Üye Paketi ₺12,50/3Aylık__\n<a:opcukkz:831787512748834826> __Gold Üye Paketi ₺44,99/Yıllık__\n\n<a:kutlama:829617400529813514> Eğer paketi almak istiyorsanız, [Destek Sunucusuna](https://discord.gg/UfPx9SZyPQ) gelerek †hε κƦøzε#1881 ile iletişime geçerek paketinizi alabilirsiniz.**`)
    .setImage('https://cdn.discordapp.com/attachments/827850345455681617/833608234605477939/matessagold.gif')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(komut)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "goldbilgi",
  description: "Sporsonuzu belirtir.",
  usage: "gold-bilgi"
};  