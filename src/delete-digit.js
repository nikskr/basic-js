const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const numStr = String(n);
  numStr.split("").forEach((el, i) => {
    const num = Number(numStr.slice(0, i) + numStr.slice(i + 1));
    if (num > max) {
      max = num;
    }
  });
  return max;
}

module.exports = {
  deleteDigit,
};
