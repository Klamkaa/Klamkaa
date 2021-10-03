let handler = async (m, { conn }) => {
  if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) throw `Anda sudah bonus harian hari ini\ntunggu selama *${msToTime(time - new Date())}* untuk mengambil nya lagi`
    conn.reply(m.chat, 'Nih Gw Kasih + 1000 Xp, Buat Tambahan', m)  
    global.db.data.users[m.sender].exp += 1000
    global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['bonus']
handler.tags = ['premium']
handler.command = /^(bonus)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}