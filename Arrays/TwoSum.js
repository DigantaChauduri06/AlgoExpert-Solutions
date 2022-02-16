function twoNumberSum2(arr, target) {
  // Write your code here.
  const track = {};
  for (let val of arr) {
    let num = target - val;
    if (num in track) {
      return [num, val];
    } else {
      track[val] = true;
    }
  }
  return [];
}
function twoNumberSum(arr, target) {
  // Write your code here.
  arr.sort((a, b) => a - b);
  console.log(arr);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return [];
}
twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6]);
