const { crawlPage } = require("./crawl.js");

function main() {
  if (process.argv.length < 3) {
    console.log("no website provided");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("too many command line args");
    process.exit(1);
  }
  const baseURL = process.argv[2];
  console.log(`Starting crawl of ${baseURL}`);
  crawlPage(baseURL);
}

main();

// node --no-warnings main.js || Here --no-warnings is a "FLAG" to tell the node interpreter to not give any warnings message