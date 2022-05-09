const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const token =
  "OTczMjE4NDUzNDYyODQ3NDg4.GOm4rL.ZscaAjq90aOEeyFy8cI_f8U89mtIzCQPFi4dw8";
const CLIENT_ID = "973218453462847488";
const GUILD_ID = "973217727739207701";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(token);
