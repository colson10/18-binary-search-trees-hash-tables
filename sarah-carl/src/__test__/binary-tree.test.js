'use strict';

import util from 'util';
import BinarySearchTree from '../lib/binary-search';
import Node from '../lib/node';


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


const testTree = new BinarySearchTree();
testTree.insert(seven);
testTree.insert(eleven);
testTree.insert(four);
testTree.insert(ten);
testTree.insert(eight);

const testTreeTwo = new BinarySearchTree();
testTreeTwo.insert(seven);
testTreeTwo.insert(four);
testTreeTwo.insert(three);
testTreeTwo.insert(one);
testTreeTwo.insert(eleven);
testTreeTwo.insert(ten);
testTreeTwo.insert(eight);


describe('Testing Binary-Search-Tree methods', () => {
  describe('testing insert method', () => {
    test('value should be', () => {
      tree = null;
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(four);
      tree.insert(eleven);
      tree.insert(one);
      tree.insert(ten);
      tree.insert(eight);
      console.log('what is it', util.inspect(tree, { depth: null }));
      expect(tree.root.value).toEqual(7);
      expect(tree.root.right.value).toEqual(11);
      expect(tree.root.left.value).toEqual(4);
      // expect(tree.root.right.right.right.value).toBeFalsy();
      expect(tree.root.right.left.value).toEqual(10);
      // maybe we could use one of our binary tree traversals to test?
    });
  });
  describe('testing find method', () => {
    test('value should be', () => {
      tree = null;
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
    test.only('removing one, with one child node, value should be', () => {
      tree = null;
      tree = new BinarySearchTree();
      tree.insert(seven);
      tree.insert(four);
      tree.insert(one);
      tree.insert(three);
      tree.insert(eleven);
      tree.insert(ten);
      tree.insert(eight);
      tree.remove(1);
      console.log('expected tree: ', util.inspect(testTree, { depth: null }));
      console.log('tree afer remove', tree);
      expect(tree).toEqual(testTree);
    });
    test('removing two, with two children, value should be', () => {
      const treeRemoveTwo = new BinarySearchTree();
      treeRemoveTwo.insert(seven);
      treeRemoveTwo.insert(four);
      treeRemoveTwo.insert(two);
      treeRemoveTwo.insert(three);
      treeRemoveTwo.insert(one);
      treeRemoveTwo.insert(eleven);
      treeRemoveTwo.insert(ten);
      treeRemoveTwo.insert(eight);
      treeRemoveTwo.remove(2);
      console.log('expected tree: ', util.inspect(testTreeTwo, { depth: null }));
      console.log('tree afer remove', util.inspect(treeRemoveTwo, { depth: null }));
      expect(treeRemoveTwo).toEqual(testTreeTwo);
    });
  });
});
