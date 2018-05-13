'use strict';

class BinarySearchTree {
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
  _findSmallest(currNode) { // eslint-disable-line
    if (!currNode) {
      return undefined;
    }
    if (currNode.left) {
      return this._findSmallest(currNode.left);
    }
    return currNode;
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

  _findAndRemove(currNode, value) { //eslint-disable-line
    let childNode = null;
    if (!currNode) {
      return null;
    }
    if (currNode.value < value) {
      childNode = currNode.right;
      // return this._findAndRemove(currNode.right, value);
    } else {
      childNode = currNode.left;
      //  return this._findAndRemove(currNode.left, value);
    }

    while (childNode && childNode.value !== value) {
      // if (childNode.value !== value) {
      console.log(childNode.value, 'checking child node value');
      console.log(currNode.value, 'checking current node value');
      return this._findAndRemove(childNode, value);
      // }
    }
    if (!childNode) {
      return this;
    }
    if (!childNode.right && !childNode.left) {
      console.log('deleting: ', childNode);
      childNode = null;
      return this;
    } else if (childNode.right && childNode.left) {
      console.log('deleting: ', childNode);
      console.log('node to update: ', currNode);
      console.log('whats this in else if: ', this);
      let newVal = null;
      newVal = this._findSmallest(childNode.right);
      currNode.value = newVal;
      this._findAndRemove(childNode.right, newVal);
    } else if (childNode.right) {
      console.log('deleting: ', childNode);
      console.log('node to update: ', currNode);
      if (currNode.value > childNode.value) {
        currNode.left.value = childNode.right.value;
        childNode = null;
        return this;
      } currNode.right = childNode.right;
      childNode = null;
      return this;
    } else if (childNode.left) {
      console.log('deleting: ', childNode);
      console.log('node to update: ', currNode);
      if (currNode.value > childNode.value) {
        currNode.left = childNode.left;
        childNode = null;
        return this;
      } currNode.right = childNode.left;
      childNode = null;
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

export default BinarySearchTree;
