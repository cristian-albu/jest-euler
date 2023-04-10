const largestPrimeFactor = require("./euler3");

describe("largestPrimeFactor", () => {
  test("Should return a number", () => {
    expect(typeof largestPrimeFactor(2)).toBe("number");
  });

  test("should return 2", () => {
    expect(largestPrimeFactor(2)).toBe(2);
  });
  test("should return 2", () => {
    expect(largestPrimeFactor(3)).toBe(3);
  });
  test("should return 2", () => {
    expect(largestPrimeFactor(5)).toBe(5);
  });
  test("should return 2", () => {
    expect(largestPrimeFactor(7)).toBe(7);
  });
  test("should return 2", () => {
    expect(largestPrimeFactor(8)).toBe(2);
  });

  test("should return 2", () => {
    expect(largestPrimeFactor(13195)).toBe(29);
  });

  test("should return 2", () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
  });

  test("Should not be a string", () => {
    expect(typeof largestPrimeFactor(2)).not.toBe("string");
  });
});
