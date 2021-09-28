module.exports = {
	name: 'serverinfo',
	description: 'Returns Server Info!',
	args: false,
	execute(message) {
		message.channel.send(`This server was created on ${message.guild.createdAt}.`);
	},
};