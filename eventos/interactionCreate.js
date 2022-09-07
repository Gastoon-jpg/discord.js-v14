const Discord = require('discord.js');

module.exports = {
  name: "interactionCreate",
  emiter: "on",
  run: async (client, interaction) => {

  if (interaction.isChatInputCommand()) {

  const command = client.slashCommands.get(Interaction.commandName);
  
  command.run(client, interaction)
  
  }

 }
};
