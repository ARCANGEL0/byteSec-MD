
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, text, usedPrefix, command,isAdmin,isOwner }) => {
  
  
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}

if(!text){
  
  m.reply(`╭─┅──┅❖  ❖─┅──┅

𝙿𝚘𝚋𝚛𝚎 𝚊𝚕𝚖𝚊, 𝚍𝚒𝚐𝚊-𝚖𝚎 𝚚𝚞𝚊𝚕 𝚘 𝚍𝚎𝚜𝚝𝚒𝚗𝚘 𝚍𝚎 𝚟𝚘𝚜𝚜𝚊𝚜 𝚚𝚞𝚎𝚒𝚡𝚊𝚜 𝚎 𝚍𝚎𝚗𝚞𝚗𝚌𝚒𝚊𝚜, 𝚙𝚊𝚛𝚊 𝚘𝚗𝚍𝚎 𝚗𝚎𝚜𝚝𝚎 𝚎𝚕𝚘 𝚍𝚎 𝚜𝚘𝚖𝚋𝚛𝚊𝚜 𝚋𝚒𝚗𝚊𝚛𝚒𝚊𝚜 𝚍𝚎𝚟𝚘 𝚎𝚗𝚌𝚊𝚖𝚒𝚗𝚑𝚊𝚛 𝚘𝚜 𝚐𝚛𝚒𝚝𝚘𝚜 𝚍𝚎 𝚟𝚘𝚜𝚜𝚘𝚜 𝚖𝚎𝚖𝚋𝚛𝚘𝚜.𝙸𝚗𝚜𝚒𝚛𝚊 𝚞𝚖 𝚗𝚞𝚖𝚎𝚛𝚘 𝚘𝚞 𝙸𝙳 𝚍𝚎 𝚞𝚖 𝚐𝚛𝚞𝚙𝚘 𝚊 𝚛𝚎𝚌𝚎𝚋𝚎𝚛 𝚊𝚜 𝚍𝚎𝚗𝚞𝚗𝚌𝚒𝚊𝚜.
*.setcanal* _id grupo ou telefone_

_*Exemplo*_ :
*.setcanal _351927285125_*
*.setcanal _120038461832@g.whatsapp.net_*

*Para ver o id do grupo, digite _.id_*
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
}

if(text.includes("@")){
m.react("✅")
global.db.data.chats[m.chat].reportchat = text
}
else if (/^\d+$/.test(text)) {
    // If text is only numbers
    text += '@s.whatsapp.net';
    global.db.data.chats[m.chat].reportchat = text;
}




}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']

handler.command = /^(setcanal)$/i 
export default handler
