const quickSort = require("./quick-sort");

describe("insertionSort", () => {
  test("should sort an array of numbers in ascending order", () => {
    const unsortedArray = [5, 2, 9, 1, 5];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 5, 5, 9]);
  });

  test("should return an empty array if an empty array is passed in", () => {
    const unsortedArray = [];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([]);
  });

  test("should not mutate the original array", () => {
    const unsortedArray = [4, 3, 2, 1];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4]);
    expect(unsortedArray).toEqual([4, 3, 2, 1]);
  });
});
