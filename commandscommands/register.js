const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('register')
    .setDescription('Register yourself'),

  async execute(interaction) {
    await interaction.reply('✅ You have been registered successfully!');
  },
};
