
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
let chat, user, bot
chat = global.db.data.chats[m.chat]

if(typeof global.db.data.chats[m.chat].language === undefined){

global.db.data.chats[m.chat].first = true
global.db.data.chats[m.chat].privateChat = true

  
    let getLang = await m.reply(`robot@bytesec:~# lang-config
╭ . . . . . . . . . . . . . . . . . . . . . . .
> [+] LANG CONFIG
> -----------------------
> ‎ 
> ⁅1⁆ 🇧🇷 Português
> ⁅2⁆ 🇺🇸 English
> ‎ 
╰─────────
`)

 global.db.data.chats[m.chat].langChangeID = getLang.key.id
  
  

}
if (global.db.data.chats[m.chat].first && m.text &&
global.db.data.chats[m.chat].msgCount == 0) {
if(m.text ==1){
  global.db.data.chats[m.chat].language ='pt'
  global.db.data.chats[m.chat].first = false 
  return !0
} 
else if(m.text==2){
  
  global.db.data.chats[m.chat].language ='en'
  global.db.data.chats[m.chat].first = false 
  return !0
  
}

  else{
 m.react("❌")  
    
    return !0 
  }
  
  
  
  
  
}

else {
  user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}
global.db.data.chats[m.chat].autolevelup = false
 if(!isAllowed && !m.fromMe && bot.antiPrivate&&
 global.db.data.chats[m.chat].msgCount >= 10){
   
   const language = global.db.data.chats[m.chat].language;

const message = language === 'pt' ? `
> root@bytesec:~# cat /etc/trial.md
> . . . . . . . . . . 
> ‎ 
[+] Período de Teste: Encerrado

Então, ${m.pushName}... chegamos ao fim do seu "teste grátis." Interessante, não? Um pequeno vislumbre do que está por trás. Mas sejamos sinceros, você não está aqui só por isso. Você quer ver o que realmente acontece por trás das linhas de código.

Interessado no que a fSociety de verdade, a byteSec, realmente oferece? Ferramentas avançadas, Deep learning pentest, auto-recon... Quer acesso? Sabe onde me encontrar.

> Entre em contato:
> +351 927 285 125

[!] Mas lembre-se, algumas portas, uma vez abertas, não se fecham. Escolha sabiamente.

— 𝙈𝙧.𝙍𝙤𝙗𝙤𝙩

root@bytesec:~# _
` : `
> root@bytesec:~# cat /etc/trial.md
> . . . . . . . . . . 
> ‎ 
[+] Trial Period: Ended

So, ${m.pushName}… here we are. The end of your "free trial." A nice little glimpse, right? But let’s be real, you didn’t come here for a taste. You want to see what’s really behind the code.

Curious about what "real" fSociety, a.k.a byteSec, actually offers? Advanced tools. Auto-recon, Deep learning pentest. You want in? You know where to find me.

> Reach us out:
> +351 927 285 125

[!] But remember, some doors, once opened, don’t close. Choose wisely.

— 𝙈𝙧.𝙍𝙤𝙗𝙤𝙩

root@bytesec:~# _
`;


 m.reply(message)
global.db.data.chats[m.chat].fim = true
}
else if (!isAllowed && bot.antiPrivate) {
  global.db.data.chats[m.chat].msgCount+=1

return !1
}

}

}

