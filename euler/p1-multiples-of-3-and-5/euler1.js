//? If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//? Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  const arrOfMultiples = [];

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arrOfMultiples.push(i);
    }
  }

  const output = arrOfMultiples.reduce((acc, curr) => acc + curr, 0);
  console.log(output);

  return output;
}

multiplesOf3and5(10);

module.exports = multiplesOf3and5;

//! Chat GPT's solutions
function multiplesOf3and5C1(number) {
  const numMultiplesOf3 = Math.floor((number - 1) / 3);
  const numMultiplesOf5 = Math.floor((number - 1) / 5);
  const numMultiplesOf15 = Math.floor((number - 1) / 15);
  const sumMultiplesOf3 = (3 * numMultiplesOf3 * (numMultiplesOf3 + 1)) / 2;
  const sumMultiplesOf5 = (5 * numMultiplesOf5 * (numMultiplesOf5 + 1)) / 2;
  const sumMultiplesOf15 = (15 * numMultiplesOf15 * (numMultiplesOf15 + 1)) / 2;
  const output = sumMultiplesOf3 + sumMultiplesOf5 - sumMultiplesOf15;
  console.log(output);
  return output;
}

multiplesOf3and5C1(10);

function multiplesOf3and5C2(number) {
  const arr = Array.from({ length: number }, (_, i) => i);
  const multiples = arr.filter((num) => num % 3 === 0 || num % 5 === 0);
  const output = multiples.reduce((acc, curr) => acc + curr, 0);
  console.log(output);
  return output;
}

multiplesOf3and5C2(10);
