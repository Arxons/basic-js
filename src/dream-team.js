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

  //Перебор элементов в новом массиве
  for (let j = 0; j < arr.length; j++) {
    arr[k] = arr[k].replace(/\s+/g, ' ').trim();
    arr[k] = arr[k].charAt(0);
    arr[k] = arr[k].toUpperCase();
  }

  arr.sort();
  arr = arr.join('');
  return arr;
}


/* else if (members[i] === "object") {
 for (let j = 0; j < members[i].length; j++) {
   if (typeof members[i][j] === "string") {
     str += members[i][j].slice(0, 1);
     str = str.toUpperCase();
   } else if (members[i] = "") {
     members[i].map(i => i.trim());
     str += members[i][j].slice(0, 1);
     str = str.toUpperCase();
   }
   /* members =members.map(item => item.trimStart())
    str += members[i].slice(0, 1);
    str = str.toUpperCase();*/
/*for (let j = 0; j < arr.length; j++) {
  str += arr[j].slice(0, 1);
}*/
