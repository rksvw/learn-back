const {normalizeURL} = require('./crawl.js');
const {test, expect} = require('@jest/globals')

// First Input is the name of test : Second Input is the function
test('normalizeURL', () => {
    const input = '';
    const actual = normalizeURL(input);
    const expected = '';
    expect(actual).toEqual(expected);
})