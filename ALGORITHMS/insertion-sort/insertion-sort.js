/*The next sorting method we'll look at is insertion sort. 
This method works by building up a sorted array at the beginning of the list. 
It begins the sorted array with the first element. Then it inspects the next element 
and swaps it backwards into the sorted array until it is in sorted position. It continues 
iterating through the list and swapping new items backwards into the sorted portion until 
it reaches the end. This algorithm has quadratic time complexity in the average and worst cases. */

const example1 = [
  100, 32, 45, 87, 120, 12, 54, 76, 98, 23, 99, 13, 46, 28, 19, 73, 56,
];

function insertionSort(unsortedArr) {
  const arr = [...unsortedArr];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      count += 1;

      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }

  console.log(count);
  return arr;
}

console.log(insertionSort(example1));

// ChatGPT's implementation
function insertionSort2(unsortedArr) {
  const arr = [...unsortedArr];
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > current; j--) {
      count += 1;
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  console.log(count);
  return arr;
}

console.log(insertionSort2(example1));

module.exports = insertionSort;
