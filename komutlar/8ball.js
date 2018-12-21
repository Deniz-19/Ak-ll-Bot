const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
if(!args[0]) {
  const errEmbed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setAuthor('HATA')
  .setTitle(':exclamation: Kullanımı: **&8ball (soru)**');
  message.channel.send({embed: errEmbed})
  return;
}
var sayings = ["It is certain",
                    "It is decidedly so",
                    "Without a doubt",
                    "Yes, definitely",
                    "You may rely on it",
                    "As I see it, yes",
                    "Most likely",
                    "Outlook good",
                    "Yes",
                    "Signs point to yes",
                    "Reply hazy try again",
                    "Ask again later",
                    "Better not tell you now",
                    "Cannot predict now",
                    "Concentrate and ask again",
                    "Don't count on it",
                    "My reply is no",
                    "My sources say no",
                    "Outlook not so good",
                    "Very doubtful"];

      var result = Math.floor((Math.random() * sayings.length) + 0);
      const ballEmb = new Discord.RichEmbed()
      .setColor(0x00FFFF)
      .setAuthor('8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png')
      .addField(args, sayings[result]);
      message.channel.send({embed: ballEmb})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Alkış gifi gönderir.',
  usage: '8ball'
};
