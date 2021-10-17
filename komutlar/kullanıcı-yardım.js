const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let korzeab = "https://discord.gg/UfPx9SZyPQ"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Matessa Bot Yardım Menüsü', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `m+avatar`\n**Örnek:** `m+eh-engel`\n[Matessa Botunu Hemen Ekle](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot)')
    .addField('BodyGuard Bot Kullanıcı Komutları:', 
    `<a:oembeyldz:830026533636276255> [m+afk](${korzeab})
    <a:oembeyldz:830026533636276255> [m+avatar](${korzeab})
   <a:oembeyldz:830026533636276255> [m+davet](${korzeab})
   <a:oembeyldz:830026533636276255> [m+say](${korzeab})
   <a:oembeyldz:830026533636276255> [m+istatistik](${korzeab})
   <a:oembeyldz:830026533636276255> [m+sunucubilgi](${korzeab})
   <a:oembeyldz:830026533636276255> [m+ping](${korzeab})
   <a:oembeyldz:830026533636276255> [m+goldbilgi](${korzeab})
   <a:oembeyldz:830026533636276255> [m+rolbilgi](${korzeab})
    `)
     .addField('<a:dnd:831834557233102888> **__Metassa Botu Nedir?__**', 
    `<a:slk:830538658741747742> **__Matessa Botu Guard + Moderasyon + Kullanıcı + Eğlence Botudur.Kendisi 12.04.2021 12:44 Saatinde yapılmaya başladı.Ve kısa sürede insanlar tarafından sevilmeye başladı.Eğer botu sevdiysen [Eklemeyi](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot) Unutma!__**`)
    .setImage('')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'BODYGUARD' | args[0] === 'bodyguard') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.com) | [Destek Sunucusu](' + korzeab + ') | [Oy Ver](https://discord.com) | [Web Sitesi](https://discord.com)')
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
    name: "kullanıcı-yardım"
}