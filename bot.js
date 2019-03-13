const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => { // لما يشتغل
  client.channels.find(ch => ch.id === "552963124454752268" && ch.type === 'voice').join();
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('[           BOT IS ONLINE         ]')
});

client.login(process.env.TOKEN);
