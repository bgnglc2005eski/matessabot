const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var degisenOynuyor = [
    
    "😍 Matessa 7/24 Koruyor!",
    "🧐 Sunucun Benle 7/24 Güvende!",
    "👌 Efsane Moderasyon,Sistem Komutları",
    "✨ THE KROZE!!"
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 30000);
  
  client.user.setStatus("idle"); //dnd, idle, online, offline
  
}