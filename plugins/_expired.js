
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

export async function all(m, conn,isOwner,plugin,command,isCriadora) {
   
if (!m.isGroup)
return

let chats = global.db.data.chats[m.chat]
if (!chats.expira){
return !0
}


const scheduledDateTime = new Date(chats.expira);

    // Get the current date and time
    const currentDate = new Date();
console.log('teeeest  ' + currentDate < scheduledDateTime)
    // Compare the current date and time with the scheduled date and time
    if (currentDate < scheduledDateTime){
      global.db.data.chats[m.chat].isBanned = false
      return !0
    }
    else if(currentDate >= scheduledDateTime){
      global.db.data.chats[m.chat].isBanned = true
      if (/^[\.\/]/.test(m.text) && currentDate >= scheduledDateTime &&
      !isOwner && !m.fromMe) {
        // Do something if the current date and time is eϙual to or after the scheduled date and time
          global.db.data.chats[m.chat].isBanned = true
       
        console.log('expirou');
        if(global.db.data.chats[m.chat].isBanned && !isOwner  && global.db.data.chats[m.chat].firstTime)
 {
console.log("first time")

  const atv1 = global.db.data.chats[m.chat].language == 'en' ? 

  `┌──[ BYΓΞSΞC ]─[~/bin]
  └─ $ touch activate.sh
  > ‎ 
  | [!] 𝟻̷𝟶̷𝟶̷ 𝐸𝑅𝑅𝒪𝑅
  | . . . . . . . . . . . . . . . . .
  > ʜᴇʏ, ʜᴏʟᴅ ᴜᴘ. ɪ’ᴍ ɴᴏᴛ ᴀᴄᴛɪᴠᴇ ɪɴ ᴛʜɪꜱ ɢʀᴏᴜᴘ ʏᴇᴛ, ᴀɴᴅ ʜᴏɴᴇꜱᴛʟʏ, ɪ ʜᴀᴠᴇɴ’ᴛ ꜱᴇᴇɴ ᴀɴʏ ꜱɪɢɴ ᴏꜰ ʏᴏᴜ ɢᴜʏꜱ ɪɴ ᴍʏ ʟᴏɢꜱ. 
  > ʏᴏᴜ ɪɴᴛᴇʀᴇꜱᴛᴇᴅ ɪɴ ᴍʏ ꜱᴇʀᴠɪᴄᴇꜱ? ɪ ʙᴇᴛ ʏᴏᴜ ᴀʀᴇ. ɪ’ᴠᴇ ɢᴏᴛ ᴀ ᴡʜᴏʟᴇ ᴀʀꜱᴇɴᴀʟ ᴛᴏ ᴏꜰꜰᴇʀ: ꜰʀᴏᴍ ʟɪᴛᴛʟᴇ ɢᴀᴍᴇꜱ ᴛʜᴀᴛ ꜱᴄʀɪᴘᴛ ᴋɪᴅᴅɪᴇꜱ ʟᴏᴠᴇ ᴛᴏ ꜱᴇʀɪᴏᴜꜱ ᴛᴏᴏʟꜱ ꜰᴏʀ ᴛʜᴇ ʙɪɢ ᴘʟᴀʏᴇʀꜱ—ᴀᴅᴠᴀɴᴄᴇᴅ ᴀɪ's, ᴀʟʟ ʟɪɴᴋᴇᴅ ᴛᴏ ᴇxᴘʟᴏɪᴛᴅʙ, ᴡɪᴛʜ ᴀ ꜱᴇʟᴇᴄᴛɪᴏɴ ᴏꜰ ᴜᴛɪʟɪᴛɪᴇꜱ ᴛʜᴀᴛ’ʟʟ ᴍᴀᴋᴇ ʏᴏᴜʀ ꜱᴡɪꜱꜱ ᴀʀᴍʏ ᴋɴɪꜰᴇ ʟᴏᴏᴋ ʟɪᴋᴇ ᴀ ᴛᴏʏ.
  > ‎ 
  > ᴅᴏɪɴɢ ᴛʜᴇ ᴍᴀᴛʜ ʜᴇʀᴇ... ${global.db.data.chats[m.chat].totalMembros} ᴍᴇᴍʙᴇʀꜱ ɪɴ ᴛʜɪꜱ ʀᴏᴏᴍ, ꜱᴏ...
  > ʜᴏᴡ ᴀʙᴏᴜᴛ ᴀ ɴɪᴄᴇ ᴘʀɪᴄᴇ ᴛᴀɢ ᴏꜰ $ ${global.db.data.chats[m.chat].boleto*6} ʙᴜᴄᴋꜱ?
  > ‎ 
  Now, let’s get real: is anyone actually interested? Think it over, because the pressing ϙuestion is: are you gonna sit this one out? The world is just a web of algorithms and binaries, and you? Are you a 1 or a 0?
  > ‎ 
  > 𝙸̷𝚏̷ 𝚢̷𝚘̷𝚞̷ 𝚐̷𝚘̷𝚝̷ 𝚒̷𝚗̷𝚝̷𝚎̷𝚛̷𝚎̷𝚜̷𝚝̷, 𝚛̷𝚎̷𝚊̷𝚌̷𝚑̷ 𝚖̷𝚎̷ 𝚘̷𝚞̷𝚝̷ 𝚊̷𝚝̷ 𝚝̷𝚑̷𝚒̷𝚜̷ 𝚗̷𝚞̷𝚖̷𝚋̷𝚎̷𝚛̷:
  [*] +351 927 285 125.
  > ‎ 
  ` 
  
  : 
  
  `┌──[ BYΓΞSΞC ]─[~/bin]
  └─ $ touch ativar.sh
  > ‎ 
  | [!] 𝟻̷𝟶̷𝟶̷ 𝐸𝑅𝑅𝒪𝑅
  | . . . . . . . . . . . . . . . . .
  > ᴇɪ, ꜱᴇɢᴜʀᴀ ᴀɪ, ɢᴀʀᴏᴛᴏ. ɴᴀᴏ ᴇꜱᴛᴏᴜ ᴀᴛɪᴠᴏ ɴᴇꜱꜱᴇ ɢʀᴜᴘᴏ, ᴇ, ᴘʀᴀ ꜱᴇʀ ꜱɪɴᴄᴇʀᴏ, ɴᴀᴏ ᴠɪ ɴᴇɴʜᴜᴍ ꜱɪɴᴀʟ ᴅᴇ ᴠᴏᴄᴇꜱ ɴᴏꜱ ᴍᴇᴜꜱ ʟᴏɢꜱ.
  > ᴇꜱᴛᴀᴏ ᴀ ꜰɪᴍ ᴅᴏꜱ ᴍᴇᴜꜱ ꜱᴇʀᴠɪᴄᴏꜱ? ᴀᴘᴏꜱᴛᴏ ϙᴜᴇ ꜱɪᴍ, ᴛᴇɴʜᴏ ᴜᴍ ᴀʀꜱᴇɴᴀʟ ᴘʀᴀ ᴏꜰᴇʀᴇᴄᴇʀ: ᴅᴇ ᴊᴏɢᴜɪɴʜᴏꜱ ϙᴜᴇ ꜰᴀᴢᴇᴍ ᴀ ᴀʟᴇɢʀɪᴀ ᴅᴏꜱ ꜱᴄʀɪᴘᴛ ᴋɪᴅᴅɪᴇꜱ ᴀᴛᴇ ꜰᴇʀʀᴀᴍᴇɴᴛᴀꜱ ꜱᴇʀɪᴀꜱ ᴘᴀʀᴀ ᴏꜱ ɢʀᴀɴᴅᴏᴇꜱ — ɪᴀ'ꜱ ᴀᴠᴀɴᴄᴀᴅᴀꜱ, ᴛᴜᴅᴏ ᴄᴏɴᴇᴄᴛᴀᴅᴏ ᴀᴏ ᴇxᴘʟᴏɪᴛᴅʙ, ᴄᴏᴍ ᴜᴍᴀ ꜱᴇʟᴇᴄᴀᴏ ᴅᴇ ᴜᴛɪʟɪᴅᴀᴅᴇꜱ ϙᴜᴇ ᴠᴀɪ ꜰᴀᴢᴇʀ ᴏ ꜱᴇᴜ ᴄᴀɴɪᴠᴇᴛᴇ ꜱᴜɪᴄᴏ ᴘᴀʀᴇᴄᴇʀ ᴜᴍ ʙʀɪɴϙᴜᴇᴅɪɴʜᴏ.
  > ‎ 
  > ꜰᴀᴢᴇɴᴅᴏ ᴏꜱ ᴄᴀʟᴄᴜʟᴏꜱ... ${global.db.data.chats[m.chat].totalMembros} ᴍᴇᴍʙʀᴏꜱ ᴀϙᴜɪ, ᴇɴᴛᴀᴏ. . . 
  | ϙᴜᴇ ᴛᴀʟ ᴜᴍ ᴘʀᴇᴄɪɴʜᴏ ᴅᴇ R$ ${global.db.data.chats[m.chat].boleto}?
  > ‎ 
  ᴀɢᴏʀᴀ, ᴀ ʀᴇᴀʟ: ᴀʟɢᴜᴇᴍ ᴀɪ ᴇꜱᴛᴀ ɪɴᴛᴇʀᴇꜱꜱᴀᴅᴏ? ʀᴇꜰʟɪᴛᴀᴍ ʙᴇᴍ, ᴘᴏʀϙᴜᴇ ᴀ ᴘᴇʀɢᴜɴᴛᴀ ϙᴜᴇ ɴᴀᴏ ϙᴜᴇʀ ᴄᴀʟᴀʀ ᴇ: ᴠᴀᴏ ꜰɪᴄᴀʀ ᴅᴇ ꜰᴏʀᴀ ᴅᴇꜱꜱᴀ? ᴏ ᴍᴜɴᴅᴏ ᴇ  ᴀᴘᴇɴᴀꜱ ᴜᴍ ᴍᴀʀ ᴅᴇ ᴀʟɢᴏʀɪᴛᴍᴏꜱ ᴇ ʙɪɴᴀʀɪᴏꜱ, ᴇ ᴠᴏᴄᴇ? É ᴜᴍ 1 ᴏᴜ ᴜᴍ 0?
  > ‎ 
  > 𝚃̷𝚎̷𝚖̷ 𝚒̷𝚗̷𝚝̷𝚎̷𝚛̷𝚎̷𝚜̷𝚜̷𝚎̷? 𝙼̷𝚎̷ 𝚌̷𝚑̷𝚊̷𝚖̷𝚎̷ 𝚗̷𝚎̷𝚜̷𝚝̷𝚎̷ 𝚗̷𝚞̷𝚖̷𝚎̷𝚛̷𝚘̷
  [*] +351 927 285 125.
  > ‎ 
  `

  return m.reply(atv1)
 }
 else{ 
  
  

const atv2 = global.db.data.chats[m.chat].language == 'en' ? 

`┌──[ BYΓΞSΞC ]─[~/bin]
└─ $ touch activate.sh
> ‎ 
| [!] 𝟻̷𝟶̷𝟶̷ 𝙴̷𝚁̷𝚁̷𝙾̷𝚁̷
| . . . . . . . . . . . . . . . . .
> ᴇ ᴀɪ, ɢᴀʀᴏᴛᴏ? ᴏʟʜᴀ, ɴᴀᴏ ꜱᴏᴜ ɴᴇɴʜᴜᴍ ᴄᴏᴍᴇʀᴄɪᴀɴᴛᴇ ᴅᴀ ᴍɪᴄʀᴏꜱᴏꜰᴛ, ᴍᴀꜱ ꜱᴜᴀ ʟɪᴄᴇɴᴄᴀ ᴀᴄᴀʙᴏᴜ ᴅᴇ ᴇxᴘɪʀᴀʀ. ᴏ ᴛᴇᴍᴘᴏ ᴀᴄᴀʙᴏᴜ.
> ʀᴇᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴀQᴜɪ, ᴛᴇᴍᴏꜱ ${global.db.data.chats[m.chat].totalMembros} ɪᴘꜱ ɴᴇꜱꜱᴇ ɢʀᴜᴘᴏ… ᴄᴇʀᴛᴏ, ᴘᴀʀᴄᴇɪʀᴏ, ɪꜱꜱᴏ ᴠᴀɪ ᴄᴜꜱᴛᴀʀ R$ ${global.db.data.chats[m.chat].boleto} ᴘᴀʀᴀ ᴍᴀɴᴛᴇʀ ᴏ ᴀᴄᴇꜱꜱᴏ ᴀᴏ ᴍᴇᴜ ᴀʀꜱᴇɴᴀʟ — ᴅᴇꜱᴅᴇ ᴀꜱ ᴄᴏɪꜱɪɴʜᴀꜱ ᴅɪᴠᴇʀᴛɪᴅᴀꜱ ᴀᴛᴇ ᴀꜱ
ꜰᴇʀʀᴀᴍᴇɴᴛᴀꜱ ᴘᴇꜱᴀᴅᴀꜱ ᴘʀᴀ ɢᴀʟᴇʀᴀ ᴅᴀ ᴇʟɪᴛᴇ.
> ‎ 
> ᴠᴏᴄᴇ ᴇꜱᴛᴀ ᴀ ᴜᴍ ᴘᴀꜱꜱᴏ ᴅᴇ ꜰɪᴄᴀʀ ᴘʀᴀ ᴛʀᴀꜱ. ᴜᴍ ᴘᴇQᴜᴇɴᴏ ɪɴᴠᴇꜱᴛɪᴍᴇɴᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴛɪɴᴜᴀʀ ɴᴇꜱꜱᴇ ᴊᴏɢᴏ. ᴇɴᴛᴀᴏ, ᴏ Qᴜᴇ ᴠᴀɪ ꜱᴇʀ? ᴘʀᴏɴᴛᴏ ᴘᴀʀᴀ ᴠᴏʟᴛᴀʀ ᴀ ᴀᴄᴀᴏ?
> ‎ 
> 𝙲̷𝚑̷𝚊̷𝚖̷𝚎̷ 𝚗̷𝚎̷𝚜̷𝚜̷𝚎̷ 𝚗̷𝚞̷𝚖̷𝚎̷𝚛̷𝚘̷ 𝚙̷𝚊̷𝚛̷𝚊̷ 𝚌̷𝚘̷𝚗̷𝚝̷𝚒̷𝚗̷𝚞̷𝚊̷𝚛̷ 𝚘̷𝚗̷𝚕̷𝚒̷𝚗̷𝚎̷
| [*] +351 927 285 125.
> ‎ 
> 𝙉𝙖𝙤 𝙥𝙚𝙧𝙘𝙖 𝙩𝙚𝙢𝙥𝙤; 𝙤 𝙧𝙚𝙡𝙤𝙜𝙞𝙤 𝙚𝙨𝙩𝙖 𝙘𝙤𝙧𝙧𝙚𝙣𝙙𝙤, 𝙜𝙖𝙧𝙤𝙩𝙤
> ‎ 
` 

: 

`┌──[ BYΓΞSΞC ]─[~/bin]
└─ $ touch ativar.sh
> ‎ 
| [!] 𝟻̷𝟶̷𝟶̷ 𝙴̷𝚁̷𝚁̷𝙾̷𝚁̷
| . . . . . . . . . . . . . . . . .
> ꜱᴜᴘ, ᴋɪᴅ? ɪ ᴀɪɴ'ᴛ ɴᴏ ᴡɪɴᴅᴏᴡꜱ ᴍᴇʀᴄʜᴀɴᴛ, ʙᴜᴛ ʏᴏᴜʀ ʟɪᴄᴇɴꜱᴇ ᴊᴜꜱᴛ ᴇxᴘɪʀᴇᴅ. ᴛɪᴍᴇ'ꜱ ᴜᴘ.
> ‎ 
> ʟᴇᴛ ᴍᴇ ʀᴇᴄᴀʟᴄᴜʟᴀᴛᴇ ʜᴇʀᴇ, ᴛʜᴇʀᴇ ɪꜱ ᴀʙᴏᴜᴛ ${global.db.data.chats[m.chat].totalMembros} ɪᴘ'ꜱ ʜᴇʀᴇ ᴀᴛ ᴛʜɪꜱ ɢʀᴏᴜᴘ....…
ᴀʟʀɪɢʜᴛ, ʙᴜᴅᴅʏ, ᴛʜᴀᴛ’ʟʟ ᴄᴏꜱᴛ ʏᴀ ${global.db.data.chats[m.chat].boleto*6} ᴅᴏʟʟᴀʀꜱ ᴛᴏ ᴋᴇᴇᴘ ᴀᴄᴄᴇꜱꜱ ᴛᴏ ᴍʏ ᴀʀꜱᴇɴᴀʟ—ꜰʀᴏᴍ ᴛʜᴇ
ꜰᴜɴ ꜱᴛᴜꜰꜰ ᴛᴏ ᴛʜᴇ ʜᴇᴀᴠʏ-ᴅᴜᴛʏ ᴛᴏᴏʟꜱ.
> ‎ 
> ʏᴏᴜ’ʀᴇ ᴏɴᴇ ꜱᴛᴇᴘ ᴀᴡᴀʏ ꜰʀᴏᴍ ꜰᴀʟʟɪɴɢ ʙᴇʜɪɴᴅ. ᴀ ꜱᴍᴀʟʟ ɪɴᴠᴇꜱᴛᴍᴇɴᴛ ᴛᴏ ᴋᴇᴇᴘ ʏᴏᴜʀ ᴇᴅɢᴇ ɪɴ ᴛʜɪꜱ ɢᴀᴍᴇ. ꜱᴏ, ᴡʜᴀᴛ’ꜱ ɪᴛ ɢᴏɴɴᴀ ʙᴇ? ʀᴇᴀᴅʏ ᴛᴏ ᴊᴜᴍᴘ ʙᴀᴄᴋ ɪɴ?
> ‎ 
> 𝚁̷𝚎̷𝚊̷𝚌̷𝚑̷ 𝚖̷𝚎̷ 𝚘̷𝚞̷𝚝̷ 𝚏̷𝚘̷𝚛̷ 𝚛̷𝚎̷𝚗̷𝚎̷𝚠̷𝚊̷𝚕̷:
| [*] +351 927 285 125.
> ‎ 
> ᴅᴏɴ’ᴛ ꜱʟᴇᴇᴘ ᴏɴ ɪᴛ; ᴛʜᴇ ᴄʟᴏᴄᴋ’ꜱ ᴛɪᴄᴋɪɴɢ, ᴋɪᴅᴅᴏ
> ‎ `
  
  m.reply(atv2)
 }
 
 
return !0
    }else {
      
      console.log('chat is banned but its owner',)
      console.log('🪙')
       global.db.data.chats[m.chat].isBanned = true
 
       if(global.criador.includes(m.sender)){
        // Do something else if the current date and time is before the scheduled date and time
           
       }
     return !0
    }
    }
    

  


}






