'use strict';

export default class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // ------------------------------------------------------------------
  // sarah -- added these functions.. not necc working, linter is mad because i don't use 'this', these are just rough ideas
  // ------------------------------------------------------------------

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
      return minNode(rootNode.left);
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

  // ------------------------------------------------------------------
  // sarah -- the end of the potentially not working helper functions
  // ------------------------------------------------------------------

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
    } else if (rootNode.value < value) {
      childNode = rootNode.right;
      // return this._findAndRemove(rootNode.right, value);
    } else if (rootNode.value > value) {
      childNode = rootNode.left;
      //  return this._findAndRemove(rootNode.left, value);
    } else if (childNode.value !== value) {
      return this._findAndRemove(childNode, value);
    }
    if (!childNode.right && !childNode.left) {
      childNode = null;
    } else if (childNode.right && childNode.left) {
      let newVal = null;
      newVal = this._findSmallest(childNode.right);
      this._findAndRemove(childNode.right, newVal);

    } else if (childNode.right) {
      if (rootNode.value > childNode.value) {
        rootNode.left = childNode.right;
      } rootNode.right = childNode.right;
    } else if (childNode.left) {
      if (rootNode.value > childNode.value) {
        rootNode.left = childNode.left;
      } rootNode.right = childNode.left;
    }
  }

  remove(value) {
    if (!this.root) {
      return null;
    }
    return this._findAndRemove(this.root, value);
  }
}
