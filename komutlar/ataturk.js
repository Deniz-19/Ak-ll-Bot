const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  message.channel.send(':clock1: | Fotoğraf Yükleniyor..')
  ataturk1 = "./img/ataturk/1.jpg"; ataturk2 = "./img/ataturk/2.jpg"; ataturk3 = "./img/ataturk/3.jpg"; ataturk4 = "./img/ataturk/4.jpg"; ataturk5 = "./img/ataturk/5.jpg"; ataturk6 = "./img/ataturk/6.jpg";
    number = 3,2,4,1,5,6
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1; 
    switch(random) {
        case 1: message.channel.send({ files: [ataturk1] }); message.channel.bulkDelete(1); break;
        case 2: message.channel.send({ files: [ataturk2] }); message.channel.bulkDelete(1); break;
        case 3: message.channel.send({ files: [ataturk3] }); message.channel.bulkDelete(1); break;
        case 4: message.channel.send({ files: [ataturk4] }); message.channel.bulkDelete(1); break;
        case 5: message.channel.send({ files: [ataturk5] }); message.channel.bulkDelete(1); break;
        case 6: message.channel.send({ files: [ataturk6] }); message.channel.bulkDelete(1); break;
};
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürk', 'ata'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Rastgele Atatürk Fotoğrafların Gösterir.!',
  usage: 'atatürk'
};
