import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(val = true) {
    this.val = val;
  }
  encrypt(message = null, key = null) {
    if (message === null || key === null) throw new Error(`Incorrect arguments!`);
    message = message.toUpperCase();
    key = key.toUpperCase();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    let keyRepeater = (k, m) => {
      while (k.length < m) {
        k += k
      }
      return k.substring(0, m);
    }

    let repeater = keyRepeater(key, message.length);
    let arr = [];
    for (let i = 0; i < repeater.length; i++) {
      arr.push(repeater[i])
    }
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) < 0) {
        arr.splice(i, 0, " ")
      }
    }
    repeater = repeater.toUpperCase()
    let encr = "";
    for (let i = 0; i < message.length; i++) {
      message.trim();
      let alphabetIndex = alphabet.indexOf(message[i]);
      let keyIndex = alphabet.indexOf(arr[i]);
      if (alphabetIndex < 0) {
        encr += message[i].toString();
      } else {
        encr += alphabet[(26 + alphabetIndex + (this.val ? 1 : -1) * keyIndex) % 26]
      }
    }
    return encr;
  }
  decrypt(message = null, key = null) {
    if (message === null || key === null) throw new Error(`Incorrect arguments!`);
    message = message.toUpperCase();
    key = key.toUpperCase();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    let keyRepeater = (k, m) => {
      while (k.length < m) {
        k += k
      }
      return k.substring(0, m);
    }

    let repeater = keyRepeater(key, message.length);
    let arr = [];
    for (let i = 0; i < repeater.length; i++) {
      arr.push(repeater[i])
    }
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) < 0) {
        arr.splice(i, 0, " ")
      }
    }
    repeater = repeater.toUpperCase()
    let decr = "";
    for (let i = 0; i < message.length; i++) {
      let alphabetIndex = alphabet.indexOf(message[i]);
      let keyIndex = alphabet.indexOf(arr[i]);
      if (alphabetIndex < 0) {
        decr += message[i].toString();
      } else {
        decr += alphabet[(26 + alphabetIndex - (this.val ? 1 : -1) * keyIndex) % 26]
      }
    }
    return decr;
  }
}
