const chalk = require('chalk')
const fs = require('fs')
global.textmenfespesan2 = `*Kemungkinan tersebut merupakan pesan dari pihak yang tidak dapat saya sebutkan demi menjaga privasi pengguna kami.*`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})