let handler = async (m, { conn }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.qouted ? m.quoted.sender : ''
await conn.groupAdd(m.chat, [who || m.quoted.sender])
}
handler.help = ['add2 (tag|reply)']
handler.tags = ['admin']
handler.command = /^(add2)$/i

handler.owner = false
handler.botAdmin = true

module.exports = handler