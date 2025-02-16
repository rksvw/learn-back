const path = require('path');

console.log(path.sep);
const filePath = path.join('/folder', 'sub', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const resolve = path.resolve(__dirname, 'folder', 'sub', 'text.txt');
console.log(resolve);