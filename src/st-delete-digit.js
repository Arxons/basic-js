import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let checker = [];
  let arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    checker.push(arr);
    arr = n.toString().split('');
  }

  checker = checker.reduce((acc, elem) => {
    acc.push(Number.parseInt(elem.join('')));
    return acc
  }, [])

  return Math.max.apply(null, checker)
}
