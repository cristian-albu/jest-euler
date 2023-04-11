const largestPalindromeProduct = require("./euler4");

describe("", () => {
  test("Should return a number", () => {
    expect(typeof largestPalindromeProduct(2)).toBe("number");
  });

  test("Should return 9009", () => {
    expect(largestPalindromeProduct(2)).toBe(9009);
  });

  test("Should return 906609", () => {
    expect(largestPalindromeProduct(3)).toBe(906609);
  });
});
