
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn }) => {
  let stats = Object.entries(db.data.stats).map(([key, val]) => {
    let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' & ') : plugins[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  let txt = stats.slice(0, 10).map(({ name, total, last }, idx) => {
    if (name.includes('-') && name.endsWith('.js')) name = name.split('-')[1].replace('.js', '')
    return `(${idx + 1})\n┏━━━━━━━━━━━━━━━━┓\n┣📚 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 : ${name}\n┣≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋\n┣🗂️ 𝙐𝙎𝙊𝙎 : ${total}\n┣≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋\n┣📍 𝙐𝙇𝙏𝙄𝙈𝙊 𝙐𝙎𝙊 : ${getTime(last)}\n┗━━━━━━━━━━━━━━━━┛`
  }).join`\n\n`
  m.reply(`*☘️ Dashboard comandos mais usados ☘️*\n\n${txt}`)
}
handler.help = ['dashboard']
handler.tags = ['info']
handler.command = /^dashboard$/i
handler.owner = true
export default handler

export function parseMs(ms) {
  if (typeof ms !== 'number') throw 'Parameter must be filled with number'
  return {
    dias: Math.trunc(ms / 86400000),
    horas: Math.trunc(ms / 3600000) % 24,
    minutos: Math.trunc(ms / 60000) % 60,
    segundos: Math.trunc(ms / 1000) % 60,
    milisegundos: Math.trunc(ms) % 1000,
    microsegundos: Math.trunc(ms * 1000) % 1000,
    nanosegundos: Math.trunc(ms * 1e6) % 1000
  }
}

export function getTime(ms) {
  let now = parseMs(+new Date() - ms)
  if (now.days) return `${now.days} dias atras`
  else if (now.hours) return `${now.hours} horas atras`
  else if (now.minutes) return `${now.minutes} minutos atras`
else return `alguns segundos`
}
