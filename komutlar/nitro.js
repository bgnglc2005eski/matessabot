const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const egsecode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/809110694259720192/814765513481519134/nitro2.png")
.setTitle("Nitro verdim.İyi Günde Kullan!");

  message.channel.send(egsecode);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nitro","nitro-ver"],
  permLevel: `Yok`
};

exports.help = {
  name: "nitro",
  description: "beleş nitro ab",
  usage: "nitro"
};
  //EgSa v12 Eğlence Botu Altyapısı
//Çalınması Yasaktır!!
//iyi Kullanmlar!
