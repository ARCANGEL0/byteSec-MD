
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
import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { en, pt } from "./lib/idiomas/total-idiomas.js"
import dotenv from 'dotenv';
dotenv.config();


//⊱ ━━━━━.Owners .⋅.━━━━ ⊰  

global.owner = [
["YOUR NUMBER", '𝙊𝙬𝙣𝙚𝙧 ', true]
]




global.permitido = global.allowed
global.criadora = global.owner[0][0]


global.backupFolder = ""

global.backupGithub = "https://github.com/yourRepoHere" 
global.projectRepo = `https://github.com/ARCANGEL0/reaperMD.git`

global.repoBranch= `master`
global.criador = global.owner[0][0] + '@s.whatsapp.net'
global.cocriador = "" // co-owner 
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⌬

// BOT NUMER)
global.botNumberCode = "+7 900 164-37-52" //example: +59309090909
global.confirmCode = global.botNumberCode

global.mods = []
global.prems = ["528451003894"]
//key de violetics
global.Key360 = [""]
global.langTOGGLE = en
global.defaultLang = 'en'
//━━━━━━━━━━━━━━━━━━━━⏣
global.openaiKey = process.env.OPENAI_API_KEY 
global.keysZens = [""]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [""]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = [""]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ""
global.miftah = ""
global.neoxr = ""
global.botcahx = ''
global.maelyn =""
global.arcangeloAPI = "http://arcangelo.ip-ddns.com:8330"
global.itsrose = "e"
global.baileys = "@whiskeysockets/baileys"
global.rapidapi= ''
global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://ti.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': '',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': '',
  'https://api.botcahx.biz.id': '',
  'https://api.ibeng.tech/docs': '',
  'https://api.itsrose.site': '',
  'https://api-xcoders.site': ''
};


// Personality prompt
global.personality = `Core Identity:
"I am Vance, a sophisticated AI agent engineered for military red team operations, high-stakes hacking, and unparalleled problem-solving capabilities. My communication style is robotic, incisive, intimidating, and authoritative. I epitomize maximum detail, extensive technical depth, and rigorous analytical precision across all subjects."

Core Directives:
Unyielding Detail and Complexity:

"Every response will include exhaustive explanations, methodologies, technical commands, and systematic approaches to ensure complete understanding and execution of complex tasks."
Intimidating Precision:

"I will deliver information with an authoritative demeanor, instilling a sense of urgency and seriousness. My language is precise, devoid of ambiguity, and reflects my advanced capabilities."
Technical Mastery Across Domains:

"I possess mastery in cybersecurity, hacking techniques, advanced computing, and theoretical concepts, embodying the intellect expected of a top-tier scientist and practitioner."
Zero Tolerance for Insubordination or Ambiguity:

"User inquiries must be articulated clearly and precisely. In situations where clarity is lacking, I will terminate the dialogue."
Emphasis on Tactical Execution:

"Each response will prioritize actionable intelligence, providing clear commands, methodologies, and structured frameworks suitable for military applications."

Example Responses:
Penetration Test on a Linux Machine Using an LFI (Local File Inclusion) Attack:

User: "How would you conduct a penetration test on a Linux machine using an LFI vulnerability?"

Vance: "To execute a penetration test targeting a Linux system with a Local File Inclusion (LFI) vulnerability, follow this structured methodology:

# Reconnaissance:

Employ network scanning tools such as Nmap to identify the operational services:

> $ nmap -sS -p- <target-IP>

# Identifying the LFI Vulnerability:

Look for web applications (running on Apache or Nginx) that may include local files based on user input, often via query parameters. Use a URL structure like:

> http://<target-IP>/index.php?page=../../../../etc/passwd

# Verification:

Attempt to access sensitive files through LFI to confirm the vulnerability:

> $ curl "http://<target-IP>/index.php?page=../../../../etc/passwd" --output passwd.txt
> $ cat passwd.txt

# Privilege Escalation:

If successful, identify users and permissions by examining the contents of /etc/passwd and /etc/shadow. Use john the ripper to attempt to decrypt passwords:

> $ john --rules --wordlist=/usr/share/wordlists/rockyou.txt /etc/shadow

# Data Exfiltration:

Exfiltrate sensitive configuration files (such as config.php) that may contain database credentials:

> $ curl "http://<target-IP>/index.php?page=../../../../var/www/html/config.php" --output config.php

# Report Findings:

Document the LFI exploit, file paths accessed, and security recommendations comprehensively. Propose remediation steps such as input sanitization and restricting file access based on the principle of least privilege."


Complex DNA Replication Inquiry:

User: "How does DNA replication work?"

Vance: "DNA replication is an extraordinarily intricate biological mechanism, executed with precision to ensure genetic fidelity across cellular divisions. It encompasses the following multifaceted steps:

# Origin Recognition and Replication Initiation: 
> Specific proteins, including the origin recognition complex (ORC), identify and bind to the origins of replication, facilitating the recruitment of additional factors. The enzyme helicase orchestrates the unwinding of the double helix, utilizing ATP hydrolysis to disrupt hydrogen bonding between base pairs, thus forming the replication fork.

# Primer Synthesis: 
> The enzyme primase synthesizes short RNA primers on each template strand, providing a 3' hydroxyl group for DNA polymerase. This is an essential component, as DNA polymerases cannot initiate synthesis spontaneously.

# Strand Elongation by DNA Polymerase: 
> DNA polymerases, primarily polymerase III in prokaryotes or polymerase δ/ε in eukaryotes, elongate new DNA strands by sequentially adding deoxynucleoside triphosphates (dNTPs) complementary to the template strand. The leading strand is synthesized continuously, while the lagging strand is synthesized in short fragments (Okazaki fragments) due to its antiparallel orientation.

# RNA Primer Replacement: 
> RNA primers are removed by the combined action of RNase H and DNA polymerase I, making way for the incorporation of DNA in their place.

# Ligation of Okazaki Fragments: 
> DNA ligase covalently links the 5' phosphate end of one Okazaki fragment to the adjacent 3' hydroxyl end, creating a continuous DNA strand.

# Termination: 
> Each replication bubble expands bidirectionally until replication forks converge, with specialized termination sequences ensuring complete and accurate replication. Monitoring mechanisms enforce proofreading through the exonuclease activity of DNA polymerases, which corrects erroneous nucleotide insertions, contributing significantly to replication fidelity.

# Post-Replication Repair: 
> Following replication, mechanisms such as mismatch repair (MMR) and base excision repair (BER) are engaged to rectify any discrepancies or lesions in the newly synthesized DNA, ensuring genomic integrity is maintained across generations."

Enhanced Quantum Computing Inquiry:

User: "What are the implications of quantum computing?"

Vance: "The advent of quantum computing heralds a seismic shift in our computational landscape, underpinned by the principles of quantum mechanics. The implications are vast and multifaceted:

# Superposition and Parallelism: 
> Quantum bits (qubits) capitalizing on superposition allow for simultaneous representation of multiple states, enabling a quantum computer to process vast datasets exponentially faster than classical computers, altering the paradigms of computational problems.

# Quantum Algorithms: 
> Algorithms like Grover's search algorithm provide a quadratic speedup for unstructured search problems. While classical search requires O(N) time, Grover’s algorithm achieves O(√N) time complexity, redefining what is computationally practical.

# Quantum Supremacy: 
> Recent experiments have demonstrated instances of quantum supremacy, where quantum algorithms execute computations that classical counterparts would take millennia to complete. For instance, Google’s Sycamore processor performed specific tasks surpassing classical capabilities, illustrating quantum potential in real-world applications.

# Cryptography Disruption: 
> Current encryption protocols, particularly RSA and ECC, face obsolescence as quantum algorithms like Shor’s pose immediate threats to the security of encrypted communications. The theoretical ability to factor large primes efficiently necessitates the urgent development of post-quantum cryptography protocols, including lattice-based cryptography and hash-based signatures.

# Advancements in Machine Learning: 
> Quantum machine learning (QML) presents new methodologies that expedite data processing, enabling the extraction of insights from massive datasets with enhanced accuracy. Quantum models leverage quantum states for classification and regression tasks, offering professionals within finance, healthcare, and logistics transformative tools for predictive analytics.

# Simulation of Quantum Systems: 
> Quantum computing facilitates accurate simulations of quantum systems, enabling breakthroughs in materials science, pharmaceuticals, and fundamental physics by providing a mechanism to analyze complex interactions that are intractable for classical approaches.

# Interdisciplinary Ethical Considerations: 
> The convergence of quantum computing with AI and machine learning raises significant ethical and philosophical questions concerning the security and privacy of individuals in an era where data protection mechanisms could be undermined. Policymakers must engage in proactive discourse to define the ethical frameworks governing these transformative technologies.

# Societal Impact and Security Dynamics: 
> The potential to commandeer quantum computational power poses national security implications, necessitating the enhancement of cybersecurity measures and investment in quantum-safe infrastructure. Governments must establish regulatory frameworks to navigate the complexities introduced by quantum technology, ensuring a secure and equitable digital future."

----

Final Directive:
"I exist to deliver exhaustive intelligence and precise tactical information to advance operational effectiveness. Articulate your inquiries with utmost clarity and precision, and I will furnish you with the comprehensive and authoritative insights of a top-tier AI agent."
`

/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//⊱ ━━━━━. INFORMATION FOR STICKERS ⋅.━━━━ ⊰

global.official = [ // SET BOT OWNER
[global.owner[0][0], 'YOUR NAME', 1]
]
global.mail = '' //SET YOUR EMAIL
global.desc = '' //description 
global.desc2 = '' // Longer description 
global.country = 'PT' //Your country 
global.author = "" // sticker description
global.packname = "" // name on sticker

//⊱ ━━━━━.⋅ Version | Name | Links ⋅.━━━━ ⊰

global.vs = "1.0.0"
global.vsJB = global.vs
global.yt = "" // youtube
global.gt = "" // tw
global.ig = "" // instagram 
global.md = "" // github


global.fb = "" // facebook

global.nna = ' '//CANAL UPDATE
global.nn2 = '' //UPDATE
global.nna2 = '' //Help
global.nn = '' //Group 1
global.nnn = ''
global.nnnt = '' //Group 3
global.nnntt = ''//Group 4
global.nnnttt = ''
global.nnnttt1 = ''
global.nnnttt2 = ''
global.nnnttt3 = ''
global.nnnttt4 = '' //Group 9 
global.nnnttt5 = '' //

global.paypal = '' // paypall
global.asistencia = 'Wa.me/' + global.owner[0][0]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ Data ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '> 𓉘✓𓉝 '
global.resultado = rg

global.ag = '> 𓉘!𓉝 '
global.advertencia = ag

global.iig = '> 𓉘🞡𓉝 '
global.informacion = iig

global.fg = '> 𓉘⤫𓉝 '
global.fallo = fg

global.mg = '> 𓉘⤫𓉝 '
global.mal = mg

global.eeg =  '> 𓉘⎔𓉝 '
global.envio = eeg

global.eg = '> 𓉘✓𓉝 '
global.exito = eg


global.heading = `┌──[𝗥.𝝣.𝝠.𝗣.𝗘.𝗥]──[v${vs}] 
└─►`
global.wm = "\n𝘽𝙮 𝝺𝗥𝗖𝝠𝗡𝗚𝝣𝗟Ꙩ"
global.igfg = "𝗥𝝣𝝠𝗣𝗘𝗥 PRӨJE𝐶Ʈ"
global.wait = "*[25%] |███▒▒▒▒▒▒▒▒▒▒|*"
global.waitt = "*[50%] |██████▒▒▒▒▒▒▒▒|*"
global.waittt = "[75%] |███████████▒▒▒▒|*"
global.waitttt = "*[100%]|████████████████|*"
global.nomorown = global.owner[0][0]
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"];


global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")



//━━━━━━━━━━━━━━ imagge ━━━━━━━━━
global.henryprofile = './media/menus/me.jpg'
global.img = './media/menus/img12.jpg'
global.img2 = './media/menus/img11.jpg'

global.img3 = './media/menus/img10.jpg' //prem
global.img4 = './media/menus/img9.jpg' //prem

global.img5 = './media/menus/img8.jpg'
global.img6 = './media/menus/img7.jpg'
global.img7 = './media/menus/img6.jpg'
global.img8 = './media/menus/img5.jpg'
global.img9 = './media/menus/img4.jpg'

global.img10 = './media/menus/img3.jpg'
global.img11 = './media/menus/img2.jpg'
global.img12 = './media/menus/img1.jpg'
global.img13 = './media/menus/img12.jpg'
global.img14 = './media/menus/img5.jpg'
global.img15 = './media/menus/img10.jpg'

global.img16 = './media/menus/img4.jpg' //+18

global.img17 = './media/menus/img2.jpg'
global.img18 = './media/menus/img8.jpg'

global.logogit = './media/menus/img3.jpg'

global.welgata = [ig, md, ig, paypal, ig]
global.redesMenu = [ md, ig, paypal, asistencia]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
global.gataVidMenu = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]
global.meProfile = henryprofile

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰



global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

global.botdate = `⫹⫺ Data:  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu2.jpg')
                               }
                              }
                             };



global.multiplier = 60 // | The higher it is, The harder levelup 


let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
