const { Client } = require('discord.js');
const client = new Client({ /* your stuff here */ });
const { WillClient } = require('willclient');
const config = require('./config.json');

const wc = new WillClient({ client: client, prefix: "!", token: config.token });

wc.event("ready", (ctx) => {
    console.log(`Logged in as ${ctx.user.tag}`);
});

/* commands */

wc.command( {name: "purge"}, async (ctx, cmd) => {
    let amount = parseInt(cmd.args[0]);
    
    if (wc.author.hasPermissions(["manageMessages"]) {
        wc.channel.purge(amount, ctx.channel); // channel is optional and defautls to ctx.channel
    
        ctx.channel.send(`Purged ${amount} messages!`);
    }
});

wc.command( {name: "lock", aliases: ["lockdown"]}, async (ctx, cmd) => {
    let channel = (cmd.args.length > 0) ? await wc.fetchChannel(cmd.args[0]) : ctx.channel;
    
    if (wc.author.hasPermissions(["manageChannels"]) {
        wc.channel.lock(channel);
    
        ctx.channel.send(`Locked ${channel.name}!`);
    }
});

wc.command( {name: "unlock", aliases: ["unlockdown"]}, async (ctx, cmd) => {
    let channel = (cmd.args.length > 0) ? await wc.fetchChannel(cmd.args[0]) : ctx.channel;
    
    if (wc.author.hasPermissions(["manageChannels"]) {
        wc.channel.unlock(channel);
    
        ctx.channel.send(`Unlocked ${channel.name}!`);
});

client.login(config.token);
