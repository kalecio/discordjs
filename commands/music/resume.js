const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
      return msg.reply("Não existe nenhuma música sendo reproduzida");
    }
    queue.dispatcher.resume();
  };
  
  module.exports = {
    name: "resume",
    help: "Continua a reprodução de música atual",
    execute,
  };