function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);
  if (coins.length === 0) return 1;
  if (!(1 in coins)) return 1;
  let change = 0;
  for (let num of coins) {
    if (num > change + 1) return change + 1;
    change += num;
  }
  return change + 1;
}
nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);
