
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async(m, { conn, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

  let enc = {
    "a": "•-",
    "b": "-•••",
    "c": "-•-•",
    "d": "-••",
    "e": "•",
    "f": "••-•",
    "g": "--•",
    "h": "••••",
    "i": "••",
    "j": "•---",
    "k": "-•-",
    "l": "•-••",
    "m": "--",
    "n": "-•",
    "o": "---",
    "p": "•--•",
    "q": "--•-",
    "r": "•-•",
    "s": "•••",
    "t": "-",
    "u": "••-",
    "v": "•••-",
    "w": "•--",
    "x": "-••-",
    "y": "-•--",
    "z": "--••",
    "0": "-----",
    "1": "•----",
    "2": "••---",
    "3": "•••--",
    "4": "••••-",
    "5": "•••••",
    "6": "-••••",
    "7": "--•••",
    "8": "---••",
    "9": "----•",
    "?": "••--••",
    "!": "-•-•--",
    ".": "•-•-•-",
    ",": "--••--",
    ";": "-•-•-•",
    ":": "---•••",
    "+": "•-•-•",
    "-": "-••••-",
    "/": "-••-•",
    "=": "-•••-",
    " ": "/"
  }

  let dec = {
    "-----": "0",
    "•----": "1",
    "••---": "2",
    "•••--": "3",
    "••••-": "4",
    "•••••": "5",
    "-••••": "6",
    "--•••": "7",
    "---••": "8",
    "----•": "9",
    "•-": "a",
    "-•••": "b",
    "-•-•": "c",
    "-••": "d",
    "•": "e",
    "••-•": "f",
    "--•": "g",
    "••••": "h",
    "••": "i",
    "•---": "j",
    "-•-": "k",
    "•-••": "l",
    "--": "m",
    "-•": "n",
    "---": "o",
    "•--•": "p",
    "--•-": "q",
    "•-•": "r",
    "•••": "s",
    "-": "t",
    "••-": "u",
    "•••-": "v",
    "•--": "w",
    "-••-": "x",
    "-•--": "y",
    "--••": "z",
    "••--••": "?",
    "-•-•--": "!",
    "•-•-•-": ".",
    "--••--": ",",
    "-•-•-•": ";",
    "---•••": ":",
    "•-•-•": "+",
    "-••••-": "-",
    "-••-•": "/",
    "-•••-": "=",
    "/": " "
  }

let selected = text.toLowerCase().split(" ")[0] + " "
if(selected == "code ") {
let str = text.replace(selected, "").toLowerCase()
let Output_Morse = ""
for(let i of str) {
if(!enc[i]) Output_Morse += i
for(let j in enc) {
if(j == i) Output_Morse += enc[i] + " "
}}

return conn.reply(m.chat, Output_Morse, fkontak, m)
} else if(selected == "decode ") { 
let str = text.replace(selected, "").replace(/[.]/g, "•")
let Output_String = ""
for(let i of str.split(" ")) {
if(!dec[i]) Output_String += i
for(let j in dec) {
if(j == i) Output_String += dec[i]
}}
return conn.reply(m.chat, Output_String, fkontak, m)
} else {
return conn.reply(m.chat, `─┅──┅❖ ♱ ❖─┅──┅ 𝘾𝙊𝘿𝙄𝘾𝙊 𝙈𝙊𝙍𝙎𝙀 𝘾𝙊𝘿𝙀/𝘿𝙀𝘾𝙊𝘿𝙀\n\n𝙋𝘼𝙍𝘼 𝘾𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍 𝙐𝙎𝙀 *:*\n*${usedPrefix}${command} code mensagem*\n\n𝙋𝘼𝙍𝘼 𝘿𝙀𝘾𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍 𝙐𝙎𝙀 *:**${usedPrefix}${command} decode •••• --- •-•• •- / --• •- - •-*\n*${usedPrefix}${command} decode •••• • •-•• •-•• --- / --• •- - •-*
─┅──┅❖ ❖─┅──┅`, fkontak, m)
}}

handler.help = ["morse"].map(v => v + " <encode|decode>")
handler.tags = ["tools"]
handler.level= 20
handler.command = ['morse']


export default handler
