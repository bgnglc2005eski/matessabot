const Discord = require('discord.js');
const codare = require('quick.db');

exports.run = async(client, message, args) => {
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
      let kanal = message.mentions.channels.first() || args[0]
      if(!kanal) return message.channel.send('<a:slk:830538658741747742> | **Rol koruma log kanalını belirtmelisin!**')
      codare.set(`rolk_${message.guild.id}`, kanal.id)
      message.channel.send('<a:pembetk:831787231756812298> | **Rol koruma sistemi başarıyla aktif edildi, log kanalı <#'+kanal+'> Olarak ayarlandı.**')

      if(args[0] === 'kapat') {
        if(!codare.fetch(`rolk_${message.guild.id}`)) message.channel.send('Rol koruma sistemi aktif edilmemiş.')
        codare.delete(`rolk_${message.guild.id}`)
        message.channel.send('<a:pembetk:831787231756812298> | **Rol koruma sistemi kapatıldı, log kanalı sıfırlandı!**')
      }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['rolkoruma'],
  permlevel: 0
};

exports.help = {
  name: "rol-koruma",
  description: 'Rol koruma sistemini açarsınız.',
  usage: 'rol-koruma'
}
