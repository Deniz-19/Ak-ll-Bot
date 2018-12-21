const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.guild) return ;

  
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('Bağlandım bekle şimdi şarkıyıda çalacağım!');
            const dispatcher = connection.playFile('D:\Samsung s3 mini yazılım/Burak Yeter - Tuesday ft. Danelle Sandoval.mp3');
          })
          .catch(console.log);
      } else {
        message.reply('Kardeş bi ses kanalında değilsin ki nası bağlanıp çalayım');
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['müzik'],
  permLevel: 0
};

exports.help = {
    name: 'müzik',
    description: 'daha yapım aşamasında',
    usage: 'müzik'
  };