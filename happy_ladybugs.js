// https://www.hackerrank.com/challenges/happy-ladybugs/problem

function happyLadybugs(b) {
  if (!b.includes("_")) {      
      for(let i = 0; i < b.length; i++){
          const prev = b[i-1] || "_";
          const curr = b[i];
          const next = b[i+1] || "_";
          if(prev !== curr && next !== curr){
              return "NO";
          }
      }
      return "YES"
  }
  
  const freq = {};
  for (const c of b) {
    if (c !== "_") {
      freq[c] = (freq[c] || 0) + 1;
    }
  }
  
  return Object.values(freq).includes(1) ? "NO" : "YES";
}
