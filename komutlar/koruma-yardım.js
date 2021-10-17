const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let cebelitarık = "https://discord.gg/UfPx9SZyPQ"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Matessa Bot Koruma Yardım Menüsü', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `m+avatar`\n**Örnek:** `m+eh-engel`\n[Matessa Botunu Hemen Ekle](https://discord.com/api/oauth2/authorize?client_id=831055801992740875&permissions=8&scope=bot)')
    .addField('Matessa Bot Guard Komutları:', 
    `<a:oembeyldz:830026533636276255> [m+ban-koruma](${cebelitarık})
    <a:oembeyldz:830026533636276255> [m+ban-koruma-sıfırla](${cebelitarık})
    <a:oembeyldz:830026533636276255> [m+isim-reklam-koruma](${cebelitarık})
    <a:oembeyldz:830026533636276255> [m+emoji-koruma](${cebelitarık})
    <a:oembeyldz:830026533636276255> [m+anti-raid aç/kapat](${cebelitarık})
    <a:oembeyldz:830026533636276255> [m+bot-izni](${cebelitarık})
    <a:oembeyldz:830026533636276255> [m+spam-koruma](${cebelitarık})
    <a:oembeyldz:830026533636276255> [m+rol-koruma](${cebelitarık})
    <a:oembeyldz:830026533636276255> [m+kanal-koruma](${cebelitarık})
    `)
    .addField('<a:ayarlar:810222847510446131> __Guard Nedir?__', 
    `<a:dnd:831834557233102888> **Guard :** **__Sunucunuzu korumanıza yarayan komutlardır.Ve Matessa botu sunucunuzu %99 korur.__**`)
    .setImage('')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'genel' | args[0] === 'eğlence' | args[0] === 'kullanıcı' | args[0] === 'moderasyon' | args[0] === 'moderasyon2' | args[0] === 'yapılandırma' | args[0] === 'sunucu' | args[0] === 'resim' | args[0] === 'nsfw') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.com) | [Destek Sunucusu](' + cebelitarık + ') | [Oy Ver](https://discord.com) | [Web Sitesi](https://discord.com)')
.setThumbnail(client.user.avatarURL())
.setColor("BLUE")
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
message.channel.send(embed)
} else {

}
}

exports.conf = {
    aliases: ["guard-yardım"]
}
exports.help = {
    name: "koruma-yardım"
}