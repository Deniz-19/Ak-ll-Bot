const fs = require("fs");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Bu Komutu Kullanmak Ýçin `Rolleri Yönet` Yetkisine sahip olmalýsýn.");
    let otorol = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/otorol.json", "utf8"));
    if (!args[0]) { 
        otorol[message.guild.id] = {
            role: 0
        };
        fs.writeFile("./sunucuyaözelayarlar/otorol.json", JSON.stringify(otorol), (err) => {
            if (err) console.log(err);
        });
        message.reply("Lütfen bir rol ismi yazýn.");
   }
    if (args[0]) { 
        let roles = args.join(" ");
        let role = message.guild.roles.find("name", roles);
        otorol[message.guild.id] = {
            role: role.id
        };
        fs.writeFile("./sunucuyaözelayarlar/otorol.json", JSON.stringify(otorol), (err) => {
            if (err) console.log(err)
        });
        message.reply(`Otorol Ayarlandý: **${role.name}**`);
    }
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['otorol', 'oto-rol', 'oto-rol-ayarla'],
 permLevel: 0
};

exports.help = {
 name: 'Otorol',
 description: '',
 usage: 'otorol'
};  