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
  let newStr = '';
  let cnt = 1;

  str.split('').forEach((_, i) => {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      newStr += cnt + str[i];
      cnt = 1;
    }
  });
  return newStr.replace(/[1]/g, '');
}

module.exports = encodeLine;
