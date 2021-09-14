import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  let arr = [];
  let newArr = [];


  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (options.addition === null) { options.addition = "null"; }
  if (!options.additionSeparator) options.additionSeparator = "|";
  if (!options.separator) options.separator = "+";


  arr.push(str);
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arr.push(options.addition);
  }
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
    if (arr[j] === options.addition && arr[j] !== arr.length - 1) {
      arr.splice(j + 1, 0, options.additionSeparator)
    }
  }
  arr.pop()
  for (let n = 0; n < options.repeatTimes; n++) {
    newArr.push(arr);
  }
  for (let k = 0; k < newArr.length; k++) {
    if (Array.isArray(newArr[k])) {
      newArr.splice(k + 1, 0, options.separator)
    }
  }
  newArr.pop();
  newArr = newArr.flat();
  newArr = newArr.join('');
  return newArr;
}
