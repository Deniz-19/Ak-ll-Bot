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
  .addField("Botun Davet Linki : https://discordapp.com/api/oauth2/authorize?client_id=502469577695821825&permissions=8&scope=bot", )
	.setThumbnail("  ");
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet', 'davt', 'davet', 'botdavet', 'bdavet', 'davet', 'bot davet', 'botdavet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};
