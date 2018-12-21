const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let replies = ["Bizim CD sürücümüz ehliyeti nereden almış acaba?", "Cem Uzan, üstünü örteyim.", "Bu Ericsson, başka erik yok.", "Tebrikler kazandınız, şimdi tencere oldunuz!", "Adamın biri gülmüş, saksıya koymuşlar.", "Adamın biri kızmış istemeye gelmişler.", "DesertHawk saz çaldı; polis tutukladı.", "Sen kamyonu al, Leonardo Da Vinci.", "Dünya dönermiş ay da köfte.", "Kaba kuvvet uyguluma, kap kırılabilir.", "Aklımı kaçırdım, 100.000 TL fidye istiyorum.", "İngilizce seviyen ne kadar iyi olursa olsun '11 years' kelimelerini içinden 'on bir years' diye okumaya mahkumsun.", "Senden was geçtim ya da boşver ya were geçeyim.", "Ben Yedigün içiyorum, sen Onbeşgün iç.", "İzne çıkacam ama çok yüksek merdiven lazım.", "Son gülen en geç anlayandır.Yaş olmuş 35 babam sende göz var oğlum dedi. Bunu 35 yıl sonra mı fark ettin babacım. Çok şaşırdım.", "Aykut gol atamayınca ne demiş? I couldnt.", "Tenyalar bağırsakta yaşar, bağırmasakta.", "Dondurmayı ben yalamam, himalayalar.", "Adamın birisi televizyona çıkmış bir daha indirememişler.",];

  	let result = Math.floor((Math.random() * replies.length))

  	const ball = new Discord.RichEmbed()
  	.setAuthor(message.author.tag, message.author.avatarURL)
  	.setColor('RANDOM')
  	.setDescription(replies[result]);
  	message.channel.sendEmbed(ball)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Rastgele espri gönderir.',
  usage: 'espri'
};
