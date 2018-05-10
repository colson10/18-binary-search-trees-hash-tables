'use strict';

// import LinkedList from './linked-list';

export default class Stack {
  // constructor() {
  //   this._storage = new LinkedList();
  // }

  // push(value) {
  //   this._storage.insertAtEnd(value);
  // }

  // pop() {
  //   return this._storage.popLastNode();
  // }

  // peek() {
  //   return this._storage.lastNodeValue();
  // }

  // isEmpty() {
  //   return !this._storage.head;
  // }
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
