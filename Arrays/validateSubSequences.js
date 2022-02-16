function isValidSubsequence(arr, sub) {
  // Write your code here.
  let i = 0,
    j = 0;
  while (i < arr.length && j < sub.length) {
    if (arr[i] == sub[j]) j++;
    i++;
  }
  return j === sub.length;
}
