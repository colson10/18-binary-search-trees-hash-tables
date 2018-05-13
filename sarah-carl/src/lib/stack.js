'use strict';

export default class Stack {
  constructor() {
    this._storage = [];
  }
  push(value) {
    this._storage.push(value);
  }
  pop() {
    return this._storage.pop();
  }
  isEmpty() {
    if (this._storage.length < 1) {
      return true;
    }
    return false;
  }
}
