import TreeNode from "./TreeRep";

const lavelOrder = function (root, res) {
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      let front = queue.shift();
      temp.push(front.val);
      if (front.left) {
        queue.push(front.left);
      }
      if (front.right) {
        queue.push(front.right);
      }
    }
    res.push(temp);
  }
};

var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  lavelOrder(root, res);
  return res;
};
