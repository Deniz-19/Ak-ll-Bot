const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Kullanıcı Komutları**", ` a.report = İstediğiniz Kullanıcıyı Reportlarsınız. \na.kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \na.yaz = Bota İsediğinizi Yazdırırsınız. \na.sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \na.sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \na.kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \na.avatarım = Avatarınınızı Gösterir.  `)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni', 'new', 'news', 'yenilikler'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'kullanıcı'
};
