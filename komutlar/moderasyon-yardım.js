const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let krozeem = "https://discord.gg/UfPx9SZyPQ"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Matessa Bot Moderasyon Yardım Menüsü', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `m+avatar`\n**Örnek:** `m+eh-engel`\n[Metassa Botunu Hemen Ekle](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot)')
    .addField('Matessa Bot Moderasyon Komutları:', 
    `<a:oembeyldz:830026533636276255> [m+ban](${krozeem})
    <a:oembeyldz:830026533636276255> [m+banlog-ayarla](${krozeem})
   <a:oembeyldz:830026533636276255> [m+banyetkilisi-ayarla](${krozeem})
   <a:oembeyldz:830026533636276255> [m+kick](${krozeem})
   <a:oembeyldz:830026533636276255> [m+kicklog-ayarla](${krozeem})
   <a:oembeyldz:830026533636276255> [m+kickyetkilisi-ayarla](${krozeem})
   <a:oembeyldz:830026533636276255> [m+bansistemi-kapat](${krozeem})
   <a:oembeyldz:830026533636276255> [m+kicksistemi-kapat](${krozeem})
   <a:oembeyldz:830026533636276255> [m+nuke](${krozeem})
   <a:oembeyldz:830026533636276255> [m+sohbet-aç/kapat](${krozeem})
   <a:oembeyldz:830026533636276255> [m+uyarı](${krozeem})
    `)
     .addField('<a:dnd:831834557233102888> **__Metassa Botu Nedir?__**', 
    `<a:slk:830538658741747742> **__Matessa Botu Guard + Moderasyon + Kullanıcı + Eğlence Botudur.Kendisi 12.04.2021 12:44 Saatinde yapılmaya başladı.Ve kısa sürede insanlar tarafından sevilmeye başladı.Eğer botu sevdiysen [Eklemeyi](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot) Unutma!__**`)
    .setImage('')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'matessa' | args[0] === 'matessa') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.com) | [Destek Sunucusu](' + codare + ') | [Oy Ver](https://discord.com) | [Web Sitesi](https://discord.com)')
.setThumbnail(client.user.avatarURL())
.setColor("BLUE")
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
message.channel.send(embed)
} else {

}
}

exports.conf = {
    aliases: []
}
exports.help = {
    name: "moderasyon-yardım"
}