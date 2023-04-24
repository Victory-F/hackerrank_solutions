// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
    
  let digit = false;
  let lower = false;
  let upper = false;
  let special = false;
  
  for (const char of password) {
    if (char.match(/[0-9]/)) {
      digit = true;
    } else if (char.match(/[a-z]/)) {
      lower = true;
    } else if (char.match(/[A-Z]/)) {
      upper = true;
    } else {
      special = true;
    }
  }
  
  let missing = 0;
  if (!digit) {
    missing++;
  }
  if (!lower) {
    missing++;
  }
  if (!upper) {
    missing++;
  }
  if (!special) {
    missing++;
  }

  const minLength = Math.max(6, n);
  const additionals = Math.max(0, 6 - n);

  return Math.max(missing, additionals, minLength - n);
}
