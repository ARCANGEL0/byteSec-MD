


//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

const handler = async (m, {conn, isMods,participants, groupMetadata,usedprefix,isCriadora, isAdmin,isOwner}) => {
  
  
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  if(isOwner){
  console.log("dono mandando mensagem!")
  
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:600000,
        role:'༒︎ 𝕹𝖊𝖛𝖊𝖗𝖒𝖔𝖗𝖊 ﮩ٨ـﮩ\n𝔐𝔢𝔰𝔱𝔯𝔢 𝔡𝔬𝔰 𝔠𝔬𝔯𝔳𝔬𝔰 ♱',
        money:600000,
        level:666,
        adm: isAdmin,
        legendary: true,
        coadmin:false,
        maxlevel: true,
        slots: 666,
        tentativasRoubo: 666,
        usuariosRoubados: [],
  }
  
  
}

  global.db.data.chats[m.chat].users[m.sender].name=`𝔥𝔢𝔫𝔯𝔶 𝔞𝔯𝔠𝔞𝔫𝔤𝔢𝔩𝔬 ⸸`
  global.db.data.chats[m.chat].users[m.sender].age=`𝔇𝔢𝔰𝔠𝔬𝔫𝔥𝔢𝔠𝔦𝔡𝔬`
  
  global.db.data.chats[m.chat].users[m.sender].morada=`ℜ𝔦𝔬 𝔱𝔦𝔫𝔱𝔬, 𝔓𝔬𝔯𝔱𝔬   𝔓𝔬𝔯𝔱𝔲𝔤𝔞𝔩`
  global.db.data.chats[m.chat].users[m.sender]. profissao=`_*𝔇𝔢𝔰𝔢𝔫𝔳𝔬𝔩𝔳𝔢𝔡𝔬𝔯 𝔣𝔲𝔩𝔩𝔰𝔱𝔞𝔠𝔨*_ 𖤍`
  global.db.data.chats[m.chat].users[m.sender].instagram=`https://instagram.con/henryy.xn`
  global.db.data.chats[m.chat].users[m.sender].website=`https://arcangelo.net`
  global.db.data.chats[m.chat].users[m.sender].links=`https://github.com/ARCANGEL0`
  global.db.data.chats[m.chat].users[m.sender].biografia=`ִ ࣪𖤐`
  global.db.data.chats[m.chat].users[m.sender].hobbies=`𝔏𝔢𝔯, 𝔬𝔲𝔳𝔦𝔯 𝔪𝔲𝔰𝔦𝔠𝔞, 𝔡𝔢𝔰𝔢𝔫𝔥𝔞𝔯 𝔢 𝔢𝔰𝔠𝔯𝔢𝔳𝔢𝔯. 
  ℜ𝔢𝔰𝔬𝔩𝔳𝔢𝔯 𝔢𝔫𝔦𝔤𝔪𝔞𝔰, 𝔭𝔲𝔷𝔷𝔩𝔢𝔰 𝔢 𝔡𝔢𝔰𝔞𝔣𝔦𝔬𝔰`
  global.db.data.chats[m.chat].users[m.sender].relacionamento=`ℭ𝔞𝔰𝔞𝔡𝔬 𝔠𝔬𝔪 𝔞 𝔪𝔬𝔯𝔱𝔢 ༒︎`
global.db.data.chats[m.chat].users[m.sender].limit=6666
  global.db.data.chats[m.chat].users[m.sender].money=66666
  global.db.data.chats[m.chat].users[m.sender].level = 666
  global.db.data.chats[m.chat].users[m.sender].legendary=true
  global.db.data.chats[m.chat].users[m.sender].coadmin=false
  global.db.data.chats[m.chat].users[m.sender].slots=666
  global.db.data.chats[m.chat].users[m.sender].tentativasRoubo=666
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados = []
  
  global.db.data.chats[m.chat].users[m.sender].role=`𝑵𝒆𝒗𝒆𝒓𝒎𝒐𝒓𝒆 ༒︎\n𝙼𝚎𝚜𝚝𝚛𝚎 𝚍𝚘𝚜 𝚌𝚘𝚛𝚟𝚘𝚜`
    
    
    
  }
  
  if(m.sender==global.cocriador ||(who==global.cocriador))
  {
  console.log("laura mandando mensagem!")
  
if(!global.db.data.chats[m.chat].users[global.cocriador]){
  global.db.data.chats[m.chat].users[global.cocriador]={
    exp: 0,
        limit:99999999,
        role:'༒︎ 𝑷𝒍𝒖𝒕ã𝒐 𝑵𝒆𝒈𝒓𝒐',
        money:99999999,
        level:666,
        adm: isAdmin,
        legendary: false,
        cocriadora:true,
        maxlevel: true,
        slots: 999,
  }
  
  
}
global.db.data.chats[m.chat].users[global.cocriador].limit=5000
  global.db.data.chats[m.chat].users[global.cocriador].money=5000
  global.db.data.chats[m.chat].users[global.cocriador].level = 666
  global.db.data.chats[m.chat].users[global.cocriador].legendary=false
  global.db.data.chats[m.chat].users[global.cocriador].cocriadora=true
  global.db.data.chats[m.chat].users[global.cocriador].role= '༒︎ 𝑷𝒍𝒖𝒕ã𝒐 𝑵𝒆𝒈𝒓𝒐'
  
    
    
    
  }
  let username = conn.getName(who)
  const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
  console.log(admins)
  console.log(who)
  console.log("e admin   " +admins.includes(who))
  let admcheck = admins.includes(who)
  
  if(!global.db.data.chats[m.chat].users[who].adm)
  global.db.data.chats[m.chat].users[who].adm=false
  
  global.db.data.chats[m.chat].users[who].adm =  admcheck
   //user admins? 
  	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[who]){
  global.db.data.chats[m.chat].users[who]={ 
    exp: 0,
        limit:0,
        role:'⌥ 𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        rce:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        silenced: false,
        maxlevel: false,
        cocriador: false,
        slots:3,

  }
}
if(!global.db.data.chats[m.chat].users[who].limit ||
global.db.data.chats[m.chat].users[who].limit<0){
  global.db.data.chats[m.chat].users[who].limit = 0
}
if(!global.db.data.chats[m.chat].users[who].rce ||
global.db.data.chats[m.chat].users[who].rce<0){
  global.db.data.chats[m.chat].users[who].rce = 0
}
if(!global.db.data.chats[m.chat].users[who].money ||
global.db.data.chats[m.chat].users[who].money<0){
  global.db.data.chats[m.chat].users[who].money = 0
}



if(global.db.data.chats[m.chat].users[who].money< 0){
  global.db.data.chats[m.chat].users[who].money=0
}
let user = global.db.data.chats[m.chat].users[who]
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => '') || './media/menus/img5.jpg'


/// information information
const username = global.db.data.chats[m.chat].users[who].name

////
function checkProfileExistence(who) {
  const user = global.db.data.users[who];
  const chatUser  = global.db.data.chats[m.chat].users[who];

  // Check if any of the properties exist
  const hasProfileData = user.nome || chatUser .morada || user.age || user.profissao || 
                         user.time || user.esportes || user.religiao || 
                         user.parceiro || user.hobbies || user.generos || 
                         user.musica || user.animais || user.instagram || 
                         user.website || user.links || user.biografia;


 const profileText = global.db.data.chats[m.chat].language === 'en' 

`[+] 𝙿̷𝚁̷𝙾̷𝙵̷𝙸̷𝙻̷𝙴̷` :
`[+] 𝙿̷𝙴̷𝚁̷𝙵̷𝙸̷𝙻̷`
  return hasProfileData ? profileText : '';
}

// Example usage
const profileStatus = checkProfileExistence(who);

const userdata = global.db.data.users[who];

const language = global.db.data.chats[m.chat].language;

const profileLines = [
  language === 'en' 
    ? (userdata.nome ? '> ┏ ɴᴀᴍᴇ: ' + userdata.nome : null)
    : (userdata.nome ? '> ┏ ɴᴏᴍᴇ: ' + userdata.nome : null),

  language === 'en' 
    ? (userdata.morada ? '> ┣ ᴀᴅᴅʀᴇꜱꜱ: ' + userdata.morada : null)
    : (userdata.morada ? '> ┣ ᴇɴᴅᴇʀᴇᴄᴏ: ' + userdata.morada : null),

  language === 'en' 
    ? (userdata.age ? '> ┣ ᴀɢᴇ: ' + userdata.age : null)
    : (userdata.age ? '> ┣ ɪᴅᴀᴅᴇ: ' + userdata.age : null),

  language === 'en' 
    ? (userdata.profissao ? '> ┣ ᴊᴏʙ: ' + userdata.profissao : null)
    : (userdata.profissao ? '> ┣ ᴘʀᴏꜰɪꜱꜱᴀᴏ: ' + userdata.profissao : null),
  language === 'en' 
    ? (userdata.study ? '> ┣ ꜱᴛᴜᴅʏɪɴɢ/ɢʀᴀᴅᴜᴀᴛᴇᴅ ɪɴ: ' + userdata.study : null)
    : (userdata.study ? '> ┣ ᴇꜱᴛᴜᴅᴀɴᴅᴏ/ꜰᴏʀᴍᴀᴅᴏ ᴇᴍ: ' + userdata.study : null),

  language === 'en' 
    ? (userdata.time ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ꜱᴘᴏʀᴛ ʟᴇᴀɢᴜᴇ: ' + userdata.time : null)
    : (userdata.time ? '> ┣ ᴛɪᴍᴇ ᴘʀᴇꜰᴇʀɪᴅᴏ: ' + userdata.time : null),

  language === 'en' 
    ? (userdata.esportes ? '> ┣ ꜱᴘᴏʀᴛꜱ ᴘʀᴀᴄᴛɪᴄᴇᴅ: ' + userdata.esportes : null)
    : (userdata.esportes ? '> ┣ ᴇꜱᴘᴏʀᴛᴇꜱ ᴘʀᴀᴛɪᴄᴀᴅᴏꜱ: ' + userdata.esportes : null),

  language === 'en' 
    ? (userdata.religiao ? '> ┣ ʀᴇʟɪɢɪᴏɴ: ' + userdata.religiao : null)
    : (userdata.religiao ? '> ┣ ʀᴇʟɪɢɪᴀᴏ: ' + userdata.religiao : null),

  language === 'en' 
    ? (userdata.parceiro ? '> ┣ ᴍᴀʀʀɪᴇᴅ ᴛᴏ: @' + userdata.parceiro.split('@')[0] : null)
    : (userdata.parceiro ? '> ┣ ᴄᴀꜱᴀᴅᴏ/ᴀ ᴄᴏᴍ: @' + userdata.parceiro.split('@')[0] : null),

  language === 'en' 
    ? (userdata.hobbies ? '> ┣ ʜᴏʙʙɪᴇꜱ: ' + userdata.hobbies : null)
    : (userdata.hobbies ? '> ┣ ɪɴᴛᴇʀᴇꜱꜱᴇꜱ & ʜᴏʙʙɪᴇꜱ: ' + userdata.hobbies : null),
 
    language === 'en' 
    ? (userdata.system ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴏꜱ:' + userdata.system : null)
    : (userdata.system ? '> ┣ ꜱɪꜱᴛᴇᴍᴀ ᴏᴘᴇʀᴀᴄɪᴏɴᴀʟ ᴘʀᴇꜰᴇʀɪᴅᴏ: ' + userdata.system : null),
    language === 'en' 
    ? (userdata.languages ? '> ┣ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ʟᴀɴɢᴜᴀɢᴇꜱ' + userdata.languages : null)
    : (userdata.languages ? '> ┣ ʟɪɴɢᴜᴀɢᴇɴꜱ ᴅᴇ ᴘʀᴏɢʀᴀᴍᴀᴄᴀᴏ: ' + userdata.languages : null),

  language === 'en' 
    ? (userdata.generos ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴍᴜꜱɪᴄ ɢᴇɴʀᴇꜱ: ' + userdata.generos : null)
    : (userdata.generos ? '> ┣ ɢᴇɴᴇʀᴏꜱ ᴍᴜꜱɪᴄᴀɪꜱ: ' + userdata.generos : null),

  language === 'en' 
    ? (userdata.serie ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴛᴠ ꜱʜᴏᴡ: ' + userdata.serie : null)
    : (userdata.serie ? '> ┣ ꜱᴇʀɪᴇ ꜰᴀᴠᴏʀɪᴛᴀ: ' + userdata.serie : null),

  language === 'en' 
    ? (userdata.musica ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴍᴜꜱɪᴄ: ' + userdata.musica : null)
    : (userdata.musica ? '> ┣ ᴍᴜꜱɪᴄᴀ ᴘʀᴇꜰᴇʀɪᴅᴀ: ' + userdata.musica : null),

  language === 'en' 
    ? (userdata.animais ? '> ┣ ᴘᴇᴛꜱ: ' + userdata.animais : null)
    : (userdata.animais ? '> ┣ ᴀɴɪᴍᴀɪꜱ ᴅᴇ ᴇꜱᴛɪᴍᴀᴄᴀᴏ: ' + userdata.animais : null),

    userdata.instagram ? '> ┣ Instagram: instagram.com/' + userdata.instagram : null,

    userdata.website ? '> ┣ ᴡᴇʙꜱɪᴛᴇ: ' + userdata.website : null,
    userdata.links ? '> ┣ ʟɪɴᴋꜱ: ' + userdata.links : null,

  language === 'en' 
    ? (userdata.biografia ? '> ┗ ᴀʙᴏᴜᴛ ᴍᴇ:\n> . . . . . . . . . . . . . . . . . .\n\n> ' + userdata.biografia : null)
    : (userdata.biografia ? '> ┗ ꜱᴏʙʀᴇ ᴍɪᴍ:\n> . . . . . . . . . . . . . . . . . .\n\n >' + userdata.biografia : null)
];

const profileString = profileLines.filter(line => line !== null).join('\n');
console.log(profileString);




  
if(who == global.criador){

const myProfile = global.db.data.chats[m.chat].language === 'en' ? 
`> ┏ ɴᴀᴍᴇ: HΞИЯУ ΛЯCΛИGΞLФ
> ┣ ᴀᴅᴅʀᴇꜱꜱ: 127.0.0.1
> ┣ ᴀɢᴇ: 0x18
> ┣ ᴊᴏʙ: DΞVΞLØPΞR̟
> ┣ ꜱᴘᴏʀᴛꜱ ᴘʀᴀᴄᴛɪᴄᴇᴅ: 𝘧𝘰𝘰𝘵𝘣𝘢𝘭𝘭, 𝘣𝘰𝘹𝘪𝘯𝘨, 𝘫𝘪𝘶 𝘫𝘪𝘵𝘴𝘶, 𝘣𝘢𝘴𝘬𝘦𝘵𝘣𝘢𝘭𝘭
> ┣ ʀᴇʟɪɢɪᴏɴ: 𝘕𝘰𝘯𝘦
> ┣ ᴍᴀʀʀɪᴇᴅ ᴛᴏ: 𝙉𝙖𝙩𝙝𝙖𝙡𝙞𝙖 𝙎𝙚𝙧𝙫𝙪𝙡𝙤 𝘼𝙧𝙘𝙖𝙣𝙜𝙚𝙡𝙤
> ┣ ꜱᴛᴜᴅʏɪɴɢ/ɢʀᴀᴅᴜᴀᴛᴇᴅ ɪɴ: 𝘎𝘳𝘢𝘥𝘶𝘢𝘵𝘦𝘥 𝘪𝘯 𝘚𝘋𝘈 𝘢𝘯𝘥 𝘴𝘵𝘶𝘥𝘺𝘪𝘯𝘨 𝘊𝘺𝘣𝘦𝘳𝘴𝘦𝘤𝘶𝘳𝘪𝘵𝘺
> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴏꜱ: 𝘈𝘳𝘤𝘩 𝘭𝘪𝘯𝘶𝘹
> ┣ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ʟᴀɴɢᴜᴀɢᴇꜱ: 𝘊#, 𝘗𝘺𝘵𝘩𝘰𝘯, 𝘑𝘢𝘷𝘢, 𝘙𝘶𝘣𝘺, 𝘚𝘘𝘓, 𝘛𝘺𝘱𝘦𝘴𝘤𝘳𝘪𝘱𝘵, 𝘙, [...]
> ┣ ʜᴏʙʙɪᴇꜱ: ᴄᴏᴅɪɴɢ & ʜᴀᴄᴋɪɴɢ
> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴛᴠ ꜱʜᴏᴡ: 𝘒𝘪𝘯𝘥𝘢 𝘰𝘣𝘷𝘪𝘰𝘶𝘴, 𝘥𝘰𝘯'𝘵 𝘺𝘰𝘶 𝘵𝘩𝘪𝘯𝘬?
> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴍᴜꜱɪᴄ: 𝘓𝘰𝘷𝘦 𝘵𝘩𝘦 𝘸𝘢𝘺 𝘺𝘰𝘶 𝘭𝘪𝘦 - 𝘌𝘮𝘪𝘯𝘦𝘮 𝘧𝘵. 𝘉𝘦𝘺𝘰𝘯𝘤𝘦
> ┣ ᴘᴇᴛꜱ: 1 𝘣𝘭𝘢𝘤𝘬 𝘬𝘪𝘵𝘵𝘺
> ┣ Instagram: instagram.com/h.arcangelo
> ┗ ᴡᴇʙꜱɪᴛᴇ: https://arcangelo.net
` 
:
`> ┏ ɴᴀᴍᴇ: HΞИЯУ ΛЯCΛИGΞLФ
> ┣ ᴀᴅᴅʀᴇꜱꜱ: 127.0.0.1
> ┣ ᴀɢᴇ: 0x18
> ┣ ᴊᴏʙ: DΞVΞLØPΞR̟
> ┣ ꜱᴘᴏʀᴛꜱ ᴘʀᴀᴄᴛɪᴄᴇᴅ: 𝘧𝘰𝘰𝘵𝘣𝘢𝘭𝘭, 𝘣𝘰𝘹𝘦, 𝘫𝘪𝘶 𝘫𝘪𝘵𝘴𝘶, 𝘣𝘢𝘴𝘲𝘶𝘦𝘵𝘦
> ┣ ʀᴇʟɪɢɪᴏɴ: 𝘕𝘦𝘯𝘩𝘶𝘮𝘢
> ┣ ᴍᴀʀʀɪᴇᴅ ᴛᴏ: 𝙉𝙖𝙩𝙝𝙖𝙡𝙞𝙖 𝙎𝙚𝙧𝙫𝙪𝙡𝙤 𝘼𝙧𝙘𝙖𝙣𝙜𝙚𝙡𝙤
> ┣ ꜱᴛᴜᴅʏɪɴɢ/ɢʀᴀᴅᴜᴀᴛᴇᴅ ɪɴ: 𝘍𝘰𝘳𝘮𝘢𝘥𝘰 𝘦𝘮 𝘈𝘋𝘚 𝘦 𝘦𝘴𝘵𝘶𝘥𝘢𝘯𝘥𝘰 𝘊𝘺𝘣𝘦𝘳𝘴𝘦𝘤𝘶𝘳𝘪𝘵𝘺
> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴏꜱ: 𝘈𝘳𝘤𝘩 𝘭𝘪𝘯𝘶𝘹
> ┣ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ʟᴀɴɢᴜᴀɢᴇꜱ: 𝘊#, 𝘗𝘺𝘵𝘩𝘰𝘯, 𝘑𝘢𝘷𝘢, 𝘙𝘶𝘣𝘺, 𝘚𝘘𝘓, 𝘛𝘺𝘱𝘦𝘴𝘤𝘳𝘪𝘱𝘵, 𝘙, [...]
> ┣ ʜᴏʙʙɪᴇꜱ: ᴄᴏᴅɪɴɢ & ʜᴀᴄᴋɪɴɢ
> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴛᴠ ꜱʜᴏᴡ: 𝘔𝘦𝘪𝘰 𝘰𝘣𝘷𝘪𝘰, 𝘯𝘢𝘰 𝘢𝘤𝘩𝘢?
> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴍᴜꜱɪᴄ: 𝘓𝘰𝘷𝘦 𝘵𝘩𝘦 𝘸𝘢𝘺 𝘺𝘰𝘶 𝘭𝘪𝘦 - 𝘌𝘮𝘪𝘯𝘦𝘮 𝘧𝘵. 𝘉𝘦𝘺𝘰𝘯𝘤𝘦
> ┣ ᴘᴇᴛꜱ: 1 1 𝘨𝘢𝘵𝘪𝘯𝘩𝘰 𝘱𝘳𝘦𝘵𝘰
> ┣ Instagram: instagram.com/h.arcangelo
> ┗ ᴡᴇʙꜱɪᴛᴇ: https://arcangelo.net
`

  let profile =`┌──[ 𝙼𝚛.𝚁𝚘𝚋𝚘𝚝 ]─[~]─[${date}] 
└─ $ harvester -e @${who.split('@')[0] } 
> ‎ 
[!] 404
>>>> 𝚊̷𝚗̷𝚘̷𝚗̷𝚢̷𝚖̷𝚘̷𝚞̷𝚜̷
> ʀᴀɴᴋ: ${language === 'en' ? '𝚃𝚑𝚎 𝙰𝚛𝚌𝚑𝚒𝚝𝚎𝚌𝚝' : '𝙾 𝙰𝚛𝚚𝚞𝚒𝚝𝚎𝚝𝚘' }
> ʟᴇᴠᴇʟ: 𝟹̷𝟹̷𝟶̷𝟷̷
> xᴘ: 0̵̺͆͗̎̐͜0̶̰̄̇0̵̦͕̭͕̀̀͂0̵̮̀1̸̢̛̝͖̀̉͠3̴̭̭̳͊̀3̷͚͖͋7̴̖̆̿̊̐4̶̨̈́̒͒̿8̶̛̫̘͑̅̓9̷̲̬̻̙̆̚5̸̗̉1̷͈̫͎̼̂͑̚0̴̥̝̌̏͝
> . . . . . . . . . . . . . . . . .
> ✇ ᴛʀᴏᴊᴀɴꜱ: ∞	
> 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ: ∞	
> ⧗ ᴇᴛʜᴇʀᴇᴜᴍ: ∞	
> [*] 𝐎𝐒: ᗷᒪᗩᑕᛕ ᗩᖇᑕᕼ
> ‎ 
${profileStatus}
${profileString}
`
  return conn.sendMessage(m.chat, {text: profile, mentions: [who,global.db.data.users[who]?.parceiro]}, {quoted: fkontak})
}



  let msg =  `
┌──[ 𝙼𝚛.𝚁𝚘𝚋𝚘𝚝 ]─[~]─[${date}] 
└─ $ harvester -e @${who.split('@')[0] } 
> ‎ 
[+] USER_LOG
${username ? '> ' + username + '\n' : '> ‎ '}
> ʀᴀɴᴋ: ${user.role}
> ʟᴇᴠᴇʟ: ${user.level}
> xᴘ: ${user.exp}
> . . . . . . . . . . . . . . . . .
> ✇ ᴛʀᴏᴊᴀɴꜱ: ${user.rce} 
> 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ: ${user.money.toFixed(2)}
> ⧗ ᴇᴛʜᴇʀᴇᴜᴍ: ${user.limit}
> ‎ 
${profileStatus}
${profileString}
`
  
  
  await conn.sendMessage(m.chat, {text: msg, mentions: [who,global.db.data.users[who]?.parceiro]}, {quoted: fkontak})
  
  
  
};
handler.help = ['status', 'perfil'];
handler.tags = ['grupo'];
handler.command = /^(perfil)$/i;
export default handler;
