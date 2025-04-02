export const cmd = {
    name: ['tes'],
    command: ['tes'],
    category: ['main'],
    detail: { desc: 'tes.' },
    async start({ m, conn, prefix, plugins }) {
        await m.reply("ok")
    }
}
