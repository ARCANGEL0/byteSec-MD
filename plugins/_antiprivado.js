
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯


const comandos = /piedra|papel|tijera|estado|verificar|code|jadibot --code|--code|creadora|bottemporal|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|serbot|verify|register|registrar|reg|reg1|nombre|name|nombre2|name2|edad|age|edad2|age2|genero|género|gender|identidad|pasatiempo|hobby|identify|finalizar|pas2|pas3|pas4|pas5|registroc|deletesesion|registror|jadibot/i
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner,isAllowed ,plugin,usedPrefix, command }) {
if (m.isBaileys && m.fromMe) return !0
if(global.db.data.chats[m.chat].fim) return !1
if (m.isGroup) return !1
if (!m.message) return !0
const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0
console.log(m.plugin)
let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
if(!global.db.data.chats[m.chat].msgCount){ global.db.data.chats[m.chat].msgCount = 0
}
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}
global.db.data.chats[m.chat].autolevelup = false
console.log("private chat allowed?   " +  isAllowed)
 if(!isAllowed && !m.fromMe && bot.antiPrivate&& global.db.data.chats[m.chat].msgCount >= 5){
 m.reply(`╭─┅──┅❖ ༒︎ ❖─┅──┅
𝑪𝒂𝒓𝒐 ${m.pushName},

𝑨𝒔 𝒕𝒓𝒆𝒗𝒂𝒔 𝒄𝒐𝒏𝒔𝒖𝒎𝒊𝒓𝒂𝒎 𝒐 𝒖𝒍𝒕𝒊𝒎𝒐 𝒗𝒆𝒔𝒕𝒊𝒈𝒊𝒐 𝒅𝒐 𝒑𝒆𝒓𝒊𝒐𝒅𝒐 𝒅𝒆 𝒕𝒆𝒔𝒕𝒆𝒔 𝒏𝒆𝒔𝒕𝒆 𝒄𝒉𝒂𝒕. 𝑶 𝒐𝒄𝒂𝒔𝒐 𝒕𝒓𝒐𝒖𝒙𝒆 𝒄𝒐𝒏𝒔𝒊𝒈𝒐 𝒐 𝒇𝒊𝒎 𝒅𝒆𝒔𝒕𝒂 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂, 𝒎𝒂𝒔 𝒏ã𝒐 𝒐 𝒇𝒊𝒎 𝒅𝒆 𝒏𝒐𝒔𝒔𝒂 𝒄𝒐𝒏𝒆𝒙𝒂𝒐.  
𝑺𝒆 𝒅𝒆𝒔𝒆𝒋𝒂𝒓 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒂𝒓 𝒆𝒙𝒑𝒍𝒐𝒓𝒂𝒏𝒅𝒐 𝒐𝒔 𝒔𝒆𝒈𝒓𝒆𝒅𝒐𝒔 𝒗𝒆𝒍𝒂𝒅𝒐𝒔 𝒆 𝒐𝒔 𝒎𝒊𝒔𝒕𝒆𝒓𝒊𝒐𝒔 𝒏𝒐𝒕𝒖𝒓𝒏𝒐𝒔, 𝒆𝒏𝒕𝒓𝒆 𝒆𝒎 𝒄𝒐𝒏𝒕𝒂𝒄𝒕𝒐 𝒄𝒐𝒎 𝒏𝒐𝒔𝒔𝒐 𝒔𝒖𝒑𝒐𝒓𝒕𝒆:
+351 927 285 125
+55 45 9852-7531

𝑵𝒂𝒐 𝒉𝒆𝒔𝒊𝒕𝒆 𝒆𝒎 𝒅𝒆𝒊𝒙𝒂𝒓-𝒏𝒐𝒔 𝒖𝒎𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎,𝒑𝒐𝒊𝒔 𝒏𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐, 𝒔𝒆𝒎𝒑𝒓𝒆 𝒉𝒂 𝒖𝒎 𝒄𝒂𝒎𝒊𝒏𝒉𝒐 𝒐𝒄𝒖𝒍𝒕𝒐 𝒂 𝒔𝒆𝒓 𝒅𝒆𝒔𝒄𝒐𝒃𝒆𝒓𝒕𝒐.

𝑸𝒖𝒆 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒐 𝒆𝒏𝒗𝒐𝒍𝒗𝒂𝒎 𝒆 𝒐𝒔 𝒄𝒐𝒓𝒗𝒐𝒔 𝒂𝒄𝒐𝒎𝒑𝒂𝒏𝒉𝒆𝒎 𝒔𝒖𝒂 𝒋𝒐𝒓𝒏𝒂𝒅𝒂.

— 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🪶

*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
global.db.data.chats[m.chat].fim = true
}
else if (!isAllowed && bot.antiPrivate) {
  global.db.data.chats[m.chat].msgCount+=1

return !1
}
if(isAllowed) return 0
return !1
}

