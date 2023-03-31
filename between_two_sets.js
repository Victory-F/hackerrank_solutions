// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    
  const minB = Math.min(...b);
  const factors = [];

  for (let i = 1; i <= minB; i++) {
    let isFactor = true;
    let isMultiple = true;
    
    for (let j = 0; j < b.length; j++) {
      if (b[j] % i !== 0) {
        isFactor = false;
        break;
      }
    }
    
    if (isFactor) {
      for (let j = 0; j < a.length; j++) {
        if (i % a[j] !== 0) {
          isMultiple = false;
          break;
        }
      }
      if (isMultiple) {
        factors.push(i);
      }
    }
  }

  return factors.length;
}
