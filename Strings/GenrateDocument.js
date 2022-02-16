function generateDocument(characters, document) {
  // Write your code here.
  if (document.length === 0) return true;
  if (characters.length === 0) return false;
  const freq1 = new Array(255).fill(0);
  //   const freq2 = new Array(26).fill(0);

  for (let ch of characters) {
    freq1[ch.charCodeAt()]++;
  }
  for (let ch of document) {
    freq1[ch.charCodeAt()]--;
  }
  // console.log(freq1);
  for (let ele of freq1) {
    if (ele < 0) return false;
  }
  return true;
}
console.log(generateDocument("aheaolabbhb ", "hello"));
