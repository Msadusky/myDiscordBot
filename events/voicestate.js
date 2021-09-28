module.exports = {
	name: 'voiceStateUpdate',
	execute(oldState, newState, client) {
        const generalChat = client.channels.cache.get('139961558842343424');
        if (newState.member.user.id != '93909073442902016') return;
        if (newState.channelID === null) { generalChat.send('Oh no Josh left us, again!'); return; };
        if (oldState.channelID === null && newState.channel.members.first() > 0) { generalChat.send('Everyone watch out! Josh is here!'); return; };
    },
};