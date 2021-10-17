const { MessageEmbed } = require('discord.js');
const moment = require("moment");
const permler = {
    "ADMINISTRATOR": "Yönetici",
    "CREATE_INSTANT_INVITE": "Davet Oluştur",
    "KICK_MEMBERS": "Üyeleri At",
    "BAN_MEMBERS": "Üyeleri Yasakla",
    "MANAGE_CHANNELS": "Kanalları Yönet",
    "MANAGE_GUILD": "Sunucuyu Yönet",
    "ADD_REACTIONS": "Tepki Ekle",
    "VIEW_AUDIT_LOG": "Denetim Kaydını Görüntüle",
    "PRIORITY_SPEAKER": "Öncelikli Konuşmacı",
    "STREAM": "Yayın Aç",
    "VIEW_CHANNEL": "Kanalları Gör",
    "SEND_MESSAGES": "Mesaj Gönder",
    "SEND_TTS_MESSAGES": "Metin Okuma Mesajı Gönder",
    "MANAGE_MESSAGES": "Mesajları Yönet",
    "EMBED_LINKS": "Bağlantı Yerleştir",
    "ATTACH_FILES": "Dosya Ekle",
    "READ_MESSAGE_HISTORY": "Mesaj Geçmişini Oku",
    "MENTION_EVERYONE": "@everyone, @here ve Tüm Rollerden Bahset",
    "USE_EXTERNAL_EMOJIS": "Harici Emojiler Kullan",
    "VIEW_GUILD_INSIGHTS": "Sunucu Bilgilerini Görüntüle",
    "CONNECT": "Bağlan",
    "SPEAK": "Konuş",
    "MUTE_MEMBERS": "Üyeleri Sustur",
    "DEAFEN_MEMBERS": "Üyeleri Sağırlaştır",
    "MOVE_MEMBERS": "Üyeleri Taşı",
    "USE_VAD": "Ses Eylemini Kullan",
    "CHANGE_NICKNAME": "Kullanıcı Adı Değiştir",
    "MANAGE_NICKNAMES": "Kullanıcı Adlarını Yönet",
    "MANAGE_ROLES": "Rolleri Yönet",
    "MANAGE_WEBHOOKS": "Webhook'ları Yönet",
    "MANAGE_EMOJIS": "Emojileri Yönet"
  };
exports.run = async (bot, message, args) => {
    if (!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send("<a:XTik:810223550262804530> | Gösteremiyorum,Çünkü **ROLLERİ YÖNET** Yetkim Yok!");
    let role = message.mentions.roles.first() || args[0];
    if (!role) return message.channel.send('<a:slk:830538658741747742> | Lütfen Bir **ROL** Giriniz!')
    try {
    let asıl = message.guild.roles.cache.get(role.id || role);
    let hex = asıl.hexColor.toString().slice(1)
    let izinler = asıl.permissions.toArray().slice(0, 8).map((r, index) => `\`${index + 1}.\` ${permler[r]}`).join('\n')
    let izinler2 = asıl.permissions.toArray().map((r, index) => `\`${index + 1}.\` ${permler[r]}`).join('\n')
    let izin = asıl.permissions.toArray().includes('ADMINISTRATOR') ? `<a:cyrexmorsey:827219209347268690> Yönetici <a:cyrexmorsey:827219209347268690>\n<a:onemlo:827218882431025152> | Yönetici yetkisi olduğu için diğer ${asıl.permissions.toArray().length - 1} yetki sıralanmadı.` : asıl.permissions.toArray().length > 9 ? izinler + `\n<a:yldz1:829995691594088458> ${asıl.permissions.toArray().length - 8} Adet fazladan yetki bulunmaktadır.` : izinler2
    let rolüyeler = asıl.members.size < 9 ? asıl.members.array().map((r, index) => `\`${index + 1}.\` ${r}`).join('\n') : asıl.members.array().slice(0, 8).map((r, index) => `\`${index + 1}.\` ${r}`).join('\n') + `\n<a:yldz1:829995691594088458> ${asıl.members.size - 8} Kişide daha bulunmaktadır.`
    let embed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/avatars/831055801992740875/2d8190d06439c114fc26a229d35739e6.webp?size=2048`)
    .setColor(asıl.hexColor)
    .setFooter(`Rol Kurulma Tarihi: ${moment(role.createdAt).format("DD/MM/YYYY")}`)
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .addField(`<a:yldz1:829995691594088458> Rol Bilgileri`,`**<a:yldz1:829995691594088458> ID:** ${asıl.id}\n**<a:yldz1:829995691594088458> Adı:** ${asıl.name}\n**<a:yldz1:829995691594088458> Renk Kodu:** ${asıl.hexColor.toUpperCase()}\n**<a:yldz1:829995691594088458> Sıralaması:** ${asıl.rawPosition ? asıl.rawPosition : '1'}/${message.guild ? message.guild.roles.cache.size : '1'}\n**<a:yldz1:829995691594088458> Etiketlenebilir:** ${asıl.mentionable ? 'Evet' : 'Hayır'}`)
    .addField(`Role Sahip Kullanıcılar (${asıl.members.size})`, `${!rolüyeler ? 'Bu role sahip kimse bulunmuyor.' : rolüyeler}`)
    .addField(`Rol Yetkileri (${asıl.permissions.toArray().length})`, `${!izin ? 'Bulunamadı.' : izin}`)
    message.channel.send(embed)
    } catch(e) {
        message.channel.send('Rol bulunamadı lütfen girdiğiniz bilgilerin doğru olduğundan emin olunuz.')
    }
};
exports.conf = { 
enabled: true, 
guildOnly: false, 
aliases: [], 
permLevel: 0
};
exports.help = { 
name: "rolbilgi", 
description: "Belirtilen rolün bilgilerini gösterir.", 
usage: "rolbilgi [ rol/id ]" 
};