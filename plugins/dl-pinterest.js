
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, isAdmin,isOwner,text, usedPrefix, command }) => {
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].busca===false){
   m.react("❌")
   
   return !0;
 } 
if (!text) throw `${lenguajeGB['smsAvisoMG']()} ❖─┅──┅𝘿𝙚𝙨𝙫𝙚𝙣𝙙𝙖-𝙢𝙚 𝙤𝙨 𝙧𝙚𝙘𝙚𝙨𝙨𝙤𝙨 𝙙𝙤 𝙖𝙗𝙨𝙪𝙧𝙙𝙤 𝙙𝙚 𝙩𝙚 𝙙𝙚𝙨𝙚𝙟𝙤 𝙚 𝙞𝙢𝙖𝙜𝙞𝙣𝙖𝙘𝙖𝙤, 𝙤𝙣𝙙𝙚 𝙨𝙤𝙢𝙗𝙧𝙖𝙨 𝙚𝙩𝙚𝙧𝙚𝙖𝙨 𝙙𝙖𝙣𝙘𝙖𝙢 𝙣𝙖 𝙛𝙧𝙖𝙜𝙞𝙡 𝙖𝙡𝙘𝙤𝙫𝙖 𝙙𝙚 𝙨𝙚𝙪𝙨 𝙫𝙞𝙨 𝙥𝙚𝙣𝙨𝙖𝙢𝙚𝙣𝙩𝙤𝙨─┅──┅❖  Exemplo:\n*${usedPrefix + command} Corvos*` 
let url = `https://api.lolhuman.xyz/api/pinterest?apikey=${lolkeysapi}&query=${text}`
fetch(url)
  .then(response => response.json())
  .then((data) =>{ 
    
    
  
 
 m.react("🕰️")
 






   conn.sendFile(m.chat,data.result, imagen1, null, m)
  } )
    
    
  m.react("☑️")
  .catch(error => console.error('Error:', error));
  
  




/*conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 | 𝙉𝙚𝙭𝙩', `/pinterest ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
['🐈 𝙈𝙚𝙣𝙪', `.menu`],  
], m)*/
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = ['pin']
handler.exp = 0
handler.level = 6
export default handler
