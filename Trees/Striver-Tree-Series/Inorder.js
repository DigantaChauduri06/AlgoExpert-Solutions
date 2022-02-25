const Inorder = (root, res) => {
  if (root === null) return;
  res.push(root.val);
  Inorder(root.left, res);
  Inorder(root.right, res);
};

var InorderTraversal2 = function (root) {
  const res = [];
  Inorder(root, res);
  return res;
};
var InorderTraversal = function (root) {
  if (root === null) return [];
  const res = [];
  const stack = [];
  while (true) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      if (stack.length === 0) break;
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};
