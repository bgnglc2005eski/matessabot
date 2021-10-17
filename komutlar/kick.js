const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has(db.fetch(`kickyetkilisi_${message.guild.id}`))) {
    return message.channel.send("<a:XTik:810223550262804530> | Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
   }
  
   const codework = await db.fetch(`kicklog_${message.guild.id}`)
   if(codework == null) return message.channel.send('<a:onemlo:827218882431025152> | Lütfen Kicklog Kanalı Ayarla!');
  
  let member = message.member
  let guild = message.guild
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let kicklogkanalı = await db.fetch(`kicklog_${member.guild.id}`);
  let kicklog = member.guild.channels.cache.find(name => kicklogkanalı);
  if (message.mentions.users.size < 1) return message.reply('<a:onemlo:827218882431025152> | Kimi kickleyeceğimi yazmalısın.');
  if (reason.length < 1) return message.reply('<a:onemlo:827218882431025152> | Kick sebebini yazmalısın.');

  if (!message.guild.member(user).kickable) return message.reply('<a:onemlo:827218882431025152> | Yetkili Kişileri Kickleyemem.');
  message.guild.member(user).kick();
  message.channel.send(`${message.author} Kick İşlemi Başarılı! | <a:yrnex_tiks:810222648113496075>`)

  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Yapılan İşlem:','Kick')
    .addField('<a:oembeyldz:830026533636276255> Kicklenen:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('<a:oembeyldz:830026533636276255> Kickleyen:', `${message.author.username}#${message.author.discriminator}`)
    .addField('<a:oembeyldz:830026533636276255> Kick Sebebi', reason);
  message.guild.channels.cache.get(db.fetch(`kicklog_${message.guild.id}`)).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'kullanıcı [kullanıcı] [sebep]'
};