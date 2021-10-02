import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(dom) {
  let arrDNS = [];
  dom = dom.map(elem => elem.split('.').reverse().reduce((acc, elem) => {
    let dns = `${acc}.${elem}`
    arrDNS.push(dns)
    return dns
  }, ''))

  arrDNS = arrDNS.reduce((acc, elem) => {
    acc[elem] ? acc[elem] += 1 : acc[elem] = 1;
    return acc
  }, {})

  return arrDNS
}
