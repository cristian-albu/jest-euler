const fiboEvenSum = require("./euler2");

describe("fiboEvenSum", () => {
  test("returns a number when input is 10", () => {
    expect(typeof fiboEvenSum(10)).toBe("number");
  });

  test("returns an even value", () => {
    expect(fiboEvenSum(10) % 2).toBe(0);
  });

  test("sums the even-valued Fibonacci numbers when input is 8", () => {
    expect(fiboEvenSum(8)).toBe(10);
  });

  test("sums the even-valued Fibonacci numbers when input is 10", () => {
    expect(fiboEvenSum(10)).toBe(10);
  });

  test("sums the even-valued Fibonacci numbers when input is 34", () => {
    expect(fiboEvenSum(34)).toBe(44);
  });

  test("sums the even-valued Fibonacci numbers when input is 60", () => {
    expect(fiboEvenSum(60)).toBe(44);
  });

  test("sums the even-valued Fibonacci numbers when input is 1000", () => {
    expect(fiboEvenSum(1000)).toBe(798);
  });

  test("sums the even-valued Fibonacci numbers when input is 100000", () => {
    expect(fiboEvenSum(100000)).toBe(60696);
  });

  test("sums the even-valued Fibonacci numbers when input is 4000000", () => {
    expect(fiboEvenSum(4000000)).toBe(4613732);
  });

  test("Should not be a string", () => {
    expect(typeof fiboEvenSum()).not.toBe("string");
  });
});
