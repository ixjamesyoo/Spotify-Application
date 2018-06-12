// Question 3 -- changePossibilities(amount,amount):
// Your quirky boss collects rare, old coins.
// They found out you're a programmer and asked you to solve something they've been wondering for a long time.
//
// Write a function that, given an amount of money and an array of coin denominations,
// computes the number of ways to make the amount of money with coins of the available denominations.
//
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢),
// your program would output 4—the number of ways to make 4¢ with those denominations:
//
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount, denominations) {
  let possibilities = 0;
  denominations = denominations.sort().reverse();

  function possibilityChecker(amt, denoms){
    if (amt === 0) possibilities += 1;
    if (!denoms.length || amt < 0) return;

    denoms.forEach((denom, idx) => {
      const nextAmount = amt - denom;
      const nextDenoms = denoms.slice(idx);
      possibilityChecker(nextAmount, nextDenoms);
    });
  }

  possibilityChecker(amount, denominations);
  return possibilities;
}
