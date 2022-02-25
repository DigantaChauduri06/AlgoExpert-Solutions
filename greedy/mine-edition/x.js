var removeCoveredIntervals = function (I) {
  I.sort((a, b) => a[0] - b[0]);
  console.log(I);
  let ans = 1;
  let l = I[0][0];
  let r = I[0][1];
  for (let i = 1; i < I.length; i++) {
    if (I[i][1] > r) {
      // simply check current interval is covered by previous interval or not?

      if (I[i][0] > l) {
        //if not covered change the previous interval to current interval and increment ans
        l = I[i][0];
        ans++;
      }
      r = I[i][1];
    }
  }
  console.log(ans);
  return ans;
};

removeCoveredIntervals([
  [1, 4],
  [3, 6],
  [2, 8],
]);
removeCoveredIntervals([
  [0, 10],
  [5, 12],
]);
