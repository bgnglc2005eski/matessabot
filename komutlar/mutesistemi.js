const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let korzeab = "https://discord.gg/UfPx9SZyPQ"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Matessa Bot Mute Yardım Menüsü', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `m+avatar`\n**Örnek:** `m+eh-engel`\n[Metassa Botunu Hemen Ekle](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot)')
    .addField('Matessa Bot Mute Komutları:', 
    `<a:9053_monkey_christmas_dash:808663330470101013> [m+mute](${korzeab})
    <a:9053_monkey_christmas_dash:808663330470101013> [m+mute-yetkili-rol @rol](${korzeab})
    <a:9053_monkey_christmas_dash:808663330470101013> [m+mute-rol @rol](${korzeab})
    `)
     .addField('<a:dnd:831834557233102888> **__Mute Sistemi Ne İşe Yarar?__**', 
    `<a:slk:830538658741747742> **__Sunucudaki üyeleri susturmaya yarayan bir sistemdir.İnan bana bu sistem bir harika!Eğer botu sevdiysen [Eklemeyi](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot) Unutma!__**`)
    .setImage('')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'matessa' | args[0] === 'matessa') {
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
    name: "mutesistemi"
}