// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function invertBinaryTree(root) {
  // Write your code here.
  if (!root) return;
  [root.left, root.right] = [root.right, root.left];
  invertBinaryTree(root.left);
  invertBinaryTree(root.right);
}

// Iteratively
function invertBinaryTree(root) {
  // Write your code here.
  if (!root) return;
  const q = [];
  q.push(root);
  while (q.length !== 0) {
    let curr = q.shift();
    if (curr) {
      [curr.left, curr.right] = [curr.right, curr.left];
      q.push(curr.left);
      q.push(curr.right);
    }
  }
  return root;
}
