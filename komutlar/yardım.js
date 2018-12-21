const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", ` **a.eğlence** = Eğlence Komutlarını Gösterir `)
  .addField("**» Kullanıcı Komutları**",`**a.kullanıcı** = Kullanıcı Komutlarını Gösterir `)
  .addField("**» Yetkili Komutları**", `**a.yetkili** = Yetkili Komutlarını Gösterir `)
  .addField("**» Botun Ana Komutları**", " **a.anakomutlar** = Botun Ana Komutlarını Gösterir  " )
  .setFooter('Akıllı Bot#7271 - v0.0.1')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
