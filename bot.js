const Discord = require('discord.js');
const client = new Discord.Client();
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
console.log("Scrpit By Dream");
client.on("ready", () => {
let channel =     client.channels.get("623240709285085185")
setInterval(function() {
channel.send(`Hello Leget Dragon`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);
client.login(process.env.BOT_TOKEN3);
client.login(process.env.BOT_TOKEN4);
client.login(process.env.BOT_TOKEN5);