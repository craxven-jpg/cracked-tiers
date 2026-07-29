require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check if the bot is online."),

  new SlashCommandBuilder()
    .setName("tier")
    .setDescription("Check your Minecraft tier."),

  new SlashCommandBuilder()
    .setName("requesttier")
    .setDescription("Request a Minecraft tier.")

  new SlashCommandBuilder()
  .setName("register")
  .setDescription("Register yourself."),
];

client.once("ready", async () => {
  console.log(`${client.user.tag} is online!`);

  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

  try {
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log("Slash commands loaded!");
  } catch (err) {
    console.error(err);
  }
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    return interaction.reply("🏓 Pong!");
  }

  if (interaction.commandName === "tier") {
    return interaction.reply("You don't have a tier yet.");
  }

  if (interaction.commandName === "requesttier") {
    return interaction.reply("✅ Tier request submitted!");
    
    if (interaction.commandName === "register") {
  return interaction.reply("✅ You have been registered!");
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
