const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.delete();
    message.guild.createChannel(`talep-${message.author.id}`, 'text').then(ch => {
        ch.overwritePermissions(message.member.roles.first(),{
            VIEW_CHANNEL: false,
        }).catch()
        message.guild.roles.forEach((role) => {
            if (!role.hasPermission("MANAGE_MESSAGES")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: false,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        })

        const embed = new Discord.RichEmbed()
        .setAuthor("» Gabriella | Canlı Destek")
        .setDescription("**Merhaba! Müsait bir yetkilimiz sizinle ilgilenecektir.\nEğer ilgilenen olmazsa birisiyle özel mesaja geçebilirsiniz. [<kapat]**")
        .setFooter('» Gabriella | Canlı Destek', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed).catch()
        ch.awaitMessages((msg)=> {
            if (msg.content === "kapat") {
                ch.send("`Talebiniz iptal ediliyor!`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'talep',
};
