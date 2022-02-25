import TreeNode from "./TreeRep";
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorder = (root, res) => {
  if (root === null) return;
  res.push(root.val);
  preorder(root.left, res);
  preorder(root.right, res);
};

var preorderTraversal2 = function (root) {
  const res = [];
  preorder(root, res);
  return res;
};
var preorderTraversal = function (root) {
  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    let size = stack.length;
    for (let i = 0; i < size; i++) {
      let front = stack.pop();
      res.push(front.val);
      if (front.right) {
        stack.push(front.right);
      }
      if (front.left) {
        stack.push(front.left);
      }
    }
  }
  return res;
};
