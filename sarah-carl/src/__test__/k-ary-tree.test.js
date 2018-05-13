'use strict';

import KAryTree from '../lib/k-ary-tree';
import KAryNode from '../lib/k-ary-node';
// import Stack from '../lib/stack';

// let tree = null;

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
  // tree = null;
  // values = '';
});

describe('Testing K-Ary-Tree methods', () => {
  describe('testing toString method', () => {
    // let values = [];
    test('value should be 12364578', () => {
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
  });

  describe('testing find value method', () => {
    test('value should be 6', () => {
      const one = new KAryNode(1);
      one.appendChild(2);
      one.appendChild(3);
      one.appendChild(4);
      
      one.children[1].appendChild(5); // 0
      one.children[1].appendChild(6); // 1
      one.children[1].appendChild(7); // 2
      
      one.children[1].children[1].appendChild(8);
      
      const kAryTree = new KAryTree(one);
      expect(kAryTree.find(6)).toEqual(6);
    });
  });
  describe('testing toArray method', () => {
    // let values = [];
    test('value should be [1, 4, 3, 7, 6, 8, 5, 2]', () => {
      const one = new KAryNode(1);
      one.appendChild(2);
      one.appendChild(3);
      one.appendChild(4);
      
      one.children[1].appendChild(5); // 0
      one.children[1].appendChild(6); // 1
      one.children[1].appendChild(7); // 2
      
      one.children[1].children[1].appendChild(8);
      
      const kAryTree = new KAryTree(one);
      expect(kAryTree.toArray()).toEqual([1, 4, 3, 7, 6, 8, 5, 2]);
    });
  });
  // describe('Testing our Stack constructor methods', () => {
  //   test('#constructor', () => {
  //     const testStack = new Stack();
  //     expect(testStack._storage.head).toBeNull();
  //   });
  
  //   test('push method should add a value to the end of the stack storage', () => {
  //     const testStack = new Stack();
  //     testStack.push(1);
  //     testStack.push(2);
  //     testStack.push(100);
  //     expect(testStack._storage.head.value).toEqual(1);
  //     expect(testStack._storage.head.next.value).toEqual(2);
  //     expect(testStack._storage.head.next.next.value).toEqual(100);
  //   });
  // });
});
