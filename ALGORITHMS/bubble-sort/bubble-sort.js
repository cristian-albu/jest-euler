/*Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order.
 The algorithm compares each pair of adjacent items in the list and swaps them if they are in the wrong order. 
 This process is repeated until no more swaps are needed, indicating that the list is now sorted.
The name "bubble" sort comes from the fact that during each pass, the largest (or smallest, depending on the implementation) element "bubbles" to the top of the list, 
similar to the way bubbles rise to the surface of water. Bubble sort has a time complexity of O(n^2), making it inefficient for large lists. 
However, it is a good algorithm to learn and understand the basic principles of sorting. */

const example1 = [100, 32, 45, 87, 12, 54, 76, 98, 23, 99, 13, 46, 28];

function bubbleSort(unsortedArray) {
  const newArr = [...unsortedArray];
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] > newArr[j]) {
        let val = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = val;
      }
    }
  }
  console.log(newArr);
  return newArr;
}

bubbleSort(example1);

module.exports = bubbleSort;

// Chat CPT solution

function bubbleSort2(arr) {
  const newArr = [...arr];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < newArr.length - 1; i++) {
      if (newArr[i] > newArr[i + 1]) {
        let temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return newArr;
}
