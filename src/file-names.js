const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  names.forEach((name) => {
    const lastResultIdx = result.findLastIndex((nm) => nm === name);
    if (lastResultIdx === -1) {
      result.push(name);
    } else {
      const lastCopyIdx = result.findLastIndex((nm) => {
        const match = nm.match(/(.*?)\((\d+)\)/);
        return match && match[1] === name;
      });
      let nextNum = 1;
      if (lastCopyIdx !== -1) {
        const match = result[lastCopyIdx].match(/(.*?)\((\d+)\)/);
        nextNum = Number(match[2]) + 1;
      }
      result.push(`${name}(${nextNum})`);
    }
  });
  return result;
}

module.exports = {
  renameFiles,
};
