'use strict';

import BinarySearchTree from '../lib/binary-search';
import Node from '../lib/node';
import util from 'util';

let tree = null;
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const ten = new Node(10);
const eleven = new Node(11);

afterEach(() => {
  tree = null;
  // values = '';
});

describe('Testing Binary-Search-Tree methods', () => {
  describe('testing insert method', () => {
    test('value should be', () => {
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(one);
      tree.insert(eleven);
      tree.insert(four);
      tree.insert(ten);
      tree.insert(eight);
      console.log('what is it', util.inspect(tree, { depth: null }));
      // maybe we could use one of our binary tree traversals to test?
    });
  });
});
