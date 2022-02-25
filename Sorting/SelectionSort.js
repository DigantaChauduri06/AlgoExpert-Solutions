const getMinIdx = function (arr, i) {
  let mn = 1e9,
    idx;
  for (i; i < arr.length; i++) {
    if (mn > arr[i]) {
      idx = i;
      mn = arr[i];
    }
  }
  return idx;
};

const swap = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

function selectionSort(arr) {
  // Write your code here.
  for (let i = 0; i < arr.length; i++) {
    const minIdx = getMinIdx(arr, i);
    swap(arr, i, minIdx);
  }
  return arr;
}
console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
