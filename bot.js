const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "8";

client.on('ready', () => { // لما يشتغل
  client.channels.find(ch => ch.id === "555850095464284171" && ch.type === 'voice').join();
  client.user.setGame("YB's Community", "https://www.twitch.tv/alpha");
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('[           BOT IS ONLINE         ]')
});

client.on('message', message => { // اقتراح
    if (message.content.startsWith(prefix + 'sug')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})
        var args =  message.content.split(' ').slice(1).join(' ')
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
        let Room = message.guild.channels.find(`name`, "●-اقتراحات")
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
        .addField('**Suggestion**',`${args}`)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`ID: ${message.author.id}`)
        Room.sendEmbed(embed).then(c => {
            c.react('✅').then(() => 
                c.react('❌'))

        }).catch(e => console.error(e)
        )
    }
});

client.on("message", message => { // تقديم اداره
    if(!message.member.roles.some(r=>["Candidate"].includes(r.name)) ) return;        
  if(message.content.startsWith("8تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "●-التقديم-عاداره")
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك؟ 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **كم ساعه تكون متفاعل بالسيرفر؟ 🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً 🤔**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`ساعات تفاعله`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let mySupport = message.guild.roles.find('name','• Mod');
  if(message.content.startsWith("8قبول")) {
    let acRoom = message.guild.channels.find('name', '●-قبول-او-رفض');
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
    if(!mention) return message.reply('منشن شخص');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
}
});

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("8رفض")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', '●-قبول-او-رفض');
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});

client.on('message', message => { // اغلاق الروم و فتحه

    if (message.content === "8mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === "8unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});
client.on('message', function(msg) { // معلومات عن السيرفر
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('🌐 **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('🌍 ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField('🎖** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('👤** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('✅** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('📝** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('🔊** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('👑** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('🆔** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField('📅** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      .addField('😴** روم AFK**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField('🙃** الايموجيات :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => { // برودكاست
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });


client.on('ready', () => { // رتبة رانبو
    setInterval(function(){
        client.guilds.get('543732859278721026').roles.find('name', '• VIP').edit({color: 'RANDOM'})
    },20000);


})


client.on('message', message => { // معلومات الشخص
var args = message.content.split(" ").slice(1);
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate() 
var men = message.mentions.users.first();
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;
let n = d.toLocaleString();  
let x;
let y;

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else { 
var w = 'عضو';
}
let embed = new Discord.RichEmbed() 
.setColor("#502faf") 
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true) 
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
client.on("message", (message) => {
if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`8confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '8confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});

client.on("guildMemberAdd", member => {
  member.addRole(member.guild.roles.find("name","• Guest"));
});

client.on('guildMemberAdd', member => {
      client.channels.find('id', '555850095464284171').setName(`● عدد الاعضاء: ${member.guild.memberCount}`)
});

client.on('guildMemberRemove', member => {
      client.channels.find('id', '555850095464284171').setName(`● عدد الاعضاء: ${member.guild.memberCount}`)
});

client.on("message", (message) => {
 if(!message.member.roles.some(r=>["• Mod","• Boss"].includes(r.name)) ) return;
 if(message.content === '8mod') {
   message.react('⁉')
   message.channel.send('المميزات:');
   message.channel.send('- تقدر تسوي ميوت 5 مرات في اليوم');
   message.channel.send('المهام:');
   message.channel.send('- عطي ميوت لكل شخص خالف القوانين');
   message.channel.send('مدة الميوت حسب المخالفه:');
   message.channel.send('- السبام: ساعه');
   message.channel.send('- ازعاج او استفزاز في روم كتابي او صوتي: ساعتين');
   message.channel.send('- سب بكل انواعه و اشكاله: 3 ساعات');
   message.channel.send('- نشر سيرفر لشخص مو صديقه: 4 ساعات');
   message.channel.send('- تكلم عن المواضيع السياسيه او الدينيه: ساعه');
   message.channel.send('ملاحظات:');
   message.channel.send('- اذا الشخص اعاد خطأه بنفس اليوم دبل المدة');
   message.channel.send('كيف تعطي ميوت:');
   message.channel.send('#mute (مدة الميوت) (منشن الشخص)');
}
});

client.on("message", (message) => {
 if(!message.member.roles.some(r=>["• Major","• Boss"].includes(r.name)) ) return;
 if(message.content === '8major') { 
  message.react('⁉')
  message.channel.send('المميزات:');
  message.channel.send('- تقدر تعطي ميوت 10 مرات في اليوم');
  message.channel.send('- تقدر تعطي بان 5 مرات في اليوم');
  message.channel.send('المهام:');
  message.channel.send('- عطي ميوت لكل شخص خالف القوانين');
  message.channel.send('- تضيف ايموجي الي يعطيك اياه شخص عنده رتبة في اي بي');
  message.channel.send('- تعطي بان للي خرب في السيرفر سيرفايفل في الديسكورد و السيرفر');
  message.channel.send('- تصحح اخطاء الاداريين الي اصغر منك في الرتبه');
  message.channel.send('مدة الميوت حسب المخالفه:');
  message.channel.send('- السبام: ساعه');
  message.channel.send('- ازعاج او استفزاز في روم كتابي او صوتي: ساعتين');
  message.channel.send('- سب بكل انواعه و اشكاله: 3 ساعات');
  message.channel.send('- نشر سيرفر لشخص مو صديقه: 4 ساعات');
  message.channel.send('- تكلم عن المواضيع السياسيه او الدينيه: ساعه');
  message.channel.send('ملاحظات:');
  message.channel.send('- اذا الشخص اعاد خطأه بنفس اليوم دبل المدة');
  message.channel.send('كيف تعطي ميوت:');
  message.channel.send('#mute (مدة الميوت) (منشن الشخص)');
  message.channel.send('كيف تعطي بان:');
  message.channel.send('#ban (منشن الشخص)');
}
});

client.on("message", (message) => {
  if(!message.member.roles.some(r=>["• Admin","• Boss"].includes(r.name)) ) return;
  if(message.content === '8admin') {
   message.react('⁉')
   message.channel.send('المميزات:');
   message.channel.send('- تقدر تعطي ميوت 15 مرات في اليوم');
   message.channel.send('- تقدر تعطي بان 10 مرات في اليوم');
   message.channel.send('- تقدر تسوي فعاليات على راحتك');
   message.channel.send('- تقدر تجذب اعضاء الى الروم الي انت فيه');
   message.channel.send('- تقدر تغير النك نيم لاعضاء');
   message.channel.send('المهام:');
   message.channel.send('- عطي ميوت لكل شخص خالف القوانين');
   message.channel.send('- تضيف ايموجي الي يعطيك اياه شخص عنده رتبة في اي بي');
   message.channel.send('- تعطي بان للي خرب في السيرفر سيرفايفل في الديسكورد و السيرفر');
   message.channel.send('- تصحح اخطاء الاداريين الي اصغر منك في الرتبه');
   message.channel.send('مدة الميوت حسب المخالفه:');
   message.channel.send('- السبام: ساعه');
   message.channel.send('- ازعاج او استفزاز في روم كتابي او صوتي: ساعتين');
   message.channel.send('- سب بكل انواعه و اشكاله: 3 ساعات');
   message.channel.send('- نشر سيرفر لشخص مو صديقه: 4 ساعات');
   message.channel.send('- تكلم عن المواضيع السياسيه او الدينيه: ساعه');
   message.channel.send('ملاحظات:');
   message.channel.send('- اذا الشخص اعاد خطأه بنفس اليوم دبل المدة');
   message.channel.send('كيف تعطي ميوت:');
   message.channel.send('#mute (مدة الميوت) (منشن الشخص)');
   message.channel.send('كيف تعطي بان:');
   message.channel.send('#ban (منشن الشخص)');
   message.channel.send('كيف تجذب اعضاء:');
   message.channel.send('#move (مشنن الشخص)');
}
});

client.on("message", (message) => {
  if(!message.member.roles.some(r=>["• President","• Boss"].includes(r.name)) ) return;
  if(message.content === '8president') { 
   message.react('⁉')
   message.channel.send('المميزات:');
   message.channel.send('- تقدر تعطي ميوت 20 مرات في اليوم');
   message.channel.send('- تقدر تعطي بان 15 مرات في اليوم');
   message.channel.send('- تقدر تسوي فعاليات على راحتك');
   message.channel.send('- تقدر تجذب اعضاء الى الروم الي انت فيه');
   message.channel.send('- تقدر تغير النك نيم لاعضاء');
   message.channel.send('- (تقدر تعطي ميوت او ديفين للاعضاء (صوتي');
   message.channel.send('- تقدر تعطي رتب لاشخاص');
   message.channel.send('- تقدر تمنشن الكل');
   message.channel.send('المهام:');
   message.channel.send('- عطي ميوت لكل شخص خالف القوانين');
   message.channel.send('- تضيف ايموجي الي يعطيك اياه شخص عنده رتبة في اي بي');
   message.channel.send('- تعطي بان للي خرب في السيرفر سيرفايفل في الديسكورد و السيرفر');
   message.channel.send('- تصحح اخطاء الاداريين الي اصغر منك في الرتبه');
   message.channel.send('- اعطي رتبة في اي بي للي دفعلي');
   message.channel.send('مدة الميوت حسب المخالفه:');
   message.channel.send('- السبام: ساعه');
   message.channel.send('- ازعاج او استفزاز في روم كتابي او صوتي: ساعتين');
   message.channel.send('- سب بكل انواعه و اشكاله: 3 ساعات');
   message.channel.send('- نشر سيرفر لشخص مو صديقه: 4 ساعات');
   message.channel.send('- تكلم عن المواضيع السياسيه او الدينيه: ساعه');
   message.channel.send('ملاحظات:');
   message.channel.send('- اذا الشخص اعاد خطأه بنفس اليوم دبل المدة');
   message.channel.send('كيف تعطي ميوت:');
   message.channel.send('#mute (مدة الميوت) (منشن الشخص)');
   message.channel.send('كيف تعطي بان:');
   message.channel.send('#ban (منشن الشخص)');
   message.channel.send('كيف تجذب اعضاء:');
   message.channel.send('#move (مشنن الشخص)');
   message.channel.send('كيف تعطي رتبة:');
   message.channel.send('#role (اسم الرتبة) (منشن الشخص)');  
}
});

client.on('message', message => {
  if(message.content.startsWith(`<@${client.user.id}>`,`@${client.user.username}`)) {
let Embed = new Discord.RichEmbed()
.setDescription(`**
❖════════════════❖
» الاومر الادارية:
- 8autoc: تضغط على الرياكشن تجيك رتبة
- 8mutechannel: قفل الروم
- 8unmutechannel: فتح الروم
- 8bc: تسوي برودكاست
- 8close: غلق التيكت
- 8تقبل المترشح: قبول
- 8ترفض المترشح: رفض
- 8mod: كل شي عن المود
- 8major: كل شي عن ماجور
- 8admin: كل شي عن ادمن
- 8president: كل شي عن بريسدنت
❖════════════════❖
» الاوامر العامة:
- 8server: معلومات عن السيرفر
- 8id: الاي دي حقك
- 8new: فتح تيكت
- 8sug: تسوي اقتراح
- 8تتقدم على الادارة :تقديم
❖════════════════❖
**`)
.setColor("RANDOM")
message.channel.send({embed:Embed}); 
  }
});

client.login(process.env.TOKEN);
