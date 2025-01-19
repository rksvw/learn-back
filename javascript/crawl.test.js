const {normalizeURL} = require('./crawl.js');
const {test, expect} = require('@jest/globals')

// First Input is the name of test : Second Input is the function
test('normalizeURL strip protocol', () => {
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);
})