const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, params) => {
  message.channel.send(':clock1: | Fotoğraf Yükleniyor..')
  kingsman1 = "https://media.giphy.com/media/PWTlFZAPjQ0SY/giphy.gif"; kingsman2 = "https://media.giphy.com/media/tuhEdNmHsOXdu/giphy.gif"; kingsman3 = "https://media.giphy.com/media/zsEBZLa9WMR4Q/giphy.gif"; kingsman4 = "https://media.giphy.com/media/KOfyaNVkdb1WU/giphy.gif"; kingsman5 = "https://media.giphy.com/media/twlQIbOvZ5lss/giphy.gif"; kingsman6 = "https://media.giphy.com/media/3oz8xwOdeimwCtRWMg/giphy.gif";
    number = 3,2,4,1,5,6
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1; 
    switch(random) {
        case 1: message.channel.send({ files: [kingsman1] }); message.channel.bulkDelete(1); break;
        case 2: message.channel.send({ files: [kingsman2] }); message.channel.bulkDelete(1); break;
        case 3: message.channel.send({ files: [kingsman3] }); message.channel.bulkDelete(1); break;
        case 4: message.channel.send({ files: [kingsman4] }); message.channel.bulkDelete(1); break;
        case 5: message.channel.send({ files: [kingsman5] }); message.channel.bulkDelete(1); break;
        case 6: message.channel.send({ files: [kingsman6] }); message.channel.bulkDelete(1); break;
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kingsman'],
  permLevel: 0
};

exports.help = {
  name: 'kingsman',
  description: 'Kingsman Flim Karakterinin Gif Fotoğraflarını Gösterir.',
  usage: 'kingsman'
};
