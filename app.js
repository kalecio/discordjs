const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// PING
client.on('message', async msg => {
  if (msg.content === `${config.prefix}ping`) {
    msg.reply(`pong!`);
  }
});

client.login(config.token);