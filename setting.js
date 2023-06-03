const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6281249122429'] // pakai nomor owner
global.ownernomer = "6281249122429" // pakai nomor owner
global.socialmedia = "IG: is_keizha" // ini ig buat di ownerjy
global.yutub = "YT: Keizha"// sama
global.lokasi = "Indonesia"//

global.packgename = "𝗕𝘆" 
global.author = "𝗞𝗲𝗶𝘇𝗵𝗮" 

global.title = '𝗛𝘂 𝗧𝗮𝗼-𝗠𝗗'//Tittle reply 
global.body = '𝗕𝘆 𝗞𝗲𝗶𝘇𝗵𝗮' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})