const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if (message.author.id !== ('468677181342744576')) return message.channel.send("Huh, neyseki yetkin yok.");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription(':negative_squared_cross_mark: Yayın isim durumu!');
    message.channel.send({ embed });
  }





  else if (status.length !== 0) {
   client.user.setPresence({ game:  { name: `${status}`, url: 'https://twitch.tv/GabrielSSQ', type: 1 } });

  const embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setDescription(':white_check_mark: Başarıyla yayın linkini değiştirdin!');
  message.channel.send({ embed }).then(msg => msg.delete(5000));
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['statu', 'statuse'],
  permLevel: 1
};

exports.help = {
  name: 'statu',
  description: '',
  usage: 'stats'
};
