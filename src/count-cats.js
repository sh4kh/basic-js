const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  return matrix.reduce(  (count, row) => {
    let result = 0;
    row.forEach( (item) => {
      if (item === '^^') {
        result++
      }
    });
    console.log(result);
    
    return count + result;
  }, 0)
}

module.exports = {
  countCats
};
