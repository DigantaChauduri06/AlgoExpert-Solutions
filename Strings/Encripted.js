const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const charArr = [];
  for (let ch of string) {
    for (let i = 0; i < alphabets.length; i++) {
      if (ch === alphabets[i]) {
        charArr.push(alphabets[(i + key) % 26]);
      }
    }
  }
  console.log(charArr);
  return charArr.join("");
}
caesarCipherEncryptor("xyz", 4);
