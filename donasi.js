let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [088233902788]
╰────
Free Member Prem Selama 1 Bulan Jika 
berdonasi, Ingin Jadi Mem Prem ? 
bisa kok, Cukup sekali bayar 10k (+5k pulsa)
Untuk Menjadi Mem Prem! Apasih Keuntungan 
Mem Prem ??, Limit Tidak Terbatas, Bisa Gift Limit, dll

╭─「 Donasi • Non Pulsa 」
│ • Dana [088233902788]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|buyprem|buypremium$/i

module.exports = handler
