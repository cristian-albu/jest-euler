//? The prime factors of 13195 are 5, 7, 13 and 29.
//? What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  let i = 3;
  const primeList = [2];

  while (i < Math.ceil(Math.sqrt(number)) + 5) {
    let isPrime = true;
    for (let j = 2; j < primeList.length && isPrime; j++) {
      if (i % primeList[j] === 0) {
        isPrime = false;
      }
    }
    if (isPrime && number % i === 0) {
      primeList.push(i);
    }

    i += 2;
  }

  return primeList[primeList.length - 1];
}

largestPrimeFactor(5);
largestPrimeFactor(13195);

module.exports = largestPrimeFactor;

{
  /*The solution has a time complexity of O(sqrt(n) * log(n)), where n is the input number.

The time complexity is determined by the two main operations in the solution:

Generating a list of prime numbers up to the square root of the input number: This operation takes O(sqrt(n) * log(n)) time because it 
involves using a combination of trial division and a prime number sieve to identify all the prime numbers up to the square root of the input number.

Checking each prime number to see if it is a factor of the input number: This operation takes O(sqrt(n)) time in the worst case 
because the input number may have at most sqrt(n) distinct prime factors.

Therefore, the overall time complexity of the solution is O(sqrt(n) * log(n)).  --- ChatGPT says*/
}

//! ChatGPT's solution

function largestPrimeFactorC(number) {
  let factor = 2;

  while (factor <= Math.sqrt(number)) {
    if (number % factor === 0) {
      number /= factor;
    } else {
      factor++;
    }
  }

  if (number > 1) {
    return number;
  }

  return factor;
}

largestPrimeFactorC(5);
largestPrimeFactorC(13195);

{
  /*This algorithm has a time complexity of O(sqrt(n)), where n is the input number.

It works by iteratively dividing the input number by its smallest prime factor until the remaining number is itself a prime number.

The algorithm first initializes the factor to 2 and then iteratively divides the number by the factor if it is a factor.

If the factor is not a factor, it is incremented by 1 until the next factor is found. This process is repeated until the factor is greater than the square root of the number.

At the end of the loop, if the remaining number is greater than 1, it is returned as the largest prime factor.

Otherwise, the current factor is the largest prime factor and is returned.

This algorithm is more efficient than the previous algorithm because it avoids the need to generate a

list of all prime numbers up to the square root of the input number. Instead, it directly calculates

the smallest prime factor of the input number, which reduces the overall number of iterations needed to find the largest prime factor. */
}

//? Bonus problem. Generate a list of primes

function primeNumGenerator(number) {
  const primeList = [1, 2];
  let i = 3;
  while (i < number) {
    let isPrime = true;
    for (let j = 3; j < primeList.length && isPrime; j++) {
      if (i % primeList[j] === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primeList.push(i);
    }
    i += 2;
  }
  console.log(primeList);
  return primeList;
}

primeNumGenerator(50);
