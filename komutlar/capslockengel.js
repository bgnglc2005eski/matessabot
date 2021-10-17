const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let acod = ["ayarla", "aç", "ac"];
  let kapare = ["kapat", "sıfırla", "sifirla"];
  let acikmi = await db.fetch(`${message.guild.id}.capsengel`);
  let aredembed = new Discord.MessageEmbed()
    .setAuthor("Matessa CapsLock Engelleme")
    .setColor("RED")
    .setFooter(
      `Komut ${message.author.username} tarafından kullanıldı.`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setTimestamp();
  if (acod.includes(args[0])) {
    if (!args[1]) {
      if (acikmi)
        return message.channel.send(
          aredembed.setDescription(
            ":x: CapsLock Engelleme sitemi zaten açık bulunmakta!\nBir mesajdaki büyük harf oranı eğer mesajın `" +
              acikmi.yuzde +
              "` sinden daha fazla ise engelenecektir.\nEğerki bu oranı arttırmak veya azaltmak isterseniz `m+capsengel aç oran` (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nEğer CapsLock Engelleme sistemini kapatmak isterseniz `m+capsengel sıfırla` komutunu kullanabilirsiniz."
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("Matessa CapsLock Engelleme")
          .setDescription(
            "<a:yesiltik:829617334578053131> | CapsLock Engelleme sistemi başarıyla açıldı!\nBir mesajdaki büyük harf oranı eğer mesajın `50%` sinden daha fazla ise engelenecektir.\nEğerki bu oranı arttırmak veya azaltmak isterseniz `m+capsengel aç oran` (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nEğer CapsLock Engelleme sistemini kapatmak isterseniz `m+capsengel sıfırla` komutunu kullanabilirsiniz."
          )
          .setFooter(
            `Komut ${message.author.username} tarafından kullanıldı.`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: "50" });
    } else {
      if (isNaN(args[1]))
        return message.channel.send(
          aredembed.setDescription(
            "Oran yalnızca bir **sayı** olmalıdır. (Oran 101 den küçük 0 dan büyük bir sayı olmalıdır!)"
          )
        );
      if (args[1] >= 101)
        return message.channel.send(
          aredembed.setDescription(
            "**Oran 101 den küçük**, 0 dan büyük bir sayı olmalıdır!"
          )
        );
      if (args[1] <= 0)
        return message.channel.send(
          aredembed.setDescription(
            "Oran 101 den küçük, **0 dan büyük bir sayı olmalıdır**!"
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("Matessa CapsLock Engelleme")
          .setDescription(
            "<a:yesiltik:829617334578053131> | CapsLock Engelleme sistemi başarıyla açıldı!\nBir mesajdaki büyük harf oranı eğer mesajın `" +
              args[1] +
              "%` sinden daha fazla ise engelenecektir.\nEğerki bu oranı arttırmak veya azaltmak isterseniz `m+capsengel aç oran` (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nEğer CapsLock Engelleme sistemini kapatmak isterseniz `!capsengel sıfırla` komutunu kullanabilirsiniz.\nNot: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır."
          )
          .setFooter(
            `Komut ${message.author.username} tarafından kullanıldı.`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: args[1] });
    }
  } else if (kapare.includes(args[0])) {
    if (!acikmi)
      return message.channel.send(
        aredembed.setDescription(
          "<a:slk:830538658741747742> |CapsLock Engelleme sistemi zaten kapalı.\nEğer açmak isterseniz `!capsengel aç oran` yazabilirsiniz. (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nNot: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır."
        )
      );
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setAuthor("Matessa CapsLock Engelleme")
        .setDescription(
          "<a:yesiltik:829617334578053131> | CapsLock Engelleme sistemi başarıyla kapatıldı!\nArtık mesajlardaki büyük harfler engellenmeyecek. \nEğer tekrar açmak isterseniz `m+capsengel aç oran` komutunu kullanabilirsiniz. (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nNot: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır."
        )
        .setFooter(
          `Komut ${message.author.username} tarafından kullanıldı.`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
    );
    db.delete(`${message.guild.id}.capsengel`);
  } else {
    let acikkk;
    if (acikmi)
      acikkk = `${acikmi.yuzde}% olarak Açık**\n<a:onemlo:827218882431025152> | Eğer kapatmak isterseniz \`m+capsengel sıfırla\` yazabilirsiniz.`;
    let krozecapslock = new Discord.MessageEmbed()
      .setAuthor("CapsLock Engelleme")
      .setColor("#728bd6")
      .setDescription(
        "CapsLock Engelleme sistemi şu anda **" +
          (acikkk
            ? acikkk
            : "<a:onemlo:827218882431025152> | Kapalı**\nEğer açmak isterseniz `m+capsengel aç` yazabilirsiniz.") +
          "."
      )
      .setFooter(
        `Komut ${message.author.username} tarafından kullanıldı.`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();
    message.channel.send(krozecapslock)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [
    "buyukharfengelle",
    "caps-engelle",
    "capslockengelle",
    "capslock-engelle",
    "caps-engel",
    "capslock"
  ],
  permLevel: 4,
  kategori: "sunucu"
};
exports.help = {
  name: "capsengel",
  description:
    "Eğer açılırsa bir mesajda belirttiğiniz %de kadar harf büyük yazılmışsa o mesaj silinir.",
  usage: "capsengel aç/sıfırla oran (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)"
};
