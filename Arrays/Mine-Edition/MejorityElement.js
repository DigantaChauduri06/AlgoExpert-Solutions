var majorityElement = function (nums) {
  let n = nums.length;
  let cnt = 0,
    me = Math.floor(-1e9 + 7);
  for (let num of nums) {
    if (cnt === 0) {
      me = num;
      cnt++;
    } else if (me === num) {
      cnt++;
    } else {
      cnt--;
    }
  }
  return me;
};
