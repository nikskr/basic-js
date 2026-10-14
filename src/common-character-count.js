const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  return s1.split("").filter((item) => {
    const s2Idx = s2.indexOf(item);
    if (s2Idx !== -1) {
      console.log(s1, s2);
      s2 = s2.slice(0, s2Idx) + s2.slice(s2Idx + 1);
      return true;
    } else {
      return false;
    }
  }).length;
}

module.exports = {
  getCommonCharacterCount,
};
