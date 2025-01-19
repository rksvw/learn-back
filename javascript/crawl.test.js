const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

// First Input is the name of test : Second Input is the function
test("normalizeURL strip protocol", () => {
  const input = "https://blog.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip protocol trailing slash", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://BLOG.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip http", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

// devDependencies are used by the only developers
// dependencies are work by once the server is working and in production

test("getURLsFromHTML", () => {
  const inputHTMLBody = `
    <html>
        <head>
            <title>Get URLs From HTML</title>
        </head>
        <body>
            <a href="https://blog.boot.dev/" >
            Boot.dev Blog
            </a>
        </body>
    </html>`;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML absolute", () => {
  const inputHTMLBody = `
      <html>
          <head>
              <title>Get URLs From HTML</title>
          </head>
          <body>
              <a href="https://blog.boot.dev/path/" >
              Boot.dev Blog
              </a>
          </body>
      </html>`;
  const inputBaseURL = "https://blog.boot.dev/path/";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML relative", () => {
  const inputHTMLBody = `
      <html>
          <head>
              <title>Get URLs From HTML</title>
          </head>
          <body>
              <a href="/path/" >
              Boot.dev Blog
              </a>
          </body>
      </html>`;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML both", () => {
  const inputHTMLBody = `
      <html>
          <head>
              <title>Get URLs From HTML</title>
          </head>
          <body>
              <a href="/path1/" >
              Boot.dev Blog Path One
              </a>
              <a href="https://blog.boot.dev/path2/" >
              Boot.dev Blog Path Two
              </a>
              <a href="/path3/" >
              Boot.dev Blog Path Three
              </a>
              <a href="https://blog.boot.dev/path4/" >
              Boot.dev Blog Path Four
              </a>
          </body>
      </html>`;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [
    "https://blog.boot.dev/path1/",
    "https://blog.boot.dev/path2/",
    "https://blog.boot.dev/path3/",
    "https://blog.boot.dev/path4/",
  ];
  expect(actual).toEqual(expected);
});
