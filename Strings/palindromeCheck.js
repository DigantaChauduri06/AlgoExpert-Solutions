function isPalindrome(string) {
  // Write your code here.
  let i = 0,
    j = string.length - 1;
  while (i <= j) {
    if (string[i++] !== string[j--]) return false;
  }
  return true;
}
