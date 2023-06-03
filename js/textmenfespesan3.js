const chalk = require('chalk')
const fs = require('fs')
global.textmenfespesan3 = `Jika Anda ingin membalas pesan rahasia atau menfess ini, Anda tinggal mengetik sebagai berikut:
Format: !balas <pesan>
Contoh: !balas Siapa ini, ya?

Jika Anda ingin mengirim pesan rahasia atau menfess juga, caranya mudah. Tinggal ketik:
!menfes <nomor>|<pesan>
Contoh:
!menfes 628512345577|Hai

Hak Privasi Terjamin, tentunya :)`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})