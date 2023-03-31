function breakingRecords(scores) {
    
  let [max, min] = [scores[0], scores[0]];
  const maxMinCount = [0, 0];
  
  for (const score of scores.slice(1)) {
    if (score > max) {
      max = score;
      maxMinCount[0]++;
    }
    if (score < min) {
      min = score;
      maxMinCount[1]++;
    }
  }

  return maxMinCount;
}
