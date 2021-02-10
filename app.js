const Discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.queues = new Map();

client.aliases = new Collection();


client.categories = fs.readdirSync('./commands/');

['command'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});



fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
      if (!file.endsWith('.js')) return;
      const evt = require(`./events/${file}`);
      let evtName = file.split('.')[0];
      console.log(`Evento carregado: '${evtName}'`);
      client.on(evtName, evt.bind(null, client));
  });
});



client.on("ready", () => {
  console.log(`Estou conectado como ${bot.user.username}`);
});


client.login(process.env.API_TOKEN);