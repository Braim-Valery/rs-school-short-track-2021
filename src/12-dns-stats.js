/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const Item = {};
  domains.forEach((e) => {
    let dns = '';
    const part = e.split('.').reverse();
    part.forEach((_, i) => {
      dns += `.${part[i]}`;
      Item[dns] = Item[dns] ? ++Item[dns] : 1;
    });
  });
  return Item;
}

module.exports = getDNSStats;
