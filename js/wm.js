const chalk = require('chalk')
const fs = require('fs')
global.wm = `𝗛𝘂 𝗧𝗮𝗼-𝗠𝗗 𝗕𝘆 𝗞𝗲𝗶𝘇𝗵𝗮` //lenttobs
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})