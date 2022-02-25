const swap = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

function bubbleSort(arr) {
  // Write your code here.
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
