
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import syntaxerror from 'syntax-error'
import { format } from 'util'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
let handler = async (m, _2, msg, pickRandom, isOwner ) => {
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
let { conn, usedPrefix, noPrefix, args, groupMetadata, command, isROwner } = _2
if (!isROwner) return
if(m.fromMe) return
let _return
let name = conn.getName(m.sender)
let _syntax = ''
let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix
let old = m.exp * 1
try {
let i = 15
let f = { exports: {} }
let exec = new (async () => { }).constructor('print', 'm', 'handler', 'require', 'conn', 'Array', 'process', 'args', 'groupMetadata', 'module', 'exports', 'argument', _text)
_return = await exec.call(conn, (...args) => {
if (--i < 1) return
console.log(...args)
return conn.reply(m.chat, format(...args), m)
}, m, handler, require, conn, CustomArray, process, args, groupMetadata, f, f.exports, [conn, _2])
} catch (e) {
let err = syntaxerror(_text, 'Execution Function', { allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true, sourceType: 'module' })
if (err) _syntax = '```' + err + '```\n\n'
_return = e
} finally {
conn.reply(m.chat, _syntax + format(_return), m)
m.exp = old
}}
handler.help = ['> ', '=> ']
handler.tags = ['advanced']
handler.customPrefix = /=?>>>|~/
handler.owner = true
handler.command = /(?:)/i
export default handler
class CustomArray extends Array {
constructor(...args) {
if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
else return super(...args)}}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}