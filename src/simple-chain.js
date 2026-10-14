const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position > 0 &&
      position <= this.arr.length &&
      typeof position === "number"
    ) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  arr: [],
  finishChain() {
    const finalChain = this.arr.map((value) => `( ${value} )`).join("~~");
    this.arr = [];
    return finalChain;
  },
};

module.exports = {
  chainMaker,
};
