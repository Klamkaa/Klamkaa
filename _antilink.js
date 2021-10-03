let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nTerdeteksi *${await this.getName(m.sender)}* telah mengirim link group!\n\nMaaf Kamu Akan Di Kick Dari Grup`)
    if (isAdmin) return m.reply('*Eh Maap Kamu Admin Grup, Kamu Gk Bakal Dikick Hehe..*')
    if (!isBotAdmin) return m.reply('*Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini!*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol Ngirim Grup Ini :v Awowkwk*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
