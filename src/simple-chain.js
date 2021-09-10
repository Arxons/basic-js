import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  newArr: [],

  getLength() {
    this.newArr.length
    return this;
  },
  addLink(value) {
    this.newArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || position > this.newArr.length || position <= 0) {
      this.newArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.newArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.newArr.reverse();
    return this;
  },
  finishChain() {
    let res = this.newArr.join("~~");
    this.newArr = [];
    return res;

  }
};
