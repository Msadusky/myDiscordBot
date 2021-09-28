module.exports = {
	name: 'message',
	execute(message) {
        const { prefix } = require('../config.json');
        const urlRegex = new RegExp('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+');
        
        if (message.author.id == '93909073442902016' && urlRegex.test(message.content.toLowerCase())) {
			message.delete()
			.then(msg => msg.channel.send(msg.content));
        };

        if (!message.content.startsWith(prefix) || message.author.bot) return;
        if (message.author.id != '93346576428175360') return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!message.client.commands.has(commandName)) return;

        const command = message.client.commands.get(commandName);

        if (command.args && !args.length) return;

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
        };        
    },
};