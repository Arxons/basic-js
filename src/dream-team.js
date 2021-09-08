import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let arr = [];
  //Проверка на массив
  if (Array.isArray(members) === false) {
    return false;
  }

  //Проверка на тип "строка и перемещение в новый массив"
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      arr.unshift(members[i]);
    }
  }

  //Перебор элементов в новом массиве, регулярка на удаление пробелов, возвращение первой буквы, верхний регистр.
  for (let j = 0; j < arr.length; j++) {
    arr[j] = arr[j].replace(/\s+/g, ' ').trim();
    arr[j] = arr[j].charAt(0);
    arr[j] = arr[j].toUpperCase();
  }

  arr.sort();
  arr = arr.join('');
  return arr;
}

