const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  valueArray : [],


  getLength() {
    return this.valueArray.length;
  },
  addLink(value) {
    this.valueArray.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position >= this.getLength() || position <= 0) {
      this.valueArray = [];
      throw new Error("You can't remove incorrect link!");
    } 
    this.valueArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.valueArray.reverse();
    return this;
  },
  finishChain() {
    let result = this.valueArray.join('~~');
    this.valueArray = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
