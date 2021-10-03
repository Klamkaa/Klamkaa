let handler = async (m, { conn, text }) => {
  await m.reply('Sedang Diproses🔥')
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.rowner = false
handler.limit = true

handler.command = /^attp$/i

module.exports = handler
