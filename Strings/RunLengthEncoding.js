function runLengthEncoding(string) {
  // Write your code here.
  const arr = [];
  let curr = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1] || curr === 9) {
      let char = curr.toString();
      arr.push(char);
      arr.push(string[i]);
      curr = 0;
    }
    curr++;
  }
  return arr.join("");
}
console.log(runLengthEncoding("AAABBCCCC"));
