global.owner = ['6288233902788', ''] // Put your number here
global.mods = ['6288233902788'] // Want some help?
global.prems = ['6288233902788', '62857023573090', '6285299817037']
global.tag = "*APASI TAG TAG*"
global.menu ="Hai, Bot Sedang aktif!\n\nJika Menu Tidak Muncul Mungkin Pesan Kamu Tidak Masuk Di Sistem!"
global.wait = "[❗]  Tunggu Sebentar, Sedang Diproses"
global.dosa = "Dosa Ditanggung Sendiri"
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '588ee4c59558577d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = '© KLAMKA'
global.author = 'BOTZ'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
