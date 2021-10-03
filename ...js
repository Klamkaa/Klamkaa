let handler = m => m

let linkRegex = /(a(su|nj([ie]ng)?|jg))|(me(mek|ki))|(kontol)|(ba(bi|ngsat|jingan))|(goblo(k|g))|(fu?ck)|(janc[ou]k)|(jemb[ou]t)|(temp[ei]k)|(t[ou]l[ou]l)|(bgst)|(ngento(t|d))|(bego)/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupToxic = linkRegex.exec(m.text)

  if (!chat.antiToxic && !chat.isBanned && isGroupToxic) {
       user.warning += 1
       m.reply('*Badword terdeteksi!*\nWarning: ${user.warning} / 5\nJika warning mencapai 5 kamu akan dibanned\n\nketik *#astagfirullah* atau *#maaf* untuk mengurangi warning\n“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim)')
    if (user.warning >= 5) {
         user.banned = true
    if (global.opts['restrict']) {
                  if (m.isGroup) {
                if (isBotAdmin) {
                    this.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
                }
            }
        }
    }
    return !0
}
module.exports = handler
