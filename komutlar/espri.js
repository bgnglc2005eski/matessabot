const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("<a:acf06f3a6405432e9fba107f86ddbe78:808663412636647424> Matessa | Espri yükleniyor.").then(message => {

    var egsecode = [
 
      "Seni görünce; \ngözlerim dolar, \nkulaklarım euro.",
      "Kar üzerinde yürüyen adama ne denir. Karabasan.",
      "Yıkanan Ton’a ne denir? Washington!",
      "+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!",
      "+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.",
      "+Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.",
      "En güzel yemek yapan Ceren hangisidir? \nten**CEREN**.",
      "+Tuvaletteki 10’a ne denir?\n-Ne denir?\nsif**on** denir.",
      "Yemeğin suyuna kim bandı?\nKoli **bandı**.",
      "Aya ilk bayrağı kim dikmiştir?\n Terzi.",
      "İneklerin sevmediği element?\n Az-Ot.",
      "Almanya'da **Almanlar** yaşıyorsa, Sakarya'da **sakarlar** mı yaşar?",
      "+Abi sana Sıla'nın selamı var.\n-Hangi Sıla?\n+Gayri Safi Milli Ha**Sıla**"

    ];

    var egsecode = egsecode[Math.floor(Math.random() * egsecode.length)];

    message.edit(`${egsecode}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["espiri", "espri-yap", "yap-espri", "yapbi-espri"],
  permLevel: 0
};

exports.help = {
  name: "espri"
};
//EgSa v12 Eğlence Botu Altyapısı
//Çalınması Yasaktır!!
//iyi Kullanmlar!