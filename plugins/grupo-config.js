
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
const { reaction, antifake, antiTwitter, antiInstagram, antiFacebook, antiTelegram, antiYoutube, antiTiktok, isBanned, autolevelup, antiver, antitoxic, temporal, restrict, stickers, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, afkadm, gpt,edgar,reply ,downloads, jogos, delete: del } = global.db.data.chats[m.chat]

let text = 
`╭━[ 𝘾𝙊𝙉𝙁𝙄𝙂]━⬣
┃
┃ ⸸ 𝙁𝙐𝙉𝘾𝘼𝙊  𝘼𝙏𝙄𝙑𝘼𝘿𝘼 ➠ 🌕
┃ ⸸ 𝙁𝙐𝙉𝘾𝘼𝙊  𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝘼 ➠ 🌒
┃
┃ 𝙱𝚘𝚝
┃━━━━━━━━━⬣
┃
┃⏦ 𝘽𝙊𝙏 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 ${global.db.data.settings[conn.user.jid].temporal ? '🌕' : '🌒'}
┃⏦ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 ${stickers ? '🌕' : '🌒'}
┃⏦ 𝙍𝙀𝘼𝘾𝙊𝙀𝙎 𝘿𝙊 𝘽𝙊𝙏${reaction ? '🌕' : '🌒'}
┃⏦ 𝘼𝙐𝙏𝙊𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ${autosticker ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙐𝘿𝙄𝙊𝙎 ${audios ? '🌕' : '🌒'} 
┃⏦ 𝘾𝙃𝘼𝙏 𝘽𝘼𝙉𝙄𝘿𝙊? ${global.db.data.chats[m.chat].isBanned ? '✅' : '❌'}
┃
┃ 𝙲𝚑𝚊𝚝
┃━━━━━━━━━⬣
┃
┃⏦ 𝙉𝙄𝙑𝙀𝙇 ${global.db.data.chats[m.chat].autolevelup ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄𝙏𝙍𝘼𝙑𝘼 ${global.db.data.chats[m.chat].antiTraba ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾 ${antitoxic ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄 𝙄𝙉𝙏𝙀𝙍𝙉𝘼𝘾𝙄𝙊𝙉𝘼𝙇 ${antifake ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄 𝙑𝙀𝙍 ${antiver ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄𝘿𝙀𝙇𝙀𝙏𝙀 ${global.db.data.chats[m.chat].delete ? '🌕' : '🌒'}
┃⏦ 𝘼𝙁𝙆 ${afkadm ? '🌒' : '🌕'}
┃⏦ 𝘽𝙊𝘼𝙎 𝙑𝙄𝙉𝘿𝘼𝙎${welcome ? '🌕' : '🌒'}
┃⏦ 𝘿𝙀𝙏𝙀𝘾𝙏 ${detect ? '🌕' : '🌒'} 
┃⏦ 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝙍 𝘼𝘿𝙄𝘾𝙄𝙊𝙉𝘼𝙍 𝙀 𝙍𝙀𝙈𝙊𝙑𝙀𝙍 ${global.db.data.settings[conn.user.jid].restrict ? '🌕' : '🌒'}
┃⏦ 𝙈𝙊𝘿𝙊 𝘼𝘿𝙈𝙄𝙉 ${global.db.data.chats[m.chat].modoadmin ? '🌕' : '🌒'}
┃
┃ 𝙻𝚒𝚗𝚔𝚜
┃━━━━━━━━━⬣
┃
┃⏦ 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 ${antiLink2? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 ${antiLink ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄 𝙏𝙄𝙆𝙏𝙊𝙆 ${antiTiktok ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 ${antiYoutube ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 ${antiTelegram ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 ${antiFacebook ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 ${antiInstagram ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙏𝙒𝙄𝙏𝙏𝙀𝙍 ${antiTwitter ? '🌕' : '🌒'}
┃
┃ 𝙸𝚗𝚝𝚎𝚛𝚊𝚌𝚘𝚎𝚜
┃━━━━━━━━━⬣
┃ 
┃⏦𝙄𝘼 ${gpt ? '🌕' : '🌒'}
┃⏦𝙀𝘿𝙂𝘼𝙍- 𝙂𝙋𝙏${edgar ? '🌕' : '🌒'}
┃⏦𝙄𝘼 𝙍𝙀𝙋𝙇𝙔 ${reply ? '🌕' : '🌒'}
┃⏦𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎 ${downloads ? '🌕' : '🌒'}
┃⏦𝙅𝙊𝙂𝙊𝙎 ${jogos ? '🌕' : '🌒'}
┃⏦𝘼𝘾𝙊𝙀𝙎${global.db.data.chats[m.chat].acoes ? '🌕' : '🌒'}
╰━━━❰ *💀 ${vs}* ❱━━⬣
`.trim()

await conn.sendFile(m.chat, imagen3, 'gata.mp4', text)



 }
handler.help = ['group open / close', 'grupo abrir / fechar']
handler.tags = ['group']
handler.command = /^(gpconfig|config)$/i
handler.admin = true
handler.botAdmin = false
handler.exp = 0
export default handler
