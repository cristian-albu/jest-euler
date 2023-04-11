//? A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//? Find the largest palindrome made from the product of two n-digit numbers.

function isPalindrome(number) {
  let len = number.toString().length;
  const part1 = number.toString().slice(0, len / 2);
  const part2 = number.toString().slice(len / 2, len);

  for (let i = 0; i < part1.length; i++) {
    if (part1[i] !== part2[part2.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function largestPalindromeProduct(n) {
  let newNumber = [...Array(n).fill(9)].join("");
  let smallest = Number([9, ...Array(n - 1).fill(0)].join(""));

  let num1 = Number(newNumber);
  let num2 = Number(newNumber);

  while (num1 > smallest) {
    while (num2 > smallest) {
      if (isPalindrome(num1 * num2)) {
        return num1 * num2;
      }
      num2--;
    }
    num2 = num1;
    num1--;
  }
}

console.log(largestPalindromeProduct(3));
// largestPalindromeProduct(3);

module.exports = largestPalindromeProduct;
