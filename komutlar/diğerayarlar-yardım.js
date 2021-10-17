const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let dızlamak = "https://discord.gg/UfPx9SZyPQ"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Matessa Bot Diğer Ayarlar Yardım Menüsü', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `m+avatar`\n**Örnek:** `m+eh-engel`\n[Metassa Botunu Hemen Ekle](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot)')
    .addField('Matessa Bot Diğer Ayarlar Komutları:', 
    `<a:oembeyldz:830026533636276255> [m+mutesistemi](${dızlamak})
    <a:oembeyldz:830026533636276255> [m+youtubesistemi](${dızlamak})
    <a:oembeyldz:830026533636276255> [m+otorolsistemi](${dızlamak})
    <a:oembeyldz:830026533636276255> [m+çekilişsistemi](${dızlamak})
    `)
     .addField('<a:dnd:831834557233102888> **__Diğer Ayarlar Ne İşe Yarar?__**', 
    `<a:slk:830538658741747742> **__Diğer ayarlar botta ayrıyetten olan sistemleri gösterir.İnan bana bu sistemler harika!Eğer botu sevdiysen [Eklemeyi](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot) Unutma!__**`)
    .setImage('')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'matessa' | args[0] === 'matessa') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.com) | [Destek Sunucusu](' + dızlamak + ') | [Oy Ver](https://discord.com) | [Web Sitesi](https://discord.com)')
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
    name: "diğerayarlar-yardım"
}