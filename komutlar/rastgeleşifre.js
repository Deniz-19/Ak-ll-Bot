const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Şifre yükleniyor...').then(message => {
      var espriler = ['12161464161568146494şifre','şifremibulanıngötünüsikeyim123','lkk&0015zam***129','3kbhj56987js.me%100','captaiiin&&&priceVOL123',',,losazn&&%123melzbs.13','123qqq96-/+mela','meee+*/-**me..89001002,'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre'],
  permLevel: 0
};

exports.help = {
  name: 'rastgeleşifre',
  description: 'random şifre atar',
  usage: 'rastgeleşifre'
};

