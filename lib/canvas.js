
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import {spawn} from 'child_process';
import {join} from 'path';

const __dirname = global.__dirname(import.meta.url);
/**
 * Levelup image
 * @param {String} teks
 * @param {Number} level
 * @return {Promise<Buffer>}
 */
export function levelup(teks, level) {
  return new Promise(async (resolve, reject) => {
    if (!(global.support.convert || global.support.magick || global.support.gm)) return reject('Not Support!');
    const font = join(__dirname, '../src/font');
    const fontLevel = join(font, './level_c.otf');
    const fontTexts = join(font, './texts.otf');
    const xtsx = join(__dirname, '../src/lvlup_template.jpg');
    let anotations = '+1385+260'; // gapake else if kadang error
    if (level > 2) anotations = '+1370+260';
    if (level > 10) anotations = '+1330+260';
    if (level > 50) anotations = '+1310+260';
    if (level > 100) anotations = '+1260+260';

    const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
      'convert',
      xtsx,
      '-font',
      fontTexts,
      '-fill',
      '#0F3E6A',
      '-size',
      '1024x784',
      '-pointsize',
      '68',
      '-interline-spacing',
      '-7.5',
      '-annotate',
      '+153+200',
      teks,
      // original together
      '-font',
      fontLevel,
      '-fill',
      '#0A2A48',
      '-size',
      '1024x784',
      '-pointsize',
      '140',
      '-interline-spacing',
      '-1.2',
      '-annotate',
      anotations,
      level,
      '-append',
      'jpg:-',
    ];
    const bufs = [];
    spawn(_spawnprocess, _spawnargs)
        .on('error', reject)
        .on('close', () => {
          return resolve(Buffer.concat(bufs));
        })
        .stdout.on('data', (chunk) => bufs.push(chunk));
  });
}
