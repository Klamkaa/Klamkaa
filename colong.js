//
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
	await m.reply(global.wait)
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      stiker = await sticker(img, false, 'Punya Nanaa', require('awesome-phonenumber')('+6288233902788'). getNumber('international'))
    } else if (args[0]) stiker = await sticker(false, args[0], 'Punya Caliph', require('awesome-phonenumber')('+6288233902788'). getNumber('international'))
  } finally {
    await m.reply('Sticker Sedang Dikirim')
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'ERROR😂'
  }
}
handler.help = ['colong']
handler.tags = ['owner']
handler.command = /^colong$/i
handler.owner = true

module.exports = handler