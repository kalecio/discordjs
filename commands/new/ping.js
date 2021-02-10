
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    category: 'new',
    description: 'Shows the bot and API latency',
    usage: `ping`,
    aliases: ['p'],
    run: async (client, message, args) => {

        const msg = await message.channel.send('🏓 Pinging...');

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('🏓 Pong!')
        .setDescription(`A latência do Bot é: **${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms** \n A Latência da API é: **${Math.round(client.ws.ping)} ms**`);

        message.channel.send(embed);
    }
}