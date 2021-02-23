const Discord = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv").config();
const CLIENT_ID = process.env.CLIENT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;
const db = require("./db.js");
const helpers = require("./helpers.js");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.generateInvite(["ADMINISTRATOR"]).then((link) => {
    console.log(link);
  });
  db.sync();
});

client.on("message", async (msg) => {
  const args = msg.content.slice(0).trim().split(/ +/g);
  const command = args.shift();
});
client.login(BOT_TOKEN);
