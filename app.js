require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

// PING
client.on('message', async msg => {
  if (msg.content === `${process.env.PREFIX}ping`) {
    msg.reply(`pong!`)
  }
})

client.login(process.env.API_TOKEN);
