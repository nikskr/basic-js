const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    additionSeparator = "|",
    additionRepeatTimes = 1,
    addition,
  } = {},
) {
  const mainStr = String(str);
  const addStr = addition !== undefined ? String(addition) : "";
  const mainArr = new Array(repeatTimes).fill(mainStr);
  const addArr = new Array(additionRepeatTimes).fill(addStr);
  const addStrWithSeparator = addArr.join(additionSeparator);
  return mainArr.map((s) => s + addStrWithSeparator).join(separator);
}

module.exports = {
  repeater,
};
