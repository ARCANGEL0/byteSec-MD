
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* Created by https://github.com/Rlxfly */

import cheerio from 'cheerio'
import fetch from 'node-fetch'

async function sekaikomikDl(url) {
let res = await fetch(url)
let $ = cheerio.load(await res.text())
let data = $('script').map((idx, el) => $(el).html()).toArray()
data = data.filter(v => /wp-content/i.test(v))
data = eval(data[0].split('"images":')[1].split('}],')[0])
return data.map(v => encodeURI(v))}

async function facebookDl(url) {
let res = await fetch('https://fdownloader.net/')
let $ = cheerio.load(await res.text())
let token = $('input[name="__RequestVerificationToken"]').attr('value')
let json = await (await fetch('https://fdownloader.net/api/ajaxSearch', {
method: 'post',
headers: {
cookie: res.headers.get('set-cookie'),
'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
referer: 'https://fdownloader.net/' },
body: new URLSearchParams(Object.entries({ __RequestVerificationToken: token, q: url }))})).json()
let $$ = cheerio.load(json.data)
let result = {}
$$('.button.is-success.is-small.download-link-fb').each(function () {
let quality = $$(this).attr('title').split(' ')[1]
let link = $$(this).attr('href')
if (link) result[quality] = link })
return result }

export {
sekaikomikDl,
facebookDl }
