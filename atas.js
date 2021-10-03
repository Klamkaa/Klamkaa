let handler = async (m, { conn }) => {

let vn = './src/sound/namasound.mp3'

await conn.sendFile(m.chat, vn, 'namasound.mp3', m, 0, { thumbnail: Buffer.alloc(0) })
  }
handler.tags = []
handler.help = []
handler.customPrefix = contoh
handler.command = new RegExp

module.exports = handler