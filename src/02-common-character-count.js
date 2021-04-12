/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const array1 = s1.split('');
  const array2 = s2.split('');

  let accum = 0;
  let indx;
  array1.forEach((e) => {
    if (array2.indexOf(e) >= 0) {
      indx = array2.indexOf(e);
      delete array2[indx];
      accum++;
    }
  });
  return accum;
}

module.exports = getCommonCharacterCount;
