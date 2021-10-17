const Discord = require("discord.js");
const fs = require('fs');

exports.run = (client, msg, args, message) => {

if(!args[0]) {
  
msg.reply("<a:ayarlar:810222847510446131> | Lütfen sadece `aç` veya `kapat` şeklinde bir ayar giriniz.")
  
} else {
  
if(!["aç", "kapat"].includes(args[0])) {

msg.reply("<a:ayarlar:810222847510446131> | Lütfen sadece `aç` veya `kapat` şeklinde bir ayar giriniz.")

  
} else {
  
if(args[0] == "aç") {
try {
  
let dosya = JSON.parse(fs.readFileSync('./ayarlar/everhereengel.json', 'utf8'));

dosya[msg.guild.id] = {
sistem: true
}
  
fs.writeFile('./ayarlar/everhereengel.json', JSON.stringify(dosya), (err) => {
  
if(err) throw err;
})
  
msg.reply("<a:saritik:829617360204988436> | Sistem başarıyla açıldı!")
  
} catch (e) {
  
console.log(e);
}
  
} else 
  
if(args[0] == "kapat") {
try {
  
let dosya = JSON.parse(fs.readFileSync('./ayarlar/everhereengel.json', 'utf8'));

dosya[msg.guild.id] = {
sistem: false
}

fs.writeFile('./ayarlar/everhereengel.json', JSON.stringify(dosya), (err) => {

if(err) throw err;
})

msg.reply("<a:saritik:829617360204988436> | Sistem başarıyla kapatıldı!")
  
  
} catch (e) {
  
console.log(e);
}
  
}
}
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ever-here-engel'],
  permLevel: 0
};
exports.help = {
  name: "eh-engel",
  description: "everyone ve here engeller",
  usage: "eh-engel"
};