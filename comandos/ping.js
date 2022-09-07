const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: "ping",
    description: "Pong!",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {

 interaction.reply({ content: "pong!" })

 }
}
