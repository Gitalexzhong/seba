const { server } = require('../config.json');

// Export event so it can be used
module.exports = (client) => {
    // Log init to console
    console.log(`Logged in as ${client.user.tag}!`);

    // Set status message
    client.user.setActivity('Loading... lo-fi Mixtape 2025', { type: 'PLAYING' });

    // Extra features
    if (client.extra) {
        // Late nights
        const { setup } = require('../modules/latenights.js');
        const guild = client.guilds.cache.get(server.id);
        setup(guild);
    }
};
