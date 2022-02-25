// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(N*N)
function getHight(root) {
  if (root === null) return 0;
  return Math.max(getHight(root.left), getHight(root.right)) + 1;
}
function binaryTreeDiameter(root) {
  // Write your code here.
  if (!root) return 0;
  let option1 = binaryTreeDiameter(root.left);
  let option2 = binaryTreeDiameter(root.right);
  let option3 = getHight(root.left) + getHight(root.right);
  return Math.max(option1, option2, option3);
}

class pair {
  constructor(dia, hei) {
    this.dia = dia;
    this.hei = hei;
  }
}

const calculate = function (root) {
  if (root === null) {
    const p1 = new pair(0, 0);
    return p1;
  }
  const left = calculate(root.left);
  const right = calculate(root.right);
  const dia1 = left.hei + right.hei;
  const dia2 = Math.max(left.dia, right.dia);
  const diameter = Math.max(dia1, dia2);
  const height = Math.max(left.hei, right.hei) + 1;
  return new pair(diameter, height);
};

function binaryTreeDiameter(root) {
  // Write your code here.
  return calculate(root).dia;
}
