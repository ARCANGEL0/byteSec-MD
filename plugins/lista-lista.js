
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let texto = `
╭━[ 🗂️ 𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 ]━━━━━━━━⬣
┃
┃ ⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗦
┃ ${usedPrefix}listaadv 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 🔇 𝗦𝗜𝗟𝗘𝗡𝗖𝗜𝗔𝗗𝗢𝗦
┃ ${usedPrefix}listsilen 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ ☠️ 𝗘𝗫𝗣𝗨𝗟𝗦𝗢𝗦 
┃ ${usedPrefix}listanegra 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 📛 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦
┃ ${usedPrefix}listabloqueados  
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 🚷 𝗘𝗫𝗜𝗟𝗔𝗗𝗢𝗦 𝗗𝗘 𝗨𝗦𝗔𝗥 𝗢 𝗕𝗢𝗧
┃ ${usedPrefix}listabanidos
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 📵 𝗖𝗛𝗔𝗧 𝗕𝗔𝗡𝗜𝗗𝗢𝗦
┃ ${usedPrefix}listabanchat 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`

await conn.sendFile(m.chat, imagen3, 'gata.mp4', texto)

}
handler.admin= true
handler.command = /^listas|list?$/i
export default handler
