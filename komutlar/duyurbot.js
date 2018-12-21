const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id != "486269799358267393") return message.channel.send("Bu komutu sadece botun sahibi kullanabilir!");

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Komutun yan�na bir�ey yazmal�s�n�z!');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj ba�ar�yla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullan�c�ya g�nderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyurbot'],
  permLevel: 4
};

exports.help = {
  name: 'duyurbot',
  description: '�stedi�iniz �eyi bota duyurtur.',
  usage: 'duyurbot'
};