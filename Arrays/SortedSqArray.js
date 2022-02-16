function sortedSquaredArray1(arr) {
  // Write your code here.

  return arr.map((item) => item ** 2).sort((a, b) => a - b);
}
function sortedSquaredArray(arr) {
  // Write your code here.
  const answer = new Array(arr.length).fill(0);
  let i = 0,
    j = arr.length - 1;
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    if (Math.abs(arr[i]) > Math.abs(arr[j])) {
      answer[idx] = Math.abs(arr[i]) ** 2;
      i++;
    } else {
      answer[idx] = Math.abs(arr[j]) ** 2;
      j--;
    }
  }
  return answer;
}
console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
