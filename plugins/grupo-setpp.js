
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw `${lenguajeGB['smsAvisoMG']()}️𝘼𝙣𝙚𝙭𝙚 𝙪𝙢𝙖 𝙞𝙢𝙖𝙜𝙚𝙢`
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(`${lenguajeGB['smsAvisoEG']()}𝗙𝗼𝘁𝗼 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼 𝗮𝗹𝘁𝗲𝗿𝗮𝗱𝗮 𝗰𝗼𝗺 𝘀𝘂𝗰𝗲𝘀𝘀𝗼`))
} else throw `${lenguajeGB['smsAvisoMG']()}️𝘼𝙣𝙚𝙭𝙚 𝙪𝙢𝙖 𝙞𝙢𝙖𝙜𝙚𝙢`}
handler.command = /^setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
