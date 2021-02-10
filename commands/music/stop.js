const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
      return msg.reply("Não existe nenhuma música sendo reproduzida");
    }
    queue.songs = [];
    client.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();
  };
  
  module.exports = {
    name: "stop",
    help: "Para a reprodução de músicas no servidor",
    execute,
  };