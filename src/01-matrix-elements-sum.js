/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((e, eInd) => {
    e.forEach((_, rInd) => {
      if (eInd === 0 || matrix[eInd - 1][rInd] !== 0) {
        sum += matrix[eInd][rInd];
      }
    });
  });
  return sum;
}

module.exports = getMatrixElementsSum;
