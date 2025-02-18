const fs = require('fs');
const zlib = require('zlib');
const file =  process.argv[2];

fs.createReadStream(file).pipe(zlib.createGzip()).pipe(fs.createWriteStream(file + '.gz'));

// const { Transform } = require("stream");

// const commaSplitter = new Transform({
//   readableObjectMode: true,

//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().trim().split(","));
//     console.log(chunk.toString().trim().split(','));
//     callback();
//   },
// });

// const arrayToObject = new Transform({
//   readableObjectMode: true,
//   writableObjectMode: true,

//   transform(chunk, encoding, callback) {
//     const obj = {};
//     for (let i = 0; i < chunk.length; i += 2) {
//       obj[chunk[i]] = chunk[i + 1];
//     }
//     this.push(obj);
//     callback();
//   },
// });

// const objectToString = new Transform({
//   writableObjectMode: true,

//   transform(chunk, encoding, callback) {
//     this.push(JSON.stringify(chunk) + "\n");
//     callback();
//   },
// });
// process.stdin
//   .pipe(commaSplitter)
//   .pipe(arrayToObject)
//   .pipe(objectToString)
//   .pipe(process.stdout);
