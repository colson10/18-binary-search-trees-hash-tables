'use strict';

import BinarySearchTree from '../lib/binary-search';
import Node from '../lib/node';

let tree = null;
let one = new Node(1);
// let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
// let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
// let nine = new Node(9);
let ten = new Node(10);
let eleven = new Node(11);

let one2 = new Node(1);
// let two2 = new Node(2);
let three2 = new Node(3);
let four2 = new Node(4);
let five2 = new Node(5);
// let six2 = new Node(6);
let seven2 = new Node(7);
let eight2 = new Node(8);
// let nine2 = new Node(9);
let ten2 = new Node(10);
let eleven2 = new Node(11);

afterEach(() => {
  tree = null;
  one = new Node(1);
  // two = new Node(2);
  three = new Node(3);
  four = new Node(4);
  five = new Node(5);
  // six = new Node(6);
  seven = new Node(7);
  eight = new Node(8);
  // nine = new Node(9);
  ten = new Node(10);
  eleven = new Node(11);
  one2 = new Node(1);
  // two2 = new Node(2);
  three2 = new Node(3);
  four2 = new Node(4);
  five2 = new Node(5);
  // six2 = new Node(6);
  seven2 = new Node(7);
  eight2 = new Node(8);
  // nine2 = new Node(9);
  ten2 = new Node(10);
  eleven2 = new Node(11);
});

describe('Testing Binary-Search-Tree methods', () => {
  describe('testing insert method', () => {
    test('value should be as expected based on how the tree was constructed', () => {
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(one);
      tree.insert(eleven);
      tree.insert(four);
      tree.insert(ten);
      tree.insert(eight);
      expect(tree.root.value).toEqual(7);
      expect(tree.root.left.value).toEqual(1);
      expect(tree.root.left.right.value).toEqual(4);
      expect(tree.root.right.value).toEqual(11);
    });
  });
  describe('testing find method', () => {
    test('value should be as expected based on how the tree was constructed', () => {
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(one);
      tree.insert(eleven);
      tree.insert(four);
      tree.insert(ten);
      tree.insert(eight);
      expect(tree.find(4)).toBeTruthy();
      expect(tree.find(200)).toBeFalsy();
    });
  });
  describe('testing remove method', () => {
    test('removal of node with two children', () => {
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(four);
      tree.insert(five);
      tree.insert(one);
      tree.insert(three);
      tree.insert(eleven);
      tree.insert(ten);
      tree.insert(eight);

      const expectedTree = new BinarySearchTree();
      expectedTree.insert(seven2);
      expectedTree.insert(eleven2);
      expectedTree.insert(five2);
      expectedTree.insert(one2);
      expectedTree.insert(three2);
      expectedTree.insert(ten2);
      expectedTree.insert(eight2);
      expect(tree.remove(4)).toEqual(expectedTree);
    });
    test('removal of node with one child', () => {
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(four);
      tree.insert(five);
      tree.insert(one);
      tree.insert(three);
      tree.insert(eleven);
      tree.insert(ten);
      tree.insert(eight);

      const expectedTree = new BinarySearchTree();
      expectedTree.insert(seven2);
      expectedTree.insert(eleven2);
      expectedTree.insert(four2);
      expectedTree.insert(five2);
      expectedTree.insert(three2);
      expectedTree.insert(ten2);
      expectedTree.insert(eight2);
      expect(tree.remove(1)).toEqual(expectedTree);
    });
    test('removal of node with no children', () => {
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(four);
      tree.insert(five);
      tree.insert(one);
      tree.insert(three);
      tree.insert(eleven);
      tree.insert(ten);
      tree.insert(eight);

      const expectedTree = new BinarySearchTree();
      expectedTree.insert(seven2);
      expectedTree.insert(eleven2);
      expectedTree.insert(four2);
      expectedTree.insert(five2);
      expectedTree.insert(one2);
      expectedTree.insert(ten2);
      expectedTree.insert(eight2);
      expect(tree.remove(3)).toEqual(expectedTree);
    });
  });
});
