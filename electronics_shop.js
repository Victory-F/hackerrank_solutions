// https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
  let price = -1;
  for (let i = 0; i < keyboards.length; i++) {
    if (keyboards[i] < b) {
      for (let j = 0; j < drives.length; j++) {
          let sum = keyboards[i] + drives[j];
        if (sum === b) {
          return b;
        }
        if (sum < b && sum > price) {
          price = sum;
        }
      }
    }
  }
  return price;
}
