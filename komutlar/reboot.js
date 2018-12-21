const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`yenile` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
message.channel.sendMessage(' ```Botun yeniden başlatılmasına onay veriyorsanız hemen evet yazın,Kalan Süre 30 Saniye.``` ')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`**Bot yeniden başlatılıyor...**`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('**Yeniden başlatma işlemi iptal edildi.**');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'yenile',
  description: '[Admin Komutu]',
  usage: 'yenile'
};

