/*Selection sort is a simple comparison-based sorting algorithm. It works by selecting the smallest or largest element 
from the unsorted portion of the array and moving it to the beginning of the sorted portion of the array. It then repeats 
this process on the remaining unsorted portion of the array until the entire array is sorted.

The basic idea behind selection sort is to repeatedly find the minimum or maximum element in the unsorted part of the 
array and swap it with the first element of the unsorted part. In this way, the sorted part of the array grows incrementally 
while the unsorted part shrinks. Selection sort has a time complexity of O(n^2), which makes it inefficient on large lists. 
However, it has the advantage of requiring only a single swap per pass, which makes it useful in situations where swapping elements is 
particularly costly, such as with linked lists. */

const example1 = [100, 32, 45, 87, 120, 12, 54, 76, 98, 23, 99, 13, 46, 28];

function selectionSort(unsortedArr) {
  const arr = [...unsortedArr];

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort(example1));

module.exports = selectionSort;
