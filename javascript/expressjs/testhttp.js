const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end(`Here is my about page`);
  }
  res.end(`
    <h1>Hello World</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/home"><button type="submit">Back to Home</button></a>`);
});

server.listen(5030, () => {
  console.log(`Server is running on port 5030`);
});