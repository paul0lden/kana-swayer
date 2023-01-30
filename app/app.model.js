import * as hiragana from './data/hiragana.js';
import { getKeys } from './utils.js';

/**
 * @typedef {Object} KanaState
 * @property {string} input
 * @property {keyof typeof hiragana.main | ''} currentKana
 * @property {hiragana.main[keyof typeof hiragana.main] | ''} displayedKana
 * @property {null | boolean} valid
 */

export class KanaModel {
  /** @type {KanaState} */
  state = {
    input: ' ',
    currentKana: '',
    displayedKana: ' ',
    valid: null,
  };

  timeout = null;

  kanaMap;

  constructor(delay = 1500, kanas = hiragana.main) {
    this.delay = delay;
    this.kanaMap = kanas;
    this.updateKana();
  }

  validate() {
    this.state.valid = this.state
      .input
      .toLowerCase()
      .replace(' ', '') === this.state.currentKana;
  }

  getNextKana() {
    const keys = getKeys(this.kanaMap);
    return keys[Math.floor(Math.random() * keys.length)];
  }

  updateKana() {
    this.state.currentKana = this.getNextKana();
    this.state.displayedKana = this.kanaMap[this.state.currentKana];
    this.state.input = ' ';
    this.state.valid = null;
  }

  submit() {
    if (this.timeOut) return;
    this.validate();
    this.timeOut = setTimeout(() => {
      this.updateKana();
      this.timeOut = undefined;
    }, this.delay);
  }
}
