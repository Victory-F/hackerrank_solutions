// https://www.hackerrank.com/challenges/palindrome-index/problem

function palindromeIndex(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(s, left + 1, right)
        ? left
        : isPalindrome(s, left, right - 1)
        ? right
        : -1;
    }
    left++;
    right--;
  }
  return -1;
}

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
