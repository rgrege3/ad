const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setImage("https://cdn.discordapp.com/attachments/834125768787099719/834162663993901126/standard.gif")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/790999702765961258/791775226186563635/6faf3b2ff385f75cc6b46e61e60c1979.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        ""
    )
    .addField(
      ` Komutlar`,
      `
 
 | **n!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız.
 | **n!kullanıcı:** Kullanıcı komutlarını görürsünüz.
`)



    .addField(
      ` Bilgilendirme`,
      `
 | **Nays Bot Her Gün Güncelleniyor!**. `
    )
  
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};


exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
