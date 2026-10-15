const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let counter = 0;
  result = "";
  str.split("").forEach((item, i) => {
    if (i === 0) {
      counter = 1;
    } else if (item === str.charAt(i - 1)) {
      counter++;
      if (i === str.length - 1) {
        result += `${counter > 1 ? counter : ""}${str.charAt(i)}`;
      }
      console.log(counter);
    } else {
      result += `${counter > 1 ? counter : ""}${str.charAt(i - 1)}`;
      counter = 1;
      if (i === str.length - 1) {
        result += `${counter > 1 ? counter : ""}${str.charAt(i)}`;
      }
    }
  });
  return result;
}

module.exports = {
  encodeLine,
};
