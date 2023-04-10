const multiplesOf3and5 = require("./euler1");

describe("multiplesOf3and5", () => {
  test("return value of 10 should be a number", () => {
    expect(typeof multiplesOf3and5()).toBe("number");
  });

  test("returns 543 when input is 49", () => {
    expect(multiplesOf3and5(49)).toBe(543);
  });

  test("returns 233168 when input is 1000", () => {
    expect(multiplesOf3and5(1000)).toBe(233168);
  });

  test("returns 16687353 when input is 8456", () => {
    expect(multiplesOf3and5(8456)).toBe(16687353);
  });

  test("returns 89301183 when input is 19564", () => {
    expect(multiplesOf3and5(19564)).toBe(89301183);
  });

  test("Should not be a string", () => {
    expect(typeof multiplesOf3and5()).not.toBe("string");
  });
});
