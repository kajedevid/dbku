const cmd = {
    name: ['base'],
    command: ['base'],
    category: ['main'],
    detail: {
        desc: 'Informasi skrip bot ini'
    },
    async start({ m }) {
        m.reply('Bot Ini menggunakan base: https://github.com/kazedepid/whatsapp-bot')
    }
}

module.exports = cmd;
