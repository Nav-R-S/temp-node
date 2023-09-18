const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("backshot bhai");
  }
  if (req.url === "/about") {
    res.end("Here is a history not ;)");
  }
  res.end(`<h1>yoyohoneysingh</h1>
    <p>Page not found</p>
    <hr>
    <a href="/">back home</a>`);
});

server.listen(5000);
