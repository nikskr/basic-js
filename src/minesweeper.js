const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mineField = Array.from({ length: matrix.length }, () =>
    Array(matrix[0].length).fill(0),
  );
  function fillAroundMine(field, x, y) {
    for (let i = x - 1; i < x + 2; i++) {
      for (let j = y - 1; j < y + 2; j++) {
        if (
          i >= 0 &&
          j >= 0 &&
          j < matrix[0].length &&
          i < matrix.length &&
          !(x === i && y === j)
        ) {
          field[i][j] += 1;
        }
      }
    }
    return field;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        fillAroundMine(mineField, i, j);
      }
    }
  }
  return mineField;
}

module.exports = {
  minesweeper,
};
