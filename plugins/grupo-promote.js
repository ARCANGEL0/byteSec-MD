
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn,usedPrefix, command, isAdmin,isOwner,text }) => {

if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}


    let noTxt;
 let user
if (global.db.data.chats[m.chat].language === 'pt') {
    noTxt = `> BYΓΞSΞC:~# man -h
. . . . . . . . . . . . . . . . . . . . . . 

[!] Uso inválido:
━━━━━━━━━━━━━━━━
> ‎ ‎ ‎ ‎
> [+] SINTAXE DE COMANDO
> >> .${command} @user
> ‎ ‎ ‎ ‎ 
> ‎
|              - [EOF] -`
}

else if (global.db.data.chats[m.chat].language === 'en') {
    noTxt = `> BYΓΞSΞC:~# man -h
. . . . . . . . . . . . . . . . . . . . . . 

[!] INVALID USAGE:
━━━━━━━━━━━━━━━━
> ‎ ‎ ‎ ‎ ‎ 
> [+] COMMAND SYNTAX
> >> .${command} @user
> ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
> ‎
|              - [EOF] -`
}
if(isNaN(text) && !text.match(/@/g)){

}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, noTxt,  m)


//conn.sendButton(m.chat, wm, langTOGGLE['smsDemott']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, null, [[langTOGGLE.smsConMenu(), `${usedPrefix}menu`]],  m)
	
try {
 
if(text) {
 user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
  user = number + '@s.whatsapp.net'
} 
///
conn.groupParticipantsUpdate(m.chat, [user],'promote')

    let newAdmin

if (global.db.data.chats[m.chat].language === 'pt') {
    newAdmin = `
> v@reaper: #~/groups/ usermod -aG sudo user
> ---------------------------------------
>>> [!] ᴀᴅɪᴄɪᴏɴᴀɴᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴀᴏ ꜱᴜᴅᴏᴇʀꜱ
────────────────────────────────
> [+] @${user.split`@`[0]} ᴠɪʀᴏᴜ ᴀᴅᴍɪɴɪꜱᴛʀᴀᴅᴏʀ ɴᴏ ꜱɪꜱᴛᴇᴍᴀ
────────────────────────────────
    `;
}
else if (global.db.data.chats[m.chat].language === 'en') {
  newAdmin = `
> v@reaper: #~/groups/ usermod -aG sudo user
> ---------------------------------------
>>> [!] ᴀᴅᴅɪɴɢ ᴜꜱᴇʀ ᴛᴏ ꜱᴜᴅᴏᴇʀꜱ ꜰɪʟᴇ 
────────────────────────────────
> [+] @${user.split`@`[0]} ʙᴇᴄᴀᴍᴇ ᴀᴅᴍɪɴ ɪɴ ᴛʜᴇ ꜱʏꜱᴛᴇᴍ
────────────────────────────────
  `;
}
conn.reply(m.chat, newAdmin,  m)

  
  
}
catch (error) {
      console.log('erro !!!!! ')
      console.log('///////////////// ')
      console.log(error)
    sendSystemErrorAlert(global.db.data.chats[m.chat].language);
    
}


}
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true

export default handler 
