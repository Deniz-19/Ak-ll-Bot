const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('pcaç')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Bilgisayar açılırken mavi ekran verdi ya hu! Hep böyle oluyor saten bu tamirciye götürcem.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media0.giphy.com/media/YDj8Ot6mIbJYs/giphy.gif`)
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
  name: 'pcaç',
  description: 'Bilgisayar açarsınız',
  usage: 'pcaç'
};