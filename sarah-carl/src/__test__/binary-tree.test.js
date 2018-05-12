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

const expectedTree = new BinarySearchTree();
expectedTree.insert(seven);
expectedTree.insert(eleven);
expectedTree.insert(four);
expectedTree.insert(ten);
expectedTree.insert(eight);

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
      expect(tree.root.value).toEqual(7);
      // maybe we could use one of our binary tree traversals to test?
    });
  });
  describe('testing find method', () => {
    test('value should be', () => {
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(one);
      tree.insert(eleven);
      tree.insert(four);
      tree.insert(ten);
      tree.insert(eight);
      expect(tree.find(4)).toBeTruthy();
      expect(tree.find(200)).toBeFalsy();
      // maybe we could use one of our binary tree traversals to test?
    });
  });
  describe('testing remove method', () => {
    test.only('value should be', () => {
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(four);
      tree.insert(one);
      tree.insert(three);
      tree.insert(eleven);
      tree.insert(ten);
      tree.insert(eight);
      console.log('what is it', util.inspect(tree, { depth: null }));
      console.log('this is the expected tree...', expectedTree);
      console.log('expected tree: ', util.inspect(expectedTree, { depth: null }));
      // console.log(tree.remove(1), 'this is the tree.remove');
      // maybe we could use one of our binary tree traversals to test?
      expect(tree.remove(1)).toEqual(expectedTree);
    });
  });
});
