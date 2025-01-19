/*          THREE STEPS: FOR DOING TEST DRIVEN DEVELOPMENT
    1. Stub out the function you want to test.
    2. Write the test for the function.
    3. Go back and actually implement kind of the meat of the function.
 */

    // Step 1
function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    return `${urlObj.hostname}${urlObj.pathname}`;
}

module.exports = {
    normalizeURL
}