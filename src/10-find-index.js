/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const mid = min + Math.floor((max - min) / 2);

    if (array[mid] === value) return mid;
    if (value < array[mid]) {
      max = mid - 1;
    } else { min = mid + 1; }
  }

  return -1;
}
module.exports = findIndex;
