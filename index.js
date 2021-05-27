const Discord = require("discord.js");
const config = require('./config.js');
const client = new Discord.Client();

client.on("ready", () => {
   console.log("Bot levantado con exito");
});

client.on("message", (message) => {
  if (message.content.startsWith("hola")) {
    message.channel.send("Hola que tal!");
  }else if (message.content.startsWith("adios")) {
        message.channel.send("Hasta luego!");
    }
});

client.login(`${config.TOKEN_DISCORD}`)
