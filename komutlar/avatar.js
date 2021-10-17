const Discord = require('discord.js')
exports.run = function(client, message, args) {
const codework = message.mentions.users.first()
let user;
if (message.mentions.users.first())  {user = message.mentions.users.first();}
 else {user = message.author;}
return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**${user.tag}**\nBuyur Avatarın:`)
.setImage(user.displayAvatarURL()))
                            
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["pp"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar'
  };
