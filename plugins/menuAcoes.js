
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn,isAdmin,isOwner, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
  

let menuacoes =`╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *AÇÕES*
╰─┅---─┅❖  ⸸  ❖─┅┅
|╓─━⎓⎔  ${usedPrefix}afk *﹝texto﹞*
|┕ ᴬⁿᵘⁿᶜᶦᵃ ᵃᵘˢᵉⁿᶜᶦᵃ ᵖᵒʳ ᵗᵉᵐᵖᵒ ᶦⁿᵈᵉᵗᵉʳᵐᶦⁿᵃᵈᵒ ᵉ ᵖᵒʳ ᵠᵘᵃˡ ᵐᵒᵗᶦᵛᵒ  
|
|╓─━⎓⎔  ${usedPrefix}morrer 
|┕ ˢᵘʳᵖʳᵉˢᵃ•••
|
|╓─━⎓⎔  ${usedPrefix}perfil 
|┕ ᶜᵒⁿˢᵘˡᵗᵃ ᵃᵒ ᵖᵉʳᶠᶦˡ ᵈᵃˢ ˢᵒᵐᵇʳᵃˢ
|${global.db.data.chats[m.chat].users[m.sender].level>=10 ? `
|╓─━⎓⎔  ${usedPrefix}caçar *﹝usuario﹞*
|┕ ᴾᵉʳˢᵉᵍᵘᶦʳ ᵉ ᶜᵃᶜᵃʳ ᵃˡᵍᵘᵉᵐ ᵈᵉˢᵗᵉ ᵍʳᵘᵖᵒ
|
|╓─━⎓⎔  ${usedPrefix}roubar *﹝usuario﹞*
|┕ ᵀᵉⁿᵗᵃ ᶠᵘʳᵗᵃʳ ᵈᵃʳᵏᶜᵒᶦⁿˢ ᵈᵒ ᵘˢᵘᵃʳᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}pix *﹝usuario﹞*
|┕ ᵀʳᵃⁿˢᶠᵉʳᵉ ᴰᵃʳᵏᶜᵒᶦⁿˢ ᵖᵃʳᵃ ᵒ ᵘˢᵘᵃʳᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}divorciar 
|┕ ˢᵒˡᶦᶜᶦᵗᵃ ᵒ ᵘˢᵘᵃʳᶦᵒ ᵖᵃʳᵃ ᶦⁿᶦᶜᶦᵃʳ ᵘᵐ ˢᵗᵃᵗᵘˢ ᵃᵐᵒʳᵒˢᵒ
|
||╓─━⎓⎔  ${usedPrefix}casar *﹝usuario﹞*
|┕ ˢᵒˡᶦᶜᶦᵗᵃ ᵒ ᵘˢᵘᵃʳᶦᵒ ᵖᵃʳᵃ ᵉⁿᵗʳᵃʳ ᵉᵐ ᵘᵐᵃ ᵘⁿᶦᵃᵒ ᶜᵒⁿʲᵘᵍᵃˡ
` : ''}

|╓─━⎓⎔  ${usedPrefix}chance *﹝texto﹞*
|┕ ᶜᵃˡᶜᵘˡᵃ ᵃ ᵖʳᵒᵇᵃᵇᶦˡᶦᵈᵃᵈᵉ ᵈᵉ ᵃˡᵍᵘᵐᵃ ᶜᵒᶦˢᵃ ᵉⁿᵗʳᵉ ᵈᵒᶦˢ ᵐᵉᵐᵇʳᵒˢ
|
|╓─━⎓⎔  ${usedPrefix}tinder *﹝usuario1﹞ ﹝usuario2﹞*
|┕ ᴾʳᵒᵇᵃᵇᶦˡᶦᵈᵃᵈᵉ ᵈᵉ ᵖᵃᶦˣᵃᵒ ᵉⁿᵗʳᵉ ² ᵘˢᵘᵃʳᶦᵒˢ
|${global.db.data.chats[m.chat].users[m.sender].level>=15 ? `\n|╓─━⎓⎔  ${usedPrefix}esfaquear *﹝usuario﹞*
|┕ ᴱˢᶠᵃᵠᵘᵉᶦᵃ ᵘᵐᵃ ᵛᶦᵗᶦᵐᵃ
|
|╓─━⎓⎔  ${usedPrefix}matar *﹝usuario﹞*
|┕ ᴹᵃᵗᵉ ᵃˡᵍᵘᵉᵐ ᵈᵒ ᵍʳᵘᵖᵒ
|
|╓─━⎓⎔  ${usedPrefix}queimar *﹝usuario﹞*
|┕ ᵠᵘᵉᶦᵐᵉ ᵘᵐᵃ ᵛᶦᵗᶦᵐᵃ ᵃ ᶠᵃᶻᵉⁿᵈᵒ ˢᵘᶜᵘᵐᵇᶦʳ ᵃᵒ ᶠᵒᵍᵒ ᵈᵒ ᶦⁿᶠᵉʳⁿᵒ
|
|╓─━⎓⎔  ${usedPrefix}enforcar *﹝usuario﹞*
|┕ ᴹᵃⁿᵈᵃʳ ᵘˢᵘᵃʳᶦᵒ ᵃ ᶠᵒʳᶜᵃ
|
|╓─━⎓⎔  ${usedPrefix}envenenar *﹝usuario﹞*
|┕ ᴱⁿᵛᵉⁿᵉⁿᵃ ᵃˡᵍᵘᵉᵐ ᵈᵉˢᵗᵉ ᵍʳᵘᵖᵒ
|
|╓─━⎓⎔  ${usedPrefix}devorar *﹝usuario﹞*
|┕ ᶜᵒᵐᵉʳ ᵃ ᶜᵃʳⁿᵉ ᵈᵉ ᵃˡᵍᵘᵐ ᵘˢᵘᵃʳᶦᵒ ᵈᵒ ᵍʳᵘᵖᵒ
` : '' }
|╓─━⎓⎔  ${usedPrefix}beijar *﹝usuario﹞*
|┕ ᴮᵉᶦʲᵃʳ ᵃˡᵍᵘᵉᵐ ᵈᵉ ˢᵘʳᵖʳᵉˢᵃ
|
|╓─━⎓⎔  ${usedPrefix}espancar *﹝usuario﹞*
|┕ ᴱˢᵖᵃⁿᶜᵃʳ ᵃˡᵍᵘᵉᵐ ᵇʳᵘᵗᵃˡᵐᵉⁿᵗᵉ 
|
|╓─━⎓⎔  ${usedPrefix}stalkear *﹝usuario﹞*
|┕ ᴾᵉʳˢᵉᵍᵘᶦʳ ᵉ ᵒᵇˢᵉʳᵛᵃʳ ᵐᵉᵗᶦᶜᵘˡᵒˢᵃᵐᵉⁿᵗᵉ ᵃˡᵍᵘᵉᵐ
|
|╓─━⎓⎔  ${usedPrefix}flertar *﹝usuario﹞*
|┕ ᶠˡᵉʳᵗᵃʳ ᶜᵒᵐ ᵃˡᵍᵘᵉᵐ ᵉ ˢᵉᵈᵘᶻᶦʳ
|
|╓─━⎓⎔  ${usedPrefix}abracar *﹝usuario﹞*
|┕ ᴬᵇʳᵃᶜᵃʳ ᵃˡᵍᵘᵉᵐ ᶜᵃʳᶦⁿʰᵒˢᵃᵐᵉⁿᵗᵉ
|
|╓─━⎓⎔  ${usedPrefix}chicotear *﹝usuario﹞*
|┕ ᶜʰᶦᶜᵒᵗᵉᶦᵃ ᵘᵐᵃ ᵃˡᵐᵃ ᵈᵉˢᵗᵉ ᵍʳᵘᵖᵒ
|
|╓─━⎓⎔  ${usedPrefix}enterrar *﹝usuario﹞*
|┕ ᴱⁿᵗᵉʳʳᵉ ᵃˡᵍᵘᵉᵐ ᵛᶦᵛᵒ
|
|╓─━⎓⎔  ${usedPrefix}hipnotizar *﹝usuario﹞*
|┕ ᴴᶦᵖⁿᵒᵗᶦᶻᵉ ᵃˡᵍᵘᵉᵐ ᵃ ˢᵘᵃ ᵛᵒⁿᵗᵃᵈᵉ
|
|╓─━⎓⎔  ${usedPrefix}amaldicoar *﹝usuario﹞*
|┕ ᴬᵐᵃˡᵈᶦᶜᵒᵃ ᵘᵐᵃ ᵃˡᵐᵃ ᶜᵒᵐ ᵘᵐᵃ ˢᶦⁿᵃ
|
|╓─━⎓⎔  ${usedPrefix}reanimar/${usedPrefix}reviver *﹝usuario﹞*
|┕ ᵀʳᵃᵍᵃ ᵃˡᵍᵘᵉᵐ ᵃ ᵛᶦᵈᵃ ᶜᵒᵐᵒ ᴰʳ. ᶠʳᵃⁿᵏᵉⁿˢᵗᵉᶦⁿ
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()


m.reply(menuacoes)

}

handler.command=['acoes']
export default handler