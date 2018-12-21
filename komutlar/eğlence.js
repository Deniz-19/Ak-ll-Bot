const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", ` \na.atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \na.starwars = StarWars (Pixel Formatında) Filmini Gösterir. \na.banned = Dene ve Gör \na.kahkaha = Kahkaha Atarsınız \na.herkesebendençay = Herkese Çay Alırsınız. \na.koş = Koşarsınız. \na.çayiç = Çay İçersiniz. \na.çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \na.çayaşekerat = Çaya Şeker Atarsınız. \na.yumruk-at = Yumruk Atarsınız. \na.şanslısayım = Bot Sizin Şanslı Sayınızı Söyler. \n-sigara = Sigara İçersiniz. \n-espri = Bot rastgele bir espri gönderir. \n-kurabiye = Gel Canım Sana Kurabiye Vereceğim. \na.vaporwave = İstediğiniz sayıyı yada harfi estetik ameliyatından geçirip size gönderir :D \na.balıktut = Balık Tutarsınız İyi Şanslar Koçum :D \na.bayrak = Türkiye Bayrağını Gösterir. \na.stresçarkı = Stres Çarkı çevirirsiniz :D \na.kaccm = Aletinizin Kaç Cm Olduğunu Gösterir :D \na.rastgeleşifre = Size rastgele bir şifre gösterir hemen silin kimse görmesin :D \na.tkm = Taş Kağıt Makas oynarsınız Dikkat Edin Bot Sizi Yenmesin :D     `)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlen', 'eğlence', 'eğlen', 'eğlenc'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'eğlence'
};
