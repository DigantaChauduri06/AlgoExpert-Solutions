function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const track = {};
  let cnt = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] in track) {
      track[string[i]]++;
    } else {
      track[string[i]] = 1;
    }
  }
  console.log(track);
  for (let i = 0; i < string.length; i++) {
    if (track[string[i]] === 1) return i;
  }
  return -1;
}

firstNonRepeatingCharacter("abcdcaf");
