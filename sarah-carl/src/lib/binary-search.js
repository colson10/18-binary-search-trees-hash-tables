'use strict';

export default class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

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
  _findAndRemove(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      if (rootNode.left && rootNode.right) {
        // Find inorder successor of the node. Copy contents of the inorder successor to the node and delete the inorder successor, ie the node that is inOrder in terms of Value 
       let temp = // find the inorder successor
        // Copy the inorder successor's content to this node
        rootNode.value = temp.value
        // Delete the inorder successor
        rootNode.right = deleteNode(rootNode.right, temp.value) // not an actual function
      } else if (rootNode.left) {
        //  copy the child to the node 
        // delete the child
      }  //  copy the child to the node 
      // delete the child
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }

  remove(value) {
    if (!this.root) {
      return null;
    }
    return this._findAndRemove(this.root, value);

    /*
    GENERAL STEPS
    1. find (value)
    2. check to see if node has children:
        2.a if no children
          remove node
        2.b if one child
            copy the child to the node 
            delete the child
        2.c if two children
              Find inorder successor of the node. Copy contents of the inorder successor to the node and delete the inorder successor. Note that inorder predecessor can also be used. */
  }
}
