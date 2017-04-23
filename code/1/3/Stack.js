"use strict";
var util = require('util');

function Stack() {

}
Stack.prototype = {
  isEmpty() { throw new Error('Not implemented'); },
  size()  { throw new Error('Not implemented'); },
  push() { throw new Error('Not implemented'); },
  pop()  { throw new Error('Not implemented'); },
  peek()  { throw new Error('Not implemented'); }
}

// Не хочу делать настоящие приватные переменные - это же придется создавать 
// по экземпляру функции на объект, никакого удовольствия от прототипа.

function ResizingArrayStack(size) {
    Stack.call(this);

    let capacity = size || 4;
    if (capacity <= 0) {
        capacity == 4;
    }

    this._items = new Array(capacity);
    this._N = 0;
};

util.inherits(ResizingArrayStack, Stack);

ResizingArrayStack.prototype = {
  _resize(max) {
    var temp = new Array(max);
    for(let i = 0; i < max; i++) {
      temp[i] = this._items[i];
    }
    this._items = temp;
  },
  isEmpty() { 
    return this._N == 0;
  },
  size() { 
    return this._N;
  },
  push(item) {
    var currLength = this._items.length;
    if (this._N == currLength) {
      this._resize(2 * currLength);
    }
    this._items[this._N++] = item;
  },
  pop() {
    if (this._N == 0) {
      throw new Error('No elements in stack');
    }

    this._N--;
    var item = this._items[this._N];
    delete this._items[this._N];
    let currLength = this._items.length;
    if (this._N > 0 && this._N == currLength/4) {
      this._resize(currLength / 2);
    }
    return item;
  },
  peek() {
    if (this._N == 0) {
      throw new Error('No elements in stack');
    }
    return this._items[this._N - 1];
  }
};


exports.ResizingArrayStack = ResizingArrayStack;
exports.Stack = ResizingArrayStack;