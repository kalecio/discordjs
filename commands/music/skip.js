const playSong = require("./play").playSong;

const execute = (client, msg, args) => {
  const queue = client.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("Não existe nenhuma música sendo reproduzida");
  }
  queue.songs.shift();
  client.queues.set(msg.guild.id, queue);
  playSong(client, msg, queue.songs[0]);
};

module.exports = {
  name: "skip",
  help: "Pula para a próxima música",
  execute,
};