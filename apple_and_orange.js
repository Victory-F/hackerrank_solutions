function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
  const applesCount = apples.filter(
    (apple) => a + apple >= s && a + apple <= t
  ).length;

  const orangesCount = oranges.filter(
    (orange) => b + orange >= s && b + orange <= t
  ).length;
  
  console.log(`${applesCount}\n${orangesCount}`);
}
