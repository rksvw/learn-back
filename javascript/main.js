const { crawlPage } = require("./crawl.js");
const { printReport } = require("./report.js");

async function main() {
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
  const pages = await crawlPage(baseURL, baseURL, {});

  //   for (const page of Object.entries(pages)) {
  //     // Here Object.entries is making and Object to iterate in a loop
  //     // Because you can't iterate Object as an Array Data Structure
  //     console.log(page);
  //   }

  printReport(pages);
}

main();

// node --no-warnings main.js || Here --no-warnings is a "FLAG" to tell the node interpreter to not give any warnings message
