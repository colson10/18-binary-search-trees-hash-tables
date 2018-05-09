'use strict';

import KAryTree from '../lib/k-ary-tree';
import KAryNode from '../lib/k-ary-node';

let tree = null;

// const one = new KAryNode(1);
// const two = new KAryNode(2);
// const three = new KAryNode(3);
// const four = new KAryNode(4);
// const five = new KAryNode(5);
// const six = new KAryNode(6);
// const seven = new KAryNode(7);
// const eight = new KAryNode(8);
// const nine = new KAryNode(9);
// const ten = new KAryNode(10);
// const eleven = new KAryNode(11);

// let values = '';
// const print = (node) => {
//   console.log(node, 'this is the value in the callback');
//   values += node.toString();
//   return undefined;
// };

afterEach(() => {
  tree = null;
  // values = '';
});

describe('Testing K-Ary-Tree methods', () => {
  describe('testing breadth first traversal', () => {
    // let values = [];
    test.only('value should be 12364578', () => {
      const one = new KAryNode(1);
      one.appendChild(2);
      one.appendChild(3);
      one.appendChild(4);
      
      one.children[1].appendChild(5); // 0
      one.children[1].appendChild(6); // 1
      one.children[1].appendChild(7); // 2
      
      one.children[1].children[1].appendChild(8);
      
      const kAryTree = new KAryTree(one);
      // kAryTree.breadthFirstSearch(print);
      expect(kAryTree.toString()).toEqual('1\n2\n3\n4\n5\n6\n7\n8\n');
    });
    test('value should be 11036457811', () => {
      one.left = ten;
      one.right = three;
      three.left = four;
      three.right = five;
      ten.left = six;
      six.right = seven;
      seven.left = eight;
      seven.right = eleven;
      tree = new Tree(one);
      expect(tree.breadthFirstSearch()).toEqual('11036457811');
    });
    test('should return error', () => {
      tree = null;
      expect(breadthFirst(tree)).toThrowError();
    });
   });
})