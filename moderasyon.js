const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Nays Bot v12 sürümüyle sizlerle")
.setTitle("  Nays Moderasyon komutları" )
 .setTimestamp()
.setDescription("  **n!ping** : Botun Pingini Gösterir \n**n!ban** : Etiketlenen Kişiyi direk banlar \n **n!unban** Banlanan bir Kişiyinin banını açar \n**n!kick** : Etiketlenen kişiyi kickler \n**n!sunucubilgi** : Sunucunun Bilgisini paylaşır \n **n!sil** : İstediğiniz kadar mesaj siler \n**n!yetkilerim** : Sahip olduğum yetkileri söylerim \n**n!sohbetkapat** : yazdığınız kanala yazı yazmayı kapator\n **n!sohbetaç** :yazdığınız kanala yazı yazmayı açar ")
.setImage("https://cdn.discordapp.com/attachments/834125768787099719/834162663993901126/standard.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}