const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} bir stres çarkı çevirdi!`,
            image: {
                url: "https://i.imgur.com/KJJxVi4.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, stres çarkın ${bitiş.toFixed(2)} saniye döndü.`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'stresçarkı', 
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'stresçarkı'
};