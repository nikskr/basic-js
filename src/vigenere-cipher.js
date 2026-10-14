const { NotImplementedError } = require("../lib");

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
class VigenereCipheringMachine {
  direct = undefined;
  constructor(direct) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    const upperMsg = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = "";
    let counter = 0;
    upperMsg.split("").forEach((item, i) => {
      if (/[A-Z]/.test(item)) {
        const msgCharId = item.charCodeAt(0) - 65;
        const keyCharId = upperKey.charCodeAt(counter % upperKey.length) - 65;
        const finalCharCode = ((msgCharId + keyCharId) % 26) + 65;
        result += String.fromCharCode(finalCharCode);
        counter++;
      } else {
        result += item;
      }
    });
    return this.direct || this.direct === undefined
      ? result
      : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");
    const upperMsg = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = "";
    let counter = 0;
    upperMsg.split("").forEach((item, i) => {
      if (/[A-Z]/.test(item)) {
        const msgCharId = item.charCodeAt(0) - 65;
        const keyCharId = upperKey.charCodeAt(counter % upperKey.length) - 65;
        const finalCharCode = ((msgCharId - keyCharId + 26) % 26) + 65;
        result += String.fromCharCode(finalCharCode);
        counter++;
      } else {
        result += item;
      }
    });
    return this.direct || this.direct === undefined
      ? result
      : result.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
