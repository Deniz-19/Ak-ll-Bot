const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id != "486269799358267393") return message.channel.send("Bu komutu sadece botun sahibi kullanabilir!");

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Komutun yanýna birþey yazmalýsýnýz!');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj baþarýyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanýcýya gönderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyurbot'],
  permLevel: 4
};

exports.help = {
  name: 'duyurbot',
  description: 'Ýstediðiniz þeyi bota duyurtur.',
  usage: 'duyurbot'
};