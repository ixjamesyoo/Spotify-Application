// Question 1 -- sortByStrings(s,t):
// Sort the letters in the string s by the order they occur in the string t.
// You can assume t will not have repetitive characters.
// For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".
// For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByStrings(s,t) {
  const chars = s.split("");
  const sortOrder = {};

  for (let i = 0; i < t.length; i++) {
    sortOrder[t[i]] = i;
  }

  return chars.sort((x,y) => {
    if (x === y) return 0;
    if (sortOrder[x] < sortOrder[y]) return -1;
    return 1;
  }).join("");
}
