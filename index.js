// index.js
require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

for (const folder of fs.readdirSync('./commands')) {
	for (const file of fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	};
};

for (const file of fs.readdirSync('./events').filter(file => file.endsWith('.js'))) {
	const event = require(`./events/${file}`);
	event.once ? client.once(event.name, (...args) => event.execute(...args, client)) : client.on(event.name, (...args) => event.execute(...args, client));
};

client.login(process.env.TOKEN);