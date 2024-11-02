




//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import news from 'gnews'
import { JSDOM } from 'jsdom'
import moment from 'moment';
import * as scholarly from "@ebandev/scholarly";


const handler  = async (m, { conn, command, text,args, usedPrefix, DevMode }) => {
  m.react('🔍')
    if(!isOwner && m.sender != global.cocriador ){
    return m.react("🦇")
  }
  const operacoes = [
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐶𝑟𝑒𝑝𝑢́𝑠𝑐𝑢𝑙𝑜',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝑁𝑜𝑐𝑡𝑢𝑟𝑛𝑎',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐷𝑒𝑐𝑙𝑖́𝑛𝑖𝑜',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝑆𝑜𝑚𝑏𝑟𝑎',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐴𝑏𝑖𝑠𝑚𝑜',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐴𝑟𝑘𝑎𝑛𝑎',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐴𝑝𝑜𝑐𝑎𝑙𝑖𝑝𝑠𝑒',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐶𝑜𝑟𝑣𝑢𝑠',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐿𝑢𝑔𝑢𝑏𝑟𝑒',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐹𝑎́𝑡𝑢𝑜',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝑆𝑖𝑙𝑒̂𝑛𝑐𝑖𝑜',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝑇𝑒𝑛𝑒𝑏𝑟𝑎𝑟𝑖𝑢𝑚',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐶𝑖𝑟𝑐𝑢𝑙𝑜 𝑁𝑒𝑔𝑟𝑜',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝑁𝑒𝑐𝑟𝑜𝑚𝑎𝑛𝑐𝑖𝑎',
  '𝑂𝑝𝑒𝑟𝑎𝑐̧𝑎̃𝑜 𝐶𝑎𝑖𝑛'
];

 let msg =`╭━━━─── • ───━━━╮
🔍🚓 𝕴𝖓𝖛𝖊𝖘𝖙𝖎𝖌𝖆𝖈̧𝖆̃𝖔 𝖕𝖔𝖑𝖎𝖈𝖎𝖆𝖑 𝖗𝖊𝖆𝖑𝖎𝖟𝖆𝖉𝖆
╰━━━─── 𖢻 ───━━━╯
╭⋟────────────────────────╮
𝑈𝑚𝑎 𝑖𝑛𝑣𝑒𝑠𝑡𝑖𝑔𝑎𝑐̧𝑎̃𝑜 𝑒𝑛𝑣𝑜𝑙𝑣𝑒𝑢 𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜, 𝑠𝑜𝑏
𝑠𝑢𝑠𝑝𝑒𝑖𝑡𝑎𝑠 𝑑𝑒 𝑓𝑟𝑎𝑢𝑑𝑒 𝑓𝑖𝑠𝑐𝑎𝑙. ${pickRandom(operacoes)} 𝑒𝑛𝑐𝑒𝑟𝑟𝑜𝑢 𝑐𝑜𝑚 𝑢𝑚𝑎 𝑙𝑖𝑠𝑡𝑎 𝑑𝑒 𝑠𝑢𝑠𝑝𝑒𝑖𝑡𝑜𝑠, 𝑒 𝑎𝑠 𝑎𝑢𝑡𝑜𝑟𝑖𝑑𝑎𝑑𝑒𝑠 𝑖𝑟𝑎̃𝑜 𝑐𝑜𝑛𝑓𝑖𝑠𝑐𝑎𝑟 𝑠𝑒𝑢𝑠 𝑏𝑒𝑛𝑠 𝑚𝑜𝑛𝑒𝑡𝑎́𝑟𝑖𝑜𝑠, 𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑛𝑑𝑜 𝑒𝑚 𝑐𝑜𝑛𝑠𝑒𝑞𝑢𝑒̂𝑛𝑐𝑖𝑎𝑠 𝑑𝑖𝑟𝑒𝑡𝑎𝑠 𝑝𝑎𝑟𝑎 𝑠𝑒𝑢𝑠 𝑎𝑡𝑜𝑠.
╰────────────────────────⋞╯` 
Object.keys(global.db.data.settings.banco.clientes).forEach(key => {
  // Access each cliente using the key
  let cliente = global.db.data.settings.banco.clientes[key];

  // Check if saldo is above 10000
  if (cliente.saldo > 10000) {
    // Set saldo to 1000
    cliente.saldo = 1000;
  }
});
Object.keys(global.db.data.chats).forEach(chatId => {
  const chat = global.db.data.chats[chatId];
  const hasUserWithHighMoney = Object.values(chat.users).some(user => user.money
  > 10000);

  if (hasUserWithHighMoney) {
    console.log(chatId + ' ------  ' + hasUserWithHighMoney);


    conn.sendFile(chatId, 'https://itzpire.com/file/ca9e73a1aa73.jpg', 'err.png', msg, null);

    Object.values(chat.users).forEach(user => {
      if (user.money > 10000) {
        user.money = 250;
      }
    });
  }
})


}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.level=100
handler.command = ['investigar']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}