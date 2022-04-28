


// require dotenv
require('dotenv').config();

const { Telegraf } = require('telegraf');
const { mod } = require('telegram/Helpers');


const bot = new Telegraf(process.env.key)

// fucntion to loop of sendMessage for group
const sendMessage = async (ctx, message) => {
    for (let i = 0; i < message.length; i++) {
        await ctx.reply(message[i])
    }
}

module.exports = {
    sendMessage
}