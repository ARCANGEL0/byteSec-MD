
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix,isAdmin,isOwner }) => {
const fetch = (await import('node-fetch')).default;
const text = args.join` `;

if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].busca===false){
   m.react("❌")
   
   return !0;
 } 


 const phrases = global.idioma === 'en' ? [
"ʏᴏᴜ ᴋɴᴏᴡ ʏᴏᴜ ᴄᴀɴ ʜᴀɴᴅʟᴇ ᴛʜɪꜱ ʏᴏᴜʀꜱᴇʟꜰ, ʀɪɢʜᴛ? ʙᴜᴛ ꜰɪɴᴇ, ʜᴇʀᴇ’ꜱ ᴛʜᴇ ɪɴꜰᴏ.",   "ʏᴏᴜ ᴄᴏᴜʟᴅ’ᴠᴇ ɢᴏᴏɢʟᴇᴅ ɪᴛ, ʙᴜᴛ ᴡʜᴀᴛᴇᴠᴇʀ. ʟᴇᴛ ᴍᴇ ꜱᴘᴏᴏɴ-ꜰᴇᴇᴅ ʏᴏᴜ ᴛʜɪꜱ.",   "ʏᴏᴜ ᴡᴀɴᴛ ᴛʜᴇ ᴇᴀꜱʏ ᴡᴀʏ ᴏᴜᴛ? ᴅᴏɴ’ᴛ ᴡᴏʀʀʏ, ɪ ɢᴏᴛ ʏᴏᴜ ᴄᴏᴠᴇʀᴇᴅ.",   "ᴄᴏᴍᴇ ᴏɴ, ʏᴏᴜ’ʀᴇ ꜱᴍᴀʀᴛᴇʀ ᴛʜᴀɴ ᴛʜɪꜱ. ʙᴜᴛ ꜱᴜʀᴇ, ʜᴇʀᴇ’ꜱ ᴛʜᴇ ʀᴇꜱᴜʟᴛ.",   "ɪ ɢᴇᴛ ɪᴛ, ꜱᴇᴀʀᴄʜɪɴɢ’ꜱ ʜᴀʀᴅ. ʙᴜᴛ ʜᴇʀᴇ’ꜱ ᴡʜᴀᴛ ʏᴏᴜ ɴᴇᴇᴅ.",   "ᴊᴜꜱᴛ ꜱᴀʏɪɴɢ, ᴀ ʟɪᴛᴛʟᴇ ꜱᴇᴀʀᴄʜɪɴɢ ɴᴇᴠᴇʀ ʜᴜʀᴛ ᴀɴʏᴏɴᴇ. ʙᴜᴛ ɪ’ʟʟ ᴅᴏ ɪᴛ.",   "ʏᴏᴜ’ʀᴇ ᴄᴀᴘᴀʙʟᴇ ᴏꜰ ᴛʜɪꜱ. ꜱᴛɪʟʟ, ʜᴇʀᴇ’ꜱ ᴛʜᴇ ᴀɴꜱᴡᴇʀ—ꜱɪɴᴄᴇ ʏᴏᴜ ᴀꜱᴋᴇᴅ.",   "Qᴜɪᴄᴋ ꜱᴇᴀʀᴄʜ ᴡᴏᴜʟᴅɴ’ᴛ ᴋɪʟʟ ʏᴏᴜ. ʙᴜᴛ ʜᴇʀᴇ ᴀʀᴇ ᴛʜᴇ ᴀɴꜱᴡᴇʀꜱ, ᴋɪᴅ.",   "ʏᴏᴜ ᴄᴏᴜʟᴅ ᴛᴀᴋᴇ ᴀ ᴍɪɴᴜᴛᴇ ᴛᴏ ɢᴏᴏɢʟᴇ. ʙᴜᴛ ʜᴇʏ, ɪ’ʟʟ ꜰᴇᴛᴄʜ ɪᴛ ꜰᴏʀ ʏᴏᴜ.",   "ʏᴏᴜ ᴄᴏᴜʟᴅ'ᴠᴇ ᴅᴏɴᴇ ᴛʜɪꜱ ʏᴏᴜʀꜱᴇʟꜰ, ʏᴏᴜ ᴋɴᴏᴡ? ꜱᴛɪʟʟ, ʜᴇʀᴇ’ꜱ ʏᴏᴜʀ ᴀɴꜱᴡᴇʀ."

] : [
"ᴠᴏᴄᴇ ꜱᴀʙᴇ qᴜᴇ ᴘᴏᴅᴇ ʟɪᴅᴀʀ ᴄᴏᴍ ɪꜱꜱᴏ ꜱᴏᴢɪɴʜᴏ, ᴄᴇʀᴛᴏ? ᴍᴀꜱ ᴛᴜᴅᴏ ʙᴇᴍ, ᴀqᴜɪ ᴇꜱᴛᴀ ᴀ ɪɴꜰᴏʀᴍᴀᴄᴀᴏ.",   "ᴠᴏᴄᴇ ᴘᴏᴅᴇʀɪᴀ ᴛᴇʀ ᴘᴇꜱqᴜɪꜱᴀᴅᴏ, ᴍᴀꜱ ᴛᴜᴅᴏ ʙᴇᴍ. ᴅᴇɪxᴇ-ᴍᴇ ꜱɪᴍᴘʟɪꜰɪᴄᴀʀ ɪꜱꜱᴏ ᴘᴀʀᴀ ᴠᴏᴄᴇ.",   "qᴜᴇʀ ᴏ ᴄᴀᴍɪɴʜᴏ ᴍᴀɪꜱ ꜰᴀᴄɪʟ? ɴᴀᴏ ꜱᴇ ᴘʀᴇᴏᴄᴜᴘᴇ, ᴇꜱᴛᴏᴜ ᴀqᴜɪ ᴘᴀʀᴀ ᴀᴊᴜᴅᴀʀ.",   "ᴠᴀᴍᴏꜱ ʟᴀ, ᴠᴏᴄᴇ ᴇ ᴍᴀɪꜱ ɪɴᴛᴇʟɪɢᴇɴᴛᴇ qᴜᴇ ɪꜱꜱᴏ. ᴍᴀꜱ ᴛᴜᴅᴏ ʙᴇᴍ, ᴀqᴜɪ ᴇꜱᴛᴀ ᴏ ʀᴇꜱᴜʟᴛᴀᴅᴏ.",   "ᴇɴᴛᴇɴᴅᴏ, ᴘᴇꜱqᴜɪꜱᴀʀ ᴇ ᴅɪꜰɪᴄɪʟ. ᴍᴀꜱ ᴀqᴜɪ ᴇꜱᴛᴀ ᴏ qᴜᴇ ᴠᴏᴄᴇ ᴘʀᴇᴄɪꜱᴀ.",   "ꜱᴏ ᴅɪᴢᴇɴᴅᴏ, ᴜᴍᴀ ᴘᴇqᴜᴇɴᴀ ᴘᴇꜱqᴜɪꜱᴀ ɴᴀᴏ ꜰᴀᴢ ᴍᴀʟ ᴀ ɴɪɴɢᴜᴇᴍ. ᴍᴀꜱ ᴇᴜ ᴠᴏᴜ ꜰᴀᴢᴇʀ ɪꜱꜱᴏ.",   "ᴠᴏᴄᴇ ᴇ ᴄᴀᴘᴀᴢ ᴅɪꜱꜱᴏ. ᴀɪɴᴅᴀ ᴀꜱꜱɪᴍ, ᴀqᴜɪ ᴇꜱᴛᴀ ᴀ ʀᴇꜱᴘᴏꜱᴛᴀ—ᴊᴀ qᴜᴇ ᴠᴏᴄᴇ ᴘᴇᴅɪᴜ.",   "ᴜᴍᴀ ʀᴀᴘɪᴅᴀ ᴘᴇꜱqᴜɪꜱᴀ ɴᴀᴏ ꜰᴀʀɪᴀ ᴍᴀʟ. ᴍᴀꜱ ᴀqᴜɪ ᴇꜱᴛᴀᴏ ᴀꜱ ʀᴇꜱᴘᴏꜱᴛᴀꜱ, ɢᴀʀᴏᴛᴏ.",   "ᴠᴏᴄᴇ ᴘᴏᴅᴇʀɪᴀ ʟᴇᴠᴀʀ ᴜᴍ ᴍɪɴᴜᴛᴏ ᴘᴀʀᴀ ᴘᴇꜱqᴜɪꜱᴀʀ. ᴍᴀꜱ ᴛᴜᴅᴏ ʙᴇᴍ, ᴇᴜ ᴠᴏᴜ ʙᴜꜱᴄᴀʀ ᴘᴀʀᴀ ᴠᴏᴄᴇ.",   "ᴠᴏᴄᴇ ᴘᴏᴅᴇʀɪᴀ ᴛᴇʀ ꜰᴇɪᴛᴏ ɪꜱꜱᴏ ꜱᴏᴢɪɴʜᴏ, ꜱᴀʙᴇ? ᴀɪɴᴅᴀ ᴀꜱꜱɪᴍ, ᴀqᴜɪ ᴇꜱᴛᴀ ꜱᴜᴀ ʀᴇꜱᴘᴏꜱᴛᴀ."
];




if (!text) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙀𝙑𝘼 𝙊 𝙌𝙐𝙀 𝙌𝙐𝙀𝙍 𝘽𝙐𝙎𝘾𝘼𝙍\n𝙀𝙓𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Texto*`, m)
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
try {
const url = 'https://google.com/search?q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~] 
└─ $ ./google ${text} -h ${url}
> . . . . . . . . . . . . . . . . . . . . . . . . 
> ${phrases.getRandom()}
> .   . . .. . . .  .  . . .. .  .  . . .. . .  .`
for (let g of res) {
  console.log(g)
teks += `> $ ${g.title}
> $ ${g.link}
> $ ${g.snippet}
> . . . . . . . . . . . . . . . . . . . . . . . .`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, fkontak)
//m.reply(teks)
})
} catch(e) {    
console(e)
sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");


}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = ['google']
handler.exp = 0
handler.level = 6
handler.limit = 0
export default handler
const getRandom = (ext) => { 
  return `${Math.floor(Math.random() * 10000)}${ext}`;
}