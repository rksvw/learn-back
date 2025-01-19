const { sortPages } = require("./report.js");
const { test, expect } = require("@jest/globals");

// First Input is the name of test : Second Input is the function
test("sortPages 2 pages", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev": 3,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});

test("sortPages 5 pages", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev": 3,
    "https://wagslane.dev/path2": 3,
    "https://wagslane.dev/path3": 4,
    "https://wagslane.dev/path4": 5,
    "https://wagslane.dev/path5": 6,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wagslane.dev/path5", 6],
    ["https://wagslane.dev/path4", 5],
    ["https://wagslane.dev/path3", 4],
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path2", 3],
    ["https://wagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});
