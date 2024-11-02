
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import {resolve, dirname as _dirname} from 'path';
import _fs, {existsSync, readFileSync} from 'fs';
const {promises: fs} = _fs;

class Database {
  /**
     * Create new Database
     * @param {String} filepath Path to specified json database
     * @param  {...any} args JSON.stringify arguments
     */
  constructor(filepath, ...args) {
    this.file = resolve(filepath);
    this.logger = console;

    this._load();

    this._jsonargs = args;
    this._state = false;
    this._queue = [];
    this._interval = setInterval(async () => {
      if (!this._state && this._queue && this._queue[0]) {
        this._state = true;
        await this[this._queue.shift()]().catch(this.logger.error);
        this._state = false;
      }
    }, 1000);
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
    this.save();
  }

  /**
     * Queue Load
     */
  load() {
    this._queue.push('_load');
  }

  /**
     * Queue Save
     */
  save() {
    this._queue.push('_save');
  }

  _load() {
    try {
      return this._data = existsSync(this.file) ? JSON.parse(readFileSync(this.file)) : {};
    } catch (e) {
      this.logger.error(e);
      return this._data = {};
    }
  }

  async _save() {
    const dirname = _dirname(this.file);
    if (!existsSync(dirname)) await fs.mkdir(dirname, {recursive: true});
    await fs.writeFile(this.file, JSON.stringify(this._data, ...this._jsonargs));
    return this.file;
  }
}

export default Database;

