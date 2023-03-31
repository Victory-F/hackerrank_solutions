// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
    
    const birdsCounts = new Array(5).fill(0);
    let maxCount = 0;
    let mostCommonBird = 0;
  
    arr.forEach((type) => {
        
      birdsCounts[type - 1]++;
      
      if (birdsCounts[type - 1] > maxCount) {
        maxCount = birdsCounts[type - 1];
        mostCommonBird = type;
      } else if (birdsCounts[type - 1] === maxCount && type < mostCommonBird) {
        mostCommonBird = type;
      }
    });
    
    return mostCommonBird;
  }