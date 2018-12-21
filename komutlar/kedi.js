const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`)

    let dogembed = new Discord.RichEmbed()
    .setColor("#ff9000")
    .setTitle("Köpek")
    .setImage('body.file')

    message.channel.send(dogembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['köpek'],
  permLevel: 0
};

exports.help = {
  name: 'köpek',
  description: 'Rastgele Köpek Fotoğrafları Gösterir.',
  usage: 'köpek'
};
