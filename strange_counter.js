// https://www.hackerrank.com/challenges/strange-code/problem

function strangeCounter(t) {    
  let cycle = 3; 
  while (t > cycle) {
    t -= cycle;
    cycle *= 2; 
  }
  return cycle - t + 1;
}
