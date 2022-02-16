function tournamentWinner(competitions, results) {
  // Write your code here.
  const player = {};
  for (let teams of competitions) {
    for (let curr of teams) {
      if (!(curr in player)) {
        player[curr] = 0;
      }
    }
  }
  for (let i = 0; i < results.length; i++) {
    results[i] = !results[i];
  }
  let i = 0;
  for (let team of competitions) {
    const curr1 = team[0];
    const curr2 = team[1];
    results[i++] ? player[curr2]++ : player[curr1]++;
  }
  let name = "";
  let score = -1e9;
  for (let [key, val] of Object.entries(player)) {
    if (val > score) {
      score = val;
      name = key;
    }
  }
  return name;
}
tournamentWinner(
  [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
  ],
  [0, 1, 1]
);
