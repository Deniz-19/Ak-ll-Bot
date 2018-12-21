const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Çaya Şeker Attı!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://images-ext-2.discordapp.net/external/eAld_JG27uG5qhbjvyn-CyKwGvp3rQ8lDX5Pec03Ffo/https/goo.gl/ZaBk9C?width=400&height=227`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çayaşekerat',
  description: 'Çaya Şeker Atar.',
  usage: 'çayaşekerat'
};
