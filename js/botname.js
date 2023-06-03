const chalk = require('chalk')
const fs = require('fs')
global.botname = `𝗛𝘂 𝗧𝗮𝗼`//nickhelp
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})