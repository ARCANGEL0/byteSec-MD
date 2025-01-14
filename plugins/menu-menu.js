
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
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'br'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = `${who.split("@")[0]}`
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', mi thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")
const lugarFecha = moment().tz('America/Sao_Paulo')  // Adjust the timezone as needed
const formatoFecha = {
  weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

}
lugarFecha.locale('pt', formatoFecha)
const horarioFecha = lugarFecha.format('dd, DD [de] MMMM,YYYY ♱ HH:mm A').replace(/^\w/, (c) => c.toUpperCase())


/*

chat, `${langTOGGLE.smsConfi10()}\n\n🥀 ${langTOGGLE.smsConfi2()} *@${toUser}*

${langTOGGLE.smsConfi3()}
${langTOGGLE.smsConfi4()}

${langTOGGLE.smsConfi5()}
${langTOGGLE.smsConfi6()}
${langTOGGLE.smsConfi7()}
${langTOGGLE.smsConfi8()}
${m.isGroup ? `` : `${langTOGGLE.smsConfi9()}`}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.welcome ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} welcome
🪶 ${langTOGGLE.smsWel2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.detect ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} detec
🪶 ${langTOGGLE.smsDete2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.autolevelup ? '🌕' : '💿' : langTOGGLE.smsNoGg()} 
${usedPrefix + command} autolevelup | autonivel
🪶 Ativa sistema de nivelamento e recompensas do Edgar Bot

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaOw()} ${bot.restrict ? '🌕' : '💿'}
${usedPrefix + command} restrict
🪶 ${langTOGGLE.smsRestri2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaOw()} ${bot.antiCall ? '🌕' : '💿'}
${usedPrefix + command} antiCall
🪶 ${langTOGGLE.smsLlamar2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${bot.antiSpam ? '🌕' : '💿'}
${usedPrefix + command} antiSpam
🪶 Ativa o antispam do Edgar Bot, mutando e punindo quem floodar

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaOw()} ${global.opts['self'] ? '💿' : '🌕'}
${usedPrefix + command} self
🪶 Desativa o Edgar Allan Bot para todos.

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.modoadmin ? '🌕' : '💿' : langTOGGLE.smsNoGg()} 
${usedPrefix + command} modoadmin | sembot | pausa (HH:mm:ss)
🪶 Restringe o bot para apenas para admins 
(Opcional: tempo, use o comando com um prazo na sintaxe Hora: minutos: segundos para automatizar ativacao e desligamento automático. 
ex: .on mutebot 00:35:12)

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaOw()} ${global.opts['autoread'] ? '🌕' : '💿'}
${usedPrefix + command} autoread
🪶 ${langTOGGLE.smsLect1()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaOw()} ${bot.temporal ? '🌕' : '💿'}
${usedPrefix + command} temporal
🪶 Mensagens temporárias 

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.stickers ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} stickers
🪶 ${langTOGGLE.smsStik1()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.autosticker ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} autosticker
🪶 ${langTOGGLE.smsStickA2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.reaction ? '🌕' : '💿' : langTOGGLE.smsNoGg()}    
${usedPrefix + command} reaction
🪶 ${langTOGGLE.smsReacc2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.audios ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} audios
🪶 ${langTOGGLE.smsAudi2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antitoxic ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} antitoxic
🪶 ${langTOGGLE.smsAntitoc2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antiver ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} antiver
🪶 ${langTOGGLE.smsModOb2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.delete ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} antidelete
җ
🪶 ${langTOGGLE.smsAntiEli2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antifake ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} antifake
🪶 ${langTOGGLE.smsAntiInt2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antiLink ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} antiZap | antiWhats
🪶 ${langTOGGLE.smsAntiE2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antiLink2 ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} antiLink | links
🪶 Excluir pessoas que enviarem qualquer link www. e https

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antiTiktok ? '🌕' : '💿' : langTOGGLE.smsNoGg()} 
${usedPrefix + command} antiTiktok
🪶 ${langTOGGLE.smsAntiTT2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antiYoutube ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} antiYoutube
🪶 ${langTOGGLE.smsAntiYT2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antiTelegram ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} antiTelegram
🪶 ${langTOGGLE.smsAntiTEL2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antiFacebook ? '🌕' : '💿' : langTOGGLE.smsNoGg()} 
${usedPrefix + command} antiFacebook
🪶 ${langTOGGLE.smsAntiFB2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antiInstagram ? '🌕' : '💿' : langTOGGLE.smsNoGg()}
${usedPrefix + command} antiInstagram
🪶 ${langTOGGLE.smsAntiIG2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()} ${m.isGroup ? chat.antiTwitter ? '🌕' : '💿' : langTOGGLE.smsNoGg()}   
${usedPrefix + command} antiTwitter
🪶 ${langTOGGLE.smsAntiTW2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaOw()} ${global.opts['pconly'] ? '🌕' : '💿'}
${usedPrefix + command} pconly
🪶 ${langTOGGLE.smsSOLOP2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaOw()} ${global.opts['gconly'] ? '🌕' : '💿'}
${usedPrefix + command} gconly
җ ${langTOGGLE.smsSOLOG2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${global.quixp  ? '🌕' : '💿'}
${usedPrefix + command} quizxp
🪶 Ativa o modo competição pro quiz

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${global.db.data.chats[m.chat].ricksan   ? '🌕' : '💿'}
${usedPrefix + command} rick
🪶 Desativa a IA Rick Sanchez neste chat

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${chat.xadrez  ? '🌕' : '💿'}
${usedPrefix + command} xadrez
🪶 Ativa habilidade de jogar xadrez no grupo

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${chat.jogos  ? '🌕' : '💿'}
${usedPrefix + command} jogos|games|jogo
🪶 Desabilita jogos neste vale obscuro

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${chat.gpt  ? '🌕' : '💿'}
${usedPrefix + command} ia|ai|gpt
🪶 Desabilita a inteligência artiricial do bot

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${chat.admafk  ? '🌕' : '💿'}
${usedPrefix + command} xadrez
🪶 Habilita AFK somente para ADM

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${chat.downloads  ? '🌕' : '💿'}
${usedPrefix + command} dl|baixar|downloads
🪶 Desabilita funções de download neste grup

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${chat.busca  ? '🌕' : '💿'}
${usedPrefix + command} busca|pesquisa|google
🪶 Desabilita funções de busca neste grupo

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${chat.midia  ? '🌕' : '💿'}
${usedPrefix + command} midia|ferramentas es 
🪶 Desabilita funções de mídia no grupo

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

җ ${langTOGGLE.smsParaAdmins()  }${chat.midia  ? '🌕' : '💿'}
${usedPrefix + command} interacoes {hh:mm:ss}
🪶 Desabilita funções de interação no grupo
(Opcional: pode-se definir um horário para agendar ativação ou desativação do comando. exemplo:
.off interacoes 02:35:12
Isto fará com que as interações fiquem ligadas dirante 2 horas, 35 minutos e 12 segundos e depois disto, serão desligadas)



*/
let bot = global.db.data.settings[conn.user.jid] || {}
let chat = global.db.data.chats[m.chat]
let interacoes = chat.downloads && chat.midia && chat.gpt && chat.jogos && chat.busca && chat.reply && chat.edgar && chat.acoes 

let ownerfuncoes = `|
|၊၊〘𖤍 *CRIADORES* 𖤍〙
|
|╓─━⎓⎔ ${bot.modoia  ? '🌕' : '💿'} *IA no privado* 
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ᶦʳᵃ ᶜᵒⁿᵛᵉʳˢᵃʳ ⁿᵒʳᵐᵃˡᵐᵉⁿᵗᵉ ⁿᵒ ᵖʳᶦᵛᵃᵈᵒ ˢᵉᵐ ᵘˢᵒ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ᵖʳᵃ ᴵᴬ
|┕ _.on/off_ *modoia*
|
|╓─━⎓⎔ ${bot.desativado  ? '🌕' : '💿'} *Bot inativo* 
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ᵉˢᵗᵃʳᵃ ᵇˡᵒᵠᵘᵉᵃᵈᵒ ᵉ ᵘᵗᶦˡᶦᶻᵃᵛᵉˡ ᵃᵖᵉⁿᵃˢ ᵃᵒˢ ᶜʳᶦᵃᵈᵒʳᵉˢ
|┕ _.on/off_ *desativado*
|
|╓─━⎓⎔ ${bot.antiCall  ? '🌕' : '💿'} *Anti-chamadas* 
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ᶦʳᵃ ᵇˡᵒᵠᵘᵉᵃʳ ᵒ ᵘˢᵘᵃʳᶦᵒ ᵠᵘᵉ ᵒ ˡᶦᵍᵃʳ ᵖᵒʳ ᵗᵉˡᵉᶠᵒⁿᵉ
|┕ _.on/off_ *anticall*
|
|╓─━⎓⎔ ${bot.pconly ? '🌕' : '💿'} *Somente privado* 
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ˢᵒ ᶠᵘⁿᶜᶦᵒⁿᵃʳᵃ ᵉᵐ ᵖʳᶦᵛᵃᵈᵒ
|┕ _.on/off_ *privado*
|
|╓─━⎓⎔ ${chat.gconly  ? '🌕' : '💿'} *Somente grupos* 
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ˢᵒ ᶠᵘⁿᶜᶦᵒⁿᵃʳᵃ ᵉᵐ ᵍʳᵘᵖᵒˢ
|┕ _.on/off_ *grupos*
|
|╓─━⎓⎔ ${chat.antiPrivate  ? '🌕' : '💿'} *Anti privado* 
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ˢᵒ ᶠᵘⁿᶜᶦᵒⁿᵃʳᵃ ᵉᵐ ᵖʳᶦᵛᵃᵈᵒ ᵖᵃʳᵃ ᵘˢᵘᵃʳᶦᵒˢ ᵖᵉʳᵐᶦᵗᶦᵈᵒˢ
|┕ _.on/off_ *grupos*
|
|`
let menufuncoes =`╭─┅──┅❖  ♱︎  ❖─┅─┅
 |                *FUNÇÕES*
╰─┅---─┅❖  ⸸  ❖─┅┅
┃ 𖤍 *Funções para automação em grupo como Antispam, Anti +18, Antilinks , AntiApagar, Temporizador para o bot e dentre outros.*

${langTOGGLE.smsConfi5()}
${langTOGGLE.smsConfi6()}
${langTOGGLE.smsConfi7()}

┃ Use *.on [função]* para ativar
┃ Use *.off [função]* para desativar

╭────
|╓─━⎓⎔ ${chat.nsfw  ? '🌕' : '💿'} *NSFW* 
|╟ • •  ᴴᵃᵇᶦˡᶦᵗᵃ ᶜᵒⁿᵗᵉᵘᵈᵒ ᵃᵈᵘˡᵗᵒ ⁿᵒ ᵍʳᵘᵖᵒ. ˢᵉ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃ ˢᵒᵐᵇʳᵃ ᵖʳᵒᶠᵃⁿᵃ ᵠᵘᵉ ᵉⁿᵛᶦᵃʳ ᵃˡᵍᵒ ᵈᵉˢᵗᵉ ᵍᵉⁿᵉʳᵒ ᵗᵉʳᵃ ᵃ ᵐᵉⁿˢᵃᵍᵉᵐ ᵃᵖᵃᵍᵃᵈᵃ ᵉ ᵘᵐᵃ ᵃᵈᵛᵉʳᵗᵉⁿᶜᶦᵃ
|╟
|┕ _.on/off_ *+18*
|
|╓─━⎓⎔ ${chat.delete  ? '🌕' : '💿'} *Sistema de nível* 
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᶦⁿᵛᵒᶜᵃ ᵒ ˢᶦˢᵗᵉᵐᵃ ᵈᵉ ⁿᶦᵛᵉᶦˢ ⁿᵉˢᵗᵉ ᵈᵒᵐᶦⁿᶦᵒ, ᵖᵉʳᵐᶦᵗᶦⁿᵈᵒ ᵃᵈᵠᵘᶦʳᶦʳ ᵉˣᵖᵉʳᶦᵉⁿᶜᶦᵃ, ᵃˢᶜᵉⁿᵈᵉʳ ᵈᵉ ⁿᶦᵛᵉˡ ᵉ ᵒᵇᵗᵉʳ ᴰᵃʳᵏᶜᵒᶦⁿˢ
|╟
|┕ _.on/off_ *autonivel*
|
|╓─━⎓⎔ ${chat.delete  ? '🌕' : '💿'} *AntiSpam* 
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ˢᶦˡᵉⁿᶜᶦᵃ ᵒ ᶦⁿᶠʳᵃᶜᵗᵒʳ ᵠᵘᵉ ᵖᵉʳᵗᵘʳᵇᵃʳ ᵒ ˢᶦˡᵉⁿᶜᶦᵒ ᵉ ᵃ ᵖᵃᶻ ⁿᵉˢᵗᵉ ᵈᵒᵐᶦⁿᶦᵒ, ᵃᵖᵃᵍᵃⁿᵈᵒ ˢᵘᵃˢ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵉ ᵈᵉˢᶠᵉʳᶦⁿᵈᵒ ᵘᵐᵃ ᵃᵈᵛᵉʳᵗᵉⁿᶜᶦᵃ
|╟
|┕ _.on/off_ *autonivel*
|
|╓─━⎓⎔ ${chat.delete  ? '🌕' : '💿'} *Anti-Apagar*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᶦʳᵃ ᵈᵉˢᵛᵉˡᵃʳ ᵃˢ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵃᵖᵃᵍᵃᵈᵃˢ ᵖᵉˡᵃ ᵃˡᵐᵃ ᵠᵘᵉ ᶜᵒᵐᵘⁿᶦᶜᵒᵘ.
|╟
|┕ _.on/off_ *antidelete*
|
|╓─━⎓⎔ ${chat.nsfw  ? '🌕' : '💿'} *Anti Vis. Única* 
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃˢ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵒᶜᵘˡᵗᵃˢ ⁿᵃˢ ˢᵒᵐᵇʳᵃˢ ᶜᵒᵐ ᵛᶦˢᵘᵃˡᶦᶻᵃᶜᵃᵒ ᵘⁿᶦᶜᵃ ˢᵉʳᵃᵒ ᵈᵉˢᵛᵉˡᵃᵈᵃˢ ᵃᵒ ᶜʰᵃᵗ.
|╟
|┕ _.on/off_ *antiver*
|
|╓─━⎓⎔ ${chat.nsfw  ? '🌕' : '💿'} *AntiToxico*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ᵒᵘˢᵃʳ ˢᵉʳ ᵉˣᶜᵉˢˢᶦᵛᵃᵐᵉⁿᵗᵉ ᵒᶠᵉⁿˢᶦᵛᵒ ˢᵉʳᵃ ᵃᵈᵛᵉʳᵗᶦᵈᵒ ᵉ ˢᵘᵃˢ ᵖᵃˡᵃᵛʳᵃˢ ˢᵉʳᵃᵒ ᵃᵖᵃᵍᵃᵈᵃˢ ⁿᵃˢ ˢᵒᵐᵇʳᵃˢ ᵈᵒ ᵉˢᵠᵘᵉᶜᶦᵐᵉⁿᵗᵒ
|╟ •
|─┕ _.on/off_ *antitoxico*
|
|╓─━⎓⎔ ${interacoes  ? '💿' : '🌕'} *Interacoes* 
|╟ • •  ᴴᵃᵇᶦˡᶦᵗᵃ ᵗᵒᵈᵃˢ ᵃˢ ᶦⁿᵗᵉʳᵃᶜᵒᵉˢ ᵈᵒ ᴱᵈᵍᵃʳ. ᴼᵖᶜᶦᵒⁿᵃˡᵐᵉⁿᵗᵉ ᵉ ᵖᵒˢˢᶦᵛᵉˡ ᵖʳᵒᵍʳᵃᵐᵃʳ ᵖᵃʳᵃ ᵉˣᵉᶜᵘᵗᵃʳ ᵃᵖᵒˢ ᵘᵐ ᵗᵉᵐᵖᵒ
|╟ •
|─┕ _.on/off_ *interacoes* [horas:minutos:segundos]
|
|╓─━⎓⎔ ${chat.antiTraba  ? '🌕' : '💿'} *Anti trava*
|╟ • •  ᵠᵘᵃⁿᵈᵒ ᵃᵗᶦᵛᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ᵒᵘˢᵃʳ ᵉⁿᵛᶦᵃʳ ᵘᵐ ᵗʳᵃᵛᵃ ᵒᵘ ᵉˣᶜᵉˢˢᵒ ᵈᵉ ᶜᵃʳᵃᶜᵗᵉʳᵉˢ ˢᵉʳᵃ ˢᵉᵛᵉʳᵃᵐᵉⁿᵗᵉ ᵖᵘⁿᶦᵈᵒ.
|╟ •
|─┕ _.on/off_ *antitrava* 
|
|╓─━⎓⎔ ${chat.antifake  ? '🌕' : '💿'} *Anti fake*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ᵠᵘᵉ ᶠᵒʳᵉᵐ ᵈᵉᵗᵉⁿᵗᵒʳᵉˢ ᵈᵉ ᵘᵐ ⁿᵘᵐᵉʳᵒ ᶦⁿᵗᵉʳⁿᵃᶜᶦᵒⁿᵃˡ ˢᵘˢᵖᵉᶦᵗᵒ, ˢᵉʳᵃᵒ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᵐᵉⁿᵗᵉ ᵉˣᵖᵘˡˢᵒˢ.
|╟ •
|─┕ _.on/off_ *antifake* 
|
|╓─━⎓⎔ ${chat.detect  ? '🌕' : '💿'} *Avisos*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ᶦʳᵃ ᵉⁿᵛᶦᵃʳ ᵘᵐᵃ ᵐᵉⁿˢᵃᵍᵉᵐ ᵈᵉˢᶜʳᶦᵗᶦᵛᵃ ˢᵒᵇʳᵉ ᵃᶜᵒᵉˢ ᶠᵉᶦᵗᵃˢ ⁿᵒ ᵍʳᵘᵖᵒ
|╟ •
|─┕ _.on/off_ *avisos* 
|
|╓─━⎓⎔ ${chat.welcome  ? '🌕' : '💿'} *Boas vindas*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ᶦʳᵃ ᵈᵃʳ ᵇᵒᵃˢ ᵛᶦⁿᵈᵃˢ ᵃ ᵐᵉᵐᵇʳᵒˢ ⁿᵒᵛᵒˢ
|╟ •
|─┕ _.on/off_ *welcome* 
|
|╓─━⎓⎔ ${chat.aurosticker  ? '🌕' : '💿'} *Auto figurinha*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ᶦʳᵃ ᶜʳᶦᵃʳ ᵉ ᵉⁿᵛᶦᵃʳ ᶠᶦᵍᵘʳᶦⁿʰᵃˢ ᵈᵉ ᵠᵘᵃˡᵠᵘᵉʳ ᶦᵐᵃᵍᵉᵐ ᵉⁿᵛᶦᵃᵈᵃ ⁿᵉˢᵗᵉ ᵈᵒᵐᶦⁿᶦᵒ.
|╟ •
|─┕ _.on/off_ *autofig* 
|
|╓─━⎓⎔ ${chat.reaction  ? '🌕' : '💿'} *Reações*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ,  ᵒ ᴱᵈᵍᵃʳ ᶦʳᵃ ʳᵉᵃᵍᶦʳ ᵃˢ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵉⁿᵛᶦᵃᵈᵃˢ ⁿᵒ ᵍʳᵘᵖᵒ
|╟ •
|─┕ _.on/off_ *emojis* 
|
|╓─━⎓⎔ ${chat.antiLink2  ? '🌕' : '💿'} *Antilink*
|╟ • •  ᵠᵘᵃⁿᵈᵒ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ˢᵉ ᵃᵗʳᵉᵛᵉʳ ᵃ ᵉⁿᵛᶦᵃʳ ᵠᵘᵃˡᵠᵘᵉʳ ˡᶦⁿᵏ ˢᵉʳᵃ ᵖᵘⁿᶦᵈᵒ ˢᵉᵛᵉʳᵃᵐᵉⁿᵗᵉ.
|╟ •
|─┕ _.on/off_ *antilink* 
|
|╓─━⎓⎔ ${chat.antiLink  ? '🌕' : '💿'} *AntiZap* 
|╟ • •  ᵠᵘᵃⁿᵈᵒ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ˢᵉ ᵒᵘˢᵃʳ ᶜᵒᵐᵖᵃʳᵗᶦˡʰᵃʳ ᵘᵐ ˡᶦⁿᵏ ᵈᵉ ᵍʳᵘᵖᵒ ᵈᵉ ʷʰᵃᵗˢᵃᵖᵖ ˢᵉʳᵃ ᶜᵃˢᵗᶦᵍᵃᵈᵒ
|╟ •
|─┕ _.on/off_ *antizap* 
|
|╓─━⎓⎔ ${chat.antiFacebook  ? '🌕' : '💿'} *Anti Facebook*
|╟ • •  ᵠᵘᵃⁿᵈᵒ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ᶜᵒᵐᵖᵃʳᵗᶦˡʰᵃʳ ᵘᵐ ˡᶦⁿᵏ ᵈᵒ ᶠᵃᶜᵉᵇᵒᵒᵏ ˢᵉʳᵃ ᵉˣᶦˡᵃᵈᵒ ᵃˢ ˢᵒᵐᵇʳᵃˢ
|╟ •
|─┕ _.on/off_ *antifb* 
|
|╓─━⎓⎔ ${chat.antiTelegram  ? '🌕' : '💿'} *Anti Telegram*
|╟ • •  ᵠᵘᵃⁿᵈᵒ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ᵉⁿᵛᶦᵃʳ ᵘᵐ ˡᶦⁿᵏ ᵈᵒ ᵀᵉˡᵉᵍʳᵃᵐ ˢᵉʳᵃ ᵉˣᶦˡᵃᵈᵒ.
|╟ •
|─┕ _.on/off_ *antitele* 
|
|╓─━⎓⎔ ${chat.antiTiktok  ? '🌕' : '💿'} *Anti TikTok 
|╟ • •  ᵠᵘᵃⁿᵈᵒ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ᵉⁿᵛᶦᵃʳ ᵘᵐ ˡᶦⁿᵏ ᵈᵒ ᵀᶦᵏᵀᵒᵏ ˢᵉʳᵃ ᵖᵘⁿᶦᵈᵒ ᵇʳᵘˢᶜᵃᵐᵉⁿᵗᵉ ..
|╟ •
|─┕ _.on/off_ *antitik* 
|
|╓─━⎓⎔ ${chat.antiYoutube  ? '🌕' : '💿'} *Anti YouTube 
|╟ • •  ᵠᵘᵃⁿᵈᵒ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ᵉⁿᵛᶦᵃʳ ᵘᵐ ˡᶦⁿᵏ ᵈᵒ ʸᵒᵘᵀᵘᵇᵉ ˢᵉʳᵃ ᵉˣᶦˡᵃᵈᵒ..
|╟ •
|─┕ _.on/off_ *antiyt* 
|
|╓─━⎓⎔ ${chat.antiTwitter  ? '🌕' : '💿'} *Anti Twitter 
|╟ • •  ᵠᵘᵃⁿᵈᵒ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ᵉⁿᵛᶦᵃʳ ᵘᵐ ᵁᴿᴸ ᵈᵒ ᵀʷᶦᵗᵗᵉʳ ˢᵉʳᵃ ᶜᵃˢᵗᶦᵍᵃᵈᵒ 
|╟ •
|─┕ _.on/off_ *antitw* 
|
|╓─━⎓⎔ ${chat.antiInstagram  ? '🌕' : '💿'} *Anti Instagram 
|╟ • •  ᵠᵘᵃⁿᵈᵒ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃᵠᵘᵉˡᵉ ᵠᵘᵉ ᵉⁿᵛᶦᵃʳ ᵘᵐ ᵘᵐ ˡᶦⁿᵏ ᵈᵒ ᶦⁿˢᵗᵃᵍʳᵃᵐ ˢᵉʳᵃ ᶜᵃˢᵗᶦᵍᵃᵈᵒ 
|╟ •
|─┕ _.on/off_ *antiinsta* 
|
|╓─━⎓⎔ ${chat.edgar  ? '🌕' : '💿'} *EdgarGPT*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵒ ᴱᵈᵍᵃʳ ᶦʳᵃ ʳᵉˢᵖᵒⁿᵈᵉʳ ᶜᵒᵐ ᴵᴬ ⁴.⁰ ᵠᵘᵃⁿᵈᵒ ˢᵉᵘ ⁿᵒᵐᵉ ᶠᵒʳ ᵖʳᵒᶜˡᵃᵐᵃᵈᵒ ⁿᵉˢᵗᵉ ᵈᵒᵐᶦⁿᶦᵒ
|╟ •
|─┕ _.on/off_ *edgar* 
|
|╓─━⎓⎔ ${chat.reply  ? '🌕' : '💿'} *Respostas do GPT*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ˢᵉʳᵃ ᵖᵒˢˢᶦᵛᵉˡ ʳᵉˢᵖᵒⁿᵈᵉʳ ʳᵉˢᵖᵒˢᵗᵃˢ ᵈᵃ ᴵᴬ ᵉ ᵐᵃⁿᵗᵉʳ ᵘᵐ ᶠˡᵘˣᵒ ᵈᵉ ᶜᵒⁿᵛᵉʳˢᵃ
|╟ •
|─┕ _.on/off_ *reply* 
|
|╓─━⎓⎔ ${chat.rick  ? '🌕' : '💿'} *Rick Sanchez*
|╟ • •  ˢᵉ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵇˡᵒᵠᵘᵉᶦᵃ ᵒ ᶜᵒᵐᵃⁿᵈᵒ ᵈᵃ ᴵᴬ ᵈᵒ ʳᶦᶜᵏ ˢᵃⁿᶜʰᵉᶻ
|╟ •
|─┕ _.on/off_ *rick* 
|
|╓─━⎓⎔ ${chat.ia  ? '🌕' : '💿'} *Inteligência Artificial*
|╟ • •  ˢᵉ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃˢ ᶠᵘⁿᶜᵒᵉˢ ᵈᵃ ᶜᵃᵗᵉᵍᵒʳᶦᵃ ᵈᵉ ᴵᴬ ᶠᶦᶜᵃʳᵃᵒ ᵇˡᵒᵠᵘᵉᵃᵈᵃˢ
|╟ •
|─┕ _.on/off_ *ia* 
|
|╓─━⎓⎔ ${chat.downloads  ? '🌕' : '💿'} *Downloads*
|╟ • •  ˢᵉ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃˢ ᶠᵘⁿᶜᵒᵉˢ ᵈᵃ ᶜᵃᵗᵉᵍᵒʳᶦᵃ ᵈᵉ ᵈᵒʷⁿˡᵒᵃᵈˢ ᶠᶦᶜᵃʳᵃᵒ ᵇˡᵒᵠᵘᵉᵃᵈᵃˢ

|╟ •
|─┕ _.on/off_ *downloads* 
|
|╓─━⎓⎔ ${chat.buscas  ? '🌕' : '💿'} *Buscas*
|╟ • •  ˢᵉ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃˢ ᶠᵘⁿᶜᵒᵉˢ ᵈᵃ ᶜᵃᵗᵉᵍᵒʳᶦᵃ ᵈᵉ ᵇᵘˢᶜᵃˢ ᵉ ᵖᵉˢᵠᵘᶦˢᵃˢ ᶠᶦᶜᵃʳᵃᵒ ᵇˡᵒᵠᵘᵉᵃᵈᵃˢ
|╟ •
|─┕ _.on/off_ *busca* 
|
|╓─━⎓⎔ ${chat.midia  ? '🌕' : '💿'} *Mídias*
|╟ • •  ˢᵉ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃˢ ᶠᵘⁿᶜᵒᵉˢ ᵈᵃ ᶜᵃᵗᵉᵍᵒʳᶦᵃ ᵈᵉ ᵐᶦᵈᶦᵃˢ ᵉ ᶜᵒⁿᵛᵉʳˢᵒʳᵉˢ ᶠᶦᶜᵃʳᵃᵒ ᵇˡᵒᵠᵘᵉᵃᵈᵃˢ
|╟ •
|─┕ _.on/off_ *midia* 
|
|╓─━⎓⎔ ${chat.acoes  ? '🌕' : '💿'} *Ações*
|╟ • •  ˢᵉ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃˢ ᶠᵘⁿᶜᵒᵉˢ ᵈᵃ ᶜᵃᵗᵉᵍᵒʳᶦᵃ ᵈᵉ ᵃᶜᵒᵉˢ ᵉⁿᵗʳᵉ ᵐᵉᵐᵇʳᵒˢ ᶠᶦᶜᵃʳᵃᵒ ᵇˡᵒᵠᵘᵉᵃᵈᵃˢ
|╟ •
|─┕ _.on/off_ *acoes* 
|
|╓─━⎓⎔ ${chat.jogos  ? '🌕' : '💿'} *Jogos*
|╟ • •  ˢᵉ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵒ, ᵃˢ ᶠᵘⁿᶜᵒᵉˢ ᵈᵃ ᶜᵃᵗᵉᵍᵒʳᶦᵃ ᵈᵉ ʲᵒᵍᵒˢ ᶠᶦᶜᵃʳᵃᵒ ᵇˡᵒᵠᵘᵉᵃᵈᵃˢ
|╟ •
|─┕ _.on/off_ *jogos* 
|
|╓─━⎓⎔ ${chat.admafk  ? '🌕' : '💿'} *AFK só admin*
|╟ • •  ˢᵉ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ, ˢᵒᵐᵉⁿᵗᵉ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ⁿᵉˢᵗᵃˢ ʳᵘᶦⁿᵃˢ ᵖᵒᵈᵉʳᵃᵒ ᵘᵗᶦˡᶦᶻᵃʳ ᵒ ᴬᶠᴷ
|╟ •
|─┕ _.on/off_ *afk* 
| ${isOwner ? ownerfuncoes : ''}
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()

let menubuscas=`╭─┅──┅❖  ♱︎  ❖─┅─┅
 |                *BUSCAS*
╰─┅---─┅❖  ⸸  ❖─┅┅
╭────
|╓─━⎓⎔  ${usedPrefix}imagem/${usedPrefix}img *﹝texto﹞*
|┕ ᴿᵉᵗᵒʳⁿᵃ ᵘᵐᵃ ᶠᵒᵗᵒ ᵈᵒ ᵍᵒᵒᵍˡᵉ ᶦᵐᵃᵍᵉˢ
|
|╓─━⎓⎔  ${usedPrefix}def  *﹝texto﹞*
|┕ ᴰᵉᶠᶦⁿᶦᶜᵃᵒ ᵈᵉ ᵖᵃˡᵃᵛʳᵃ
|
|╓─━⎓⎔  ${usedPrefix}apks *﹝app﹞*
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ᵃᵖᵏˢ
|
|╓─━⎓⎔  ${usedPrefix}livraria *﹝nome livro﹞*
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ᵠᵘᵃˡᵠᵘᵉʳ ˡᶦᵛʳᵒ ᵉᵐ ᴾᴰᶠ ᵒᵘ ᵉᴾᵘᵇ ⁿᵃ ˡᶦᵛʳᵃʳᶦᵃ ᵈᵒ ᴱᵈᵍᵃʳ 
|
|╓─━⎓⎔  ${usedPrefix}wallpaper/${usedPrefix}wp *﹝texto﹞*
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ʷᵃˡˡᵖᵃᵖᵉʳˢ ᵉ ᵗᵉˡᵃˢ ᵈᵉ ᶠᵘⁿᵈᵒ 
|
|╓─━⎓⎔  ${usedPrefix}pinterest/${usedPrefix}pin *﹝texto﹞*
|┕ ᴮᵘˢᶜᵃ ⁿᵒ ᵖᶦⁿᵗᵉʳᵉˢᵗ
|
|╓─━⎓⎔  ${usedPrefix}google *﹝texto﹞*
|┕ ᴮᵘˢᶜᵃ ⁿᵒ ᵍᵒᵒᵍˡᵉ
|
|╓─━⎓⎔  ${usedPrefix}jobs/${usedPrefix}empregos *﹝opcoes﹞*
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ᵉᵐᵖʳᵉᵍᵒˢ ⁿᵒ ᴸᶦⁿᵏᵉᵈᴵⁿ ᶜᵒᵐ ᶠᶦˡᵗʳᵒˢ
|
|╓─━⎓⎔  ${usedPrefix}academy/${usedPrefix}gacd *﹝texto﹞*
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ᵃʳᵗᶦᵍᵒˢ ᵃᶜᵃᵈᵉᵐᶦᶜᵒˢ, ᵈᵒᶜᵘᵐᵉⁿᵗᵒˢ ᵉ ᵗᵉˢᵉˢ ⁿᵒ ᵍᵒᵒᵍˡᵉ ˢᶜʰᵒˡᵃʳ
|
|╓─━⎓⎔  ${usedPrefix}core *﹝texto﹞*
|┕ ᴮᵘˢᶜᵃ ⁿᵃ ᶜᵒʳᵉ⁻ᵘᵏ ᵖᵒʳ ᵃʳᵗᶦᵍᵒˢ ᵉ ᵖᵉˢᵠᵘᶦˢᵃˢ ᵃᶜᵃᵈᵉᵐᶦᶜᵃˢ
|
|╓─━⎓⎔  ${usedPrefix}lyrics *﹝texto﹞*
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ˡᵉᵗʳᵃˢ ᵉ ᶜᶦᶠʳᵃˢ ᵈᵉ ᵘᵐᵃ ᵐᵘˢᶦᶜᵃ 
|
|╓─━⎓⎔  ${usedPrefix}yts *﹝texto﹞*
|┕ ᴮᵘˢᶜᵃ ⁿᵒ ʸᵒᵘᵗᵘᵇᵉ
|
|╓─━⎓⎔  ${usedPrefix}ringtone *﹝texto﹞*
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ᵗᵒᵠᵘᵉˢ ᵈᵉ ᶜᵉˡᵘˡᵃʳ
|
|╓─━⎓⎔  ${usedPrefix}news *﹝texto﹞* 
〘INDISPONÍVEL〙
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ⁿᵒᵗᶦᶜᶦᵃˢ ᵉ ᵐᵃⁿᶜʰᵉᵗᵉˢ
|
|╓─━⎓⎔  ${usedPrefix}elemento *﹝elemento ou numero atómico﹞*
|┕ ᴿᵉᵗᵒʳⁿᵃ ᶦⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵉ ᵘᵐ ᵉˡᵉᵐᵉⁿᵗᵒ ⁿᵃ ᵗᵃᵇᵉˡᵃ ᵖᵉʳᶦᵒᵈᶦᶜᵃ 
|
|╓─━⎓⎔  ${usedPrefix}nasa *﹝texto﹞* 🚫
|┕ ᴿᵉᵗᵒʳⁿᵃ ⁿᵒᵗᶦᶜᶦᵃˢ ᵈᵒ ᵈᶦᵃ ᵈᵃ ⁿᵃˢᵃ
|
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()


 let menujogos =`╭─┅──┅❖  ♱︎  ❖─┅─┅
 |                *JOGOS*
╰─┅---─┅❖  ⸸  ❖─┅┅
╭────
|╓─━⎓⎔  ${usedPrefix}forca
|┕ ᶜˡᵃˢˢᶦᶜᵒ ʲᵒᵍᵒ ᵈᵃ ᶠᵒʳᶜᵃ, ᵒⁿᵈᵉ ᵐᵃᵗᵉᶦ ᴾˡᵘᵗᵃᵒ. . .
|
|╓─━⎓⎔  ${usedPrefix}xadrez
|┕ ᴬ ᵃʳᵗᵉ ᵈᵃ ᵉˢᵗʳᵃᵗᵉᵍᶦᵃ ᵉᵐ ⁶⁴ ᵗᵉᵐᵉʳᵒˢᵃˢ ᶜᵃˢᵃˢ
|
|╓─━⎓⎔  ${usedPrefix}xo/${usedPrefix}ttt *﹝nome da sala﹞*
|┕ ᴶᵒᵍᵒ ᵈᵃ ⱽᵉˡʰᵃ: ˣ ᵉ ᴼ, ᵘᵐ ᵈᵘᵉˡᵒ ᵈᵉ ᵉˢᵗʳᵃᵗᵉᵍᶦᵃ ᵉ ᵈᵉˢᵗᶦⁿᵒ.
|
|╓─━⎓⎔  ${usedPrefix}cassino 
|┕ ᴰᶦᵛᶦʳᵗᵃ⁻ˢᵉ ⁿᵒ ᶜᵃˢˢᶦⁿᵒ ᵈ'ᵒ ᶜᵒʳᵛᵒ ᵉ ᵗᵉⁿᵗᵉ ᵃ ˢᵒʳᵗᵉ 
|
|╓─━⎓⎔  ${usedPrefix}plv 
|┕ ᶜᵃᶜᵃ⁻ᵖᵃˡᵃᵛʳᵃˢ: ᵉⁿᶦᵍᵐᵃ ᵈᵉ ˡᵉᵗʳᵃˢ ᵉⁿᵗʳᵉˡᵃᶜᵃᵈᵃˢ. 
|
|╓─━⎓⎔  ${usedPrefix}sopa
|┕ ᴶᵒᵍᵒ ᵈᵉ ʳᵃᶜᶦᵒᶜᶦⁿᶦᵒ ᵉ ᵇᵘˢᶜᵃ ᶦᵐᵖˡᵃᶜᵃᵛᵉˡ ᵈᵉ ᵖᵃˡᵃᵛʳᵃˢ ᵉᵐ ᵘᵐᵃ ᵐᵃᵗʳᶦᶻ
|
|╓─━⎓⎔  ${usedPrefix}sudoku
|┕ ᴱⁿᶦᵍᵐᵃ ᵈᵉ ⁿᵘᵐᵉʳᵒˢ ᵉ ˡᵒᵍᶦᶜᵃ.
|
|╓─━⎓⎔  ${usedPrefix}quiz *﹝numero﹞*
|┕ ᴰᵉˢᵃᶠᶦᵉ ˢᵉᵘ ᶜᵒⁿʰᵉᶜᶦᵐᵉⁿᵗᵒ ⁿᵃˢ ˢᵒᵐᵇʳᵃˢ ᵈᵒ ᵐᶦˢᵗᵉʳᶦᵒ ᵉ ᵉⁿᶦᵍᵐᵃ
|
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()



 let menudiv =`╭─┅──┅❖  ♱︎  ❖─┅─┅
 |                *DIVERSÕES*
╰─┅---─┅❖  ⸸  ❖─┅┅
╭────
|╓─━⎓⎔  ${usedPrefix}loja
|┕ ᴳᵃˢᵗᵉ ˢᵘᵃˢ ᴰᵃʳᵏᶜᵒᶦⁿˢ ⁿᵃ ᴸᵒʲᵃ ᵈ'ᵒ ᵍᵃᵗᵒ ᵖʳᵉᵗᵒ
|
|╓─━⎓⎔  ${usedPrefix}piadas
|┕ ᴺᵃʳʳᵃᵗᶦᵛᵃ ʰᵘᵐᵒʳᶦˢᵗᶦᶜᵃ
|
|╓─━⎓⎔  ${usedPrefix}sorte
|┕ ᴬᵇʳᵉ ᵘᵐ ᵇᶦˢᶜᵒᶦᵗᵒ ᵈᵃ ˢᵒʳᵗᵉ ᵉ ˡᵉ ˢᵘᵃ ᵖʳᵉᵛᶦˢᵃᵒ
|
|╓─━⎓⎔  ${usedPrefix}poemas
|┕ ᴾᵒᵉᵐᵃˢ ᵈᵉ ᵐᶦⁿʰᵃ ᵃᵘᵗᵒʳᶦᵃ  _﹝ʜᴇɴʀʏ﹞_ 
|
|╓─━⎓⎔  ${usedPrefix}curiosidades
|┕ ᶜᵘʳᶦᵒˢᶦᵈᵃᵈᵉˢ ᵈᶦᵛᵉʳˢᵃˢ
|
|╓─━⎓⎔  ${usedPrefix}morceguices 
|┕ ᴵⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ˢᵒᵇʳᵉ ᵃ ˢᵘᵇᶜᵘˡᵗᵘʳᵃ ᵍᵒᵗʰ
|
|╓─━⎓⎔  ${usedPrefix}biografia/${usedPrefix}bio 
|┕ ᴮᶦᵒᵍʳᵃᶠᶦᵃ ˢᵒᵇʳᵉ ᴱᵈᵍᵃʳ ᴬˡˡᵃⁿ ᴾᵒᵉ. 
|
|╓─━⎓⎔  ${usedPrefix}escrever  *﹝texto﹞*
|┕ ᶜᵒⁿᵛᵉʳᵗᵉ ᵗᵉˣᵗᵒ ᵉᵐ ᵐᵃⁿᵘˢᶜʳᶦᵗᵒ ᵉᵐ ᵖᵃᵖᵉˡ 
|
|╓─━⎓⎔  ${usedPrefix}top  *﹝numero﹞*  *﹝texto﹞* 
〘ADMIN!〙
|┕ ᴳᵉʳᵃ ᵘᵐᵃ ˡᶦˢᵗᵃ ᵈᵉ ᵗᵒᵖ ᴺ ᵘˢᵘᵃʳᶦᵒˢ 
|
|╓─━⎓⎔  ${usedPrefix}rank/.${usedPrefix}placar 
|┕ ᴹᵒˢᵗʳᵃ ᵘᵐ ʳᵃⁿᵏᶦⁿᵍ ᵈᵉ ᵐᵉᵐᵇʳᵒˢ
|
|╓─━⎓⎔  ${usedPrefix}horoscopo *﹝signo﹞*
|┕ ᴿᵉᵗᵒʳⁿᵃ ᵒ ʰᵒʳᵒˢᶜᵒᵖᵒ ˢᵒᵐᵇʳᶦᵒ ᵈᵒ ˢᶦᵍⁿᵒ ᵖʳᵒᶜˡᵃᵐᵃᵈᵒ 
|
|╓─━⎓⎔  ${usedPrefix}personalidade *﹝usuario﹞*
|┕ ᴿᵉᵃˡᶦᶻᵃ ᵘᵐᵃ ᵖʳᵉᵛᶦˢᵃᵒ ᵈᵃ ᵖᵉʳˢᵒⁿᵃˡᶦᵈᵃᵈᵉ ᵉ ᵗᶦᵖᵒˡᵒᵍᶦᵃ ᵈᵃ ᵖᵉˢˢᵒᵃ 
|
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()


let menuia =`╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *INTELIGÊNCIA ARTIFICIAL*
╰─┅---─┅❖  ⸸  ❖─┅┅
┃ 𖤍 *ˢᵉ ᴱᵈᵍᵃʳ ᵉˢᵗᶦᵛᵉʳ ᵃᵗᶦᵛᵒ ⁿᵒ ᵍʳᵘᵖᵒ, ᶦⁿᵛᵒᵠᵘᵉ⁻ᵒ ᵖᵒʳ ᴱᵈᵍᵃʳ ᵒᵘ ᴬˡˡᵃⁿ ᵖᵃʳᵃ ᵒᵇᵗᵉʳ ˢᵘᵃ ʳᵉˢᵖᵒˢᵗᵃ ᶜᵒᵐ ᴳᴾᵀ⁴ᵒ*
|
|╓─━⎓⎔  ${usedPrefix}iavoz *﹝texto﹞*
|┕ ᴱᵈᵍᵃʳᴳᴾᵀ ᶜᵒᵐ ʳᵉˢᵖᵒˢᵗᵃ ᵉᵐ ᵃᵘᵈᶦᵒ 
|
|╓─━⎓⎔  ${usedPrefix}gpt *﹝texto﹞*
|┕ ᴱᵈᵍᵃʳᴳᴾᵀ ⁴•⁰
|
|╓─━⎓⎔  ${usedPrefix}shady*﹝texto﹞*
|┕  ᴿᵃᵖᵇᵒᵗ⁴ᵒ, ˢˡᶦᵐ ˢʰᵃᵈʸ ᵍᵖᵗ
|
|╓─━⎓⎔  ${usedPrefix}nlp *﹝texto﹞*
|┕ ᴱᵈᵍᵃʳᴳᴾᵀ ⁴ᵒ ᵃᵛᵃⁿᶜᵃᵈᵒ ᵖᵃʳᵃ ᶠᶦⁿˢ ᵈᵉ ᵖᵉˢᵠᵘᶦˢᵃ ᵉ ᵃᶜᵃᵈᵉᵐᶦᶜᵒ. ᶜᵒⁿˢᵉᵍᵘᵉ ˡᵉʳ ᶦᵐᵃᵍᵉᵐ, ᵛᶦᵈᵉᵒ ᵉ ᴾᴰᶠ
|
|╓─━⎓⎔  ${usedPrefix}bing/${usedPrefix}imagine *﹝texto﹞*
|┕ ᴵᴬ ᴳᵉⁿᵉʳᵃᵗᶦᵛᵃ ᵖᵃʳᵃ ᶜʳᶦᵃʳ ᶦᵐᵃᵍᵉⁿˢ ᵈᵉ ᵃᶜᵒʳᵈᵒ ᶜᵒᵐ ˢᵉᵘ ᵈᵉˢᵉʲᵒ
|
|╓─━⎓⎔  ${usedPrefix}midjourney *﹝texto﹞*
〘INDISPONÍVEL〙
|┕ ᴳᵉʳᵃᶜᵃᵒ ᵈᵉ ᶦᵐᵃᵍᵉⁿˢ ᶜᵒᵐ ᴹᶦᵈʲᵒᵘʳⁿᵉʸ
|
|╓─━⎓⎔  ${usedPrefix}fsociety﹝texto﹞*
|┕ ᴍᴏᴅᴇʟᴏ ɪᴀ ᴛʀᴇɪɴᴀᴅᴏ ᴘᴀʀᴀ ɢᴜɪᴀʀ ᴇᴍ ᴘᴇɴᴛᴇsᴛ, ᴄʏʙᴇʀsᴇᴄᴜʀɪᴛʏ, ᴍᴇɴᴛᴏʀ ᴅᴇ ᴇᴛʜɪᴄᴀʟ ʜᴀᴄᴋɪɴɢ ᴇ ᴀɴᴀʟɪsᴇ ᴅᴇ ᴠᴜʟɴᴇʀᴀʙɪʟɪᴅᴀᴅᴇ
|
|╓─━⎓⎔  ${usedPrefix}box *﹝texto﹞*
|┕ ɪᴀ ᴘᴀʀᴀ ɢᴇʀᴀᴄ̧ᴀ̃ᴏ ᴅᴇ ᴄᴏᴅɪɢᴏ ᴇ sᴏғᴛᴡᴀʀᴇ
|
|╓─━⎓⎔  ${usedPrefix}rick *﹝texto﹞*
|┕ ᴳᴾᵀ⁴•ᵒ ᵘᵗᶦˡᶦᶻᵃⁿᵈᵒ ᵃ ᵖᵉʳˢᵒⁿᵃˡᶦᵈᵃᵈᵉ ᵗᵒˣᶦᶜᵃ ᵈᵒ ᴿᶦᶜᵏ ˢᵃⁿᶜʰᵉᶻ
|
||╓─━⎓⎔  ${usedPrefix}dict/${usedPrefix}dicionario  *﹝texto﹞*
|┕ ᴰᵉᶠᶦⁿᶦᶜᵃᵒ ᵈᵉ ᵖᵃˡᵃᵛʳᵃ
|
|╓─━⎓⎔  ${usedPrefix}math/${usedPrefix}calc *﹝formula﹞*
|┕ ᶜᵃˡᶜᵘˡᵃᵈᵒʳᵃ ᶜᶦᵉⁿᵗᶦᶠᶦᶜᵃ ᵃᵛᵃⁿᶜᵃᵈᵃ ᶜᵒᵐ ᵖᵃˢˢᵒ ᵃ ᵖᵃˢˢᵒ. ᴾᵉʳᵐᶦᵗᵉ ᵃˡᵍᵉᵇʳᵃ, ᶠᵘⁿᶜᵒᵉˢ, ᵐᵃᵗʳᶦᶻᵉˢ, ˡᶦᵐᶦᵗᵉˢ, ᶦⁿᵗᵉᵍʳᵃᶦˢ
|
|╓─━⎓⎔  ${usedPrefix}sum *﹝marque o PDF﹞*
|┕ ᶜʳᶦᵃ ᵘᵐ ˢᵘᵐᵃʳᶦᵒ ᵇᵉᵐ ʳᵉˢᵘᵐᶦᵈᵒ ᵉ ᵈᶦᵈᵃᵗᶦᶜᵒ ᵈᵉ ᵘᵐ ᴾᴰᶠ
|
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()


let menubaixar =`╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *DOWNLOADS*
╰─┅---─┅❖  ⸸  ❖─┅┅
|╓─━⎓⎔  ${usedPrefix}play *﹝texto﹞*
|┕ ᴱⁿᵛᶦᵃ ᵘᵐᵃ ᵐᵘˢᶦᶜᵃ ᵈᵒ ᵃˡᵉᵐ ᵈᵃ ᵖᵉⁿᵘᵐᵇʳᵃ 
|
|╓─━⎓⎔  ${usedPrefix}play2 *﹝texto﹞*
|┕ ᴱⁿᵛᶦᵃ ᵘᵐ ᵛᶦᵈᵉᵒ ᵈᵒ ᵃˡᵉᵐ ᵈᵃ ᵖᵉⁿᵘᵐᵇʳᵃ 
|
|╓─━⎓⎔  ${usedPrefix}spotify *﹝texto﹞*
|┕ ᴮᵃᶦˣᵉ ᵐᵘˢᶦᶜᵃˢ ᵖᵉˡᵒ ˢᵖᵒᵗᶦᶠʸ
|
|╓─━⎓⎔  ${usedPrefix}ringtone *﹝texto﹞*
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ᵗᵒᵠᵘᵉˢ ᵈᵉ ᶜᵉˡᵘˡᵃʳ
|
|╓─━⎓⎔  ${usedPrefix}apkdl *﹝numero﹞*
|┕ ᴮᵘˢᵠᵘᵉ ᵖᵒʳ ᵘᵐ ᵃᵖᵖ ᶜᵒᵐ •ᵃᵖᵏˢ, ᵈᵉᵖᵒᶦˢ ᵘˢᵉ ᵉˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵖᵃʳᵃ ᵇᵃᶦˣᵃʳ ᵒ ⁿᵘᵐᵉʳᵒ ᵈᵉˢᵉʲᵃᵈᵒ 
|
|╓─━⎓⎔  ${usedPrefix}yta/${usedPrefix}ytmp3 *﹝limk﹞*
|┕ ᴮᵃᶦˣᵉ ᵘᵐ ᵃᵘᵈᶦᵒ ᵐᵖ³ ᶜᵒᵐ ˡᶦⁿᵏ ᵈᵒ ᵛᶦᵈᵉᵒ ᵒᵘ ⁿᵘᵐᵉʳᵒ ᵈᵃ ᵇᵘˢᶜᵃ
|
|╓─━⎓⎔  ${usedPrefix}ytv/${usedPrefix}ytmp4  *﹝link﹞*
|┕ ᴮᵃᶦˣᵉ ᵘᵐ ᵛᶦᵈᵉᵒ ᵐᵖ⁴ ᶜᵒᵐ ˡᶦⁿᵏ ᵈᵒ ᵛᶦᵈᵉᵒ ᵒᵘ ⁿᵘᵐᵉʳᵒ ᵈᵃ ᵇᵘˢᶜᵃ
|
|╓─━⎓⎔  ${usedPrefix}fb/${usedPrefix}facebook *﹝link﹞*
|┕ ᴮᵃᶦˣᵉ ᵖᵒˢᵗˢ ᵒᵘ ʳᵉᵉˡˢ ᵈᵒ ᶠᵃᶜᵉᵇᵒᵒᵏ 
|
|╓─━⎓⎔  ${usedPrefix}ig/${usedPrefix}instagram*﹝link﹞*
|┕ ᴮᵃᶦˣᵉ ᵖᵒˢᵗˢ ᵈᵒ ᶦⁿˢᵗᵃᵍʳᵃᵐ
|
|╓─━⎓⎔  ${usedPrefix}livraria *﹝nome livro﹞*
|┕ ᴮᵘˢᶜᵃ ᵖᵒʳ ᵠᵘᵃˡᵠᵘᵉʳ ˡᶦᵛʳᵒ ᵉᵐ ᴾᴰᶠ ᵒᵘ ᵉᴾᵘᵇ ⁿᵃ ˡᶦᵛʳᵃʳᶦᵃ ᵈᵒ ᴱᵈᵍᵃʳ 
|
|╓─━⎓⎔  ${usedPrefix}igstory *﹝usuario﹞*
|┕ ᴮᵃᶦˣᵉ ʰᶦˢᵗᵒʳᶦᵃˢ ᵈᵒ ᶦⁿˢᵗᵃᵍʳᵃᵐ
|
|╓─━⎓⎔  ${usedPrefix}verig *﹝usuario﹞*
|┕ ˢᵗᵃˡᵏᵉᶦᵃ ᵉ ʳᵉᵗᵒʳⁿᵃ ᶦⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵉ ᵘᵐ ᵖᵉʳᶠᶦˡ ᴵⁿˢᵗᵃᵍʳᵃᵐ 
|
|╓─━⎓⎔  ${usedPrefix}tiktok *﹝link﹞*
|┕ ᴮᵃᶦˣᵃ ᵛᶦᵈᵉᵒˢ ᵈᵒ ᵀᶦᵏᵀᵒᵏ
|
|╓─━⎓⎔  ${usedPrefix}twitter/${usedPrefix}tw *﹝link﹞*
|┕ ᴮᵃᶦˣᵃ ᶜᵒⁿᵗᵉᵘᵈᵒ ᵈᵒ ᵀʷᶦᵗᵗᵉʳ 
|
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()


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
|
|╓─━⎓⎔  ${usedPrefix}roubar *﹝usuario﹞*
|┕ ᵀᵉⁿᵗᵃ ᶠᵘʳᵗᵃʳ ᵈᵃʳᵏᶜᵒᶦⁿˢ ᵈᵒ ᵘˢᵘᵃʳᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}pix *﹝usuario﹞*
|┕ ᵀʳᵃⁿˢᶠᵉʳᵉ ᴰᵃʳᵏᶜᵒᶦⁿˢ ᵖᵃʳᵃ ᵒ ᵘˢᵘᵃʳᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}chance *﹝texto﹞*
|┕ ᶜᵃˡᶜᵘˡᵃ ᵃ ᵖʳᵒᵇᵃᵇᶦˡᶦᵈᵃᵈᵉ ᵈᵉ ᵃˡᵍᵘᵐᵃ ᶜᵒᶦˢᵃ ᵉⁿᵗʳᵉ ᵈᵒᶦˢ ᵐᵉᵐᵇʳᵒˢ
|
|╓─━⎓⎔  ${usedPrefix}tinder *﹝usuario1﹞ ﹝usuario2﹞*
|┕ ᴾʳᵒᵇᵃᵇᶦˡᶦᵈᵃᵈᵉ ᵈᵉ ᵖᵃᶦˣᵃᵒ ᵉⁿᵗʳᵉ ² ᵘˢᵘᵃʳᶦᵒˢ
|
|╓─━⎓⎔  ${usedPrefix}divorciar 
|┕ ˢᵒˡᶦᶜᶦᵗᵃ ᵒ ᵘˢᵘᵃʳᶦᵒ ᵖᵃʳᵃ ᶦⁿᶦᶜᶦᵃʳ ᵘᵐ ˢᵗᵃᵗᵘˢ ᵃᵐᵒʳᵒˢᵒ
|
||╓─━⎓⎔  ${usedPrefix}casar *﹝usuario﹞*
|┕ ˢᵒˡᶦᶜᶦᵗᵃ ᵒ ᵘˢᵘᵃʳᶦᵒ ᵖᵃʳᵃ ᵉⁿᵗʳᵃʳ ᵉᵐ ᵘᵐᵃ ᵘⁿᶦᵃᵒ ᶜᵒⁿʲᵘᵍᵃˡ
|
|╓─━⎓⎔  ${usedPrefix}esfaquear *﹝usuario﹞*
|┕ ᴱˢᶠᵃᵠᵘᵉᶦᵃ ᵘᵐᵃ ᵛᶦᵗᶦᵐᵃ
|
|╓─━⎓⎔  ${usedPrefix}matar *﹝usuario﹞*
|┕ ᴹᵃᵗᵉ ᵃˡᵍᵘᵉᵐ ᵈᵒ ᵍʳᵘᵖᵒ
|
|╓─━⎓⎔  ${usedPrefix}beijar *﹝usuario﹞*
|┕ ᴮᵉᶦʲᵃʳ ᵃˡᵍᵘᵉᵐ ᵈᵉ ˢᵘʳᵖʳᵉˢᵃ
|
|╓─━⎓⎔  ${usedPrefix}espancar *﹝usuario﹞*
|┕ ᴱˢᵖᵃⁿᶜᵃʳ ᵃˡᵍᵘᵉᵐ ᵇʳᵘᵗᵃˡᵐᵉⁿᵗᵉ 
|
|╓─━⎓⎔  ${usedPrefix}stalkear *﹝usuario﹞*
|┕ ᴾᵉʳˢᵉᵍᵘᶦʳ ᵉ ᵒᵇˢᵉʳᵛᵃʳ ᵐᵉᵗᶦᶜᵘˡᵒˢᵃᵐᵉⁿᵗᵉ ᵃˡᵍᵘᵉᵐ
|
|╓─━⎓⎔  ${usedPrefix}queimar *﹝usuario﹞*
|┕ ᵠᵘᵉᶦᵐᵉ ᵘᵐᵃ ᵛᶦᵗᶦᵐᵃ ᵃ ᶠᵃᶻᵉⁿᵈᵒ ˢᵘᶜᵘᵐᵇᶦʳ ᵃᵒ ᶠᵒᵍᵒ ᵈᵒ ᶦⁿᶠᵉʳⁿᵒ
|
|╓─━⎓⎔  ${usedPrefix}flertar *﹝usuario﹞*
|┕ ᶠˡᵉʳᵗᵃʳ ᶜᵒᵐ ᵃˡᵍᵘᵉᵐ ᵉ ˢᵉᵈᵘᶻᶦʳ
|
|╓─━⎓⎔  ${usedPrefix}abracar *﹝usuario﹞*
|┕ ᴬᵇʳᵃᶜᵃʳ ᵃˡᵍᵘᵉᵐ ᶜᵃʳᶦⁿʰᵒˢᵃᵐᵉⁿᵗᵉ
|
|╓─━⎓⎔  ${usedPrefix}morder *﹝usuario﹞*
|┕ ᴹᵒʳᵈᵉʳ ᵉ ᵈʳᵉⁿᵃʳ ᵒ ˢᵃⁿᵍᵘᵉ ᵈᵉ ᵃˡᵍᵘᵉᵐ
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
|╓─━⎓⎔  ${usedPrefix}enforcar *﹝usuario﹞*
|┕ ᴹᵃⁿᵈᵃʳ ᵘˢᵘᵃʳᶦᵒ ᵃ ᶠᵒʳᶜᵃ
|
|╓─━⎓⎔  ${usedPrefix}envenenar *﹝usuario﹞*
|┕ ᴱⁿᵛᵉⁿᵉⁿᵃ ᵃˡᵍᵘᵉᵐ ᵈᵉˢᵗᵉ ᵍʳᵘᵖᵒ
|
|╓─━⎓⎔  ${usedPrefix}amaldicoar *﹝usuario﹞*
|┕ ᴬᵐᵃˡᵈᶦᶜᵒᵃ ᵘᵐᵃ ᵃˡᵐᵃ ᶜᵒᵐ ᵘᵐᵃ ˢᶦⁿᵃ
|
|╓─━⎓⎔  ${usedPrefix}reanimar/${usedPrefix}reviver *﹝usuario﹞*
|┕ ᵀʳᵃᵍᵃ ᵃˡᵍᵘᵉᵐ ᵃ ᵛᶦᵈᵃ ᶜᵒᵐᵒ ᴰʳ. ᶠʳᵃⁿᵏᵉⁿˢᵗᵉᶦⁿ
|
|╓─━⎓⎔  ${usedPrefix}caçar *﹝usuario﹞*
|┕ ᴾᵉʳˢᵉᵍᵘᶦʳ ᵉ ᶜᵃᶜᵃʳ ᵃˡᵍᵘᵉᵐ ᵈᵉˢᵗᵉ ᵍʳᵘᵖᵒ
|
|╓─━⎓⎔  ${usedPrefix}devorar *﹝usuario﹞*
|┕ ᶜᵒᵐᵉʳ ᵃ ᶜᵃʳⁿᵉ ᵈᵉ ᵃˡᵍᵘᵐ ᵘˢᵘᵃʳᶦᵒ ᵈᵒ ᵍʳᵘᵖᵒ
|
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()


let menucvs =`╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *UTILIDADES*
╰─┅---─┅❖  ⸸  ❖─┅┅
|╓─━⎓⎔  ${usedPrefix}toimg *﹝marque figurinha﹞*
|┕ ᶜᵒⁿᵛᵉʳᵗᵉ ᵘᵐᵃ ᶠᶦᵍᵘʳᶦⁿʰᵃ ᵉᵐ ᶦᵐᵃᵍᵉᵐ
|
|╓─━⎓⎔  ${usedPrefix}tomp3 *﹝marque vid/aud﹞*
|┕ ᶜᵒⁿᵛᵉʳᵗᵉ ᵛᶦᵈᵉᵒˢ ᵒᵘ ⁿᵒᵗᵃˢ ᵈᵉ ᵛᵒᶻ ᵉᵐ ᵐᵖ³
|
|╓─━⎓⎔  ${usedPrefix}fg  *﹝marque imagem﹞*
|┕ ᶜᵒⁿᵛᵉʳᵗᵉ ᶦᵐᵃᵍᵉᵐ ᵉᵐ ᶠᶦᵍᵘʳᶦⁿʰᵃ
|
|╓─━⎓⎔  ${usedPrefix}tovn *﹝marque vid/aud﹞*
|┕ ᶜᵒⁿᵛᵉʳᵗᵉ ᵛᶦᵈᵉᵒˢ ᵒᵘ ⁿᵒᵗᵃˢ ᵈᵉ ᵛᵒᶻ ᵉᵐ ᵐᵖ³
|
|╓─━⎓⎔  ${usedPrefix}tourl *﹝marque msg﹞*
|┕ ᴿᵉᵃˡᶦᶻᵃ ᵘᵖˡᵒᵃᵈ ᵈᵉ ᶦᵐᵃᵍᵉᵐ, ᵛᶦᵈᵉᵒ ᵒᵘ ᵈᵒᶜᵘᵐᵉⁿᵗᵒ ᵉ ʳᵉᵗᵒʳⁿᵃ ᵒ ˡᶦⁿᵏ
|
|╓─━⎓⎔  ${usedPrefix}tts *﹝marque msg﹞*
|┕ ᴺᵃʳʳᵃ ᵒ ᵗᵉˣᵗᵒ ᶜᵒᵐ ᵃ ᵛᵒᶻ ᵈᵒ ᴱᵈᵍᵃʳ
|
|╓─━⎓⎔  ${usedPrefix}acortar *﹝link﹞*
|┕ ᴱⁿᶜᵘʳᵗᵃ ᵉ ʳᵉᵈᵘᶻ ᵘᵐ ˡᶦⁿᵏ ⁿᵃˢ ˢᵒᵐᵇʳᵃˢ
|
|╓─━⎓⎔  ${usedPrefix}trad  *﹝idioma﹞* *﹝texto﹞* 
|┕ ᵀʳᵃᵈᵘᶻ ᵗᵉˣᵗᵒ, ᶦⁿˢᶦʳᵃ ᵒ ᶦᵈᶦᵒᵐᵃ ᶜᵒᵐ ᶜᵒᵈᶦᵍᵒ ᶦˢᵒ ᵈᵉ² ᵈᶦᵍᶦᵗᵒˢ ᵉ ᵗᵉˣᵗᵒ ᵃ ˢᵉᵍᵘᶦʳ
|
|╓─━⎓⎔  ${usedPrefix}converter  *﹝MOEDA DESEJADA﹞* | *﹝VALOR MOEDA﹞* 
|┕ ᴄᴏɴᴠᴇʀᴛᴇ ᴠᴀʟᴏʀ ᴅᴇ ᴍᴏᴇᴅᴀs
|
|╓─━⎓⎔  ${usedPrefix}mail 
|┕ ᴇ-ᴍᴀɪʟ ᴀɴᴏɴɪᴍᴏ ᴇ ᴅᴇsᴄᴀʀᴛᴀᴠᴇʟ ᴘᴀʀᴀ ᴇɴᴠɪᴀʀ ᴇ ʀᴇᴄᴇʙᴇʀ
|
|╓─━⎓⎔  ${usedPrefix}topdf *﹝imagem﹞* 
|┕ ᶜᵒⁿᵛᵉʳᵗᵉ ᵃ ˢᵘᵇˡᶦᵐᵉ ᶦᵐᵃᵍᵉᵐ ᵉᵐ ᵘᵐ ᵈᵒᶜᵘᵐᵉⁿᵗᵒ ᴾᴰᶠ...
|
|╓─━⎓⎔  ${usedPrefix}pdf2doc *﹝pdf﹞* 
|┕ ᶜᵒᵐᵛᵉʳᵗᵉ ᵖᵈᶠ ᵉᵐ ᵂᵒʳᵈ ⁽ᴰᵒᶜˣ⁾
|
|╓─━⎓⎔  ${usedPrefix}pdf2psd *﹝pdf﹞* 
|┕ ᶜᵒᵐᵛᵉʳᵗᵉ ᵖᵈᶠ ᵉᵐ ᴾʰᵒᵗᵒˢʰᵒᵖ ᵖˢᵈ
|
|╓─━⎓⎔  ${usedPrefix}pdf2png *﹝pdf﹞* 
|┕ ᶜᵒᵐᵛᵉʳᵗᵉ ᵖᵈᶠ ᵉᵐ ᶦᵐᵃᵍᵉᵐ
|
|╓─━⎓⎔  ${usedPrefix}hash *﹝texto﹞* 
|┕ ᶜᵒᵈᶦᶠᶦᶜᵃ ᵘᵐ ᵗᵉˣᵗᵒ ᵉᵐ ᴴᵃˢʰ ˢᴴᴬ²⁵⁶
|
|╓─━⎓⎔  ${usedPrefix}morse *﹝code/decode﹞* *﹝texto/codigo﹞* 
|┕ ᶜᵒᵈᶦᶠᶦᶜᵃ ᵒᵘ ᵈᵉᶜᵒᵈᶦᶠᶦᶜᵃ ᶜᵒᵈᶦᵍᵒ ᵐᵒʳˢᵉ
|╓─━⎓⎔  ${usedPrefix}bin *﹝code/decode﹞* *﹝texto/codigo﹞* 
|┕ ᶜᵒᵈᶦᶠᶦᶜᵃ ᵒᵘ ᵈᵉᶜᵒᵈᶦᶠᶦᶜᵃ ᶜᵒᵈᶦᵍᵒ ᵇᶦⁿᵃʳᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}cipher *﹝cifra﹞* *﹝texto﹞* 
|┕ ғᴇʀʀᴀᴍᴇɴᴛᴀ ᴍᴜʟᴛɪ-ᴄʀɪᴘᴛᴏɢʀᴀғɪᴀ
|
|╓─━⎓⎔  ${usedPrefix}base64 *﹝code/decode﹞* *﹝texto/codigo﹞* 
|┕ ᶜᵒᵈᶦᶠᶦᶜᵃ ᵒᵘ ᵈᵉᶜᵒᵈᶦᶠᶦᶜᵃ ᶜᵒᵈᶦᵍᵒ ᵇᵃˢᵉ⁶⁴
|
|╓─━⎓⎔  ${usedPrefix}qr *﹝texto﹞* 
|┕ ᴳᵉʳᵃ ᵘᵐ ᵠʳ ᶜᵒᵈᵉ ᵖᵃʳᵃ ᵒ ᵗᵉˣᵗᵒ ᶠᵒʳⁿᵉᶜᶦᵈᵒ . . . 
|
|╓─━⎓⎔  ${usedPrefix}txt *﹝marque aud﹞* 
|┕ ᵀʳᵃⁿˢᶜʳᵉᵛᵉ ᵘᵐ ᵃᵘᵈᶦᵒ ᵒᵘ ᵛᶦᵈᵉᵒ
|
|╓─━⎓⎔  ${usedPrefix}clima *﹝Cidade e Pais﹞* 
|┕ ᶜᵒⁿᵛᵉʳᵗᵉ ᵛᶦᵈᵉᵒˢ ᵒᵘ ⁿᵒᵗᵃˢ ᵈᵉ ᵛᵒᶻ ᵉᵐ ᵐᵖ³
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()



let menutools =`╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *FERRAMENTAS*
╰─┅---─┅❖  ⸸  ❖─┅┅
|╓─━⎓⎔  ${usedPrefix}criador 
|┕ ᴵⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ˢᵒᵇʳᵉ ᵐᵉᵘ ᶜʳᶦᵃᵈᵒʳ
|
|╓─━⎓⎔  ${usedPrefix}status 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᶦⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵒ ᶜʰᵃᵗ ᵉ ᵈᵒ ᴱᵈᵍᵃʳ
|
|╓─━⎓⎔  ${usedPrefix}infochats 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᶦⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵒˢ ᵍʳᵘᵖᵒˢ ᵈᵒ ᴱᵈᵍᵃʳ
|
|╓─━⎓⎔  ${usedPrefix}infogrupo 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᶦⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ ᵃᵗᵘᵃˡ
|
|╓─━⎓⎔  ${usedPrefix}admins 
|┕ ᶜᵒⁿᵛᵒᶜᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵍᵘᵃʳᵈᶦᵒᵉˢ ᵖᵒʳᵗᵃᵈᵒʳᵉˢ ᵈᵉ ᵖᵒᵈᵉʳᵉˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᶦᵛᵒˢ 
|
|╓─━⎓⎔  ${usedPrefix}horario 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᵒˢ ʰᵒʳᵃʳᶦᵒˢ ᵉ ᶠᵘˢᵒˢ ᵈᵒˢ ᵈᵉᵐᵃᶦˢ ᵖᵃᶦˢᵉˢ
|
|╓─━⎓⎔  ${usedPrefix}doar
|┕ ᴰᵒᵃᶜᵃᵒ ᵉ ˢᵒˡᶦᵈᵃʳᶦᵉᵈᵃᵈᵉ ᵃᵒ ᵖʳᵒʲᵉᵗᵒ
|
|╓─━⎓⎔  ${usedPrefix}config 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᵃ ˡᶦˢᵗᵃ ᵈᵉ ᶠᵘⁿᶜᵒᵉˢ ⁿᵒ ᵍʳᵘᵖᵒ
|
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()

let menugp = `╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *〘ADMINS〙*
╰─┅---─┅❖  ⸸  ❖─┅┅
|╓─━⎓⎔  ${usedPrefix}on/${usedPrefix}off 
|┕ ᴬᵗᶦᵛᵃ ᵒᵘ ᵈᵉˢᵃᵗᶦᵛᵃ ᶠᵘⁿᶜᵒᵉˢ ⁿᵒ ᵍʳᵘᵖᵒˢ 
|
|╓─━⎓⎔  ${usedPrefix}invocar *﹝texto﹞* 
|┕ ᴵⁿᵛᵒᶜᵃ ᵗᵒᵈᵃˢ ᵃˢ ᵃˡᵐᵃˢ ᵈᵒ ᵍʳᵘᵖᵒ ᵖᵃʳᵃ ᵘᵐ ᶜᵒⁿᵘⁿᶦᶜᵃᵈᵒ
|
|╓─━⎓⎔  ${usedPrefix}lembrete *﹝horas:minutos:segundos﹞* *﹝texto﹞* 
|┕ ᴵⁿᵛᵒᶜᵃ ᵗᵒᵈᵃˢ ᵃˢ ᵃˡᵐᵃˢ ᶜᵒᵐ ᵘᵐᵃ ᵐᵉⁿˢᵃᵍᵉᵐ ᵉᵐ ᵘᵐ ʰᵒʳᵃʳᶦᵒ ᵈᵉᶠᶦⁿᶦᵈᵒ, ᵖᵒʳ ᵉˣᵉᵐᵖˡᵒ ᵘᵐᵃ ᵐᵉⁿˢᵃᵍᵉᵐ ᵈᵃᵠᵘᶦ ³ ʰᵒʳᵃˢ, ¹⁴ ᵐᶦⁿᵘᵗᵒˢ ᵉ ⁶ ˢᵉᵍᵘⁿᵈᵒˢ.
|
|╓─━⎓⎔  ${usedPrefix}fantasmas
|┕ ᴸᶦˢᵗᵃ ᵒˢ ᶠᵃⁿᵗᵃˢᵐᵃˢ ᶦⁿᵃᵗᶦᵛᵒˢ ᵈᵒ ᵍʳᵘᵖᵒ, ᶜᵘʲᵃ ᵖʳᵉˢᵉⁿᶜᵃ ᵉ ⁿᵃᵈᵃ ᵃˡᵉᵐ ᵈᵉ ᵘᵐ ᵉᶜᵒ
|
|╓─━⎓⎔  ${usedPrefix}link
|┕ ᴰᵉˢᵛᵉˡᵃ ᵒ ˡᶦⁿᵏ ᵈᵉ ᵉⁿᵗʳᵃᵈᵃ ᵈᵒ ᵍʳᵘᵖᵒ 
|
|╓─━⎓⎔  ${usedPrefix}resetlink_
|┕ ᴿᵉⁿᵒᵛᵃ ᵒ ˡᶦⁿᵏ ᵈᵉ ᵉⁿᵗʳᵃᵈᵃ ᵈᵒ ᵍʳᵘᵖᵒ 
|
|╓─━⎓⎔  ${usedPrefix}infogrupo 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᶦⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ ᵃᵗᵘᵃˡ
|
|╓─━⎓⎔  ${usedPrefix}listadv 
|┕ ᴿᵉᵛᵉˡᵃ ᵃˢ ᵃˡᵐᵃˢ ᵉᵐ ᵖᵉⁿᶦᵗᵉⁿᶜᶦᵃ ˢᵒᵇ ᵃᵛᶦˢᵒ
|
|╓─━⎓⎔  ${usedPrefix}listsilem
|┕ ᴿᵉᵛᵉˡᵃ ᵃˢ ᵃˡᵐᵃˢ ˢᶦˡᵉⁿᶜᶦᵃᵈᵃˢ
|
|╓─━⎓⎔  ${usedPrefix}listbanidos 
|┕ ᴿᵉᵛᵉˡᵃ ᵃˢ ᵃˡᵐᵃˢ ᵉᵐ ᵖᵉⁿᶦᵗᵉⁿᶜᶦᵃ ˢᵒᵇ ᵃᵛᶦˢᵒ
|
|╓─━⎓⎔  ${usedPrefix}listadv 
|┕ ᴿᵉᵛᵉˡᵃ ᵃˢ ᵃˡᵐᵃˢ ᵉᵐ ᵖᵉⁿᶦᵗᵉⁿᶜᶦᵃ ˢᵒᵇ ᵃᵛᶦˢᵒ
|
|╓─━⎓⎔  ${usedPrefix}add *﹝numero/@usuario﹞* 
|┕ ᴬᵈᶦᶜᶦᵒⁿᵃ ᵘᵐᵃ ᵃˡᵐᵃ ᵖᵃʳᵃ ᵉᶜᵒᵃʳ ⁿᵒ ᵍʳᵘᵖᵒ
|
|╓─━⎓⎔  ${usedPrefix}restaurar *﹝numero/@usuario﹞* 
|┕ ᴿᵉᵐᵒᵛᵉ ᵘᵐ ᵘˢᵘᵃʳᶦᵒ ᵈᵃ ˡᶦˢᵗᵃ ⁿᵉᵍʳᵃ, ᵖᵉʳᵐᶦᵗᶦⁿᵈᵒ⁻ᵒ ᵃᵈᵉⁿᵗʳᵃʳ ⁿᵒ ᵍʳᵘᵖᵒ ⁿᵒᵛᵃᵐᵉⁿᵗᵉ
|
|╓─━⎓⎔  ${usedPrefix}ban *﹝numero/@usuario﹞* 
|┕ ᴵⁿᶦᵇᵉ ᵃˡᵍᵘᵉᵐ ᵈᵉ ᵘˢᵃʳ ᵒ ᵇᵒᵗ
|
|╓─━⎓⎔  ${usedPrefix}desbanir *﹝numero/@usuario﹞*
|┕ ᶜᵒⁿᶜᵉᵈᵉ ᵃᵒ ᵘˢᵘᵃʳᶦᵒ ᵖᵒᵈᵉʳ ᵘᵗᶦˡᶦᶻᵃʳ ᵒ ᵇᵒᵗ ⁿᵒᵛᵃᵐᵉⁿᵗᵉ
|
|╓─━⎓⎔  ${usedPrefix}mute *﹝numero/@usuario﹞* 
|┕ ˢᶦˡᵉⁿᶜᶦᵃ ᵘᵐ ᵘˢᵘᵃʳᶦᵒ, ᵃᵖᵃᵍᵃⁿᵈᵒ ˢᵘᵃˢ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵉ ᵈᵉᶦˣᵃⁿᵈᵒ⁻ᵒ ⁿᵃ ᵉˢᶜᵘʳᶦᵈᵃᵒ
|
|╓─━⎓⎔  ${usedPrefix}desmutar *﹝numero/@usuario﹞*
|┕ ᴿᵉᵐᵒᵛᵉ ᵒ ᶜᵃˢᵗᶦᵍᵒ ˢᶦˡᵉⁿᶜᶦᵒˢᵒ ᵈᵒ ᵘˢᵘᵃʳᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}adv *﹝numero/@usuario﹞* 
|┕ ᴾᵉⁿᵃˡᶦᶻᵃ ᵒ ᵘˢᵘᵃʳᶦᵒ, ᵃᶜʳᵉˢᶜᵉⁿᵗᵃⁿᵈᵒ ᵘᵐᵃ ᵃᵈᵛᵉʳᵗᵉⁿᶜᶦᵃ
|
|╓─━⎓⎔  ${usedPrefix}deladv *﹝numero/@usuario﹞* 
|┕ ᴿᵉᵐᵒᵛᵉ ᵘᵐᵃ ᵃᵈᵛᵉʳᵗᵉⁿᶜᶦᵃ
|
|╓─━⎓⎔  ${usedPrefix}demote/${usedPrefix}tiraradmin *﹝numero/@usuario﹞* 
|┕ ᴱˣᵖᵘʳᵍᵃʳ ᵒ ᵘˢᵘᵃʳᶦᵒ ᵈᵒ ᶜᶦʳᶜᵘˡᵒ ᵈᵉ ᵍᵘᵃʳᵈᶦᵒᵉˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵈᵒ ᵈᵒᵐᶦⁿᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}promote/${usedPrefix}daradmin *﹝numero/@usuario﹞* 
|┕ ᶜᵒⁿᶜᵉᵈᵉʳ ᵃᵒ ᵘˢᵘᵃʳᶦᵒ ᵖᵒᵈᵉʳᵉˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᶦᵛᵒˢ ⁿᵒ ᵈᵒᵐᶦⁿᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}gc *﹝abrir/fechar﹞* *﹝horas﹞* 
|┕ ᴬᵇʳᵉ ᵒᵘ ᶠᵉᶜʰᵃ ᵘᵐ ᵍʳᵘᵖᵒ, ᵉ ᵖᵒˢˢᶦᵛᵉˡ ᵈᵉᶠᶦⁿᶦʳ ᵘᵐ ᵗᵉᵐᵖᵒʳᶦᶻᵃᵈᵒʳ. ᴱˣ: ᶠᵉᶜʰᵃʳ ᵒ ᵍʳᵘᵖᵒ ᵈᵃᵠᵘᶦ ¹ ʰᵒʳᵃ _.ᵍᶜ ᶠᵉᶜʰᵃʳ ¹_
|
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()


let ownertools = `|
|၊၊〘𖤍 *CRIADORES* 𖤍〙
|
|╓─━⎓⎔  ${usedPrefix}painel 
|┕ ᴸᶦˢᵗᵃ ᵒˢ ᶜˡᶦᵉⁿᵗᵉˢ ᵈᵒ ᴱᵈᵍᵃʳ
|
|╓─━⎓⎔  ${usedPrefix}painel 
|┕ ᴸᶦˢᵗᵃ ᵒˢ ᶜˡᶦᵉⁿᵗᵉˢ ᵈᵒ ᴱᵈᵍᵃʳ
|
|╓─━⎓⎔  ${usedPrefix}listbloqueados 
|┕ ᴿᵉᵛᵉˡᵃ ᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ᵇˡᵒᵠᵘᵉᵃᵈᵒˢ
|
|╓─━⎓⎔  ${usedPrefix}listbanchat 
|┕ ᴿᵉᵛᵉˡᵃ ᵒˢ ᵍʳᵘᵖᵒˢ ᵉˣᶦˡᵃᵈᵒˢ
|
|╓─━⎓⎔  ${usedPrefix}bc *﹝mensagem﹞* 
|┕ ᴱᵐᶦᵗᵉ ᵘᵐ ᶜᵒᵐᵘⁿᶦᶜᵃᵈᵒ ᵒᶠᶦᶜᶦᵃˡ ᵖᵃʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵍʳᵘᵖᵒˢ
|
|╓─━⎓⎔  ${usedPrefix}resetuser *﹝numero/@usuario﹞* 
|┕ ᴬᵖᵃᵍᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵈᵃᵈᵒˢ ᵈᵒ ᵘˢᵘᵃʳᶦᵒ 
|
|╓─━⎓⎔  ${usedPrefix}resetchat 
|┕ ᴬᵖᵃᵍᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵈᵃᵈᵒˢ ᵈᵉˢᵗᵉ ᶜʰᵃᵗ 
|
|╓─━⎓⎔  ${usedPrefix}cleartmp 
|┕ ᴰᵉˡᵉᵗᵃ ᵒˢ ᵃʳᵠᵘᶦᵛᵒˢ ᵗᵉᵐᵖᵒʳᵃʳᶦᵒˢ
|
|╓─━⎓⎔  ${usedPrefix}clearallsessions 
|┕ ᴸᶦᵐᵖᵃ ˢᵉˢˢᵒᵉˢ ᵃⁿᵗᶦᵍᵃˢ 
|
|╓─━⎓⎔  ${usedPrefix}zsh *﹝comando﹞* 
|┕ ᴱˣᵉᶜᵘᵗᵃ ᵘᵐ ᶜᵒᵐᵃⁿᵈᵒ ⁿᵒ ᵇᵃˢʰ
|
|╓─━⎓⎔  ${usedPrefix}dashboard
|┕ ᴸᶦˢᵗᵃ ᶜᵒᵐᵃⁿᵈᵒˢ ᵐᵃᶦˢ ᵘˢᵃᵈᵒˢ
|`

let menubot = `╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *〘BOT〙*
╰─┅---─┅❖  ⸸  ❖─┅┅
|╓─━⎓⎔  ${usedPrefix}funcoes 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᵃ ˡᶦˢᵗᵃ ᵈᵉ ᶠᵘⁿᶜᵒᵉˢ ᵖᵃʳᵃ ᵒ ᵍʳᵘᵖᵒ 
|
|╓─━⎓⎔  ${usedPrefix}resetbot 
|┕ ᴿᵉᶦⁿᶦᶜᶦᵃ ᵒ ᶜʰᵃᵗ, ᵖᵃʳᵃ ᵠᵘᵃⁿᵈᵒ ʰᵒᵘᵛᵉʳ ᵖʳᵒᵇˡᵉᵐᵃˢ ᵉ ᵉˡᵉ ⁿᵃᵒ ʳᵉˢᵖᵒⁿᵈᵉʳ
|
|╓─━⎓⎔  ${usedPrefix}boost 
|┕ ᴼᵗᶦᵐᶦᶻᵃ ᵒ ᵈᵉˢᵉᵐᵖᵉⁿʰᵒ ᵉ ᵃᶜᵉˡᵉʳᵃ ᵒ ᵇᵒᵗ
|
|╓─━⎓⎔  ${usedPrefix}ping 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᶦⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵉ ᵛᵉˡᵒᶜᶦᵈᵃᵈᵉ ᵈᵉ ʳᵉᵈᵉ ᵈᵒ ᴱᵈᵍᵃʳ 
|
|╓─━⎓⎔  ${usedPrefix}cpu 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᶦⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵒ ˢᵉʳᵛᶦᵈᵒʳ ᵈᵒ ᴱᵈᵍᵃʳ 
|
|╓─━⎓⎔  ${usedPrefix}neofetch 
|┕ ᴵⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵒ ˢᵉʳᵛᶦᵈᵒʳ ᵈᵉᵗᵃˡʰᵃᵈᵃˢ  
|
|╓─━⎓⎔  ${usedPrefix}speedtest 
|┕ ⱽᵉʳᶦᶠᶦᶜᵃ ᵛᵉˡᵒᶜᶦᵈᵃᵈᵉˢ ᵈᵉ ᵈᵒʷⁿˡᵒᵃᵈ ᵉ ᵘᵖˡᵒᵃᵈ ᵈᵃ ʳᵉᵈᵉ ᵈᵒ ᴱᵈᵍᵃʳ
|${isOwner ? ownertools : ''}
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()

let menumd = `╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *MIDIA*
╰─┅---─┅❖  ⸸  ❖─┅┅
|╓─━⎓⎔  ${usedPrefix}efeito *﹝estilo﹞* *﹝texto/prompt﹞* 
|┕ ᵀʳᵃⁿˢᶠᵒʳᵐᵃ ᵘᵐᵃ ᶦᵐᵃᵍᵉᵐ ᶜᵒᵐ ᵉᶠᵉᶦᵗᵒ ᵈᵉ ᴵᴬ ᵒᵘ ᶠᶦˡᵗʳᵒ ᵈᵉ ᶦᵐᵃᵍᵉᵐ
|
|╓─━⎓⎔  ${usedPrefix}memes 
|┕ ᴸᶦˢᵗᵃ ᵒˢ ᶠᶦˡᵗʳᵒˢ ᵈᵉ ᵐᵉᵐᵉˢ ᵈᶦˢᵖᵒⁿᶦᵛᵉᶦˢ
|
|╓─━⎓⎔  ${usedPrefix}logos *﹝estilo﹞* *﹝texto﹞* 
|┕ ᶜʳᶦᵃ ᵘᵐ ᵉᶠᵉᶦᵗᵒ ᴵᴬ ᶜᵒᵐ ᵗᵉˣᵗᵒ
|
|╓─━⎓⎔  ${usedPrefix}style *﹝estilo﹞* *﹝texto﹞* 
|┕ ᵀʳᵃⁿˢᶠᵒʳᵐᵃ ᵗᵉˣᵗᵒ ᵉᵐ ᵘᵐ ᵉˢᵗᶦˡᵒ ᵈᵉ ᶠᵒⁿᵗᵉ
|
|╓─━⎓⎔  ${usedPrefix}filtrovid *﹝estilo﹞* *﹝marcando video﹞* 
|┕ ᶜʳᶦᵃ ᵘᵐ ᵉᶠᵉᶦᵗᵒ ᵈᵉ ᴵᴬ ᵉᵐ ᵘᵐ ᵛᶦᵈᵉᵒ
|
|╓─━⎓⎔  ${usedPrefix}tweet *﹝texto:opcional﹞* *﹝marcando @usuario﹞* 
|┕ ᴳᵉʳᵃ ᵘᵐ ᵗʷᵉᵉᵗ. ᴹᵃʳᵠᵘᵉ ᵃ ᵐᵉⁿˢᵃᵍᵉᵐ ᵈᵉ ᵘᵐ ᵘˢᵘᵃʳᶦᵒ ᵖʳᵃ ᵗʷᵉᵉᵗᵃʳ ˢᵉᵘ ᵗᵉˣᵗᵒ, ᵒᵘ ᵐᵃʳᵠᵘᵉ⁻ᵒ ᵃᵈᶦᶜᶦᵒⁿᵃⁿᵈᵒ ᵘᵐ ᵗᵉˣᵗᵒ ᵃ ˢᵘᵃ ᵉˢᶜᵒˡʰᵃ 
|
|╓─━⎓⎔  ${usedPrefix}dice
|┕ ᴳᶦʳᵉ ᵘᵐ ᵈᵃᵈᵒ ᶜᵒᵐ ᵘᵐ ⁿᵘᵐᵉʳᵒ ᵃˡᵉᵃᵗᵒʳᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}fg *﹝imagem﹞* 
|┕ ᵀʳᵃⁿˢᶠᵒʳᵐᵃ ᵘᵐ ᵗᵉˣᵗᵒ ᵉᵐ ᵉˢᶜʳᶦᵗᵃ ᵉᵐ ᵖᵃᵖᵉˡ
|
|╓─━⎓⎔  ${usedPrefix}gta *﹝texto | texto2﹞* 
|┕ ᶜʳᶦᵃ ᶠᵒⁿᵗᵉ ᵉᵐ ᵉˢᵗᶦˡᵒ ᵍᵗᵃ ˢᵃ
|
|╓─━⎓⎔  ${usedPrefix}ttp1/ttp2/ttp3/ttp4/ttp5/ttp6 *﹝texto﹞* 
|┕ ᵀʳᵃⁿˢᶠᵒʳᵐᵃ ᵗᵉˣᵗᵒ ᵉᵐ ᶠᶦᵍᵘʳᶦⁿʰᵃ
|
|╓─━⎓⎔  ${usedPrefix}zombie *﹝imagem﹞* 
|┕ ᵀʳᵃⁿˢᶠᵒʳᵐᵃ ᵉᵐ ᶻᵘᵐᵇᶦ
|
|╓─━⎓⎔  ${usedPrefix}blur *﹝imagem﹞* 
|┕ ᴰᵉˢᶠᵒᶜᵃ ᵘᵐᵃ ᶦᵐᵃᵍᵉᵐ
|
|╓─━⎓⎔  ${usedPrefix}gay *﹝imagem﹞* 
|┕ ᴬᵈᶦᶜᶦᵒⁿᵃ ᵃ ᵇᵃⁿᵈᵉᶦʳᵃ ᵈᵒ ᵒʳᵍᵘˡʰᵒ ᵃ ᵘᵐᵃ ᶦᵐᵃᵍᵉᵐ
|
|╓─━⎓⎔  ${usedPrefix}procurado *﹝texto﹞* *﹝marcando imagem!﹞* 
|┕ ᴰᵉˢᶠᵒᶜᵃ ᵘᵐᵃ ᶦᵐᵃᵍᵉᵐ
|
|╓─━⎓⎔  ${usedPrefix}gun *﹝imagem﹞* 
|┕ ᴬᵈᶦᶜᶦᵒⁿᵃ ᵘᵐ ʳᵉᵛᵒˡᵛᵉʳ ⁿᵃ ᶠᵒᵗᵒ
|
|╓─━⎓⎔  ${usedPrefix}comunista *﹝imagem﹞* 
|┕ ᴰᵉˢᵛᵉˡᵃ ᵒ ᵘˢᵘᵃʳᶦᵒ ᶜᵒᵐᵒ ᵘᵐ ᶜᵃᵐᵃʳᵃᵈᵃ ˢᵒᵛᶦᵉᵗᶦᶜᵒ 
|
|╓─━⎓⎔  ${usedPrefix}desenho *﹝imagem﹞* 
|┕ ᵀʳᵃⁿˢᶠᵒʳᵐᵃ ᵃ ᶠᵒᵗᵒ ᵉᵐ ᵘᵐ ᵈᵉˢᵉⁿʰᵒ ᵃ ˡᵃᵖᶦˢ
|
|╓─━⎓⎔  ${usedPrefix}cafe *﹝imagem﹞* 
|┕ ᵀʳᵃⁿˢᶠᵒʳᵐᵃ ᵃ ᶠᵒᵗᵒ ᵉᵐ ᵘᵐ ᶜᵃᶠᵉ
|
|╓─━⎓⎔  ${usedPrefix}palhaco *﹝imagem﹞* 
|┕ ᵀʳᵃⁿˢᶠᵒʳᵐᵃ ᵒ ᵘˢᵘᵃʳᶦᵒ ᵉᵐ ᵘᵐ ᵖᵃˡʰᵃᶜᵒ
|
|⎓━━━━
| ᴿᵉᵃˡᶦᶻᵃ ᵐᵒᵈᶦᶠᶦᶜᵃᶜᵒᵉˢ ᵈᵉ ᵃᵘᵈᶦᵒ
|⎓⎔ ${usedPrefix}bass
|⎓⎔ ${usedPrefix}nightcore
|⎓⎔ ${usedPrefix}earrape
|⎓⎔ ${usedPrefix}sigma
|⎓⎔ ${usedPrefix}blown
|⎓⎔ ${usedPrefix}vader
|⎓⎔ ${usedPrefix}fat
|⎓⎔ ${usedPrefix}reverso
|⎓⎔ ${usedPrefix}slow
|⎓⎔ ${usedPrefix}smooth
|⎓⎔ ${usedPrefix}esquilo
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()

let menuaudios = `╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *AUDIOS*
╰─┅---─┅❖  ⸸  ❖─┅┅
|⎓━━━━
| ᴿᵉᵃˡᶦᶻᵃ ᵐᵒᵈᶦᶠᶦᶜᵃᶜᵒᵉˢ ᵈᵉ ᵃᵘᵈᶦᵒ
|⎓⎔ ${usedPrefix}bass
|⎓⎔ ${usedPrefix}nightcore
|⎓⎔ ${usedPrefix}earrape
|⎓⎔ ${usedPrefix}sigma
|⎓⎔ ${usedPrefix}blown
|⎓⎔ ${usedPrefix}vader
|⎓⎔ ${usedPrefix}fat
|⎓⎔ ${usedPrefix}reverso
|⎓⎔ ${usedPrefix}slow
|⎓⎔ ${usedPrefix}smooth
|⎓⎔ ${usedPrefix}esquilo
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()

let menudev = `╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *Programação*
╰─┅---─┅❖  ⸸  ❖─┅┅
|╓─━⎓⎔  ${usedPrefix}dev/code *﹝linguagem﹞*  *﹝codigo﹞* 
|┕ ᴵᴰᴱ ᶦⁿᵗᵉᵍʳᵃᵈᵒ ᵖᵃʳᵃ ᵉˣᵉᶜᵘᵗᵃʳ ᵉ ᶜᵒᵐᵖᶦˡᵃʳ ᶜᵒᵈᶦᵍᵒ ᵉᵐ ᵐᵉᵘ ᵈᵒᵐᶦⁿᶦᵒ
|
|╓─━⎓⎔  ${usedPrefix}ofuscar *﹝codigo﹞* 
|┕ ᴼᶜᵘˡᵗᵃ ˢᵉᵘ ᶜᵒᵈᶦᵍᵒ ᵉⁿᵗʳᵉ ᵃˢ ˢᵒᵐᵇʳᵃˢ, ᵉˢᶜᵒⁿᵈᵉⁿᵈᵒ ˢᵉᵘ ᵃˡᵍᵒʳᶦᵗᵐᵒ ᵉ ᵐᵃⁿᵗᵉⁿᵈᵒ ᶠᵘⁿᶜᶦᵒⁿᵃˡ 
|
|╓─━⎓⎔  ${usedPrefix}ip *﹝endereco﹞* 
|┕ ˢᵗᵃˡᵏᵉᶦᵃ ᵐᵉᵗᶦᶜᵘˡᵒˢᵃᵐᵉⁿᵗᵉ ᵘᵐ ᵉⁿᵈᵉʳᵉᶜᵒ ˡᵒᵍᶦᶜᵒ ᴵᴾ
|
|╓─━⎓⎔  ${usedPrefix}fsociety﹝texto﹞*
|┕ ᴍᴏᴅᴇʟᴏ ɪᴀ ᴛʀᴇɪɴᴀᴅᴏ ᴘᴀʀᴀ ɢᴜɪᴀʀ ᴇᴍ ᴘᴇɴᴛᴇsᴛ, ᴄʏʙᴇʀsᴇᴄᴜʀɪᴛʏ, ᴍᴇɴᴛᴏʀ ᴅᴇ ᴇᴛʜɪᴄᴀʟ ʜᴀᴄᴋɪɴɢ ᴇ ᴀɴᴀʟɪsᴇ ᴅᴇ ᴠᴜʟɴᴇʀᴀʙɪʟɪᴅᴀᴅᴇ
|
|╓─━⎓⎔  ${usedPrefix}cipher *﹝cifra﹞* *﹝texto﹞* 
|┕ ғᴇʀʀᴀᴍᴇɴᴛᴀ ᴍᴜʟᴛɪ-ᴄʀɪᴘᴛᴏɢʀᴀғɪᴀ
|
|╓─━⎓⎔  ${usedPrefix}whois *﹝link﹞* 
|┕ ᴿᵉᵗᵒʳⁿᵃ ᶦⁿᶠᵒʳᵐᵃᶜᵒᵉˢ ᵈᵒ ᵈᵒᵐᶦⁿᶦᵒ  , ᴵᴾ, ᴾʳᵒᵛᵉᵈᵒʳ ᵉᵗᶜ
|
|╓─━⎓⎔  ${usedPrefix}mail 
|┕ ᴇ-ᴍᴀɪʟ ᴀɴᴏɴɪᴍᴏ ᴇ ᴅᴇsᴄᴀʀᴛᴀᴠᴇʟ ᴘᴀʀᴀ ᴇɴᴠɪᴀʀ ᴇ ʀᴇᴄᴇʙᴇʀ
|
|╓─━⎓⎔  ${usedPrefix}nmap *﹝prompt﹞* 
|┕ ᶠᵉʳʳᵃᵐᵉⁿᵗᵃ ᵃʳᶜᵃⁿᵃ ᵖᵃʳᵃ ᵉˣᵖˡᵒʳᵃʳ ʳᵉᵈᵉˢ, ʳᵉᵛᵉˡᵃʳ ᵖᵒʳᵗᵃˢ ᵃᵇᵉʳᵗᵃˢ ᵉ ᵛᵘˡⁿᵉʳᵃᵇᶦˡᶦᵈᵃᵈᵉˢ ᵒᶜᵘˡᵗᵃˢ ⁿᵒˢ ˢᶦˢᵗᵉᵐᵃˢ.
|
|╓─━⎓⎔  ${usedPrefix}sqlmap *﹝website﹞* *﹝opções﹞* 
|┕ ᶠᵉʳʳᵃᵐᵉⁿᵗᵃ ˢᵒᵐᵇʳᶦᵃ ᵖᵃʳᵃ ᶦⁿᵛᵃᵈᶦʳ ʷᵉᵇˢᶦᵗᵉˢ, ᵠᵘᵉ ᵈᵉˢᵛᵉⁿᵈᵃ ˢᵉᵍʳᵉᵈᵒˢ ᵒᶜᵘˡᵗᵒˢ ᵈᵒ ᵇᵃⁿᶜᵒ ᵈᵉ ᵈᵃᵈᵒˢ ᶜᵒᵐ ᶦⁿʲᵉᶜᵃᵒ ˢᵠᴸ.
|
|╓─━⎓⎔  ${usedPrefix}wpscan *﹝website﹞* *﹝opções﹞* 
|┕ ᶠᵉʳʳᵃᵐᵉⁿᵗᵃ ᵉˣᵖˡᵒʳᵃᵈᵒʳᵃ ᵈᵃˢ ᵗʳᵉᵛᵃˢ, ʳᵉᵛᵉˡᵃⁿᵈᵒ ᵛᵘˡⁿᵉʳᵃᵇᶦˡᶦᵈᵃᵈᵉˢ ᵉˢᶜᵒⁿᵈᶦᵈᵃˢ ᵉᵐ ˢᶦᵗᵉˢ ᵂᵒʳᵈᴾʳᵉˢˢ.
|
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()


let greet =`💀🕯️ Olá @${username}`

let menucassino = `\`${horarioFecha}\`
╔═══.·:·.☽⋆🃜🃚🃖🃁🂭🂺⋆☾.·:·.═══╗
𓅊      *CASSINO D'O CORVO*       𓅊
╚═══.·:·.☽⋆🃜🃚🃖🃁🂭🂺⋆☾.·:·.═══╝

*| .roleta*
*|* † _Jogo de azar com roda numerada_
*| .slot*
*|* † _apostar ʙʏᴛᴇᴄᴏɪɴꜱ_
*| .slotxp*
*|* † _apostar pontos xp_
*| .truco*
*|* † _Jogo de cartas argentino._
*| .poker*
*|* † _Texas HoldEm poker_
*| .dado | .dice*
*|* † _sorteio de número aleatório_
*| .besta*
*|* † _Jogo do bicho temático_
 *┅─────┅❖ ⸸ ❖─┅─────┅*`
let menuall = `
${menubuscas}
${menuia}
${menutools}
${menujogos}
${menudiv}
${menucvs}
${menubaixar}
${menumd}
${menuaudios}
${menudev}
`.trim()


if(command=='menu' && !text)
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `╭─┅──┅❖  ♱︎  ❖─┅─┅
 |    *CENTRO DE MENUS*
╰─┅---─┅❖  ⸸  ❖─┅┅
| *.menu all*
| † menu completo
| *.menu ia*
| † criações, edições e ia
| *.menu dl*
| † todo tipo de download
| *.menu util*
| † ferramentas e utilidades
| *.menu dev*
| † hacking e desenvolvedores
| *.menu loja*
| † Loja d'O Gato Preto
| *.menu jogos*
| † desafios e jogos
| *.menu audios*
| † efeitos de audio e modificadores 
| *.menu midia*
| † memes, filtros e muito mais
| *.menu busca*
| † consultas e buscas gerais
| *.menu cassino*
| † Cassino d'O Corvo
| *.menu diversoes*
| † brincadeiras e entretenimentos
| *.menu acoes*
| † ações entre membros 
| *.menu ferramentas*
| † utensilios do bot

╭─┅──┅❖  ︎♱  ❖─┅─┅
 |       *ADMINISTRAÇÃO*
╰─-┅─--┅❖  ⸸  ❖─┅┅
| *.listas*
| † controle histórico de membros
| *.menu bot*
| † comandos exclusivos do Poe
| *.menu adm*
| † informações sobre o grupo
| *.menu funcoes*
| † funções para automação em grupos 
 *┅─────┅❖ ⸸ ❖─┅─────┅*`, fkontak)
if((text=="all" && command == 'menu') || command=='all')
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menuall}`, fkontak)

if((text=="busca" && command == 'menu') || command=='busca') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menubuscas}`, fkontak)
if(text=="dev") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menudev}`, fkontak)
if((text=="diversoes" && command == 'menu') || command=='diversoes') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menudiv}`,m, { mentions: conn.parse })

if(text=="bot" && (isAdmin || isOwner)) conn.sendFile(m.chat,gataVidMenu.getRandom(), 'gata.mp4',`\`${horarioFecha}\`\n${menubot}`, fkontak)

if(text=="ia") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menuia}`, fkontak)
if((text=="midia" && command == 'menu') || command=='midia') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menumd}`, fkontak)
if((text=="cassino" && command == 'menu') || command=='cassino') conn.sendFile(m.chat, `https://telegra.ph/file/5c728c80d2d5aaacdfe45.jpg`, 'gata.mp4', menucassino, fkontak)

if((text=="audios" && command == 'menu') || command=='audios') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menuaudios, fkontak)
if((text=="dl" && command == 'menu') || command=='download') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menubaixar}`, fkontak)

if(text=="adm" && (isAdmin || isOwner)) conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menugp}`, fkontak)


if((text=="ferramentas" && command == 'menu') || command=='ferramentas') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menutools}`, fkontak)

if((text=="jogos" && command == 'menu') || command=='jogos') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menujogos}`, fkontak)
if((text=="util" && command == 'menu') || command=='util') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menucvs}`, fkontak)

if((text=="funcoes" && command == 'menu') || command=='funcoes') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menufuncoes}`, fkontak)
if((text=="acoes" && command == 'menu') || command=='acoes') conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `\`${horarioFecha}\`\n${menuacoes}`, fkontak)


}
 catch(e){
  console.log(e)
  m.react("💀")
  m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
}
}
handler.command = /^(menu|cassino|jogos|util|ferramentas|menus |midia|diversoes|download|all|audios|busca|funcoes)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  ;