// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
// O(N) O(N)
function findSuccessor(root, node) {
  // Write your code here.
  if (!root) return null;
  const inOrder = [];
  // Function
  const getSuccessor = function (root) {
    if (!root) return null;
    getSuccessor(root.left);
    inOrder.push(root);
    getSuccessor(root.right);
  };
  for (let i = 0; i < inOrder.length; i++) {
    if (inOrder[i] === node) {
      if (i + 1 < inOrder.length) {
        return inOrder[i + 1];
      }
    }
  }
  return null;
}

//*NOTE: This solution will only work if Binary Tree node has access to their parent
const getLeftMostChild = function (node) {
  let curr = node;
  while (curr.left !== null) {
    curr = curr.left;
  }
  return curr;
};
const getRightMostParent = function (node) {
  while (node.parent && node.parent.right === node) {
    node = node.parent;
  }
  return node.parent;
};
function findSuccessor(root, node) {
  // Write your code here.
  if (!node || !root) return null;
  if (node.right !== null) {
    return getLeftMostChild(node.right);
  } else {
    return getRightMostParent(node);
  }
}
