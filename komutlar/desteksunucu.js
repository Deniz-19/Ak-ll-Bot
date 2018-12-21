const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel Mesajlarına Davet Linkimi Attım! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Yapımcı**", " Deniz Özdemir ", )
  .addField("**❯ Sürüm**", " v0.0.1 ", )
  .addField("Destek Sunucusu Davet Linki : ** https://discord.gg/tqstGxP ** ", )
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'desteksunucusu',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'desteksunucusu'
};
