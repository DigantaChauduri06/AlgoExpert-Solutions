const swap = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
function insertionSort(arr) {
  // Write your code here.
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j >= 0 && arr[j] < arr[j - 1]) {
      swap(arr, j, j - 1);
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
