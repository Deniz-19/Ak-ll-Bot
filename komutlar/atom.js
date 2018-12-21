const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Atom')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Afferim Sana Salak Bir Ülke Yi Havaya Uçurdun!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`http://gifgalaksi.com/upload/atom_bombas_nykleer.gif`)
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
  name: 'atom',
  description: 'Atom Bombası Atarsınız.',
  usage: 'atom'
};
