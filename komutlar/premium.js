const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
  
  let prefix = 'm+'// botun prefixi
  let sahip = '812205123685842965'// senin idn
  
if(!args[0]) return message.channel.send(`Premium sisteminden yararlanmak için bot sahibinin sizin premiumunuzu aktif etmiş olması gerekiyor.
\`${prefix}premium\` \`kontrol\``)

if(message.author.id !== sahip) {

  if(args[0] === 'kontrol') {

  let açıkmı = await data.fetch(`premium.${message.guild.id}`)
  message.channel.send(new Discord.DiscordEmbed()
                      .setColor('GREEN')
                      .setAuthor(message.guild.name, message.guild.iconURL)
                      .setDescription(`Bu sunucu için **Premium** sistemi **${açıkmı ? 'aktif' : 'kapalı'}!`)
                      .setFooter(`Matessa`)
                      .setTimestamp())
    } 

}
  
  
  if(args[0] === 'ver') {
  if(message.author.id !== sahip) return;
    
  if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
  let id = args[1]
  if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
  
  if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
  
  if(!client.guilds.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
  let açıkmı = await data.fetch(`premium.${id}`)
  if(açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif.`)
    
  data.set(`premium.${id}`, 'açık')
  message.channel.send(`${client.guilds.get(id).name} isimli sunucu için **PREMİUM** aktif edildi!`)
    
  let owner = client.guilds.get(id).owner;
  owner.send(`Merhaba **${owner.user.username}**! ${message.author.tag} isimli kişi **${client.guilds.get(id).name}** isimli sunucun için premium'u aktif etti.
Doya doya kullan!`)
    
  }
  
  if(args[0] === 'al') {
  if(message.author.id !== sahip) return;
    
  if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
  let id = args[1]
  if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
  
  if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
    
  if(!client.guilds.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
  let açıkmı = await data.fetch(`premium.${id}`)
  if(!açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif değil.`)
    
  data.delete(`premium.${id}`)
  message.channel.send(`${client.guilds.get(id).name} isimli sunucu için **PREMİUM** de-aktif edildi!`)
    
  let owner = client.guilds.get(id).owner;
  owner.send(`Merhaba **${owner.user.username}**! ${message.author.tag} isimli ki��i **${client.guilds.get(id).name}** isimli sunucun için premium'u kapattı.`)
    
  }

  
  
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'premium'
};