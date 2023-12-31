const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (parsedUrl.pathname === "/profile") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Your Profile");
  } else if (parsedUrl.pathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Here you can read about us");
  } else if (parsedUrl.pathname === "/xz") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Last one");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 sorry, can`t find this page");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
