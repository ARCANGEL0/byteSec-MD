
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  
  
  if (!text) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}
   ━━━━━━━━━⬣🌕⬣━━━━━━━━
𝗗𝗶𝗴𝗮-𝗺𝗲 𝗾𝘂𝗮𝗹 𝗵𝘂𝗺𝗼𝗿 𝘃𝗶𝘀𝗰𝗲𝗿𝗮𝗹 𝗳𝗹𝗼𝗿𝗲𝘀𝗰𝗲 𝗱𝗲 𝘀𝘂𝗮 𝗺𝗲𝗻𝘁𝗲 𝗲 𝗳𝗼𝗿𝗻𝗲𝗰𝗮 𝗺𝗲 𝗼𝘀 𝘁𝗲𝘅𝘁𝗼𝘀 𝘀𝗲𝗽𝗮𝗿𝗮𝗱𝗼𝘀 𝗽𝗼𝗿 | , 𝗲 𝗰𝗿𝗶𝗮𝗿𝗲𝗶 𝗼 𝗺𝗲𝗺𝗲 𝗱𝗼 𝘀𝗲𝘂 𝗽𝗼𝗼𝗵 𝗲𝗹𝗲𝗴𝗮𝗻𝘁𝗲.

𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
.𝗽𝗼𝗼𝗵 𝗲𝘀𝗰𝗿𝗲𝘃𝗲𝗿 𝗽𝗼𝗲𝗺𝗮𝘀 𝘀𝗼𝗯𝗿𝗲 𝗮𝗺𝗼𝗿 𝗲 𝗯𝗲𝗹𝗲𝘇𝗮 | 𝗱𝗲𝘀𝗰𝗿𝗲𝘃𝗲𝗿 𝗮 𝗺𝗼𝗿𝗯𝗶𝗱𝗮 𝗻𝗮𝘁𝘂𝗿𝗲𝘇𝗮 𝗵𝘂𝗺𝗮𝗻𝗮 𝗱𝗲 𝗳𝗼𝗿𝗺𝗮 𝗺𝗲𝘁𝗮𝗳ó𝗿𝗶𝗰𝗮 𝗲 𝗹𝗶𝗿𝗶𝗰𝗮
   ━━━━━━━━━⬣🌒⬣━━━━━━━━
  `, m)
  
	const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
	
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    let js = await fetch(`https://api.popcat.xyz/pooh?text1=${txt1}&text2=${txt2}`)
    console.log(js)
    await conn.sendFile(m.chat, js.url, "error.jpg", "")
    
}

handler.help = ['memepooh']
handler.tags = ['maker']
handler.level = 19
handler.command = ['pooh']
handler.limit = false

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}