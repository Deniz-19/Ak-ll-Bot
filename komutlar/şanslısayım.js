const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, params) => {
  message.channel.send(':diamond_shape_with_a_dot_inside: **Senin Şanslı Sayın** :diamond_shape_with_a_dot_inside: ')
    number = 8,2,4,1,5,6,7,10,12,13,15,11,8,9,14,19,20,17,16
    var random = Math.floor(Math.random() * (number - 1 + 15)) + 0; 
    switch(random) {
        case 1: message.channel.send(':small_blue_diamond: 3 :small_blue_diamond: '); message.channel.send(" "); break;
        case 2: message.channel.send(':small_blue_diamond: 4 :small_blue_diamond: '); message.channel.send(' '); break;
        case 3: message.channel.send(':small_blue_diamond: 6 :small_blue_diamond: '); message.channel.send(' '); break;
        case 4: message.channel.send(':small_blue_diamond: 12 :small_blue_diamond: '); message.channel.send(' '); break;
        case 5: message.channel.send(':small_blue_diamond: 42 :small_blue_diamond: '); message.channel.send(' '); break;
        case 6: message.channel.send(':small_blue_diamond: 83 :small_blue_diamond: '); message.channel.send(' '); break;
        case 7: message.channel.send(':small_blue_diamond: 42 :small_blue_diamond: '); message.channel.send(' '); break;
        case 8: message.channel.send(':small_blue_diamond: 31 :small_blue_diamond: '); message.channel.send(':small_blue_diamond: :grin: :small_blue_diamond:'); break;
        case 9: message.channel.send(':small_blue_diamond: 74 :small_blue_diamond: '); message.channel.send(' '); break;
        case 10: message.channel.send(':small_blue_diamond: 1 :small_blue_diamond: '); message.channel.send(' '); break;
        case 11: message.channel.send(':small_blue_diamond: 2 :small_blue_diamond: '); message.channel.send(' '); break;
        case 12: message.channel.send(':small_blue_diamond: 5 :small_blue_diamond: '); message.channel.send(' '); break;
        case 13: message.channel.send(':small_blue_diamond: 99 :small_blue_diamond: '); message.channel.send(' '); break;
        case 14: message.channel.send(':small_blue_diamond: 19 :small_blue_diamond: '); message.channel.send(' '); break;
        case 15: message.channel.send(':small_blue_diamond: 10 :small_blue_diamond: '); message.channel.send(' '); break;
        case 16: message.channel.send(':small_blue_diamond: 38 :small_blue_diamond: '); message.channel.send(' '); break;
        case 17: message.channel.send(':small_blue_diamond: 22 :small_blue_diamond: '); message.channel.send(' '); break;
        case 18: message.channel.send(':small_blue_diamond: 52 :small_blue_diamond: '); message.channel.send(' '); break;
        case 19: message.channel.send(':small_blue_diamond: 65 :small_blue_diamond: '); message.channel.send(' '); break;
        case 20: message.channel.send(':small_blue_diamond: 76 :small_blue_diamond: '); message.channel.send(' '); break;
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şanslısayım'],
  permLevel: 0
};

exports.help = {
  name: 'şanslısayım',
  description: 'Şanslı Sayınızı Gösterir',
  usage: 'şanslısayım'
};
