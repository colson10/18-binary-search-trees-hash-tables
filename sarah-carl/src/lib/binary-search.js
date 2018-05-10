'use strict';

export default class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // ------------------------------------------------------------------
  // sarah -- added these functions.. not necc working, linter is mad because i don't use 'this', these are just rough ideas
  // ------------------------------------------------------------------

  inOrder(rootNode, callback) { // eslint-disable-line
    if (rootNode) {
      inOrder(rootNode.left);
      callback(rootNode);
      inOrder(rootNode.right);
    }
  }
  minNode(rootNode) { // eslint-disable-line
    if (!rootNode) {
      return undefined;
    }
    if (rootNode.left) {
      return minNode(rootNode.left);
    }
    return rootNode;
  }
       
  maxNode(rootNode) { // eslint-disable-line
    if (!rootNode) {
      return undefined;
    }
    if (rootNode.right) {
      return maxNode(rootNode.right);
    }
    return rootNode;
  }

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
  _findAndRemove(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      if (rootNode.left && rootNode.right) {
        // Find inorder successor of the node. according to my algorithms textbook, this node will be to the right of the node we delete, if the next right node has no left child then we can replace the node with its right child, otherwise if the right child has a left child, then the node to delete must be rplaced with the right childs left child and the the right child then become the right child of is prvius left child?
        // Copy the inorder successor's content to this node
        // Delete the inorder successor
        rootNode.right = deleteNode(rootNode.right, temp.value); // not an actual function
      } else if (rootNode.left) {
        //  copy the child to the node 
        // delete the child
      } //  copy the child to the node 
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
