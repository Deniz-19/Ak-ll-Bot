const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Botun Ana Komutları**", ` a.yardım = BOT Komutlarını Atar. \na.botbilgi = BOT Kendisi Hakkında Bilgi Verir. \na.ping = BOT Gecikme Süresini Söyler. \na.davet = BOT Davet Linkini Atar. \na.istatistik = BOT İstatistiklerini Gösterir. \na.yapımcım = Botun Yapımcısını Gösterir. \na.desteksunucusu = Botun destek sunucusunun davet linkini gönderir. `)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komut', 'ak', 'ana', 'anakomut', 'komutana'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: '.',
  usage: 'anakomutlar'
};


