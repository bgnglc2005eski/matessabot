const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();

exports.run = async (client, message, args) => {
 if(!message.member.roles.cache.has(db.fetch(`banyetkilisi_${message.guild.id}`))) {
    return message.channel.send("<a:XTik:810223550262804530> | Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
   }
  
   const codework = await db.fetch(`banlog_${message.guild.id}`)
   if(codework == null) return message.channel.send('<a:onemlo:827218882431025152> | Lütfen BanLog Kanalı Ayarla!');
  
  let member = message.member
  let guild = message.guild
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let banlogkanalı = await db.fetch(`banlog_${member.guild.id}`);
  let banlog = member.guild.channels.cache.find(name => banlogkanalı);
  if (message.mentions.users.size < 1) return message.reply('<a:onemlo:827218882431025152> | Kimi banlayacağını yazmalısın.');
  if (reason.length < 1) return message.reply('<a:onemlo:827218882431025152> |Ban sebebini yazmalısın.');

  if (!message.guild.member(user).bannable) return message.reply('<a:onemlo:827218882431025152> | Yetkili Kişileri Banlayamam.');
  message.guild.members.ban(user);
  message.channel.send(`${message.author} Ban İşlemi Başarılı!`)

  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Yapılan İşlem:','Ban')
    .addField('<a:sarnar:831787392389218314> Banlanan:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('<a:sarnar:831787392389218314> Banlayan:', `${message.author.username}#${message.author.discriminator}`)
    .addField('<a:sarnar:831787392389218314> Ban Sebebi', reason);
  message.guild.channels.cache.get(db.fetch(`banlog_${message.guild.id}`)).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
}