
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { usedPrefix, text, command, conn, args }) => {

if (!text) throw `╭━━━━❰ ⚠️ ❱━━━━━⬣
┃
┃ 🪦🐈‍⬛ 𝐅𝐨𝐫𝐧𝐞𝐜𝐚 𝐨 𝐧𝐨𝐦𝐞 𝐝𝐨 
┃ 𝐮𝐬𝐮𝐚𝐫𝐢𝐨, 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐞𝐮 𝐩𝐨𝐬𝐬𝐚 
┃ 𝐭𝐫𝐚𝐳𝐞𝐫 𝐨𝐬 𝐫𝐞𝐥𝐚𝐭𝐨𝐬 𝐪𝐮𝐞 𝐛𝐮𝐬𝐜𝐚𝐬
┃ 𝐜𝐨𝐦𝐨 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐝𝐚𝐧ç𝐚𝐧𝐭𝐞𝐬 𝐧𝐚 
┃ 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚 𝐝𝐨 𝐜𝐢𝐛𝐞𝐫𝐞𝐬𝐩𝐚ç𝐨.
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ ${usedPrefix + command} usuario*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`



let resp = await fetch(`https://api.neoxr.eu/api/igstory?username=${text}&apikey=${global.neoxr}`)
let data = await resp.json()
console.log(data)

data.data.forEach(item => {
  if (item.type === 'jpg') {
    conn.sendFile(m.chat, item.url, 'error.jpg', ``, m)}
  
  
  else if(item.type === 'mp4'){
    conn.sendFile(m.chat, item.url, 'error.jpg', ``, m)
  }
});

//conn.sendFile(m.chat, url, 'ig' + (type == 'video' ? '.mp4' : '.jpg'), `

}
handler.command = ['story']
handler.limit = 0
handler.level = 6

export default handler
