
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from "node-fetch"
import yts from "yt-search"
import ytdl from 'ytdl-core'
import axios from 'axios'
  import poji_ytmp3 from 'youtube-to-mp3-poji'
import cloudscraper from 'cloudscraper';
import { join } from 'path'
import pkg from '@neoxr/youtube-scraper'
const { Youtube } = pkg
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import ytdlf from "@EdderBot02/ytdlf"



let handler = async (m, { participants,conn,__dirname, command, args, text, usedPrefix, isAdmin}) => {
  async function search(query, options = {}) {
const search = await yts.search({ query, hl: "pt", gl: "PT", ...options });
return search.videos};


   if(!(isAdmin || isOwner|| m.sender==global.cocriador) &&  global.db.data.chats[m.chat].download===false){
     console.log('test play')
   m.react("🚫")
   
   return !0;
 } 
 const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
 const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  let admcheck = admins.includes(who)
  
 if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
  }
}
 if (!(isAdmin || isOwner) && global.db.data.chats[m.chat].autolevelup && global.db.data.chats[m.chat].users[m.sender].money < 80) {
await conn.sendMessage(m.chat ,{text: global.db.data.chats[m.chat].language === 'en' ? `> [⚠] ʏᴏᴜ'ʀᴇ ᴏᴜᴛ ᴏꜰ ʙʏᴛᴇᴄᴏɪɴꜱ, ᴋɪᴅ.` : `> [⚠] ᴠᴏᴄᴇ ᴇꜱᴛᴀ ꜱᴇᴍ ʙʏᴛᴇᴄᴏɪɴ ᴀʟɢᴜᴍ, ɢᴀʀᴏᴛᴏ!`},{quoted:m})
 return !0
}
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality   



const mp3Search = global.idioma == 'en' ? `┌──[ BYΓΞSΞC ]─[~] 
└─ $ ytdl -mp3 --help
> .   . . .. . . .  .  . . .. .  .  . . .. . .  .
> ʜᴇʏ, ᴋɪᴅ. ᴡʜᴀᴛ ᴀᴜᴅɪᴏ ᴀʀᴇ ʏᴏᴜ ʟᴏᴏᴋɪɴɢ ᴛᴏ ꜱᴇᴀʀᴄʜ ꜰᴏʀ ᴏɴ ʏᴏᴜᴛᴜʙᴇ? ᴀ ʜᴇᴀʀᴛʙʀᴇᴀᴋ ꜱᴏɴɢ ᴀʙᴏᴜᴛ ᴀɴ ᴇx? ᴍᴀʏʙᴇ ᴀ ᴄᴏɴᴄᴇʀᴛ ᴄʟɪᴘ?
> ɢᴏ ᴀʜᴇᴀᴅ, ᴊᴜꜱᴛ ʟᴇᴛ ɪᴛ ᴏᴜᴛ.
> ‎ 
> $ 𝙴𝚡𝚊𝚖𝚙𝚕𝚎:
> ◊ .${command} Where is my mind? - Pixies
> ◊ .${command} CompTIA+ mp3
> . . . . . . . . . . . . . . . . . . . . . . . . 
` 
: 
`┌──[ BYΓΞSΞC ]─[~] 
└─ $ ytdl -mp3 --help
> .   . . .. . . .  .  . . .. .  .  . . .. . .  .
> ᴇ ᴀɪ, ɢᴀʀᴏᴛᴏ. Qᴜᴀʟ ᴀᴜᴅɪᴏ ᴠᴏᴄᴇ ᴇꜱᴛᴀ ᴀꜰɪᴍ ᴅᴇ ʙᴜꜱᴄᴀʀ ɴᴏ ʏᴏᴜᴛᴜʙᴇ? 
> ᴜᴍᴀ ᴍᴜꜱɪᴄᴀ ᴅᴇ ᴄᴏʀᴀᴄᴀᴏ ᴘᴀʀᴛɪᴅᴏ ᴘᴇʟᴀ ᴇx? ᴜᴍ ᴄʟɪᴘᴇ ᴅᴇ ꜱʜᴏᴡ, ᴛᴀʟᴠᴇᴢ? ᴠᴀɪ ʟᴀ, ᴍᴀɴᴅᴀ ᴠᴇʀ.
> ‎ 
> $ 𝙴𝚡:
> ◊ .${command} Where is my mind? - Pixies
> ◊ .${command} CompTIA+ mp3
> . . . . . . . . . . . . . . . . . . . . . . . . 
`


if (!text) throw mp3Search
try {
  console.log(args)
const yt_play = await search(args.join(" "))
console.log(yt_play[0])
let additionalText = ''
if (command === 'play') {
additionalText = 'ᴀᴜᴅɪᴏ'
} else if (command === 'play2') {
additionalText = 'ᴠɪᴅᴇᴏ'}
let captionvid = `┌──[ BYΓΞSΞC ]─[~] 
└─ $ ytdl -mp3 $1
> ${global.idioma == 'en' ? 'ꜱᴇɴᴅɪɴɢ ' : 'ᴇɴᴠɪᴀɴᴅᴏ '}${additionalText}
| [×] ${yt_play[0].title}
> ──── ──── ──── 
> ‎   
| [!] ${yt_play[0].description}`

m.react("💿")
let sendtext = await conn.sendFile(m.chat, yt_play[0].image,'error.jpg', captionvid, m)
let mp3f = getRandom('.mp3');
let mp4f = getRandom('.mp4');


if (command == 'play') {
// Encode the YouTube URL
try {
  console.log(yt_play)
  
let req = await
fetch(`https://api.ryzendesu.vip/api/downloader/ytmp3?url=${yt_play[0].url}`)


let data = await req.json()


console.log('more data below of play')
console.log(data.url)
if(!data.url || data.url == (null || 'undefined')) throw 'URL Undefined'
   await conn.sendFile(m.chat, data.url,'erro.mp3',null,m)

if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 80
 m.react("📀")
await m.reply("༒︎ 80 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}



}
catch(e){
  try{
    let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
await conn.sendMessage(m.chat, { audio: { url: ress.url}, mimetype: 'audio/mpeg' }, { quoted: m})

if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 80
 m.react("📀")
await m.reply("༒︎ 80 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}


  }
  catch(e){
    console.log(e)
  }
  try{ 
    const res = await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${yt_play[0].url}`);
let { data } = await res.json();
await conn.sendMessage(m.chat, { audio: { url: data.dl }, mimetype: 'audio/mpeg' }, { quoted: m ||null });
 
if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 80
 m.react("📀")
await m.reply("༒︎ 80 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}




}catch(e){
  console.log(e)
  try{
    
    let x = await ytdlf(`${yt_play[0].url}`,"mp3");
console.log(x)


await conn.sendMessage(m.chat, { audio: { url:x.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });

if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 80
 m.react("📀")
await m.reply("༒︎ 80 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}

} catch(e){
  console.log(e)
  m.react("💀")
     sendSystemErrorAlert(global.db.data.chats[m.chat].language);
}

}
}


}
}
if (command == 'play2') {
try {
  
let req = await fetch(`https://api.neoxr.eu/api/youtube?url=${yt_play[0].url}&type=video&quality=480p&apikey=${neoxr}`)
console.log(req)

let data = await req.json()
  m.react("📀")
  
console.log(data)
if(!data || data == (null || 'undefined')) throw '1st failed PLAY2'
  conn.sendFile(m.chat, data.data.url,'erro.mp4',null,m)
  if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 80
 m.react("📀")
await m.reply("༒︎ 80 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}


  
}
catch(e){
  console.log(e)
  try {
    let y=await ytdlf(`${yt_play[0].url}`,"360");
await conn.sendMessage(m.chat, { video: { url:y.downloadUrl }, fileName: `video.mp4`, caption: `${wm}` }, { quoted: m }) 


if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 80
 m.react("📀")
await m.reply("༒︎ 80 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}

}
catch(e){
  console.log(e)
  m.react("💀")
      sendSystemErrorAlert(global.db.data.chats[m.chat].language);
}
}

    
}

  

} catch(e) {
  console.log(e)
m.react("❌")
}}
handler.level = 6
handler.command = ['play', 'play2','music']


export default handler


function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay};

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};
async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
  console.log('👈👈👈 1')
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
  console.log('👈👈👈 2')
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
  console.log('👈👈👈 3')
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
  console.log('👈👈👈 4')
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
