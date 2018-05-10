'use strict';

import Node from './ll-node';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  lastNodeValue() {
    if (!this.head) return null;
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  popLastNode() {
    if (!this.head) return null;
    let currentNode = this.head;
    
    if (!currentNode.next) {
      const poppedValue = currentNode.value;
      currentNode = null;
      return poppedValue;
    }

    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const poppedValue = currentNode.next.value;
    currentNode.next = null;
    return poppedValue;
  }

  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }
}
