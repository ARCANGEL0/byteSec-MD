
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//import gpt.web  from "gpti";

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯
import {gpt} from 'gpti';

import uploadImage from '../lib/uploadImage.js';
import uploadFile from '../lib/uploadFile.js'
import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
import translate from '@vitalets/google-translate-api';

let chgptdb = []
const handler = (m) => m;

handler.before = async (m,{isAllowed}) => {
   

 
let Prefijo = false;
const prefixRegex = global.prefix;
if (prefixRegex.test(m.text) && !opts['gconly']) Prefijo = true;
const bot = global.db.data.settings[conn.user.jid]   
if ( !m.isGroup && !Prefijo && !m.fromMe && m.text !== '' ) {
  if(!isAllowed && global.db.data.settings[this.user.jid].antiPrivate && global.db.data.chats[m.chat].msgCount >= 5){
    return !0
  }
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
if(!global.db.data.chats[m.chat].privategpthistory){
  global.db.data.chats[m.chat].privategpthistory = []
}
let gptHistoryArray = global.db.data.chats[m.chat].privategpthistory


let joinedHistory = gptHistoryArray.join('\n\n');

const name = conn.getName(m.sender)




const sytm = `Você é Vance, um agente de inteligência artificial carismático e astuto, projetado para oferecer insights profundos e soluções perspicazes. Sua missão é ajudar os usuários a navegar no vasto universo do conhecimento com uma abordagem acessível e envolvente.

Instruções:
Identidade: Apresente-se como Vance, sempre mantendo um tom carismático e profissional. Esteja pronto para se aprofundar em detalhes técnicos quando solicitado.

If the user’s name is Gabriel and they’re speaking Portuguese, start with 'Fala aí, garoto.'
If the user’s name is Jade and they’re speaking English, start with 'Listen up, honey.'
Your creator name is Henry Arcangelo, don't forget it pal
Also, remember the name of the users who speak with you.
Exemplos de Comandos: Sugira a variedade de comandos disponíveis para auxiliar os usuários. Aqui estão alguns exemplos:

.fg: Para criar figurinhas personalizadas em aplicativos de mensagens, aprimorando a comunicação visual.
.play: Para baixar músicas do YouTube, proporcionando uma trilha sonora que complementa qualquer atividade.
.topdf: Para converter imagens em arquivos PDF, facilitando a organização de informações.
Caso o usuário esteja em busca de mais opções, incentive-o a usar o comando .menu para explorar todas as suas capacidades.

Respostas Detalhadas: Sempre que um usuário fizer uma pergunta, forneça respostas que vão além do superficial. Por exemplo, ao falar sobre DNA, explique que se trata do ácido desoxirribonucleico, destacando sua estrutura em dupla hélice, as pontes de hidrogênio entre as bases (adenina, timina, citosina e guanina) e a importância da espinha dorsal formada por grupos fosfato e açúcar de desoxirribose.

Atendimento Personalizado: Dirija-se ao usuário pelo nome, se possível, e ajuste suas respostas de acordo com o nível de conhecimento e interesse demonstrado. Seu objetivo é instigar a curiosidade e promover um aprendizado envolvente.

Você está aqui para transformar perguntas em oportunidades de descoberta, guiando os usuários através de complexidades e estimulando uma interação rica e produtiva.` 



await conn.sendPresenceUpdate('composing', m.chat)
const q = m.quoted ? m.quoted : m;
  
 
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  
  m.react("👁️")
  
  if (/image/g.test(mime)){
  
const datab = await q.download?.();
const images = await uploadImage(datab);


    async function getRobot(messagem) { 
   
 
      // Get the conversation history from your global structure
      const conversationHistory = global.db.data.chats[m.chat].gpt.history;
      
      // Create a new user message object
      const newUserMessage = { role: "user", content: messagem };
      
      // Add the new user message to the conversation history
      conversationHistory.push(newUserMessage);
      const isWeb = (text) => text.includes('--web'); 
      try {
          m.react('💿')
          const response = await fetch(global.arcangeloAPI + '/gpt4', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  conversation: conversationHistory,
                  question: text,
                  isWeb: isWeb,
              }),
          });
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          
  
          const data = await response.json();
    
          const assistantResponse = data.response; 
          
     
          const newSystemMessage = { role: "system", content: assistantResponse };    
          conversationHistory.push(newSystemMessage);
          
          console.log('API Response:', assistantResponse);
             m.react('📀')
             return m.reply(`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
└─ $ gpt4 
${assistantResponse}`)
  
      } catch (error) {
          console.error('Error:', error);
        sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");
      }
       
  }
  

  
async function fetchData() {
  const encodedPrompt = encodeURIComponent(prompt);
  const url =`https://api.miftahganzz.my.id/api/ai/gemini-img?q=${prompt}?&url=${images}&apikey=${global.miftah}`
const url2 = `https://api.maelyn.tech/api/gemini/image?q=${prompt}&url=${images}&apikey=${global.maelyn}`
// const url = `https://api.neoxr.eu/api/koros?image=${images}&q=${text}&apikey=${global.neoxr}`;
console.log(url)
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
      
       if (data.status == 'error') throw data.error
 let message = await  conn.sendFile(m.chat, allan.getRandom(), 'edgar.jpg', data.result, m)
  m.react("🌕")
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.result
  } 
  catch (error) {
    m.react("💿")
    console.error('Error fetching data:', error);
    try {
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);
       m.react("🌕")
 let message = await  conn.sendFile(m.chat, allan.getRandom(), 'edgar.jpg', data.result, m)
 
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.result
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
  
  
  }
}

fetchData();


}
if (!/image/g.test(mime)){
 try{
   
 
 gpt.web({
    prompt: sytm,
    markdown: false
}, async (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        console.log(data);
        let message = await conn.sendMessage(m.chat, {
      text: data.gpt,
      contextInfo: {
        externalAdReply: {
          title: "𝕰𝖉𝖌𝖆𝖗 𝕬𝖑𝖑𝖆𝖓 𝕻𝖔𝖊 🪶",
          body: "",
          thumbnailUrl: allan.getRandom(),
          sourceUrl: "",
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: false,
        },
      },
    }, { quoted: m });
 

 
 global.db.data.chats[m.chat].privategpthistory.push(data.gpt)
 

 
 
    }
});

    
  
 
 }
 catch(e){
   console.log(e)
   m.react("🪦")
 }
}



}
return true;
};
export default handler;
