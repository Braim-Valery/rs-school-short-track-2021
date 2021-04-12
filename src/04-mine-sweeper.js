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
function minesweeper(arrs) {
  const copyArr = arrs.map((arr) => arr.slice());
  arrs.forEach((_, indY) => {
    const prevElm = arrs[indY - 1] || [];
    const currnElm = arrs[indY];
    const nextElm = arrs[indY + 1] || [];

    arrs.forEach((__, indX) => {
      let adjacElm = [
        prevElm[indX - 1], prevElm[indX], prevElm[indX + 1],
        currnElm[indX - 1], currnElm[indX + 1], nextElm[indX - 1],
        nextElm[indX], nextElm[indX + 1],
      ];
      adjacElm = adjacElm.filter((a) => a === true);
      copyArr[indY][indX] = adjacElm.length;
    });
  });

  return copyArr;
}

module.exports = minesweeper;
