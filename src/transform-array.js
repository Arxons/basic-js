import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] === "--double-next" && j !== newArr.length - 1) {
      newArr[j] = newArr[j + 1];
    } else if (newArr[j] === "--double-prev" && j !== 0 && !(newArr[j - 2] === '--discard-next')) {
      newArr[j] = newArr[j - 1];
    } else if (newArr[j] === "--discard-prev" && j !== 0 && !(newArr[j - 2] === '--discard-next')) {
      newArr.splice(j - 1, 2);
    } else if (newArr[j] === "--discard-next" && j !== newArr.length - 1) {
      newArr.splice(j, 2);
    }

  }

  for (let n = 0; n < newArr.length; n++) {
    if (newArr[n] === "--discard-prev" || newArr[n] === "--discard-next" || newArr[n] === "--double-next" || newArr[n] === "--double-prev" || newArr[n] === undefined) {
      newArr.splice(n, 1);
    }
  }
  return newArr;
}
