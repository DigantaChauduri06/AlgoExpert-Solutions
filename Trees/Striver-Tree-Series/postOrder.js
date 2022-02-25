const postorder = (root, res) => {
  if (root === null) return;
  res.push(root.val);
  postorder(root.left, res);
  postorder(root.right, res);
};

var postorderTraversal = function (root) {
  const res = [];
  postorder(root, res);
  return res;
};

// One stack
var postorderTraversal = function (root) {
  const st1 = [],
    postorder = [];
  st1.push(root);
  while (st1.length !== 0) {
    let size = st1.length;
    while (size--) {
      let f = st1.pop();
      postorder.push(f.val);
      if (f.left) {
        st1.push(f.left);
      }
      if (f.right) {
        st1.push(f.right);
      }
    }
  }
  postorder.reverse();
  return postorder;
};
