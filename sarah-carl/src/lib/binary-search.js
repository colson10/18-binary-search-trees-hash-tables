'use strict';

export default class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // inOrder(rootNode, callback) { // eslint-disable-line
  //   if (rootNode) {
  //     inOrder(rootNode.left);
  //     callback(rootNode);
  //     inOrder(rootNode.right);
  //   }
  // }

  _findSmallest(rootNode) { // eslint-disable-line
    if (!rootNode) {
      return undefined;
    }
    if (rootNode.left) {
      return this._findSmallest(rootNode.left);
    }
    return rootNode;
  }

  // maxNode(rootNode) { // eslint-disable-line
  //   if (!rootNode) {
  //     return undefined;
  //   }
  //   if (rootNode.right) {
  //     return maxNode(rootNode.right);
  //   }
  //   return rootNode;
  // }

  // Big O
  // Time: O(H) -> O(lg n)
  // Space: O(H) -> O(lg n)
  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      // can I move to the right branch
      rootNode.right = nodeToInsert;
    } else {
      // add to the right?
      this._insert(rootNode.right, nodeToInsert);
    }
  }

  // Time: O(H) -> O(lg n)
  // Space: O(H) -> O(lg n)
  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }

  _findAndRemove(rootNode, value) { //eslint-disable-line
    let childNode = null;
    if (!rootNode) {
      return null;
    }
    if (rootNode.value < value) {
      childNode = rootNode.right;
    } else {
      childNode = rootNode.left;
    }
    if (!childNode) {
      return null;
    }
    if (childNode.value !== value) {
      return this._findAndRemove(childNode, value);
    }
    if (!childNode.right && !childNode.left) {
      if (rootNode.value > childNode.value) {
        rootNode.left = null;
        return this;
      } 
      rootNode.right = null;
      return this;
    } else if (childNode.right && childNode.left) {
      let newNode = null;
      newNode = this._findSmallest(childNode.right); // returns a node
      childNode.value = newNode.value;
      if (childNode.value === childNode.right.value) {
        childNode.right = null;
        return this;
      }
      return this._findAndRemove(childNode.right, newNode.value);
    } else if (childNode.right) {
      if (rootNode.value > childNode.value) {
        rootNode.left = childNode.right;
        return this;
      } 
      rootNode.right = childNode.right;
      return this;
    } else if (childNode.left) {
      if (rootNode.value > childNode.value) {
        rootNode.left = childNode.left;
        return this;
      } 
      rootNode.right = childNode.left;
      return this;
    }
  }

  remove(value) {
    if (!this.root) {
      return null;
    }
    return this._findAndRemove(this.root, value);
  }
}
