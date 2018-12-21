const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + `  Kahkaha Attı!`)
    .setColor(3447003)
    .setDescription('')
  .setImage(`https://media.giphy.com/media/3ohc1h5TqjhN8jtGyk/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }

    let username = member.user.username;
    member.send('Sunucuya Hoş Geldin!');
    member.guild.defaultChannel.send('');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kahkaha', 'smile'],
  permLevel: 0
};

exports.help = {
  name: 'kahkaha',
  description: 'Kahkaha Atarsınız.',
  usage: 'kahkaha'
};
