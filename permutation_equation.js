// https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) { 
    
  const result = [];
  
  for (let i = 1; i <= p.length; i++) {
    const j = p.indexOf(i) + 1;
    const k = p.indexOf(j) + 1;
    result.push(k);
  }

  return result;
}
