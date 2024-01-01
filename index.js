import http from "http";
const port = process.env.PORT || 3000;

// Функція обробки маршрутів
function handleRequest(req, res) {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Home Page");
  } else if (url === "/profile") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end('Your Profile".');
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end('Here you can read about us".');
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Сторінку не знайдено");
  }
}

// Створити сервер
const server = http.createServer(handleRequest);

// Слухати на заданому порті
server.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
