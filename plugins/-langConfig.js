
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ┗─...⌬─────────────────────────────────
import axios from 'axios'
import {decode} from 'html-entities'
let handler = async(m, { conn,args, usedPrefix, command, text }) =>  {
  
  let getLang = await m.reply(`robot@bytesec:~# lang-config
. . . . . . . . . . 

[+] LANG CONFIG
-----------------------
> ‎ 
> >>> [1] 🇧🇷 Português
> >>> [2] 🇺🇸 English
> ‎ 
`)
  
}



handler.help = ["language"]
handler.tags = ["config"]

handler.command = ['lang']


export default handler
