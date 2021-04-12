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
  const str = n.toString();
  const numbr = [];

  str.split('').forEach((c) => {
    numbr.push(+str.replace(c, ''));
  });

  return numbr.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
