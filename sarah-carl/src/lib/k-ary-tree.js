'use strict';

import Queue from 'queue-fifo';
import Stack from './stack';

class KAryTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthFirstSearch(callback) {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root, callback);
  }

  _breadthFirstSearch(root, callback) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);
  
    let current = null;
  
    while (!queue.isEmpty()) {
      current = queue.dequeue();
  
      // this will be replaced with another operation. 
      // console.log(`Visiting ${current.value}`);
      callback(current.value);
  
      for (let i = 0; i < current.children.length; i++) {
        queue.enqueue(current.children[i]);
      }
    }
  }
  _breadthFirstReturn(root, value) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);
  
    let current = null;
  
    while (!queue.isEmpty()) {
      current = queue.dequeue();
  
      // this will be replaced with another operation. 
      // console.log(`Visiting ${current.value}`);
      if (current.value === value) {
        return current.value;
      }
  
      for (let i = 0; i < current.children.length; i++) {
        queue.enqueue(current.children[i]);
      }
    }
  }
  _depthFirstSearch(root, callback) { //eslint-disable-line
    const stack = new Stack();
    stack.push(root);
  
    let current = null;
  
    while (!stack.isEmpty()) {
      current = stack.pop();
      
      callback(current.value);
      
  
      for (let i = 0; i < current.children.length; i++) {
        stack.push(current.children[i]);
      }
    }
  }


  toString() {
    let values = '';
    const print = (nodeVal) => {
      values += `${nodeVal.toString()}\n`;
      return values;
    };
    
    if (!this.root) {
      return null;
    }
    this._breadthFirstSearch(this.root, print);
    // console.log(values);
    return values;
  }

  find(value) {
    return this._breadthFirstReturn(this.root, value);
  }

  toArray() {
    const values = [];
    const print = (nodeVal) => {
      values.push(nodeVal);
      // return values;
    };
    if (!this.root) {
      return null;
    }
    this._depthFirstSearch(this.root, print);
    // console.log(values);
    return values;
  }
}

export default KAryTree;
