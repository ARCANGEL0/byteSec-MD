
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
let handler = async (m, { conn,isAdmin, text, usedPrefix, command }) => {
  
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].acoes===false){
   m.react("❌")
   
   return !0;
 } 
 
 
if (!global.db.data.chats[m.chat].loja) {
global.db.data.chats[m.chat].loja = {
  lojaId:'',
  Index:0,
  page:'home', 
  historico:[]
};
}
global.db.data.chats[m.chat].loja.lojaId=''
global.db.data.chats[m.chat].loja.Index=0
global.db.data.chats[m.chat].loja.page='home'
	
try { 

let txtLoja = `╔═━━━─── • ───━━━═╗
   *𝔄 𝔏𝔬𝔧𝔞 𝔇' 𝔊𝔞𝔱𝔬 𝔓𝔯𝔢𝔱𝔬*
╚═━━━─── • ───━━━═╝
╭⋟────────────────────────╮
_𝐁𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 𝐚 𝐥𝐨𝐣𝐚 𝐝𝐨 𝐆𝐚𝐭𝐨 𝐏𝐫𝐞𝐭𝐨, 𝐨𝐧𝐝𝐞 𝐨𝐬 𝐩𝐞𝐬𝐚𝐝𝐞𝐥𝐨𝐬 𝐬𝐚𝐨 𝐝𝐞𝐬𝐞𝐧𝐭𝐞𝐫𝐫𝐚𝐝𝐨𝐬 𝐞 𝐯𝐨𝐬𝐬𝐚 𝐟𝐨𝐫𝐭𝐮𝐧𝐚 𝐝𝐞𝐬𝐯𝐞𝐥𝐚 𝐩𝐫𝐞𝐦𝐢𝐨𝐬 𝐬𝐨𝐦𝐛𝐫𝐢𝐨𝐬. . ._

    𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳... 𝘴𝘦𝘭𝘦𝘤𝘪𝘰𝘯𝘦 𝘶𝘮𝘢 𝘤𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘢

⦗1⦘ _𝑪𝒂𝒎𝒃𝒊𝒐 𝒅𝒆 ᴇᴛʜᴇʀᴇᴜᴍ 𝒆 ʙʏᴛᴇᴄᴏɪɴꜱ_

⦗2⦘ _𝐂𝐨𝐦𝐩𝐫𝐚𝐫 𝐱𝐩 𝐜𝐨𝐦 𒄆 ʙʏᴛᴇᴄᴏɪɴꜱ_

⦗3⦘ _𝐂𝐨𝐦𝐩𝐫𝐚𝐫 𝐭𝐨𝐤𝐞𝐧𝐬_    

⦗4⦘ _𝐍𝐞𝐠𝐨𝐜𝐢𝐚𝐫 𝐚𝐥𝐦𝐚𝐬_

╰────────────────────────⋞╯
`.trim()  

let imgLivraria =[
  'https://telegra.ph/file/c4c0734b7ee56951907cc.jpg',
  'https://telegra.ph/file/40b2679d873da6de41213.jpg',
  'https://telegra.ph/file/72e30043d3e5f9dd50340.jpg',
  'https://telegra.ph/file/c9a75e5c7cbfe05c585c9.jpg'
]

let message = await  conn.sendFile(m.chat, imgLivraria.getRandom(), 'loja.jpg', txtLoja, m)
 
global.db.data.chats[m.chat].loja.lojaId = message.key
 
global.db.data.chats[m.chat].loja.Index = 0 

} catch(e){
    console.log(e)
    m.react("💀")
    m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
  𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.
  
  𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
  *╰┅─❖ ⸸ ❖─┅*`)
  }
 
}

handler.command = ['loja']
handler.level =1

export default handler;
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}