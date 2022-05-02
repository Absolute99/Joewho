const prefix = require('../config.json').bot.prefix
const users = require('../dependencies/users')
const config = require('../dependencies/config')
const reply = config.check(true, 'reply', 'mute')
const admin = require('../config.json').admin
const muted = []

module.exports = {
    name: "mute",
    description: "a mute module",
    version: "1.0",
    author: "Another Random Discord Mod",
    enabled: true,
    onMessage: function(message, args) {
        if(args[0] == prefix + "free" & admin.includes(message.author.id) ) {
            const user = users.get(args[1])
            if(user == undefined) return message.channel.send('user not found')
            muted.splice(muted.indexOf(user.id), 1)
            if(reply) message.reply('freed ' + user.username + ' from the depts of hell')
        }
        else if(muted.includes(message.author.id)) message.delete()
        else if(args[0] == prefix + "silence" & admin.includes(message.author.id)) {
            const user = users.get(args[1])
            if(user == undefined) return message.channel.send('user not found')
            muted.push(user.id)
            if(reply) message.reply('Silenced ' + user.username)
        }
    }
}