import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (date.getTime) {


    //const newError = new Error("Invalid date!");
    let month = date.getMonth();
    //let year = date.getFullYear();
    if (month < 2 || month === 11) {
      return "winter";
    } else if (month >= 2 && month <= 4) {
      return "spring";
    } else if (month >= 5 && month <= 7) {
      return "summer";
    } else if (month >= 8 && month <= 10) {
      return "fall";
    } else if (month != Number) {
      return "fall";
    }
  }
  else throw new Error("Invalid date!");
}



