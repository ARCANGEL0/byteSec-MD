


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


if(who == global.criador){
  let profile =`╓─━⎓⎓⎓⎓⎓⎔⎓⎓⎓⎓⎓━─┒ 
║       ♱ ℌ𝔢𝔫𝔯𝔶 𝔄𝔯𝔠𝔞𝔫𝔤𝔢𝔩𝔬  ♱
║          _𝗣a̶̢͈̖͍̟͚̤͂͌̈͊̿́͜ͅỉ̴̭̬̈́ ̶̱̘͎͍̬̥̪̥͚͖̹̬̮̾̆͋̊͌̏̑̊d̷̡̡̢̛͖̙͕͇̪̜̜̺̦͚̥̱̣̪̝̩͍͚̥͕̑́̍̑͒̍̈́̿́̑̍̐̆͆͝𝗼 𝗘𝗱g̸̨̡̲͖̬͊̈́͜𝗮𝗿_
║——————————————
║ 𝙽i̸̘̫͚̱̠͚̒̀̉̿̒̓̔̓̐͌̑̏̚v̶̡̢͈̤̹͉͚̟̭̘̝̤̪̰͉̱̫̘̐̿̇͆̅̿͂̈́͑͐̈͋͘͠͝͝ͅȩ̵̢̖͖̥̜̦̱̕ͅl̶̥̩̪̓͗ 𝙰𝚝u̴͉̫̍̓͛̐ͅa̴̡̦̹̬̝̻̼̫̻͕̐̄̏̽́̄͆͠𝚕: 🜏
║ 𝚁𝚊𝚗𝚔: 𝑵𝒆𝒗𝒆𝒓𝒎𝒐𝒓𝒆 𓄿
║─┅┅❖  𝔐𝔢𝔰𝔱𝔯𝔢 𝔡𝔬𝔰 ℭ𝔬𝔯𝔳𝔬𝔰
║ 🜅 𝙳𝚊𝚛𝚔𝙲𝚘i̶̛̙̹͈͑̆͆̎̅̓̾n̴͓̜͕̘͖̣̠̾̅̅͛̊͌̔̾̋̑̓͆̋̋̓̅̕͘͜͠ş̸̨̢̺̖̲̭̻͔͓͍̻̠̈́̄̎̾͋̿̐̒̅͐́͗̆͗̋̿͘͝͝͠: ∞
║⧗ ᴇᴛʜᴇʀᴇᴜᴍ: ∞
┕⚋⚋⚋⚋┒
Ş̴̨̨̛̦̫̟͍̣̙̤̭̭͙̒̅͋̏̐̔͊͌̍̓̍̀͘̕͘͠ͅo̴̢̭̫̝̯͚͠ữ̶̢̫̻̘̤̳̥̞̞̳̣̈̈̇͑̍̽̌͑̽́̿̃̃͠͠ ̶̲̉̈͊̽̀͠õ̷̬̥̺̰̬̙͓͍͉͕̺̱̪̦̤̐̂͊͋̓̇̒̓̔͝͝ͅ ̶̟̙̩̟̤̠̘̼̐͑̅̀͆̽͌̎̆̾̎̕͠ã̷̧̨͚̭̥̟̠̳̤͇̻̲̳̻̣̮̪̩͖̌͐̔̓͌̄̂̂̉̿͌͘͝͠r̷̡͙̩̍͒̅̀̓͛͛͐̃͌̄̏̕͝͝ͅa̴̳͍͛́͒͝ư̷̧̛͖̮̰̘̹͚͓̲̟̂̈́̅̿̃́͗̓̈́̕͠ṫ̷̹̯̝̔̓͌̃̓͆͂̆̋̐͌͂̐̏̚͝͠ö̷̺̼̞͎̥͕́̓̆̊̀̈́̔̈́͌̽͒͛̆͆͝͠ ̸̣͚̭͚̯͕̮̩͉̩̠̽̑͗̍̌͗̊́͊͘̚d̴̛̤͉͙̿̐̾͆͊̇̓̂̑́̏̅̿̀͋͗̕ȃ̴̺͔̻̟͈͎̍͝ͅs̵̱͙̱͉̪̠̠̲͒̽͒̂͑̒̽̆͂̃̂͘̕͜͜͝ ̷̛̯̲̰́̊̀̿͌̐̒͛́̽̔͐͊̚͘͘͝ş̸͎̱͉̳̰̦̩̠̈̔͐̂͆̂́̐ơ̷̠̲̳͈͇̙̙̹̭͔͎̟̈́̀̽̒͗͌͛̏̐̿̒̍́̀͘͝ͅͅm̷̧̢̮̰̱̯̺͎̜̣̫̬̪͍̫̽̇̆̌̀̐̈́̈́̽͗̚͠ͅb̸̛͈͇̠͉̰͓̼͔̜̰̖̹̾̿͊͆̌̋̈̂̓̃ṛ̵̞͇̩͔̰̠͌̾à̵͎͔̄̽͂͋̇̀̇̍̑͆͗̃̒̀̚͠s̵̮̮̰̺̠̳̼͔̪̝̔́͊̂̊̓̂̚̚,̷̡͍̬̮̮̣̜̫̦̻̩̝̹͖̫̽̈́̊͂̿̓͛̈̋̕͘͜͜ ̷̡̠̗͖͎͓͔̳̤̀̚ơ̸͎͖̦̠̄̒̐̇̈̑̔̉͂̈́͒̋̒͂̌̒͘͜ͅ ̸͇̲̩̮͈̰̖͎̥̟̑͂̅̊͗͝ḍ̶̗̺̗͓̣͇͇͈͕̜̼̿ę̶̧̧͎̤̮̣̪̖̩̥͚̣͎̯͊̔̃̚m̵̜̞̣̠̮̙͖̼̤͈͍̥͈̰̘̼̤̔͊̎̈̈́͐̉̄̅͊̾̽̕ô̸̱̻̣̺͇̪̜̲̈́̒̃̈́̈́̈́̂̇̆̿̚̚͝n̸̡̧̢̢̳̟̰̼̭̬͓̬͚̖̞͕̠̻̱̋̌̀̋̀̾̒̽̾͆̌̄́̎͐̈͌̚͝í̶̛͖̦̜͍̦̹͔͈͇̩̹̲͔̫̭̽̓̈̾́͐̿́̒̚̚ͅo̸̡̧͍̟̞̼̝̹̹̗̺̝̬͈̙̼̙̾̇̾̑͆̿͗̈́̽̔͐͋̐̈͑͘͝͠ ̴̢̭̞̪͖͕̦̳͉̞̰͓̮̯̄̏̈́̒̈́̍͐̈́̾̈́̊̒̐̍̕q̶̨̨̳̥͙̬͒̑̀͆̔̏̿͋̿̈́̓̆͝ų̵̨̡͓̦̤͖͕̮̥̽̾̄̉̽͋̆̽̅̔́́͐e̶̢̨̧͙̩̲̘̮̟̩̪̝͍̘͙̤̍̚ ̵̰̳̮̻̈̉̈̈̊r̵̡̨̢̨̛͍͙͖̘͖̥͉̦͓͕͓͕͍̙̫͗͒̍͆͆́͊̊̔͒̄͠ȉ̵̼̠̻̐͂̀͊̽̓̅́͋͗̈́̄͐̾̇̈͘ ̵̨̢͉̩̤͓̖̟̠̟̖̣̿̀͒ͅë̶̢͓̹̗̝͖̩̠̯̲͙̜̘̟́͂̑̇̌͒̓͆͝ͅñ̵̫͚̬̌̃̒̀́̍̓̎̓͌̃͆̚q̸̛͉͕͐́̈́͋͂͌͂͂̌͝ŭ̵̢̧͖̫̜̤̻̞̩̰̙͕̔̒a̷̡̝͔͍̻͙͔͎̭͋͋͐̂̑́͒̓̿̀͊̈̂̇͝͠n̴̢̛̛̛̳͙̗̫͑͒͂̎̔̑t̷̛̥̭̗̪̦̱̞͈̩́̈̀̒̽͆̋̒͌̒̌̏̚͜͝͝͝ͅỏ̸̤͍̮͔͍ ̶̧̛̹͍̜̫̺͍͒̄̊̽͌̿̐̑͐̃̐̃̈͒̂͌͝͠ͅơ̵̢̛̖̲̘̿̔͋̆̋̇̆̓̀͐͘͝ͅͅ ̷̢̙̰͔̳͕̼̫̞͎̪̪̩͕̤̃̍̇ͅm̴̮̲̣̼̫͗̌̈́̈̓̀̆̿̉̚̕ụ̶̡̩̀̅͜n̵̪̓̾̍͂̀̆͐͆̉̏͒̑͆͛̔̽͗̉͠d̶̛̝̫̝́̈́̔̾̌̎̚̕ò̸̢̝͈̖̙̬͎̖͉̙͛̔͋͐̿̎̈́̏̚͝ͅͅ ̷̛̑͐̄͗̄̏̌͜q̴̨̻̙̟͓̲̞̝̘̊͊̀̈́́̏͆̚̚͝͝u̷̻̟̙͙̻̬̫͒̌̿́͌̒͑̑͒̋̈́͒̉͒̐͆͝ȩ̴̡̬̫̬̣͔̳͇̭̣̪̞̾̆̏̔̀͆̆̑̿͌̂͆̾̃̕͜͠ͅị̸͈̱͚̣̳̳͙̹͖͉̳̖̖̲̃̈̍͋̀͋̐̏̈́̂͑̓m̸̨̧̜̭̟̬̺͈̯̲͙͍͚̼͓̬̦̯̣͗͛̎̏̓͑̓̈́̆̃̕͠á̶̳̯̲͇͉͕͖̭͕̰̲̖͙̫̥̝̀̏̓͆̉̌̑́͐̕ͅ,̶̛̙͒͊̄͋̀͠ ̵̢̡̛̛̪̤̝̦̈́̽̀͋̀̄̆̋̔̀̑͌̋́̌͠͠ͅp̸̧̛̳̮̟͖̳̥̮̰̟̫͖̦̗̬̿̀͊̄̒̂̓̉͛͊̌́͊͘e̵̢͇͇̮̪͋̿̽̆́̇̅̓̎ṟ̵̡̡́͊̃̈́̋̊̎͛̅̚͘̕͜͠ḑ̶̣̩̩̝͚̜͕̣͕̘͔͈̪͍̪̌̈́̆̅͐̔̑̅̎̈́̆̈́̀̓̚̕͜͜͝į̴̡̜͚͔̤̮̣̩̪̯̹̼̭̼̘̀͋̂̽͐͆͑̌́̔̈́d̵̥̮̠̟͙̻̟̣̟̟̦͛̐̓̇̂͗͐͐̆́̏̒̀̚ͅo̸̡͑̽̓͋͒ ̵̛̭̠̌̈͋̅̉̐͋̄̓̀͆̂͌́͘n̶̰̯̫͎͎̦̖̳͖̞̗̣͇͇͎̾̃͊̓͆̽̾͠á̴̢̨̡͓̠̩͙̦̩̝͙̫̜̅̈͊̈͗͆̐̉̓̀̃͘͜͝ͅ ̴̛̼̟͓̭̩͔̠̲̳͔̤̯͒̇̽͊̚͝e̷̢͍̟̭̘̺̙̼̤̞͙̹̮̥̩͖͕̒̎̈̈́̂s̶̪̗̬͈̳̱̣̮͎͎̬̈́͑̇̃̄͆̔̏̄͋̒̋̍̆͘͝ͅc̶̳̬̬̰̰̓̊͊̎͊̑̊̚ư̵̢̨̧̧̺̦̮̥̺̬̬̺͖̯̹̭̹̎̓͊̓͊̀̽͌̇̄͑͗͗͂͑̂͒͘͜r̶̡̡̨̲͕̠͓͇̊̍́i̴̭̘̞̤̖̹̲̦̱̩͖̬̻̪̞̾̆̈́̂̎̇̕̚͝d̶͎̞͋̄̎̅̀̾̿͜͝͠ã̶̳͉̱̥̲̯͉͙̏̿̐̿̕õ̴͎͊͑͆̈̈̽̎ ̴̪͇̪̟͐̐̉͂̇͒̓̓̈́͌́̉̌̃̒̕o̶̧͈̣̹̠̬͝n̵̨̨̛̝̲̣̞̗͎̭̤̮͓͚̘̩͍̘͇̾͋̏̓̀̿̀́̾̌̚̚͘ḑ̶̨͖̥͕̳͉͔̬̜͔̭̖͉̗͎̒͜͜͜͠e̷͙̗̦͈͈̿͐̂́̇͐̐͒́͝ ̸͇̼͕̰̭̤͛́o̸̡̨̘̥̥̪̮̳̻̼͚̓̂͐̓̌͒̍̓̓ ̶͍̦̩̓̓̏̾̍̀̓͘̕d̷̞̹̻̙̬͍̹̝̲͍͉́̚ę̴̛̦̭̘͙̯͇̟̾͋̈́̓͛̋͐͛͗͌̽́̔͐̕ș̸͍̲̩̺̖̋̈͐̈́͊̈́̾͊̋͝ͅe̶̡̡̙͓͕͖̖̦̮͓̞̼̩̖͑͗̒ͅs̴̡̢̪̙̥̱̰̻̳͎͖̲͚̙͇̰̆̐̀̊̽̉̐͆̿͝͝p̶̢̧̯̣̻̖̖̩͐͜e̶̡̛̗͍̣̥̭̪͈͙̘̘̭̹̫̓͋̊͒͋̄̔́̌̂̾̆͛͝͝ŗ̷̨̗̱͈͚̹̬̣̖̪̖̞̦̻͉̪͓̬̓o̸̡̢͚͈͚͍̖̹͇̓̃͛̏ͅ ̴̡̘̮̖̘͇͍͓̖̭̲̗̥̻̤̋͑̓̑̄́̈ͅé̵͓̺̀́̊͋̆̃̒͋̊͆̀͊̚͝ͅ ̵̧̡̧̥̙͚̫̪̪͈̘͙̭̖̗̲̤̍̍͜m̴̨̧̤̝͓̯̬̘̦͓̥͍̼͖̓͋̔̿͆̔͋͌̈́͊͋ͅe̶̫͇̟̠̱͑̔̋̔ų̶̛̛̝̙̠̈́̓̀̓͂̈́̔̉͊̓̃̇̍͘ ̸̢̡̳͖̘̖͍̖͙̰̖̠̯̭̟̰͌̍̆̒̂͝a̴̛͈̮͓͕̿͛̍̑̅̇̕̚͠l̷̮͔͉̥̝͖͐́̂̒͗̓̉͊͗i̶̧̢̨̜̥͉͙͚̭̹̖̳̺̳̙̖̥̇̉͐̇͜m̸̥̭͖̣̼̙̗̖̥͕̮̮̳̜̱͎̖̫̬̀́̔̾́̒ḙ̴̡̧̡̢̻͖͈͎̹̲̝͍̯̹̫͙̼͊̀́̕͠n̶̹̗̞̣̺̉̍͊̀͆͑ţ̸̛̣̖͗͋͒̓͆̉̚͝ȏ̴͕̦̯̖͖̯͍̰͍̗̳.̷͙̪̣͖̤͖͊̊̑̽̊̉̂̂̈́́͜ ̷͍̬̻̔͝Ṣ̸̛̄̒̈́̍̏̒̌̈̈́͊͘̕͝o̴͔̼̜͓͈̱̗̗̥͋̔̀̐̌͛͋́̀̓͗̚͝͝ư̶̧̫̣̙̱͎̥̥̘̲̖̻̠̥̼̮͈̎̽̓̽̽͆̇̋̓̉̄̉̄̿̎̉͘̚͜ ̷̛̤͔͚͖̤̺͈̞̩̙̮̘͈͚̦̠̘̞̦͒̿͂̎̓̄̾̑̓́ư̵̤̫̬͖̮̮̈́̃̑̋̕̚͝ḿ̴̯̺̪̇̆̏͛̋̽͛̎̇́̓̀͜͝ ̵̬̣̄́͒̚e̴̛͖͔̤͔̖̱̹͖̓̈́̓̅͒̒̚͜s̵̛͍̣̻̜̥̮͂̾͊̎͛̆͋́p̶̢̢̖͔͔̠͎̝̗̞̬̪̼̥͙͔͙̽͛̾̐̏́͘͝ę̸̛͈͍͚̱̑̔͌̈́̿̽́̅̎͌̉͛ĉ̸̢̡̤͍̭̰̘̭͎͙̯͂̓̓́͑́t̵̛̳̥̗̤̹̰̳̬̝̻̞̰̭̮̬͇͉͙̠̒͊̊̿̾͑͠r̷̢̺͎͈͇̘̬̲̩̼̜̭̜̙̬̮̻͗̈́̾̀̋̿̂̉̇̆́͐̈́̆͝͝ͅͅo̸̡̖͔͙͋͌͛̋́̎͑̇̉̏̑̾̿̂͂͆̃͗͝ ̷̢̤̯̺̘̪͍͔̺͓͉̼͍̙͓̆͗̓̑̊̃̔͆̔̀̀͛̌̓̚͠è̴̡̧͉͖͍̣̪͓̠̤̤̫̭̙̟̠́̀̇̒̉̇̋̀͗̓̋̈́̚ͅn̵̨͈̻̹͕͙̰̝̯̗̭̈́͋̿̌͌̌̀̑͐̋̓̊̓͜͠e̷̘͚͚͉̯͙̲̭͇͔͛̄̀͆̂͆̀̕͠g̸̙̮͇̘͍̱͂̅̇̒͋̂̓̂̒̿̽͒̌̒̍̃̕͝͠ͅr̸̢̙̦͚̣̯͂̀̇̎͊͑̅̆͌͆͠͝ë̸̙̯́̓̀͌̉̾͘̕͝c̵͙̝͔̫̦͈̓͑͒̀̅̽̇̈́̂̂̇i̷̧͈͓̦͈̝͗͛͛̆̾͌̈́͘̕̕͝ḑ̷̝̇o̸̢̧̟͓̳̗̹͉͇̠͌̈̌̏̾̋̒̆͜ ̸̢͕͇̼̥̼̝̗̹̺̇͒̒̈́͆̒̈́͗͊̀̃́́̊̔͘͠͝͝p̴̡̢̦̭̖̥͉̥͔̋̈́̈́́̈́͊̈́̈́̈́͘͜ȩ̵̨͇̤̪͉̟͚̪̼͔̘̻̦̗̗̞̣̽͋̄̅̈̎̅̔̓͘͝͝ͅl̷̨̢̲̩̰̥̯͚̳̄̈́̎͋͆̓̍͑́̇̎̾͌̍̚å̷̢̡̨̨͚̳̜̤̹͕̞̤͙͍͚̫̺̜͊̏ͅ ̸̨̡̠͖͔̻̰̤͈͇͚͚̼̘̘̩̿͜l̷̨̧͎̣̜̘̘̖̗̳͖̼̹̿͑͒͑͊̍́͘̕͜͝ǫ̴͈̹̞̯̹̦̠̯͓̽̇̋͐͌̋̃͛̅͐͒̏̾̚̕͝͝͝͝u̶̢̡̦̼͕͚̬͕̿̆̈́̃̈͛͋̿̒̃̈́͘͝͝ċ̷͙͇͖̹̫͕̙̻̲̪̻̼̯͎͇̖̜͓̿̊̈̓̿́̄̎̑̿û̸̼̦̖̳͈̥̝̹͑́́͗̐̕͜͜r̷̡̧̩̟̝͎̦̔a̵̻̩͙̻̟̓̅̆̄͌̋́̏͊̊́͛̄̈́́͐̊ ̵̡̨̭̫͇̯̜͍̻̀̎͐̽͆̆̃͒͝͝ȩ̸̛͉̤̩̺͙̣͈͚̒͊̈́̈́͒̿̆̀̃̕͝͝ ̶͙̣̩̾̈́̓̉̚d̸̪̯͎̙̼̓͐͐͠e̴̢̩̪̜̻̙̣̾̒̿̄̓̉̈́͝s̶̺̳̱̞̑̈́̈́̈́͗̽͐̈̐̐̆͆͝͝ë̸̞̠̓͋̿̌̑̓̊̆̌̂̕s̶̛̞͌̏̓͂̽͌̀̿͘ṕ̶͈͇͑͐è̷̳̬̱̩̺͒͑͛̈̑͂͘r̸͚̗̙̰̮̞͍͈̟̰̈́͑̎̎̾̊͌͗̄̈́̀̀̌͘͘͜͜ò̷͚̱̼̻̦̱͆̽́̉̇͊͘͜,̶͚̖͕͕͛͌̂̈̊̑̒̚͜͜ ̵̡͚̠̇́͐̌̀̽̌̇̽ď̵̗̦͚́̓́̓̏̾́̑̆̿͂͝͝â̴̢̨̡̻̗͉͎͔͔̹̰͙̳͚͚̫͎̲̅̈́͠͠ņ̷̨̝̦̳̦͕̥̠̖͔̳͔̠̏́͑̓̄̃͊̃̾̑̆͒̆̓̚͘͝ͅç̶̥͚͉̣̃̂͗̔̓̐͛͋̋̄̈́̈́̈̉̒̊̔̀̚ȃ̶̧̯͕̙͈̫͉̻͙̰̂͑͌̐̇̾̋̌̍̋̃̀̚͠͠n̴̡̢͕̳̖̥̬̭͙̰͎͕̮͈̯͉̮̣͋̎̾̑́̏̎́́̈́͋̚͜͝d̷̢̨̙͇͕̻͔͎̖̗̽ͅo̵̡̟̖̩̩͓͙̱̞͗̍̓̓̿͜ ̸̤̯̬͈͔̬̥̊̋͒̅́̾̄̋͘̚̕͝n̷͚̟͇̟̎̓̓a̴̢̻͔̥̯̻͖̺͇͎̲̼̒̌̐̈́̔̈́̑̑̒̐̃̕̕ ̸̨̹̘͔͉͔̟̩̜͈̮̯̩͚̖̤̫̔͛͠c̸̮̉̐̑̓́͋̑͋̐̃͐̇̽̀͐̽͘̕a̷̝͕̱̦͍̲̱͙͓͌ͅr̷̹͈̭̰͓̱̮͎̮̆̆̄̂ͅn̸̦̥͔͋̏̍́͗͋̒͝ĭ̸̡̦̠̼͍̰͔͕̩͋̋̀͛̈́̓f̶̝͚̪͇̻͓̥̗͍͇́͆̀̋̑̄̉͒̑͘į̷̫̯̗̟̌͂̈̾̀̈́͠č̴̡̢͖̣͙̎į̸̗̼̪̮̺̼̜̯̗̹́̌̆̄̕͜͠n̴̳̺̿̿͐̅̂̈́́͊̅͘͠ạ̵̖̭̞̠̟̟͓̞̝͔̺̱̥̪̓̄̓̃͛̔̃͜ͅ ̴̼̙̮̗͙͌͂̋͛̃̋̆̈́̚c̴̡̨͎͈̳͓̑̌̃ͅo̶̝͖͓̯̼̰̤̱̲͚̗͈̟̺͈̪͋͊̈́͊͛̏̿̾͗͘ḿ̸̡̧̫̳̫̣͎̫̤͇̞͔̐̒̃ ̴̡̡̡̮̲͈̻̺̗͕̬̳̻̰̜̖̅̓̃ṵ̸̢͚̺̞̼̰̊̀͗̈͌̂̓̓̓͂͋̕̕m̷̧̺̦̜̱̠̼̼̺̙̝̞̄̓̽̓̎̆͜͠ ̵̢̛̛͈͓̮͚̆̈́̌͂̆̓̑̎̑͠͠s̴̻̤͎̱̲̯̦̗̤͙͓̹̫̞̝̖̟̖̈͑̃̔̓͐̓͘ͅọ̶̭̺͖̩̬̗͕̗̖͐̔̽̓͠r̸͈̗̻̜͉̜̱̰̤̺͔̓͐͂̑͌͆̀̕r̸͙͍͓͔̜̣̯̪̆í̵̥̮̯̳̯̲̝̯̙̉̄̇̍̊̾̒̆̈́̏̈̂̆͜͝s̵̡̭͓̙̬̤͕͇̝͓̺͓͖͖̈͂̽̿̅̋͘̚o̶̧̢͙͙̦̩̲͈̝̩̥͆̓̎̍̀̕͘ ̵̡̨̡̢̳̹̝̤̘̹̰̎̀̋̋͝ͅͅḯ̷̡̢̡̲͓͍͚̲͔̼̝͚̯̑̍̐̐̎̃͑̌̑̿̈́̎͌͜ͅn̴̟͇̱̅͂̊͑̋s̵̢̡̲̖͚͉͚̻̟̙̘̣̻̿͂͌͐͆͂͆̈́̊́́̂̚͝͝͝a̷͍̦̘̋͋̑̒̇̄͐̋͑̍̕͝ͅņ̴͇͔͖̹̺̋̆̋̍̉́͊̊͗͘̚͠o̸̡̠͍̜̫̝͉̬͙͖̻̗̳̜͒́̐͛̈͆̽̈́͑̎͂̌͋͋͜͝͠͝͠͝.̸̢̨̛̰̥͖͖̮̻͚̦̺̬̘̀͒̄͗͗̓͛́̋͘͠͝ ̸̢̧̠̣̳̠̮͇̖͖̥͓̲̱͙̇̋̆́́͌M̵̘͊͋̍̌̎̑͋̊̉͐̎͂͘͠͠͠į̴̛̹̝̯̗̯͕̌̃͛̄̚͜͠ͅn̶͛͋͆͐͌́̾͗̏̄̔͐͐̕̕̕͝ͅh̸̹̬͎̭̻̲̀͒͗ȃ̶̡̡̛̲͚͍̙̱͔̾̓̒͊̎̊̓̔̃̋ ̸̡̭͚͔̪͇͖͖̲̬͕̀̎̇̃͂͒̊̊̑̏̿͒͠ͅě̷̛̳̘̯̰̜̱̪̦̳̳͚̗̞̯̰̼͈̋̿͜͝s̵̨̡̥̣̳͚̬̦͎͔̻̮͇̠͉̭̰̳͇͐̓́̽̂͝s̸͖̤̰̙͔̗̻͖̱̄̉̂͋̍̾̔͆̈́̕͜͠͝ê̸̢̨̳̹̺̮̜̫̪̣͎̂͛̇͜͜ͅņ̷̡̡͔̺̖͍̙͓̻̠͇͕̪͔̱̒̅͒̊̓͜c̷̙̹̠̙̞̰̠̪̹̞͇̩͖̋̂̒̌̈͐̋̊͌͊̍̋́̓̕̕̚͜͠ĭ̷͎̲̺̯̻̙̘̤͈̝͇͚͖̹̫̽͑̂̈̐̑̌́̚͝a̶̧̭̺̟̟̞̤͙͕̫̜̙̲̐̽͌̄̎̕̚͝ ̵̨̛̺̘̬̮͋̍̊̇͂̀̓̅́̿̿̿̿̓̓͘͘͝ͅę̵̝̤̤̖̝̦͕̜̺͙̻̪̱͚̜́͌̍̾̈͜ͅ ̵͓̪͚͔̗͍̯̌̓̿́̏͑̎̏̐̈́̏͊͝ͅẗ̸̨̢̹̻̜̖͙̖̥̲́̅͆̋̃̏͆̑̎̎̑̇͛̓̑̑̆ͅͅe̷̗̙͕̙͂͊̀̎̊́͒̈́̓̓̌́̊̎̔̕̚͠c̴͓̦͙̹͖̗̜̠̣̥̦͙̲͈̦͗́̔̆̉̍̒̏͗̍̐̈́̄̓̈̎͜͝͠i̷̢̛̞̖̦̲͓̩͇̅̓͒̇̕͜͜͝d̵̨̛̩͖̯̠̎̉̆̊̐̏̃̒͗̓͗̏̈́̆̕͠ā̵̠̣̞͇̣̝̐̕͠ ̵̭̥͍̦̜̭͎̳͛̇̾̀̄̏̃̈́̚͘ḑ̵̧̛̺̼̺̩̲̝͈͉̠͉̬͈́̓͗̎͑̂̓̓͆͘͠ë̶̛̼̺̣̰̭̱͆̊͋̄̔̾͘ ̷̛͍̞͖͉͓̫͎͕͓̞͎̊̈̍͐́͆̂͑͠p̴̯̩͍̙̬̦̤̻̱͙̯̼͕̫̙̰͐͌̅́̈́̒͌̀͗̇̾͝͝͠é̸̡̛̥̗̥͇͖̺͊̍̐̾͐̐͒́͑͐̋͛͋͋͘͝͝s̸̛͙̤̟̍͒̿͐͂̃̊̃́́̒̓̋͘͝͝ǎ̴̛̛͎̦̝̩̳̹͚̤̞͓͖̠͔͕͎̦͒̎̄̓̀̔͌̕͠d̵̝̭̤͔̮̰̍̾̋͗́̓̇́̇̆̿̾̋̾̄͗̀̚ē̴͈̟̖̯͉̥̦̯̙̥͂̓͊͜l̶̰̣͌̏̃͗ͅo̴̡̨͙͖͕̠̪̻̦̗̗̹̯̼͕̝͔̪̽͊̍̈́̀̃̓̄̓̒̈́͐͗̒́͊͘͘͝s̵̥̞̩̮̤̺̯̞̊̋́̅͂́̒̾̐̄̆̔̏̍͠ ̸̲͑̋͊̐̈́̿̄̓̈́̚͠͝͝è̵̼̬̳͉̫͇͔̱͕̊͌͒̔̃̅͑̈̋͒̿̏̕̕ ̶̛͍̳̙̹̹͙̆̍̽̀̈́̓̽͋̓̀̑̍̍͑̎͘͝͠t̵̖̭̻͍́́̐̽̀̍͌͊̓͑͆̚̕͝r̴͍̪̟͙̮̹͕͋͊̈́͑̒̈́́̉̉̍̒͘̚ȅ̵̡̛̹̗̳̮̭͕͍̾̃̂͊̄͒̊͂̄͂̀̓̈͠ͅv̴̥̱̗̫̣̣̝̳̓́͒̏̽̇̈̓̈́̌͗̐͘͜͝a̵̡͖͕̳͎̝͎̱̹̻̙̓̇͒̃̅̊̎͐̑̂̅̊͆͐̅͝͝s̷̜͙̮͓̥̯̹̜̹̼͉̊̉̅̏̂͂͂͆͛́̒͂͝ ̶̛͕̱̩̲͎̗͎̫͓͔̥̺̞̿̓̍̐̒̅̾̃̔͌̍͒̆̏̕͘͝͝ͅͅẻ̸͖̇̀̈́̀̌́͜ ̴̣̝̘͖̯̻̮̠͉͎̪̗̩͍̻̩̠͖͒͆̀̓̃͗̈̋͘̕̚̚͜͝ṃ̷̡̅̾̋͠î̶͖̟̜̗͈̽̈́͛̏̎͒̕n̷̡̛̯̪̝͓̩̦̼̼͉̫̫̣̫͉̱͙͖̆h̶̩̲̮͓̣͙̻̿͆͊̓̏̌̒̌̈́͝ͅà̴̡̙̲̹̪̦̱̬̰̹̰͙̙̀̓͛̓̽̌̄͘͝ͅͅ ̷̧̬̠̗͈̝̣̝̫̳̹̓̓̒͂ͅú̶̩̦̟̱̯̳͙͎̪̱̱̣̘͉́͐̐̍͋́̄̒̕̕͝͠ͅņ̷̧̢̛̛̜̻̼̝̲͇͉̝͕͔̳͖̲̅̿̀̎͒̈́́͌͛́̕ḭ̸̠̭̬̘̥̺̖̼̫͙̦̤͎̼͚̽͗̔̉̐͒̓̍̈́́̈͛̾̀̏̑c̷̭̣͈͎̻̭͇͕̅̿̈̅͒̃͛̄̆͐̃̓̐͌á̷̢̨͎̭̖̯͍͓̻͚͇̫̙̼̭͂̉͊̎͋̕̚ ̴͈̗̐̃̍̈̍̓́̆̉͘͝͝c̸̛̛̭̮̒̑̀̓̿̊̅̆̇̏̒̋̔̂̆̑͛o̵̤̟͑̓͂̀̊̏͐̿̀̒̌̆͘m̴̛̛͎͔̠̘͒̑͆̐͗͋̑̇͘͝͝p̷̨̡̨̺͖̮͕̮̼͇̽̎̊́̐̆͛͝ͅa̵̧̡̢̙̳̮̬̭̪̰̗͍̩̙̹͙͑́̑̉n̷̨̡͖̗̻̩͇͍̘̗̹̻̟͙̞̥͒̈́̆͜͜͝h̷̖̲̞͔̦̐̓͋̊̈́̒̏̄̃̀̾̽͌̅̚̕͝͝͠e̷̛̗͚͓̟̻͎̳͎͖͛̎̈͋́̍̔́̑̓̀̌͑͐̏̿͝͝î̸̻̩͉͔̳͙͓̰̱̳̏ŕ̸̨̛̛̺̘̠͍̖̺̬͓̤̭̱̫̫̍͑̾͆̇̉͗̿̓͂̄̐̂̉͝͠a̵̛̛̮̞̲̫̫͍̯͕̱͈͎̳̙̜̤͆̿̄̇̌̏̆͌̾̐̌͋ ̸̢̢̢̢̫̩̰͈͖̥̲̳̟̳͊̈́͆̊̀̿́̃͂̉͌̉̈́̍́̈́̍ͅͅȩ̷̡̹͍̥̟͕̦̲̹̣̯̥̞́̍́̊ͅ ̸̧̛͇̞̺̩̗̮͚̝̲̘̝͎̬̫̟͖̓̎ă̸̡̛̞̙͉̝̒͛̓̊̀̌̃͗̐ ̴̨̠̪͕̳͈̳̱̗̘̞͇͓͚̮̫̪̭͒̀̈́ȩ̴̧̢̛̰̰͍͓͎̺̺͇̺̯͙͓̈́̃̾̌͗̔͆̕͘s̴̜̫̠̰͔̆̃̓̀͌̿̈́̊̉̒̏̎̀̎̍͐̑ç̴̡̣̣̲̭̺͍̪̱̜̜̦̟̰̠̽͒́̾̾̓̆̓̾͘̕͝u̶̪̣̱͔̝̥͇̜̾͆̅̊r̶̢̢̻̞͙̪̺̣̩̜̩̟͉͆̍͑̈̾̋͛̄͆̽͠ĭ̶̧͎̻͎̳̳̥̤̌́̿̃̍̏̉̎̅͂͊͑̉̆͜͜d̸̖͚͚̯̝̦̯͍̦͙̼̅̊̊͂̑̓͐́͐̊͂͒͠ã̵̢͕̳̗̜̖̰̖̘̪̈́͆͒̎̓̂̄̑̀̍̀̇͝o̸̤̰͖͑
╓⚋⚋⚋⚋┚${global.db.data.users[m.sender].parceiro ? '\n║ 𝑪𝒂𝒔á̸͓̲͓̺̟͊̈́̈́̅̓̓͐̌̐d̶̰̝͆͋̉̒o̶͎̫͈͖̘̼͌̅̀͐̎͊̕͠͝ 𝒄𝒐𝒎: @'+global.db.data.users[m.sender].parceiro.split('@')[0] : ''}
┕⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
  return conn.sendMessage(m.chat, {text: profile, mentions: [who,global.db.data.users[who]?.parceiro]}, {quoted: fkontak})
}
if(global.db.data.chats[m.chat].users[who].money< 0){
  global.db.data.chats[m.chat].users[who].money=0
}
let user = global.db.data.chats[m.chat].users[who]
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => '') || './media/menus/img5.jpg'


/// information information
const username = global.db.data.chats[m.chat].users[who].name

////

  const perfilX = global.db.data.chats[m.chat].language === 'en' ? 
`[+] USER_LOG
${username ?'> ' + username + '\n' : ''}
> ʀᴀɴᴋ: ${user.level}
> 

𝑥𝑝: ${user.exp}
𝙽𝚒𝚟𝚎𝚕 𝙰𝚝𝚞𝚊𝚕: ${user.level} ♱
𝙿𝚘𝚜𝚒𝚌𝚊𝚘: ${user.role}

✞︎ 𝐑𝐂𝐄'𝐬: ${user.rce}
🜅 ʙʏᴛᴇᴄᴏɪɴꜱ: ${user.money.toFixed(2)}
⧗ ᴇᴛʜᴇʀᴇᴜᴍ: ${user.limit}
` 
  :
  ``
  


  




  let msg =  `
┌──[ 𝙼𝚛.𝚁𝚘𝚋𝚘𝚝 ]─[~]─[${date}] 
└─ $ harvester -e @${who.split('@')[0] } 
> ‎ 
${perfilX}
  
  ┅──┅──┅──┅❖ ༒︎ ❖─┅──┅┅──┅──
${global.db.data.users[who].nome ? '⬣ 𝑵𝒐𝒎𝒆: ' + global.db.data.users[who].nome + '\n' : ''}${global.db.data.chats[m.chat].users[who].morada ? '⬣ 𝑬𝒏𝒅𝒆𝒓𝒆𝒄𝒐: ' + global.db.data.chats[m.chat].users[who].morada + '\n' : ''} ${global.db.data.users[who].age ? '⬣ 𝑰𝒅𝒂𝒅𝒆: ' + global.db.data.users[who].age + '\n' : ''}${global.db.data.users[who].profissao ? '⬣ 𝑷𝒓𝒐𝒇𝒊𝒔𝒔𝒂𝒐: ' + global.db.data.users[who].profissao + '\n' : ''}${global.db.data.users[who].time ? '⬣ 𝑻𝒊𝒎𝒆 𝒑𝒓𝒆𝒇𝒆𝒓𝒊𝒅𝒐: ' + global.db.data.users[who].time + '\n' : ''}${global.db.data.users[who].esportes ? '⬣ 𝑬𝒔𝒑𝒐𝒓𝒕𝒆𝒔 𝒑𝒓𝒂𝒕𝒊𝒄𝒂𝒅𝒐𝒔: ' + global.db.data.users[who].esportes + '\n' : ''}${global.db.data.users[who].religiao ? '⬣ 𝑹𝒆𝒍𝒊𝒈𝒊𝒂𝒐: ' + global.db.data.users[who].religiao + '\n' : ''}${global.db.data.users[who].parceiro ?'⬣ 𝑪𝒂𝒔𝒂𝒅𝒐/𝒂 𝒄𝒐𝒎: @' + global.db.data.users[who].parceiro.split('@')[0] + '\n': ''}${global.db.data.users[who].hobbies ?'⬣ 𝑰𝒏𝒕𝒆𝒓𝒆𝒔𝒔𝒆𝒔: ' + global.db.data.users[who].hobbies + '\n': ''}${global.db.data.users[who].generos ?'⬣ 𝑮𝒆𝒏𝒆𝒓𝒐𝒔 𝒎𝒖𝒔𝒊𝒄𝒂𝒊𝒔: ' + global.db.data.users[who].generos + '\n': ''}${global.db.data.users[who].musica ?'⬣ 𝑴𝒖𝒔𝒊𝒄𝒂 𝒑𝒓𝒆𝒇𝒆𝒓𝒊𝒅𝒂: ' + global.db.data.users[who].musica + '\n': ''}${global.db.data.users[who].animais ?'⬣ 𝑨𝒏𝒊𝒎𝒂𝒊𝒔 𝒅𝒆 𝒆𝒔𝒕𝒊𝒎𝒂𝒄𝒂𝒐: ' + global.db.data.users[who].animais + '\n': ''}${ global.db.data.users[who].instagram ? '⬣ 𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎: instagram.com/' + global.db.data.users[who].instagram +'\n' : ''}${global.db.data.users[who].website ?'⬣ 𝑾𝒆𝒃𝒔𝒊𝒕𝒆: ' + global.db.data.users[who].website +'\n' : ''} ${global.db.data.users[who].links ? '⬣ 𝒍𝒊𝒏𝒌𝒔:  ' + global.db.data.users[who].links + '\n' : ''}
${global.db.data.users[who].biografia  ? '━⬣ 𝑺𝒐𝒃𝒓𝒆 𝒎𝒊𝒎:\n' + global.db.data.users[who].biografia  + '\n' : ''}
  ─┅──┅──┅
  ${global.db.data.chats[m.chat].users[who].legendary ? "𝑷𝒂𝒊 𝒅𝒐 𝑬𝒅𝒈𝒂𝒓 𓄿\n"  : global.db.data.chats[m.chat].users[who].cocriadora ? "𝑴𝒂𝒆 𝒅𝒐 𝑬𝒅𝒈𝒂𝒓 𓄿" : ''} ${admcheck ? '𝑨𝑫𝑴𝑰𝑵 ♱'  : ''}
━━⬣ 𓅊 @${who.split('@')[0] } ⬣━━

𝑥𝑝: ${user.exp}
𝙽𝚒𝚟𝚎𝚕 𝙰𝚝𝚞𝚊𝚕: ${user.level} ♱
𝙿𝚘𝚜𝚒𝚌𝚊𝚘: ${user.role}

✞︎ 𝐑𝐂𝐄'𝐬: ${user.rce}
🜅 ʙʏᴛᴇᴄᴏɪɴꜱ: ${user.money.toFixed(2)}
⧗ ᴇᴛʜᴇʀᴇᴜᴍ: ${user.limit}

┅──┅───┅──┅❖ ⸸ ❖─┅──┅┅──┅──`
  
  
  await conn.sendMessage(m.chat, {text: msg, mentions: [who,global.db.data.users[who]?.parceiro]}, {quoted: fkontak})
  
  
  
};
handler.help = ['status', 'perfil'];
handler.tags = ['grupo'];
handler.command = /^(perfil)$/i;
export default handler;
