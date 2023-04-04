// https://www.hackerrank.com/challenges/mark-and-toys/problem

function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);
  
  let toys = 0;
  let budget = k;
  
  for (const price of prices) {
    if(budget >= price) {
      toys++;
      budget -= price;
    } else {
      break;
    }
  }
  
  return toys;
}
