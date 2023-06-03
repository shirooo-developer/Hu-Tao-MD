const chalk = require('chalk')
const fs = require('fs')
global.textmenfespesan1 = `*Perkenalkan, saya adalah seorang bot yang ditugaskan untuk mengirimkan pesan dari seseorang yang tidak dapat saya sebutkan namanya. Dalam pesan ini, ada kemungkinan bahwa seseorang ingin menyampaikan pesan berikut kepada Anda.*` // lalu ke variabel pesan 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})