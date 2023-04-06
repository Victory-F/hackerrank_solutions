// https://www.hackerrank.com/challenges/sherlock-and-array/problem

function balancedSums(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((acc, val) => acc + val, 0);
  
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    
    if (leftSum === rightSum) {
      return "YES";
    }
    
    leftSum += arr[i];
  }
  
  return "NO";
}
