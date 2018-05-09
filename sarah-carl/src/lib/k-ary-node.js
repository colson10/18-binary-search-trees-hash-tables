'use strict';

// node class is focused on doing everything with the node.
// this is why the append child method is on the node, not the tree.
// this is a design choice. It could be on the tree.
export default class KAaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    // this.children = {}; this is for homework
  }

  appendChild(value) {
    const nodeToAppend = new KAaryNode(value);
    this.children.push(nodeToAppend);
  }
}
